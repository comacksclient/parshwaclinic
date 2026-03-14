"use client";

import React, { useState, useRef, useEffect } from "react";
import { MessageCircle, Send, X, User, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

interface Doctor {
    id: string;
    name: string;
    specialty: string;
    image: string;
    bio: string;
}

interface Message {
    role: "user" | "assistant";
    content?: string;
    type?: "text" | "card" | "welcome_card" | "booking_form" | "doctor_cards";
    text?: string;
    image?: string;
    doctors?: Doctor[];
    buttons?: Array<{ label: string; payload: string }>;
    fields?: Array<{
        id: string;
        label: string;
        type: string;
        placeholder: string;
        required: boolean;
        pattern?: string;
    }>;
    submitButton?: string;
}

// Premium Easings
const customEase = [0.22, 1, 0.36, 1] as any;

const WhatsAppIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 md:w-6 md:h-6">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
    </svg>
);

const TypingIndicator = () => (
    <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="flex w-full justify-start mb-4"
    >
        <div className="flex max-w-[85%] gap-2 flex-row items-end">
            <div className="w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center bg-white border border-gray-100 shadow-sm overflow-hidden p-1">
                <img src="/lo.png" alt="Bot" className="w-full h-full object-contain" />
            </div>
            <div className="bg-white p-3 md:p-4 rounded-[20px] rounded-bl-sm shadow-sm border border-gray-100 flex gap-1.5 items-center">
                <span className="w-1.5 h-1.5 bg-[#131c15]/40 rounded-full animate-bounce"></span>
                <span className="w-1.5 h-1.5 bg-[#131c15]/60 rounded-full animate-bounce delay-100"></span>
                <span className="w-1.5 h-1.5 bg-[#131c15]/80 rounded-full animate-bounce delay-200"></span>
            </div>
        </div>
    </motion.div>
);

