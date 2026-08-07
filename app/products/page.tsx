import type { Metadata } from "next";

import ProductsHero from "@/components/products/ProductsHero";

import ProductCollections from "@/components/products/ProductCollections";
// import ComingSoon from "@/components/products/ComingSoon";
// import QualityPromise from "@/components/products/QualityPromise";
// import ProductCTA from "@/components/products/ProductCTA";

export const metadata: Metadata = {
  title: "Premium Pooja Products | Hari Nandanam",

  description:
    "Explore Hari Nandanam's premium range of pooja products including Lamp Oil, Rose Water, Camphor, Kumkum, Turmeric and Vibuthi, crafted with purity, devotion and respect for timeless traditions.",

  keywords: [
    "Hari Nandanam",
    "Pooja Products",
    "Premium Pooja Products",
    "Lamp Oil",
    "Rose Water",
    "Camphor",
    "Kumkum",
    "Turmeric",
    "Vibuthi",
    "Pooja Essentials",
  ],

  alternates: {
    canonical: "/products",
  },
};

export default function ProductsPage() {
  return (
    <>
<>
  <ProductsHero />

  <ProductCollections />

  {/*<QualityPromise />*/}

  {/*<DistributorCTA />*/}
</>

      {/* Build these next */}
      {/* <ComingSoon /> */}
      {/* <QualityPromise /> */}
      {/* <ProductCTA /> */}
    </>
  );
}