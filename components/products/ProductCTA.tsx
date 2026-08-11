import Link from "next/link";

export default function ProductCTA() {
  return (
    <section className="bg-[#6B1124]">
      <div className="mx-auto max-w-[1100px] px-5 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-[#D4AF37]">
            Hari Nandanam
          </p>

          <h2 className="mt-3 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
            Bring Tradition Home
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-base leading-8 text-white/80 sm:text-lg sm:leading-9">
            Discover Hari Nandanam pooja essentials crafted for
            everyday devotion, traditional rituals and sacred
            occasions.
          </p>

          <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
            <Link
              href="/products"
              className="inline-flex items-center justify-center rounded-full bg-[#D4AF37] px-7 py-3.5 text-sm font-semibold text-[#3D2A1F] transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#E3C45A] hover:shadow-lg"
            >
              Explore Products
            </Link>

            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border-2 border-white/70 px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 hover:border-white hover:bg-white hover:text-[#6B1124]"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}