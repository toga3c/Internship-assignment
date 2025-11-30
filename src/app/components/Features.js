export default function Features() {
  return (
    <section
      id="features"
      className="w-full py-20 px-6 md:px-16 max-w-7xl mx-auto"
    >
      <div className="text-green-700 font-medium bg-green-100 px-3 py-1 rounded-full mb-4 w-fit">
            • Services
          </div>
      {/* Section Header */}

      <div className="flex flex-col items-start md:flex-row md:items-start justify-between mb-12 gap-6">
        {/* Left Side: Title & Badge */}
          <h2 className="text-4xl md:text-5xl font-bold text-green-900">
            Our Services
          </h2>

        {/* Right Side: Description */}
        <p className="text-gray-600 max-w-md md:mb-2">
          Discover our full range of property management solutions tailored to
          your needs.
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        
        {/* ========================= CARD 1 ========================= */}
        <div className="relative rounded-xl overflow-hidden shadow-md cursor-pointer group transition-all duration-500 hover:shadow-2xl hover:scale-[1.03]">
          <img
            src="/service1.png"
            alt="Rental Management"
            className="w-full h-[320px] object-cover transition-all duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

          {/* Title (hide on hover) */}
          <h3 className="absolute bottom-4 left-4 text-white text-xl font-semibold drop-shadow-lg z-10 transition-all duration-500 group-hover:opacity-0">
            Rental Management
          </h3>

          {/* Hidden content */}
          <div className="absolute bottom-4 left-4 right-4 z-10 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
            <p className="text-white/90 text-sm mt-1">
              Full-service rental support—from listings to lease renewals.
            </p>

            <a
              href="#"
              className="mt-3 bg-green-700 hover:bg-green-800 text-white text-sm px-4 py-2 rounded-full w-fit inline-flex items-center gap-1 transition"
            >
              Learn More ↗
            </a>
          </div>
        </div>

        {/* ========================= CARD 2 ========================= */}
        <div className="relative rounded-xl overflow-hidden shadow-md cursor-pointer group transition-all duration-500 hover:shadow-2xl hover:scale-[1.03]">
          <img
            src="/service2.jpg"
            alt="Buying & Selling"
            className="w-full h-[320px] object-cover transition-all duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

          {/* Title (hide on hover) */}
          <h3 className="absolute bottom-4 left-4 text-white text-xl font-semibold drop-shadow-lg z-10 transition-all duration-500 group-hover:opacity-0">
            Buying & Selling
          </h3>

          {/* Hidden content */}
          <div className="absolute bottom-4 left-4 right-4 z-10 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
            <p className="text-white/90 text-sm mt-1">
              Professional guidance for buying or selling your property.
            </p>

            <a
              href="#"
              className="mt-3 bg-green-700 hover:bg-green-800 text-white text-sm px-4 py-2 rounded-full w-fit inline-flex items-center gap-1 transition"
            >
              Learn More ↗
            </a>
          </div>
        </div>

        {/* ========================= CARD 3 ========================= */}
        <div className="relative rounded-xl overflow-hidden shadow-md cursor-pointer group transition-all duration-500 hover:shadow-2xl hover:scale-[1.03]">
          <img
            src="/service3.png"
            alt="Maintenance & Repairs"
            className="w-full h-[320px] object-cover transition-all duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

          {/* Title (hide on hover) */}
          <h3 className="absolute bottom-4 left-4 text-white text-xl font-semibold drop-shadow-lg z-10 transition-all duration-500 group-hover:opacity-0">
            Maintenance & Repairs
          </h3>

          {/* Hidden content */}
          <div className="absolute bottom-4 left-4 right-4 z-10 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
            <p className="text-white/90 text-sm mt-1">
              Reliable repair and maintenance services for your properties.
            </p>

            <a
              href="#"
              className="mt-3 bg-green-700 hover:bg-green-800 text-white text-sm px-4 py-2 rounded-full w-fit inline-flex items-center gap-1 transition"
            >
              Learn More ↗
            </a>
          </div>
        </div>

        {/* ========================= CARD 4 ========================= */}
        <div className="relative rounded-xl overflow-hidden shadow-md cursor-pointer group transition-all duration-500 hover:shadow-2xl hover:scale-[1.03]">
          <img
            src="/service4.png"
            alt="Real Estate Advice"
            className="w-full h-[320px] object-cover transition-all duration-700 group-hover:scale-110"
          />

          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500"></div>

          {/* Title (hide on hover) */}
          <h3 className="absolute bottom-4 left-4 text-white text-xl font-semibold drop-shadow-lg z-10 transition-all duration-500 group-hover:opacity-0">
            Real Estate Advice
          </h3>

          {/* Hidden content */}
          <div className="absolute bottom-4 left-4 right-4 z-10 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
            <p className="text-white/90 text-sm mt-1">
              Expert advice to help you make confident real estate decisions.
            </p>

            <a
              href="#"
              className="mt-3 bg-green-700 hover:bg-green-800 text-white text-sm px-4 py-2 rounded-full w-fit inline-flex items-center gap-1 transition"
            >
              Learn More ↗
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
