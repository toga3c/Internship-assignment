import Image from "next/image";
import "./globals.css";

export const metadata = {
  title: "Wonder Real Estate",
  description: "Property Management Solutions",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-[#F7F9F5] text-gray-9000">
        {/* NAVBAR (visible on all pages) */}
        {/* NAVBAR */}
<nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] md:w-[70%]">
  <div
    className="
      bg-white/20 backdrop-blur-xl border border-white/30 
      rounded-full px-8 py-4 
      shadow-lg flex items-center justify-between
    "
  >
    {/* Logo */}
    <div className="flex items-center gap-2">
      <Image
        src="/logo.png"
        alt="Wonder Real Estate Logo"
        width={60}
        height={60}
        className="object-contain"
      />
    </div>

    {/* Nav Links */}
    <ul className="hidden md:flex items-center gap-8 text-[16px] font-medium">
      {/* Each nav item with underline hover */}
      {["Features", "Testimonials", "Contact"].map((item) => (
        <li key={item} className="relative group">
          <a href={`#${item.toLowerCase()}`} className="hover:text-green-700 transition">
            {item}
          </a>

          {/* Green underline hover */}
          <span
            className="
              absolute left-0 -bottom-1 h-[3px] w-0 bg-green-700 
              rounded-full transition-all duration-300 group-hover:w-full
            "
          ></span>
        </li>
      ))}
    </ul>

    {/* CTA */}
    <a
      href="#contact"
      className="
        hidden md:flex items-center gap-2 bg-green-700 text-white 
        px-5 py-2 rounded-full hover:bg-green-800 transition
      "
    >
      Contact ↗
    </a>
  </div>
</nav>


        {/* Page Content */}
        <main className="pt-24">
          {children}
        </main>
      </body>
    </html>
  );
}
