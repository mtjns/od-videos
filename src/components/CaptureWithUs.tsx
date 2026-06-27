import captureStorm from "@/assets/capture-storm.jpg";
import captureArch from "@/assets/capture-architecture.jpg";
import captureVintage from "@/assets/capture-vintage.jpg";
import captureMountain from "@/assets/capture-mountain.jpg";
import capturePortrait from "@/assets/capture-portrait.jpg";
import captureNight from "@/assets/capture-nightsky.jpg";
import FadeInSection from "./FadeInSection";

const images = [
  { src: captureStorm, alt: "Dramatic storm clouds at sunset", label: "Storm Chasing" },
  { src: captureArch, alt: "Urban architecture from unique angle", label: "Architecture" },
  { src: captureVintage, alt: "Vintage camera equipment on wooden surface", label: "Gear Workshop" },
  { src: captureMountain, alt: "Mountain landscape at blue hour", label: "Blue Hour Hike" },
  { src: capturePortrait, alt: "Behind-the-scenes outdoor portrait shoot", label: "Portrait Session" },
  { src: captureNight, alt: "Night sky with stars", label: "Astrophotography" },
];

const CaptureWithUs = () => (
  <section className="bg-background py-24 px-4 md:px-8">
    <FadeInSection>
      <h2 className="text-center text-foreground text-5xl md:text-6xl font-bold tracking-tight mb-16">
        CAPTURE WITH US
      </h2>
    </FadeInSection>
    <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-6">
      {images.map((img, i) => (
        <FadeInSection key={img.alt} delay={i * 80}>
          <div className="relative overflow-hidden rounded-xl group h-80">
            <img
              src={img.src}
              alt={img.alt}
              loading="lazy"
              className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="absolute bottom-5 left-5 text-foreground text-sm font-medium tracking-wider uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {img.label}
            </span>
          </div>
        </FadeInSection>
      ))}
    </div>
  </section>
);

export default CaptureWithUs;
