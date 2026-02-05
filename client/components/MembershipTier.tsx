import { useState } from "react";

interface Tier {
  name: string;
  subtitle: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  badge: boolean;
  badgeText?: string;
  highlighted: boolean;
  cta: string;
}

interface MembershipTierProps {
  tier: Tier;
}

export default function MembershipTier({ tier }: MembershipTierProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className={`membership-tier relative h-full transition-all duration-500 ${
        tier.highlighted ? "md:scale-105 md:py-6" : ""
      }`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Badge */}
      {tier.badge && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 z-20">
          <div className="px-6 py-2 bg-gold text-black font-bold text-sm uppercase tracking-widest">
            {tier.badgeText}
          </div>
        </div>
      )}

      {/* Card */}
      <div
        className={`h-full bg-gradient-to-b from-white/5 to-white/[0.02] border transition-all duration-500 p-8 flex flex-col ${
          tier.highlighted
            ? "border-gold"
            : "border-white/10 hover:border-white/30"
        } ${tier.highlighted && isHovered ? "shadow-2xl shadow-gold/20" : ""}`}
      >
        {/* Header */}
        <div className="mb-8">
          <p className="text-platinum text-sm font-semibold uppercase tracking-widest mb-2">
            {tier.subtitle}
          </p>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-white mb-3">
            {tier.name}
          </h3>
          <p className="text-muted-foreground text-sm leading-relaxed">
            {tier.description}
          </p>
        </div>

        {/* Price */}
        <div className="mb-8 pb-8 border-b border-white/10">
          <div className="flex items-baseline gap-2">
            <span className="text-gold text-5xl font-bold">{tier.price}</span>
            <span className="text-muted-foreground text-sm">{tier.period}</span>
          </div>
        </div>

        {/* Features list */}
        <div className="flex-grow mb-8">
          <ul className="space-y-4">
            {tier.features.map((feature, index) => (
              <li key={index} className="flex items-start gap-3">
                <span className="mt-1 flex-shrink-0">
                  <svg
                    className={`w-5 h-5 ${
                      tier.highlighted ? "text-gold" : "text-platinum"
                    }`}
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <span className="text-gray-300 text-sm">{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* CTA Button */}
        <button
          className={`w-full py-4 px-6 font-semibold uppercase tracking-widest transition-all duration-300 ${
            tier.highlighted
              ? "bg-gold text-black hover:bg-yellow-400 hover:shadow-lg hover:shadow-gold/30"
              : "bg-white/10 text-white border border-white/20 hover:bg-white/20 hover:border-white/40"
          }`}
        >
          {tier.cta}
        </button>

        {/* Accent line */}
        <div
          className={`absolute bottom-0 left-0 right-0 h-1 transition-all duration-500 ${
            tier.highlighted ? "bg-gold" : "bg-platinum"
          } ${isHovered ? "opacity-100" : "opacity-50"}`}
        ></div>
      </div>
    </div>
  );
}
