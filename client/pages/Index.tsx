import { useEffect } from "react";
import Lenis from "lenis";
import CustomCursor from "@/components/CustomCursor";
import HeroSection from "@/components/premium/HeroSection";
import ProgramsSection from "@/components/premium/ProgramsSection";
import TrainerCarousel from "@/components/premium/TrainerCarousel";
import MembershipSection from "@/components/premium/MembershipSection";
import Footer from "@/components/premium/Footer";

export default function Index() {
  useEffect(() => {
    // Initialize Lenis for smooth scrolling
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      smoothTouch: false,
      touchMultiplier: 2,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main className="relative bg-black">
      <CustomCursor />
      <HeroSection />
      <ProgramsSection />
      <TrainerCarousel />
      <MembershipSection />
      <Footer />
    </main>
  );
}
