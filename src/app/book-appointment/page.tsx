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
    ArrowRight,
    Mail
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

const BookAppointmentPage = () => {
    // --- LOGIC KEPT EXACTLY INTACT ---
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
    // ---------------------------------

    return (
        <main className="min-h-screen bg-[#f4f5f7] pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">

                    {/* Left Column: Context & Info */}
                    <div className="lg:col-span-5 flex flex-col justify-center">
                        <motion.div initial="hidden" animate="visible" variants={staggerContainer} className="max-w-md lg:sticky lg:top-36">

                            <motion.div variants={fadeInUp} className="inline-block border border-gray-200 bg-white text-[#131c15]/60 text-[9px] sm:text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-6">
                                Priority Booking
                            </motion.div>

                            <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl md:text-6xl font-bold text-[#131c15] tracking-tight leading-[1.05] mb-4">
                                Claim Your <br />
                                Session.
                            </motion.h1>

                            <motion.p variants={fadeInUp} className="text-[#131c15]/70 text-sm sm:text-base leading-relaxed font-medium mb-10">
                                Reserve your spot directly. Skip the wait and experience premium dental care in Sabarmati today.
                            </motion.p>

                            {/* Contact Details Cards (Bento Style) */}
                            <motion.div variants={fadeInUp} className="space-y-4">
                                <div className="flex items-start gap-4 p-5 sm:p-6 bg-white rounded-[24px] border border-gray-100 hover:border-gray-200 transition-colors group">
                                    <div className="w-12 h-12 rounded-full bg-[#f4f5f7] flex items-center justify-center shrink-0 group-hover:bg-[#a9eaf7] transition-colors duration-300">
                                        <MapPin className="w-5 h-5 text-[#131c15]" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#131c15] mb-1">Clinic Location</h4>
                                        <p className="text-sm text-[#131c15]/60 font-medium leading-relaxed">
                                            21, 1st Floor, Trishla Complex <br />
                                            Opp. Podar School, New CG Road <br />
                                            Sabarmati, Ahmedabad
                                        </p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 p-5 sm:p-6 bg-white rounded-[24px] border border-gray-100 hover:border-gray-200 transition-colors group">
                                    <div className="w-12 h-12 rounded-full bg-[#f4f5f7] flex items-center justify-center shrink-0 group-hover:bg-[#a9eaf7] transition-colors duration-300">
                                        <Clock className="w-5 h-5 text-[#131c15]" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-[#131c15] mb-1">Working Hours</h4>
                                        <p className="text-sm text-[#131c15]/60 font-medium leading-relaxed">
                                            Mon - Sat: 10AM - 9PM <br />
                                            Sunday: Closed
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    </div>

                    {/* Right Column: The Form Engine */}
                    <div className="lg:col-span-7 h-full">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6, ease: customEase }}
                            className="bg-white rounded-[32px] md:rounded-[40px] p-6 sm:p-8 md:p-10 lg:p-12 border border-gray-100 shadow-sm relative overflow-hidden h-full flex flex-col justify-center"
                        >
                            <AnimatePresence mode="wait">
                                {submitStatus !== 'success' ? (
                                    <motion.form
                                        key="form"
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        exit={{ opacity: 0, scale: 0.98 }}
                                        transition={{ duration: 0.4 }}
                                        className="flex flex-col gap-5 md:gap-6"
                                        onSubmit={handleSubmit}
                                    >
                                        <h3 className="text-2xl sm:text-3xl font-bold text-[#131c15] tracking-tight mb-2">Book an Appointment</h3>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                                            {/* Name */}
                                            <div>
                                                <label className="text-[10px] font-bold text-[#131c15]/50 uppercase tracking-widest mb-2 block pl-1">Full Name</label>
                                                <div className="relative group">
                                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                                        <User className="w-4 h-4 text-[#131c15]/40 group-focus-within:text-[#131c15] transition-colors" />
                                                    </div>
                                                    <input
                                                        required
                                                        type="text"
                                                        className="w-full bg-[#f4f5f7] border border-gray-200 rounded-[20px] pl-11 pr-4 py-3.5 text-[#131c15] text-sm font-medium focus:outline-none focus:border-[#a9eaf7] focus:bg-white focus:ring-4 focus:ring-[#a9eaf7]/20 transition-all duration-300"
                                                        placeholder="Rajat Sharma"
                                                        value={formData.name}
                                                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                                    />
                                                </div>
                                            </div>
                                            {/* Email */}
                                            <div>
                                                <label className="text-[10px] font-bold text-[#131c15]/50 uppercase tracking-widest mb-2 block pl-1">Email Address</label>
                                                <div className="relative group">
                                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                                        <Mail className="w-4 h-4 text-[#131c15]/40 group-focus-within:text-[#131c15] transition-colors" />
                                                    </div>
                                                    <input
                                                        required
                                                        type="email"
                                                        className="w-full bg-[#f4f5f7] border border-gray-200 rounded-[20px] pl-11 pr-4 py-3.5 text-[#131c15] text-sm font-medium focus:outline-none focus:border-[#a9eaf7] focus:bg-white focus:ring-4 focus:ring-[#a9eaf7]/20 transition-all duration-300"
                                                        placeholder="rajat@example.com"
                                                        value={formData.email}
                                                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                                            {/* Phone Number */}
                                            <div>
                                                <label className="text-[10px] font-bold text-[#131c15]/50 uppercase tracking-widest mb-2 block pl-1">Phone Number</label>
                                                <div className="relative group">
                                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                                        <Phone className="w-4 h-4 text-[#131c15]/40 group-focus-within:text-[#131c15] transition-colors" />
                                                    </div>
                                                    <input
                                                        required
                                                        type="tel"
                                                        className="w-full bg-[#f4f5f7] border border-gray-200 rounded-[20px] pl-11 pr-4 py-3.5 text-[#131c15] text-sm font-medium focus:outline-none focus:border-[#a9eaf7] focus:bg-white focus:ring-4 focus:ring-[#a9eaf7]/20 transition-all duration-300"
                                                        placeholder="+91 00000 00000"
                                                        value={formData.phone}
                                                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                                    />
                                                </div>
                                            </div>

                                            {/* Select Service */}
                                            <div>
                                                <label className="text-[10px] font-bold text-[#131c15]/50 uppercase tracking-widest mb-2 block pl-1">Select Service</label>
                                                <div className="relative group">
                                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                                        <Stethoscope className="w-4 h-4 text-[#131c15]/40 group-focus-within:text-[#131c15] transition-colors" />
                                                    </div>
                                                    <select
                                                        className="w-full bg-[#f4f5f7] border border-gray-200 rounded-[20px] pl-11 pr-10 py-3.5 text-[#131c15] text-sm font-medium focus:outline-none focus:border-[#a9eaf7] focus:bg-white focus:ring-4 focus:ring-[#a9eaf7]/20 transition-all duration-300 appearance-none cursor-pointer"
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
                                                    <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none">
                                                        <ChevronDown className="w-4 h-4 text-[#131c15]/40" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                                            {/* Preferred Date */}
                                            <div>
                                                <label className="text-[10px] font-bold text-[#131c15]/50 uppercase tracking-widest mb-2 block pl-1">Preferred Date</label>
                                                <div className="relative group">
                                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                                        <Calendar className="w-4 h-4 text-[#131c15]/40 group-focus-within:text-[#131c15] transition-colors" />
                                                    </div>
                                                    <input
                                                        required
                                                        type="date"
                                                        className="w-full bg-[#f4f5f7] border border-gray-200 rounded-[20px] pl-11 pr-4 py-3.5 text-[#131c15] text-sm font-medium focus:outline-none focus:border-[#a9eaf7] focus:bg-white focus:ring-4 focus:ring-[#a9eaf7]/20 transition-all duration-300"
                                                        value={formData.date}
                                                        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
                                                    />
                                                </div>
                                            </div>

                                            {/* Preferred Time */}
                                            <div>
                                                <label className="text-[10px] font-bold text-[#131c15]/50 uppercase tracking-widest mb-2 block pl-1">Preferred Time</label>
                                                <div className="relative group">
                                                    <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                                                        <Clock className="w-4 h-4 text-[#131c15]/40 group-focus-within:text-[#131c15] transition-colors" />
                                                    </div>
                                                    <input
                                                        required
                                                        type="time"
                                                        className="w-full bg-[#f4f5f7] border border-gray-200 rounded-[20px] pl-11 pr-4 py-3.5 text-[#131c15] text-sm font-medium focus:outline-none focus:border-[#a9eaf7] focus:bg-white focus:ring-4 focus:ring-[#a9eaf7]/20 transition-all duration-300"
                                                        value={formData.time}
                                                        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        {/* Message */}
                                        <div>
                                            <label className="text-[10px] font-bold text-[#131c15]/50 uppercase tracking-widest mb-2 block pl-1">Message (Optional)</label>
                                            <div className="relative group">
                                                <textarea
                                                    rows={3}
                                                    className="w-full bg-[#f4f5f7] border border-gray-200 rounded-[20px] px-5 py-4 text-[#131c15] text-sm font-medium focus:outline-none focus:border-[#a9eaf7] focus:bg-white focus:ring-4 focus:ring-[#a9eaf7]/20 transition-all duration-300 resize-none"
                                                    placeholder="Tell us about your dental concerns..."
                                                    value={formData.message}
                                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                                />
                                            </div>
                                        </div>

                                        <div className="pt-2">
                                            <button
                                                type="submit"
                                                disabled={isSubmitting}
                                                className="w-full bg-[#a9eaf7] text-[#131c15] rounded-[20px] py-4 sm:py-5 text-sm sm:text-base font-bold hover:bg-[#8cdcf0] transition-colors flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed group"
                                            >
                                                {isSubmitting ? "Confirming..." : "Confirm Appointment"}
                                                {!isSubmitting && <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />}
                                            </button>
                                        </div>
                                        <p className="text-center text-[10px] text-[#131c15]/50 font-bold uppercase tracking-widest flex items-center justify-center gap-2">
                                            <CheckCircle2 className="w-3.5 h-3.5 text-[#a9eaf7]" /> No hidden fees. We will call to confirm.
                                        </p>
                                    </motion.form>
                                ) : (
                                    /* Success State */
                                    <motion.div
                                        key="success"
                                        initial={{ opacity: 0, scale: 0.95 }}
                                        animate={{ opacity: 1, scale: 1 }}
                                        transition={{ duration: 0.4, ease: customEase }}
                                        className="flex flex-col items-center justify-center text-center h-full py-12"
                                    >
                                        <div className="w-20 h-20 bg-[#a9eaf7]/20 rounded-full flex items-center justify-center mb-6">
                                            <CheckCircle2 className="w-10 h-10 text-[#131c15]" />
                                        </div>
                                        <h2 className="text-3xl font-bold text-[#131c15] tracking-tight mb-4">Request Received!</h2>
                                        <p className="text-[#131c15]/60 text-base font-medium max-w-sm mx-auto mb-8">
                                            Thank you for choosing Parshwa Dental Clinic. Our team will contact you shortly to confirm your exact slot.
                                        </p>
                                        <button
                                            onClick={() => setSubmitStatus('idle')}
                                            className="px-8 py-3 rounded-full bg-[#131c15] text-white text-xs font-bold hover:bg-[#2a3b2e] transition-colors uppercase tracking-widest"
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
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: customEase }}
                className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8 mt-16 md:mt-24"
            >
                <div className="w-full h-[350px] md:h-[450px] rounded-[32px] md:rounded-[40px] overflow-hidden border border-gray-200 group">
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d117469.46710991734!2d72.51171447868013!3d23.063363291353383!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e8324ecf42d25%3A0x6adc73eacbd4d770!2sParshwa%20Dental%20Clinic%20%23Dr%20Shrenik%20shah%20%23Dr%20Dimple%20shah!5e0!3m2!1sen!2sin!4v1773425366462!5m2!1sen!2sin" width="100%" height="100%" loading="lazy" ></iframe>
                </div>
            </motion.div>
        </main>
    );
};

export default BookAppointmentPage;