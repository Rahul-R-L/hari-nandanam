import Image from "next/image";

const values = [
  {
    title: "Devotion First",
    description:
      "Every offering to the Divine deserves purity. We create products that honour every prayer with sincerity, devotion and respect for tradition.",
    image: "/images/illustrations/devotion-first.webp",
  },
  {
    title: "Carefully Chosen Ingredients",
    description:
      "Every ingredient is selected with care to ensure purity, authenticity and suitability for sacred rituals. No unnecessary compromises.",
    image: "/images/illustrations/carefully-chosen-ingredients.webp",
  },
  {
    title: "Inspired by Tradition",
    description:
      "Our products are rooted in timeless traditions that have been passed through generations while maintaining modern standards of quality.",
    image: "/images/illustrations/inspired-by-tradition.webp",
  },
];

export default function WhyHariNandanam() {
  return (
    <section className="bg-[#FFFDF8] py-28">
      <div className="mx-auto max-w-7xl px-6">

        {/* Section Heading */}

        <div className="mb-20 text-center">

          <p className="tracking-[0.35em] uppercase text-[#7B1028] font-semibold">
            Our Promise
          </p>

          <h2 className="mt-4 text-5xl font-bold text-[#2F2118]">
            Why Hari Nandanam
          </h2>

          <div className="mx-auto mt-6 h-1 w-20 rounded-full bg-[#D4AF37]" />

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-gray-600">
            We believe that everything offered to the Divine should be pure.
            Every Hari Nandanam product is created with carefully selected
            ingredients, respect for sacred traditions and a commitment to
            quality that devotees can trust.
          </p>

        </div>

        {/* Value Cards */}

        <div className="space-y-24">

          {values.map((item, index) => (

            <div
              key={item.title}
              className={`grid items-center gap-14 lg:grid-cols-2 ${
                index % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >

              <div className="overflow-hidden rounded-3xl shadow-xl">

                <Image
                  src={item.image}
                  alt={item.title}
                  width={1600}
                  height={900}
                  className="h-full w-full object-cover transition duration-700 hover:scale-105"
                />

              </div>

              <div>

                <h3 className="text-4xl font-bold text-[#2F2118]">
                  {item.title}
                </h3>

                <div className="mt-5 h-1 w-16 rounded-full bg-[#D4AF37]" />

                <p className="mt-8 text-lg leading-8 text-gray-600">
                  {item.description}
                </p>

              </div>

            </div>

          ))}

        </div>

      </div>
    </section>
  );
}