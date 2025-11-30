"use client";
import Image from "next/image";

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-full py-24 px-6 md:px-16 max-w-7xl mx-auto"
    >
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12">
        <div>
            <span className="text-green-700 font-medium bg-green-100 px-3 py-1 rounded-full">
            • Contact
            </span>

            <h2 className="text-4xl md:text-5xl font-bold text-green-900 mt-6">
            Get In Touch
            </h2>
        </div>

        <p className="mt-4 md:mt-0 text-gray-600 max-w-md">
            Need expert property help? We’re here to talk.
        </p>
        </div>


      {/* Two Column Layout — Form + Image */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

        {/* FORM */}
        <div className="bg-green-50 p-8 rounded-2xl border border-green-100 shadow-sm">
          <form className="space-y-5">

            <input
              type="text"
              placeholder="Name or company name"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-gray-700 focus:ring-2 focus:ring-green-600 outline-none"
            />

            <input
              type="email"
              placeholder="Email address"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-gray-700 focus:ring-2 focus:ring-green-600 outline-none"
            />

            <input
              type="text"
              placeholder="Phone number"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-gray-700 focus:ring-2 focus:ring-green-600 outline-none"
            />

            <textarea
              placeholder="Message"
              rows="4"
              className="w-full px-4 py-3 rounded-lg border border-gray-200 bg-white text-gray-700 focus:ring-2 focus:ring-green-600 outline-none"
            ></textarea>

            <button
              type="submit"
              className="bg-green-700 text-white px-6 py-3 rounded-lg font-medium hover:bg-green-800 transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* IMAGE */}
        <div className="rounded-2xl overflow-hidden shadow-md border">
          <Image
            src="/contact.png" 
            alt="Real estate building"
            width={700}
            height={500}
            className="object-cover w-full h-full"
          />
        </div>

      </div>
    </section>
  );
}
