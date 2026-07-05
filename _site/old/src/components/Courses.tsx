import { Camera, Sun, Monitor } from "lucide-react";
import FadeInSection from "./FadeInSection";

const features = [
  { icon: Camera, title: "Beginner Fundamentals", desc: "Master camera controls, exposure triangle, and essential composition rules" },
  { icon: Sun, title: "Studio Lighting Mastery", desc: "Control natural and artificial light for portraits, products, and creative projects" },
  { icon: Monitor, title: "Post-Processing Workflow", desc: "Professional editing techniques in Lightroom and Photoshop for polished final images" },
];

const Courses = () => (
  <section id="courses" className="bg-background py-24 px-4 md:px-8">
    <div className="max-w-6xl mx-auto text-center">
      <FadeInSection>
        <h2 className="text-foreground text-4xl md:text-5xl font-bold mb-4 tracking-tight">Course Packages</h2>
        <p className="text-foreground/60 text-xl mb-16">
          Comprehensive training in composition, lighting, and technical mastery
        </p>
      </FadeInSection>

      <div className="grid md:grid-cols-3 gap-8">
        {features.map((f, i) => (
          <FadeInSection key={f.title} delay={i * 100}>
            <div className="bg-foreground/5 p-8 rounded-xl transition-all duration-300 text-left group border border-foreground/10 hover:border-primary/50">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                <f.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-foreground text-xl font-semibold mb-3">{f.title}</h3>
              <p className="text-foreground/60 text-sm leading-relaxed">{f.desc}</p>
            </div>
          </FadeInSection>
        ))}
      </div>
    </div>
  </section>
);

export default Courses;
