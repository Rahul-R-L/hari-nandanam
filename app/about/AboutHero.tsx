"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function AboutHero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background */}
      <Image
        src="/images/backgrounds/about-hero.webp"
        alt="Ancient South Indian temple representing the heritage and traditions behind Hari Nandanam"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/55 via-black/25 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto w-full max-w-7xl px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >


          {/* H1 */}
          <h1 className="text-5xl font-bold leading-tight text-white md:text-3xl lg:text-5xl">
            Crafted with Devotion.
            <br />
            Inspired by Tradition.
          </h1>

          {/* Divider */}
          <div className="mt-8 h-1 w-28 rounded-full bg-[#D4AF37]" />

          {/* Description */}
          <p className="mt-8 max-w-2xl text-lg leading-9 text-gray-200 md:text-xl">
            Hari Nandanam was created with a simple purpose—to provide
            devotees with pooja essentials prepared with purity, care and
            respect for timeless traditions. Every product reflects our
            commitment to preserving the sanctity of every sacred offering.
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