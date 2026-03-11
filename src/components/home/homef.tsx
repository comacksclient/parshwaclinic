'use client';

import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Clock, Heart, Sparkles, User, Star, MessageSquare, ArrowRight, Activity, ShieldCheck, Plus, Minus, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';

// Using stable, optimized Unsplash URLs
const HERO_IMG = "https://images.unsplash.com/photo-1600170311833-c2cf5280ce49?auto=format&fit=crop&q=80&w=1200";
const DOC_FEMALE = "https://images.unsplash.com/photo-1675526607070-f5cbd71dde92?auto=format&fit=crop&q=80&w=600";
const DOC_MALE_1 = "https://images.unsplash.com/photo-1607378119679-1b10e82b3704?auto=format&fit=crop&q=80&w=600";
const DOC_MALE_2 = "https://images.unsplash.com/photo-1664101606938-e664f5852fac?auto=format&fit=crop&q=80&w=600";
const SRV_IMPLANT = "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&q=80&w=600";
const SRV_WHITENING = "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=600";
const SRV_BRACES = "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=600";

// Custom Design Tokens
const COLORS = {
    primary: "hsl(230, 15%, 10%)", // Deep Charcoal
    accent: "hsl(188, 78%, 70%)",  // Bright Cyan
    accentLight: "hsl(188, 78%, 95%)",
    bg: "hsl(0, 0%, 100%)",
    bgGlass: "hsla(0, 0%, 100%, 0.7)",
    surface: "hsl(210, 20%, 98%)",
    success: "hsl(142, 76%, 36%)",
    successLight: "hsl(142, 76%, 95%)",
};

// Standardized Button Component
const Button = ({ children, className, ...props }: any) => (
    <button className={`inline-flex items-center justify-center font-medium transition-all duration-300 active:scale-95 ${className}`} {...props}>
        {children}
    </button>
);

// Animation Variants
const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

