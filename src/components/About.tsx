import instructorImg from "@/assets/instructor-sarah.jpg";
import FadeInSection from "./FadeInSection";

const About = () => (
  <section id="about" className="bg-muted py-24 px-4 md:px-8">
    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-16 items-center">
      <FadeInSection>
        <img
          src={instructorImg}
          alt="Instructor Sarah Chen holding a camera in her studio"
          className="w-full h-[400px] md:h-[500px] object-cover rounded-2xl"
        />
      </FadeInSection>
      <FadeInSection delay={150}>
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-8 h-1 bg-primary rounded-full" />
            <span className="text-primary text-sm font-semibold tracking-widest uppercase">Your Guide</span>
          </div>
          <h2 className="text-foreground text-4xl md:text-5xl font-bold tracking-tight">Meet Your Instructor</h2>
          <div className="border-l-4 border-primary pl-6">
            <p className="text-foreground/80 text-lg leading-relaxed">
              Meet Sarah Chen, an award-winning photographer and passionate educator who transforms aspiring
              photographers into confident visual storytellers through personalized guidance and proven techniques.
            </p>
          </div>
          <p className="text-foreground/80 text-lg leading-relaxed">
            With over 15 years of professional experience spanning fashion, documentary, and fine art photography,
            Sarah brings real-world expertise to every lesson. Her teaching philosophy centers on understanding light,
            mastering composition fundamentals, and developing your unique creative voice.
          </p>
        </div>
      </FadeInSection>
    </div>
  </section>
);

export default About;
