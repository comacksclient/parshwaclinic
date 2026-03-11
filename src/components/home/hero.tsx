import React from 'react';
import { ArrowUpRight, Clock } from 'lucide-react';
// Importing the asset provided by the user

export const HeroSection = () => {
    // Dynamic time for the pill, though static in design
    const dateOptions: Intl.DateTimeFormatOptions = { weekday: 'long', hour: 'numeric', minute: '2-digit', hour12: true };
    const currentTime = new Date().toLocaleDateString('en-US', dateOptions).replace(/ at /, ', ');

    return (
        <section className="w-full px-4 md:px-12 py-4 bg-[#F8F9FA]">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {/* Left Content */}
                <div className="flex flex-col gap-8 pt-4">
                    <h1 className="text-5xl md:text-7xl font-bold text-[#1A1A1A] leading-[1.1] tracking-tight">
                        Your Perfect Smile Starts with Lume Dental
                    </h1>

                    <p className="text-gray-600 text-lg max-w-md">
                        Advanced dental care with a gentle touch.
                        <br />
                        Book your appointment today.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mt-4">
                        {/* Working Hours Card */}
                        <div className="bg-[#F2F2F2] p-6 rounded-[32px] flex flex-col justify-between min-w-[240px]">
                            <div className="flex flex-col gap-1 mb-4">
                                <h3 className="font-semibold text-lg text-gray-900">Working Hours</h3>
                            </div>
                            <div className="space-y-2 text-sm text-gray-700">
                                <div className="flex justify-between">
                                    <span>Monday — Friday</span>
                                    <span className="font-medium">9AM — 9PM</span>
                                </div>
                                <div className="flex justify-between">
                                    <span>Saturday, Sunday</span>
                                    <span className="font-medium">10AM — 6PM</span>
                                </div>
                            </div>

                            <div className="mt-6 bg-white rounded-full py-2 px-4 border border-gray-200 flex items-center justify-center">
                                <span className="text-xs font-medium text-gray-500">Today <span className="text-black">{currentTime}</span></span>
                            </div>
                        </div>

                        {/* Book Appointment Card */}
                        <div className="bg-[#AEE9F5] p-6 rounded-[32px] flex flex-col justify-between flex-1 min-h-[200px] group cursor-pointer hover:bg-[#9ADEEB] transition-colors relative overflow-hidden">
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                                <ArrowUpRight className="w-6 h-6 text-black" />
                            </div>
                            <div className="mt-auto w-full text-center">
                                <span className="text-lg font-bold text-[#1A1A1A]">Book an Appointment</span>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Image */}
                <div className="relative h-[500px] lg:h-auto min-h-[500px] w-full rounded-[48px] overflow-hidden">

                </div>
            </div>
        </section>
    );
}