function Hero() {
    const [mounted, setMounted] = useState(false);
    const [time, setTime] = useState(new Date());

    // Fix for Next.js hydration mismatch on dates/times
    useEffect(() => {
        setMounted(true);
        const timer = setInterval(() => setTime(new Date()), 1000);
        return () => clearInterval(timer);
    }, []);

    return (
        <section className="w-full px-4 md:px-8 py-8 bg-white overflow-hidden relative">
            {/* Dynamic Background Blobs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div
                    animate={{
                        x: [0, 50, 0],
                        y: [0, 30, 0],
                        scale: [1, 1.1, 1],
                    }}
                    transition={{
                        duration: 10,
                        repeat: Infinity,
                        ease: "easeInOut"
                    }}
                    className="absolute -top-[10%] -left-[10%] w-[40%] h-[40%] bg-[hsl(188,78%,90%)] rounded-full blur-[120px] opacity-40"
                />
                <motion.div
                    animate={{
                        x: [0, -40, 0],
                        y: [0, 50, 0],
                        scale: [1, 1.2, 1],
                    }}
                    transition={{
                        duration: 12,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 1
                    }}
                    className="absolute top-[20%] -right-[5%] w-[35%] h-[35%] bg-purple-100 rounded-full blur-[120px] opacity-30"
                />
            </div>

            <div className="max-w-[1400px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6 relative z-10">

                {/* Left Content Area */}
                <div className="lg:col-span-12 xl:col-span-7 flex flex-col justify-between gap-12 pt-4 lg:pt-12">
                    <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
                        <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F0FDF4] border border-green-100 text-green-700 text-[10px] md:text-xs font-bold tracking-widest uppercase mb-6 shadow-sm">
                            <Star className="w-3 h-3 fill-green-700" />
                            #1 Rated Clinic in Ahmedabad
                        </motion.div>
                        <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl xl:text-8xl font-black text-[#1A1A1A] leading-[0.9] tracking-tight mb-8">
                            Your Perfect <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1A1A1A] via-gray-500 to-[#1A1A1A] bg-[length:200%_auto] animate-gradient-x">
                                Smile Starts
                            </span> <br />
                            Here.
                        </motion.h1>
                        <motion.p variants={fadeInUp} className="text-gray-500 text-lg md:text-xl max-w-md leading-relaxed">
                            Experience world-class dental care with a gentle touch. Advanced technology meets compassionate treatment.
                        </motion.p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.6 }}
                        className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-auto"
                    >
                        {/* Working Hours Card */}
                        <div className="bg-white/40 backdrop-blur-md p-8 rounded-[40px] flex flex-col justify-between min-h-[220px] group hover:bg-white/60 transition-all duration-500 border border-white/50 shadow-[0_8px_32px_rgba(0,0,0,0.03)] hover:shadow-[0_20px_48px_rgba(0,0,0,0.06)]">
                            <div>
                                <div className="flex items-center justify-between mb-6">
                                    <div className="flex items-center gap-3">
                                        <div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center shadow-md group-hover:scale-110 transition-transform duration-500 border border-gray-50">
                                            <Clock className="w-6 h-6 text-[#1A1A1A]" />
                                        </div>
                                        <h3 className="font-bold text-xl text-[#1A1A1A]">Open Today</h3>
                                    </div>
                                    {mounted && (
                                        <span className="text-[10px] font-black text-green-600 bg-green-50 px-3 py-1.5 rounded-full border border-green-100 uppercase tracking-wider">
                                            {time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                        </span>
                                    )}
                                </div>
                                <div className="space-y-3">
                                    <div className="flex justify-between items-center p-3 bg-white/60 rounded-2xl border border-white shadow-sm transition-colors group-hover:bg-white/80">
                                        <span className="font-semibold text-sm text-gray-500 uppercase tracking-tight">Mon – Sat</span>
                                        <div className="flex flex-col items-end">
                                            <span className="font-bold text-[#1A1A1A]">10AM – 2PM</span>
                                            <span className="font-bold text-[#1A1A1A]">5PM – 9PM</span>
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center px-3 py-1">
                                        <span className="text-sm text-gray-400 font-medium">Sunday</span>
                                        <span className="font-bold text-[#1A1A1A]/60 text-red-400">CLOSED</span>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* CTA Card */}
                        <Link href="/book-appointment" className="group bg-[#1A1A1A] p-8 rounded-[40px] flex flex-col justify-between min-h-[220px] relative overflow-hidden transition-all duration-500 hover:shadow-[0_30px_60px_rgba(26,26,26,0.25)] cursor-pointer">
                            <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl group-hover:bg-white/10 transition-colors duration-700 -mr-20 -mt-20"></div>
                            
                            <div className="flex justify-between items-start w-full relative z-10">
                                <span className="px-4 py-1.5 bg-white/10 backdrop-blur-sm rounded-full text-white/70 text-[10px] font-black uppercase tracking-[0.2em] border border-white/10">Quick Connect</span>
                                <div className="w-14 h-14 bg-[#AEE9F5] rounded-full flex items-center justify-center z-10 group-hover:rotate-45 transition-transform duration-700 group-hover:scale-110 shadow-lg group-hover:bg-white">
                                    <ArrowUpRight className="w-7 h-7 text-[#1A1A1A]" />
                                </div>
                            </div>

                            <div className="z-10 mt-4">
                                <span className="text-3xl md:text-4xl font-bold text-white leading-tight block group-hover:translate-x-2 transition-transform duration-500">
                                    Secure your <br />
                                    <span className="text-[#AEE9F5] group-hover:text-white transition-colors">Session</span>
                                </span>
                            </div>
                        </Link>
                    </motion.div>
                </div>

                {/* Right Image Area (Desktop) */}
                <div className="xl:col-span-5 h-[850px] relative hidden xl:block">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
                        className="w-full h-full rounded-[80px] overflow-hidden relative shadow-[0_40px_100px_rgba(0,0,0,0.1)] border-[12px] border-white bg-gray-50"
                    >
                        <img src={HERO_IMG} alt="Clinic Reception" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-[2s]" />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>

                        {/* Floating Badge */}
                        <motion.div
                            initial={{ opacity: 0, x: 30 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1, duration: 0.8 }}
                            className="absolute bottom-12 left-12 right-12 bg-white/80 backdrop-blur-2xl p-8 rounded-[40px] shadow-2xl border border-white/50"
                        >
                            <div className="flex items-center justify-between mb-4">
                                <div className="flex -space-x-3">
                                    <img src={DOC_FEMALE} className="w-10 h-10 rounded-full border-2 border-white object-cover" alt="Patient" />
                                    <img src={DOC_MALE_1} className="w-10 h-10 rounded-full border-2 border-white object-cover" alt="Patient" />
                                    <div className="w-10 h-10 rounded-full bg-[#1A1A1A] border-2 border-white flex items-center justify-center text-[10px] text-white font-black">+5k</div>
                                </div>
                                <div className="flex gap-1 text-[#FFD700]">
                                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                                </div>
                            </div>
                            <p className="text-base text-[#1A1A1A] font-bold leading-tight">
                                Trusted by 5,000+ happy <br />
                                <span className="text-gray-400 font-medium">patients across state.</span>
                            </p>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Mobile Image */}
                <div className="lg:hidden h-[450px] w-full rounded-[48px] overflow-hidden shadow-2xl relative mt-8 border-4 border-white">
                    <img src={HERO_IMG} alt="Clinic Reception" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                </div>

            </div>
        </section>
    );
}

