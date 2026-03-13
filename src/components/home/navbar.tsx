"use client"

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowRight, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'For Patients', path: '/forpatients' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ease-[0.22,1,0.36,1] ${isScrolled ? 'py-4' : 'py-6 md:py-8'
            }`}>
            <div className="max-w-[1450px] mx-auto px-4 md:px-8">

                {/* Inner Navbar Container - Premium Floating Glassmorphism */}
                <div className={`flex items-center justify-between transition-all duration-700 ease-[0.22,1,0.36,1] ${isScrolled
                    ? 'bg-white/70 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.08)] border border-white/40 rounded-[32px] px-6 lg:px-8 py-3'
                    : 'bg-transparent px-2 py-0'
                    }`}>

                    {/* Logo - Slightly Bigger and Tighter Gap */}
                    <Link href="/" className="flex items-center gap-2 md:gap-2.5 group w-fit">
                        <div className="relative w-16 h-16 md:w-[72px] md:h-[72px] transition-transform duration-500 group-hover:scale-105">
                            <img
                                src="/parlogo.png"
                                alt="Parshwa Dental Logo"
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div className="flex flex-col justify-center -space-y-1">
                            <span className="text-xl md:text-2xl font-black text-[#1A1A1A] tracking-tighter leading-none">Parshwa</span>
                            <span className="text-[9px] md:text-[10px] text-[#0EA5E9] font-black tracking-[0.25em] uppercase mt-1">
                                Dental Clinic
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-6 xl:gap-8">
                        <div className="flex items-center gap-6 xl:gap-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.path}
                                    className="text-[11px] font-black text-gray-500 hover:text-[#1A1A1A] transition-all uppercase tracking-[0.2em] relative group py-2"
                                >
                                    {link.name}
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#0EA5E9] transition-all duration-300 ease-out group-hover:w-full"></span>
                                </Link>
                            ))}
                        </div>

                        {/* Divider */}
                        <div className="w-px h-6 bg-gray-200 mx-2"></div>

                        {/* CTA Section (Phone + Book Now) */}
                        <div className="flex items-center gap-4">
                            <a href="tel:+919328820346" className="flex items-center gap-2.5 group">
                                <div className="w-10 h-10 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center group-hover:bg-[#0EA5E9] group-hover:border-[#0EA5E9] transition-all duration-300">
                                    <Phone className="w-4 h-4 text-[#1A1A1A] group-hover:text-white transition-colors" />
                                </div>
                                <span className="hidden xl:block text-[11px] font-black text-[#1A1A1A] group-hover:text-[#0EA5E9] tracking-[0.15em] uppercase transition-colors">
                                    93288 20346
                                </span>
                            </a>

                            <Link href="/book-appointment">
                                <button className="bg-[#1A1A1A] text-white px-7 py-3.5 rounded-full text-xs font-black uppercase tracking-widest flex items-center gap-2 hover:bg-[#0EA5E9] hover:text-[#1A1A1A] transition-all duration-500 shadow-[0_10px_20px_rgba(26,26,26,0.1)] active:scale-95 group">
                                    Book Now <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="lg:hidden p-2 text-[#1A1A1A] hover:bg-gray-100 rounded-full transition-colors"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Dropdown */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -20, scale: 0.95 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute top-full left-4 right-4 mt-2 bg-white/95 backdrop-blur-xl border border-gray-100 rounded-[24px] shadow-[0_20px_40px_rgba(0,0,0,0.1)] lg:hidden overflow-hidden p-4 flex flex-col gap-2 origin-top"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.path}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block px-6 py-4 text-sm font-black text-[#1A1A1A] hover:bg-gray-50 rounded-[16px] transition-colors uppercase tracking-[0.1em]"
                            >
                                {link.name}
                            </Link>
                        ))}

                        {/* Divider in Mobile Menu */}
                        <div className="w-full h-px bg-gray-100 my-2"></div>

                        <a href="tel:+919328820346" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 px-6 py-4 text-sm font-black text-[#1A1A1A] hover:bg-gray-50 rounded-[16px] transition-colors uppercase tracking-[0.1em]">
                            <Phone className="w-5 h-5 text-[#0EA5E9]" />
                            +91 93288 20346
                        </a>

                        <Link href="/book-appointment" onClick={() => setIsMobileMenuOpen(false)}>
                            <button className="w-full bg-[#1A1A1A] text-white px-6 py-4 rounded-[16px] text-sm font-black uppercase tracking-widest flex items-center justify-center gap-2 mt-2 hover:bg-[#0EA5E9] hover:text-[#1A1A1A] transition-all shadow-[0_10px_20px_rgba(26,26,26,0.1)]">
                                Book Appointment <ArrowRight className="w-4 h-4" />
                            </button>
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};