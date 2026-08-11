import Image from "next/image";
import Link from "next/link";
import {
  getProductBySlug,
  type Product,
} from "@/data/products";

interface RelatedProductsProps {
  product: Product;
}

export default function RelatedProducts({
  product,
}: RelatedProductsProps) {
  const relatedProducts = product.relatedProducts
    .map((slug) => getProductBySlug(slug))
    .filter((item): item is Product => Boolean(item));

  if (relatedProducts.length === 0) {
    return null;
  }

  return (
    <section className="bg-[#FFFDF8]">
      <div className="mx-auto max-w-[1200px] px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        {/* Section Heading */}

        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#8B6B2E]">
            Explore More
          </p>

          <h2 className="mt-3 text-3xl font-bold leading-tight text-[#3D2A1F] sm:text-4xl lg:text-5xl">
            Other Pooja Essentials
          </h2>

          <div className="mx-auto mt-6 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-[#D4AF37]" />

            <span className="h-2 w-2 rotate-45 bg-[#D4AF37]" />

            <span className="h-px w-12 bg-[#D4AF37]" />
          </div>
        </div>

        {/* Product Grid */}

        <div className="mt-10 grid gap-5 sm:mt-12 sm:grid-cols-2 lg:grid-cols-3">
          {relatedProducts.slice(0, 6).map((relatedProduct) => (
            <Link
              key={relatedProduct.slug}
              href={`/products/${relatedProduct.slug}`}
              className="group overflow-hidden rounded-2xl border border-[#E8DFC7] bg-white transition-all duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/60 hover:shadow-lg"
            >
              {/* Product Image */}

              <div className="relative aspect-square overflow-hidden bg-[#F7F1E6]">
                <Image
                  src={relatedProduct.heroImage}
                  alt={`${relatedProduct.name} - Hari Nandanam`}
                  fill
                  sizes="
                    (max-width: 640px) 100vw,
                    (max-width: 1024px) 50vw,
                    33vw
                  "
                  className="object-contain p-6 transition-transform duration-500 group-hover:scale-105 sm:p-8"
                />
              </div>

              {/* Product Content */}

              <div className="p-5 sm:p-6">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[#8B6B2E]">
                  {relatedProduct.category}
                </p>

                <h3 className="mt-2 text-xl font-bold text-[#3D2A1F]">
                  {relatedProduct.name}
                </h3>

                <p className="mt-2 line-clamp-2 text-sm leading-6 text-[#6B7280]">
                  {relatedProduct.shortDescription}
                </p>

                {/* View Product */}

                <div className="mt-5 flex items-center gap-2 text-sm font-semibold text-[#6B1124]">
                  <span>View Product</span>

                  <span
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* All Products */}

        <div className="mt-10 text-center">
          <Link
            href="/products"
            className="inline-flex items-center justify-center rounded-full border-2 border-[#6B1124] px-7 py-3 text-sm font-semibold text-[#6B1124] transition-all duration-300 hover:bg-[#6B1124] hover:text-white"
          >
            View All Products
          </Link>
        </div>
      </div>
    </section>
  );
}