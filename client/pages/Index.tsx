import { useEffect, useRef, useState } from "react";
import HeroSection from "@/components/HeroSection";
import ProgramsSection from "@/components/ProgramsSection";
import TeamSection from "@/components/TeamSection";
import WeeklyBlueprint from "@/components/WeeklyBlueprint";
import AccessSection from "@/components/AccessSection";

export default function Index() {
  const [scrollY, setScrollY] = useState(0);
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div ref={pageRef} className="page-container overflow-x-hidden">
      <HeroSection />
      <ProgramsSection scrollY={scrollY} />
      <TeamSection scrollY={scrollY} />
      <WeeklyBlueprint scrollY={scrollY} />
      <AccessSection scrollY={scrollY} />
    </div>
  );
}
