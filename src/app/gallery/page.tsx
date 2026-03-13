import React from 'react';

const GalleryPage = () => {
    const images = [
        "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1600170311833-c2cf5280ce49?auto=format&fit=crop&q=80&w=600",
        "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80&w=600"
    ];

    return (
        <main className="min-h-screen bg-gray-50 pt-32 pb-24">
            <div className="max-w-[1400px] mx-auto px-4 md:px-8">
                <div className="mb-20 text-center">
                    <h1 className="text-5xl md:text-7xl font-black text-[#1A1A1A] tracking-tighter leading-[0.9] mb-8">
                        Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-400 to-gray-200">Gallery.</span>
                    </h1>
                    <p className="text-xl text-gray-500 max-w-2xl mx-auto leading-relaxed font-medium">
                        Take a tour of our state-of-art clinic in Sabarmati, and discover why we are rated the top dentist near me.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {images.map((src, idx) => (
                        <div key={idx} className="group relative rounded-[40px] overflow-hidden aspect-square border-4 border-white shadow-sm hover:shadow-2xl transition-all duration-500">
                            <img src={src} alt={`Gallery Image ${idx + 1}`} className="w-full h-full object-cover grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out" />
                            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        </div>
                    ))}
                </div>
            </div>
        </main>
    );
};

export default GalleryPage;
