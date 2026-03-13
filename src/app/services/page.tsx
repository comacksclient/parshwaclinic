'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import {
    Activity,
    ArrowRight,
    ArrowUpRight,
    Sparkles,
    Smile,
    Shield,
    Stethoscope,
    Baby,
    Syringe
} from 'lucide-react';
import Link from 'next/link';

// High-end Animation Variants
const customEase = [0.22, 1, 0.36, 1] as any;

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: customEase } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

const ServicesPage = () => {
    const services = [
        {
            title: "General Dentistry",
            desc: "Routine check-ups, professional cleaning, and preventive care to keep your smile exceptionally healthy.",
            icon: <Stethoscope className="w-6 h-6" />
        },
        {
            title: "Cosmetic Dentistry",
            desc: "Teeth whitening, custom veneers, and aesthetic bonding to design your absolute perfect smile.",
            icon: <Sparkles className="w-6 h-6" />
        },
        {
            title: "Dental Implants",
            desc: "Permanent, natural-looking tooth replacements that restore full function and undeniable confidence.",
            icon: <Shield className="w-6 h-6" />
        },
        {
            title: "Orthodontics",
            desc: "Clear aligners and modern braces for perfectly straight teeth at absolutely any age.",
            icon: <Smile className="w-6 h-6" />
        },
        {
            title: "Pediatric Dentistry",
            desc: "Gentle, anxiety-free, and fun dental care tailored specifically for children's developing teeth.",
            icon: <Baby className="w-6 h-6" />
        },
        {
            title: "Root Canals",
            desc: "Advanced endodontic treatments utilizing modern tech to save damaged teeth completely painlessly.",
            icon: <Syringe className="w-6 h-6" />
        }
    ];

    return (
        <main className="min-h-screen bg-white pt-32 pb-24 overflow-hidden relative">
            {/* Ambient Background Glow */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#AEE9F5]/20 rounded-full blur-[150px] pointer-events-none -z-10 -translate-y-1/2 translate-x-1/3" />

            <div className="max-w-[1550px] mx-auto px-4 md:px-8 relative z-10">

                {/* Header Section */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                    className="mb-24 max-w-4xl"
                >
                    <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-100 text-[#1A1A1A] text-[10px] md:text-xs font-black tracking-[0.2em] uppercase mb-8 shadow-sm">
                        <Activity className="w-3.5 h-3.5 text-[#AEE9F5]" /> Our Expertise
                    </motion.div>

                    <motion.h1 variants={fadeInUp} className="text-6xl md:text-8xl font-black text-[#1A1A1A] tracking-tighter leading-[0.88] mb-8">
                        Pioneering <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-200">Treatments.</span>
                    </motion.h1>

                    <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-gray-500 max-w-2xl leading-relaxed font-medium">
                        As the highest-rated clinic in Sabarmati, we provide a full spectrum of dental treatments utilizing world-class technology.
                    </motion.p>
                </motion.div>

                {/* Services Grid */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-32"
                >
                    {services.map((srv, idx) => (
                        <motion.div
                            key={idx}
                            variants={fadeInUp}
                            className="bg-[#FAFAFC] rounded-[48px] p-10 lg:p-12 border border-gray-100 hover:shadow-[0_40px_80px_rgba(0,0,0,0.04)] hover:bg-white transition-all duration-700 ease-[0.22,1,0.36,1] group relative overflow-hidden cursor-pointer"
                        >
                            {/* Hover Gradient Reveal */}
                            <div className="absolute top-0 right-0 w-40 h-40 bg-[#AEE9F5]/20 rounded-full blur-[50px] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none" />

                            <div className="flex justify-between items-start mb-16 relative z-10">
                                <div className="w-16 h-16 rounded-[24px] bg-white border border-gray-100 flex items-center justify-center text-[#1A1A1A] group-hover:bg-[#1A1A1A] group-hover:text-white group-hover:rotate-[10deg] group-hover:scale-110 transition-all duration-500 shadow-sm">
                                    {srv.icon}
                                </div>
                                <div className="w-12 h-12 rounded-full bg-gray-50 flex items-center justify-center border border-gray-100 opacity-0 -translate-y-4 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                    <ArrowUpRight className="w-5 h-5 text-[#1A1A1A]" />
                                </div>
                            </div>

                            <div className="relative z-10">
                                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#AEE9F5] mb-4 block">
                                    — 0{idx + 1}
                                </span>
                                <h3 className="text-3xl font-black text-[#1A1A1A] mb-4 tracking-tight group-hover:translate-x-2 transition-transform duration-500">
                                    {srv.title}
                                </h3>
                                <p className="text-gray-500 text-lg font-medium leading-relaxed">
                                    {srv.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Production CTA Section */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: customEase }}
                    className="bg-[#1A1A1A] rounded-[60px] p-12 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12 relative overflow-hidden shadow-2xl"
                >
                    <div className="absolute -bottom-40 -right-40 w-[500px] h-[500px] bg-[#AEE9F5]/20 rounded-full blur-[120px] pointer-events-none" />

                    <div className="max-w-2xl relative z-10">
                        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter leading-[0.9] mb-6">
                            Not sure what <br /> you need?
                        </h2>
                        <p className="text-gray-400 text-xl font-medium">
                            Book a consultation. Our expert team will evaluate your oral health and create a custom treatment plan just for you.
                        </p>
                    </div>

                    <div className="relative z-10 shrink-0">
                        <Link href="/book-appointment">
                            <button className="inline-flex items-center justify-center bg-[#AEE9F5] text-[#1A1A1A] rounded-full px-10 py-6 text-xl font-black hover:bg-white hover:scale-105 transition-all duration-500 shadow-[0_20px_50px_rgba(174,233,245,0.2)] group">
                                Get Evaluated
                                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-500" />
                            </button>
                        </Link>
                    </div>
                </motion.div>

            </div>
        </main>
    );
};

export default ServicesPage;