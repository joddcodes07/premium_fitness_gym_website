import { useState, useEffect, useRef } from "react";

interface WeeklyBlueprintProps {
  scrollY: number;
}

export default function WeeklyBlueprint({ scrollY }: WeeklyBlueprintProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedDay, setSelectedDay] = useState<number>(0);

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

  const schedule = [
    {
      day: "Monday",
      focus: "Strength Foundation",
      sessions: [
        {
          time: "6:00 AM",
          name: "Elite Strength Protocol",
          duration: "90 min",
        },
        { time: "12:00 PM", name: "Recovery & Mobility", duration: "45 min" },
        { time: "6:00 PM", name: "Nutrition Optimization", duration: "30 min" },
      ],
    },
    {
      day: "Tuesday",
      focus: "Conditioning Circuit",
      sessions: [
        {
          time: "6:00 AM",
          name: "High-Intensity Performance",
          duration: "75 min",
        },
        { time: "3:00 PM", name: "Core & Stability Work", duration: "45 min" },
        { time: "7:00 PM", name: "Coach 1-on-1 Session", duration: "60 min" },
      ],
    },
    {
      day: "Wednesday",
      focus: "Recovery Day",
      sessions: [
        { time: "7:00 AM", name: "Restorative Yoga", duration: "60 min" },
        { time: "2:00 PM", name: "Sauna & Cryotherapy", duration: "45 min" },
        { time: "6:00 PM", name: "Nutrition Planning", duration: "30 min" },
      ],
    },
    {
      day: "Thursday",
      focus: "Hypertrophy Focus",
      sessions: [
        {
          time: "6:00 AM",
          name: "Muscle Building Protocol",
          duration: "90 min",
        },
        {
          time: "1:00 PM",
          name: "Advanced Supplement Review",
          duration: "45 min",
        },
        { time: "6:00 PM", name: "Evening Movement Flow", duration: "45 min" },
      ],
    },
    {
      day: "Friday",
      focus: "Power Development",
      sessions: [
        { time: "6:00 AM", name: "Explosive Strength", duration: "75 min" },
        { time: "4:00 PM", name: "Performance Testing", duration: "60 min" },
        { time: "7:00 PM", name: "Team Social Event", duration: "120 min" },
      ],
    },
    {
      day: "Saturday",
      focus: "Challenge & Goals",
      sessions: [
        {
          time: "8:00 AM",
          name: "Strategic Training Block",
          duration: "120 min",
        },
        { time: "2:00 PM", name: "Elite Competition", duration: "90 min" },
        { time: "6:00 PM", name: "Recovery Ritual", duration: "60 min" },
      ],
    },
    {
      day: "Sunday",
      focus: "Integration",
      sessions: [
        { time: "9:00 AM", name: "Mind-Body Integration", duration: "90 min" },
        {
          time: "2:00 PM",
          name: "Weekly Review & Planning",
          duration: "60 min",
        },
        { time: "6:00 PM", name: "Meal Prep Masterclass", duration: "90 min" },
      ],
    },
  ];

  const parallaxOffset = scrollY * 0.15;

  return (
    <section
      ref={sectionRef}
      className="weekly-blueprint py-24 md:py-32 px-4 md:px-8 bg-background relative overflow-hidden"
    >
      {/* Decorative background */}
      <div
        className="absolute top-1/2 right-0 w-96 h-96 bg-gold/5 rounded-full blur-3xl"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
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
            Weekly Blueprint
          </h2>
          <p
            className={`section-subheader max-w-2xl mx-auto transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-8"
            }`}
          >
            Your personalized weekly schedule designed for optimal
            transformation. Interactive planning for elite performance.
          </p>
        </div>

        {/* Day selector tabs */}
        <div
          className={`flex flex-wrap gap-2 md:gap-3 mb-12 justify-center transition-all duration-700 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {schedule.map((item, index) => (
            <button
              key={index}
              onClick={() => setSelectedDay(index)}
              className={`px-4 md:px-6 py-2 md:py-3 font-semibold uppercase tracking-widest text-sm transition-all duration-300 ${
                selectedDay === index
                  ? "bg-gold text-black"
                  : "bg-white/5 text-foreground hover:bg-white/10"
              }`}
            >
              {item.day}
            </button>
          ))}
        </div>

        {/* Schedule display */}
        <div
          className={`bg-card border border-white/10 overflow-hidden transition-all duration-500 ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="p-6 md:p-8">
            {/* Day header */}
            <div className="mb-8 pb-6 border-b border-white/10">
              <h3 className="text-3xl md:text-4xl font-serif font-bold text-gold mb-2">
                {schedule[selectedDay].day}
              </h3>
              <p className="text-lg text-platinum">
                Focus: {schedule[selectedDay].focus}
              </p>
            </div>

            {/* Sessions list */}
            <div className="space-y-6">
              {schedule[selectedDay].sessions.map((session, index) => (
                <div
                  key={index}
                  className={`grid md:grid-cols-4 gap-4 items-start p-4 bg-white/5 hover:bg-white/10 transition-all duration-300 group animate-fade-in-up ${
                    isVisible ? "animate-fade-in-up" : ""
                  }`}
                  style={{
                    animationDelay: isVisible ? `${index * 100}ms` : "0ms",
                  }}
                >
                  <div>
                    <p className="text-gold font-semibold text-lg">
                      {session.time}
                    </p>
                  </div>
                  <div className="md:col-span-2">
                    <h4 className="text-white font-semibold mb-1">
                      {session.name}
                    </h4>
                    <p className="text-sm text-muted-foreground">
                      Premium coaching included
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="text-platinum font-semibold">
                      {session.duration}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Schedule CTA */}
            <div className="mt-8 pt-6 border-t border-white/10">
              <button className="w-full md:w-auto px-8 py-3 bg-gold text-black font-semibold uppercase tracking-widest hover:bg-yellow-400 transition-all duration-300">
                Book Your Week
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
