import { Instagram, Youtube, Facebook } from "lucide-react";
import { Link } from "react-router-dom";

const quickLinks = [
  { label: "Privacy Policy", to: "/privacy-policy" },
  { label: "Terms of Service", to: "/terms-of-service" },
  { label: "Refund Policy", to: "/refund-policy" },
  { label: "Course Schedule", to: "/course-schedule" },
];

const ApertureLogo = () => (
  <svg viewBox="0 0 48 48" className="w-10 h-10 text-primary" fill="none" stroke="currentColor" strokeWidth="2">
    <circle cx="24" cy="24" r="20" />
    <circle cx="24" cy="24" r="8" />
    <line x1="24" y1="4" x2="24" y2="16" />
    <line x1="24" y1="32" x2="24" y2="44" />
    <line x1="4" y1="24" x2="16" y2="24" />
    <line x1="32" y1="24" x2="44" y2="24" />
  </svg>
);

const Footer = () => (
  <footer className="bg-background py-16 px-4 md:px-8 border-t border-foreground/10">
    <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
      <div>
        <div className="flex items-center gap-3 mb-4">
          <ApertureLogo />
          <span className="text-foreground text-sm font-semibold tracking-widest">SHUTTER THEORY</span>
        </div>
        <p className="text-foreground/50 text-sm mb-2">Transforming aspiring photographers into confident visual storytellers.</p>
        <div className="flex gap-4 mt-6">
          {[Instagram, Youtube, Facebook].map((Icon, i) => (
            <a
              key={i}
              href="#"
              className="w-10 h-10 bg-foreground/10 rounded-full flex items-center justify-center hover:bg-primary transition-all duration-300"
              aria-label={["Instagram", "YouTube", "Facebook"][i]}
            >
              <Icon className="w-4 h-4 text-foreground" />
            </a>
          ))}
        </div>
      </div>

      <div>
        <h3 className="text-foreground text-sm font-semibold tracking-widest mb-6">CONTACT</h3>
        <p className="text-foreground/50 text-sm mb-2">hello@shuttertheory.com</p>
        <p className="text-foreground/50 text-sm mb-2">+1 (555) 789-0123</p>
        <p className="text-foreground/50 text-sm">456 Creative Lane, Portland, OR 97209</p>
      </div>

      <div>
        <h3 className="text-foreground text-sm font-semibold tracking-widest mb-6">QUICK LINKS</h3>
        {quickLinks.map((link) => (
          <Link
            key={link.label}
            to={link.to}
            className="text-foreground/50 text-sm hover:text-primary transition-colors block mb-3"
          >
            {link.label}
          </Link>
        ))}
      </div>

      <div>
        <h3 className="text-foreground text-sm font-semibold tracking-widest mb-6">SOCIAL</h3>
        <a href="#" className="text-foreground/50 text-sm hover:text-primary transition-colors block mb-3">@shuttertheory</a>
        <a href="#" className="text-foreground/50 text-sm hover:text-primary transition-colors block mb-3">Shutter Theory on YouTube</a>
        <a href="#" className="text-foreground/50 text-sm hover:text-primary transition-colors block mb-3">Pinterest Gallery</a>
      </div>
    </div>

    <div className="border-t border-foreground/10 mt-12 pt-8 text-center text-foreground/40 text-sm max-w-7xl mx-auto">
      © 2024–{new Date().getFullYear()} Shutter Theory. All rights reserved.
    </div>
  </footer>
);

export default Footer;
