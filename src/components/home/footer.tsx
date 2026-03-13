
import { Facebook, Instagram, MapPin, Phone, Mail, Clock, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const Footer = () => {
    return (
        <footer className="bg-[#1A1A1A] text-white pt-20 pb-8 px-4 md:px-12 rounded-t-[48px] mt-4">
            <div className="max-w-[1550px] mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-20 border-b border-white/10 pb-12">
                    {/* Brand Column */}
                    <div className="lg:col-span-4 flex flex-col gap-8">
                        <Link href="/" className="flex items-center gap-4 group w-fit">
                            <div className="relative w-14 h-14">
                                <img
                                    src="/parlogo.png"
                                    alt="Parshwa Dental Logo"
                                    className="w-full h-full object-contain brightness-0 invert"
                                />
                            </div>
                            <div className="flex flex-col justify-center">
                                <span className="text-2xl font-extrabold text-white leading-none tracking-tight">Parshwa</span>
                                <span className="text-[10px] text-[#AEE9F5] font-bold tracking-[0.2em] uppercase mt-1">Dental Clinic</span>
                            </div>
                        </Link>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                            Providing exceptional dental care with a gentle touch. Your smile is our priority. Join thousands of happy patients who trust Parshwa Dental Clinic.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#AEE9F5] hover:text-[#1A1A1A] transition-all">
                                <Instagram className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-[#AEE9F5] hover:text-[#1A1A1A] transition-all">
                                <Facebook className="w-5 h-5" />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="lg:col-span-2">
                        <h3 className="text-lg font-bold mb-8">Quick Links</h3>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            <li><Link href="/" className="hover:text-[#AEE9F5] transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3" /> Home</Link></li>
                            <li><Link href="/about" className="hover:text-[#AEE9F5] transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3" /> About Us</Link></li>
                            <li><Link href="/services" className="hover:text-[#AEE9F5] transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3" /> Our Services</Link></li>
                            <li><Link href="/forpatients" className="hover:text-[#AEE9F5] transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3" /> For Patients</Link></li>
                            <li><Link href="/gallery" className="hover:text-[#AEE9F5] transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3" /> Gallery</Link></li>
                            <li><Link href="/contact" className="hover:text-[#AEE9F5] transition-colors flex items-center gap-2"><ArrowRight className="w-3 h-3" /> Contact</Link></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="lg:col-span-3">
                        <h3 className="text-lg font-bold mb-8">Our Services</h3>
                        <ul className="space-y-4 text-gray-400 text-sm">
                            <li><Link href="/services" className="hover:text-[#AEE9F5] transition-colors">General Dentistry</Link></li>
                            <li><Link href="/services" className="hover:text-[#AEE9F5] transition-colors">Cosmetic Dentistry</Link></li>
                            <li><Link href="/services" className="hover:text-[#AEE9F5] transition-colors">Dental Implants</Link></li>
                            <li><Link href="/services" className="hover:text-[#AEE9F5] transition-colors">Orthodontics</Link></li>
                            <li><Link href="/services" className="hover:text-[#AEE9F5] transition-colors">Pediatric Dentistry</Link></li>
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div className="lg:col-span-3">
                        <h3 className="text-lg font-bold mb-8">Contact Us</h3>
                        <ul className="space-y-6 text-gray-400 text-sm">
                            <li className="flex gap-4">
                                <div className="w-8 h-8 rounded-full bg-[#AEE9F5]/10 flex items-center justify-center shrink-0">
                                    <MapPin className="w-4 h-4 text-[#AEE9F5]" />
                                </div>
                                <span>
                                    21, 1st Floor, Trishla Complex Opp. Podar School,<br />
                                    New CG Road Chandkheda,<br />
                                    Ahmedabad – 382424 Gujarat, India
                                </span>
                            </li>
                            <li className="flex gap-4">
                                <div className="w-8 h-8 rounded-full bg-[#AEE9F5]/10 flex items-center justify-center shrink-0">
                                    <Phone className="w-4 h-4 text-[#AEE9F5]" />
                                </div>
                                <div className="flex flex-col">
                                    <a href="tel:+919328820346" className="hover:text-white">(+91) 93288 20346</a>
                                    <a href="mailto:shrenik_shah16@yahoo.com" className="hover:text-white">shrenik_shah16@yahoo.com</a>
                                </div>
                            </li>
                            <li className="flex gap-4">
                                <div className="w-8 h-8 rounded-full bg-[#AEE9F5]/10 flex items-center justify-center shrink-0">
                                    <Clock className="w-4 h-4 text-[#AEE9F5]" />
                                </div>
                                <div className="flex flex-col">
                                    <span>Mon-Sat: 10:00 AM - 2:00 PM</span>
                                    <span>Mon-Sat: 5:00 PM - 9:00 PM</span>
                                    <span className="text-white/50">Sun: Closed</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-600 font-medium">
                    <p>© {new Date().getFullYear()} Parshwa Dental Clinic. All rights reserved.</p>
                    <div className="flex gap-8">
                        <a href="https://comaks.in" target="_blank" rel="noreferrer" className="hover:text-[#AEE9F5] transition-colors">Powered by Comaks</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
