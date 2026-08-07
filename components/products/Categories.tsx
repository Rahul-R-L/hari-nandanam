"use client";

import Link from "next/link";
import { ArrowRight, Sparkles, Clock3 } from "lucide-react";
import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Categories() {
  return (
    <section className="bg-[#FFFDF8] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          badge="PRODUCT COLLECTIONS"
          title="Explore Our Range"
          description="From everyday pooja essentials to our upcoming fragrance collection, Hari Nandanam is committed to bringing purity and devotion into every sacred space."
        />

        <div className="mt-16 grid gap-8 lg:grid-cols-2">
          {/* Available Products */}
          <motion.div
            whileHover={{ y: -8 }}
            transition={{ duration: 0.25 }}
            className="group rounded-3xl border border-[#D4AF37]/20 bg-white p-10 shadow-sm transition-all hover:shadow-xl"
          >
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#6B1124]/10">
              <Sparkles
                size={30}
                className="text-[#6B1124]"
              />
            </div>

            <h3 className="text-3xl font-bold text-[#2F2118]">
              Available Today
            </h3>

            <p className="mt-5 leading-8 text-gray-600">
              Explore our premium range of Lamp Oil, Rose Water, Camphor,
              Kumkum, Turmeric and Vibuthi, carefully prepared for daily worship
              and sacred rituals.
            </p>

            <Link
              href="#current-products"
              className="mt-8 inline-flex items-center gap-2 font-semibold text-[#6B1124] transition group-hover:gap-3"
            >
              Explore Products
              <ArrowRight size={18} />
            </Link>
          </motion.div>

          {/* Coming Soon */}
          <motion.div
            whileHover={{ y: -8 }}
            transition={{ duration: 0.25 }}
            className="group rounded-3xl border border-[#D4AF37]/20 bg-gradient-to-br from-[#FFF7E8] to-[#FFFDF8] p-10 shadow-sm transition-all hover:shadow-xl"
          >
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#D4AF37]/15">
              <Clock3
                size={30}
                className="text-[#B8860B]"
              />
            </div>

            <h3 className="text-3xl font-bold text-[#2F2118]">
              Coming Soon
            </h3>

            <p className="mt-5 leading-8 text-gray-600">
              We are expanding our collection with Cotton Wicks, Dhoop Sticks,
              Dhoop Cones, Chandan Powder, Chandan Paste, Akshata, Sindoor,
              Attars and more devotional products.
            </p>

            <Link
              href="#coming-soon"
              className="mt-8 inline-flex items-center gap-2 font-semibold text-[#B8860B] transition group-hover:gap-3"
            >
              View Upcoming Collection
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}