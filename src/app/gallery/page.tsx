'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Camera, ArrowUpRight, ArrowRight } from 'lucide-react';
import Link from 'next/link';

// High-end Animation Variants
const customEase = [0.22, 1, 0.36, 1] as any;

const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: customEase } }
};

const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const GalleryPage = () => {
    // High-quality dental/clinic placeholder images
    const galleryItems = [
        { id: 1, src: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerbIMwcyy0BPAl_GSffAncZ7U4eR7O2CWJkTrSoa6sFrdyShFfpJ8jz6r8k88bR3-cXmXUWPqSZAggmr7Ub16KJYAfb0EJd9REtCnuM5Hg1z2DWNB7R1mSRFtQMUd1t8nsu4hra=s1360-w1360-h1020-rw" },
        { id: 2, src: "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerg1lNPfTdZXoQWLqrsw3KcaWfEX6vUqiKN-3bKSw8ooszNGGJnSRQ1RH0eMCd57zihsjD3Rd_GYfeBG9BMQwjbDtRpu7Uvd0qlxhV8iXf_TysFf6DS0H7ddgf8jwijWZ281cx2HQ=s1360-w1360-h1020-rw" },
        { id: 3, src: "https://lh3.googleusercontent.com/p/AF1QipNyxU3kihy0brPQgumBPCif15wPtQCO0Ln7pN_Q=s1360-w1360-h1020-rw" },
        { id: 4, src: "https://lh3.googleusercontent.com/p/AF1QipOWM6072jPhQ6ChW2et4q2s744gz7WwsaE0RBbj=s1360-w1360-h1020-rw" },
        { id: 5, src: "https://lh3.googleusercontent.com/p/AF1QipOpbwh8fmFq3lXASu3Z1id6G-J4D5ld-fD9zqsv=s1360-w1360-h1020-rw" },
        { id: 6, src: "https://lh3.googleusercontent.com/p/AF1QipPC4zSN1guQMbUuxiOOcnGljHnwaa8QBr7e745X=s1360-w1360-h1020-rw" }
    ];

    return (
        <main className="min-h-screen bg-[#f4f5f7] pt-28 md:pt-36 pb-16 md:pb-24 overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-8">

                {/* Header Section */}
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={staggerContainer}
                    className="text-center max-w-3xl mx-auto mb-12 md:mb-16"
                >
                    <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 border border-gray-200 bg-white text-[#131c15]/60 text-[9px] sm:text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-widest mb-6">
                        <Camera className="w-3 h-3 text-[#a9eaf7]" /> Inside Parshwa
                    </motion.div>

                    <motion.h1 variants={fadeInUp} className="text-4xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-bold text-[#131c15] tracking-tight leading-[1.05] mb-6">
                        Our Clinic <br className="hidden sm:block" /> Gallery.
                    </motion.h1>

                    <motion.p variants={fadeInUp} className="text-base md:text-lg text-[#131c15]/70 leading-relaxed font-medium">
                        Take a tour of our state-of-the-art clinic in Sabarmati, and discover why we are rated the top dental destination in the area.
                    </motion.p>
                </motion.div>

                {/* Gallery Grid (Bento Box Style) */}
                <motion.div layout className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-24 md:mb-32">
                    <AnimatePresence mode="popLayout">
                        {galleryItems.map((item) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.4, ease: customEase }}
                                key={item.id}
                                className="group bg-white p-2 md:p-3 rounded-[24px] md:rounded-[32px] border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.02)] hover:shadow-[0_10px_40px_rgba(0,0,0,0.06)] hover:border-gray-200 transition-all duration-500 cursor-pointer"
                            >
                                <div className="relative w-full aspect-[4/3] rounded-[18px] md:rounded-[24px] overflow-hidden bg-[#f4f5f7]">
                                    <img
                                        src={item.src}
                                        alt="Gallery Image"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-[0.22,1,0.36,1]"
                                    />

                                    {/* Elegant Hover Overlay */}
                                    <div className="absolute inset-0 bg-[#131c15]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    {/* Icon Reveal */}
                                    <div className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-[#131c15] opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 delay-75 shadow-lg">
                                        <ArrowUpRight className="w-5 h-5 group-hover:rotate-45 transition-transform duration-500" />
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Bottom Call to Action */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: customEase }}
                    className="bg-[#131c15] rounded-[32px] md:rounded-[40px] p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 relative overflow-hidden"
                >
                    {/* Subtle design accent */}
                    <div className="absolute -right-24 -top-24 w-64 h-64 border-[40px] border-white/5 rounded-full pointer-events-none" />

                    <div className="relative z-10 text-center md:text-left">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1.1] mb-3">
                            Ready to visit us?
                        </h2>
                        <p className="text-white/70 text-sm md:text-base font-medium max-w-md">
                            Experience our state-of-the-art facility in person. Book your appointment today.
                        </p>
                    </div>

                    <div className="relative z-10 shrink-0 w-full md:w-auto">
                        <Link href="/book-appointment" className="block">
                            <button className="w-full md:w-auto inline-flex items-center justify-center bg-[#a9eaf7] text-[#131c15] rounded-full px-8 py-4 text-sm font-bold hover:bg-white transition-colors duration-300 gap-2">
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

export default GalleryPage;