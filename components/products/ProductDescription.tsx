import type { Product } from "@/data/products";

interface ProductDescriptionProps {
  product: Product;
}

export default function ProductDescription({
  product,
}: ProductDescriptionProps) {
  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1000px] px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        {/* Section Label */}

        <p className="text-center text-sm font-semibold uppercase tracking-[0.18em] text-[#8B6B2E]">
          About the Product
        </p>

        {/* Heading */}

        <h2 className="mt-3 text-center text-3xl font-bold leading-tight text-[#3D2A1F] sm:text-4xl lg:text-5xl">
          {product.name}
        </h2>

        {/* Decorative Divider */}

        <div className="mx-auto mt-6 flex items-center justify-center gap-3">
          <span className="h-px w-12 bg-[#D4AF37]" />

          <span className="h-2 w-2 rotate-45 bg-[#D4AF37]" />

          <span className="h-px w-12 bg-[#D4AF37]" />
        </div>

        {/* Description */}

        <div className="mx-auto mt-8 max-w-3xl">
          <p className="text-center text-base leading-8 text-[#4B5563] sm:text-lg sm:leading-9">
            {product.description}
          </p>
        </div>
      </div>
    </section>
  );
}