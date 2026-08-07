import type { Metadata } from "next";

import ContactHero from "@/components/contact/ContactHero";
import ContactInfo from "@/components/contact/ContactInfo";

export const metadata: Metadata = {
  title: "Contact Hari Nandanam | Premium Pooja Products",

  description:
    "Contact Hari Nandanam for product enquiries, customer support, wholesale and distributor information. Get in touch with our team for premium pooja products crafted with devotion.",

  keywords: [
    "Contact Hari Nandanam",
    "Hari Nandanam Contact",
    "Hari Nandanam Phone Number",
    "Hari Nandanam Email",
    "Pooja Products Manufacturer",
    "Pooja Products Kerala",
    "Lamp Oil Manufacturer",
    "Camphor Manufacturer",
    "Rose Water Manufacturer",
    "Wholesale Pooja Products",
    "Pooja Products Distributor",
    "Customer Support",
  ],

  alternates: {
    canonical: "/contact",
  },

  openGraph: {
    title: "Contact Hari Nandanam",
    description:
      "Reach the Hari Nandanam team for product enquiries, customer support and business partnerships.",
    url: "https://www.harinandanam.in/contact",
    siteName: "Hari Nandanam",
    images: [
      {
        url: "/images/og/contact.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Hari Nandanam",
      },
    ],
    locale: "en_IN",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Contact Hari Nandanam",
    description:
      "Contact Hari Nandanam for premium pooja products, customer support and business enquiries.",
    images: ["/images/og/contact.jpg"],
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <ContactInfo />
    </>
  );
}