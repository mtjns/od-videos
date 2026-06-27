import { useState } from "react";
import { Menu, X } from "lucide-react";

const ApertureLogo = () => (
  <svg
    viewBox="0 0 48 48"
    className="w-12 h-12 text-amber-500 hover:animate-spin-slow transition-transform"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <circle cx="24" cy="24" r="20" />
    <circle cx="24" cy="24" r="8" />
    <line x1="24" y1="4" x2="24" y2="16" />
    <line x1="24" y1="32" x2="24" y2="44" />
    <line x1="4" y1="24" x2="16" y2="24" />
    <line x1="32" y1="24" x2="44" y2="24" />
    <line x1="9.86" y1="9.86" x2="18.34" y2="18.34" />
    <line x1="29.66" y1="29.66" x2="38.14" y2="38.14" />
    <line x1="38.14" y1="9.86" x2="29.66" y2="18.34" />
    <line x1="18.34" y1="29.66" x2="9.86" y2="38.14" />
  </svg>
);

const navLinks = [
  { label: "ABOUT", href: "#about" },
  { label: "COURSES", href: "#courses" },
  { label: "GALLERY", href: "#gallery" },
];

const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    el?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="bg-black/90 backdrop-blur-md fixed w-full z-50 border-b border-white/10">
      <nav className="flex items-center justify-between px-6 md:px-8 py-4 max-w-7xl mx-auto">
        <a href="#" aria-label="Shutter Theory Home" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <ApertureLogo />
        </a>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.href)}
              className="text-white text-sm font-medium tracking-widest hover:text-amber-400 transition-colors duration-300"
            >
              {link.label}
            </button>
          ))}
          <button className="bg-amber-500 text-black px-6 py-2.5 rounded-full font-semibold hover:bg-amber-400 transition-all duration-300 hover:scale-105 text-sm">
            BOOK CONSULTATION
          </button>
        </div>

        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle navigation menu"
          aria-expanded={mobileOpen}
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {mobileOpen && (
        <div className="bg-black/95 fixed inset-0 z-40 flex flex-col items-center justify-center gap-8 md:hidden">
          <button className="absolute top-5 right-6 text-white" onClick={() => setMobileOpen(false)}>
            <X className="w-6 h-6" />
          </button>
          {navLinks.map((link) => (
            <button
              key={link.label}
              onClick={() => scrollTo(link.href)}
              className="text-white text-2xl font-medium tracking-widest hover:text-amber-400 transition-colors"
            >
              {link.label}
            </button>
          ))}
          <button className="bg-amber-500 text-black px-8 py-3 rounded-full font-semibold text-lg hover:bg-amber-400 transition-all">
            BOOK CONSULTATION
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
