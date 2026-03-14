'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import {
    MapPin,
    Phone,
    Mail,
    User,
    AtSign,
    MessageSquare,
    ArrowRight,
    CheckCircle2,
    ArrowUpRight,
    Navigation
} from 'lucide-react';

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

const ContactPage = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        const formData = new FormData(e.currentTarget);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            msg: formData.get('message'),
            subject: "Contact Form Website"
        };

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                setIsSubmitted(true);
            } else {
                const errData = await response.json();
                setError(errData.error || "Failed to send message.");
            }
        } catch (err) {
            setError("Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className="min-h-screen bg-[#f4f5f7] pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-12 items-start mb-12 md:mb-16">

                    {/* Left Side: Header & Contact Info (Bento Style) */}
                    <div className="lg:col-span-5 xl:col-span-4 flex flex-col gap-6 md:gap-8">

                        {/* Header Text */}
                        <motion.div initial="hidden" animate="visible" variants={staggerContainer}>
                            <motion.div variants={fadeInUp} className="inline-block border border-gray-200 bg-white text-[#131c15]/60 text-[9px] sm:text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-6">
                                Get In Touch
                            </motion.div>
                            <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#131c15] tracking-tight leading-[1.05] mb-4">
                                Let's Talk <br /> Smiles.
                            </motion.h1>
                            <motion.p variants={fadeInUp} className="text-[#131c15]/70 text-sm sm:text-base leading-relaxed font-medium max-w-sm">
                                Looking for a premium dentist in Sabarmati? Reach out to Parshwa Dental Clinic.
                            </motion.p>
                        </motion.div>

                        {/* Contact Method Cards */}
                        <motion.div
                            initial="hidden"
                            animate="visible"
                            variants={staggerContainer}
                            className="flex flex-col gap-4"
                        >
                            {/* Phone Card */}
                            <motion.a href="tel:+919328820346" variants={fadeInUp} className="bg-white p-5 sm:p-6 rounded-[24px] border border-gray-100 flex items-center gap-5 group hover:border-[#a9eaf7] transition-colors">
                                <div className="w-12 h-12 rounded-full bg-[#f4f5f7] flex items-center justify-center shrink-0 group-hover:bg-[#a9eaf7] transition-colors">
                                    <Phone className="w-5 h-5 text-[#131c15]" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold text-[#131c15]/50 uppercase tracking-widest mb-1">Call Us</p>
                                    <p className="text-base sm:text-lg font-bold text-[#131c15]">+91 93288 20346</p>
                                </div>
                            </motion.a>

                            {/* Email Card */}
                            <motion.a href="mailto:shrenik_shah16@yahoo.com" variants={fadeInUp} className="bg-white p-5 sm:p-6 rounded-[24px] border border-gray-100 flex items-center gap-5 group hover:border-[#a9eaf7] transition-colors">
                                <div className="w-12 h-12 rounded-full bg-[#f4f5f7] flex items-center justify-center shrink-0 group-hover:bg-[#a9eaf7] transition-colors">
                                    <Mail className="w-5 h-5 text-[#131c15]" />
                                </div>
                                <div className="overflow-hidden">
                                    <p className="text-[10px] font-bold text-[#131c15]/50 uppercase tracking-widest mb-1">Email Us</p>
                                    <p className="text-base sm:text-lg font-bold text-[#131c15] truncate">shrenik_shah16@yahoo.com</p>
                                </div>
                            </motion.a>

                            {/* Location Card */}
                            <motion.div variants={fadeInUp} className="bg-white p-5 sm:p-6 rounded-[24px] border border-gray-100 flex items-start gap-5">
                                <div className="w-12 h-12 rounded-full bg-[#a9eaf7] flex items-center justify-center shrink-0">
                                    <MapPin className="w-5 h-5 text-[#131c15]" />
                                </div>
                                <div>
                                    <p className="text-[10px] font-bold text-[#131c15]/50 uppercase tracking-widest mb-1">Visit Clinic</p>
                                    <p className="text-sm font-medium text-[#131c15]/80 leading-relaxed">
                                        21, 1st Floor, Trishla Complex <br />
                                        Opp. Podar School, New CG Road <br />
                                        Chandkheda, Ahmedabad – 382424
                                    </p>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Right Side: Contact Form (Dark Bento Box) */}
                    <div className="lg:col-span-7 xl:col-span-8 h-full">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.6, ease: customEase }}
                            className="bg-[#131c15] rounded-[32px] md:rounded-[40px] p-6 sm:p-8 md:p-12 h-full flex flex-col justify-center relative overflow-hidden"
                        >
                            <AnimatePresence mode="wait">
                                {!isSubmitted ? (
                                    <motion.div
                                        key="form"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0, scale: 0.98 }}
                                        transition={{ duration: 0.4 }}
                                    >
                                        <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8 tracking-tight">Send a Message</h3>
                                        <form className="flex flex-col gap-5 md:gap-6" onSubmit={handleSubmit}>

                                            <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                                                {/* Full Name */}
                                                <div>
                                                    <label className="text-[10px] font-bold text-white/50 uppercase tracking-widest mb-2 block pl-1">Full Name</label>
                                                    <div className="relative group">
                                                        <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                                                            <User className="w-4 h-4 text-white/40 group-focus-within:text-[#a9eaf7] transition-colors" />
                                                        </div>
                                                        <input required name="name" type="text" className="w-full bg-white/5 border border-white/10 rounded-[20px] pl-12 pr-6 py-4 text-white font-medium focus:outline-none focus:border-[#a9eaf7] focus:bg-white/10 transition-all duration-300 placeholder-white/20" placeholder="Rajat Sharma" />
                                                    </div>
                                                </div>

                                                {/* Email Address */}
                                                <div>
                                                    <label className="text-[10px] font-bold text-white/50 uppercase tracking-widest mb-2 block pl-1">Email Address</label>
                                                    <div className="relative group">
                                                        <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                                                            <AtSign className="w-4 h-4 text-white/40 group-focus-within:text-[#a9eaf7] transition-colors" />
                                                        </div>
                                                        <input required name="email" type="email" className="w-full bg-white/5 border border-white/10 rounded-[20px] pl-12 pr-6 py-4 text-white font-medium focus:outline-none focus:border-[#a9eaf7] focus:bg-white/10 transition-all duration-300 placeholder-white/20" placeholder="rajat@example.com" />
                                                    </div>
                                                </div>
                                            </div>

                                            {/* Message */}
                                            <div>
                                                <label className="text-[10px] font-bold text-white/50 uppercase tracking-widest mb-2 block pl-1">Message</label>
                                                <div className="relative group">
                                                    <div className="absolute top-5 left-5 pointer-events-none">
                                                        <MessageSquare className="w-4 h-4 text-white/40 group-focus-within:text-[#a9eaf7] transition-colors" />
                                                    </div>
                                                    <textarea required name="message" rows={4} className="w-full bg-white/5 border border-white/10 rounded-[20px] pl-12 pr-6 py-4 text-white font-medium focus:outline-none focus:border-[#a9eaf7] focus:bg-white/10 transition-all duration-300 resize-none placeholder-white/20" placeholder="How can we help you today?"></textarea>
                                                </div>
                                            </div>

                                            <div className="pt-2">
                                                <button type="submit" disabled={isSubmitting} className="w-full sm:w-auto inline-flex items-center justify-center bg-[#a9eaf7] text-[#131c15] rounded-full px-10 py-4 sm:py-5 text-sm sm:text-base font-bold hover:bg-white transition-all duration-300 gap-3 disabled:opacity-50 disabled:cursor-not-allowed group">
                                                    {isSubmitting ? "Sending..." : "Send Message"}
                                                    {!isSubmitting && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                                                </button>
                                                {error && <p className="text-red-400 text-xs font-bold mt-4">{error}</p>}
                                            </div>
                                        </form>
                                    </motion.div>
                                ) : (
                                    /* Success State */
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.4, ease: customEase }}
                                        className="flex flex-col items-center justify-center text-center h-full py-10"
                                    >
                                        <div className="w-20 h-20 bg-[#a9eaf7]/10 rounded-full flex items-center justify-center mb-6">
                                            <CheckCircle2 className="w-10 h-10 text-[#a9eaf7]" />
                                        </div>
                                        <h2 className="text-3xl font-bold text-white tracking-tight mb-4">Message Sent!</h2>
                                        <p className="text-white/60 text-base font-medium max-w-sm mx-auto mb-8 leading-relaxed">
                                            Thanks for reaching out. A member of our team will get back to you within 24 hours.
                                        </p>
                                        <button
                                            onClick={() => setIsSubmitted(false)}
                                            className="px-8 py-3 rounded-full bg-white/10 text-white text-xs font-bold hover:bg-white/20 transition-colors uppercase tracking-widest"
                                        >
                                            Send Another
                                        </button>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    </div>

                </div>

                {/* Google Maps Section - Clinical & Clean */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: customEase }}
                    className="w-full h-[400px] md:h-[500px] rounded-[32px] md:rounded-[40px] overflow-hidden border border-gray-200 relative group"
                >
                    {/* The actual iframe pointing to Parshwa Dental Clinic */}
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117469.46710991734!2d72.51171447868013!3d23.063363291353383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8324ecf42d25%3A0x6adc73eacbd4d770!2sParshwa%20Dental%20Clinic%20%23Dr%20Shrenik%20shah%20%23Dr%20Dimple%20shah!5e0!3m2!1sen!2sin!4v1773425366462!5m2!1sen!2sin" width="100%" height="100%" loading="lazy" ></iframe>


                    {/* "Get Directions" Floating Button */}
                    <a
                        href="https://maps.app.goo.gl/1RWCE7tsh1mLqPmE6"
                        target="_blank"
                        rel="noreferrer"
                        className="absolute bottom-6 right-6 md:bottom-8 md:right-8 bg-[#131c15] text-white px-6 py-4 rounded-full font-bold text-xs sm:text-sm flex items-center gap-2 z-20 shadow-xl hover:bg-[#a9eaf7] hover:text-[#131c15] transition-colors"
                    >
                        <Navigation className="w-4 h-4" /> Get Directions
                    </a>
                </motion.div>

            </div>
        </main>
    );
};

export default ContactPage;