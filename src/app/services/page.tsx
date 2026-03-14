'use client';

import React from 'react';
import { motion, Variants } from 'framer-motion';
import {
    Activity,
    ArrowRight,
    Sparkles,
    Smile,
    Shield,
    Stethoscope,
    Baby,
    Syringe,
    ArrowUpRight
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

const ServicesPage = () => {
    const services = [
        {
            title: "General Dentistry",
            desc: "Routine check-ups, professional cleaning, and preventive care to keep your smile exceptionally healthy.",
            icon: <Stethoscope className="w-5 h-5 md:w-6 md:h-6" />
        },
        {
            title: "Cosmetic Dentistry",
            desc: "Teeth whitening, custom veneers, and aesthetic bonding to design your absolute perfect smile.",
            icon: <Sparkles className="w-5 h-5 md:w-6 md:h-6" />
        },
        {
            title: "Dental Implants",
            desc: "Permanent, natural-looking tooth replacements that restore full function and undeniable confidence.",
            icon: <Shield className="w-5 h-5 md:w-6 md:h-6" />
        },
        {
            title: "Orthodontics",
            desc: "Clear aligners and modern braces for perfectly straight teeth at absolutely any age.",
            icon: <Smile className="w-5 h-5 md:w-6 md:h-6" />
        },
        {
            title: "Pediatric Dentistry",
            desc: "Gentle, anxiety-free, and fun dental care tailored specifically for children's developing teeth.",
            icon: <Baby className="w-5 h-5 md:w-6 md:h-6" />
        },
        {
            title: "Root Canals",
            desc: "Advanced endodontic treatments utilizing modern tech to save damaged teeth completely painlessly.",
            icon: <Syringe className="w-5 h-5 md:w-6 md:h-6" />
        }
    ];

    return (
        <main className="min-h-screen bg-[#f4f5f7] pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">

                {/* Header Section */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                    className="max-w-3xl mb-16 md:mb-24"
                >
                    <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 border border-gray-200 bg-white text-[#131c15]/60 text-[9px] sm:text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-6">
                        <Activity className="w-3 h-3 text-[#a9eaf7]" /> Our Expertise
                    </motion.div>

                    <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-bold text-[#131c15] tracking-tight leading-[1.05] mb-6">
                        Pioneering <br />
                        Treatments.
                    </motion.h1>

                    <motion.p variants={fadeInUp} className="text-base md:text-lg text-[#131c15]/70 leading-relaxed font-medium">
                        As the highest-rated clinic in Sabarmati, we provide a full spectrum of dental treatments utilizing world-class technology in a relaxing environment.
                    </motion.p>
                </motion.div>

                {/* Services Grid (Clean Bento Layout) */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-24 md:mb-32"
                >
                    {services.map((srv, idx) => (
                        <motion.div
                            key={idx}
                            variants={fadeInUp}
                            className="bg-white rounded-[24px] md:rounded-[32px] p-6 md:p-8 lg:p-10 border border-gray-100 hover:border-gray-200 hover:shadow-sm transition-all duration-300 group flex flex-col cursor-pointer"
                        >
                            <div className="flex justify-between items-start mb-10 md:mb-12">
                                <div className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#f4f5f7] border border-gray-100 flex items-center justify-center text-[#131c15] group-hover:bg-[#a9eaf7] group-hover:border-[#a9eaf7] transition-colors duration-500">
                                    {srv.icon}
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="text-xs font-bold text-[#131c15]/30">
                                        0{idx + 1}
                                    </span>
                                    <ArrowUpRight className="w-4 h-4 text-[#131c15]/0 group-hover:text-[#131c15] transition-colors duration-300" />
                                </div>
                            </div>

                            <div className="mt-auto">
                                <h3 className="text-xl md:text-2xl font-bold text-[#131c15] mb-3 tracking-tight">
                                    {srv.title}
                                </h3>
                                <p className="text-[#131c15]/60 text-sm md:text-base font-medium leading-relaxed">
                                    {srv.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Production CTA Section (Flat, High-Contrast) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: customEase }}
                    className="bg-[#131c15] rounded-[32px] md:rounded-[40px] p-8 md:p-16 lg:p-20 flex flex-col md:flex-row items-center justify-between gap-10 md:gap-12 relative overflow-hidden"
                >
                    {/* Subtle aesthetic accent instead of blurry glows */}
                    <div className="absolute -right-20 -bottom-20 w-64 h-64 border-[40px] border-white/5 rounded-full pointer-events-none" />

                    <div className="max-w-2xl relative z-10 text-center md:text-left">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-4 md:mb-6">
                            Not sure what <br className="hidden md:block" /> you need?
                        </h2>
                        <p className="text-white/70 text-sm md:text-lg font-medium leading-relaxed">
                            Book a consultation. Our expert team will evaluate your oral health and create a custom treatment plan just for you.
                        </p>
                    </div>

                    <div className="relative z-10 shrink-0 w-full md:w-auto">
                        <Link href="/book-appointment" className="block">
                            <button className="w-full md:w-auto inline-flex items-center justify-center bg-[#a9eaf7] text-[#131c15] rounded-full px-8 py-4 text-sm md:text-base font-bold hover:bg-white transition-colors duration-300 gap-2">
                                Get Evaluated
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </Link>
                    </div>
                </motion.div>

            </div>
        </main>
    );
};

export default ServicesPage;