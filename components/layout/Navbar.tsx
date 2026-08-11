"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About Us", href: "/about" },
  { name: "Products", href: "/products" },
  { name: "Become a Distributor", href: "/distributor" },
  { name: "Contact Us", href: "/contact" },
];

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  pathname: string;
  scrolled: boolean;
  onClick?: () => void;
}

function NavItem({
  href,
  children,
  pathname,
  scrolled,
  onClick,
}: NavLinkProps) {
  const active = pathname === href;

  return (
    <Link
      href={href}
      onClick={onClick}
      className={`group relative text-[16px] font-semibold transition-all duration-300 ${
        active
          ? "text-[#6B1124]"
          : scrolled
          ? "text-[#374151] hover:text-[#6B1124]"
          : "text-[#3D2A1F] hover:text-[#6B1124]"
      }`}
    >
      {children}

      <span
        className={`absolute -bottom-1 left-1/2 h-[2px] -translate-x-1/2 bg-[#D4AF37] transition-all duration-300 ${
          active ? "w-full" : "w-0 group-hover:w-full"
        }`}
      />
    </Link>
  );
}

export default function Navbar() {
  const pathname = usePathname();

  const [scrolled, setScrolled] = useState(false);

  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled
            ? "border-b border-[#D4AF37]/20 bg-[#FFFDF8]/95 shadow-lg backdrop-blur-md"
            : "bg-transparent backdrop-blur-[4px]"
        }`}
      >
        <div
          className={`mx-auto flex max-w-[1440px] items-center justify-between transition-all duration-500
          ${
            scrolled
              ? "h-20 px-5 sm:px-6 lg:px-8"
              : "h-24 px-5 sm:px-6 lg:px-8"
          }`}
        >
          {/* Logo */}

          <Link
            href="/"
            className="flex shrink-0 items-center"
          >
            <Image
              src="/images/logos/nandanam_logo.png"
              alt="Hari Nandanam"
              width={260}
              height={88}
              priority
              className={`w-auto object-contain transition-all duration-500 ${
                scrolled
                  ? "h-[52px] sm:h-[58px] lg:h-[64px]"
                  : "h-[58px] sm:h-[64px] lg:h-[72px]"
              }`}
            />
          </Link>

          {/* Desktop Navigation */}

          <nav className="hidden lg:flex xl:flex items-center gap-8 2xl:gap-10">
            {navLinks.map((link) => (
              <NavItem
                key={link.href}
                href={link.href}
                pathname={pathname}
                scrolled={scrolled}
              >
                {link.name}
              </NavItem>
            ))}
          </nav>

          {/* Desktop CTA */}

          <div className="hidden xl:block">
            <Link
              href="/distributor"
              className={`inline-flex items-center rounded-full bg-[#6B1124] font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-[#4A0C19] hover:shadow-xl
              ${
                scrolled
                  ? "px-6 py-2.5 text-[15px]"
                  : "px-7 py-3 text-[16px]"
              }`}
            >
              Partner With Us
            </Link>
          </div>

          {/* Mobile Menu Button */}

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="rounded-xl p-2 transition hover:bg-[#F5F0E6] xl:hidden"
            aria-label="Toggle navigation"
          >
            {mobileOpen ? (
              <X
                size={30}
                className="text-[#6B1124]"
              />
            ) : (
              <Menu
                size={30}
                className="text-[#6B1124]"
              />
            )}
          </button>
        </div>

                {/* Mobile Navigation */}

        <div
          className={`overflow-hidden border-t border-[#E8DFC7] bg-[#FFFDF8] transition-all duration-500 xl:hidden ${
            mobileOpen ? "max-h-[700px]" : "max-h-0 border-transparent"
          }`}
        >
          <div className="mx-auto max-w-[1440px] px-6 py-8">

            {/* Mobile Links */}

            <nav className="flex flex-col">

              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={`rounded-xl px-4 py-4 text-lg font-semibold transition-all duration-300 ${
                    pathname === link.href
                      ? "bg-[#F8F1E6] text-[#6B1124]"
                      : "text-[#3D2A1F] hover:bg-[#F8F1E6]"
                  }`}
                >
                  {link.name}
                </Link>
              ))}

            </nav>

            {/* Divider */}

            <div className="my-8 h-px bg-[#E8DFC7]" />

            {/* CTA */}

            <Link
              href="/distributor"
              onClick={() => setMobileOpen(false)}
              className="block w-full rounded-full bg-[#6B1124] px-6 py-4 text-center text-lg font-semibold text-white transition-all duration-300 hover:bg-[#4A0C19]"
            >
              Partner With Us
            </Link>

          </div>
        </div>
      </header>

      {/* Overlay */}

      {mobileOpen && (
        <div
          onClick={() => setMobileOpen(false)}
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-[2px] xl:hidden"
        />
      )}
    </>
  );
}