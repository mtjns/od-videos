import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { galleryImages } from "@/data/galleryData";
import FadeInSection from "./FadeInSection";

const Gallery = () => (
  <section id="gallery" className="bg-muted py-24 overflow-hidden">
    <FadeInSection>
      <div className="px-4 md:px-8 text-center mb-16">
        <h2 className="text-foreground text-5xl md:text-6xl font-bold tracking-tight mb-4">GALLERY</h2>
        <Link
          to="/gallery"
          className="inline-flex items-center gap-2 bg-foreground/10 text-foreground px-6 py-3 rounded-full font-medium text-sm hover:bg-primary hover:text-primary-foreground transition-all duration-300 group"
        >
          View full gallery
          <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </FadeInSection>

    <div className="relative overflow-hidden">
      <div className="flex gap-6 animate-marquee-slow w-max">
        {[...galleryImages, ...galleryImages].map((img, i) => (
          <Link
            to={`/gallery/${img.id}`}
            key={`${img.id}-${i}`}
            className="group cursor-pointer relative block flex-shrink-0 w-72 h-80"
          >
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="w-full h-full object-cover rounded-xl transition-transform duration-300 group-hover:scale-[1.02]"
            />
            <div className="absolute inset-0 bg-background/0 group-hover:bg-background/20 rounded-xl transition-all" />
            <span className="absolute bottom-4 left-4 text-foreground text-sm opacity-0 group-hover:opacity-100 transition-opacity font-medium">
              {img.caption}
            </span>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default Gallery;
