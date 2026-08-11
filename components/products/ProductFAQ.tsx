import type { Product } from "@/data/products";

interface ProductFAQProps {
  product: Product;
}

export default function ProductFAQ({
  product,
}: ProductFAQProps) {
  if (!product.faqs || product.faqs.length === 0) {
    return null;
  }

  return (
    <section className="bg-white">
      <div className="mx-auto max-w-[1000px] px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        {/* Section Heading */}

        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#8B6B2E]">
            Frequently Asked Questions
          </p>

          <h2 className="mt-3 text-3xl font-bold leading-tight text-[#3D2A1F] sm:text-4xl lg:text-5xl">
            Common Questions
          </h2>

          <div className="mx-auto mt-6 flex items-center justify-center gap-3">
            <span className="h-px w-12 bg-[#D4AF37]" />

            <span className="h-2 w-2 rotate-45 bg-[#D4AF37]" />

            <span className="h-px w-12 bg-[#D4AF37]" />
          </div>
        </div>

        {/* FAQ List */}

        <div className="mx-auto mt-10 max-w-3xl space-y-3 sm:mt-12">
          {product.faqs.map((faq, index) => (
            <details
              key={`${faq.question}-${index}`}
              className="group rounded-2xl border border-[#E8DFC7] bg-[#FFFDF8]"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-5 px-5 py-5 text-left text-base font-semibold text-[#3D2A1F] sm:px-6 sm:py-6 sm:text-lg [&::-webkit-details-marker]:hidden">
                <span>{faq.question}</span>

                <span
                  aria-hidden="true"
                  className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-[#D4AF37] text-xl font-normal leading-none text-[#6B1124] transition-transform duration-300 group-open:rotate-45"
                >
                  +
                </span>
              </summary>

              <div className="border-t border-[#E8DFC7] px-5 pb-5 pt-4 sm:px-6 sm:pb-6">
                <p className="text-sm leading-7 text-[#4B5563] sm:text-base sm:leading-8">
                  {faq.answer}
                </p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}