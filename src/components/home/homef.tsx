'use client';

import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Clock, Heart, Sparkles, User, Star, MessageSquare, ArrowRight, Activity, ShieldCheck, Plus, Minus, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

// Stable, optimized doctor images for brand trust
const HERO_IMG = "/image.png"; // Dr. Shrenik Shah

const HERO_SECONDARY = "https://images.unsplash.com/photo-1675526607070-f5cbd71dde92?auto=format&fit=crop&q=80&w=600"; // Dr. Dimple Shah
const DOC_FEMALE = "/";
const DOC_MALE_1 = "/";
const SRV_IMPLANT = "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&q=80&w=600";
const SRV_WHITENING = "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=600";
const SRV_BRACES = "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=600";

// Standardized Button Component with Magnetic-like Feel
const Button = ({ children, className, ...props }: any) => (
    <button className={`inline-flex items-center justify-center font-bold transition-all duration-500 active:scale-95 ${className}`} {...props}>
        {children}
    </button>
);

// High-end Animation Variants
const customEase = [0.22, 1, 0.36, 1];

const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: customEase } }
};

const revealText = {
    hidden: { y: "100%" },
    visible: { y: 0, transition: { duration: 1, ease: customEase } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.12 } }
};

// Infinite Marquee Component
const Marquee = () => {
    const text = "• Advanced Implantology • Cosmetic Dentistry • Invisible Aligners • Painless Root Canals • Pediatric Care ";
    return (
        <div className="w-full bg-[#1A1A1A] text-[#AEE9F5] py-4 overflow-hidden relative rotate-[-1deg] scale-105 z-20 mt-12 md:mt-24 shadow-2xl">
            <motion.div
                animate={{ x: [0, -1000] }}
                transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
                className="whitespace-nowrap flex text-sm md:text-base font-black uppercase tracking-[0.2em]"
            >
                {/* Repeat text multiple times to ensure continuous flow */}
                <span>{text}</span>
                <span>{text}</span>
                <span>{text}</span>
                <span>{text}</span>
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
        <section className="w-full min-h-screen flex flex-col relative overflow-hidden bg-white">

            {/* Full Width Background Image */}
            <div className="absolute inset-0 z-0">
                <motion.img
                    initial={{ scale: 1.05 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 2, ease: "easeOut" }}
                    src={HERO_IMG}
                    alt="Dr. Shrenik Shah - Parshwa Dental Clinic"
                    className="w-full h-full object-cover object-[75%_top] lg:object-[center_top]"
                />

                {/* Bright, frosted gradient to ensure dark text readability on the left.
                  Fades to completely transparent on the right so the image is crisp.
                */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-transparent lg:w-[65%] z-10 backdrop-blur-[2px]"></div>
            </div>

            <div className="flex-1 flex items-center max-w-[1400px] w-full mx-auto px-4 md:px-8 relative z-20 pt-32 pb-16">
                <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8">

                    {/* Left Side - Main Content Area */}
                    <div className="lg:col-span-7 flex flex-col justify-center gap-8 lg:pr-10">
                        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="relative z-10">

                            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white/60 backdrop-blur-md border border-gray-100 text-[#1A1A1A] text-[10px] font-black tracking-[0.2em] uppercase mb-6 shadow-sm">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#AEE9F5] opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#AEE9F5]"></span>
                                </span>
                                Premium Dental Clinic
                            </motion.div>

                            <div className="overflow-hidden mb-1">
                                <motion.h1 variants={revealText} className="text-5xl md:text-7xl xl:text-[6.5rem] font-black text-[#1A1A1A] leading-[0.9] tracking-tighter">
                                    Design Your
                                </motion.h1>
                            </div>
                            <div className="overflow-hidden mb-6">
                                <motion.h1 variants={revealText} className="text-5xl md:text-7xl xl:text-[6.5rem] font-black leading-[0.9] tracking-tighter">
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1A1A1A] via-gray-600 to-[#0EA5E9] bg-[length:200%_auto] animate-gradient-x">
                                        Perfect Smile.
                                    </span>
                                </motion.h1>
                            </div>

                            <motion.p variants={fadeInUp} className="text-gray-600 text-base md:text-lg max-w-md leading-relaxed font-medium mb-8">
                                Experience world-class dental care in Sabarmati. Advanced technology meets compassionate treatment for a truly painless experience.
                            </motion.p>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.8, ease: customEase }}
                            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
                        >
                            {/* Glassmorphism Hours Card (Light Theme) */}
                            <div className="bg-white/70 backdrop-blur-2xl p-6 rounded-[32px] flex flex-col justify-between min-h-[180px] group border border-white shadow-[0_10px_40px_rgba(0,0,0,0.06)] hover:bg-white/90 transition-all duration-500 hover:-translate-y-1">
                                <div>
                                    <div className="flex items-center justify-between mb-6">
                                        <div className="flex items-center gap-3">
                                            <div className="w-10 h-10 rounded-[14px] bg-[#FAFAFC] border border-gray-100 flex items-center justify-center group-hover:scale-110 group-hover:rotate-[10deg] transition-all duration-500 shadow-sm">
                                                <Clock className="w-4 h-4 text-[#0EA5E9]" />
                                            </div>
                                            <h3 className="font-black text-lg text-[#1A1A1A] tracking-tight">Open Today</h3>
                                        </div>
                                        {mounted && (
                                            <span className="text-[10px] font-black text-[#0EA5E9] bg-[#0EA5E9]/10 px-2.5 py-1 rounded-full uppercase tracking-widest">
                                                {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                            </span>
                                        )}
                                    </div>
                                    <div className="space-y-3">
                                        <div className="flex justify-between items-center px-1">
                                            <span className="font-bold text-[11px] text-gray-500 uppercase tracking-widest">Mon – Sat</span>
                                            <div className="flex flex-col items-end">
                                                <span className="font-black text-sm text-[#1A1A1A]">10AM – 2PM</span>
                                                <span className="font-black text-sm text-[#1A1A1A]">5PM – 9PM</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Dark CTA Card */}
                            <Link href="/book-appointment" className="group bg-[#1A1A1A] p-6 rounded-[32px] flex flex-col justify-between min-h-[180px] relative overflow-hidden transition-all duration-500 hover:shadow-[0_20px_40px_rgba(26,26,26,0.25)] hover:-translate-y-1 cursor-pointer">
                                {/* Subtle Grid Pattern Background */}
                                <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>

                                <div className="absolute top-0 right-0 w-48 h-48 bg-[#AEE9F5]/20 rounded-full blur-2xl group-hover:bg-[#AEE9F5]/30 transition-colors duration-700 -mr-12 -mt-12" />

                                <div className="flex justify-between items-start w-full relative z-10">
                                    <span className="px-3 py-1.5 bg-white/10 backdrop-blur-md rounded-full text-white/90 text-[9px] font-black uppercase tracking-[0.2em] border border-white/10">Priority Booking</span>
                                    <div className="w-10 h-10 bg-[#AEE9F5] rounded-full flex items-center justify-center z-10 group-hover:rotate-[45deg] transition-transform duration-700 group-hover:scale-110 shadow-[0_5px_15px_rgba(174,233,245,0.3)]">
                                        <ArrowUpRight className="w-5 h-5 text-[#1A1A1A]" />
                                    </div>
                                </div>

                                <div className="z-10 mt-4 relative">
                                    <span className="text-2xl md:text-3xl font-black text-white leading-[1.1] tracking-tight block group-hover:translate-x-1.5 transition-transform duration-500">
                                        Secure your <br />
                                        <span className="text-[#AEE9F5]">Session.</span>
                                    </span>
                                </div>
                            </Link>
                        </motion.div>
                    </div>



                </div>
            </div>

            {/* The Infinite Scrolling Marquee */}
            <Marquee />
        </section>
    );
}

