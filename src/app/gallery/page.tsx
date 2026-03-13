import React from 'react';

const GalleryPage = () => {
    const images = [
        "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerbIMwcyy0BPAl_GSffAncZ7U4eR7O2CWJkTrSoa6sFrdyShFfpJ8jz6r8k88bR3-cXmXUWPqSZAggmr7Ub16KJYAfb0EJd9REtCnuM5Hg1z2DWNB7R1mSRFtQMUd1t8nsu4hra=s1360-w1360-h1020-rw",
        "https://lh3.googleusercontent.com/gps-cs-s/AHVAwerg1lNPfTdZXoQWLqrsw3KcaWfEX6vUqiKN-3bKSw8ooszNGGJnSRQ1RH0eMCd57zihsjD3Rd_GYfeBG9BMQwjbDtRpu7Uvd0qlxhV8iXf_TysFf6DS0H7ddgf8jwijWZ281cx2HQ=s1360-w1360-h1020-rw",
        "https://lh3.googleusercontent.com/p/AF1QipNyxU3kihy0brPQgumBPCif15wPtQCO0Ln7pN_Q=s1360-w1360-h1020-rw",
        "https://lh3.googleusercontent.com/p/AF1QipOWM6072jPhQ6ChW2et4q2s744gz7WwsaE0RBbj=s1360-w1360-h1020-rw",
        "https://lh3.googleusercontent.com/p/AF1QipOpbwh8fmFq3lXASu3Z1id6G-J4D5ld-fD9zqsv=s1360-w1360-h1020-rw",
        "https://lh3.googleusercontent.com/p/AF1QipPC4zSN1guQMbUuxiOOcnGljHnwaa8QBr7e745X=s1360-w1360-h1020-rw"
    ];

    return (
        <main className="min-h-screen bg-gray-50 pt-32 pb-24">
            <div className="max-w-[1550px] mx-auto px-4 md:px-8">
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
