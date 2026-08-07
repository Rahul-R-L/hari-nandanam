import Link from "next/link";

export default function Hero() {
  return (
    <section
      className="relative min-h-[100svh] bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: "url('/images/backgrounds/hero-banner.webp')",
      }}
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#FFF8EC]/50 via-[#FFF8EC]/68 to-transparent"></div>

      {/* Hero Content */}
      <div className = "relative z-10 mx-auto flex min-h-[100svh] max-w-[1440px] items-center px-5 pt-32 pb-16 sm:px-6 sm:pt-36 md:px-10 lg:px-16 xl:px-20">

        <div className="max-w-xl lg:max-w-2xl">



          {/* Main Heading */}
          <h1 className=" text-4xl font-bold leading-[1.1] text-[#3D2A1F] sm:text-5xl lg:text-6xl xl:text-7xl ">
            Pure Devotion,
            <br />
            Divine Experience.
          </h1>

          {/* Description */}
          <p className="mt-6 max-w-lg text-base leading-8 text-[#4B5563] sm:text-lg lg:mt-8 lg:text-xl lg:leading-9 ">
            Premium pooja products crafted with purity, tradition and devotion,
            bringing spirituality into every sacred moment of your life.
          </p>

          {/* CTA Buttons */}
          <div className=" mt-8 flex flex-col gap-4 sm:flex-row">

            <Link
              href="/products"
              className="rounded-full bg-[#6B1124] px-10 py-4 text-lg font-semibold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-[#4A0C19] hover:shadow-xl"
            >
              Explore Products
            </Link>

            <Link
              href="/distributor"
              className="w-full rounded-full border-2 border-[#D4AF37] bg-white/60 px-8 py-4 text-center text-base font-semibold text-[#6B1124] backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:bg-[#D4AF37] hover:text-white hover:shadow-xl sm:w-auto sm:px-10sm:text-lg">
              Become a Distributor
            </Link>

          </div>

        </div>

      </div>
    </section>
  );
}