function Features() {
    const features = [
        { icon: <Sparkles className="w-6 h-6" />, title: "Modern Tech", desc: "Precision & comfort with latest equipment.", bg: "bg-white", text: "text-[#1A1A1A]" },
        { icon: <Heart className="w-6 h-6" />, title: "Expert Care", desc: "Dedicated team for your overall well-being.", bg: "bg-white", text: "text-[#1A1A1A]" },
        { icon: <ShieldCheck className="w-6 h-6" />, title: "Pain-Free", desc: "Gentle treatments designed for zero anxiety.", bg: "bg-[#AEE9F5]", text: "text-[#1A1A1A]" },
        { icon: <User className="w-6 h-6" />, title: "Personalized", desc: "Tailored plans crafted just for your smile.", bg: "bg-white", text: "text-[#1A1A1A]" }
    ];

    return (
        <section className="py-24 px-4 md:px-8 bg-[#FAFAFC]">
            <div className="max-w-[1400px] mx-auto">
                <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, idx) => (
                        <motion.div key={idx} variants={fadeInUp} className={`${feature.bg} p-10 rounded-[40px] flex flex-col justify-between min-h-[280px] border border-white shadow-[0_8px_30px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_60px_rgba(0,0,0,0.08)] transition-all duration-500 hover:-translate-y-2 group cursor-default relative overflow-hidden`}>
                            {feature.bg === 'bg-white' && (
                                <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 rounded-full blur-3xl -mr-10 -mt-10 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            )}

                            <div className={`w-14 h-14 rounded-[20px] flex items-center justify-center mb-6 transition-all duration-500 shadow-sm ${feature.bg === 'bg-[#AEE9F5]' ? 'bg-white text-[#1A1A1A]' : 'bg-[#1A1A1A] text-white'} group-hover:rotate-[10deg] group-hover:scale-110`}>
                                {feature.icon}
                            </div>
                            <div className="relative z-10">
                                <h3 className={`text-2xl font-black ${feature.text} mb-3 tracking-tight`}>{feature.title}</h3>
                                <p className={`text-base font-medium leading-relaxed ${feature.bg === 'bg-[#AEE9F5]' ? 'text-[#1A1A1A]/70' : 'text-gray-500'}`}>{feature.desc}</p>
                            </div>
                            <div className="mt-8 flex justify-end transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
                                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${feature.bg === 'bg-[#AEE9F5]' ? 'bg-[#1A1A1A] text-white' : 'bg-gray-50 text-gray-400 border border-gray-100'}`}>
                                    <ArrowRight className="w-5 h-5" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

function Doctors() {
    const doctors = [
        { name: "Dr. Shrenik Shah", role: "Principal Surgeon", img: DOC_MALE_1 },
        { name: "Dr. Dimple Shah", role: "Cosmetic Dentist", img: DOC_FEMALE },
    ];

    return (
        <section className="py-32 px-4 md:px-8 bg-white relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-gray-50 text-[10px] font-black tracking-[0.2em] text-[#1A1A1A] uppercase mb-8 shadow-sm">
                            World Class Team
                        </div>
                        <h2 className="text-5xl md:text-8xl font-black text-[#1A1A1A] tracking-tighter leading-[0.88]">
                            Expert Minds, <br />
                            <span className="text-gray-300 font-medium tracking-tight">Gentle Hands.</span>
                        </h2>
                    </motion.div>
                    <Link href="/about">
                        <Button className="rounded-full px-10 py-5 border-[2px] border-gray-100 bg-white text-[#1A1A1A] text-lg hover:bg-[#1A1A1A] hover:text-white hover:border-[#1A1A1A] hover:shadow-2xl transition-all duration-500 group mb-4">
                            Meet the Team
                            <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                </div>

                <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {doctors.map((doc, idx) => (
                        <motion.div key={idx} variants={fadeInUp} className="group bg-[#FAFAFC] p-6 rounded-[48px] border border-gray-100 transition-all duration-700 hover:shadow-[0_40px_80px_rgba(0,0,0,0.06)] hover:-translate-y-2">
                            <div className="aspect-[4/3] mb-8 overflow-hidden rounded-[36px] relative bg-gray-200">
                                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />
                                <img src={doc.img} alt={doc.name} className="w-full h-full object-cover grayscale-[100%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000 ease-[0.22, 1, 0.36, 1]" />

                                {/* Hover Reveal Button */}
                                <div className="absolute bottom-6 left-6 right-6 z-20 translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                                    <div className="w-full bg-white/30 backdrop-blur-xl border border-white/40 p-3 rounded-3xl flex items-center justify-between shadow-2xl">
                                        <span className="text-white font-black text-sm uppercase tracking-widest pl-4">View Profile</span>
                                        <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center text-[#1A1A1A]">
                                            <ArrowUpRight className="w-6 h-6" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="px-6 pb-4">
                                <h3 className="text-4xl font-black text-[#1A1A1A] mb-2 tracking-tight">{doc.name}</h3>
                                <p className="text-[#AEE9F5] font-black uppercase text-xs tracking-[0.2em]">{doc.role}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}

function Services() {
    const services = [
        { title: "Cosmetic", subtitle: "Design your perfect smile with precision.", img: SRV_WHITENING, color: "bg-gray-50" },
        { title: "Orthodontics", subtitle: "Straighten teeth seamlessly & invisibly.", img: SRV_BRACES, color: "bg-gray-50" },
        { title: "Implants", subtitle: "Restore complete function permanently.", img: SRV_IMPLANT, color: "bg-gray-50" }
    ];

    return (
        <section className="py-32 px-4 md:px-8 bg-[#1A1A1A] rounded-[40px] md:rounded-[80px] mx-4 md:mx-8 my-8 relative overflow-hidden">
            {/* Dark Mode Background Effects */}
            <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#AEE9F5]/5 rounded-full blur-[150px] pointer-events-none" />

            <div className="max-w-[1400px] mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-28">
                    <div className="max-w-2xl">
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 text-[10px] font-black tracking-[0.2em] text-[#AEE9F5] uppercase mb-8 backdrop-blur-md">
                                <Activity className="w-3.5 h-3.5" /> Specialities
                            </div>
                            <h2 className="text-5xl md:text-8xl font-black text-white leading-[0.88] tracking-tighter mb-8">
                                Exceptional <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-500 to-gray-700">Solutions.</span>
                            </h2>
                        </motion.div>
                    </div>
                    <div className="max-w-md lg:pt-20">
                        <p className="text-gray-400 mb-10 text-xl leading-relaxed font-medium">
                            Tailored dental care that blends artistry with clinical excellence right here in Ahmedabad. We focus on results that look and feel completely natural.
                        </p>
                        <Link href="/services">
                            <Button className="bg-[#AEE9F5] text-[#1A1A1A] rounded-full px-12 py-5 text-lg hover:bg-white hover:scale-105 transition-all duration-500 shadow-[0_20px_50px_rgba(174,233,245,0.15)] group">
                                Browse Selection
                                <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform duration-500" />
                            </Button>
                        </Link>
                    </div>
                </div>

                <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {services.map((srv, i) => (
                        <motion.div key={i} variants={fadeInUp} className="group cursor-pointer">
                            <div className="rounded-[48px] aspect-[4/5] flex items-center justify-center p-2 mb-8 relative overflow-hidden transition-all duration-700 bg-white/5 border border-white/10 hover:border-white/20 hover:bg-white/10">
                                <img src={srv.img} alt={srv.title} className="w-full h-full object-cover rounded-[40px] grayscale-[60%] opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 ease-[0.22, 1, 0.36, 1]" />

                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-[40px]" />

                                <div className="absolute bottom-8 right-8 w-16 h-16 bg-[#AEE9F5] rounded-full flex items-center justify-center shadow-2xl opacity-0 translate-y-8 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 delay-100">
                                    <ArrowUpRight className="w-8 h-8 text-[#1A1A1A]" />
                                </div>
                            </div>
                            <div className="px-4">
                                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#AEE9F5] mb-3 block">— {srv.title}</span>
                                <h3 className="text-3xl font-black text-white mb-3 tracking-tight group-hover:translate-x-2 transition-transform duration-500">{srv.title} Care</h3>
                                <p className="text-gray-400 text-lg font-medium leading-snug">{srv.subtitle}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}

function Testimonials() {
    const reviews = [
        { name: "Mayuri Suthar", rating: 5, text: "Under Dr Shrenik's treatment I had to remove 11 front teeth in 2015 due to pyria. Till date I found no issues in my new bridge. I truly recommend for his treatment. For me he is one of the God gift. 🙏👍" },
        { name: "Mahi Shah", rating: 5, text: "Dr. Shrenik Shah is a very knowledgeable and experienced dental consultant. We live in USA but always wait for our India visit to have our treatment done with Dr. Shrenik and Dr. Dimple - Excellent treatment and great clinic facility." },
        { name: "Krunal Shah", rating: 5, text: "Excellent. V good treatment by highly experienced doctor. 👍" }
    ];

    return (
        <section className="py-32 px-4 md:px-8 bg-white">
            <div className="max-w-[1400px] mx-auto">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col md:flex-row justify-between items-end mb-24">
                    <div className="max-w-2xl text-center md:text-left">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-100 bg-gray-50 text-[10px] font-black tracking-[0.2em] text-[#1A1A1A] uppercase mb-8 shadow-sm">
                            <MessageSquare className="w-3.5 h-3.5" /> What Patients Say
                        </div>
                        <h2 className="text-5xl md:text-8xl font-black text-[#1A1A1A] tracking-tighter leading-[0.88]">
                            Real Stories, <br />
                            <span className="text-gray-300 font-medium">Real Smiles.</span>
                        </h2>
                    </div>
                    <div className="hidden md:block">
                        <div className="flex items-center gap-5 bg-[#FAFAFC] p-4 pr-8 rounded-full border border-gray-100 shadow-sm">
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4].map(i => <div key={i} className="w-12 h-12 rounded-full bg-gray-200 border-4 border-[#FAFAFC] shadow-sm" />)}
                            </div>
                            <div>
                                <div className="flex gap-1 text-[#1A1A1A] mb-1">
                                    {[...Array(5)].map((_, i) => <Star key={i} className="w-3.5 h-3.5 fill-current" />)}
                                </div>
                                <span className="text-[10px] font-black text-gray-400 uppercase tracking-widest">1,200+ Reviews</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review, idx) => (
                        <motion.div key={idx} variants={fadeInUp} className="bg-[#FAFAFC] p-10 lg:p-12 rounded-[48px] shadow-sm hover:shadow-[0_40px_80px_rgba(0,0,0,0.06)] transition-all duration-500 border border-gray-100 flex flex-col group relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-40 h-40 bg-[#AEE9F5]/30 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />

                            <div className="mb-10 flex-1 relative z-10">
                                <div className="flex gap-1 text-[#1A1A1A] mb-8">
                                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                                </div>
                                <p className="text-[#1A1A1A] text-xl font-bold leading-relaxed">"{review.text}"</p>
                            </div>
                            <div className="flex items-center gap-5 pt-8 border-t border-gray-200 mt-auto relative z-10">
                                <div className="relative">
                                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-[#AEE9F5] rounded-full border-2 border-white flex items-center justify-center shadow-sm">
                                        <ShieldCheck className="w-3 h-3 text-[#1A1A1A]" />
                                    </div>
                                </div>
                                <div>
                                    <h4 className="font-black text-lg text-[#1A1A1A] tracking-tight">{review.name}</h4>
                                    <p className="text-[10px] font-black text-gray-400 uppercase tracking-widest">Verified Patient</p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
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
        <section className="py-32 px-4 md:px-8 bg-[#FAFAFC] relative overflow-hidden">
            <div className="max-w-[1000px] mx-auto relative z-10">
                <div className="text-center mb-20 px-4">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <h2 className="text-5xl md:text-7xl font-black text-[#1A1A1A] tracking-tighter leading-[0.9] mb-8">
                            Curious? <br />
                            <span className="text-gray-300 font-medium">We have answers.</span>
                        </h2>
                    </motion.div>
                </div>

                <div className="space-y-4">
                    {faqs.map((faq, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`group rounded-[32px] border transition-all duration-500 overflow-hidden ${activeIndex === index ? 'bg-white border-transparent shadow-[0_20px_50px_rgba(0,0,0,0.05)]' : 'bg-transparent border-gray-200 hover:border-gray-300'}`}
                        >
                            <button
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                className="w-full px-8 py-8 flex items-center justify-between text-left focus:outline-none"
                            >
                                <span className={`text-xl md:text-2xl font-black tracking-tight transition-colors duration-300 ${activeIndex === index ? 'text-[#1A1A1A]' : 'text-gray-500 group-hover:text-[#1A1A1A]'}`}>
                                    {faq.question}
                                </span>
                                <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-500 flex-shrink-0 ${activeIndex === index ? 'bg-[#1A1A1A] rotate-180 text-white shadow-lg' : 'bg-white border border-gray-100 text-[#1A1A1A] group-hover:bg-[#AEE9F5] group-hover:border-transparent'}`}>
                                    {activeIndex === index ? <Minus className="w-5 h-5" /> : <Plus className="w-5 h-5" />}
                                </div>
                            </button>
                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.4, ease: customEase }}
                                    >
                                        <div className="px-8 pb-8">
                                            <p className="text-gray-500 text-lg leading-relaxed max-w-3xl pt-2 font-medium">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}

