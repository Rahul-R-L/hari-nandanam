"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Sparkles, Clock3 } from "lucide-react";

import SectionHeader from "@/components/ui/SectionHeader";
import ProductCard from "@/components/featured/ProductCard";

const currentProducts = [
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
    title: "Kalabham",
    subtitle:
      "Pure sandal wood powder for sacred rituals and traditional religious ceremonies.",
    image: "/images/products/kalabham.webp",
    href: "/products/kalabham",
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

const upcomingProducts = [
  {
    title: "Cotton Wicks",
    subtitle: "Premium cotton wicks for daily pooja.",
  },
  {
    title: "Dhoop Sticks",
    subtitle: "Traditional aromatic dhoop sticks.",
  },
  {
    title: "Dhoop Cones",
    subtitle: "Slow-burning devotional fragrance cones.",
  },
  {
    title: "Chandan Powder",
    subtitle: "Pure sandalwood powder for pooja.",
  },
  {
    title: "Chandan Paste",
    subtitle: "Traditional sandalwood paste.",
  },
  {
    title: "Akshata",
    subtitle: "Coloured sacred rice for rituals.",
  },
  {
    title: "Sindoor",
    subtitle: "Traditional sindoor for worship.",
  },
  {
    title: "Attars",
    subtitle: "Natural devotional fragrances.",
  },
  {
    title: "Electric Diffusers",
    subtitle: "Electric camphor diffusers.",
  },
  {
    title: "Room Fresheners",
    subtitle: "Devotional fragrance collection.",
  },
];

export default function ProductCollections() {
  const [activeTab, setActiveTab] = useState<"current" | "upcoming">("current");

  return (
    <section className="bg-[#FFFDF8] py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        <SectionHeader
          badge="PRODUCT COLLECTIONS"
          title="Explore Our Range"
          description="Discover Hari Nandanam's growing collection of premium pooja essentials and upcoming devotional products."
        />

        {/* Tabs */}

        <div className="mx-auto mt-12 flex flex-col gap-4 md:flex-row md:max-w-3xl md:rounded-full md:border md:border-[#E8DFC7] md:bg-white md:p-2 md:shadow-sm">

          <button
            onClick={() => setActiveTab("current")}
            className={`flex flex-1 items-center justify-center gap-3 rounded-full px-8 py-4 font-semibold transition-all duration-300 ${
              activeTab === "current"
                ? "bg-[#6B1124] text-white shadow-lg"
                : "text-[#6B1124] hover:bg-[#FFF7EC]"
            }`}
          >
            <Sparkles size={20} />
            Pooja Essentials
          </button>

          <button
            onClick={() => setActiveTab("upcoming")}
            className={`flex flex-1 items-center justify-center gap-3 rounded-full px-8 py-4 font-semibold transition-all duration-300 ${
              activeTab === "upcoming"
                ? "bg-[#6B1124] text-white shadow-lg"
                : "text-[#6B1124] hover:bg-[#FFF7EC]"
            }`}
          >
            <Clock3 size={20} />
            Expanding Collection
          </button>

        </div>

        {/* Grid */}

        <AnimatePresence mode="wait">

          {activeTab === "current" ? (

            <motion.div
              key="current"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4 }}
              className="mt-20 grid gap-10 md:grid-cols-2 xl:grid-cols-3"
            >
              {currentProducts.map((product, index) => (
                <ProductCard
                  key={product.title}
                  {...product}
                  delay={index * 0.08}
                />
              ))}
            </motion.div>

          ) : (

            <motion.div
              key="upcoming"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -30 }}
              transition={{ duration: 0.4 }}
              className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-3"
            >
              {upcomingProducts.map((product) => (
                <div
                  key={product.title}
                  className="rounded-[32px] border border-dashed border-[#D4AF37]/40 bg-[#FFFCF5] p-10 text-center"
                >
                  <span className="rounded-full bg-[#D4AF37]/15 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-[#8B6A00]">
                    Coming Soon
                  </span>

                  <h3 className="mt-8 text-3xl font-semibold text-[#3D2A1F]">
                    {product.title}
                  </h3>

                  <p className="mt-4 leading-7 text-gray-600">
                    {product.subtitle}
                  </p>
                </div>
              ))}
            </motion.div>

          )}

        </AnimatePresence>

      </div>
    </section>
  );
}