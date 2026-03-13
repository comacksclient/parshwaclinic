'use client';

import React from 'react';
import { ArrowUpRight, Star, ShieldCheck, Heart, Award, ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion, Variants } from 'framer-motion';
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

const AboutPage = () => {
    const stats = [
        { icon: <Award className="w-6 h-6" />, value: "2004", label: "Year Established" },
        { icon: <Heart className="w-6 h-6" />, value: "10k+", label: "Happy Smiles" },
        { icon: <ShieldCheck className="w-6 h-6" />, value: "100%", label: "Safe & Painless" },
        { icon: <Star className="w-6 h-6" />, value: "5.0", label: "Patient Rating" },
    ];

    const team = [
        {
            name: "Dr. Shrenik Shah",
            role: "Principal Dental Surgeon",
            img: "/",
            focus: "Advanced Implantology & Surgery",
            bio: "With over two decades of clinical excellence, Dr. Shrenik Shah leads Parshwa Dental Clinic with a vision for painless, precision-driven dentistry. He specializes in complex full-mouth rehabilitations and advanced implantology.",
            credentials: ["Over 20+ Years Experience", "Specialist in Dental Implants", "Advanced Digital Dentistry Certified"]
        },
        {
            name: "Dr. Dimple Shah",
            role: "Principal Dental Surgeon",
            img: "/",
            focus: "Cosmetic & Aesthetic Dentistry",
            bio: "Dr. Dimple Shah brings an artist's touch to the clinic. Her expertise lies in smile designing, veneers, and painless root canals. She is dedicated to eliminating dental anxiety and making every visit comfortable.",
            credentials: ["Cosmetic Smile Designer", "Painless Root Canal Expert", "Pediatric & Family Care Focus"]
        }
    ];

    return (
        <main className="min-h-screen bg-[#FAFAFC] pt-32 pb-24 overflow-hidden relative">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#AEE9F5]/30 rounded-full blur-[150px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
            <div className="absolute top-[40%] left-0 w-[600px] h-[600px] bg-purple-100/30 rounded-full blur-[150px] pointer-events-none -translate-x-1/2" />

            {/* Changed from 1550px to 1400px to keep the layout tight and focused */}
            <div className="max-w-[1400px] mx-auto px-4 md:px-8 relative z-10">

                {/* Hero Section */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                    className="max-w-4xl mb-24"
                >
                    <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-100 text-[#1A1A1A] text-[10px] md:text-xs font-black tracking-[0.2em] uppercase mb-8 shadow-sm">
                        <Star className="w-3.5 h-3.5 text-[#AEE9F5]" /> The Parshwa Legacy
                    </motion.div>

                    <motion.h1 variants={fadeInUp} className="text-6xl md:text-8xl font-black text-[#1A1A1A] tracking-tighter leading-[0.88] mb-8">
                        Passionate About <br />
                        Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1A1A1A] via-gray-400 to-[#AEE9F5] animate-gradient-x">Perfect Smile.</span>
                    </motion.h1>

                    <motion.p variants={fadeInUp} className="text-xl md:text-2xl text-gray-500 leading-relaxed font-medium">
                        Located centrally in Sabarmati, Chandkheda, Parshwa Dental Clinic is a premier destination for top-tier dental care. Under the expert guidance of Dr. Shrenik Shah and Dr. Dimple Shah, we blend years of clinical expertise with advanced technology.
                    </motion.p>
                </motion.div>

                {/* Stats / Trust Section */}
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={staggerContainer}
                    className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-32"
                >
                    {stats.map((stat, idx) => (
                        <motion.div key={idx} variants={fadeInUp} className="bg-white rounded-[32px] md:rounded-[40px] p-6 md:p-10 border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-500 group">
                            <div className="w-12 h-12 md:w-14 md:h-14 rounded-2xl bg-[#FAFAFC] flex items-center justify-center text-[#1A1A1A] mb-6 border border-gray-100 group-hover:bg-[#AEE9F5] group-hover:border-transparent transition-colors duration-500">
                                {stat.icon}
                            </div>
                            <h3 className="text-3xl md:text-5xl font-black text-[#1A1A1A] mb-2 tracking-tighter">{stat.value}</h3>
                            <p className="text-gray-400 font-bold uppercase text-[9px] md:text-xs tracking-[0.2em]">{stat.label}</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Editorial Team Section - Completely Redesigned */}
                <div className="mb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: customEase }}
                        className="mb-16"
                    >
                        <h2 className="text-5xl md:text-7xl font-black text-[#1A1A1A] tracking-tighter leading-[0.9]">
                            Meet the <br />
                            <span className="text-gray-400 font-medium">Masters.</span>
                        </h2>
                    </motion.div>

                    <div className="flex flex-col gap-20 md:gap-32">
                        {team.map((doc, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 1, ease: customEase }}
                                // Reverses the layout for every even index to create an alternating zig-zag pattern
                                className={`flex flex-col md:flex-row items-center gap-10 lg:gap-20 group ${idx % 2 !== 0 ? 'md:flex-row-reverse' : ''}`}
                            >
                                {/* Left Side (Image) - Constrained Width to prevent massive scaling */}
                                <div className="w-full md:w-5/12 lg:w-[40%] shrink-0">
                                    <div className="bg-white rounded-[48px] md:rounded-[64px] aspect-[4/5] relative overflow-hidden border-[8px] border-white shadow-[0_30px_60px_rgba(0,0,0,0.08)]">
                                        <img
                                            src={doc.img}
                                            alt={doc.name}
                                            className="absolute inset-0 w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-[0.22,1,0.36,1]"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-700" />

                                        <div className="absolute bottom-6 right-6 w-14 h-14 bg-white rounded-full flex items-center justify-center text-[#1A1A1A] shadow-xl group-hover:rotate-[45deg] group-hover:bg-[#AEE9F5] transition-all duration-700">
                                            <ArrowUpRight className="w-6 h-6" />
                                        </div>
                                    </div>
                                </div>

                                {/* Right Side (Bio & Details) */}
                                <div className="w-full md:w-7/12 lg:w-[60%] flex flex-col justify-center">
                                    <div className="inline-block px-3 py-1.5 bg-[#AEE9F5]/20 text-[#1A1A1A] rounded-md font-black uppercase text-[10px] tracking-[0.3em] w-fit mb-6">
                                        {doc.role}
                                    </div>
                                    <h3 className="text-4xl md:text-5xl lg:text-6xl font-black text-[#1A1A1A] tracking-tight mb-4">
                                        {doc.name}
                                    </h3>
                                    <p className="text-[#0EA5E9] font-bold text-lg mb-8 tracking-wide">
                                        {doc.focus}
                                    </p>
                                    <p className="text-gray-500 text-lg lg:text-xl leading-relaxed font-medium mb-10 max-w-2xl">
                                        {doc.bio}
                                    </p>

                                    {/* Credentials List */}
                                    <ul className="space-y-4">
                                        {doc.credentials.map((cred, i) => (
                                            <li key={i} className="flex items-center gap-4 text-[#1A1A1A] font-bold text-sm md:text-base tracking-wide">
                                                <div className="w-6 h-6 rounded-full bg-[#FAFAFC] border border-gray-200 flex items-center justify-center shrink-0">
                                                    <CheckCircle2 className="w-4 h-4 text-[#0EA5E9]" />
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

                {/* Final CTA */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: customEase }}
                    className="bg-[#1A1A1A] rounded-[48px] md:rounded-[80px] p-10 md:p-24 text-center relative overflow-hidden shadow-[0_40px_80px_rgba(26,26,26,0.2)]"
                >
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#AEE9F5]/20 rounded-full blur-[120px] pointer-events-none" />

                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h2 className="text-4xl md:text-7xl font-black text-white tracking-tighter leading-[0.9] mb-8">
                            Experience the <br /> difference today.
                        </h2>
                        <p className="text-gray-400 text-lg md:text-xl font-medium mb-12">
                            From routine check-ups to advanced cosmetic procedures, our clinic is equipped to handle all your dental needs.
                        </p>
                        <Link href="/book-appointment">
                            <button className="inline-flex items-center justify-center bg-[#AEE9F5] text-[#1A1A1A] rounded-full px-10 py-5 md:px-12 md:py-6 text-lg md:text-xl font-black hover:bg-white hover:scale-105 transition-all duration-500 shadow-[0_20px_50px_rgba(174,233,245,0.2)] group">
                                Meet The Team
                                <ArrowRight className="ml-3 w-6 h-6 group-hover:translate-x-2 transition-transform duration-500" />
                            </button>
                        </Link>
                    </div>
                </motion.div>

            </div>
        </main>
    );
};

export default AboutPage;