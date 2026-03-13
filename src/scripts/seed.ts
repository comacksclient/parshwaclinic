import { Document } from "@langchain/core/documents";
import { PineconeStore } from "@langchain/pinecone";
import { Pinecone } from "@pinecone-database/pinecone";
import { OpenAIEmbeddings } from "@langchain/openai";
import * as dotenv from "dotenv";
import * as path from "path";
import * as fs from "fs";


function findEnvFile(): string {
    let currentDir = __dirname;


    for (let i = 0; i < 5; i++) {
        const envPath = path.join(currentDir, '.env');
        const envLocalPath = path.join(currentDir, '.env.local');
        if (fs.existsSync(envLocalPath)) {

            return envLocalPath;
        }
        if (fs.existsSync(envPath)) {

            return envPath;
        }

        currentDir = path.join(currentDir, '..');
    }

    throw new Error('Could not find .env or .env.local file');
}


const envPath = findEnvFile();
dotenv.config({ path: envPath });

const getEnv = (name: string): string => {
    const value = process.env[name];
    if (!value) {
        throw new Error(`Missing environment variable: ${name}`);
    }
    return value;
};

const PINECONE_API_KEY = getEnv("PINECONE_API_KEY");
const PINECONE_INDEX_NAME = getEnv("PINECONE_INDEX_NAME");
const OPENAI_API_KEY = getEnv("OPENAI_API_KEY");

