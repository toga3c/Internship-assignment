import Image from "next/image";

export default function Footer() {
  return (
    <footer className="w-full bg-[#153B1C] text-white py-16 px-6 md:px-16">

      {/* Top Section */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

        {/* Left: Logo + Social Icons */}
        <div className="flex flex-col gap-6">

          {/* Logo */}
          <div className="flex items-center gap-3">
            <Image
              src="/logo.png"        // your logo in /public
              alt="Wonder Real Estate Logo"
              width={50}
              height={50}
            />
            <span className="text-xl font-semibold">NEXUS REAL ESTATE</span>
          </div>

          {/* Social Icons */}
          <div className="flex items-center gap-4">
            <a
              href="#"
            >
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                fill="currentColor"
                viewBox="0 0 24 24"
                >
                <path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07c0 5.02 3.66 9.19 8.44 9.93v-7.03H8.1v-2.9h2.34V9.41c0-2.32 1.38-3.6 3.49-3.6.99 0 2.03.18 2.03.18v2.24h-1.14c-1.13 0-1.49.7-1.49 1.42v1.7h2.53l-.4 2.9h-2.13v7.03C18.34 21.26 22 17.09 22 12.07z" />
                </svg>

            </a>
            <a
              href="#"
            >
                <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                fill="currentColor"
                viewBox="0 0 24 24"
                >
                <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm13 15c0 1.65-1.35 3-3 3H7c-1.65 0-3-1.35-3-3V7c0-1.65 1.35-3 3-3h10c1.65 0 3 1.35 3 3v10z" />
                <path d="M12 7a5 5 0 100 10 5 5 0 000-10zm0 8.3a3.3 3.3 0 110-6.6 3.3 3.3 0 010 6.6zM17.5 6.5a1.2 1.2 0 11-2.4 0 1.2 1.2 0 012.4 0z" />
                </svg>

            </a>
            <a
              href="#"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="35"
                fill="currentColor"
                viewBox="0 0 24 24"
                >
                <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8h4V23h-4V8zm7.5 0h3.8v2.03h.05c.53-1 1.82-2.03 3.75-2.03 4 0 4.7 2.63 4.7 6.05V23h-4v-7.58c0-1.81-.03-4.14-2.52-4.14-2.52 0-2.9 1.97-2.9 4V23h-4V8z" />
                </svg>
            </a>
          </div>

        </div>

        {/* Right: Newsletter */}
        <div>
          <h3 className="text-2xl md:text-3xl font-semibold leading-snug">
            Be the first to know about new listing, price<br />
            drops, and expert real estate tips – straight<br />
            to your inbox!
          </h3>

          {/* Email Input */}
          <div className="flex items-center gap-3 mt-8">
            <input
              type="email"
              placeholder="Email address"
              className="w-full md:w-[350px] px-5 py-3 rounded-full bg-transparent border border-white/40 text-white placeholder-white/60 focus:outline-none"
            />

            <button className="flex items-center gap-2 bg-white text-[#153B1C] px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition">
              ↗ Submit
            </button>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="max-w-7xl mx-auto mt-12 mb-6 border-t border-white/30"></div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between text-white/80 text-sm gap-4">

        <p>© Copyright | 2025 wonderrealestate.com</p>

        <div className="flex items-center gap-6">
          <a href="#" className="hover:text-white">Terms and Conditions</a>
          <span>•</span>
          <a href="#" className="hover:text-white">Privacy Statement</a>
        </div>
      </div>

    </footer>
  );
}
