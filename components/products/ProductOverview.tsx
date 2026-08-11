"use client";

import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/products";

interface ProductOverviewProps {
  product: Product;
}

export default function ProductOverview({
  product,
}: ProductOverviewProps) {
  return (
    <section className="bg-[#FFFDF8]">
      <div className="mx-auto max-w-[1280px] px-5 pb-16 pt-32 sm:px-6 sm:pb-20 sm:pt-36 lg:px-8 lg:pb-24 lg:pt-40">
        
        {/* Breadcrumb */}

        <nav
          aria-label="Breadcrumb"
          className="mb-8 flex flex-wrap items-center gap-2 text-sm text-[#6B7280]"
        >
          <Link
            href="/"
            className="transition-colors hover:text-[#6B1124]"
          >
            Home
          </Link>

          <span aria-hidden="true">/</span>

          <Link
            href="/products"
            className="transition-colors hover:text-[#6B1124]"
          >
            Products
          </Link>

          <span aria-hidden="true">/</span>

          <span className="text-[#3D2A1F]">
            {product.shortName}
          </span>
        </nav>

        {/* Product Overview */}

        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          
          {/* Product Image */}

          <div className="relative overflow-hidden rounded-3xl bg-[#F7F1E6]">
            <div className="relative aspect-square w-full">
              <Image
                src={product.heroImage}
                alt={`${product.name} - Hari Nandanam`}
                fill
                sizes="
                  (max-width: 640px) 100vw,
                  (max-width: 1024px) 90vw,
                  50vw
                "
                className="object-contain p-6 sm:p-10 lg:p-14"
              />
            </div>
          </div>

          {/* Product Information */}

          <div>
            {/* Category */}

            <p className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-[#8B6B2E]">
              {product.category}
            </p>

            {/* Product Name */}

            <h1 className="text-4xl font-bold leading-tight text-[#3D2A1F] sm:text-5xl lg:text-6xl">
              {product.name}
            </h1>

            {/* Tagline */}

            <p className="mt-4 text-xl font-medium leading-relaxed text-[#6B1124] sm:text-2xl">
              {product.tagline}
            </p>

            {/* Short Description */}

            <p className="mt-6 max-w-2xl text-base leading-8 text-[#4B5563] sm:text-lg">
              {product.shortDescription}
            </p>

            {/* Product Features */}

            {product.features.length > 0 && (
              <div className="mt-8 grid gap-3 sm:grid-cols-2">
                {product.features.slice(0, 4).map((feature) => (
                  <div
                    key={feature}
                    className="flex items-start gap-3 rounded-xl border border-[#E8DFC7] bg-white px-4 py-4"
                  >
                    <span
                      className="mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#6B1124] text-xs text-white"
                      aria-hidden="true"
                    >
                      ✓
                    </span>

                    <span className="text-sm font-medium leading-6 text-[#3D2A1F]">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {/* Variants */}

            {product.variants && product.variants.length > 0 && (
              <div className="mt-8">
                <h2 className="text-lg font-semibold text-[#3D2A1F]">
                  Available Varieties
                </h2>

                <div className="mt-4 space-y-3">
                  {product.variants.map((variant) => (
                    <div
                      key={variant.id}
                      className="rounded-2xl border border-[#E8DFC7] bg-white p-4"
                    >
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h3 className="font-semibold text-[#3D2A1F]">
                          {variant.name}
                        </h3>

                        {variant.foodGrade !== undefined && (
                          <span
                            className={`rounded-full px-3 py-1 text-xs font-semibold ${
                              variant.foodGrade
                                ? "bg-[#EAF5EA] text-[#286B35]"
                                : "bg-[#F4EEE5] text-[#6B5A45]"
                            }`}
                          >
                            {variant.foodGrade
                              ? "Food Grade"
                              : "Non-Food Grade"}
                          </span>
                        )}
                      </div>

                      {variant.subtitle && (
                        <p className="mt-1 text-sm font-medium text-[#8B6B2E]">
                          {variant.subtitle}
                        </p>
                      )}

                      <p className="mt-2 text-sm leading-6 text-[#6B7280]">
                        {variant.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Available Sizes */}

            {product.sizes.length > 0 && (
              <div className="mt-8">
                <h2 className="text-lg font-semibold text-[#3D2A1F]">
                  Available Sizes
                </h2>

                <div className="mt-4 flex flex-wrap gap-3">
                  {product.sizes.map((size) => (
                    <span
                      key={size}
                      className="rounded-full border border-[#D4AF37] bg-[#FFFDF8] px-5 py-2.5 text-sm font-semibold text-[#6B1124]"
                    >
                      {size}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* CTA */}

            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href="/contact"
                className="inline-flex w-full items-center justify-center rounded-full bg-[#6B1124] px-7 py-3.5 text-center font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#4A0C19] hover:shadow-lg sm:w-auto"
              >
                Contact Us
              </Link>

              <Link
                href="/distributor"
                className="inline-flex w-full items-center justify-center rounded-full border-2 border-[#D4AF37] px-7 py-3.5 text-center font-semibold text-[#6B1124] transition-all duration-300 hover:bg-[#D4AF37] hover:text-white sm:w-auto"
              >
                Become a Distributor
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}