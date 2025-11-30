// components/Hero.js

export default function Hero() {
  return (
    <section className="relative max-w-7xl mx-auto mt-10 px-6">
      <div className="relative rounded-3xl overflow-hidden shadow-lg">

        {/* Background Image */}
        <img
          src="/hero.png" 
          alt="Real Estate"
          className="w-full h-[620px] object-cover"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        {/* Hero Content */}
        <div className="absolute inset-0 flex flex-col justify-end pb-16 px-8 md:px-16">
          <h1 className="text-white text-4xl md:text-6xl font-bold leading-tight drop-shadow-lg">
            Nexus Real Estate <br /> Management
          </h1>

          <p className="mt-5 text-white/90 text-lg md:text-xl max-w-2xl">
            Smart, Hassle-Free Property Management Tailored For You.
          </p>

          {/* CTA Button */}
          <a
            href="#features"
            className="mt-8 flex items-center gap-2 w-fit bg-white text-gray-800 px-6 py-3 rounded-full font-medium shadow-md hover:bg-gray-200 transition"
          >
            Explore Now <span>↗</span>
          </a>
        </div>
      </div>
    </section>
  );
}
