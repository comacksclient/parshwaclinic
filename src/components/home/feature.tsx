import React from 'react';
import { ArrowUpRight } from "lucide-react";

export const FeatureSection = () => {
    return (
        <section className="w-full bg-[#0a1018]">
            <div className="grid grid-cols-1 lg:grid-cols-3 min-h-[600px] border-y border-white/10 divide-y lg:divide-y-0 lg:divide-x divide-white/10">

                {/* Card 1: Sky Blue Theme (Left side of tooth) */}
                <div className="relative p-8 md:p-12 flex flex-col justify-between group overflow-hidden bg-gradient-to-b from-[#0f1724] to-[#0a1018]">
                    <div className="relative z-20">
                        <div className="flex justify-between items-start mb-4">
                            <h2 className="text-2xl font-bold text-white uppercase leading-tight max-w-[200px] tracking-wide">
                                Clear Retainers Solution
                            </h2>
                            <button className="p-3 bg-white/5 rounded-full hover:bg-sky-500/20 cursor-pointer transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 border border-white/10 hover:border-sky-500/50">
                                <ArrowUpRight className="w-5 h-5 text-sky-400" />
                            </button>
                        </div>
                        <p className="text-slate-400 text-sm max-w-xs leading-relaxed font-medium">
                            Customized aligners for a perfect fit and seamless comfort.
                        </p>
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center translate-y-16">
                        <div className="relative w-72 h-72">
                            <img
                                src="https://images.unsplash.com/photo-1598331668826-20cecb598218?q=80&w=600&auto=format&fit=crop"
                                alt="Clear Aligners"
                                className="w-full h-full object-cover rounded-full mix-blend-luminosity opacity-60 transition-all duration-700 group-hover:scale-105 group-hover:opacity-100 group-hover:mix-blend-normal"
                            />
                            <div className="absolute inset-0 rounded-full shadow-[inset_0_0_50px_rgba(10,16,24,1)] pointer-events-none"></div>
                        </div>
                    </div>

                    <div className="relative z-20 mt-auto flex justify-center pt-48 lg:pt-0">
                        <div className="relative w-48 h-12 flex items-end justify-center">
                            <svg className="absolute bottom-0 w-full h-full text-white/10 group-hover:text-sky-400/20 transition-colors duration-500" viewBox="0 0 200 60" fill="none">
                                <path d="M10,30 Q100,70 190,30" stroke="currentColor" strokeWidth="2" />
                                <circle cx="10" cy="30" r="3" fill="currentColor" />
                                <circle cx="190" cy="30" r="3" fill="currentColor" />
                            </svg>
                            <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-sky-400 mb-1">360° Scan</span>
                        </div>
                    </div>
                </div>

                {/* Card 2: Orange Theme (Right side of tooth) */}
                <div className="relative flex flex-col min-h-[400px] lg:min-h-[600px] overflow-hidden group">
                    <img
                        src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&w=800&auto=format&fit=crop"
                        alt="Expert Dentist"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110 mix-blend-luminosity group-hover:mix-blend-normal opacity-80 group-hover:opacity-100"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a1018] via-[#0a1018]/60 to-transparent"></div>

                    <div className="absolute bottom-0 left-0 w-full p-8 md:p-12 flex flex-col items-start gap-8 z-10">
                        <h2 className="text-3xl md:text-5xl font-extrabold text-white uppercase leading-[1.05] max-w-[280px] tracking-tight">
                            Find the <br /> Right Dentist <br /> For You
                        </h2>
                        {/* Using the vibrant orange from the logo */}
                        <button className="px-8 py-4 bg-orange-500 text-white font-bold uppercase text-xs tracking-[0.15em] hover:bg-white hover:text-orange-600 transition-colors duration-300 shadow-xl hover:shadow-orange-500/20">
                            Book Consultation
                        </button>
                    </div>
                </div>

                {/* Card 3: Green Theme (Arrow swoosh) */}
                <div className="relative p-8 md:p-12 flex flex-col justify-between group overflow-hidden bg-gradient-to-b from-[#0f1724] to-[#0a1018]">
                    <div className="relative z-20">
                        <div className="flex justify-between items-start mb-4">
                            <h2 className="text-2xl font-bold text-white uppercase leading-tight max-w-[200px] tracking-wide">
                                Prosthetics With Precision
                            </h2>
                            <button className="p-3 bg-white/5 rounded-full hover:bg-green-500/20 cursor-pointer transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 border border-white/10 hover:border-green-500/50">
                                <ArrowUpRight className="w-5 h-5 text-green-400" />
                            </button>
                        </div>
                        <p className="text-slate-400 text-sm max-w-xs leading-relaxed font-medium">
                            Because every smile deserves a brilliant second chance.
                        </p>
                    </div>

                    <div className="absolute inset-0 flex items-center justify-center pt-24">
                        <div className="relative w-48 h-64">
                            <img
                                src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?q=80&w=600&auto=format&fit=crop"
                                alt="Dental Technology"
                                className="w-full h-full object-cover rounded-2xl drop-shadow-2xl opacity-80 mix-blend-luminosity transition-all duration-700 group-hover:scale-105 group-hover:opacity-100 group-hover:mix-blend-normal"
                            />

                            {/* Green Annotations */}
                            <div className="absolute top-1/4 -left-4 md:-left-12 flex items-center gap-2 transition-all duration-500 group-hover:-translate-x-2 z-30">
                                <span className="text-[10px] hidden sm:block font-bold text-white/90 uppercase tracking-widest text-right w-24 drop-shadow-md">Ceramic Base</span>
                                <div className="w-8 md:w-12 h-[1px] bg-green-400/50"></div>
                                <div className="w-2 h-2 bg-green-400 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.8)]"></div>
                            </div>

                            <div className="absolute bottom-1/4 -right-4 md:-right-12 flex items-center gap-2 transition-all duration-500 group-hover:translate-x-2 z-30">
                                <div className="w-2 h-2 bg-green-400 rounded-full shadow-[0_0_10px_rgba(34,197,94,0.8)]"></div>
                                <div className="w-8 md:w-12 h-[1px] bg-green-400/50"></div>
                                <span className="text-[10px] hidden sm:block font-bold text-white/90 uppercase tracking-widest text-left w-24 drop-shadow-md">Titanium Core</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    );
};