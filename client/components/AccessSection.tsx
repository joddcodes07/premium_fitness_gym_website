import { useState, useEffect, useRef } from "react";
import MembershipTier from "./MembershipTier";

interface AccessSectionProps {
  scrollY: number;
}

export default function AccessSection({ scrollY }: AccessSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const tiers = [
    {
      name: "Private",
      subtitle: "Exclusive Access",
      price: "$2,999",
      period: "per month",
      description:
        "Curated foundational membership with personalized guidance and community access.",
      features: [
        "4 personalized coaching sessions",
        "Monthly nutrition planning",
        "24/7 message support",
        "Access to group programs",
        "Monthly performance review",
        "Exclusive member events",
      ],
      badge: false,
      highlighted: false,
      cta: "Join Private",
    },
    {
      name: "Signature",
      subtitle: "Elite Standard",
      price: "$6,999",
      period: "per month",
      description:
        "Our most popular tier. Full access to all programs, elite coaching, and performance optimization.",
      features: [
        "Unlimited personalized coaching",
        "Weekly nutrition optimization",
        "Priority 24/7 support",
        "All group programs included",
        "Bi-weekly performance tracking",
        "Private coaching channel",
        "Advanced supplement protocol",
        "Quarterly body composition analysis",
        "VIP event access",
      ],
      badge: true,
      badgeText: "MOST POPULAR",
      highlighted: true,
      cta: "Become Signature",
    },
    {
      name: "Icon",
      subtitle: "The Ultimate Experience",
      price: "$14,999",
      period: "per month",
      description:
        "White-glove service for the most demanding performers. Concierge coaching and total life optimization.",
      features: [
        "Dedicated personal coach",
        "Daily personalized coaching",
        "Bespoke nutrition science",
        "24/7 priority concierge service",
        "Weekly performance analytics",
        "Private coaching team channel",
        "Pharmaceutical-grade protocols",
        "Weekly body composition updates",
        "Invitation-only elite events",
        "Travel coaching included",
        "Family wellness program",
        "Lifetime mentorship access",
      ],
      badge: false,
      highlighted: false,
      cta: "Reach Icon Status",
    },
  ];

  const parallaxOffset = scrollY * 0.25;

  return (
    <section
      ref={sectionRef}
      className="access-section py-24 md:py-32 px-4 md:px-8 bg-card relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div
        className="absolute top-0 left-10 w-80 h-80 bg-gold/5 rounded-full blur-3xl"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      ></div>
      <div
        className="absolute bottom-10 right-10 w-80 h-80 bg-platinum/5 rounded-full blur-3xl"
        style={{ transform: `translateY(${-parallaxOffset}px)` }}
      ></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        {/* Section header */}
        <div className="text-center mb-16 md:mb-24">
          <h2
            className={`section-header transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Access Your Peak
          </h2>
          <p
            className={`section-subheader max-w-2xl mx-auto transition-all duration-700 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            Three levels of membership, each engineered for elite transformation.
            Choose the tier that matches your ambition.
          </p>
        </div>

        {/* Pricing grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {tiers.map((tier, index) => (
            <div
              key={index}
              className={`transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${150 + index * 150}ms` }}
            >
              <MembershipTier tier={tier} />
            </div>
          ))}
        </div>

        {/* Footer CTA */}
        <div
          className={`mt-16 text-center transition-all duration-700 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <p className="text-muted-foreground mb-6">
            Not sure which tier is right for you?
          </p>
          <button className="px-8 py-4 border-2 border-platinum text-platinum font-semibold uppercase tracking-widest hover:bg-platinum hover:text-black transition-all duration-300">
            Schedule a Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
