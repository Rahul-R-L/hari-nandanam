import type { Product } from "@/data/products";

interface ProductUsageProps {
  product: Product;
}

export default function ProductUsage({
  product,
}: ProductUsageProps) {
  if (!product.usage || product.usage.length === 0) {
    return null;
  }

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1100px] px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        {/* Section Heading */}

        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#8B6B2E]">
            Usage
          </p>

          <h2 className="mt-3 text-3xl font-bold leading-tight text-[#3D2A1F] sm:text-4xl lg:text-5xl">
            How to Use {product.shortName}
          </h2>

          <div className="mx-auto mt-6 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-[#D4AF37]" />

            <span className="h-2 w-2 rotate-45 bg-[#D4AF37]" />

            <span className="h-px w-12 bg-[#D4AF37]" />
          </div>
        </div>

        {/* Usage Steps */}

        <div className="mx-auto mt-12 max-w-3xl sm:mt-14">
          <div className="space-y-4">
            {product.usage.map((step, index) => (
              <div
                key={`${step}-${index}`}
                className="flex items-start gap-4 rounded-2xl border border-[#E8DFC7] bg-[#FFFDF8] p-5 sm:p-6"
              >
                {/* Step Number */}

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[#6B1124] text-sm font-semibold text-white">
                  {index + 1}
                </div>

                {/* Step Content */}

                <p className="pt-1 text-sm leading-7 text-[#4B5563] sm:text-base sm:leading-8">
                  {step}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Safety Notice */}

        {product.slug === "camphor" && (
          <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-[#E8DFC7] bg-[#F8F1E6] p-5 sm:p-6">
            <h3 className="text-base font-semibold text-[#6B1124] sm:text-lg">
              Safety Information
            </h3>

            <p className="mt-2 text-sm leading-7 text-[#4B5563] sm:text-base sm:leading-8">
              Keep camphor away from children and flammable materials.
              Use only in a suitable holder and never leave burning
              camphor unattended.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}