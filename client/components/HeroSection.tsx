import { useEffect, useState } from "react";

export default function HeroSection() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="hero-section relative w-full h-screen flex items-center justify-center overflow-hidden">
      {/* Cinematic video background */}
      <div className="absolute inset-0 w-full h-full">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source
            src="https://images.unsplash.com/video-1633356714970-ddc3bfe45f50?w=1920&h=1080&fit=crop"
            type="video/mp4"
          />
        </video>

        {/* Gradient overlay for premium effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 md:px-8">
        <h1
          className={`hero-headline text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-serif font-bold text-white leading-tight tracking-tight transition-all duration-1000 ${
            isLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          Redefine Your
          <br />
          <span className="text-gold">Existence</span>
        </h1>

        <p
          className={`hero-subtext mt-6 text-base sm:text-lg md:text-xl text-platinum max-w-2xl mx-auto leading-relaxed transition-all duration-1000 delay-300 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          Join an exclusive community of elite performers who demand more from
          themselves. Where luxury meets transformation.
        </p>

        {/* CTA Button */}
        <div
          className={`hero-cta mt-10 flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-500 ${
            isLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
          }`}
        >
          <button className="hero-cta-primary px-8 py-4 bg-gold text-black font-semibold text-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105">
            Start Your Journey
          </button>
          <button className="hero-cta-secondary px-8 py-4 border-2 border-platinum text-platinum font-semibold text-lg hover:bg-platinum hover:text-black transition-all duration-300">
            Explore Membership
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <svg
          className="w-6 h-6 text-gold"
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
    </section>
  );
}