function FinalCTA() {
    return (
        <section className="py-24 px-4 md:px-8 bg-white">
            <motion.div
                initial={{ scale: 0.98, opacity: 0 }}
                whileInView={{ scale: 1, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: customEase }}
                className="max-w-[1400px] mx-auto bg-[#1A1A1A] rounded-[60px] md:rounded-[80px] px-6 py-24 md:p-32 text-center relative overflow-hidden shadow-[0_40px_100px_rgba(26,26,26,0.25)]"
            >
                {/* Visual Flair */}
                <div className="absolute -top-40 -right-40 w-[600px] h-[600px] bg-[#AEE9F5]/20 rounded-full blur-[140px] pointer-events-none" />
                <div className="absolute -bottom-40 -left-40 w-[600px] h-[600px] bg-white/5 rounded-full blur-[120px] pointer-events-none" />

                <div className="relative z-10 max-w-3xl mx-auto">
                    <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
                        <span className="inline-block px-5 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-[#AEE9F5] text-[10px] font-black uppercase tracking-[0.3em] mb-10 shadow-2xl">
                            Immediate Openings
                        </span>
                    </motion.div>
                    <motion.h2 initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }} className="text-5xl md:text-8xl font-black text-white mb-10 tracking-tighter leading-[0.9]">
                        Smile with <br />
                        <span className="text-[#AEE9F5]">Prestige.</span>
                    </motion.h2>
                    <motion.p initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }} className="text-gray-400 text-lg md:text-2xl mb-14 max-w-xl mx-auto font-medium leading-relaxed">
                        Join the elite clinic family. Rediscover your confidence with treatments tailored to your lifestyle.
                    </motion.p>
                    <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 }}>
                        <Link href="/book-appointment">
                            <Button className="bg-[#AEE9F5] text-[#1A1A1A] rounded-full px-14 py-6 text-xl hover:bg-white hover:scale-105 transition-all duration-500 font-black shadow-[0_20px_60px_rgba(174,233,245,0.2)]">
                                Claim My Session
                            </Button>
                        </Link>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
}

export const HomeFile = () => {
    return (
        <main className="flex flex-col bg-white">
            <Hero />
            <Features />
            <Doctors />
            <Services />
            <Testimonials />
            <FAQ />
            <FinalCTA />
        </main>
    );
}