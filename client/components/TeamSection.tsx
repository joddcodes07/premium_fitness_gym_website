import { useState, useEffect, useRef } from "react";
import TrainerCard from "./TrainerCard";

interface TeamSectionProps {
  scrollY: number;
}

export default function TeamSection({ scrollY }: TeamSectionProps) {
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

  const trainers = [
    {
      name: "Adrian Cross",
      specialty: "Strength & Conditioning",
      bio: "Olympic lifting coach with 15 years of elite athlete experience. Specializes in breaking strength plateaus.",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=600&fit=crop",
      credentials: ["Strength Coach", "Nutritionist", "Elite Performer"],
    },
    {
      name: "Sophia Reeves",
      specialty: "Transformation & Recovery",
      bio: "Award-winning transformation specialist. Combines periodized training with holistic recovery protocols.",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=600&fit=crop",
      credentials: ["Recovery Expert", "Mobility Coach", "Wellness Advisor"],
    },
    {
      name: "Marcus Reid",
      specialty: "Performance Architecture",
      bio: "Designed programs for top-tier athletes. Expert in customized performance protocols and biomechanics.",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=600&fit=crop",
      credentials: ["Performance Coach", "Biomechanics Expert", "Strategist"],
    },
    {
      name: "Elena Vasquez",
      specialty: "Nutrition & Optimization",
      bio: "Precision nutrition expert. Develops individualized macro protocols for elite results.",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=600&fit=crop",
      credentials: ["Nutritionist", "Biochemist", "Performance Optimizer"],
    },
  ];

  const parallaxOffset = scrollY * 0.2;

  return (
    <section
      ref={sectionRef}
      className="team-section py-24 md:py-32 px-4 md:px-8 bg-card relative overflow-hidden"
    >
      {/* Decorative background */}
      <div
        className="absolute bottom-0 left-0 w-96 h-96 bg-platinum/5 rounded-full blur-3xl"
        style={{ transform: `translateY(${parallaxOffset * 0.5}px)` }}
      ></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section header */}
        <div className="text-center mb-16 md:mb-24">
          <h2
            className={`section-header transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            The Elite Collective
          </h2>
          <p
            className={`section-subheader max-w-2xl mx-auto transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Meet the architects of transformation. Each member brings decades of
            elite-level expertise.
          </p>
        </div>

        {/* Trainers grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {trainers.map((trainer, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${150 + index * 100}ms` }}
            >
              <TrainerCard trainer={trainer} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
