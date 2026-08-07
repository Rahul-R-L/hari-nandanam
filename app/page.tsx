import Hero from "@/components/hero/Hero";
import FeaturedProducts from "@/components/featured/FeaturedProducts";
import WhyHariNandanam from "@/components/why/WhyHariNandanam";
import DistributorSection from "@/components/distributor/DistributorSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Premium Pooja Products | Lamp Oil, Rose Water & Camphor | Hari Nandanam",

  description:
    "Hari Nandanam is a premium pooja products brand offering high-quality Lamp Oil, Rose Water, Camphor, Kumkum, Turmeric and Vibuthi. Crafted with devotion and inspired by tradition.",

  keywords: [
    "Hari Nandanam",
    "Pooja Products",
    "Premium Pooja Products",
    "Lamp Oil",
    "Pooja Lamp Oil",
    "Rose Water",
    "Camphor",
    "Pure Camphor",
    "Kumkum",
    "Turmeric",
    "Vibuthi",
    "Pooja Essentials",
    "Hindu Pooja Products",
    "Spiritual Products",
    "Pooja Products Manufacturer",
    "Pooja Products Kerala",
    "Wholesale Pooja Products",
    "Pooja Products Distributor",
    "Devotional Products",
  ],

  authors: [
    {
      name: "Hari Nandanam",
    },
  ],

  creator: "Hari Nandanam",

  publisher: "Unitech Industries",

  metadataBase: new URL("https://www.harinandanam.in"),

  alternates: {
    canonical: "/",
  },

  openGraph: {
    title:
      "Hari Nandanam | Premium Pooja Products Crafted with Devotion",

    description:
      "Discover premium pooja essentials including Lamp Oil, Rose Water, Camphor, Kumkum, Turmeric and Vibuthi from Hari Nandanam.",

    url: "https://www.harinandanam.in",

    siteName: "Hari Nandanam",

    images: [
      {
        url: "/images/og/homepage.png",
        width: 1200,
        height: 630,
        alt: "Hari Nandanam Premium Pooja Products",
      },
    ],

    locale: "en_IN",

    type: "website",
  },

  twitter: {
    card: "summary_large_image",

    title:
      "Hari Nandanam | Premium Pooja Products",

    description:
      "Premium Lamp Oil, Rose Water, Camphor and other pooja essentials crafted with devotion.",

    images: ["/images/og/homepage.png"],
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  category: "Religious Products",
};

export default function Home() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <WhyHariNandanam />
      <DistributorSection />
    </>
  );
}