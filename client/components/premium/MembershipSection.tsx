import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function MembershipSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  const tiers = [
    {
      name: "Private",
      price: "$2,999",
      description: "Curated foundational membership",
      features: [
        "4 personalized coaching sessions",
        "Monthly nutrition planning",
        "24/7 message support",
        "Access to group programs",
      ],
      color: "from-amber-900/20 to-amber-950/20",
      borderColor: "border-amber-700/30",
      accentColor: "#D97706",
    },
    {
      name: "Signature",
      price: "$6,999",
      description: "Elite standard (Most Popular)",
      features: [
        "Unlimited personalized coaching",
        "Weekly nutrition optimization",
        "Priority 24/7 support",
        "All group programs included",
        "Advanced supplement protocol",
        "VIP event access",
      ],
      color: "from-yellow-600/20 to-yellow-700/20",
      borderColor: "border-yellow-600/50",
      accentColor: "#FFD700",
      popular: true,
    },
    {
      name: "Icon",
      price: "$14,999",
      description: "White-glove concierge service",
      features: [
        "Dedicated personal coach",
        "Daily personalized coaching",
        "Bespoke nutrition science",
        "24/7 priority concierge",
        "Pharmaceutical-grade protocols",
        "Lifetime mentorship access",
      ],
      color: "from-cyan-900/20 to-blue-950/20",
      borderColor: "border-cyan-600/30",
      accentColor: "#06B6D4",
    },
  ];

  useEffect(() => {
    if (!sectionRef.current) return;

    const cards = sectionRef.current.querySelectorAll(".membership-card");

    cards.forEach((card, index) => {
      gsap.to(card, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: `top+=${index * 200}px center`,
          end: `top+=${index * 200 + 400}px center`,
          scrub: 1,
          markers: false,
        },
        y: 0,
        opacity: 1,
        duration: 1,
      });

      // Parallax effect on cards
      gsap.to(card, {
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top center",
          end: "bottom center",
          scrub: 1,
        },
        y: 50 * (index + 1),
      });
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section relative min-h-screen py-32 px-4 md:px-8"
    >
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="mb-32">
          <h2 className="text-5xl md:text-7xl font-playfair text-white mb-6">
            Access Your Peak
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl">
            Three levels of membership, each engineered for elite transformation.
          </p>
        </div>

        {/* Sticky Stacking Cards */}
        <div className="relative h-screen flex items-center">
          <div className="w-full space-y-0">
            {tiers.map((tier, index) => (
              <div
                key={index}
                className={`membership-card relative mb-8 ${
                  tier.popular ? "z-30" : index === 0 ? "z-10" : "z-20"
                }`}
                style={{
                  opacity: 0,
                }}
              >
                <div
                  className={`
                    relative bg-gradient-to-br ${tier.color}
                    border ${tier.borderColor}
                    rounded-2xl p-8 md:p-12
                    backdrop-blur-sm
                    transform transition-all duration-300
                    hover:scale-105
                    group
                  `}
                  style={{
                    boxShadow: `
                      0 0 60px ${tier.accentColor}22,
                      inset 0 1px 0 ${tier.accentColor}33
                    `,
                  }}
                >
                  {/* Popular badge */}
                  {tier.popular && (
                    <div className="absolute -top-4 left-8 bg-yellow-500 text-black px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest">
                      Most Popular
                    </div>
                  )}

                  {/* Content Grid */}
                  <div className="grid md:grid-cols-3 gap-8">
                    {/* Title and Price */}
                    <div>
                      <h3 className="text-4xl font-playfair text-white mb-2">
                        {tier.name}
                      </h3>
                      <p className="text-gray-400 text-sm mb-6">
                        {tier.description}
                      </p>
                      <div className="flex items-baseline gap-2">
                        <span className="text-5xl font-bold text-white">
                          {tier.price}
                        </span>
                        <span className="text-gray-400 text-sm">/month</span>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="md:col-span-2">
                      <ul className="grid md:grid-cols-2 gap-4">
                        {tier.features.map((feature, fIndex) => (
                          <li
                            key={fIndex}
                            className="flex items-start gap-3 text-gray-300"
                          >
                            <span
                              className="mt-1.5 flex-shrink-0 w-2 h-2 rounded-full"
                              style={{
                                backgroundColor: tier.accentColor,
                              }}
                            ></span>
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>

                      {/* CTA Button */}
                      <button
                        className="mt-8 px-8 py-3 rounded-lg font-bold uppercase tracking-widest text-black transition-all duration-300 hover:scale-105"
                        style={{
                          backgroundColor: tier.accentColor,
                          boxShadow: `0 0 40px ${tier.accentColor}44`,
                        }}
                      >
                        Get Started
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
