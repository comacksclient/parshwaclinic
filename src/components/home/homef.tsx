'use client';

import React, { useState, useEffect } from 'react';
import { ArrowUpRight, ArrowRight, Minus, Plus, Activity, User, Heart, Star, Quote, Clock } from 'lucide-react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import Link from 'next/link';

// Stable, optimized images
const HERO_IMG = "/image.png"; // Use a clean, wide clinic/smile shot
const SRV_IMPLANT = "https://www.perio.org/wp-content/uploads/2020/02/dental-implant.png";
const SRV_WHITENING = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9FGc-A0Dru-QTFvuYatq5h37MvELFNf4dqg&s";
const SRV_BRACES = "https://radiantdentalcare.in/wp-content/uploads/2024/04/What-is-Orthodontic-Treatment-min.png";

// High-end Animation Variants
const customEase = [0.22, 1, 0.36, 1] as any;

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: customEase } }
};

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const Reveal = ({ children }: { children: React.ReactNode }) => (
    <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeInUp}
    >
        {children}
    </motion.div>
);

const Marquee = () => {
    const text = "• Advanced Implantology • Cosmetic Dentistry • Invisible Aligners • Painless Root Canals • Pediatric Care ";
    return (
        /* absolute positioning ensures it doesn't push the content above it */
        /* We use overflow-x-hidden on the parent to prevent the rotated scale from causing horizontal scroll */
        <div className="absolute bottom-0 left-0 w-full bg-[#1A1A1A] text-[#AEE9F5] py-4 overflow-hidden rotate-[-1deg] translate-y-2 scale-105 z-30 shadow-2xl">
            <motion.div
                animate={{ x: [0, -1000] }}
                transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
                className="whitespace-nowrap flex text-sm md:text-base font-black uppercase tracking-[0.2em]"
            >
                <span className="flex-shrink-0">{text}</span>
                <span className="flex-shrink-0">{text}</span>
                <span className="flex-shrink-0">{text}</span>
                <span className="flex-shrink-0">{text}</span>
            </motion.div>
        </div>
    );
};

export function Hero() {
    const [mounted, setMounted] = useState(false);
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        setMounted(true);
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="relative w-full min-h-[100svh] lg:min-h-screen flex items-center overflow-hidden bg-white">

            {/* BACKGROUND LAYER - 100% CLEAR ON MOBILE */}
            <div className="absolute inset-0 z-0">
                <img
                    src={HERO_IMG}
                    alt="Parshwa Dental"
                    className="w-full h-full object-cover object-center"
                />
                {/* Only shows on Desktop to protect text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-white via-white/20 to-transparent z-10 hidden lg:block" />
            </div>

            <div className="max-w-[1400px] w-full mx-auto px-6 md:px-10 relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:items-center">

                    {/* CONTENT COLUMN */}
                    <div className="lg:col-span-7 xl:col-span-6">
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={staggerContainer}
                            className="flex flex-col"
                        >
                            <motion.h1 variants={fadeInUp} className="text-[2.6rem] sm:text-5xl md:text-6xl lg:text-[4.2rem] xl:text-[4.8rem] font-black text-slate-900 leading-[1.05] tracking-tighter mb-6">
                                Your Perfect Smile <br />
                                <span className="">Starts Here.</span>
                            </motion.h1>

                            <motion.p variants={fadeInUp} className="text-slate-600/80 text-base md:text-lg max-w-md leading-relaxed font-semibold mb-10">
                                World-class dental care in Sabarmati. Experience painless treatments with our expert specialists.
                            </motion.p>

                            {/* BENTO ACTION AREA */}
                            <motion.div variants={fadeInUp} className="grid grid-cols-2 gap-4 max-w-lg">
                                <div className="bg-white/40 backdrop-blur-xl p-5 rounded-[32px] flex flex-col justify-between min-h-[160px] border border-white shadow-xl shadow-sky-900/5">
                                    <div>
                                        <div className="w-8 h-8 bg-[#a9eaf7] rounded-full flex items-center justify-center mb-4">
                                            <Clock className="w-4 h-4 text-slate-800" />
                                        </div>
                                        <h3 className="font-bold text-[10px] uppercase tracking-widest text-slate-400">Schedule</h3>
                                        <div className="flex flex-col mt-1">
                                            <span className="font-bold text-sm text-slate-900">Mon — Sat</span>
                                            <span className="font-bold text-xs text-[#a9eaf7]">10AM — 9PM</span>
                                        </div>
                                    </div>
                                    {mounted && (
                                        <div className="text-[9px] font-black text-slate-400 uppercase tracking-tighter opacity-60">
                                            {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                        </div>
                                    )}
                                </div>

                                <Link href="/book-appointment" className="group bg-slate-900 p-5 rounded-[32px] flex flex-col items-center justify-center min-h-[160px] transition-all duration-500 relative overflow-hidden shadow-2xl">
                                    <div className="w-12 h-12 bg-[#a9eaf7] rounded-full flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform">
                                        <ArrowUpRight className="w-6 h-6 text-slate-900" />
                                    </div>
                                    <span className="text-[10px] font-black text-white text-center uppercase tracking-[0.2em] leading-tight">
                                        Book <br /> Appointment
                                    </span>
                                </Link>
                            </motion.div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* PLACED AT THE ABSOLUTE BOTTOM */}
            <Marquee />
        </section>
    );
}

