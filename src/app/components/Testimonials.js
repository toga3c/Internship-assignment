"use client";

import { useRef } from "react";
import Image from "next/image";

export default function Testimonials() {
  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current?.scrollBy({ left: -400, behavior: "smooth" });
  };

  const scrollRight = () => {
    scrollRef.current?.scrollBy({ left: 400, behavior: "smooth" });
  };

  const testimonials = [
    {
      text: "Working With This Team Has Been Amazing—Responsive, Professional, And Truly Helpful At Every Step.",
      name: "Freedy Kan",
      role: "Property Owner",
      img: "/client1.png",
    },
    {
      text: "Fantastic Experience From Start To Finish. The Team Was Highly Responsive And Supportive.",
      name: "Tom Croop",
      role: "Property Owner",
      img: "/client2.png",
    },
    {
      text: "Outstanding Property Management Service. Always Professional And Easy To Work With.",
      name: "Sarah Miles",
      role: "Homeowner",
      img: "/client3.png",
    },
    {
      text: "A Seamless Experience! Renting My Property Has Never Been Easier.",
      name: "Michael Lee",
      role: "Landlord",
      img: "/client4.png",
    },
    {
      text: "Highly Recommend This Team! They Go Above And Beyond Every Single Time.",
      name: "Anna Wright",
      role: "Property Investor",
      img: "/client5.png",
    },
    {
      text: "Exceptional Client Service. They Truly Care About Their Clients' Needs.",
      name: "Mark Rivers",
      role: "Business Owner",
      img: "/client6.png",
    },
  ];

  return (
    <section id="testimonials" className="w-full py-20 px-6 md:px-16 max-w-7xl mx-auto">
      {/* Section Header */}
      <span className="text-green-700 font-medium items-center bg-green-100 px-3 py-1 rounded-full">
          • Testimonial
        </span>
      <div className="mb-14">
        <h2 className="text-4xl md:text-5xl font-bold text-green-900 mt-4">
          What Clients Say
        </h2>
      </div>

      {/* Scrollable Testimonials */}
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory scroll-smooth pb-4"
      >
        {testimonials.map((item, index) => (
          <div
            key={index}
            className="min-w-[350px] md:min-w-[420px] snap-start bg-white border border-gray-200 rounded-2xl p-8 shadow-sm hover:shadow-md transition flex flex-col justify-between"
          >
            {/* Text Section */}
            <div className="min-h-[140px]">
              <p className="text-gray-800 text-lg leading-relaxed">
                {item.text}
              </p>
            </div>

            {/* Bottom Section */}
            <div className="flex items-center justify-between mt-8">
              <div className="flex items-center gap-3">
                <Image
                  src={item.img}
                  alt={item.name}
                  width={50}
                  height={50}
                  className="w-12 h-12 rounded-full object-cover"
                />

                <div>
                  <h4 className="text-green-800 font-semibold">{item.name}</h4>
                  <p className="text-gray-500 text-sm">{item.role}</p>
                </div>
              </div>

              <span className="text-gray-300 text-5xl">”</span>
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="flex items-center justify-end gap-4 mt-6">
        <button
          onClick={scrollLeft}
          className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition"
        >
          <span className="text-gray-500 text-lg">←</span>
        </button>

        <button
          onClick={scrollRight}
          className="w-10 h-10 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition"
        >
          <span className="text-gray-500 text-lg">→</span>
        </button>
      </div>
    </section>
  );
}
