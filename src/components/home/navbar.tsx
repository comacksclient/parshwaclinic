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
        { name: 'Gallery', path: '/gallery' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-[100] transition-all duration-500 ease-[0.22,1,0.36,1] ${isScrolled || isMobileMenuOpen ? 'py-4' : 'py-6 md:py-8'
            }`}>
            <div className="max-w-[1450px] mx-auto px-4 sm:px-6 md:px-8">

                {/* Inner Navbar Container - Clean & Professional */}
                <div className={`flex items-center justify-between transition-all duration-700 ease-[0.22,1,0.36,1] ${isScrolled || isMobileMenuOpen
                    ? 'bg-white/95 backdrop-blur-xl shadow-sm border border-gray-200 rounded-[24px] md:rounded-[32px] px-4 md:px-6 lg:px-8 py-3'
                    : 'bg-transparent px-2 py-0'
                    }`}>

                    {/* Logo */}
                    <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-2 group w-fit z-50">
                        <div className="relative w-8 h-8 md:w-10 md:h-10 transition-transform duration-500 group-hover:scale-105 shrink-0">
                            <img
                                src="/lo.png"
                                alt="Parshwa Dental Logo"
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <div className="flex flex-col justify-center">
                            <span className="text-lg md:text-xl font-bold text-[#131c15] tracking-tight leading-none mb-0.5">Parshwa</span>
                            <span className="text-[8px] md:text-[9px] text-[#131c15]/60 font-bold tracking-[0.15em] uppercase leading-none">
                                Dental Clinic
                            </span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:flex items-center gap-8 xl:gap-10">
                        <div className="flex items-center gap-6 xl:gap-8">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.path}
                                    className="text-sm font-bold text-[#131c15]/70 hover:text-[#131c15] transition-colors py-2"
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </div>

                        {/* CTA Section (Book Now) */}
                        <div className="flex items-center gap-4">
                            <Link href="/book-appointment">
                                <button className="bg-[#131c15] text-white px-6 py-3 rounded-full text-sm font-bold flex items-center gap-2 hover:bg-[#a9eaf7] hover:text-[#131c15] transition-colors duration-300">
                                    Book an Appointment
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="lg:hidden p-2 bg-[#f4f5f7] hover:bg-gray-200 border border-transparent rounded-full text-[#131c15] transition-colors z-50"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                        aria-label="Toggle Menu"
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
                        className="absolute top-full left-4 right-4 mt-2 bg-white border border-gray-100 rounded-[24px] shadow-lg lg:hidden overflow-hidden p-4 flex flex-col gap-1 origin-top z-40"
                    >
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                href={link.path}
                                onClick={() => setIsMobileMenuOpen(false)}
                                className="block px-4 py-3.5 text-sm font-bold text-[#131c15] hover:bg-[#f4f5f7] rounded-xl transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}

                        {/* Divider in Mobile Menu */}
                        <div className="w-full h-px bg-gray-100 my-2"></div>

                        <a href="tel:+919328820346" onClick={() => setIsMobileMenuOpen(false)} className="flex items-center gap-3 px-4 py-3.5 text-sm font-bold text-[#131c15] hover:bg-[#f4f5f7] rounded-xl transition-colors">
                            <div className="w-8 h-8 rounded-full bg-[#a9eaf7] flex items-center justify-center">
                                <Phone className="w-4 h-4 text-[#131c15]" />
                            </div>
                            +91 93288 20346
                        </a>

                        <Link href="/book-appointment" onClick={() => setIsMobileMenuOpen(false)} className="mt-2">
                            <button className="w-full bg-[#131c15] text-white px-4 py-4 rounded-xl text-sm font-bold flex items-center justify-center gap-2 hover:bg-[#a9eaf7] hover:text-[#131c15] transition-colors">
                                Book an Appointment <ArrowRight className="w-4 h-4" />
                            </button>
                        </Link>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};