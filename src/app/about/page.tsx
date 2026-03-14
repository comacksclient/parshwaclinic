'use client';

import React from 'react';
import { Star, ShieldCheck, Heart, Award, ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
import Link from 'next/link';

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

const AboutPage = () => {
    const stats = [
        { icon: <Award className="w-5 h-5" />, value: "2004", label: "Year Established" },
        { icon: <Heart className="w-5 h-5" />, value: "10k+", label: "Happy Smiles" },
        { icon: <ShieldCheck className="w-5 h-5" />, value: "100%", label: "Safe & Painless" },
        { icon: <Star className="w-5 h-5" />, value: "5.0", label: "Patient Rating" },
    ];

    const team = [
        {
            name: "Dr. Shrenik Shah",
            role: "Principal Dental Surgeon",
            img: "https://images.unsplash.com/photo-1607378119679-1b10e82b3704?auto=format&fit=crop&q=80&w=600",
            focus: "Advanced Implantology & Surgery",
            bio: "With over two decades of clinical excellence, Dr. Shrenik Shah leads Parshwa Dental Clinic with a vision for painless, precision-driven dentistry. He specializes in complex full-mouth rehabilitations and advanced implantology.",
            credentials: ["Over 20+ Years Experience", "Specialist in Dental Implants", "Advanced Digital Dentistry Certified"]
        },
        {
            name: "Dr. Dimple Shah",
            role: "Principal Dental Surgeon",
            img: "https://images.unsplash.com/photo-1675526607070-f5cbd71dde92?auto=format&fit=crop&q=80&w=600",
            focus: "Cosmetic & Aesthetic Dentistry",
            bio: "Dr. Dimple Shah brings an artist's touch to the clinic. Her expertise lies in smile designing, veneers, and painless root canals. She is dedicated to eliminating dental anxiety and making every visit comfortable.",
            credentials: ["Cosmetic Smile Designer", "Painless Root Canal Expert", "Pediatric & Family Care Focus"]
        }
    ];

    return (
        <main className="min-h-screen bg-[#f4f5f7] pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden">

            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">

                {/* Hero Section */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                    className="max-w-3xl mb-16 md:mb-24"
                >
                    <motion.div variants={fadeInUp} className="inline-block border border-gray-200 bg-white text-[#131c15]/60 text-[9px] sm:text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-6">
                        The Parshwa Legacy
                    </motion.div>

                    <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#131c15] leading-[1.1] tracking-tight mb-6">
                        Passionate About <br />
                        Your Perfect Smile.
                    </motion.h1>

                    <motion.p variants={fadeInUp} className="text-[#131c15]/70 text-base md:text-lg leading-relaxed font-medium">
                        Located centrally in Sabarmati, Chandkheda, Parshwa Dental Clinic is a premier destination for top-tier dental care. Under the expert guidance of Dr. Shrenik Shah and Dr. Dimple Shah, we blend years of clinical expertise with advanced technology.
                    </motion.p>
                </motion.div>

                {/* Stats / Trust Section (Bento Style) */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-24 md:mb-32"
                >
                    {stats.map((stat, idx) => (
                        <motion.div key={idx} variants={fadeInUp} className="bg-white rounded-[24px] p-6 md:p-8 border border-gray-100 flex flex-col hover:border-gray-200 transition-colors">
                            <div className="w-10 h-10 rounded-full bg-[#131c15] flex items-center justify-center text-white mb-6">
                                {stat.icon}
                            </div>
                            <h3 className="text-3xl md:text-4xl font-bold text-[#131c15] mb-1">{stat.value}</h3>
                            <p className="text-[#131c15]/60 font-medium text-xs uppercase tracking-widest">{stat.label}</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Editorial Team Section - Perfectly Constrained Images */}
                <div className="mb-24 md:mb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, ease: customEase }}
                        className="mb-12 md:mb-16"
                    >
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#131c15] tracking-tight leading-[1.1]">
                            Meet the <br />
                            Masters.
                        </h2>
                    </motion.div>

                    <div className="flex flex-col gap-16 md:gap-24">
                        {team.map((doc, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.8, ease: customEase }}
                                // Alternating layout
                                className={`flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12 lg:gap-16 ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                            >
                                {/* Left Side (Image) - Explicitly constrained width so it never gets too big */}
                                <div className="w-full sm:w-[80%] md:w-[280px] lg:w-[320px] shrink-0">
                                    <div className="bg-[#e2e8f0] rounded-[24px] aspect-[4/5] relative overflow-hidden">
                                        <img
                                            src={doc.img}
                                            alt={doc.name}
                                            className="absolute inset-0 w-full h-full object-cover"
                                        />
                                    </div>
                                </div>

                                {/* Right Side (Bio & Details) */}
                                <div className="flex-1 flex flex-col justify-center pt-2">
                                    <div className="inline-block px-3 py-1 bg-[#a9eaf7] text-[#131c15] rounded-full font-bold text-[10px] uppercase tracking-widest w-fit mb-4">
                                        {doc.role}
                                    </div>
                                    <h3 className="text-2xl md:text-4xl font-bold text-[#131c15] tracking-tight mb-2">
                                        {doc.name}
                                    </h3>
                                    <p className="text-[#131c15]/60 font-bold text-sm md:text-base mb-6">
                                        {doc.focus}
                                    </p>
                                    <p className="text-[#131c15]/70 text-sm md:text-base leading-relaxed font-medium mb-8 max-w-2xl">
                                        {doc.bio}
                                    </p>

                                    {/* Credentials List */}
                                    <ul className="space-y-3">
                                        {doc.credentials.map((cred, i) => (
                                            <li key={i} className="flex items-center gap-3 text-[#131c15] font-medium text-sm md:text-base">
                                                <div className="w-5 h-5 rounded-full bg-[#131c15] flex items-center justify-center shrink-0">
                                                    <CheckCircle2 className="w-3 h-3 text-white" />
                                                </div>
                                                {cred}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Final CTA (Bento Box Style) */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: customEase }}
                    className="bg-[#131c15] rounded-[32px] md:rounded-[40px] p-8 md:p-16 lg:p-20 text-center relative overflow-hidden"
                >
                    <div className="relative z-10 max-w-2xl mx-auto">
                        <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.1] mb-6">
                            Experience the <br /> difference today.
                        </h2>
                        <p className="text-white/70 text-sm md:text-lg font-medium mb-10 leading-relaxed px-4 md:px-0">
                            From routine check-ups to advanced cosmetic procedures, our clinic is equipped to handle all your dental needs.
                        </p>
                        <Link href="/book-appointment" className="block w-full sm:w-auto">
                            <button className="w-full sm:w-auto bg-[#a9eaf7] text-[#131c15] rounded-full px-8 py-4 text-sm md:text-base font-bold hover:bg-white transition-colors flex items-center justify-center gap-2 mx-auto">
                                Book an Appointment
                                <ArrowRight className="w-4 h-4" />
                            </button>
                        </Link>
                    </div>
                </motion.div>

            </div>
        </main>
    );
};

export default AboutPage;