'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Calendar,
    User,
    Phone,
    Stethoscope,
    ChevronDown,
    MapPin,
    Clock,
    CheckCircle2,
    ArrowRight
} from 'lucide-react';

// High-end Animation Variants
const customEase = [0.22, 1, 0.36, 1];

const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: customEase } }
};

const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const BookAppointmentPage = () => {
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Simulate API call
        setTimeout(() => setIsSubmitted(true), 600);
    };

    return (
        <main className="min-h-screen bg-[#FAFAFC] pt-32 pb-24 relative overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#AEE9F5]/20 rounded-full blur-[150px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gray-200/50 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 translate-y-1/2" />

            <div className="max-w-[1400px] mx-auto px-4 md:px-8 relative z-10">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

                    {/* Left Column: Context & Info */}
                    <div className="lg:col-span-5 flex flex-col justify-center">
                        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-md">
                            <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-100 text-[#1A1A1A] text-[10px] md:text-xs font-black tracking-[0.2em] uppercase mb-8 shadow-sm">
                                <Calendar className="w-3.5 h-3.5 text-[#AEE9F5]" /> Priority Booking
                            </motion.div>

                            <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-black text-[#1A1A1A] tracking-tighter leading-[0.88] mb-6">
                                Claim Your <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-200">Session.</span>
                            </motion.h1>

                            <motion.p variants={fadeInUp} className="text-lg text-gray-500 font-medium leading-relaxed mb-12">
                                Reserve your spot directly. Skip the wait and experience premium dental care in Sabarmati today.
                            </motion.p>

                            {/* Contact Details Cards */}
                            <motion.div variants={fadeInUp} className="space-y-4">
                                <div className="flex items-start gap-4 p-5 bg-white rounded-[24px] border border-gray-100 shadow-sm">
                                    <div className="w-12 h-12 rounded-[16px] bg-[#FAFAFC] flex items-center justify-center shrink-0">
                                        <MapPin className="w-5 h-5 text-[#1A1A1A]" />
                                    </div>
                                    <div>
                                        <h4 className="font-black text-[#1A1A1A] mb-1">Clinic Location</h4>
                                        <p className="text-sm text-gray-500 font-medium">Sabarmati, Chandkheda, <br /> Ahmedabad, Gujarat</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 p-5 bg-white rounded-[24px] border border-gray-100 shadow-sm">
                                    <div className="w-12 h-12 rounded-[16px] bg-[#FAFAFC] flex items-center justify-center shrink-0">
                                        <Clock className="w-5 h-5 text-[#1A1A1A]" />
                                    </div>
                                    <div>
                                        <h4 className="font-black text-[#1A1A1A] mb-1">Working Hours</h4>
                                        <p className="text-sm text-gray-500 font-medium">Mon - Sat: 10AM - 2PM, 5PM - 9PM <br /> Sunday: Closed</p>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Right Column: The Form Engine */}
                    <div className="lg:col-span-7">
                        <motion.div
                            initial={{ opacity: 0, x: 40 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, ease: customEase }}
                            className="bg-white rounded-[48px] p-8 md:p-12 shadow-[0_40px_100px_rgba(0,0,0,0.04)] border border-gray-100 relative overflow-hidden min-h-[600px] flex flex-col justify-center"
                        >
                            <AnimatePresence mode="wait">
                                {!isSubmitted ? (
                                    <motion.form
                                        key="form"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0, scale: 0.95 }}
                                        transition={{ duration: 0.4 }}
                                        className="flex flex-col gap-6"
                                        onSubmit={handleSubmit}
                                    >
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            {/* First Name */}
                                            <div>
                                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 block pl-2">First Name</label>
                                                <div className="relative group">
                                                    <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                                                        <User className="w-5 h-5 text-gray-400 group-focus-within:text-[#AEE9F5] transition-colors" />
                                                    </div>
                                                    <input required type="text" className="w-full bg-[#FAFAFC] border border-gray-100 rounded-[24px] pl-14 pr-6 py-4 text-[#1A1A1A] font-bold focus:outline-none focus:border-[#AEE9F5] focus:ring-4 focus:ring-[#AEE9F5]/20 transition-all duration-300" placeholder="Jane" />
                                                </div>
                                            </div>
                                            {/* Last Name */}
                                            <div>
                                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 block pl-2">Last Name</label>
                                                <div className="relative group">
                                                    <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                                                        <User className="w-5 h-5 text-gray-400 group-focus-within:text-[#AEE9F5] transition-colors" />
                                                    </div>
                                                    <input required type="text" className="w-full bg-[#FAFAFC] border border-gray-100 rounded-[24px] pl-14 pr-6 py-4 text-[#1A1A1A] font-bold focus:outline-none focus:border-[#AEE9F5] focus:ring-4 focus:ring-[#AEE9F5]/20 transition-all duration-300" placeholder="Doe" />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Phone Number */}
                                        <div>
                                            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 block pl-2">Phone Number</label>
                                            <div className="relative group">
                                                <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                                                    <Phone className="w-5 h-5 text-gray-400 group-focus-within:text-[#AEE9F5] transition-colors" />
                                                </div>
                                                <input required type="tel" className="w-full bg-[#FAFAFC] border border-gray-100 rounded-[24px] pl-14 pr-6 py-4 text-[#1A1A1A] font-bold focus:outline-none focus:border-[#AEE9F5] focus:ring-4 focus:ring-[#AEE9F5]/20 transition-all duration-300" placeholder="+91 00000 00000" />
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            {/* Preferred Date */}
                                            <div>
                                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 block pl-2">Preferred Date</label>
                                                <div className="relative group">
                                                    <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                                                        <Calendar className="w-5 h-5 text-gray-400 group-focus-within:text-[#AEE9F5] transition-colors" />
                                                    </div>
                                                    <input required type="date" className="w-full bg-[#FAFAFC] border border-gray-100 rounded-[24px] pl-14 pr-6 py-4 text-[#1A1A1A] font-bold focus:outline-none focus:border-[#AEE9F5] focus:ring-4 focus:ring-[#AEE9F5]/20 transition-all duration-300" />
                                                </div>
                                            </div>

                                            {/* Select Service */}
                                            <div>
                                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 block pl-2">Select Service</label>
                                                <div className="relative group">
                                                    <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                                                        <Stethoscope className="w-5 h-5 text-gray-400 group-focus-within:text-[#AEE9F5] transition-colors" />
                                                    </div>
                                                    <select className="w-full bg-[#FAFAFC] border border-gray-100 rounded-[24px] pl-14 pr-12 py-4 text-[#1A1A1A] font-bold focus:outline-none focus:border-[#AEE9F5] focus:ring-4 focus:ring-[#AEE9F5]/20 transition-all duration-300 appearance-none cursor-pointer">
                                                        <option>General Consultation</option>
                                                        <option>Teeth Whitening</option>
                                                        <option>Dental Implants</option>
                                                        <option>Braces / Aligners</option>
                                                        <option>Root Canal</option>
                                                        <option>Emergency Service</option>
                                                    </select>
                                                    <div className="absolute inset-y-0 right-0 pr-5 flex items-center pointer-events-none">
                                                        <ChevronDown className="w-5 h-5 text-gray-400" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="pt-6">
                                            <button type="submit" className="w-full bg-[#1A1A1A] text-white rounded-[24px] py-6 text-xl font-black hover:bg-[#AEE9F5] hover:text-[#1A1A1A] shadow-[0_20px_40px_rgba(26,26,26,0.15)] hover:shadow-[0_20px_50px_rgba(174,233,245,0.3)] transition-all duration-500 transform active:scale-95 group flex items-center justify-center gap-3">
                                                Confirm Appointment
                                                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
                                            </button>
                                        </div>
                                        <p className="text-center text-[10px] text-gray-400 font-bold uppercase tracking-widest mt-2 flex items-center justify-center gap-2">
                                            <CheckCircle2 className="w-3.5 h-3.5 text-green-500" /> No hidden fees. We will call to confirm.
                                        </p>
                                    </motion.form>
                                ) : (
                                    /* Success State */
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.9 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.6, ease: customEase }}
                                        className="flex flex-col items-center justify-center text-center h-full space-y-6"
                                    >
                                        <div className="w-24 h-24 bg-[#AEE9F5]/20 rounded-full flex items-center justify-center mb-4 relative">
                                            <div className="absolute inset-0 bg-[#AEE9F5] rounded-full animate-ping opacity-20" />
                                            <CheckCircle2 className="w-12 h-12 text-[#AEE9F5]" />
                                        </div>
                                        <h2 className="text-4xl font-black text-[#1A1A1A] tracking-tight">Request Received!</h2>
                                        <p className="text-gray-500 text-lg font-medium max-w-sm mx-auto">
                                            Thank you for choosing Parshwa Dental Clinic. Our team will contact you shortly to confirm your exact slot.
                                        </p>
                                        <button
                                            onClick={() => setIsSubmitted(false)}
                                            className="mt-8 px-8 py-3 rounded-full bg-gray-100 text-[#1A1A1A] font-bold hover:bg-gray-200 transition-colors text-sm uppercase tracking-widest"
                                        >
                                            Book Another
                                        </button>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </motion.div>
                    </div>

                </div>
            </div>
        </main>
    );
};

export default BookAppointmentPage;