const documentData = [
    {
        name: "services_offered.txt",
        content: `Q: What services does your dental clinic offer?  
Category: Services  
A: Parshwa Dental Clinic offers comprehensive dental care including general dentistry, cosmetic dentistry (teeth whitening, veneers), orthodontic treatments, dental implants, root canal treatment, wisdom tooth extraction, dentures, teeth cleaning, and preventive dental care.`
    },
    {
        name: "clinic_hours.txt",
        content: `Q: What are your clinic hours?  
Category: Clinic Info  
A: Our clinic is open Monday to Saturday from 9:00 AM to 1:00 PM and 5:30 PM to 8:30 PM. The clinic remains closed on Sundays.`
    },
    {
        name: "clinic_location.txt",
        content: `Q: Where is your clinic located?  
Category: Clinic Info  
A: Parshwa Dental Clinic is located at 108, Mahavir Chamber, Chowk, Hira Jain Society, Ram Nagar, Sabarmati, Ahmedabad, Gujarat 380005, India.`
    },
    {
        name: "appointment_policy.txt",
        content: `Q: Do I need an appointment, or can I walk in?  
Category: Booking  
A: We recommend booking an appointment to reduce waiting time, but walk-in patients are also welcome depending on availability.`
    },
    {
        name: "how_to_book.txt",
        content: `Q: How can I book an appointment?  
Category: Booking  
A: You can book an appointment by calling or WhatsApping us at +91 9328820346. Our staff will help you schedule a convenient time for your visit.`
    },
    {
        name: "child_friendly.txt",
        content: `Q: Is your clinic child-friendly?  
Category: Services  
A: Yes, Parshwa Dental Clinic provides dental care for children and ensures a comfortable and friendly environment for young patients.`
    },
    {
        name: "aftercare_extraction.txt",
        content: `Q: What should I do after a tooth extraction?  
Category: Aftercare  
A: After extraction, bite gently on gauze for 30–60 minutes, avoid spitting or using straws for 24 hours, eat soft foods, and follow the aftercare instructions provided by the dentist.`
    },
    {
        name: "followup_visit.txt",
        content: `Q: Will I need a follow-up visit?  
Category: Aftercare  
A: For treatments like root canals, implants, or extractions, we may schedule a follow-up visit within 7–14 days to ensure proper healing.`
    },
    {
        name: "eating_after_treatment.txt",
        content: `Q: Can I eat after a cleaning or filling?  
Category: Aftercare  
A: After teeth cleaning you can eat immediately. After fillings, it is recommended to wait about 1–2 hours, especially if anesthesia was used.`
    },
    {
        name: "pain_after_procedure.txt",
        content: `Q: What if I experience pain after a procedure?  
Category: Aftercare  
A: Mild discomfort after dental procedures is normal. If you experience severe pain, swelling, or fever, please contact our clinic immediately for further evaluation.`
    },
    {
        name: "missed_appointment.txt",
        content: `Q: What if I miss my appointment?  
Category: Booking  
A: If you miss your appointment, please call or message us as soon as possible and we will reschedule your visit at a convenient time.`
    },
    {
        name: "emergency_care.txt",
        content: `Q: Do you offer emergency dental care?  
Category: Emergency  
A: Yes, Parshwa Dental Clinic provides emergency dental care for severe tooth pain, swelling, broken teeth, or dental trauma. Please call us immediately for urgent assistance.`
    },
    {
        name: "contact_info.txt",
        content: `Q: How can I contact you?  
Category: Contact  
A: You can call or WhatsApp us at +91 9328820346 or email us at shrenik_shah16@yahoo.com for appointments or inquiries.`
    },
    {
        name: "service_cost.txt",
        content: `Q: How much do your services cost?  
Category: Pricing  
A: Treatment costs depend on the type of dental procedure required. After consultation, we provide a detailed treatment plan and cost estimate.`
    },
    {
        name: "insurance_accepted.txt",
        content: `Q: Do you accept insurance?  
Category: Insurance  
A: Yes, Parshwa Dental Clinic supports government healthcare programs such as Ayushman Bharat (PMJAY) and CGHS for eligible patients.`
    },
    {
        name: "installments.txt",
        content: `Q: Can I pay in installments?  
Category: Payments  
A: For certain advanced treatments, payment options may be discussed with the clinic staff to make treatments more manageable.`
    },
    {
        name: "quotes_before_treatment.txt",
        content: `Q: Do you provide quotes before treatment?  
Category: Pricing  
A: Yes, after diagnosis we provide a clear treatment plan along with cost estimates before starting the procedure.`
    },
    {
        name: "team_info.txt",
        content: `Q: Who are your dentists?  
Category: Team  
A: Parshwa Dental Clinic is managed by Dr. Shrenik Shah and Dr. Dimple Shah, experienced dental surgeons dedicated to providing high-quality dental care using modern techniques.`
    },
    {
        name: "nervous_patients.txt",
        content: `Q: Do your dentists have experience with nervous patients?  
Category: Team  
A: Yes, our dentists are experienced in treating anxious patients and focus on gentle, comfortable, and patient-friendly dental care.`
    },
    {
        name: "equipment.txt",
        content: `Q: What equipment do you use?  
Category: Clinic Info  
A: Our clinic uses modern dental equipment including digital diagnostic tools, advanced sterilization systems, and comfortable dental treatment units.`
    },
    {
        name: "hygiene.txt",
        content: `Q: Is your clinic hygienic and sterilized?  
Category: Hygiene  
A: Yes, we follow strict sterilization and infection control protocols to ensure a safe and hygienic environment for all patients.`
    },
    {
        name: "teeth_cleaning.txt",
        content: `Q: What is the process for teeth cleaning?  
Category: Treatments  
A: Professional teeth cleaning removes plaque and tartar using ultrasonic scalers followed by polishing. The procedure is painless and usually takes around 30–45 minutes.`
    },
    {
        name: "root_canal.txt",
        content: `Q: Is root canal treatment painful?  
Category: Treatments  
A: Root canal treatment is performed under local anesthesia and is generally painless with modern dental techniques.`
    },
    {
        name: "invisalign.txt",
        content: `Q: Do you offer Invisalign or clear aligners?  
Category: Orthodontics  
A: Yes, we provide clear aligner treatments that help straighten teeth discreetly without traditional braces.`
    },
    {
        name: "teeth_whitening.txt",
        content: `Q: How long does teeth whitening last?  
Category: Cosmetic  
A: Professional teeth whitening results can last from 6 months to 2 years depending on oral habits and diet.`
    },
    {
        name: "wisdom_tooth_extraction.txt",
        content: `Q: Do you do wisdom tooth extractions?  
Category: Oral Surgery  
A: Yes, we perform both simple and surgical wisdom tooth extractions depending on the complexity of the case.`
    },
    {
        name: "dental_implants.txt",
        content: `Q: What are dental implants, and are they right for me?  
Category: Implants  
A: Dental implants are titanium posts placed in the jawbone to support artificial teeth. They are a long-lasting solution for replacing missing teeth.`
    },
    {
        name: "checkup_frequency.txt",
        content: `Q: How often should I get a dental check-up?  
Category: Preventative Care  
A: It is recommended to visit the dentist every 6 months for a dental check-up and professional cleaning.`
    }
];
async function main() {
    console.log(" Starting seeding process with OpenAI Embeddings...");

    try {
        const pinecone = new Pinecone({ apiKey: PINECONE_API_KEY });


        const indexList = await pinecone.listIndexes();
        const indexExists = indexList.indexes?.some(index => index.name === PINECONE_INDEX_NAME);

        if (!indexExists) {

            await pinecone.createIndex({
                name: PINECONE_INDEX_NAME,
                dimension: 1536,
                metric: "cosine",
                spec: { serverless: { cloud: 'aws', region: 'us-east-1' } }
            });
            console.log(`Index created. Waiting for it to be ready...`);
            await new Promise(resolve => setTimeout(resolve, 60000));
        } else {
            console.log("error ")
        }

        const pineconeIndex = pinecone.Index(PINECONE_INDEX_NAME);


        const embeddings = new OpenAIEmbeddings({
            model: "text-embedding-3-small",
            openAIApiKey: OPENAI_API_KEY,
        });

        const documents = documentData.map(doc => new Document({
            pageContent: doc.content,
            metadata: { source: doc.name },
        }));

        console.log(" Uploading documents to Pinecone...");
        await PineconeStore.fromDocuments(documents, embeddings, {
            pineconeIndex,
            namespace: "dental-info",
        });

        console.log("seeding complete! All documents uploaded successfully.");
    } catch (error) {
        console.error(" Error during seeding:", error);
        process.exit(1);
    }
}

main();