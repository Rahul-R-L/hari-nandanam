import type { Metadata } from "next";

import ProductsHero from "@/components/products/ProductsHero";
import ProductCollections from "@/components/products/ProductCollections";

export const metadata: Metadata = {
  title: "Premium Pooja Products | Hari Nandanam",

  description:
    "Explore Hari Nandanam's range of pooja and devotional products including Camphor, Rose Water, Lamp Oil, Kumkum, Vibuthi, Kalabham, Dhoop Sticks, Dhoop Cones, Natural Sambrani Sticks and Natural Spices Sticks.",

  keywords: [
    "Hari Nandanam",
    "Pooja Products",
    "Premium Pooja Products",
    "Pooja Essentials",
    "Camphor",
    "Pure Camphor",
    "Rose Water",
    "Lamp Oil",
    "Kumkum",
    "Vibuthi",
    "Kalabham",
    "Sandalwood Powder",
    "Dhoop Sticks",
    "Dhoop Cones",
    "Natural Sambrani Sticks",
    "Natural Spices Sticks",
    "Devotional Products",
    "Pooja Essentials India",
  ],

  alternates: {
    canonical: "/products",
  },

  openGraph: {
    title: "Premium Pooja Products | Hari Nandanam",
    description:
      "Explore Hari Nandanam's range of pooja and devotional products for daily worship, traditional rituals and sacred occasions.",
    url: "/products",
    siteName: "Hari Nandanam",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "Premium Pooja Products | Hari Nandanam",
    description:
      "Explore Hari Nandanam's range of pooja and devotional products for daily worship, traditional rituals and sacred occasions.",
  },
};

export default function ProductsPage() {
  return (
    <>
      <ProductsHero />
      <ProductCollections />
    </>
  );
}