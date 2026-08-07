"use client";

import Link from "next/link";
import ProductCard from "./ProductCard";
import { featuredProducts } from "@/data/featuredProducts";

export default function FeaturedProducts() {
  return (
    <section className="bg-[#FAF8F3] py-28">

      <div className="mx-auto max-w-[1440px] px-6 md:px-10 lg:px-16">

        {/* Section Heading */}
        <div className="mx-auto mb-20 max-w-3xl text-center">

          <span className="inline-block rounded-full border border-[#D4AF37]/30 bg-[#FFF8EC] px-5 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-[#6B1124]">
            Featured Products
          </span>

          <h2 className="mt-8 text-5xl font-bold leading-tight text-[#3D2A1F] md:text-6xl">
            Crafted for Every
            <br />
            Sacred Ritual
          </h2>

          <p className="mx-auto mt-8 max-w-2xl text-lg leading-8 text-gray-600">
            Discover our premium range of pooja essentials,
            thoughtfully crafted with purity, devotion and tradition
            for your daily spiritual rituals.
          </p>

        </div>

        {/* Product Grid */}

        <div className="grid grid-cols-1 gap-10 md:grid-cols-2 xl:grid-cols-3">

          {featuredProducts.map((product, index) => (

            <ProductCard
              key={product.id}
              title={product.title}
              subtitle={product.subtitle}
              image={product.image}
              href={product.href}
              bgColor={product.bgColor}
              delay={index * 0.15}
            />

          ))}

        </div>

        {/* View All */}

        <div className="mt-20 text-center">

          <Link
            href="/products"
            className="group inline-flex items-center gap-3 text-lg font-semibold text-[#6B1124] transition-all duration-300 hover:gap-5"
          >
            View All Products

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5 12h14M13 5l7 7-7 7"
              />
            </svg>

          </Link>

        </div>

      </div>

    </section>
  );
}