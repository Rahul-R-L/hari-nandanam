"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function ProductsHero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background */}
      <Image
        src="/images/backgrounds/products-hero.webp"
        alt="Traditional temple background representing premium pooja products by Hari Nandanam"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/20 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >


          {/* Heading */}
          <h1 className="text-4xl font-bold leading-[1.05] text-white md:text-5xl lg:text-6xl leading-[1.05]">
            Premium Pooja Products
            <br />
            For Every Sacred Ritual
          </h1>

          {/* Divider */}
          <div className="mt-8 h-1 w-28 rounded-full bg-[#D4AF37]" />

          {/* Description */}
          <p className="mt-8 max-w-xl text-lg leading-9 text-gray-200 md:text-xl">
            Discover Hari Nandanam's growing collection of premium pooja
            essentials, carefully prepared with purity, devotion and respect
            for timeless traditions. Every product is created to become a
            meaningful part of your daily worship and sacred celebrations.
          </p>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          delay: 1,
          duration: 2,
          repeat: Infinity,
        }}
        className="absolute bottom-10 left-1/2 z-20 -translate-x-1/2"
      >
        <ChevronDown
          size={34}
          className="text-[#D4AF37]"
          strokeWidth={1.5}
        />
      </motion.div>
    </section>
  );
}