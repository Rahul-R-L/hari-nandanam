"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

interface ProductCardProps {
  title: string;
  subtitle: string;
  image: string;
  href: string;
  bgColor: string;
  delay?: number;
}

export default function ProductCard({
  title,
  subtitle,
  image,
  href,
  bgColor,
  delay = 0,
}: ProductCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{
        duration: 0.7,
        delay,
      }}
      whileHover={{
        y: -10,
      }}
      className="group h-full"
    >
      <Link href={href}>
        <div
          className="flex h-full flex-col overflow-hidden rounded-[32px] border border-[#E8DFC7] shadow-sm transition-all duration-500 group-hover:shadow-2xl"
          style={{ backgroundColor: bgColor }}
        >
          {/* Product Image */}
          <div className="relative flex h-[260px] md:h-[360px] items-center justify-center overflow-hidden">
            <Image
              src={image}
              alt={title}
              fill
              sizes="(max-width: 768px) 100vw,
                    (max-width: 1280px) 50vw,
                    33vw"
              className="object-contain p-10 transition-transform duration-700 group-hover:scale-105"
            />
          </div>

          {/* Content */}
          <div className="flex flex-1 flex-col justify-between px-8 pb-8">

            <div>
              <h3 className="text-3xl font-semibold text-[#3D2A1F]">
                {title}
              </h3>

              <p className="mt-3 text-base leading-7 text-gray-600">
                {subtitle}
              </p>
            </div>

            <div className="mt-8">
              <span className="inline-flex items-center gap-2 text-[15px] font-semibold text-[#6B1124] transition-all duration-300 group-hover:gap-4">
                Explore

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 12h14M13 5l7 7-7 7"
                  />
                </svg>
              </span>
            </div>

          </div>
        </div>
      </Link>
    </motion.div>
  );
}