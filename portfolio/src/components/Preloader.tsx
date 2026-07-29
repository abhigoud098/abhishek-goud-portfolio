"use client";

import { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export default function Preloader({ onComplete }: { onComplete: () => void }) {
  const rootRef = useRef<HTMLDivElement>(null);
  const counterRef = useRef<HTMLSpanElement>(null);
  const circleRef = useRef<SVGCircleElement>(null);
  const barRef = useRef<HTMLDivElement>(null);
  const statusRef = useRef<HTMLDivElement>(null);

  const logoRef = useRef<HTMLDivElement>(null);

  const topRef = useRef<HTMLDivElement>(null);
  const bottomRef = useRef<HTMLDivElement>(null);

  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const counter = {
        value: 0,
      };

      const messages = [
        "BOOTING SYSTEM",
        "LOADING COMPONENTS",
        "CONNECTING DATABASE",
        "OPTIMIZING EXPERIENCE",
        "READY",
      ];

      const tl = gsap.timeline({
        onComplete() {
          setHidden(true);
          onComplete();
        },
      });

      // logo intro

      tl.fromTo(
        logoRef.current,
        {
          opacity: 0,
          scale: 0.8,
          y: 20,
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1,
          ease: "power4.out",
        },
      )

        // progress

        .to(counter, {
          value: 100,

          duration: 2.8,

          ease: "power3.inOut",

          onUpdate() {
            const value = Math.floor(counter.value);

            if (counterRef.current) {
              counterRef.current.textContent = value
                .toString()
                .padStart(3, "0");
            }

            if (statusRef.current) {
              const index = Math.floor(value / 20);

              statusRef.current.textContent = messages[index] || "READY";
            }

            if (circleRef.current) {
              const circumference = 440;

              circleRef.current.style.strokeDashoffset = `${
                circumference - (value / 100) * circumference
              }`;
            }
          },
        })

        // progress bar

        .to(
          barRef.current,
          {
            scaleX: 1,
            duration: 2.5,
            ease: "power3.inOut",
          },
          0,
        )

        // zoom exit

        .to(rootRef.current, {
          scale: 1.15,
          opacity: 0,
          filter: "blur(20px)",
          duration: 0.7,
          ease: "power3.in",
        })

        .to(
          topRef.current,
          {
            yPercent: -100,
            duration: 1.1,
            ease: "power4.inOut",
          },
          "-=.3",
        )

        .to(
          bottomRef.current,
          {
            yPercent: 100,
            duration: 1.1,
            ease: "power4.inOut",
          },
          "<",
        );
    }, rootRef);

    return () => ctx.revert();
  }, [onComplete]);

  if (hidden) return null;

  return (
    <div
      ref={rootRef}
      className="
fixed
inset-0
z-[999]
flex
items-center
justify-center
overflow-hidden
bg-[#050505]
"
    >
      {/* panels */}

      <div
        ref={topRef}
        className="
absolute
top-0
left-0
h-1/2
w-full
bg-void
"
      />

      <div
        ref={bottomRef}
        className="
absolute
bottom-0
left-0
h-1/2
w-full
bg-void
"
      />

      {/* grid */}

      <div
        className="
absolute
inset-0
opacity-20
bg-[linear-gradient(rgba(255,255,255,.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.08)_1px,transparent_1px)]
bg-[size:40px_40px]
"
      />

      {/* Glow */}

      <div
        className="
absolute
h-[500px]
w-[500px]
rounded-full
bg-electric/20
blur-[160px]
"
      />

      <div
        className="
relative
z-10
flex
flex-col
items-center
gap-8
"
      >
        {/* Logo */}

        <div
          ref={logoRef}
          className="
font-display
text-5xl
font-bold
tracking-widest
text-white
"
        >
          AG<span className="text-electric">.</span>
        </div>

        <p
          className="
font-mono
text-xs
tracking-[.5em]
text-white/40
"
        >
          PORTFOLIO SYSTEM
        </p>

        {/* Ring */}

        <div
          className="
relative
"
        >
          <svg width="200" height="200" className="-rotate-90">
            <circle
              cx="100"
              cy="100"
              r="78"
              fill="none"
              stroke="rgba(255,255,255,.08)"
              strokeWidth="3"
            />

            <circle
              ref={circleRef}
              cx="100"
              cy="100"
              r="78"
              fill="none"
              stroke="url(#gradient)"
              strokeWidth="4"
              strokeDasharray="440"
              strokeDashoffset="440"
            />

            <defs>
              <linearGradient id="gradient">
                <stop offset="0%" stopColor="#00ffff" />

                <stop offset="100%" stopColor="#8b5cf6" />
              </linearGradient>
            </defs>
          </svg>

          <span
            ref={counterRef}
            className="
absolute
inset-0
flex
items-center
justify-center
font-display
text-6xl
text-white
"
          >
            000
          </span>
        </div>

        <div
          ref={statusRef}
          className="
font-mono
text-xs
tracking-[.4em]
text-white/50
"
        >
          BOOTING SYSTEM
        </div>

        <div
          className="
h-[2px]
w-64
overflow-hidden
bg-white/10
"
        >
          <div
            ref={barRef}
            className="
h-full
w-full
origin-left
scale-x-0
bg-gradient-to-r
from-electric
via-violet
to-magenta
"
          />
        </div>

        <p
          className="
font-mono
text-[10px]
tracking-widest
text-white/20
"
        >
          NEXT.JS • GSAP • REACT • TYPESCRIPT
        </p>
      </div>

      {/* noise */}

      <div
        className="
pointer-events-none
absolute
inset-0
opacity-[0.06]
bg-[url('/noise.png')]
"
      />
    </div>
  );
}
