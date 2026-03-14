'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import {
    Phone,
    Clock,
    MessageCircle,
    Scan,
    Stethoscope,
    FileText,
    ShieldCheck,
    CreditCard,
    ArrowRight,
    CheckCircle2
} from 'lucide-react';
import Link from 'next/link';

// High-end Animation Variants
const customEase = [0.22, 1, 0.36, 1] as any;

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: customEase } }
};

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const ForPatientsPage = () => {
    const journeyPhases = [
        {
            num: "01",
            title: "Comprehensive Consultation",
            desc: "Your journey begins with a relaxed conversation. Our expert team will review your medical history, discuss your dental goals, and address any anxiety you might have.",
            icon: <MessageCircle className="w-5 h-5 md:w-6 md:h-6" />
        },
        {
            num: "02",
            title: "Digital Diagnostics",
            desc: "We don't guess; we verify. Using advanced low-radiation digital X-rays and intraoral cameras, we capture a complete picture of your oral health right here in our Sabarmati clinic.",
            icon: <Scan className="w-5 h-5 md:w-6 md:h-6" />
        },
        {
            num: "03",
            title: "The Expert Diagnosis",
            desc: "Dr. Shrenik Shah performs a detailed visual inspection of your teeth, gums, and jaw alignment. Combining this with your scans, we create a transparent diagnosis.",
            icon: <Stethoscope className="w-5 h-5 md:w-6 md:h-6" />
        },
        {
            num: "04",
            title: "Transparent Care Plan",
            desc: "No hidden fees or surprise procedures. We walk you through your personalized treatment plan, explaining timelines, costs, and insurance coverage before we begin.",
            icon: <FileText className="w-5 h-5 md:w-6 md:h-6" />
        }
    ];

    const financeFeatures = [
        "Itemized treatment plans with zero hidden charges",
        "Pre-approved insurance estimates before we start",
        "Flexible EMI options for major procedures"
    ];

    return (
        <main className="min-h-screen bg-[#f4f5f7] pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">

                {/* Hero Section */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                    className="max-w-3xl mb-20 md:mb-28"
                >
                    <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 border border-gray-200 bg-white text-[#131c15]/60 text-[9px] sm:text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-6">
                        <ShieldCheck className="w-3 h-3 text-[#a9eaf7]" /> For Patients
                    </motion.div>

                    <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-bold text-[#131c15] tracking-tight leading-[1.05] mb-6">
                        Everything you need <br />
                        to feel confident.
                    </motion.h1>

                    <motion.p variants={fadeInUp} className="text-base md:text-lg text-[#131c15]/70 leading-relaxed font-medium mb-8">
                        Your initial appointment at Parshwa Dental Clinic in Sabarmati is designed to be smooth, informative, and completely personalized. Here’s what to expect before, during, and after your visit.
                    </motion.p>

                    <motion.div variants={fadeInUp}>
                        <Link href="tel:+919328820346" className="inline-block w-full sm:w-auto">
                            <button className="w-full sm:w-auto inline-flex items-center justify-center bg-[#131c15] text-white rounded-full px-8 py-4 text-sm md:text-base font-bold hover:bg-[#2a3b2e] transition-colors gap-3">
                                <Phone className="w-4 h-4" /> Call to Schedule
                            </button>
                        </Link>
                    </motion.div>
                </motion.div>

                {/* The Patient Journey Section */}
                <div className="mb-24 md:mb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: customEase }}
                        className="flex flex-col lg:flex-row justify-between items-start lg:items-end mb-10 md:mb-16 gap-6"
                    >
                        <div>
                            <div className="inline-block border border-gray-200 text-[#131c15]/60 text-[9px] sm:text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-4">
                                The Patient Journey
                            </div>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#131c15] tracking-tight leading-[1.1]">
                                What to expect during <br className="hidden sm:block" />
                                your first visit.
                            </h2>
                        </div>
                        <div className="flex items-center gap-3 bg-white px-5 py-3 rounded-full border border-gray-100 shadow-sm w-full lg:w-auto justify-center lg:justify-start">
                            <Clock className="w-4 h-4 text-[#a9eaf7]" />
                            <span className="font-bold text-sm text-[#131c15]">Avg. First Visit: 45 Mins</span>
                        </div>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6"
                    >
                        {journeyPhases.map((phase, idx) => (
                            <motion.div key={idx} variants={fadeInUp} className="bg-white rounded-[24px] md:rounded-[32px] p-6 md:p-8 lg:p-10 border border-gray-100 hover:border-gray-200 transition-colors flex flex-col group">

                                <div className="flex justify-between items-start mb-8 md:mb-10">
                                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#f4f5f7] flex items-center justify-center text-[#131c15] group-hover:bg-[#a9eaf7] transition-colors duration-300">
                                        {phase.icon}
                                    </div>
                                    <div className="bg-[#f4f5f7] text-[#131c15]/60 px-3 py-1 rounded-full text-xs font-bold">
                                        Phase {phase.num}
                                    </div>
                                </div>

                                <div className="mt-auto">
                                    <h3 className="text-xl md:text-2xl font-bold text-[#131c15] mb-3 tracking-tight">{phase.title}</h3>
                                    <p className="text-[#131c15]/60 text-sm md:text-base font-medium leading-relaxed">
                                        {phase.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Financial Peace of Mind (Dark Section Bento) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: customEase }}
                    className="bg-[#131c15] rounded-[32px] md:rounded-[40px] p-6 md:p-12 lg:p-16 mb-6 md:mb-10"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">

                        {/* Left Side: Finance Copy */}
                        <div className="lg:col-span-6 xl:col-span-7">
                            <div className="inline-block border border-white/20 text-white/60 text-[9px] sm:text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-6">
                                Financial Peace of Mind
                            </div>
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.1] mb-6">
                                Transparent pricing. <br />
                                No surprises.
                            </h2>
                            <p className="text-white/70 text-sm md:text-lg font-medium leading-relaxed mb-10 max-w-lg">
                                We believe premium dental care in Sabarmati should be accessible and clear. Before any treatment begins, you will receive a complete breakdown of costs. <span className="text-white font-bold">No hidden fees, ever.</span>
                            </p>

                            <ul className="space-y-4">
                                {financeFeatures.map((feat, i) => (
                                    <li key={i} className="flex items-start gap-4 text-white/80 font-medium text-sm md:text-base">
                                        <div className="w-6 h-6 rounded-full bg-[#a9eaf7]/20 flex items-center justify-center shrink-0">
                                            <CheckCircle2 className="w-3.5 h-3.5 text-[#a9eaf7]" />
                                        </div>
                                        <span>{feat}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Right Side: Bright Payment Options Card */}
                        <div className="lg:col-span-6 xl:col-span-5">
                            <div className="bg-[#f4f5f7] rounded-[24px] md:rounded-[32px] p-6 md:p-10">
                                <div className="w-12 h-12 rounded-full bg-[#a9eaf7] flex items-center justify-center text-[#131c15] mb-6">
                                    <CreditCard className="w-5 h-5" />
                                </div>

                                <h3 className="text-2xl md:text-3xl font-bold text-[#131c15] mb-1">Payment Options</h3>
                                <p className="text-[#131c15]/60 font-bold uppercase tracking-widest text-[10px] mb-8">Secure & Flexible</p>

                                <div className="space-y-5">
                                    <div className="flex items-center justify-between border-b border-gray-200 pb-5 group cursor-pointer">
                                        <span className="text-sm md:text-base font-bold text-[#131c15]/80 group-hover:text-[#131c15] transition-colors">Direct Insurance Billing</span>
                                        <ArrowRight className="w-4 h-4 text-[#131c15]/40 group-hover:text-[#131c15] transition-colors" />
                                    </div>
                                    <div className="flex items-center justify-between border-b border-gray-200 pb-5 group cursor-pointer">
                                        <span className="text-sm md:text-base font-bold text-[#131c15]/80 group-hover:text-[#131c15] transition-colors">0% Interest EMI Options</span>
                                        <ArrowRight className="w-4 h-4 text-[#131c15]/40 group-hover:text-[#131c15] transition-colors" />
                                    </div>
                                    <div className="flex items-center justify-between group cursor-pointer">
                                        <span className="text-sm md:text-base font-bold text-[#131c15]/80 group-hover:text-[#131c15] transition-colors">Membership Plan Discounts</span>
                                        <ArrowRight className="w-4 h-4 text-[#131c15]/40 group-hover:text-[#131c15] transition-colors" />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </motion.div>

                {/* Bottom Quote Banner */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: customEase }}
                    className="bg-white rounded-[24px] md:rounded-[32px] p-6 md:p-10 border border-gray-100 flex flex-col md:flex-row items-center justify-between gap-6 text-center md:text-left"
                >
                    <div>
                        <h3 className="text-2xl font-bold text-[#131c15] tracking-tight mb-2">Need a Quote?</h3>
                        <p className="text-[#131c15]/60 font-medium text-sm md:text-base max-w-xl">
                            Send us your referral notes or treatment plan and we'll provide a written estimate within 24 hours.
                        </p>
                    </div>
                    <Link href="/contact" className="w-full md:w-auto shrink-0">
                        <button className="w-full md:w-auto inline-flex items-center justify-center bg-[#a9eaf7] text-[#131c15] rounded-full px-8 py-4 text-sm font-bold hover:bg-[#8cdcf0] transition-colors gap-2">
                            Get Estimate
                            <ArrowRight className="w-4 h-4" />
                        </button>
                    </Link>
                </motion.div>

            </div>
        </main>
    );
};

export default ForPatientsPage;