import type { Metadata, Viewport } from "next";
import "./globals.css";

import { Chatbot } from "@/components/chatbot";
import { Unbounded } from "next/font/google";
import Script from "next/script";
import { Navbar } from "@/components/home/navbar";
import { Footer } from "@/components/home/footer";

const unbounded = Unbounded({
  subsets: ["latin"],
  display: "swap",

});


export const viewport: Viewport = {
  themeColor: "#1E4D58",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};


export const metadata: Metadata = {
  metadataBase: new URL("https://www.parshwadental.com"),
  title: {
    default: "Best Dentist in Sabarmati, Ahmedabad",
    template: "%s | Parshwa Dental Clinic",
  },
  description:
    "Top-rated dental clinic in Sabarmati, Ahmedabad (★5.0). Painless root canals, implants, braces & expert care by Dr. Shrenik Shah & Dr. Dimple Shah.",
  icons: {
    icon: "/lo.png",
    shortcut: "/lo.png",
    apple: "/lo.png",
  },
  keywords: [
    "Parshwa Dental Clinic",
    "Dentist in Sabarmati Ahmedabad",
    "Dental Clinic Chandkheda Ahmedabad",
    "Best Dentist Ahmedabad",
    "Best Dentist Near me",
    "Dentist in Sabarmati",
    "Dentist near me Sabarmati",
    "Best Dental Clinic Sabarmati",
    "Top 5 Dental Clinic in Ahmedabad",
    "Dental Clinic in Chandkheda",
    "Best Dentist in Ahmedabad Gujarat",
    "Top Rated Dental Clinic Sabarmati",
    "Root Canal Treatment Ahmedabad",
    "Dental Implants Ahmedabad",
    "Braces Treatment Ahmedabad",
    "Dental Care Ahmedabad",





    "Dentist Near me",
    "Best Dental Clinic Near me",

  ],
  authors: [{ name: "Dr. Shrenik Shah" }, { name: "Dr. Dimple Shah" }],
  creator: "Parshwa Dental Clinic",
  publisher: "Parshwa Dental Clinic",
  formatDetection: { email: false, address: false, telephone: false },
  alternates: {
    canonical: "https://www.parshwadental.com",
    languages: {
      'en': 'https://www.parshwadental.com',
      'x-default': 'https://www.parshwadental.com',
    }
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://parshwadental.com",
    siteName: "Parshwa Dental Clinic",
    title: "Best Dentist in Sabarmati, Ahmedabad | Parshwa Dental",
    description:
      "Looking for a trusted dentist in Ahmedabad? Parshwa Dental offers implants, braces, RCT & cosmetic dentistry. 5000+ Happy Patients.",
    images: [
      {
        url: "/lo.png",
        width: 1200,
        height: 630,
        alt: "Parshwa Dental Clinic Ahmedabad",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Parshwa Dental | Best Dentist in Sabarmati",
    description:
      "Compassionate, advanced dental care for the whole family in Sabarmati, Ahmedabad.",
    images: ["/lo.png"],
  },
  other: {
    "geo.region": "IN-GJ",
    "geo.placename": "Sabarmati, Ahmedabad",
    "geo.position": "23.0906;72.5855",
    ICBM: "23.0906, 72.5855",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  "name": "Parshwa Dental Clinic",
  "image": "/lo.png",
  "url": "https://parshwadental.com",
  "telephone": "+919328820346",
  "priceRange": "₹₹",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "21, 1st Floor, Trishla Complex Opp. Podar School New CG Road Chandkheda",
    "addressLocality": "Ahmedabad",
    "addressRegion": "GJ",
    "postalCode": "382424",
    "addressCountry": "IN",
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 23.0906,
    "longitude": 72.5855,
  },
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "10:00 AM",
      "closes": "2:00 PM"
    },
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      "opens": "5:00 PM",
      "closes": "9:00 PM"
    }
  ],
  "sameAs": [
    "https://www.instagram.com/parshwadental/",
    "https://www.facebook.com/parshwadental/",
  ],
  "department": [
    {
      "@type": "MedicalSpecialty",
      "name": "Dentistry",
      "description": "General and Cosmetic Dentistry",
    },
  ],
  "areaServed": {
    "@type": "Place",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Sabarmati, Ahmedabad",
      "addressRegion": "GJ",
      "addressCountry": "IN",
    },
  },
};


export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>





      </head>


      <body className={`${unbounded.className} antialiased selection:bg-[#AEE9F5] selection:text-[#1A1A1A]`}>



        <Navbar />


        <main className="relative min-h-screen">
          {children}
        </main>

        <Chatbot />
        <Footer />
      </body>
    </html>
  );
}