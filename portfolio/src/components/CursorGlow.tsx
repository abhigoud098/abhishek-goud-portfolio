"use client";

import { useEffect, useRef } from "react";

export default function CursorGlow() {
  const glowRef = useRef<HTMLDivElement>(null);
  const coreRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer:fine)").matches;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion:reduce)",
    ).matches;

    if (!finePointer || reduceMotion) return;

    const glow = glowRef.current;
    const core = coreRef.current;
    const ring = ringRef.current;

    if (!glow || !core || !ring) return;

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;

    let glowX = mouseX;
    let glowY = mouseY;

    let active = false;

    const move = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      core.style.transform = `translate3d(${mouseX}px,${mouseY}px,0)`;

      ring.style.transform = `translate3d(${mouseX}px,${mouseY}px,0)`;

      glow.style.opacity = "1";

      const target = e.target as HTMLElement;

      active = target.tagName === "A" || target.tagName === "BUTTON";

      if (active) {
        ring.classList.add("scale-150");
      } else {
        ring.classList.remove("scale-150");
      }
    };

    const animate = () => {
      glowX += (mouseX - glowX) * 0.08;

      glowY += (mouseY - glowY) * 0.08;

      glow.style.transform = `translate3d(${glowX}px,${glowY}px,0)`;

      requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", move);

    const raf = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", move);

      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      className="
pointer-events-none
fixed
inset-0
z-[100]
hidden
md:block
"
    >
      {/* Big Aura */}

      <div
        ref={glowRef}
        className="
absolute
left-0
top-0
h-[500px]
w-[500px]
-translate-x-1/2
-translate-y-1/2
rounded-full
opacity-0
transition-opacity
duration-700
"
        style={{
          background:
            "radial-gradient(circle, rgba(0,255,255,.18), rgba(124,58,237,.10) 35%, transparent 70%)",
        }}
      />

      {/* Outer Ring */}

      <div
        ref={ringRef}
        className="
absolute
left-0
top-0
h-10
w-10
-translate-x-1/2
-translate-y-1/2
rounded-full
border
border-electric/50
transition-transform
duration-300
"
      ></div>

      {/* Core */}

      <div
        ref={coreRef}
        className="
absolute
left-0
top-0
h-2
w-2
-translate-x-1/2
-translate-y-1/2
rounded-full
bg-white
shadow-[0_0_20px_rgba(0,255,255,.9)]
"
      ></div>
    </div>
  );
}
