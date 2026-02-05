import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ProgramsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const sculptRef = useRef<HTMLDivElement>(null);
  const hypertrophyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    // Unveil animation for Sculpt program
    gsap.from(".sculpt-text line", {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center",
        end: "center center",
        scrub: 0.5,
      },
      y: 100,
      opacity: 0,
      stagger: 0.1,
    });

    // Unveil animation for Hypertrophy program
    gsap.from(".hypertrophy-text line", {
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center",
        end: "center center",
        scrub: 0.5,
      },
      y: 100,
      opacity: 0,
      stagger: 0.1,
    });

    // Hover animations for cards
    const cards = sectionRef.current.querySelectorAll(".program-card");
    cards.forEach((card) => {
      card.addEventListener("mouseenter", () => {
        gsap.to(card.querySelector(".gradient-border"), {
          rotation: 360,
          duration: 3,
          repeat: -1,
          ease: "none",
        });

        gsap.to(card, {
          scale: 1.02,
          duration: 0.3,
          ease: "power2.out",
        });
      });

      card.addEventListener("mouseleave", () => {
        gsap.killTweensOf(card.querySelector(".gradient-border"));
        gsap.to(card, {
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        });
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section ref={sectionRef} className="section relative px-4 md:px-8 py-20vh">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <h2 className="text-5xl md:text-7xl font-playfair text-center mb-20 text-white">
          Signature Programs
        </h2>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-2 gap-12">
          {/* Sculpt Card */}
          <div
            ref={sculptRef}
            className="program-card relative group cursor-pointer"
          >
            {/* Metallic gradient border */}
            <div
              className="gradient-border absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background:
                  "linear-gradient(45deg, #FFD700, #C0C0C0, #FFD700, #C0C0C0)",
                backgroundSize: "200% 200%",
                padding: "2px",
                borderRadius: "12px",
                zIndex: -1,
              }}
            ></div>

            <div
              className="relative bg-black/80 p-12 rounded-lg border border-gray-600 group-hover:border-transparent transition-all duration-300 h-full"
              style={{
                boxShadow: "0 0 40px rgba(255, 215, 0, 0.05)",
              }}
            >
              <div className="mb-8">
                <div className="inline-block px-4 py-2 border border-yellow-500/50 rounded mb-4">
                  <span className="text-yellow-500 text-sm font-bold uppercase tracking-wider">
                    Weight Loss
                  </span>
                </div>

                <h3 className="text-5xl font-playfair text-white mb-4">
                  Sculpt
                </h3>

                <svg
                  className="sculpt-text w-full h-24"
                  viewBox="0 0 400 100"
                  preserveAspectRatio="none"
                >
                  <line
                    x1="0"
                    y1="30"
                    x2="400"
                    y2="30"
                    stroke="#FFD700"
                    strokeWidth="2"
                  />
                  <line
                    x1="0"
                    y1="60"
                    x2="400"
                    y2="60"
                    stroke="#FFD700"
                    strokeWidth="2"
                  />
                </svg>
              </div>

              <p className="text-gray-300 mb-8 leading-relaxed">
                Precision engineering for the perfect form. Strip away excess,
                reveal excellence. Our proprietary protocols target maximum
                aesthetic transformation.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-gray-300">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                  Metabolic Mastery
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                  Personalized Nutrition Science
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <span className="w-2 h-2 bg-yellow-500 rounded-full"></span>
                  Elite Coach Access 24/7
                </li>
              </ul>

              <button className="w-full py-3 bg-yellow-500 text-black font-bold uppercase tracking-wider hover:bg-yellow-400 transition-all duration-300">
                Select Program
              </button>
            </div>
          </div>

          {/* Hypertrophy Card */}
          <div
            ref={hypertrophyRef}
            className="program-card relative group cursor-pointer"
          >
            {/* Metallic gradient border */}
            <div
              className="gradient-border absolute inset-0 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              style={{
                background:
                  "linear-gradient(45deg, #C0C0C0, #FFD700, #C0C0C0, #FFD700)",
                backgroundSize: "200% 200%",
                padding: "2px",
                borderRadius: "12px",
                zIndex: -1,
              }}
            ></div>

            <div
              className="relative bg-black/80 p-12 rounded-lg border border-gray-600 group-hover:border-transparent transition-all duration-300 h-full"
              style={{
                boxShadow: "0 0 40px rgba(192, 192, 192, 0.05)",
              }}
            >
              <div className="mb-8">
                <div className="inline-block px-4 py-2 border border-gray-400/50 rounded mb-4">
                  <span className="text-gray-300 text-sm font-bold uppercase tracking-wider">
                    Muscle Gain
                  </span>
                </div>

                <h3 className="text-5xl font-playfair text-white mb-4">
                  Hypertrophy
                </h3>

                <svg
                  className="hypertrophy-text w-full h-24"
                  viewBox="0 0 400 100"
                  preserveAspectRatio="none"
                >
                  <line
                    x1="0"
                    y1="30"
                    x2="400"
                    y2="30"
                    stroke="#C0C0C0"
                    strokeWidth="2"
                  />
                  <line
                    x1="0"
                    y1="60"
                    x2="400"
                    y2="60"
                    stroke="#C0C0C0"
                    strokeWidth="2"
                  />
                </svg>
              </div>

              <p className="text-gray-300 mb-8 leading-relaxed">
                Strategic muscle architecture for the ultimate physique. Harness
                elite strength protocols designed for uncompromising gains.
              </p>

              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-gray-300">
                  <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                  Periodized Strength Training
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                  Macro-Optimized Nutrition
                </li>
                <li className="flex items-center gap-3 text-gray-300">
                  <span className="w-2 h-2 bg-gray-400 rounded-full"></span>
                  Premium Recovery Protocols
                </li>
              </ul>

              <button className="w-full py-3 bg-gray-400 text-black font-bold uppercase tracking-wider hover:bg-gray-300 transition-all duration-300">
                Select Program
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
