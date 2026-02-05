import { useEffect, useRef } from "react";
import { gsap } from "gsap";

export default function TrainerCarousel() {
  const carouselRef = useRef<HTMLDivElement>(null);

  const trainers = [
    {
      name: "Adrian Cross",
      title: "Strength Architect",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop",
    },
    {
      name: "Sophia Reeves",
      title: "Transformation Scientist",
      image:
        "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop",
    },
    {
      name: "Marcus Reid",
      title: "Performance Engineer",
      image:
        "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=500&fit=crop",
    },
    {
      name: "Elena Vasquez",
      title: "Nutrition Strategist",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop",
    },
  ];

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    // Clone items for infinite effect
    const items = carousel.querySelectorAll(".trainer-item");
    items.forEach((item) => {
      const clone = item.cloneNode(true) as HTMLElement;
      carousel.appendChild(clone);
    });

    // Create infinite animation
    const totalWidth = carousel.scrollWidth / 2;

    gsap.to(carousel, {
      x: -totalWidth,
      duration: 20,
      ease: "none",
      repeat: -1,
    });

    // Add hover effects to all trainer items
    const allItems = carousel.querySelectorAll(".trainer-item");
    allItems.forEach((item) => {
      const img = item.querySelector("img") as HTMLImageElement;
      const label = item.querySelector(".view-label") as HTMLElement;

      item.addEventListener("mouseenter", () => {
        gsap.to(img, {
          filter: "grayscale(0%)",
          scale: 1.05,
          duration: 0.3,
          ease: "power2.out",
        });

        gsap.to(label, {
          opacity: 1,
          duration: 0.3,
          ease: "power2.out",
        });

        // Pause marquee on hover
        gsap.to(carousel, {
          paused: true,
        });
      });

      item.addEventListener("mouseleave", () => {
        gsap.to(img, {
          filter: "grayscale(100%)",
          scale: 1,
          duration: 0.3,
          ease: "power2.out",
        });

        gsap.to(label, {
          opacity: 0,
          duration: 0.3,
          ease: "power2.out",
        });

        // Resume marquee
        gsap.to(carousel, {
          paused: false,
        });
      });
    });
  }, []);

  return (
    <section className="section relative overflow-hidden py-32">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-16">
        <h2 className="text-5xl md:text-7xl font-playfair text-white">
          The Elite Collective
        </h2>
        <p className="text-gray-400 mt-4 text-lg">
          Meet the architects of transformation
        </p>
      </div>

      {/* Carousel container */}
      <div className="overflow-hidden">
        <div
          ref={carouselRef}
          className="flex gap-8 px-4"
          style={{
            width: "fit-content",
          }}
        >
          {trainers.map((trainer, index) => (
            <div
              key={index}
              className="trainer-item flex-shrink-0 group cursor-pointer relative"
              style={{
                width: "320px",
              }}
            >
              <div className="relative overflow-hidden rounded-lg h-96 bg-black">
                <img
                  src={trainer.image}
                  alt={trainer.name}
                  className="w-full h-full object-cover transition-all duration-300"
                  style={{
                    filter: "grayscale(100%)",
                  }}
                />

                {/* Dark overlay */}
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>

                {/* View Profile Label */}
                <div
                  className="view-label absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300"
                  style={{
                    pointerEvents: "none",
                  }}
                >
                  <div
                    className="text-center"
                    style={{
                      textShadow: "0 4px 16px rgba(0, 0, 0, 0.8)",
                    }}
                  >
                    <p className="text-yellow-400 font-bold text-lg uppercase tracking-widest">
                      View Profile
                    </p>
                  </div>
                </div>

                {/* Info overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent p-6">
                  <h3 className="text-white font-playfair text-2xl mb-2">
                    {trainer.name}
                  </h3>
                  <p className="text-gray-300 text-sm">{trainer.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
