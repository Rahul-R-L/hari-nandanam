"use client";

import { motion } from "framer-motion";

interface ValueItemProps {
  number: string;
  title: string;
  description: string;
  reverse?: boolean;
}

export default function ValueItem({
  number,
  title,
  description,
  reverse = false,
}: ValueItemProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.7 }}
      className={`grid items-center gap-16 py-14 lg:grid-cols-2 ${
        reverse ? "lg:[&>*:first-child]:order-2" : ""
      }`}
    >
      {/* Placeholder Illustration */}
      <div className="flex h-[320px] items-center justify-center rounded-[32px] border border-[#E8DFC7] bg-[#F9F6EF]">
        <span className="text-lg font-medium text-[#B89B5E]">
          Illustration
        </span>
      </div>

      {/* Text */}
      <div>
        <span className="text-6xl font-bold text-[#D4AF37]">
          {number}
        </span>

        <h3 className="mt-4 text-3xl font-semibold text-[#3D2A1F]">
          {title}
        </h3>

        <p className="mt-5 text-lg leading-8 text-[#6B7280]">
          {description}
        </p>
      </div>
    </motion.div>
  );
}