function Features() {
    const features = [
        { icon: <Sparkles className="w-6 h-6" />, title: "Modern Tech", desc: "Precision & comfort with latest equipment.", bg: "bg-white", text: "text-[#1A1A1A]", border: "border-gray-100" },
        { icon: <Heart className="w-6 h-6" />, title: "Expert Care", desc: "Dedicated team for your well-being.", bg: "bg-white", text: "text-[#1A1A1A]", border: "border-gray-100" },
        { icon: <ShieldCheck className="w-6 h-6" />, title: "Pain-Free", desc: "Gentle treatments, zero anxiety.", bg: "bg-[#AEE9F5]", text: "text-[#1A1A1A]", border: "border-transparent" },
        { icon: <User className="w-6 h-6" />, title: "Personalized", desc: "Tailored plans just for your smile.", bg: "bg-white", text: "text-[#1A1A1A]", border: "border-gray-100" }
    ];

    return (
        <section className="py-24 px-4 md:px-8 bg-white overflow-hidden relative">
            <div className="max-w-[1400px] mx-auto">
                <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {features.map((feature, idx) => (
                        <motion.div key={idx} variants={fadeInUp} className={`${feature.bg} border ${feature.border} p-10 rounded-[48px] flex flex-col justify-between min-h-[280px] shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_20px_50px_rgba(0,0,0,0.06)] transition-all duration-500 hover:-translate-y-2 group cursor-default relative overflow-hidden`}>
                            <div className="absolute top-0 right-0 w-32 h-32 bg-gray-50 rounded-full blur-3xl -mr-16 -mt-16 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            
                            <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-all duration-500 shadow-inner ${feature.bg === 'bg-[#AEE9F5]' ? 'bg-white text-[#1A1A1A]' : 'bg-[#1A1A1A] text-white'} group-hover:rotate-[10deg] group-hover:scale-110`}>
                                {feature.icon}
                            </div>
                            <div className="relative z-10">
                                <h3 className={`text-2xl font-black ${feature.text} mb-3 tracking-tight`}>{feature.title}</h3>
                                <p className="text-base text-gray-500 leading-relaxed font-medium">{feature.desc}</p>
                            </div>
                            <div className="mt-6 flex justify-end transform translate-x-4 opacity-0 group-hover:translate-x-0 group-hover:opacity-100 transition-all duration-500">
                                <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center border border-gray-100">
                                    <ArrowRight className="w-5 h-5 text-gray-400" />
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
        { name: "Dr. Shrenik Shah", role: "Dental Surgeon", img: DOC_MALE_1 },
        { name: "Dr. Dimple Shah", role: "Dental Surgeon", img: DOC_FEMALE },
    ];

    return (
        <section className="py-32 px-4 md:px-8 bg-[#FBFBFC] relative overflow-hidden">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-[10%] left-[10%] w-[600px] h-[600px] bg-[#AEE9F5]/30 rounded-full blur-[150px]" />
                <div className="absolute -bottom-[10%] right-[10%] w-[600px] h-[600px] bg-purple-100/40 rounded-full blur-[150px]" />
            </div>

            <div className="max-w-[1400px] mx-auto relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-200 bg-white text-[10px] font-black tracking-[0.2em] text-gray-500 uppercase mb-6 shadow-sm">
                            <span className="w-2 h-2 bg-[#AEE9F5] rounded-full animate-pulse" />
                            World Class Team
                        </div>
                        <h2 className="text-5xl md:text-7xl font-black text-[#1A1A1A] tracking-tighter leading-[0.9]">
                            Expert Minds, <br />
                            <span className="text-gray-400 font-medium tracking-tight">Gentle Hands.</span>
                        </h2>
                    </motion.div>
                    <Link href="/about">
                        <Button className="rounded-full px-10 py-5 border-[1.5px] border-gray-200 bg-white text-[#1A1A1A] font-bold text-lg hover:bg-[#1A1A1A] hover:text-white hover:border-[#1A1A1A] hover:shadow-2xl transition-all duration-500 group">
                            View Team
                            <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Button>
                    </Link>
                </div>

                <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {doctors.map((doc, idx) => (
                        <motion.div key={idx} variants={fadeInUp} className="group bg-white p-5 rounded-[56px] shadow-[0_10px_40px_rgba(0,0,0,0.03)] hover:shadow-[0_30px_70px_rgba(0,0,0,0.08)] transition-all duration-700 hover:-translate-y-2 border border-white">
                            <div className="aspect-[10/13] mb-8 overflow-hidden rounded-[42px] relative">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-10" />
                                <img src={doc.img} alt={doc.name} className="w-full h-full object-cover grayscale-[100%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-[0.22, 1, 0.36, 1]" />
                                <div className="absolute bottom-6 left-6 right-6 z-20 translate-y-12 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
                                    <div className="w-full bg-white/20 backdrop-blur-xl border border-white/30 p-4 rounded-3xl flex items-center justify-between shadow-2xl">
                                        <span className="text-white font-bold text-sm">View Profile</span>
                                        <div className="w-10 h-10 bg-white rounded-2xl flex items-center justify-center text-[#1A1A1A]">
                                            <ArrowUpRight className="w-6 h-6" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="px-4 pb-4">
                                <h3 className="text-3xl font-black text-[#1A1A1A] mb-2 tracking-tight group-hover:text-[#AEE9F5] transition-colors">{doc.name}</h3>
                                <p className="text-gray-400 font-bold uppercase text-xs tracking-widest">{doc.role}</p>
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
        { title: "Cosmetic", subtitle: "Design your perfect smile", img: SRV_WHITENING, color: "bg-blue-50" },
        { title: "Orthodontics", subtitle: "Straighten teeth invisibly", img: SRV_BRACES, color: "bg-purple-50" },
        { title: "Implants", subtitle: "Restore function fully", img: SRV_IMPLANT, color: "bg-orange-50" }
    ];

    return (
        <section className="py-32 px-4 md:px-8 bg-white">
            <div className="max-w-[1400px] mx-auto">
                <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-28">
                    <div className="max-w-2xl">
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-100 bg-gray-50 text-[10px] font-black tracking-[0.2em] text-gray-500 uppercase mb-8 shadow-sm">
                                <Activity className="w-3.5 h-3.5 text-[#AEE9F5]" /> Our Specialities
                            </div>
                            <h2 className="text-5xl md:text-8xl font-black text-[#1A1A1A] leading-[0.85] tracking-tighter mb-8">
                                Exceptional <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-200">Solutions</span>
                            </h2>
                        </motion.div>
                    </div>
                    <div className="max-w-md lg:pt-20">
                        <p className="text-gray-500 mb-10 text-xl leading-relaxed font-medium">
                            Tailored dental care that blends artistry with clinical excellence. We focus on results that look and feel natural.
                        </p>
                        <Link href="/services">
                            <Button className="bg-[#1A1A1A] text-white rounded-full px-12 py-5 text-lg font-bold hover:shadow-[0_20px_50px_rgba(26,26,26,0.3)] transition-all duration-500 group relative overflow-hidden">
                                <span className="relative z-10 flex items-center">
                                    Browse Selection
                                    <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform duration-500" />
                                </span>
                                <div className="absolute inset-0 bg-[#AEE9F5] translate-y-[101%] group-hover:translate-y-0 transition-transform duration-500" />
                            </Button>
                        </Link>
                    </div>
                </div>

                <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-10">
                    {services.map((srv, i) => (
                        <motion.div key={i} variants={fadeInUp} className="group cursor-pointer">
                            <div className={`rounded-[64px] aspect-[9/10] flex items-center justify-center p-2 mb-8 relative overflow-hidden transition-all duration-700 group-hover:shadow-[0_40px_80px_rgba(0,0,0,0.1)] border-[4px] border-transparent group-hover:border-white ${srv.color}`}>
                                <img src={srv.img} alt={srv.title} className="w-full h-full object-cover rounded-[60px] grayscale-[40%] group-hover:grayscale-0 group-hover:scale-[1.03] transition-all duration-1000 ease-out" />
                                
                                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                                
                                <div className="absolute bottom-10 right-10 w-20 h-20 bg-white/20 backdrop-blur-2xl border border-white/30 rounded-full flex items-center justify-center shadow-2xl opacity-0 translate-y-10 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-700 delay-100">
                                    <ArrowUpRight className="w-8 h-8 text-white" />
                                </div>
                            </div>
                            <div className="px-6 relative">
                                <span className="text-[10px] font-black uppercase tracking-[0.3em] text-[#AEE9F5] mb-2 block">— {srv.title}</span>
                                <h3 className="text-3xl font-black text-[#1A1A1A] mb-3 tracking-tight group-hover:translate-x-2 transition-transform duration-500">{srv.title} Care</h3>
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
        { name: "Jeremy Curry", rating: 5, image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100", text: "I've always been anxious about visiting the dentist, but when I walked into Parshwa Dental Clinic, I felt at ease." },
        { name: "Helena Erickson", rating: 5, image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=100", text: "I had been putting off my dental check-up for years due to bad past experiences. Parshwa Dental Clinic changed that!" },
        { name: "Beatrice Cox", rating: 5, image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=100", text: "After years of being self conscious about my smile, I decided to get veneers. Parshwa Dental Clinic's team is simply the best." }
    ];

    return (
        <section className="py-32 px-4 md:px-8 bg-[#FBFBFC]">
            <div className="max-w-[1400px] mx-auto">
                <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex flex-col md:flex-row justify-between items-end mb-24">
                    <div className="max-w-2xl text-center md:text-left">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-100 bg-white text-[10px] font-black tracking-[0.2em] text-gray-500 uppercase mb-8 shadow-sm">
                            <MessageSquare className="w-3.5 h-3.5" /> What Patients Say
                        </div>
                        <h2 className="text-5xl md:text-8xl font-black text-[#1A1A1A] tracking-tighter leading-[0.85]">
                            Real Stories, <br />
                            <span className="text-gray-400 font-medium">Real Smiles.</span>
                        </h2>
                    </div>
                    <div className="hidden md:block">
                        <div className="flex items-center gap-4 bg-white p-5 rounded-[32px] shadow-[0_10px_40px_rgba(0,0,0,0.03)] border border-white">
                            <div className="flex -space-x-3">
                                {[1, 2, 3, 4, 5].map(i => <div key={i} className="w-10 h-10 rounded-full bg-gray-100 border-2 border-white shadow-sm" />)}
                            </div>
                            <div>
                                <div className="flex gap-0.5 text-[#FFD700] mb-0.5">
                                    {[...Array(5)].map((_, i) => <Star key={i} className="w-3 h-3 fill-current" />)}
                                </div>
                                <span className="text-[10px] font-black text-gray-500 uppercase tracking-widest">1,200+ Reviews</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true }} className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {reviews.map((review, idx) => (
                        <motion.div key={idx} variants={fadeInUp} className="bg-white p-12 rounded-[56px] shadow-[0_10px_50px_rgba(0,0,0,0.02)] hover:shadow-[0_40px_90px_rgba(0,0,0,0.06)] transition-all duration-500 border border-white flex flex-col group relative overflow-hidden">
                            <div className="absolute -top-10 -right-10 w-40 h-40 bg-[#AEE9F5]/30 rounded-full blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                            
                            <div className="mb-10 flex-1 relative z-10">
                                <div className="flex gap-1 text-[#FFD700] mb-6">
                                    {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                                </div>
                                <p className="text-[#1A1A1A] text-xl font-bold leading-relaxed italic">"{review.text}"</p>
                            </div>
                            <div className="flex items-center gap-5 pt-10 border-t border-gray-50 mt-auto relative z-10">
                                <div className="relative">
                                    <img src={review.image} alt={review.name} className="w-14 h-14 rounded-2xl object-cover shadow-lg border-2 border-white group-hover:scale-110 transition-transform duration-500" />
                                    <div className="absolute -bottom-2 -right-2 w-6 h-6 bg-[#AEE9F5] rounded-full border-2 border-white flex items-center justify-center shadow-lg">
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

function QuoteIcon() {
    return (
        <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-[#AEE9F5] fill-current opacity-50">
            <path d="M10 20H0V0H20V20H10V40H0V20ZM30 20H20V0H40V20H30V40H20V20Z" />
        </svg>
    )
}

function FinalCTA() {
    return (
        <section className="py-24 px-4 md:px-8 bg-white">
            <motion.div initial={{ scale: 0.98, opacity: 0 }} whileInView={{ scale: 1, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }} className="max-w-[1400px] mx-auto bg-[#1A1A1A] rounded-[80px] px-8 py-24 md:p-32 text-center relative overflow-hidden group shadow-[0_40px_100px_rgba(26,26,26,0.3)]">
                {/* Visual Flair */}
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-gray-800 to-black rounded-full blur-[140px] opacity-60 group-hover:scale-110 transition-transform duration-1000" />
                <div className="absolute -bottom-20 -left-20 w-[500px] h-[500px] bg-[#AEE9F5]/20 rounded-full blur-[120px] group-hover:bg-[#AEE9F5]/30 transition-all duration-1000" />
                
                <div className="relative z-10 max-w-4xl mx-auto">
                    <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.2 }}>
                        <span className="inline-block px-5 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 text-[#AEE9F5] text-[10px] font-black uppercase tracking-[0.3em] mb-10 shadow-2xl">
                            Immediate Openings Available
                        </span>
                    </motion.div>
                    <motion.h2 initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.3 }} className="text-6xl md:text-9xl font-black text-white mb-10 tracking-tighter leading-[0.8] transition-all duration-700">
                        Smile with <br />
                        <span className="text-[#AEE9F5]">Prestige.</span>
                    </motion.h2>
                    <motion.p initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.4 }} className="text-gray-400 text-xl md:text-2xl mb-14 max-w-2xl mx-auto font-medium leading-relaxed">
                        Join the elite clinic family. Rediscover your confidence with treatments tailored to your lifestyle.
                    </motion.p>
                    <motion.div initial={{ y: 20, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.5 }}>
                        <Link href="/book-appointment">
                            <Button className="bg-white text-[#1A1A1A] rounded-full px-16 py-7 text-2xl hover:bg-[#AEE9F5] hover:scale-105 transition-all duration-500 font-black shadow-[0_20px_60px_rgba(255,255,255,0.1)] hover:shadow-[#AEE9F5]/30">
                                Claim My Session
                            </Button>
                        </Link>
                    </motion.div>
                    
                    <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.8 }} className="mt-20 flex flex-wrap justify-center gap-12 grayscale opacity-40 group-hover:opacity-80 transition-all duration-700">
                        {/* Subtle Trust Indicators */}
                        <div className="flex items-center gap-3">
                            <ShieldCheck className="w-5 h-5 text-white" />
                            <span className="text-white text-xs font-bold uppercase tracking-widest">ISO Certified</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Star className="w-5 h-5 text-white" />
                            <span className="text-white text-xs font-bold uppercase tracking-widest">Top Rated 2024</span>
                        </div>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    )
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
            question: "Is teeth whitening safe for my enamel?",
            answer: "Absolutely. When performed by professionals, teeth whitening is safe and effective. We use clinical-grade gels and advanced technology that protects your enamel while delivering superior brightening results."
        },
        {
            question: "What should I expect during my first visit?",
            answer: "Your first visit includes a comprehensive oral exam, digital X-rays if needed, and a detailed consultation. We'll discuss your goals, address any concerns, and create a personalized treatment plan specifically for your smile."
        }
    ];

    return (
        <section className="py-32 px-4 md:px-8 bg-white relative overflow-hidden">
            {/* Background Flair */}
            <div className="absolute top-1/2 left-0 w-80 h-80 bg-[hsl(188,78%,90%)] rounded-full blur-[120px] opacity-30 pointer-events-none" />
            
            <div className="max-w-[1000px] mx-auto relative z-10">
                <div className="text-center mb-20 px-4">
                    <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-gray-100 bg-gray-50 text-[10px] font-black tracking-[0.2em] text-gray-500 uppercase mb-8 shadow-sm">
                            <HelpCircle className="w-3.5 h-3.5 text-[#AEE9F5]" /> FAQ
                        </div>
                        <h2 className="text-5xl md:text-7xl font-black text-[#1A1A1A] tracking-tighter leading-[0.9] mb-8">
                            Curious? <br />
                            <span className="text-gray-400 font-medium">We have answers.</span>
                        </h2>
                        <p className="max-w-2xl mx-auto text-gray-500 text-lg md:text-xl font-medium leading-relaxed">
                            Find answers to common questions about our services, insurance, and dental health. Can't find what you're looking for? Contact our support team.
                        </p>
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
                            className={`group rounded-[32px] border transition-all duration-500 overflow-hidden ${activeIndex === index ? 'bg-white border-[#AEE9F5] shadow-[0_20px_50px_rgba(0,0,0,0.05)]' : 'bg-[#FBFBFC] border-gray-100 hover:border-gray-200'}`}
                        >
                            <button
                                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
                                className="w-full px-8 py-8 flex items-center justify-between text-left"
                            >
                                <span className={`text-xl md:text-2xl font-bold tracking-tight transition-colors duration-300 ${activeIndex === index ? 'text-[#1A1A1A]' : 'text-gray-600 group-hover:text-[#1A1A1A]'}`}>
                                    {faq.question}
                                </span>
                                <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 ${activeIndex === index ? 'bg-[#AEE9F5] rotate-180 text-[#1A1A1A]' : 'bg-white text-gray-400 group-hover:text-[#1A1A1A] group-hover:shadow-md'}`}>
                                    {activeIndex === index ? <Minus className="w-6 h-6" /> : <Plus className="w-6 h-6" />}
                                </div>
                            </button>
                            <AnimatePresence>
                                {activeIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        exit={{ height: 0, opacity: 0 }}
                                        transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                                    >
                                        <div className="px-8 pb-8">
                                            <p className="text-gray-500 text-lg md:text-xl leading-relaxed max-w-3xl border-t border-gray-100 pt-6">
                                                {faq.answer}
                                            </p>
                                        </div>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    ))}
                </div>

                <motion.div 
                    initial={{ opacity: 0 }} 
                    whileInView={{ opacity: 1 }} 
                    viewport={{ once: true }} 
                    transition={{ delay: 0.5 }}
                    className="mt-20 p-10 rounded-[48px] bg-[#1A1A1A] text-center relative overflow-hidden group shadow-2xl"
                >
                    <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl -mr-32 -mt-32 transition-transform duration-700 group-hover:scale-110" />
                    <h4 className="text-2xl font-bold text-white mb-4 relative z-10">Still have questions?</h4>
                    <p className="text-gray-400 mb-8 relative z-10">Our support team is ready to help you with anything you need.</p>
                    <Link href="/contact" className="relative z-10">
                        <Button className="bg-[#AEE9F5] text-[#1A1A1A] rounded-full px-10 py-5 font-black uppercase text-xs tracking-widest hover:bg-white transition-all shadow-xl">
                            Contact Support
                        </Button>
                    </Link>
                </motion.div>
            </div>
        </section>
    );
}

export const HomeFile = () => {
    return (
        <main className="flex flex-col gap-0 bg-white">
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