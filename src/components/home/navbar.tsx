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

    // Prevent scrolling when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [isMobileMenuOpen]);

    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'About Us', path: '/about' },
        { name: 'Services', path: '/services' },
        { name: 'For Patients', path: '/forpatients' },
        { name: 'Contact', path: '/contact' },
        { name: 'Gallery', path: '/gallery' },
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ease-[0.22,1,0.36,1] ${isScrolled || isMobileMenuOpen ? 'py-4' : 'py-6 md:py-8'
            }`}>
            <div className="max-w-[1550px] mx-auto px-4 md:px-8">


                <div className={`flex items-center justify-between transition-all duration-700 ease-[0.22,1,0.36,1] ${isScrolled || isMobileMenuOpen
                    ? 'bg-white/85 backdrop-blur-2xl shadow-[0_20px_50px_rgba(0,0,0,0.06)] border border-white/60 rounded-[32px] px-5 lg:px-8 py-3 md:py-3.5'
                    : 'bg-transparent px-2 py-0'
                    }`}>


                    <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-1.5 md:gap-2 group w-fit z-50">
                        <div className="relative w-12 h-12 md:w-[52px] md:h-[52px] transition-transform duration-500 group-hover:scale-105 shrink-0">
                            <img
                                src="/parlogo.png"
                                alt="Parshwa Dental Logo"
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div className="flex flex-col justify-center -space-y-0.5 md:-space-y-1">
                            <span className="text-xl md:text-[21px] font-black text-[#1A1A1A] tracking-tighter leading-tight">Parshwa</span>
                            <span className="text-[8px] md:text-[8.5px] text-[#0EA5E9] font-black tracking-[0.2em] uppercase leading-none opacity-90">
                                Dental Clinic
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-7 xl:gap-8">
                        <div className="flex items-center gap-7 xl:gap-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.path}
                                    className="text-xs font-black text-gray-500 hover:text-[#1A1A1A] transition-all uppercase tracking-[0.15em] relative group py-2"
                                >
                                    {link.name}
                                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#AEE9F5] transition-all duration-300 ease-out group-hover:w-full"></span>
                                </Link>
                            ))}
                        </div>

                        {/* Divider */}
                        <div className="w-px h-6 bg-gray-200 mx-1"></div>

                        {/* CTA Section (Phone + Book Now) */}
                        <div className="flex items-center gap-4 xl:gap-5">
                            <a href="tel:+919328820346" className="flex items-center gap-2.5 group">
                                <div className="w-9 h-9 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center group-hover:bg-[#1A1A1A] group-hover:border-[#1A1A1A] transition-all duration-300">
                                    <Phone className="w-3.5 h-3.5 text-[#1A1A1A] group-hover:text-[#AEE9F5] transition-colors" />
                                </div>
                                <span className="hidden xl:block text-[11px] font-black text-[#1A1A1A] group-hover:text-[#0EA5E9] tracking-[0.1em] uppercase transition-colors">
                                    93288 20346
                                </span>
                            </a>

                            <Link href="/book-appointment">
                                <button className="bg-[#AEE9F5] text-[#1A1A1A] px-6 py-3 rounded-full text-[11px] font-black uppercase tracking-widest flex items-center gap-2 hover:bg-[#1A1A1A] hover:text-white transition-all duration-500 shadow-[0_10px_20px_rgba(174,233,245,0.3)] active:scale-95 group">
                                    Book Now <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="lg:hidden p-2.5 bg-gray-50/80 hover:bg-gray-100 border border-gray-100/50 hover:border-gray-200 rounded-full text-[#1A1A1A] transition-all z-50 active:scale-95"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation Dropdown */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -10, scale: 0.98 }}
                        transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                        className="absolute top-full left-4 right-4 mt-3 bg-white/95 backdrop-blur-2xl border border-white/60 rounded-[32px] shadow-[0_30px_60px_rgba(0,0,0,0.12)] lg:hidden overflow-hidden p-5 flex flex-col gap-2 origin-top z-40"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.path}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block px-5 py-4 text-sm font-black text-[#1A1A1A] hover:bg-[#FAFAFC] hover:text-[#0EA5E9] rounded-[20px] transition-all uppercase tracking-[0.15em]"
                            >
                                {link.name}
                            </Link>
                        ))}

                        {/* Divider in Mobile Menu */}
                        <div className="w-full h-px bg-gray-100 my-3"></div>

                        <a href="tel:+919328820346" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-4 px-5 py-4 text-sm font-black text-[#1A1A1A] hover:bg-[#FAFAFC] rounded-[20px] transition-colors uppercase tracking-[0.1em]">
                            <div className="w-10 h-10 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center">
                                <Phone className="w-4 h-4 text-[#1A1A1A]" />
                            </div>
                            +91 93288 20346
                        </a>

                        <Link href="/book-appointment" onClick={() => setIsMobileMenuOpen(false)}>
                            <button className="w-full bg-[#AEE9F5] text-[#1A1A1A] px-6 py-5 rounded-[20px] text-sm font-black uppercase tracking-widest flex items-center justify-center gap-2 mt-2 hover:bg-[#1A1A1A] hover:text-white transition-all shadow-[0_15px_30px_rgba(174,233,245,0.4)] group">
                                Book Appointment <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};