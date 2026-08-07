import type { Metadata } from "next";
import { Cinzel, Inter } from "next/font/google";

import "./globals.css";

import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

const cinzel = Cinzel({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Hari Nandanam",
    template: "%s | Hari Nandanam",
  },
  description:
    "Premium pooja products crafted with purity, devotion and tradition. Explore Lamp Oil, Rose Water, Camphor and more from Hari Nandanam.",
  keywords: [
    "Hari Nandanam",
    "Pooja Products",
    "Lamp Oil",
    "Rose Water",
    "Camphor",
    "Kumkum",
    "Turmeric",
    "Vibuthi",
    "India",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${cinzel.variable} ${inter.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-[#FFFDF8] font-body text-[#2F2118] antialiased">
        <Navbar />

        <main className="flex min-h-screen flex-col">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}