// High-end Doctor Carousel Component
const DoctorCarousel = ({ doctors, onSelectDoctor }: { doctors: Doctor[], onSelectDoctor: (id: string, name: string) => void }) => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [touchStart, setTouchStart] = useState(0);
    const [touchEnd, setTouchEnd] = useState(0);

    const handleNext = () => setCurrentIndex((prev) => (prev + 1) % doctors.length);
    const handlePrev = () => setCurrentIndex((prev) => (prev - 1 + doctors.length) % doctors.length);

    const handleTouchStart = (e: React.TouchEvent) => setTouchStart(e.targetTouches[0].clientX);
    const handleTouchMove = (e: React.TouchEvent) => setTouchEnd(e.targetTouches[0].clientX);
    const handleTouchEnd = () => {
        if (touchStart - touchEnd > 50) handleNext();
        if (touchStart - touchEnd < -50) handlePrev();
    };

    const currentDoctor = doctors[currentIndex];

    return (
        <div className="relative mt-2 w-full">
            <div
                className="relative overflow-hidden rounded-[20px] border border-gray-100 shadow-sm bg-white w-full"
                onTouchStart={handleTouchStart}
                onTouchMove={handleTouchMove}
                onTouchEnd={handleTouchEnd}
            >
                <div className="relative h-40 md:h-48 bg-[#f4f5f7] overflow-hidden group">
                    <img
                        src={currentDoctor.image}
                        alt={currentDoctor.name}
                        className="w-full h-full object-cover opacity-90 transition-transform duration-700"
                    />
                </div>

                <div className="p-4 md:p-5">
                    <h3 className="font-bold text-[#131c15] text-base md:text-lg tracking-tight mb-1">{currentDoctor.name}</h3>
                    <p className="text-[9px] md:text-[10px] text-[#131c15] bg-[#a9eaf7] inline-block px-2 py-1 rounded font-bold uppercase tracking-widest mb-4">
                        {currentDoctor.specialty}
                    </p>

                    <button
                        onClick={() => onSelectDoctor(`ACTION_DETAILS_${currentDoctor.id}`, `Details: ${currentDoctor.name}`)}
                        className="w-full bg-[#f4f5f7] hover:bg-[#a9eaf7] hover:text-[#131c15] text-[#131c15] text-xs font-bold py-2.5 px-4 rounded-xl transition-colors duration-300"
                    >
                        View Profile
                    </button>
                </div>
            </div>

            {doctors.length > 1 && (
                <button
                    onClick={handleNext}
                    className="absolute right-2 top-[35%] bg-white/90 backdrop-blur-sm hover:bg-[#131c15] hover:text-white text-[#131c15] p-1.5 md:p-2 rounded-full shadow-md transition-colors"
                >
                    <ChevronRight className="w-4 h-4" />
                </button>
            )}

            {doctors.length > 1 && (
                <div className="flex justify-center gap-1.5 mt-3">
                    {doctors.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => setCurrentIndex(idx)}
                            className={`h-1.5 rounded-full transition-all duration-300 ${idx === currentIndex ? 'w-5 bg-[#131c15]' : 'w-1.5 bg-gray-200'}`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
};

export function Chatbot() {
    const [isOpen, setIsOpen] = useState(false);
    const [messages, setMessages] = useState<Message[]>([]);
    const [input, setInput] = useState("");
    const [isLoading, setIsLoading] = useState(false);
    const [bookingFormData, setBookingFormData] = useState<Record<string, string>>({});
    const messagesEndRef = useRef<HTMLDivElement>(null);
    const hasInitialized = useRef(false);

    useEffect(() => {
        const initChat = async () => {
            if (hasInitialized.current) return;
            hasInitialized.current = true;

            setIsLoading(true);
            try {
                const response = await fetch(`/api/chat`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ question: "INIT_CHAT", history: [] }),
                });

                const data = await response.json();

                const welcomeMsg: Message = {
                    role: "assistant",
                    type: data.type || "welcome_card",
                    text: data.text || "Hello! How can I help you?",
                    image: data.image,
                    buttons: data.buttons,
                    doctors: data.doctors,
                    content: data.text
                };
                setMessages([welcomeMsg]);
            } catch (err) {
                console.error("Failed to init chat", err);
            } finally {
                setIsLoading(false);
            }
        };

        const timer = setTimeout(() => {
            setIsOpen(true);
            initChat();
        }, 4000);

        return () => clearTimeout(timer);
    }, []);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages, isOpen, isLoading]);

    const handleSendMessage = async (text: string, isUser: boolean = true, payload?: string) => {
        if (!text.trim() && !payload) return;

        if (isUser) {
            setInput("");
            setMessages((prev) => [...prev, { role: "user", content: text }]);
        }

        setIsLoading(true);

        try {
            const history = messages.map(m => ({
                role: m.role,
                content: m.content || m.text || ""
            }));

            const messageToSend = payload || text;

            const response = await fetch(`/api/chat`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    question: messageToSend,
                    history: history,
                }),
            });

            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);

            const data = await response.json();

            const assistantMessage: Message = {
                role: "assistant",
                type: data.type || "text",
                text: data.text || data.answer || "Sorry, I couldn't get a response.",
                image: data.image,
                doctors: data.doctors,
                buttons: data.buttons,
                fields: data.fields,
                submitButton: data.submitButton,
                content: data.text || data.answer
            };

            setMessages((prev) => [...prev, assistantMessage]);

        } catch (error) {
            console.error("Chat error:", error);
            setMessages((prev) => [
                ...prev,
                { role: "assistant", content: "Sorry, something went wrong. Please try again." },
            ]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!input.trim() || isLoading) return;
        handleSendMessage(input);
    };

    const handleOptionClick = (payload: string, label: string) => {
        if (payload.startsWith('http') || payload.startsWith('tel:')) {
            window.open(payload, '_blank');
            return;
        }
        handleSendMessage(label, true, payload);
    };

    const handleBookingSubmit = async (e: React.FormEvent, fields: any[]) => {
        e.preventDefault();

        // Basic validation
        const missingFields = fields.filter(f => f.required && !bookingFormData[f.id]);
        if (missingFields.length > 0) {
            alert(`Please fill in: ${missingFields.map(f => f.label).join(', ')}`);
            return;
        }

        setIsLoading(true);

        try {
            // Map common field IDs to the specific ones expected by the Google Script
            const payload = {
                patientName: bookingFormData['name'] || bookingFormData['patientName'] || 'Patient',
                phoneNumber: bookingFormData['phone'] || bookingFormData['phoneNumber'] || '',
                bookingSource: 'Chatbot',
                appointmentStatus: 'Pending Call',
                ...bookingFormData
            };

            const response = await fetch('/api/chatbook', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(payload),
            });

            const result = await response.json();

            if (result.result === 'success') {
                const name = bookingFormData['patientName'] || bookingFormData['name'] || 'Patient';
                setMessages((prev) => [
                    ...prev,
                    { role: "user", content: `Booking request for ${name}` },
                    { role: "assistant", type: "text", text: "Thank you! Your appointment request has been received. Our team will contact you shortly to confirm the time." }
                ]);
            } else {
                throw new Error(result.message || 'Failed to submit');
            }

            setBookingFormData({});
        } catch (error) {
            console.error("Booking submission error:", error);
            setMessages((prev) => [
                ...prev,
                { role: "assistant", content: " Sorry, I couldn't process your booking right now. Please call us at 088757 00500 for immediate assistance." }
            ]);
        } finally {
            setIsLoading(false);
        }
    };

    const renderContent = (msg: Message) => {
        const textContent = msg.text || msg.content;

        return (
            <div className="flex flex-col gap-3 w-full">
                {msg.image && !msg.doctors && (
                    <div className="relative w-full h-32 md:h-36 rounded-xl overflow-hidden mb-1 shadow-sm">
                        <img src={msg.image} alt="Visual" className="w-full h-full object-cover" />
                    </div>
                )}

                <div className="whitespace-pre-wrap font-medium text-[13px] md:text-sm leading-relaxed">{textContent}</div>

                {/* Doctor Carousel */}
                {msg.type === "doctor_cards" && msg.doctors && msg.doctors.length > 0 && (
                    <DoctorCarousel doctors={msg.doctors} onSelectDoctor={handleOptionClick} />
                )}

                {/* Booking Form */}
                {msg.type === "booking_form" && msg.fields && (
                    <form onSubmit={(e) => handleBookingSubmit(e, msg.fields!)} className="flex flex-col gap-3 mt-2 bg-[#f4f5f7] p-3 md:p-4 rounded-[20px] border border-gray-100">
                        {msg.fields.map((field) => (
                            <div key={field.id} className="flex flex-col gap-1">
                                <label htmlFor={field.id} className="text-[9px] md:text-[10px] font-bold uppercase tracking-widest text-[#131c15]/60 pl-1">
                                    {field.label} {field.required && <span className="text-red-400">*</span>}
                                </label>
                                <input
                                    id={field.id}
                                    type={field.type}
                                    placeholder={field.placeholder}
                                    required={field.required}
                                    pattern={field.pattern}
                                    value={bookingFormData[field.id] || ''}
                                    onChange={(e) => setBookingFormData(prev => ({ ...prev, [field.id]: e.target.value }))}
                                    className="px-3 py-2.5 text-[13px] border border-gray-200 bg-white rounded-xl focus:outline-none focus:border-[#a9eaf7] focus:ring-2 focus:ring-[#a9eaf7]/20 transition-all font-medium text-[#131c15]"
                                />
                            </div>
                        ))}
                        <button
                            type="submit"
                            disabled={isLoading}
                            className="w-full bg-[#131c15] hover:bg-[#a9eaf7] text-white hover:text-[#131c15] font-bold py-2.5 px-4 rounded-xl transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed mt-1 text-[13px] md:text-sm"
                        >
                            {msg.submitButton || "Submit"}
                        </button>
                    </form>
                )}

                {/* Buttons */}
                {msg.buttons && msg.buttons.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-1">
                        {msg.buttons.map((btn, idx) => (
                            <button
                                key={idx}
                                onClick={() => handleOptionClick(btn.payload, btn.label)}
                                className="text-[11px] md:text-xs font-bold border border-gray-200 text-[#131c15] bg-white px-3 py-1.5 md:py-2 rounded-full hover:bg-[#f4f5f7] hover:border-gray-300 transition-colors duration-300 shadow-sm"
                            >
                                {btn.label}
                            </button>
                        ))}
                    </div>
                )}
            </div>
        );
    };

    return (
        <div className="fixed bottom-4 right-4 md:bottom-6 md:right-6 z-[9999] flex flex-col items-end gap-3 md:gap-4 font-sans">
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.3, ease: customEase }}
                        className="absolute bottom-16 md:bottom-20 right-0 w-[calc(100vw-32px)] sm:w-[360px] md:w-[400px] bg-white rounded-[24px] md:rounded-[32px] shadow-[0_20px_60px_rgba(0,0,0,0.1)] border border-gray-100 overflow-hidden flex flex-col h-[70vh] sm:h-[600px] max-h-[800px]"
                    >
                        {/* Header */}
                        <div className="bg-[#131c15] p-4 flex items-center justify-between shrink-0 relative overflow-hidden">
                            <div className="flex items-center gap-3 relative z-10">
                                <div className="relative">
                                    <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center overflow-hidden shadow-sm p-1">
                                        <img src="/lo.png" alt="Bot" className="w-full h-full object-contain" />
                                    </div>
                                    <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-[#131c15] rounded-full"></div>
                                </div>
                                <div>
                                    <h3 className="text-white font-bold text-sm md:text-base tracking-tight leading-tight">Parshwa Assistant</h3>
                                    <p className="text-[#a9eaf7] font-bold text-[9px] uppercase tracking-widest opacity-90">Online • Replies instantly</p>
                                </div>
                            </div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="text-white/60 hover:text-white hover:bg-white/10 transition-colors p-2 rounded-full relative z-10"
                            >
                                <X className="w-4 h-4 md:w-5 md:h-5" />
                            </button>
                        </div>

                        {/* Chat Body */}
                        <div className="flex-1 p-3 md:p-4 bg-[#f4f5f7]/50 overflow-y-auto flex flex-col gap-4 scrollbar-hide">
                            {messages.map((msg, index) => (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.3 }}
                                    key={index}
                                    className={`flex w-full ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                                >
                                    <div className={`flex max-w-[90%] md:max-w-[85%] gap-2 items-end ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>

                                        {/* Avatar */}
                                        <div className={`
                                            w-7 h-7 md:w-8 md:h-8 rounded-full flex-shrink-0 flex items-center justify-center shadow-sm overflow-hidden
                                            ${msg.role === 'user' ? 'bg-[#a9eaf7] text-[#131c15]' : 'bg-white border border-gray-200 p-1'}
                                        `}>
                                            {msg.role === 'user' ? <User size={12} strokeWidth={2.5} /> : <img src="/lo.png" alt="Bot" className="w-full h-full object-contain" />}
                                        </div>

                                        {/* Bubble */}
                                        <div className="flex flex-col gap-1 max-w-[calc(100%-2rem)]">
                                            <div className={`
                                                p-3 md:p-4 text-[13px] md:text-sm leading-relaxed shadow-sm
                                                ${msg.role === 'user'
                                                    ? 'bg-[#131c15] text-white rounded-[20px] rounded-br-sm'
                                                    : 'bg-white text-[#131c15] border border-gray-100 rounded-[20px] rounded-bl-sm'
                                                }
                                            `}>
                                                {renderContent(msg)}
                                            </div>
                                            <span className={`text-[9px] font-bold uppercase tracking-widest text-[#131c15]/40 ${msg.role === 'user' ? 'text-right mr-1' : 'text-left ml-1'}`}>
                                                {msg.role === 'user' ? 'You' : 'Assistant'}
                                            </span>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}

                            {isLoading && <TypingIndicator />}
                            <div ref={messagesEndRef} />
                        </div>

                        {/* Input Area */}
                        <div className="bg-white border-t border-gray-100 shrink-0 p-3 md:p-4 rounded-b-[24px] md:rounded-b-[32px]">
                            <form className="relative flex items-center gap-2" onSubmit={handleSubmit}>
                                <input
                                    type="text"
                                    value={input}
                                    onChange={(e) => setInput(e.target.value)}
                                    placeholder="Type a message..."
                                    disabled={isLoading}
                                    className="flex-1 bg-[#f4f5f7] border border-gray-200 rounded-full pl-4 pr-3 py-2.5 md:py-3 text-[13px] md:text-sm font-medium text-[#131c15] focus:outline-none focus:border-[#a9eaf7] focus:bg-white transition-all disabled:opacity-50"
                                />
                                <button
                                    type="submit"
                                    disabled={!input.trim() || isLoading}
                                    className="w-10 h-10 flex items-center justify-center bg-[#131c15] rounded-full text-white hover:bg-[#a9eaf7] hover:text-[#131c15] transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed shrink-0 shadow-sm"
                                >
                                    <Send className="w-4 h-4 ml-0.5" />
                                </button>
                            </form>
                            <div className="mt-2 text-center">
                                <a href="https://comacks.com" target="_blank" rel="noopener noreferrer" className="text-[9px] font-bold uppercase tracking-widest text-[#131c15]/40 hover:text-[#131c15]/60 transition-colors">
                                    Powered by <span className="text-[#131c15]/50">Comacks</span>
                                </a>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating Action Buttons */}
            <div className={`transition-all duration-300 ease-out ${isOpen ? 'translate-y-4 opacity-0 pointer-events-none' : 'translate-y-0 opacity-100'}`}>
                <a
                    href="https://wa.me/919328820346?text=Hi%2C%20I%20want%20to%20book%20an%20appointment"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="Chat on WhatsApp"
                    className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-white shadow-lg transition-transform hover:-translate-y-1 flex items-center justify-center"
                >
                    <WhatsAppIcon />
                </a>
            </div>

            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-14 h-14 md:w-16 md:h-16 rounded-full bg-[#131c15] hover:bg-[#a9eaf7] text-white hover:text-[#131c15] shadow-xl transition-all duration-300 hover:-translate-y-1 flex items-center justify-center z-[100] relative group"
            >
                <div className={`transition-all duration-300 absolute ${isOpen ? 'rotate-90 opacity-0 scale-50' : 'rotate-0 opacity-100 scale-100'}`}>
                    <MessageCircle className="w-6 h-6 md:w-7 md:h-7" />
                </div>
                <div className={`transition-all duration-300 absolute ${isOpen ? 'rotate-0 opacity-100 scale-100' : '-rotate-90 opacity-0 scale-50'}`}>
                    <X className="w-6 h-6 md:w-7 md:h-7" />
                </div>

                {/* Notification dot when closed */}
                {!isOpen && (
                    <span className="absolute top-0 right-0 w-3 h-3 md:w-3.5 md:h-3.5 bg-red-500 border-2 border-white rounded-full"></span>
                )}
            </button>
        </div>
    );
}