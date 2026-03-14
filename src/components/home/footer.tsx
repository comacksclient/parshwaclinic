import { Facebook, Instagram, MapPin, Phone, Mail, Clock } from 'lucide-react';
import Link from 'next/link';

export const Footer = () => {
    return (
        <footer className="bg-[#131c15] text-white pt-16 md:pt-20 pb-8 px-5 md:px-8 rounded-t-[32px] md:rounded-t-[48px] mt-8">
            <div className="max-w-[1400px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-12 mb-12 border-b border-white/10 pb-12">

                    {/* Brand Column */}
                    <div className="lg:col-span-4 flex flex-col gap-6">
                        <Link href="/" className="flex items-center gap-3 group w-fit">
                            <div className="relative w-10 h-10 md:w-12 md:h-12">
                                <img
                                    src="/lo.png"
                                    alt="Parshwa Dental Logo"
                                    className="w-full h-full object-contain brightness-0 invert"
                                />
                            </div>
                            <div className="flex flex-col justify-center">
                                <span className="text-xl font-bold text-white leading-none tracking-tight mb-0.5">Parshwa</span>
                                <span className="text-[8px] text-[#a9eaf7] font-bold tracking-[0.2em] uppercase leading-none">Dental Clinic</span>
                            </div>
                        </Link>
                        <p className="text-white/60 text-sm leading-relaxed max-w-sm">
                            Exceptional dental care with a gentle touch. Join thousands of happy patients who trust us with their smiles.
                        </p>
                        <div className="flex gap-3">
                            <a href="#" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#a9eaf7] hover:text-[#131c15] transition-colors">
                                <Instagram className="w-4 h-4" />
                            </a>
                            <a href="#" className="w-9 h-9 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#a9eaf7] hover:text-[#131c15] transition-colors">
                                <Facebook className="w-4 h-4" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="lg:col-span-2">
                        <h3 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-6">Explore</h3>
                        <ul className="space-y-3 text-sm text-white/70">
                            <li><Link href="/" className="hover:text-[#a9eaf7] transition-colors">Home</Link></li>
                            <li><Link href="/about" className="hover:text-[#a9eaf7] transition-colors">About Us</Link></li>
                            <li><Link href="/services" className="hover:text-[#a9eaf7] transition-colors">Our Services</Link></li>
                            <li><Link href="/forpatients" className="hover:text-[#a9eaf7] transition-colors">For Patients</Link></li>
                            <li><Link href="/gallery" className="hover:text-[#a9eaf7] transition-colors">Gallery</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="lg:col-span-3">
                        <h3 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-6">Treatments</h3>
                        <ul className="space-y-3 text-sm text-white/70">
                            <li><Link href="/services" className="hover:text-[#a9eaf7] transition-colors">General Dentistry</Link></li>
                            <li><Link href="/services" className="hover:text-[#a9eaf7] transition-colors">Cosmetic Dentistry</Link></li>
                            <li><Link href="/services" className="hover:text-[#a9eaf7] transition-colors">Dental Implants</Link></li>
                            <li><Link href="/services" className="hover:text-[#a9eaf7] transition-colors">Orthodontics</Link></li>
                            <li><Link href="/services" className="hover:text-[#a9eaf7] transition-colors">Pediatric Care</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="lg:col-span-3">
                        <h3 className="text-xs font-bold text-white/40 uppercase tracking-widest mb-6">Contact Us</h3>
                        <ul className="space-y-4 text-sm text-white/70">
                            <li className="flex items-start gap-3">
                                <MapPin className="w-4 h-4 text-[#a9eaf7] shrink-0 mt-0.5" />
                                <span className="leading-relaxed">
                                    21, 1st Floor, Trishla Complex,<br />
                                    Opp. Podar School, New CG Road,<br />
                                    Chandkheda, Ahmedabad – 382424
                                </span>
                            </li>
                            <li className="flex items-center gap-3">
                                <Phone className="w-4 h-4 text-[#a9eaf7] shrink-0" />
                                <a href="tel:+919328820346" className="hover:text-[#a9eaf7] transition-colors">+91 93288 20346</a>
                            </li>
                            <li className="flex items-center gap-3">
                                <Mail className="w-4 h-4 text-[#a9eaf7] shrink-0" />
                                <a href="mailto:shrenik_shah16@yahoo.com" className="hover:text-[#a9eaf7] transition-colors">shrenik_shah16@yahoo.com</a>
                            </li>
                            <li className="flex items-start gap-3">
                                <Clock className="w-4 h-4 text-[#a9eaf7] shrink-0 mt-0.5" />
                                <div className="flex flex-col">
                                    <span>Mon - Sat: 10AM - 9PM</span>
                                    <span className="text-white/40">Sunday: Closed</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-white/40">
                    <p>© {new Date().getFullYear()} Parshwa Dental Clinic. All rights reserved.</p>
                    <a href="https://comacks.com" target="_blank" rel="noreferrer" className="hover:text-[#a9eaf7] transition-colors">
                        Powered by Comacks
                    </a>
                </div>
            </div>
        </footer>
    );
}