'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    MapPin,
    Phone,
    Mail,
    User,
    AtSign,
    MessageSquare,
    ArrowRight,
    CheckCircle2,
    ArrowUpRight
} from 'lucide-react';

// High-end Animation Variants
const customEase = [0.22, 1, 0.36, 1];

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: customEase } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const ContactPage = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate API call
        setTimeout(() => setIsSubmitted(true), 600);
    };

    return (
        <main className="min-h-screen bg-[#FAFAFC] pt-32 pb-24 relative overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#AEE9F5]/20 rounded-full blur-[150px] pointer-events-none -translate-x-1/2 -translate-y-1/2" />

            <div className="max-w-[1400px] mx-auto px-4 md:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: customEase }}
                    className="bg-[#1A1A1A] rounded-[60px] lg:rounded-[80px] p-8 md:p-12 lg:p-20 shadow-[0_40px_100px_rgba(26,26,26,0.15)] relative overflow-hidden"
                >
                    {/* Dark Mode Internal Glows */}
                    <div className="absolute -top-[20%] -right-[10%] w-[600px] h-[600px] bg-[#AEE9F5]/10 rounded-full blur-[120px] pointer-events-none" />
                    <div className="absolute -bottom-[20%] -left-[10%] w-[500px] h-[500px] bg-white/5 rounded-full blur-[100px] pointer-events-none" />

                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 relative z-10">

                        {/* Left Side: Contact Info */}
                        <div className="lg:col-span-6 flex flex-col justify-center">
                            <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
                                <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white text-[10px] md:text-xs font-black tracking-[0.2em] uppercase mb-8 shadow-sm">
                                    <MessageSquare className="w-3.5 h-3.5 text-[#AEE9F5]" /> Get In Touch
                                </motion.div>

                                <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tighter leading-[0.88] mb-8">
                                    Let's Talk <br />
                                    <span className="text-[#AEE9F5]">Smiles.</span>
                                </motion.h1>

                                <motion.p variants={fadeInUp} className="text-gray-400 text-lg md:text-xl max-w-md leading-relaxed mb-16 font-medium">
                                    Looking for a premium dentist in Sabarmati? Reach out to Parshwa Dental Clinic. We're here to answer all your questions.
                                </motion.p>

                                <motion.div variants={staggerContainer} className="flex flex-col gap-10 text-white">
                                    {/* Location */}
                                    <motion.a href="https://maps.google.com" target="_blank" rel="noreferrer" variants={fadeInUp} className="flex gap-6 items-start group cursor-pointer">
                                        <div className="w-14 h-14 rounded-[20px] bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#AEE9F5] group-hover:scale-110 transition-all duration-500">
                                            <MapPin className="w-6 h-6 text-[#AEE9F5] group-hover:text-[#1A1A1A] transition-colors" />
                                        </div>
                                        <div className="flex-1 group-hover:translate-x-2 transition-transform duration-500">
                                            <h4 className="font-black text-xl mb-2 flex items-center gap-2">
                                                Visit Clinic <ArrowUpRight className="w-4 h-4 opacity-0 -translate-y-1 -translate-x-1 group-hover:opacity-100 group-hover:translate-y-0 group-hover:translate-x-0 transition-all duration-300 text-[#AEE9F5]" />
                                            </h4>
                                            <p className="text-gray-400 text-base leading-relaxed font-medium group-hover:text-gray-300 transition-colors">
                                                21, 1st Floor, Trishla Complex <br /> Opp. Podar School, New CG Road <br /> Chandkheda, Ahmedabad – 382424
                                            </p>
                                        </div>
                                    </motion.a>

                                    {/* Phone */}
                                    <motion.a href="tel:+919328820346" variants={fadeInUp} className="flex gap-6 items-start group cursor-pointer">
                                        <div className="w-14 h-14 rounded-[20px] bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#AEE9F5] group-hover:scale-110 transition-all duration-500">
                                            <Phone className="w-6 h-6 text-[#AEE9F5] group-hover:text-[#1A1A1A] transition-colors" />
                                        </div>
                                        <div className="flex-1 group-hover:translate-x-2 transition-transform duration-500">
                                            <h4 className="font-black text-xl mb-1">Call Us</h4>
                                            <span className="text-gray-400 text-lg font-medium group-hover:text-[#AEE9F5] transition-colors">(+91) 93288 20346</span>
                                        </div>
                                    </motion.a>

                                    {/* Email */}
                                    <motion.a href="mailto:shrenik_shah16@yahoo.com" variants={fadeInUp} className="flex gap-6 items-start group cursor-pointer">
                                        <div className="w-14 h-14 rounded-[20px] bg-white/5 border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#AEE9F5] group-hover:scale-110 transition-all duration-500">
                                            <Mail className="w-6 h-6 text-[#AEE9F5] group-hover:text-[#1A1A1A] transition-colors" />
                                        </div>
                                        <div className="flex-1 group-hover:translate-x-2 transition-transform duration-500">
                                            <h4 className="font-black text-xl mb-1">Email Us</h4>
                                            <span className="text-gray-400 text-lg font-medium group-hover:text-[#AEE9F5] transition-colors">shrenik_shah16@yahoo.com</span>
                                        </div>
                                    </motion.a>
                                </motion.div>
                            </motion.div>
                        </div>

                        {/* Right Side: Contact Form */}
                        <div className="lg:col-span-6">
                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.4, duration: 0.8, ease: customEase }}
                                className="bg-white rounded-[48px] p-8 md:p-12 shadow-[0_30px_60px_rgba(0,0,0,0.2)] min-h-[600px] flex flex-col justify-center relative overflow-hidden"
                            >
                                <AnimatePresence mode="wait">
                                    {!isSubmitted ? (
                                        <motion.div
                                            key="form"
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: 1 }}
                                            exit={{ opacity: 0, scale: 0.95 }}
                                            transition={{ duration: 0.4 }}
                                        >
                                            <h3 className="text-3xl font-black text-[#1A1A1A] mb-8 tracking-tight">Send a Message</h3>
                                            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>

                                                {/* Full Name */}
                                                <div>
                                                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 block pl-2">Full Name</label>
                                                    <div className="relative group">
                                                        <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                                                            <User className="w-5 h-5 text-gray-400 group-focus-within:text-[#1A1A1A] transition-colors" />
                                                        </div>
                                                        <input required type="text" className="w-full bg-[#FAFAFC] border border-gray-100 rounded-[24px] pl-14 pr-6 py-4 text-[#1A1A1A] font-bold focus:outline-none focus:border-[#1A1A1A] focus:ring-4 focus:ring-gray-100 transition-all duration-300" placeholder="John Doe" />
                                                    </div>
                                                </div>

                                                {/* Email Address */}
                                                <div>
                                                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 block pl-2">Email Address</label>
                                                    <div className="relative group">
                                                        <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                                                            <AtSign className="w-5 h-5 text-gray-400 group-focus-within:text-[#1A1A1A] transition-colors" />
                                                        </div>
                                                        <input required type="email" className="w-full bg-[#FAFAFC] border border-gray-100 rounded-[24px] pl-14 pr-6 py-4 text-[#1A1A1A] font-bold focus:outline-none focus:border-[#1A1A1A] focus:ring-4 focus:ring-gray-100 transition-all duration-300" placeholder="john@example.com" />
                                                    </div>
                                                </div>

                                                {/* Message */}
                                                <div>
                                                    <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 block pl-2">Message</label>
                                                    <div className="relative group">
                                                        <div className="absolute top-5 left-5 pointer-events-none">
                                                            <MessageSquare className="w-5 h-5 text-gray-400 group-focus-within:text-[#1A1A1A] transition-colors" />
                                                        </div>
                                                        <textarea required rows={4} className="w-full bg-[#FAFAFC] border border-gray-100 rounded-[24px] pl-14 pr-6 py-4 text-[#1A1A1A] font-bold focus:outline-none focus:border-[#1A1A1A] focus:ring-4 focus:ring-gray-100 transition-all duration-300 resize-none" placeholder="How can we help you today?"></textarea>
                                                    </div>
                                                </div>

                                                <div className="pt-4">
                                                    <button type="submit" className="w-full bg-[#1A1A1A] text-white rounded-[24px] py-6 text-lg font-black tracking-wide hover:bg-[#AEE9F5] hover:text-[#1A1A1A] transition-all duration-500 transform active:scale-95 group flex items-center justify-center gap-3 shadow-[0_10px_20px_rgba(26,26,26,0.1)]">
                                                        Send Message
                                                        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                                    </button>
                                                </div>
                                            </form>
                                        </motion.div>
                                    ) : (
                                        /* Success State */
                                        <motion.div
                                            key="success"
                                            initial={{ opacity: 0, scale: 0.9 }}
                                            animate={{ opacity: 1, scale: 1 }}
                                            transition={{ duration: 0.6, ease: customEase }}
                                            className="flex flex-col items-center justify-center text-center h-full space-y-6"
                                        >
                                            <div className="w-24 h-24 bg-[#F0FDF4] rounded-full flex items-center justify-center mb-4 relative">
                                                <div className="absolute inset-0 bg-green-200 rounded-full animate-ping opacity-30" />
                                                <CheckCircle2 className="w-12 h-12 text-green-500" />
                                            </div>
                                            <h2 className="text-4xl font-black text-[#1A1A1A] tracking-tight">Message Sent!</h2>
                                            <p className="text-gray-500 text-lg font-medium max-w-sm mx-auto">
                                                Thanks for reaching out. A member of our team will get back to you within 24 hours.
                                            </p>
                                            <button
                                                onClick={() => setIsSubmitted(false)}
                                                className="mt-8 px-8 py-3 rounded-full bg-gray-100 text-[#1A1A1A] font-bold hover:bg-gray-200 transition-colors text-sm uppercase tracking-widest"
                                            >
                                                Send Another
                                            </button>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </motion.div>
                        </div>

                    </div>
                </motion.div>
            </div>
        </main>
    );
};

export default ContactPage;