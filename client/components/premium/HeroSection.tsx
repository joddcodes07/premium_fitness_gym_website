import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);

  useEffect(() => {
    if (!titleRef.current) return;

    // Create timeline for hero animations
    const tl = gsap.timeline();

    // Clip-path text reveal animation
    gsap.set(titleRef.current, {
      clipPath: "polygon(0% 100%, 100% 100%, 100% 100%, 0% 100%)",
    });

    tl.to(
      titleRef.current,
      {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        duration: 1.2,
        ease: "power3.out",
      },
      0
    );

    // Fade in overlay text
    tl.from(
      ".hero-subtitle",
      {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: "power3.out",
      },
      0.3
    );

    // Scroll prompt animation
    tl.from(
      ".scroll-prompt",
      {
        opacity: 0,
        y: -20,
        duration: 0.8,
        ease: "power2.out",
      },
      0.6
    );

    // Floating animation for scroll prompt
    gsap.to(".scroll-prompt", {
      y: 10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "sine.inOut",
    });
  }, []);

  return (
    <section
      ref={heroRef}
      className="section relative w-full h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover -z-10"
      >
        <source
          src="https://images.unsplash.com/video-1633356714970-ddc3bfe45f50?w=1920&h=1080&fit=crop"
          type="video/mp4"
        />
      </video>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 -z-10"></div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 md:px-8">
        <h1
          ref={titleRef}
          className="hero-title text-7xl md:text-8xl lg:text-9xl font-playfair font-bold text-white leading-tight tracking-tighter"
          style={{
            textShadow: "0 10px 40px rgba(0, 0, 0, 0.8)",
          }}
        >
          REDEFINE
          <br />
          EXISTENCE
        </h1>

        <p className="hero-subtitle mt-8 text-lg md:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Step into a realm where ultra-luxury meets elite transformation. Apex
          Elite is not a gym—it's a catalyst for those who demand absolute
          excellence.
        </p>

        {/* CTA Buttons */}
        <div className="mt-12 flex flex-col sm:flex-row gap-6 justify-center">
          <button
            className="px-8 py-4 bg-yellow-500 text-black font-bold text-lg uppercase tracking-wider hover:bg-yellow-400 transition-all duration-300 glow-gold"
            style={{
              boxShadow: "0 0 40px rgba(255, 215, 0, 0.3)",
            }}
          >
            Begin Now
          </button>
          <button className="px-8 py-4 border-2 border-gray-400 text-gray-300 font-bold text-lg uppercase tracking-wider hover:bg-gray-400/10 transition-all duration-300">
            Explore Access
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="scroll-prompt absolute bottom-12 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2">
          <span className="text-xs uppercase tracking-widest text-gray-400">
            Scroll
          </span>
          <svg
            className="w-6 h-6 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </section>
  );
}
