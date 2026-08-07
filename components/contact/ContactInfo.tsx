"use client";

import {
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";

export default function ContactInfo() {
  return (
    <section className="bg-[#FFFDF8] py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Heading */}

        <div className="mx-auto max-w-3xl text-center">


          <h2 className="mt-8 text-4xl font-bold text-[#2F2118] md:text-5xl">
            Contact Information
          </h2>

          <p className="mt-6 text-lg leading-9 text-gray-600">
            Our team is always happy to assist you with product enquiries,
            customer support and business partnerships.
          </p>
        </div>

        {/* Cards */}

        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {/* Address */}

          <div className="rounded-[28px] border border-[#E8DFC7] bg-white p-8 shadow-sm">
            <MapPin
              className="text-[#6B1124]"
              size={30}
            />

            <h3 className="mt-6 text-2xl font-semibold text-[#2F2118]">
              Address
            </h3>

            <p className="mt-4 leading-8 text-gray-600">
              Unitech Industries
              <br />
              1,20/280, Ramassery Road,  
              <br />
              Malayankavu, Pudussery,
              <br />
              Palakkad
              <br />
              Kerala 
              <br />
            </p>
          </div>

          {/* Phone */}

          <div className="rounded-[28px] border border-[#E8DFC7] bg-white p-8 shadow-sm">
            <Phone
              className="text-[#6B1124]"
              size={30}
            />

            <h3 className="mt-6 text-2xl font-semibold text-[#2F2118]">
              Phone
            </h3>

            <p className="mt-4 leading-8 text-gray-600">
              Sales
              <br />
              +91 944 614 7795
              <br />

            </p>
          </div>

          {/* Email */}

          <div className="rounded-[28px] border border-[#E8DFC7] bg-white p-8 shadow-sm">
            <Mail
              className="text-[#6B1124]"
              size={30}
            />

            <h3 className="mt-6 text-2xl font-semibold text-[#2F2118]">
              Email
            </h3>

            <p className="mt-4 leading-8 text-gray-600">
              sales@harinandanam.in
              <br />
              <br />
              support@harinandanam.in
              <br />

            </p>
          </div>

          {/* Hours */}

          <div className="rounded-[28px] border border-[#E8DFC7] bg-white p-8 shadow-sm">
            <Clock
              className="text-[#6B1124]"
              size={30}
            />

            <h3 className="mt-6 text-2xl font-semibold text-[#2F2118]">
              Business Hours
            </h3>

            <p className="mt-4 leading-8 text-gray-600">
              Monday – Saturday
              <br />
              9:00 AM – 6:00 PM
              <br />
              <br />
              Sunday
              <br />
              Closed
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}