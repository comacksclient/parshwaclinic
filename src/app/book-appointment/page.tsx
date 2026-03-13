'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
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
const customEase = [0.22, 1, 0.36, 1] as any;

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: customEase } }
};

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const BookAppointmentPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        date: '',
        time: '',
        service: 'General Consultation',
        message: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            // Map frontend fields to Google Script expected names
            const payload = {
                patientName: formData.name,
                phoneNumber: formData.phone,
                treatmentType: formData.service,
                preferredDate: formData.date,
                preferredTimeSlot: formData.time,
                bookingTimestamp: new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
                bookingSource: 'Website',
                appointmentStatus: 'Pending Confirmation',
                // Keeping original data for backward compatibility if needed
                email: formData.email,
                message: formData.message
            };

            console.log(" Sending booking:", payload);

            const response = await fetch('/api/book', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(payload),
            });

            console.log(" Response status:", response.status);
            const result = await response.json();
            console.log(" Response data:", result);

            if (response.ok) {
                setSubmitStatus('success');
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    date: '',
                    time: '',
                    service: 'General Consultation',
                    message: ''
                });
                alert("Thank you! We will confirm your appointment shortly.");
            } else {
                setSubmitStatus('error');
                alert("Something went wrong. Please call us at +91 93288 20346");
            }
        } catch (error) {
            console.error(" Booking error:", error);
            setSubmitStatus('error');
            alert("Connection error. Please try again or call us at +91 93288 20346");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <main className="min-h-screen bg-[#FAFAFC] pt-32 pb-24 relative overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#AEE9F5]/20 rounded-full blur-[150px] pointer-events-none -translate-y-1/2 translate-x-1/3" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gray-200/50 rounded-full blur-[120px] pointer-events-none -translate-x-1/2 translate-y-1/2" />

            <div className="max-w-[1550px] mx-auto px-4 md:px-8 relative z-10">
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
                                {submitStatus !== 'success' ? (
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
                                            {/* Name */}
                                            <div>
                                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 block pl-2">Full Name</label>
                                                <div className="relative group">
                                                    <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                                                        <User className="w-5 h-5 text-gray-400 group-focus-within:text-[#AEE9F5] transition-colors" />
                                                    </div>
                                                    <input
                                                        required
                                                        type="text"
                                                        className="w-full bg-[#FAFAFC] border border-gray-100 rounded-[24px] pl-14 pr-6 py-4 text-[#1A1A1A] font-bold focus:outline-none focus:border-[#AEE9F5] focus:ring-4 focus:ring-[#AEE9F5]/20 transition-all duration-300"
                                                        placeholder="Rajat Sharma"
                                                        value={formData.name}
                                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                    />
                                                </div>
                                            </div>
                                            {/* Email */}
                                            <div>
                                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 block pl-2">Email Address</label>
                                                <div className="relative group">
                                                    <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                                                        <Phone className="w-5 h-5 text-gray-400 group-focus-within:text-[#AEE9F5] transition-colors" />
                                                    </div>
                                                    <input
                                                        required
                                                        type="email"
                                                        className="w-full bg-[#FAFAFC] border border-gray-100 rounded-[24px] pl-14 pr-6 py-4 text-[#1A1A1A] font-bold focus:outline-none focus:border-[#AEE9F5] focus:ring-4 focus:ring-[#AEE9F5]/20 transition-all duration-300"
                                                        placeholder="rajat@example.com"
                                                        value={formData.email}
                                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            {/* Phone Number */}
                                            <div>
                                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 block pl-2">Phone Number</label>
                                                <div className="relative group">
                                                    <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                                                        <Phone className="w-5 h-5 text-gray-400 group-focus-within:text-[#AEE9F5] transition-colors" />
                                                    </div>
                                                    <input
                                                        required
                                                        type="tel"
                                                        className="w-full bg-[#FAFAFC] border border-gray-100 rounded-[24px] pl-14 pr-6 py-4 text-[#1A1A1A] font-bold focus:outline-none focus:border-[#AEE9F5] focus:ring-4 focus:ring-[#AEE9F5]/20 transition-all duration-300"
                                                        placeholder="+91 00000 00000"
                                                        value={formData.phone}
                                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                    />
                                                </div>
                                            </div>

                                            {/* Select Service */}
                                            <div>
                                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 block pl-2">Select Service</label>
                                                <div className="relative group">
                                                    <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                                                        <Stethoscope className="w-5 h-5 text-gray-400 group-focus-within:text-[#AEE9F5] transition-colors" />
                                                    </div>
                                                    <select
                                                        className="w-full bg-[#FAFAFC] border border-gray-100 rounded-[24px] pl-14 pr-12 py-4 text-[#1A1A1A] font-bold focus:outline-none focus:border-[#AEE9F5] focus:ring-4 focus:ring-[#AEE9F5]/20 transition-all duration-300 appearance-none cursor-pointer"
                                                        value={formData.service}
                                                        onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                                                    >
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

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            {/* Preferred Date */}
                                            <div>
                                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 block pl-2">Preferred Date</label>
                                                <div className="relative group">
                                                    <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                                                        <Calendar className="w-5 h-5 text-gray-400 group-focus-within:text-[#AEE9F5] transition-colors" />
                                                    </div>
                                                    <input
                                                        required
                                                        type="date"
                                                        className="w-full bg-[#FAFAFC] border border-gray-100 rounded-[24px] pl-14 pr-6 py-4 text-[#1A1A1A] font-bold focus:outline-none focus:border-[#AEE9F5] focus:ring-4 focus:ring-[#AEE9F5]/20 transition-all duration-300"
                                                        value={formData.date}
                                                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                                    />
                                                </div>
                                            </div>

                                            {/* Preferred Time */}
                                            <div>
                                                <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 block pl-2">Preferred Time</label>
                                                <div className="relative group">
                                                    <div className="absolute inset-y-0 left-0 pl-5 flex items-center pointer-events-none">
                                                        <Clock className="w-5 h-5 text-gray-400 group-focus-within:text-[#AEE9F5] transition-colors" />
                                                    </div>
                                                    <input
                                                        required
                                                        type="time"
                                                        className="w-full bg-[#FAFAFC] border border-gray-100 rounded-[24px] pl-14 pr-6 py-4 text-[#1A1A1A] font-bold focus:outline-none focus:border-[#AEE9F5] focus:ring-4 focus:ring-[#AEE9F5]/20 transition-all duration-300"
                                                        value={formData.time}
                                                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Message */}
                                        <div>
                                            <label className="text-[10px] font-black text-gray-400 uppercase tracking-widest mb-2 block pl-2">Message (Optional)</label>
                                            <div className="relative group">
                                                <textarea
                                                    rows={3}
                                                    className="w-full bg-[#FAFAFC] border border-gray-100 rounded-[24px] px-6 py-4 text-[#1A1A1A] font-bold focus:outline-none focus:border-[#AEE9F5] focus:ring-4 focus:ring-[#AEE9F5]/20 transition-all duration-300 resize-none"
                                                    placeholder="Tell us about your dental concerns..."
                                                    value={formData.message}
                                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                                />
                                            </div>
                                        </div>

                                        <div className="pt-6">
                                            <button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className="w-full bg-[#1A1A1A] text-white rounded-[24px] py-6 text-xl font-black hover:bg-[#AEE9F5] hover:text-[#1A1A1A] shadow-[0_20px_40px_rgba(26,26,26,0.15)] hover:shadow-[0_20px_50px_rgba(174,233,245,0.3)] transition-all duration-500 transform active:scale-95 group flex items-center justify-center gap-3 disabled:opacity-50"
                                            >
                                                {isSubmitting ? "Confirming..." : "Confirm Appointment"}
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
                                            onClick={() => setSubmitStatus('idle')}
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

            {/* Google Maps Section */}
            <motion.div
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 1, ease: customEase }}
                className="max-w-[1550px] mx-auto px-4 md:px-8 mt-24"
            >
                <div className="w-full h-[450px] rounded-[48px] overflow-hidden border border-gray-100 shadow-[0_40px_100px_rgba(0,0,0,0.04)]">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117469.46710991734!2d72.51171447868013!3d23.063363291353383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8324ecf42d25%3A0x6adc73eacbd4d770!2sParshwa%20Dental%20Clinic%20%23Dr%20Shrenik%20shah%20%23Dr%20Dimple%20shah!5e0!3m2!1sen!2sin!4v1773425366462!5m2!1sen!2sin" width="100%" height="100%" loading="lazy" ></iframe>
                </div>
            </motion.div>
        </main>
    );
};

export default BookAppointmentPage;