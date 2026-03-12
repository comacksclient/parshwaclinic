"use client"
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, ArrowRight } from 'lucide-react';

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
        { name: 'Gallery', path: '/gallery' },
        { name: 'Contact', path: '/contact' },
    ];

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
            <div className="max-w-[1400px] mx-auto px-4 md:px-8">
                <div className="flex items-center justify-between">

                    {/* Logo */}
                    <Link href="/" className="flex items-center gap-3 group w-fit">
                        <div className="relative w-10 h-10">
                            <svg viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                                <circle cx="20" cy="20" r="20" className="fill-[#1A1A1A]" />
                                <path d="M12 15C12 10.5817 15.5817 7 20 7C24.4183 7 28 10.5817 28 15V16.5C28 19.5 26.5 22 24 23.5L20 26L16 23.5C13.5 22 12 19.5 12 16.5V15Z" className="fill-white" />
                                <path d="M15 15H25" className="stroke-[#AEE9F5] stroke-2 stroke-linecap-round" />
                                <path d="M20 12V18" className="stroke-[#AEE9F5] stroke-2 stroke-linecap-round" />
                            </svg>
                        </div>
                        <div className="flex flex-col justify-center">
                            <span className="text-xl font-extrabold text-[#1A1A1A] leading-none tracking-tight">Parshwa</span>
                            <span className="text-[8px] text-sky-600 font-bold tracking-[0.2em] uppercase mt-1">Dental Clinic</span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        <div className="flex items-center gap-6">
                            {navLinks.map((link) => (
                                <Link key={link.name} href={link.path} className="text-sm font-bold text-gray-500 hover:text-[#1A1A1A] transition-colors uppercase tracking-widest">
                                    {link.name}
                                </Link>
                            ))}
                        </div>
                        <Link href="/book-appointment">
                            <button className="bg-[#1A1A1A] text-white px-6 py-2.5 rounded-full text-sm font-bold flex items-center gap-2 hover:bg-[#AEE9F5] hover:text-[#1A1A1A] transition-all duration-300 shadow-lg">
                                Book Now <ArrowRight className="w-4 h-4" />
                            </button>
                        </Link>
                    </div>

                    {/* Mobile Menu Toggle */}
                    <button
                        className="md:hidden p-2 text-[#1A1A1A]"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Navigation */}
            {isMobileMenuOpen && (
                <div className="absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-xl md:hidden overflow-hidden py-4 px-4 flex flex-col gap-4">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.path}
                            onClick={() => setIsMobileMenuOpen(false)}
                            className="block px-4 py-3 text-sm font-bold text-gray-600 hover:bg-gray-50 rounded-xl transition-colors uppercase tracking-widest"
                        >
                            {link.name}
                        </Link>
                    ))}
                    <Link href="/book-appointment" onClick={() => setIsMobileMenuOpen(false)}>
                        <button className="w-full bg-[#1A1A1A] text-white px-6 py-4 rounded-xl text-sm font-bold flex items-center justify-center gap-2 mt-2">
                            Book Appointment <ArrowRight className="w-4 h-4" />
                        </button>
                    </Link>
                </div>
            )}
        </nav>
    );
};
