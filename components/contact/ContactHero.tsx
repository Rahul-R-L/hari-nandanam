"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

export default function ContactHero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background */}
      <Image
        src="/images/backgrounds/contact-hero.webp"
        alt="Traditional temple background representing premium pooja products by Hari Nandanam"
        fill
        priority
        className="object-cover object-center"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/45 via-black/20 to-transparent" />

      {/* Content */}
      <div className="relative z-10 mx-auto flex w-full max-w-7xl justify-center px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 35 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl text-center"
        >
          {/* Badge */}

          {/* Heading */}
          <h1 className="text-3xl font-bold leading-[1.05] text-white md:text-4xl lg:text-5xl">
            We'd Love to
            <br />
            Hear From You
          </h1>

          {/* Description */}
          <p className="mt-8 max-w-xl text-lg leading-9 text-gray-200 md:text-xl">
            Whether you have questions about our products, distribution
            opportunities or customer support, our team is here to assist
            you. Get in touch with Hari Nandanam today.
          </p>
        </motion.div>
      </div>

      {/* Scroll */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{
          delay: 1,
          duration: 2,
          repeat: Infinity,
        }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
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