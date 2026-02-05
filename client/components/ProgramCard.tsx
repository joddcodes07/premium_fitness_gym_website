import { useState } from "react";

interface Program {
  title: string;
  subtitle: string;
  description: string;
  highlights: string[];
  image: string;
  accent: "gold" | "platinum";
}

interface ProgramCardProps {
  program: Program;
}

export default function ProgramCard({ program }: ProgramCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const accentColor = program.accent === "gold" ? "gold" : "platinum";
  const accentClass =
    program.accent === "gold" ? "text-gold" : "text-platinum";
  const borderClass =
    program.accent === "gold" ? "border-gold" : "border-platinum";

  return (
    <div
      className="program-card relative group h-full cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Card container */}
      <div className="relative h-full overflow-hidden bg-card border border-white/10 transition-all duration-500 group-hover:border-white/30">
        {/* Background image */}
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={program.image}
            alt={program.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80"></div>

          {/* Hover overlay with reveal */}
          <div
            className={`absolute inset-0 bg-black transition-opacity duration-500 ${
              isHovered ? "opacity-90" : "opacity-0"
            }`}
          ></div>
        </div>

        {/* Content */}
        <div className="relative z-10 p-8 h-full flex flex-col justify-between">
          {/* Top content */}
          <div>
            <div className={`inline-block mb-4 px-4 py-2 border border-current ${accentClass}`}>
              <span className="text-sm font-semibold uppercase tracking-widest">
                {program.subtitle}
              </span>
            </div>

            <h3 className="text-5xl font-serif font-bold text-white mb-3 transition-all duration-500">
              {program.title}
            </h3>

            <p
              className={`text-base text-gray-300 leading-relaxed transition-all duration-500 ${
                isHovered ? "opacity-100" : "opacity-0"
              }`}
            >
              {program.description}
            </p>
          </div>

          {/* Bottom content - reveals on hover */}
          <div
            className={`transition-all duration-500 ${
              isHovered ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            <div className="space-y-3 mb-6">
              {program.highlights.map((highlight, index) => (
                <div key={index} className="flex items-start gap-3">
                  <span className={`mt-1 flex-shrink-0 ${accentClass}`}>
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                      <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                  <span className="text-sm text-gray-200">{highlight}</span>
                </div>
              ))}
            </div>

            <button
              className={`w-full py-3 px-4 font-semibold uppercase tracking-widest text-black transition-all duration-300 ${
                accentColor === "gold"
                  ? "bg-gold hover:bg-yellow-400"
                  : "bg-platinum hover:bg-gray-300"
              }`}
            >
              Learn More
            </button>
          </div>
        </div>

        {/* Accent border on hover */}
        <div
          className={`absolute top-0 left-0 right-0 h-1 transition-all duration-500 ${
            accentColor === "gold" ? "bg-gold" : "bg-platinum"
          } ${isHovered ? "opacity-100" : "opacity-0"}`}
        ></div>
      </div>
    </div>
  );
}