function AboutSnippet() {
    return (
        <section className="py-24 px-6 md:px-10 bg-white">
            <div className="max-w-[1400px] mx-auto">
                <Reveal>
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 mb-20">
                        <div>
                            <div className="text-teal-600 text-[10px] font-bold uppercase tracking-widest mb-4">Why Choose Us</div>
                            <h2 className="text-4xl md:text-5xl font-bold text-[#131c15] leading-tight tracking-tight">
                                About Parshwa Dental Clinic
                            </h2>
                        </div>
                        <div className="flex items-end">
                            <p className="text-[#131c15]/60 text-lg leading-relaxed">
                                We believe that a healthy smile is a gateway to confidence. Our team uses the latest technology to provide top-quality care in a welcoming environment.
                            </p>
                        </div>
                    </div>
                </Reveal>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {[
                        { icon: Activity, title: "Modern Tech", desc: "State-of-the-art equipment for precision.", color: "bg-[#131c15]" },
                        { icon: User, title: "Expert Doctors", desc: "Years of specialized dental expertise.", color: "bg-[#131c15]" },
                        { icon: Heart, title: "Painless Care", desc: "Gentle techniques for your comfort.", color: "bg-[#a9eaf7]" },
                        { icon: Star, title: "Personalized", desc: "Unique plans for your unique smile.", color: "bg-[#131c15]" }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -10 }}
                            className={`p-8 rounded-[32px] border border-gray-100 ${item.color === 'bg-[#a9eaf7]' ? 'bg-[#a9eaf7]' : 'bg-white'} transition-all shadow-sm hover:shadow-xl`}
                        >
                            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center mb-6 ${item.color === 'bg-[#a9eaf7]' ? 'bg-white text-[#131c15]' : 'bg-[#131c15] text-white'}`}>
                                <item.icon size={20} />
                            </div>
                            <h4 className="font-bold text-[#131c15] text-xl mb-3">{item.title}</h4>
                            <p className="text-sm text-[#131c15]/60 leading-relaxed">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function Services() {
    const services = [
        { title: "Cosmetic Dentistry", subtitle: "Teeth Whitening, Veneers", img: SRV_WHITENING },
        { title: "Implants & Prosthetics", subtitle: "Dental Implants, Dentures", img: SRV_IMPLANT },
        { title: "Restorative", subtitle: "Fillings, Crowns, Bridges", img: SRV_BRACES }
    ];

    return (
        <section className="py-16 md:py-24 px-4 sm:px-6 md:px-8 bg-[#f4f5f7]">
            <div className="max-w-[1400px] mx-auto">
                <div className="flex flex-col lg:flex-row justify-between items-start gap-8 mb-12">
                    <div>
                        <div className="inline-block border border-gray-200 bg-white text-[#131c15]/60 text-[9px] sm:text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-6">
                            Our Services
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#131c15] tracking-tight">
                            Dental Services <br />
                            for Every Need
                        </h2>
                    </div>
                    <div className="max-w-md lg:pt-10">
                        <p className="text-[#131c15]/70 mb-6 text-sm sm:text-base leading-relaxed">
                            From preventive care to advanced cosmetic and restorative treatments, we provide a full range of dental services tailored to your needs.
                        </p>
                        <Link href="/services">
                            <button className="bg-[#131c15] text-white rounded-full px-6 py-3 text-sm font-bold hover:bg-[#a9eaf7] hover:text-[#131c15] transition-colors">
                                Explore All Services
                            </button>
                        </Link>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                    {services.map((srv, i) => (
                        <div key={i} className="bg-white rounded-[24px] p-6 flex flex-col items-center text-center group cursor-pointer border border-gray-100 hover:border-gray-200 transition-colors">
                            <div className="w-24 h-24 sm:w-32 sm:h-32 mb-6">
                                <img src={srv.img} alt={srv.title} className="w-full h-full object-contain" />
                            </div>
                            <h3 className="text-lg font-bold text-[#131c15] mb-2">{srv.title}</h3>
                            <p className="text-sm text-[#131c15]/60">{srv.subtitle}</p>
                            <div className="mt-6 w-8 h-8 rounded-full bg-[#f4f5f7] text-[#131c15] flex items-center justify-center group-hover:bg-[#a9eaf7] transition-colors">
                                <ArrowRight className="w-4 h-4" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// Swapped Doctors for Testimonials
function Testimonials() {
    const reviews = [
        { name: "Mayuri Suthar", text: "Till date I found no issues in my new bridge. I truly recommend for his treatment. For me he is one of the God gift." },
        { name: "Mahi Shah", text: "We live in USA but always wait for our India visit to have our treatment done with Dr. Shrenik and Dr. Dimple - Excellent treatment." },
        { name: "Krunal Shah", text: "Excellent. Very good treatment by highly experienced doctor. The clinic is spotless and the staff is very welcoming." }
    ];

    return (
        <section className="py-16 md:py-24 px-4 sm:px-6 md:px-8 bg-white">
            <div className="max-w-[1400px] mx-auto">
                <div className="text-center mb-12 md:mb-16">
                    <div className="inline-block border border-gray-200 text-[#131c15]/60 text-[9px] sm:text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-6">
                        Patient Stories
                    </div>
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#131c15] tracking-tight">
                        Real Smiles, <br /> Real Feedback.
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                    {reviews.map((review, idx) => (
                        <div key={idx} className="bg-[#f4f5f7] p-8 rounded-[24px] flex flex-col justify-between">
                            <div>
                                <Quote className="w-8 h-8 text-[#a9eaf7] mb-6 opacity-50" />
                                <p className="text-[#131c15] font-medium leading-relaxed mb-8">
                                    "{review.text}"
                                </p>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-10 h-10 rounded-full bg-[#131c15] flex items-center justify-center text-white font-bold text-sm">
                                    {review.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-bold text-[#131c15] text-sm">{review.name}</h4>
                                    <div className="flex gap-0.5 mt-1">
                                        {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-[#a9eaf7] text-[#a9eaf7]" />)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function FAQ() {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);
    const faqs = [
        {
            question: "How often should I visit the dentist?",
            answer: "For most patients, we recommend a check-up and professional cleaning every six months. However, depending on your specific oral health needs, we might suggest more frequent visits to ensure optimal care."
        },
        {
            question: "What payment methods and insurance do you accept?",
            answer: "We accept all major credit cards, UPI, and digital wallets. We also partner with leading dental insurance providers to ensure a seamless billing experience. Our team can help you verify your coverage before your visit."
        },
        {
            question: "Do you offer emergency dental services?",
            answer: "Yes, we prioritize dental emergencies. If you're experiencing severe pain, a broken tooth, or any urgent dental issue, please call us immediately. We aim to see emergency cases on the same day."
        },
        {
            question: "What should I expect during my first visit?",
            answer: "Your first visit includes a comprehensive oral exam, digital X-rays if needed, and a detailed consultation. We'll discuss your goals, address any concerns, and create a personalized treatment plan specifically for your smile."
        }
    ];

    return (
        <section className="py-16 md:py-24 px-4 sm:px-6 md:px-8 bg-[#f4f5f7]">
            <div className="max-w-[800px] mx-auto">
                <div className="text-center mb-12">
                    <h2 className="text-3xl sm:text-4xl font-bold text-[#131c15] tracking-tight mb-4">
                        Frequently Asked Questions
                    </h2>
                </div>
                <div className="space-y-3">
                    {faqs.map((faq, index) => (
                        <div key={index} className="bg-white rounded-[20px] overflow-hidden border border-gray-100">
                            <button onClick={() => setActiveIndex(activeIndex === index ? null : index)} className="w-full px-6 py-5 flex items-center justify-between text-left">
                                <span className="font-bold text-[#131c15] text-sm sm:text-base pr-4">{faq.question}</span>
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ${activeIndex === index ? 'bg-[#a9eaf7] text-[#131c15]' : 'bg-[#f4f5f7] text-[#131c15]'}`}>
                                    {activeIndex === index ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                                </div>
                            </button>
                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: "auto", opacity: 1 }} exit={{ height: 0, opacity: 0 }}>
                                        <div className="px-6 pb-6 text-sm text-[#131c15]/70">
                                            {faq.answer}
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

