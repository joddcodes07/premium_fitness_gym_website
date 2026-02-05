import { useState, useEffect, useRef } from "react";
import ProgramCard from "./ProgramCard";

interface ProgramsSectionProps {
  scrollY: number;
}

export default function ProgramsSection({ scrollY }: ProgramsSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const parallaxOffset = scrollY * 0.3;

  const programs = [
    {
      title: "Sculpt",
      subtitle: "Weight Loss",
      description:
        "Precision-engineered programs designed to strip away excess and reveal the sculpted physique beneath. Our proprietary methods combine high-intensity protocols with sophisticated nutrition science.",
      highlights: [
        "Metabolic optimization",
        "Personalized nutrition plans",
        "Weekly progress tracking",
        "24/7 coach support",
      ],
      image:
        "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=900&fit=crop",
      accent: "gold",
    },
    {
      title: "Hypertrophy",
      subtitle: "Muscle Gain",
      description:
        "Strategic muscle building for those who refuse to settle. Leverage elite strength protocols and premium supplementation guidance to achieve the ultimate physique transformation.",
      highlights: [
        "Periodized strength training",
        "Macro-optimized nutrition",
        "Muscle recovery protocols",
        "Elite performance coaching",
      ],
      image:
        "https://images.unsplash.com/photo-1517836357463-d25ddfcbf042?w=800&h=900&fit=crop",
      accent: "platinum",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="programs-section py-24 md:py-32 px-4 md:px-8 bg-background relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div
        className="absolute top-20 right-10 w-64 h-64 bg-gold/5 rounded-full blur-3xl"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      ></div>

      <div className="container mx-auto max-w-6xl relative z-10">
        {/* Section header */}
        <div className="text-center mb-16 md:mb-24">
          <h2
            className={`section-header text-4xl md:text-5xl font-serif font-bold text-foreground transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Signature Programs
          </h2>
          <p
            className={`section-subheader max-w-2xl mx-auto transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Choose your path. Each program is crafted for specific
            transformation goals with elite-level coaching and proven
            methodologies.
          </p>
        </div>

        {/* Programs grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
          {programs.map((program, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${200 + index * 150}ms` }}
            >
              <ProgramCard program={program} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
