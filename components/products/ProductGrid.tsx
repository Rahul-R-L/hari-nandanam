"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import ProductCard from "@/components/featured/ProductCard";
import { products } from "@/data/products";

const backgroundColors = [
  "#FFF8E7",
  "#FFF3F6",
  "#F9FBFC",
  "#FFF4F4",
  "#FFFBEA",
  "#FAFAFA",
];

export default function ProductGrid() {
  return (
    <section
      id="current-products"
      className="bg-[#FFFDF8] py-28"
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          badge="OUR PRODUCTS"
          title="Premium Pooja Essentials"
          description="Discover Hari Nandanam's carefully selected collection of pooja and devotional products for daily worship, traditional rituals and sacred occasions."
        />

        <div className="mt-20 grid gap-10 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product, index) => (
            <ProductCard
              key={product.slug}
              title={product.name}
              subtitle={product.shortDescription}
              image={product.heroImage}
              href={`/products/${product.slug}`}
              bgColor={
                backgroundColors[index % backgroundColors.length]
              }
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
