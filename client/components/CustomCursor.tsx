import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };

      // Animate cursor with slight lag
      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as Node;

      // Check if target is an Element and has the methods we need
      if (!(target instanceof Element)) return;

      const isButton = target.tagName === "BUTTON" || target.closest("button");
      const isLink = target.tagName === "A" || target.closest("a");
      const isClickable = target.hasAttribute("role") && target.getAttribute("role") === "button";

      if (isButton || isLink || isClickable) {
        setIsHovering(true);
        gsap.to(cursorRef.current, {
          scale: 1.5,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
      gsap.to(cursorRef.current, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter, true);
    document.addEventListener("mouseleave", handleMouseLeave, true);

    // Add hover listeners to all interactive elements
    const interactiveElements = document.querySelectorAll(
      "button, a, [role='button']"
    );
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", handleMouseEnter);
      el.addEventListener("mouseleave", handleMouseLeave);
    });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter, true);
      document.removeEventListener("mouseleave", handleMouseLeave, true);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", handleMouseEnter);
        el.removeEventListener("mouseleave", handleMouseLeave);
      });
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="pointer-events-none fixed z-50 transform -translate-x-1/2 -translate-y-1/2"
      style={{
        width: "32px",
        height: "32px",
        border: "2px solid rgba(255, 215, 0, 0.8)",
        borderRadius: "50%",
        mixBlendMode: "difference",
        left: 0,
        top: 0,
      }}
    >
      <div
        className="absolute inset-0 rounded-full opacity-40"
        style={{
          border: "1px solid rgba(255, 215, 0, 0.4)",
          transform: "scale(0.6)",
        }}
      ></div>
    </div>
  );
}
