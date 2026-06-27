import FadeInSection from "./FadeInSection";

const testimonials = [
  { quote: "BEST PHOTOGRAPHY COURSE I'VE TAKEN", author: "Marcus Rivera", context: "Transformed my hobby into a professional career", photo: "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop" },
  { quote: "TRANSFORMED MY UNDERSTANDING OF LIGHT", author: "Emma Watson", context: "Sarah's teaching style made complex concepts accessible", photo: "https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop" },
  { quote: "MOST INSPIRING LEARNING EXPERIENCE", author: "James Park", context: "Finally found my creative voice in photography", photo: "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop" },
  { quote: "EXCEEDED ALL MY EXPECTATIONS", author: "Aisha Thompson", context: "The hands-on workshops were incredible", photo: "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop" },
  { quote: "A GAME CHANGER FOR MY PORTFOLIO", author: "David Kim", context: "Landed my first paid gig within weeks", photo: "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop" },
  { quote: "SARAH IS AN AMAZING MENTOR", author: "Sofia Andersson", context: "Patient, knowledgeable, and truly inspiring", photo: "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop" },
];

const TestimonialCard = ({ t }: { t: typeof testimonials[number] }) => (
  <article className="bg-background/30 backdrop-blur-sm p-10 rounded-2xl border border-foreground/10 min-w-[340px] max-w-[400px] flex-shrink-0 relative">
    <span className="absolute -top-4 left-8 text-foreground/20 text-7xl font-serif leading-none select-none">"</span>
    <p className="text-foreground text-2xl font-bold tracking-tight mb-6 leading-tight relative z-10">
      "{t.quote}"
    </p>
    <div className="flex items-center gap-3">
      <img
        src={t.photo}
        alt={t.author}
        className="w-10 h-10 rounded-full object-cover"
        loading="lazy"
      />
      <div>
        <p className="text-foreground text-sm font-medium tracking-wider">{t.author}</p>
        <p className="text-foreground/50 text-xs mt-0.5 italic">{t.context}</p>
      </div>
    </div>
  </article>
);

const Testimonials = () => (
  <section className="bg-muted py-24 overflow-hidden">
    <FadeInSection>
      <div className="text-center mb-16 px-4">
        <div className="flex items-center justify-center gap-3 mb-4">
          <div className="w-8 h-1 bg-primary rounded-full" />
          <span className="text-primary text-sm font-semibold tracking-widest uppercase">Testimonials</span>
          <div className="w-8 h-1 bg-primary rounded-full" />
        </div>
        <h2 className="text-foreground text-4xl md:text-5xl font-bold tracking-tight">What Students Say</h2>
      </div>
    </FadeInSection>

    <div className="relative overflow-hidden">
      <div className="flex gap-8 animate-marquee w-max">
        {[...testimonials, ...testimonials].map((t, i) => (
          <TestimonialCard key={`${t.author}-${i}`} t={t} />
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
