import Image from "next/image";
import Link from "next/link";

const benefits = [
  {
    title: "Premium Brand",
    description:
      "Elegant packaging and a devotional identity that stands out on retail shelves.",
  },
  {
    title: "Reliable Supply",
    description:
      "Consistent manufacturing and dependable product availability for your business.",
  },
  {
    title: "Growing Product Range",
    description:
      "Expand your sales with new pooja and fragrance products launching regularly.",
  },
  {
    title: "Dedicated Support",
    description:
      "We work closely with our distributors to ensure long-term business growth.",
  },
];

export default function DistributorSection() {
  return (
    <section className="bg-[#FFF8EE] py-28">
      <div className="mx-auto grid max-w-7xl items-center gap-16 px-6 lg:grid-cols-2">

        {/* LEFT */}

        <div>

          <p className="uppercase tracking-[0.35em] text-[#7B1028] font-semibold">
            Business Partnership
          </p>

          <h2 className="mt-4 text-5xl font-bold text-[#2F2118] leading-tight">
            Become a Hari Nandanam Distributor
          </h2>

          <div className="mt-6 h-1 w-20 rounded-full bg-[#D4AF37]" />

          <p className="mt-8 text-lg leading-8 text-gray-600">
            Join us in bringing pure pooja products to homes, temples and
            retailers across India. Build your business with a trusted brand
            committed to quality, tradition and long-term partnerships.
          </p>

          <div className="mt-10 space-y-6">

            {benefits.map((item) => (
              <div key={item.title} className="flex gap-4">

                <div className="mt-2 h-3 w-3 rounded-full bg-[#D4AF37]" />

                <div>
                  <h3 className="font-semibold text-[#2F2118] text-xl">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-gray-600 leading-7">
                    {item.description}
                  </p>
                </div>

              </div>
            ))}

          </div>

          <Link
            href="/distributor"
            className="mt-12 inline-flex rounded-full bg-[#7B1028] px-8 py-4 font-semibold text-white transition hover:bg-[#5D0C1E]"
          >
            Become a Distributor
          </Link>

        </div>

        {/* RIGHT */}

        <div className="relative">

          <div className="overflow-hidden rounded-3xl shadow-2xl">

            <Image
              src="/images/illustrations/product-family.webp"
              alt="Hari Nandanam Product Range"
              width={1200}
              height={900}
              className="h-full w-full object-cover"
            />

          </div>

        </div>

      </div>
    </section>
  );
}