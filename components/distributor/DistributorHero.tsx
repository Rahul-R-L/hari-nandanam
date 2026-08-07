"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown, ArrowRight } from "lucide-react";

export default function DistributorHero() {
  return (
    <section className="relative flex min-h-[65vh] items-end overflow-hidden pb-20">
      {/* Background */}
      <Image
        src="/images/backgrounds/distributor-hero.webp"
        alt="Become a Hari Nandanam Distributor"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" />
      <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/40 to-black/50" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl justify-center px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="translate-y-22 max-w-4xl text-center"
        >


          {/* Heading */}

          <h1 className="text-3xl font-bold leading-tight text-white md:text-4xl lg:text-5xl">
            Become a
            <br />
            Hari Nandanam
            <span className="block text-[#F4D06F]">
              Distributor
            </span>
          </h1>

          {/* Description */}

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-gray-200 md:text-xl">
            Partner with Hari Nandanam and grow your business by bringing
            premium pooja products to retailers, temples and devotees across
            your region. Join us in building a trusted devotional brand for
            generations to come.
          </p>

          {/* CTA */}

          <div className="mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">

            <a
              href="#distributor-form"
              className="inline-flex items-center gap-3 rounded-full bg-[#6B1124] px-8 py-4 text-lg font-semibold text-white shadow-lg transition-all duration-300 hover:-translate-y-1 hover:bg-[#58101F]"
            >
              Apply for Distributorship
              <ArrowRight size={20} />
            </a>

            <a
              href="/products"
              className="rounded-full border border-white/40 bg-white/10 px-8 py-4 text-lg font-semibold text-white backdrop-blur-sm transition-all duration-300 hover:bg-white/20"
            >
              Explore Products
            </a>

          </div>

          {/* Small Note */}

          <p className="mt-10 mb-6 text-sm tracking-wide text-gray-300">
            Looking for distributors across Kerala and expanding to other
            regions in India.
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
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
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