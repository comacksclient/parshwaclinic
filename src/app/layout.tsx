import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/home/footer";
import { Navbar } from "@/components/home/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Parshwa Dental Clinic | Best Dentist Near Me in Sabarmati, Ahmedabad",
  description: "Looking for a top-rated dentist near me? Parshwa Dental Clinic in Sabarmati, Chandkheda, Ahmedabad offers expert dental care. Book an appointment today for your perfect smile.",
  keywords: "dentist near me, Sabarmati dentist, dental clinic Sabarmati, Chandkheda dentist, Parshwa Dental Clinic, Dental Surgeon Ahmedabad",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
