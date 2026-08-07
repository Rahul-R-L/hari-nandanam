"use client";

import { motion } from "framer-motion";
import SectionHeader from "@/components/ui/SectionHeader";

export default function Beginning() {
  return (
    <section className="bg-[#FFFDF8] py-28">
      <div className="mx-auto max-w-5xl px-6 lg:px-8">

        <motion.div
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >

          <SectionHeader
            badge="OUR STORY"
            title="The Beginning"
            description="Every great journey begins with a purpose. Ours began with a simple belief—to honour every sacred offering with purity, devotion and respect."
          />

          <div className="mt-14 space-y-8 text-lg leading-9 text-[#6B7280]">

            <p>
              Every prayer begins with faith. Every offering carries devotion,
              gratitude and hope. Across homes and temples, these sacred moments
              are cherished as expressions of love, tradition and spirituality.
              We believe that the products used in worship should reflect the
              same sincerity with which they are offered.
            </p>

            <p>
              Hari Nandanam was founded with a clear purpose—to create premium
              pooja products that honour the traditions of worship while
              maintaining consistent quality. From Lamp Oil and Rose Water to
              Camphor, Kumkum, Turmeric and Vibuthi, every product is carefully
              prepared to become a meaningful part of daily rituals and special
              occasions.
            </p>

            <p>
              Rather than simply manufacturing pooja essentials, we strive to
              preserve the spirit behind them. Every decision we make—from the
              selection of ingredients to packaging and presentation—is guided
              by our commitment to quality, devotion and the trust placed in us
              by devotees across India.
            </p>

            <p>
              As Hari Nandanam continues to grow, our vision remains unchanged:
              to build a trusted Indian brand that helps every devotee perform
              their prayers with confidence, knowing that every offering is
              prepared with care and respect for timeless traditions.
            </p>

          </div>

          {/* Quote */}

          <div className="mt-20 border-l-4 border-[#D4AF37] pl-8">

            <p className="text-2xl font-medium italic leading-10 text-[#6B1124]">
              “Every offering made to the Divine deserves the same care,
              purity and devotion with which it is offered.”
            </p>

          </div>

        </motion.div>
      </div>
    </section>
  );
}