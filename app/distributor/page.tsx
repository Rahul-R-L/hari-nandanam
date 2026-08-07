import type { Metadata } from "next";

import DistributorHero from "@/components/distributor/DistributorHero";
import DistributorForm from "@/components/distributor/DistributorForm";

export const metadata: Metadata = {
  title: "Become a Distributor | Hari Nandanam Premium Pooja Products",

  description:
    "Partner with Hari Nandanam as an authorised distributor of premium pooja products. Explore wholesale and dealership opportunities for lamp oil, rose water, camphor, kumkum, vibuthi and more.",

  keywords: [
    "Hari Nandanam Distributor",
    "Pooja Products Distributor",
    "Pooja Products Wholesale",
    "Wholesale Pooja Products India",
    "Become a Distributor",
    "Lamp Oil Distributor",
    "Camphor Distributor",
    "Rose Water Wholesale",
    "Kumkum Wholesale",
    "Vibuthi Wholesale",
    "Religious Products Distributor",
    "Temple Products Distributor",
    "Wholesale Spiritual Products",
  ],

  alternates: {
    canonical: "/distributor",
  },

  openGraph: {
    title: "Become a Hari Nandanam Distributor",
    description:
      "Join our growing distributor network and bring premium pooja products to retailers, temples and devotees across India.",
    url: "https://www.harinandanam.in/distributor",
    siteName: "Hari Nandanam",
    images: [
      {
        url: "/images/og/distributor.jpg",
        width: 1200,
        height: 630,
        alt: "Become a Hari Nandanam Distributor",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Become a Hari Nandanam Distributor",
    description:
      "Partner with Hari Nandanam and grow your business with premium pooja products.",
    images: ["/images/og/distributor.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function DistributorPage() {
  return (
    <main className="bg-[#FFFDF8]">
      <DistributorHero />
      <DistributorForm />
    </main>
  );
}