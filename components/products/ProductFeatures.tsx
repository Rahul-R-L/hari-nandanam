import type { Product } from "@/data/products";

interface ProductFeaturesProps {
  product: Product;
}

export default function ProductFeatures({
  product,
}: ProductFeaturesProps) {
  if (!product.features || product.features.length === 0) {
    return null;
  }

  return (
    <section className="bg-[#FFFDF8]">
      <div className="mx-auto max-w-[1200px] px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        {/* Section Heading */}

        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#8B6B2E]">
            Why Hari Nandanam
          </p>

          <h2 className="mt-3 text-3xl font-bold leading-tight text-[#3D2A1F] sm:text-4xl lg:text-5xl">
            What Makes It Special
          </h2>

          <div className="mx-auto mt-6 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-[#D4AF37]" />

            <span className="h-2 w-2 rotate-45 bg-[#D4AF37]" />

            <span className="h-px w-12 bg-[#D4AF37]" />
          </div>
        </div>

        {/* Feature Grid */}

        <div
          className={`mt-12 grid gap-5 sm:mt-14 sm:grid-cols-2 ${
            product.features.length >= 3
              ? "lg:grid-cols-3"
              : "lg:grid-cols-2"
          }`}
        >
          {product.features.map((feature, index) => (
            <article
              key={`${feature}-${index}`}
              className="group rounded-2xl border border-[#E8DFC7] bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-[#D4AF37]/60 hover:shadow-lg sm:p-7"
            >
              {/* Number */}

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#6B1124] text-sm font-semibold text-white">
                  {String(index + 1).padStart(2, "0")}
                </div>

                {/* Feature */}

                <div className="pt-1">
                  <h3 className="text-base font-semibold leading-7 text-[#3D2A1F] sm:text-lg">
                    {feature}
                  </h3>
                </div>
              </div>

              {/* Decorative line */}

              <div className="mt-6 h-px w-10 bg-[#D4AF37] transition-all duration-300 group-hover:w-16" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}