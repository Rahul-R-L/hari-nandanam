import type { Metadata } from "next";

import AboutHero from "@/app/about/AboutHero";
import Beginning from "@/app/about/Beginning";

export const metadata: Metadata = {
  title: "About Hari Nandanam | Premium Pooja Products Brand",

  description:
    "Learn about Hari Nandanam, a premium Indian pooja products brand committed to purity, devotion and timeless traditions.",

  alternates: {
    canonical: "/about",
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <Beginning />
    </>
  );
}