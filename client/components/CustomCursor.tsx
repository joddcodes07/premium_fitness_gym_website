import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  const mousePos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mousePos.current = { x: e.clientX, y: e.clientY };

      gsap.to(cursorRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    const isInteractive = (el: Element): boolean => {
      // Check if it's a button or link
      if (el.tagName === "BUTTON" || el.tagName === "A") return true;

      // Check if it has role="button"
      if (el.getAttribute("role") === "button") return true;

      // Check if parent is button or link
      const parent = el.parentElement;
      if (parent && (parent.tagName === "BUTTON" || parent.tagName === "A"))
        return true;

      return false;
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target;

      // Ensure we're working with an Element
      if (!target || !(target instanceof Element)) return;

      if (isInteractive(target)) {
        gsap.to(cursorRef.current, {
          scale: 1.5,
          duration: 0.3,
          ease: "power2.out",
        });
      }
    };

    const handleMouseLeave = () => {
      gsap.to(cursorRef.current, {
        scale: 1,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseenter", handleMouseEnter, true);
    window.addEventListener("mouseleave", handleMouseLeave, true);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseenter", handleMouseEnter, true);
      window.removeEventListener("mouseleave", handleMouseLeave, true);
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
