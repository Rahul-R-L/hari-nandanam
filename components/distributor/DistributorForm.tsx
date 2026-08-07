"use client";

import { motion } from "framer-motion";
import {
  Building2,
  User,
  Phone,
  Mail,
  MapPin,
  Briefcase,
  MessageSquare,
} from "lucide-react";

export default function DistributorForm() {
  return (
    <section
      id="distributor-form"
      className="bg-[#FFFDF8] py-28"
    >
      <div className="mx-auto max-w-5xl px-6 lg:px-8">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <span className="rounded-full border border-[#D4AF37]/30 bg-[#FFF7EC] px-5 py-2 text-sm font-semibold uppercase tracking-[0.3em] text-[#6B1124]">
            Distributor Enquiry
          </span>

          <h2 className="mt-8 text-4xl font-bold text-[#2F2118] md:text-5xl">
            Let's Grow Together
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-lg leading-9 text-gray-600">
            Thank you for your interest in becoming a Hari Nandanam
            distributor. Please share your details and our team will get
            in touch with you shortly.
          </p>
        </motion.div>

        {/* Form */}

        <motion.form
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 rounded-[36px] border border-[#E8DFC7] bg-white p-8 shadow-xl md:p-12"
        >

          <div className="grid gap-8 md:grid-cols-2">

            {/* Company */}

            <Input
              icon={<Building2 size={18} />}
              label="Company / Firm Name *"
              placeholder="ABC Traders"
            />

            {/* Proprietor */}

            <Input
              icon={<User size={18} />}
              label="Proprietor / Contact Person *"
              placeholder="John Mathew"
            />

            {/* Phone */}

            <Input
              icon={<Phone size={18} />}
              label="Mobile Number *"
              placeholder="+91 98765 43210"
              type="tel"
            />

            {/* Email */}

            <Input
              icon={<Mail size={18} />}
              label="Email Address"
              placeholder="name@example.com"
              type="email"
            />

            {/* State */}

            <Input
              icon={<MapPin size={18} />}
              label="State *"
              placeholder="Kerala"
            />

            {/* District */}

            <Input
              icon={<MapPin size={18} />}
              label="District / City *"
              placeholder="Palakkad"
            />

          </div>

          {/* Address */}

          <div className="mt-8">

            <label className="mb-3 block font-medium text-[#2F2118]">
              Business Address
            </label>

            <textarea
              rows={3}
              placeholder="Enter your complete business address..."
              className="w-full rounded-2xl border border-[#E8DFC7] px-5 py-4 outline-none transition focus:border-[#6B1124]"
            />

          </div>

          {/* Business */}

          <div className="mt-8 grid gap-8 md:grid-cols-2">

            <div>

              <label className="mb-3 block font-medium text-[#2F2118]">
                Business Type *
              </label>

              <div className="relative">

                <Briefcase
                  className="absolute left-4 top-4 text-[#6B1124]"
                  size={18}
                />

                <select className="w-full rounded-2xl border border-[#E8DFC7] bg-white py-4 pl-12 pr-5 outline-none transition focus:border-[#6B1124]">

                  <option>Select Business Type</option>

                  <option>Distributor</option>

                  <option>Wholesaler</option>

                  <option>Retailer</option>

                  <option>Supermarket</option>

                  <option>Temple Supply Store</option>

                  <option>General Trader</option>

                  <option>Other</option>

                </select>

              </div>

            </div>

            <Input
              icon={<Briefcase size={18} />}
              label="Current Business"
              placeholder="FMCG Distribution"
            />

          </div>

          {/* Area */}

          <div className="mt-8">

            <label className="mb-3 block font-medium text-[#2F2118]">
              Area You Wish to Cover
            </label>

            <input
              placeholder="Districts / Cities you would like to serve"
              className="w-full rounded-2xl border border-[#E8DFC7] px-5 py-4 outline-none transition focus:border-[#6B1124]"
            />

          </div>

          {/* Message */}

          <div className="mt-8">

            <label className="mb-3 flex items-center gap-2 font-medium text-[#2F2118]">
              <MessageSquare
                size={18}
                className="text-[#6B1124]"
              />
              Additional Information
            </label>

            <textarea
              rows={5}
              placeholder="Tell us about your business, experience and why you'd like to partner with Hari Nandanam..."
              className="w-full rounded-2xl border border-[#E8DFC7] px-5 py-4 outline-none transition focus:border-[#6B1124]"
            />

          </div>

          {/* Note */}

          <div className="mt-8 rounded-2xl bg-[#FFF7EC] p-5 text-sm leading-7 text-[#6B1124]">
            After reviewing your enquiry, our team will contact you to
            discuss dealership opportunities and complete the distributor
            registration process.
          </div>

          {/* Button */}

          <div className="mt-10 text-center">

            <button
              type="submit"
              className="rounded-full bg-[#6B1124] px-10 py-4 text-lg font-semibold text-white transition hover:bg-[#55101F]"
            >
              Submit Enquiry
            </button>

          </div>

        </motion.form>

      </div>
    </section>
  );
}

/* ---------- Reusable Input ---------- */

function Input({
  label,
  placeholder,
  icon,
  type = "text",
}: {
  label: string;
  placeholder: string;
  icon: React.ReactNode;
  type?: string;
}) {
  return (
    <div>
      <label className="mb-3 block font-medium text-[#2F2118]">
        {label}
      </label>

      <div className="relative">

        <div className="absolute left-4 top-4 text-[#6B1124]">
          {icon}
        </div>

        <input
          type={type}
          placeholder={placeholder}
          className="w-full rounded-2xl border border-[#E8DFC7] py-4 pl-12 pr-5 outline-none transition focus:border-[#6B1124]"
        />

      </div>
    </div>
  );
}