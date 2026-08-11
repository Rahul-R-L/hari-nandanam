import type { Product } from "@/data/products";

interface ProductInformationProps {
  product: Product;
}

export default function ProductInformation({
  product,
}: ProductInformationProps) {
  if (!product.information) {
    return null;
  }

  return (
    <section className="bg-[#FFFDF8]">
      <div className="mx-auto max-w-[1000px] px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        {/* Section Heading */}

        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#8B6B2E]">
            Good to Know
          </p>

          <h2 className="mt-3 text-3xl font-bold leading-tight text-[#3D2A1F] sm:text-4xl lg:text-5xl">
            {product.information.title}
          </h2>

          <div className="mx-auto mt-6 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-[#D4AF37]" />

            <span className="h-2 w-2 rotate-45 bg-[#D4AF37]" />

            <span className="h-px w-12 bg-[#D4AF37]" />
          </div>
        </div>

        {/* Information Content */}

        <div className="mx-auto mt-10 max-w-3xl rounded-2xl border border-[#E8DFC7] bg-white p-6 shadow-sm sm:mt-12 sm:p-8 lg:p-10">
          <div className="space-y-5">
            {product.information.paragraphs.map(
              (paragraph, index) => (
                <p
                  key={index}
                  className="text-sm leading-7 text-[#4B5563] sm:text-base sm:leading-8"
                >
                  {paragraph}
                </p>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}