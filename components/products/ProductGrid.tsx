"use client";

import SectionHeader from "@/components/ui/SectionHeader";
import ProductCard from "@/components/featured/ProductCard";

const products = [
  {
    title: "Lamp Oil",
    subtitle:
      "Premium lamp oil for bright, clean and long-lasting illumination during daily pooja and temple rituals.",
    image: "/images/products/lamp-oil-1.webp",
    href: "/products/lamp-oil",
    bgColor: "#FFF8E7",
  },
  {
    title: "Rose Water",
    subtitle:
      "Pure rose water prepared for pooja rituals, abhishekam and sacred offerings.",
    image: "/images/products/rose-water-1.webp",
    href: "/products/rose-water",
    bgColor: "#FFF3F6",
  },
  {
    title: "Camphor",
    subtitle:
      "Premium camphor that burns with a bright flame and leaves a pure devotional fragrance.",
    image: "/images/products/camphor.webp",
    href: "/products/camphor",
    bgColor: "#F9FBFC",
  },
  {
    title: "Kumkum",
    subtitle:
      "Traditional kumkum prepared for pooja, festivals and everyday worship.",
    image: "/images/products/kumkum.webp",
    href: "/products/kumkum",
    bgColor: "#FFF4F4",
  },
  {
    title: "Turmeric",
    subtitle:
      "Pure turmeric powder for sacred rituals and traditional religious ceremonies.",
    image: "/images/products/turmeric.webp",
    href: "/products/turmeric",
    bgColor: "#FFFBEA",
  },
  {
    title: "Vibuthi",
    subtitle:
      "Sacred vibuthi prepared for daily worship and temple rituals.",
    image: "/images/products/vibuthi.webp",
    href: "/products/vibuthi",
    bgColor: "#FAFAFA",
  },
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
          description="Discover Hari Nandanam's carefully crafted collection of pooja products, prepared with purity, devotion and respect for timeless traditions."
        />

        <div className="mt-20 grid gap-10 md:grid-cols-2 xl:grid-cols-3">
          {products.map((product, index) => (
            <ProductCard
              key={product.title}
              title={product.title}
              subtitle={product.subtitle}
              image={product.image}
              href={product.href}
              bgColor={product.bgColor}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
}