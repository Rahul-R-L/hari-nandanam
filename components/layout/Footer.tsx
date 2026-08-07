import Image from "next/image";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,

} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#3B0D17] text-white">

      {/* CTA */}

      <section className="border-b border-white/10">

        <div className="mx-auto max-w-7xl px-6 py-20 text-center">

          <h2 className="text-4xl font-bold">
            Bring Purity to Every Prayer
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-300">
            Join Hari Nandanam as a distributor and help deliver authentic,
            high-quality pooja products to homes, temples and retailers across
            India.
          </p>

          <Link
            href="/distributor"
            className="mt-10 inline-flex rounded-full bg-[#D4AF37] px-8 py-4 font-semibold text-[#3B0D17] transition hover:scale-105"
          >
            Partner With Us
          </Link>

        </div>

      </section>

      {/* Main Footer */}

      <section className="mx-auto max-w-7xl px-6 py-16">

        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}

          <div>

            <Image
              src="/images/logos/nandanam_logo.png"
              alt="Hari Nandanam"
              width={220}
              height={80}
            />

            <p className="mt-6 text-gray-300 leading-7">
              Premium pooja products crafted with purity, devotion and respect
              for sacred traditions.
            </p>

          </div>

          {/* Products */}

          <div>

            <h3 className="text-xl font-semibold text-[#D4AF37]">
              Products
            </h3>

            <ul className="mt-6 space-y-3 text-gray-300">

              <li><Link href="/products/lamp-oil">Lamp Oil</Link></li>

              <li><Link href="/products/rose-water">Rose Water</Link></li>

              <li><Link href="/products/camphor">Camphor</Link></li>

              <li><Link href="/products/kumkum">Kumkum</Link></li>

              <li><Link href="/products/turmeric">Turmeric</Link></li>

              <li><Link href="/products/vibuthi">Vibuthi</Link></li>

            </ul>

          </div>

          {/* Company */}

          <div>

            <h3 className="text-xl font-semibold text-[#D4AF37]">
              Company
            </h3>

            <ul className="mt-6 space-y-3 text-gray-300">

              <li><Link href="/about">About Us</Link></li>

              <li><Link href="/products">Products</Link></li>

              <li><Link href="/distributor">Become a Distributor</Link></li>

              <li><Link href="/contact">Contact</Link></li>

            </ul>

          </div>

          {/* Contact */}

          <div>

            <h3 className="text-xl font-semibold text-[#D4AF37]">
              Contact
            </h3>

            <div className="mt-6 space-y-5 text-gray-300">

              <div className="flex gap-3">

                <MapPin size={20} className="mt-1 text-[#D4AF37]" />

                <p>
                  Unitech Industries
                  <br />
                  Kerala, India
                </p>

              </div>

              <div className="flex gap-3">

                <Phone size={20} className="text-[#D4AF37]" />

                <span>+91 XXXXX XXXXX</span>

              </div>

              <div className="flex gap-3">

                <Mail size={20} className="text-[#D4AF37]" />

                <span>info@harinandanam.in</span>

              </div>

            </div>

          </div>

        </div>

      </section>

      {/* Bottom */}

      <section className="border-t border-white/10">

        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 px-6 py-8 md:flex-row">

          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Hari Nandanam.
            Manufactured by Unitech Industries.
          </p>

          <div className="flex gap-6">

            <Link href="#">
              <FaFacebookF className="hover:text-[#D4AF37]" />
            </Link>

            <Link href="#">
              <FaInstagram className="hover:text-[#D4AF37]" />
            </Link>

            <Link href="#">
              <FaYoutube className="hover:text-[#D4AF37]" />
            </Link>

          </div>

        </div>

      </section>

    </footer>
  );
}