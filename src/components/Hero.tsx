import heroLandscape from "@/assets/hero-landscape.jpg";
import heroPhotographer from "@/assets/hero-photographer.jpg";

const Hero = () => (
  <section className="min-h-screen bg-background relative overflow-hidden flex items-center justify-center">
    <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/90 to-background" />
    <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_40%,_hsl(var(--background))_100%)]" />

    <img
      src={heroLandscape}
      alt="Golden hour mountain landscape at sunset"
      className="absolute top-24 right-4 md:right-10 w-60 md:w-96 h-40 md:h-64 object-cover rounded-2xl opacity-80 hover:opacity-100 transition-all duration-500 rotate-2 hover:rotate-0"
    />

    <img
      src={heroPhotographer}
      alt="Photographer capturing a street photography moment"
      className="absolute bottom-20 left-4 md:left-10 w-52 md:w-80 h-64 md:h-96 object-cover rounded-2xl opacity-80 hover:opacity-100 transition-all duration-500 -rotate-2 hover:rotate-0"
    />

    <div className="relative z-10 text-center">
      <h1>
        <span className="block text-foreground text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-2">
          Photography
        </span>
        <span className="block text-foreground text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight">
          Academy
        </span>
      </h1>
    </div>
  </section>
);

export default Hero;
