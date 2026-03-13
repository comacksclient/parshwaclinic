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
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: customEase } }
};

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const ForPatientsPage = () => {
    const journeyPhases = [
        {
            num: "01",
            title: "Comprehensive Consultation",
            desc: "Your journey begins with a relaxed conversation. Our expert team will review your medical history, discuss your dental goals, and address any anxiety you might have. We believe in listening first, treating second.",
            icon: <MessageCircle className="w-6 h-6" />
        },
        {
            num: "02",
            title: "Digital Diagnostics",
            desc: "We don't guess; we verify. Using advanced low-radiation digital X-rays and intraoral cameras, we capture a complete picture of your oral health right here in our Sabarmati clinic. No need to visit external diagnostic centers.",
            icon: <Scan className="w-6 h-6" />
        },
        {
            num: "03",
            title: "The Expert Diagnosis",
            desc: "Dr. Shrenik Shah performs a detailed visual inspection of your teeth, gums, and jaw alignment. Combining this with your scans, we create a transparent diagnosis that identifies root causes, not just symptoms.",
            icon: <Stethoscope className="w-6 h-6" />
        },
        {
            num: "04",
            title: "Transparent Care Plan",
            desc: "No hidden fees or surprise procedures. We walk you through your personalized treatment plan, explaining timelines, costs, and insurance coverage before we begin. You stay in control of your dental health decisions.",
            icon: <FileText className="w-6 h-6" />
        }
    ];

    const financeFeatures = [
        "Itemized treatment plans with zero hidden charges",
        "Pre-approved insurance estimates before we start",
        "Flexible EMI options for major procedures"
    ];

    return (
        <main className="min-h-screen bg-[#FAFAFC] pt-32 pb-24 relative overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#AEE9F5]/30 rounded-full blur-[150px] pointer-events-none -translate-y-1/2 translate-x-1/3" />

            <div className="max-w-[1550px] mx-auto px-4 md:px-8 relative z-10">

                {/* Hero Section */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                    className="max-w-4xl mb-32"
                >
                    <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-100 text-[#1A1A1A] text-[10px] md:text-xs font-black tracking-[0.2em] uppercase mb-8 shadow-sm">
                        <ShieldCheck className="w-3.5 h-3.5 text-[#AEE9F5]" /> For Patients
                    </motion.div>

                    <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl lg:text-8xl font-black text-[#1A1A1A] tracking-tighter leading-[0.88] mb-8">
                        Everything you need <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-300">to feel confident.</span>
                    </motion.h1>

                    <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-gray-500 leading-relaxed font-medium mb-10 max-w-2xl">
                        Your initial appointment at Parshwa Dental Clinic in Sabarmati is designed to be smooth, informative, and completely personalized. Here’s what to expect before, during, and after your visit.
                    </motion.p>

                    <motion.div variants={fadeInUp}>
                        <Link href="tel:+919328820346">
                            <button className="inline-flex items-center justify-center bg-[#1A1A1A] text-white rounded-full px-10 py-5 text-lg font-black tracking-wide hover:bg-[#AEE9F5] hover:text-[#1A1A1A] transition-all duration-500 shadow-[0_20px_40px_rgba(26,26,26,0.15)] group">
                                <Phone className="w-5 h-5 mr-3 group-hover:animate-bounce" /> Call to Schedule
                            </button>
                        </Link>
                    </motion.div>
                </motion.div>

                {/* The Patient Journey Section */}
                <div className="mb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: customEase }}
                        className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8"
                    >
                        <div>
                            <span className="text-[#AEE9F5] font-black tracking-[0.2em] uppercase text-xs mb-4 block">The Patient Journey</span>
                            <h2 className="text-4xl md:text-6xl font-black text-[#1A1A1A] tracking-tighter leading-[0.9]">
                                What to expect during <br />
                                <span className="text-gray-400">your first visit.</span>
                            </h2>
                        </div>
                        <div className="flex items-center gap-4 bg-white px-6 py-4 rounded-full border border-gray-100 shadow-sm">
                            <Clock className="w-5 h-5 text-[#AEE9F5]" />
                            <span className="font-black text-[#1A1A1A] tracking-tight">Avg. First Visit: 45 Mins</span>
                        </div>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="grid grid-cols-1 md:grid-cols-2 gap-6"
                    >
                        {journeyPhases.map((phase, idx) => (
                            <motion.div key={idx} variants={fadeInUp} className="bg-white rounded-[48px] p-10 md:p-14 border border-gray-100 relative overflow-hidden group hover:shadow-[0_40px_80px_rgba(0,0,0,0.04)] transition-all duration-700 cursor-default">
                                {/* Massive Background Number */}
                                <div className="absolute -bottom-10 -right-4 text-[180px] font-black text-gray-50 leading-none group-hover:text-[#AEE9F5]/10 transition-colors duration-700 pointer-events-none select-none">
                                    {phase.num}
                                </div>

                                <div className="relative z-10">
                                    <div className="w-16 h-16 rounded-[24px] bg-[#FAFAFC] border border-gray-100 flex items-center justify-center text-[#1A1A1A] mb-8 group-hover:bg-[#1A1A1A] group-hover:text-white transition-colors duration-500 shadow-sm">
                                        {phase.icon}
                                    </div>
                                    <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#AEE9F5] mb-3 block">Phase {phase.num}</span>
                                    <h3 className="text-3xl font-black text-[#1A1A1A] mb-4 tracking-tight">{phase.title}</h3>
                                    <p className="text-gray-500 text-lg font-medium leading-relaxed max-w-sm">
                                        {phase.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Financial Peace of Mind (Dark Section) */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: customEase }}
                    className="bg-[#1A1A1A] rounded-[60px] lg:rounded-[80px] p-8 md:p-16 lg:p-24 relative overflow-hidden shadow-2xl mb-12"
                >
                    {/* Dark Mode Internal Glows */}
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#AEE9F5]/10 rounded-full blur-[120px] pointer-events-none" />

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 relative z-10 items-center">

                        {/* Left Side: Finance Copy */}
                        <div className="lg:col-span-6">
                            <span className="text-[#AEE9F5] font-black tracking-[0.2em] uppercase text-xs mb-6 block">Financial Peace of Mind</span>
                            <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.9] mb-8">
                                Transparent pricing. <br />
                                <span className="text-gray-500">No surprises.</span>
                            </h2>
                            <p className="text-gray-400 text-lg md:text-xl font-medium leading-relaxed mb-10 max-w-md">
                                We believe premium dental care in Sabarmati should be accessible and clear. Before any treatment begins, you will receive a complete breakdown of costs, insurance coverage, and payment options. <span className="text-white font-bold">No hidden fees, ever.</span>
                            </p>

                            <ul className="space-y-4 mb-12">
                                {financeFeatures.map((feat, i) => (
                                    <li key={i} className="flex items-start gap-4 text-gray-300 font-medium text-lg">
                                        <CheckCircle2 className="w-6 h-6 text-[#AEE9F5] shrink-0" />
                                        <span>{feat}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Right Side: Payment Options Card */}
                        <div className="lg:col-span-6">
                            <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-[40px] p-10 md:p-12 shadow-2xl relative">
                                <div className="w-14 h-14 rounded-[20px] bg-[#AEE9F5] flex items-center justify-center text-[#1A1A1A] mb-8 shadow-[0_10px_20px_rgba(174,233,245,0.2)]">
                                    <CreditCard className="w-6 h-6" />
                                </div>

                                <h3 className="text-3xl font-black text-white mb-2">Payment Options</h3>
                                <p className="text-[#AEE9F5] font-black tracking-[0.2em] uppercase text-[10px] mb-10">Secure & Flexible</p>

                                <div className="space-y-6">
                                    <div className="flex items-center justify-between border-b border-white/10 pb-6 group">
                                        <span className="text-xl font-bold text-gray-300 group-hover:text-white transition-colors">Direct Insurance Billing</span>
                                        <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-[#AEE9F5] transition-colors" />
                                    </div>
                                    <div className="flex items-center justify-between border-b border-white/10 pb-6 group">
                                        <span className="text-xl font-bold text-gray-300 group-hover:text-white transition-colors">0% Interest EMI Options</span>
                                        <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-[#AEE9F5] transition-colors" />
                                    </div>
                                    <div className="flex items-center justify-between group">
                                        <span className="text-xl font-bold text-gray-300 group-hover:text-white transition-colors">Membership Plan Discounts</span>
                                        <ArrowRight className="w-5 h-5 text-gray-500 group-hover:text-[#AEE9F5] transition-colors" />
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </motion.div>

                {/* Bottom CTA Banner */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: customEase }}
                    className="bg-white rounded-[48px] p-8 md:p-12 border border-gray-100 shadow-[0_20px_40px_rgba(0,0,0,0.03)] flex flex-col md:flex-row items-center justify-between gap-8"
                >
                    <div>
                        <h3 className="text-3xl font-black text-[#1A1A1A] tracking-tight mb-2">Need a Quote?</h3>
                        <p className="text-gray-500 font-medium text-lg max-w-xl">
                            Send us your referral notes or treatment plan and we'll provide a written estimate within 24 hours.
                        </p>
                    </div>
                    <Link href="/contact" className="shrink-0">
                        <button className="inline-flex items-center justify-center bg-[#AEE9F5] text-[#1A1A1A] rounded-full px-8 py-5 text-lg font-black hover:bg-[#1A1A1A] hover:text-white transition-all duration-500 shadow-[0_10px_20px_rgba(174,233,245,0.3)] group">
                            Get Estimate
                            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </button>
                    </Link>
                </motion.div>

            </div>
        </main>
    );
};

export default ForPatientsPage;