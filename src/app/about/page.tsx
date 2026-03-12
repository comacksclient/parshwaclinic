'use client';

import React from 'react';
import { ArrowUpRight, Star, ShieldCheck, Heart, Award, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Link from 'next/link';


const customEase = [0.22, 1, 0.36, 1];

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: customEase } }
};

const staggerContainer = {
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
            img: "https://images.unsplash.com/photo-1607378119679-1b10e82b3704?auto=format&fit=crop&q=80&w=600",
            focus: "Advanced Implantology & Surgery"
        },
        {
            name: "Dr. Dimple Shah",
            role: "Principal Dental Surgeon",
            img: "https://images.unsplash.com/photo-1675526607070-f5cbd71dde92?auto=format&fit=crop&q=80&w=600",
            focus: "Cosmetic & Aesthetic Dentistry"
        }
    ];

    return (
        <main className="min-h-screen bg-[#FAFAFC] pt-32 pb-24 overflow-hidden relative">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#AEE9F5]/30 rounded-full blur-[150px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
            <div className="absolute top-[40%] left-0 w-[600px] h-[600px] bg-purple-100/30 rounded-full blur-[150px] pointer-events-none -translate-x-1/2" />

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
                        Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-300">Perfect Smile.</span>
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
                    className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-32"
                >
                    {stats.map((stat, idx) => (
                        <motion.div key={idx} variants={fadeInUp} className="bg-white rounded-[40px] p-8 md:p-10 border border-gray-100 shadow-[0_8px_30px_rgba(0,0,0,0.02)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.06)] hover:-translate-y-1 transition-all duration-500 group">
                            <div className="w-14 h-14 rounded-2xl bg-[#FAFAFC] flex items-center justify-center text-[#1A1A1A] mb-6 border border-gray-100 group-hover:bg-[#AEE9F5] group-hover:border-transparent transition-colors duration-500">
                                {stat.icon}
                            </div>
                            <h3 className="text-4xl md:text-5xl font-black text-[#1A1A1A] mb-2 tracking-tighter">{stat.value}</h3>
                            <p className="text-gray-400 font-bold uppercase text-[10px] md:text-xs tracking-[0.2em]">{stat.label}</p>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Team Section */}
                <div className="mb-32">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: customEase }}
                        className="mb-12"
                    >
                        <h2 className="text-5xl md:text-7xl font-black text-[#1A1A1A] tracking-tighter leading-[0.9]">
                            Meet the <br />
                            <span className="text-gray-400 font-medium">Masters.</span>
                        </h2>
                    </motion.div>

                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={staggerContainer}
                        className="grid grid-cols-1 md:grid-cols-2 gap-8"
                    >
                        {team.map((doc, idx) => (
                            <motion.div key={idx} variants={fadeInUp} className="group cursor-pointer">
                                <div className="bg-white rounded-[60px] aspect-[4/5] md:aspect-square relative overflow-hidden border-[8px] border-white shadow-[0_20px_50px_rgba(0,0,0,0.05)] mb-8">
                                    <img
                                        src={doc.img}
                                        alt={doc.name}
                                        className="absolute inset-0 w-full h-full object-cover grayscale opacity-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-[0.22,1,0.36,1]"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/90 via-[#1A1A1A]/20 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-700" />

                                    {/* Glassmorphism Details Overlay */}
                                    <div className="absolute bottom-8 left-8 right-8 z-10 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                                        <div className="w-full bg-white/20 backdrop-blur-xl border border-white/30 p-4 rounded-[28px] flex items-center justify-between shadow-2xl">
                                            <div className="pl-2">
                                                <p className="text-white text-[10px] font-black uppercase tracking-[0.2em] mb-1 opacity-80">Specialty</p>
                                                <p className="text-white font-bold text-sm">{doc.focus}</p>
                                            </div>
                                            <div className="w-12 h-12 bg-white rounded-[20px] flex items-center justify-center text-[#1A1A1A] shadow-lg shrink-0 group-hover:rotate-[45deg] transition-transform duration-700">
                                                <ArrowUpRight className="w-6 h-6" />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="px-6">
                                    <h3 className="text-4xl font-black text-[#1A1A1A] mb-2 tracking-tight group-hover:translate-x-2 transition-transform duration-500">{doc.name}</h3>
                                    <p className="text-[#AEE9F5] font-black tracking-[0.2em] uppercase text-xs">{doc.role}</p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>

                {/* Final CTA */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: customEase }}
                    className="bg-[#1A1A1A] rounded-[60px] md:rounded-[80px] p-12 md:p-24 text-center relative overflow-hidden shadow-2xl"
                >
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#AEE9F5]/20 rounded-full blur-[120px] pointer-events-none" />

                    <div className="relative z-10 max-w-3xl mx-auto">
                        <h2 className="text-5xl md:text-7xl font-black text-white tracking-tighter leading-[0.9] mb-8">
                            Experience the <br /> difference today.
                        </h2>
                        <p className="text-gray-400 text-xl font-medium mb-12">
                            From routine check-ups to advanced cosmetic procedures, our clinic is equipped to handle all your dental needs.
                        </p>
                        <Link href="/book-appointment">
                            <button className="inline-flex items-center justify-center bg-[#AEE9F5] text-[#1A1A1A] rounded-full px-12 py-6 text-xl font-black hover:bg-white hover:scale-105 transition-all duration-500 shadow-[0_20px_50px_rgba(174,233,245,0.2)] group">
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