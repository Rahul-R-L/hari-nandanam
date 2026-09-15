"use client";

import { Sparkles, Flame, Droplets, CircleDot } from "lucide-react";
import SectionHeader from "@/components/ui/SectionHeader";

const currentCategories = [
  {
    icon: Flame,
    title: "Camphor",
    description:
      "Pure camphor for aarti, pooja and traditional devotional rituals.",
  },
  {
    icon: Droplets,
    title: "Rose Water",
    description:
      "Rose water available in food-grade and non-food-grade varieties for different uses.",
  },
  {
    icon: Sparkles,
    title: "Dhoop Sticks",
    description:
      "Fragrant dhoop sticks available in Rose, Jasmine, Sandal and Javadhu variants.",
  },
  {
    icon: Sparkles,
    title: "Dhoop Cones",
    description:
      "Fragrant dhoop cones available in Rose, Jasmine, Sandal and Javadhu variants.",
  },
  {
    icon: CircleDot,
    title: "Pooja Essentials",
    description:
      "Traditional essentials including lamp oil, kumkum, vibuthi and kalabham.",
  },
  {
    icon: Flame,
    title: "Natural Incense",
    description:
      "Natural Sambrani Sticks and Natural Spices Sticks made with pure natural ingredients.",
  },
];

const upcomingCategories = [
  {
    title: "Cotton Wicks",
    description: "Traditional cotton wicks for lamps and daily pooja.",
  },
  {
    title: "Chandan Paste",
    description: "Traditional sandalwood paste for devotional rituals.",
  },
  {
    title: "Akshata",
    description: "Traditional sacred rice used in pooja and religious ceremonies.",
  },
  {
    title: "Sindoor",
    description: "Traditional devotional product for pooja and religious occasions.",
  },
  {
    title: "Attars",
    description: "Fragrance products for devotional and traditional use.",
  },
  {
    title: "Electric Diffusers",
    description: "Convenient fragrance solutions for homes and devotional spaces.",
  },
  {
    title: "Room Fresheners",
    description: "Fragrance products for creating a pleasant atmosphere.",
  },
];

export default function Categories() {
  return (
    <section className="bg-[#FFFDF8] py-28">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <SectionHeader
          badge="OUR CATEGORIES"
          title="Everything for Your Sacred Space"
          description="Explore our growing collection of pooja essentials, devotional fragrances and traditional products from Hari Nandanam."
        />

        {/* Current Categories */}
        <div className="mt-20">
          <div className="mb-10 flex items-center gap-4">
            <div className="h-px flex-1 bg-[#E8DDCC]" />
            <span className="rounded-full bg-[#8B1E1E] px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-white">
              Available Now
            </span>
            <div className="h-px flex-1 bg-[#E8DDCC]" />
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {currentCategories.map((category) => {
              const Icon = category.icon;

              return (
                <div
                  key={category.title}
                  className="group rounded-2xl border border-[#E9DFD0] bg-white p-7 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg"
                >
                  <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-[#FFF4DF] text-[#8B1E1E] transition-colors duration-300 group-hover:bg-[#8B1E1E] group-hover:text-white">
                    <Icon className="h-6 w-6" strokeWidth={1.8} />
                  </div>

                  <h3 className="text-xl font-semibold text-[#2F211A]">
                    {category.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-[#6E625A]">
                    {category.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Upcoming Categories */}
        <div className="mt-24">
          <div className="mb-10 flex items-center gap-4">
            <div className="h-px flex-1 bg-[#E8DDCC]" />
            <span className="rounded-full bg-[#F2E8D8] px-5 py-2 text-xs font-semibold uppercase tracking-[0.18em] text-[#7B5B3A]">
              Coming Soon
            </span>
            <div className="h-px flex-1 bg-[#E8DDCC]" />
          </div>

          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {upcomingCategories.map((category) => (
              <div
                key={category.title}
                className="rounded-2xl border border-dashed border-[#DCCDB9] bg-[#FFFCF6] p-6"
              >
                <h3 className="text-lg font-semibold text-[#3B2B21]">
                  {category.title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-[#7A6D63]">
                  {category.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}