// Added Final CTA Section Below FAQ
function FinalCTA() {
    return (
        <section className="py-16 md:py-24 px-4 sm:px-6 md:px-8 bg-white">
            <div className="max-w-[1400px] mx-auto">
                <div className="bg-[#131c15] rounded-[32px] md:rounded-[40px] p-8 md:p-16 lg:p-20 text-center relative overflow-hidden">
                    {/* Subtle design accent */}
                    <div className="absolute -right-20 -top-20 w-64 h-64 border-[40px] border-white/5 rounded-full pointer-events-none" />

                    <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center">
                        <div className="inline-block border border-white/20 text-[#a9eaf7] text-[9px] sm:text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-6">
                            Immediate Openings Available
                        </div>
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-6">
                            Ready to transform <br /> your smile?
                        </h2>
                        <p className="text-white/70 text-sm md:text-lg font-medium mb-10 leading-relaxed px-4 md:px-0">
                            Join the Parshwa Dental Clinic family today. Experience painless, precision-driven dentistry in Sabarmati.
                        </p>
                        <Link href="/book-appointment" className="w-full sm:w-auto">
                            <button className="w-full sm:w-auto inline-flex items-center justify-center bg-[#a9eaf7] text-[#131c15] rounded-full px-8 py-4 text-sm md:text-base font-bold hover:bg-white transition-colors duration-300 gap-2">
                                Book Your Appointment
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
}

export const HomeFile = () => {
    return (
        <main className="flex flex-col bg-white overflow-x-hidden font-sans">
            <Hero />
            <AboutSnippet />
            <Services />
            <Testimonials />
            <FAQ />
            <FinalCTA />
        </main>
    );
}