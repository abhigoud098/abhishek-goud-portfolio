"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import MagneticButton from "./MagneticButton";
import { useMousePosition } from "@/hooks/useMousePosition";

const TITLE = "Crafting Modern Web Experiences";

const TECH = [
  "Java",
  "JavaScript",
  "React.js",
  "Next.js",
  "TypeScript",
  "Node.js",
  "MongoDB",
  "GSAP",
  "Framer Motion",
];

function splitWords(text: string) {
  const words = text.trim().split(/\s+/);

  return words.map((word, index) => (
    <span key={index} className="hero-word inline-block overflow-hidden mr-5 mb-5">
      <span
        className="word-inner inline-block"
        style={{
          opacity: 0,
          transform: "translateY(100%)",
        }}
      >
        {word}
      </span>
    </span>
  ));
}

export default function Hero({ ready }: { ready: boolean }) {
  const rootRef = useRef<HTMLDivElement>(null);

  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const techRef = useRef<HTMLDivElement>(null);
  const descRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);

  const cardsRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  const { normalized } = useMousePosition();

  useEffect(() => {
    if (!ready) return;

    const ctx = gsap.context(() => {
      const words = titleRef.current?.querySelectorAll(".word-inner");

      const cards = cardsRef.current?.querySelectorAll(".floating-card");

      const tl = gsap.timeline({
        defaults: {
          ease: "power4.out",
        },
      });

      tl.to(words, {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.12,
      })

        .fromTo(
          subtitleRef.current,
          {
            opacity: 0,
            y: 40,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
          },
          "-=.5",
        )

        .fromTo(
          techRef.current,
          {
            opacity: 0,
            scale: 0.8,
          },
          {
            opacity: 1,
            scale: 1,
            duration: 0.7,
          },
          "-=.5",
        )

        .fromTo(
          descRef.current,
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
          },
          "-=.4",
        )

        .fromTo(
          buttonsRef.current,
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.7,
          },
          "-=.4",
        )

        .fromTo(
          statsRef.current,
          {
            opacity: 0,
            y: 20,
          },
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
          },
          "-=.3",
        )

        .fromTo(
          cards,
          {
            opacity: 0,
            scale: 0.6,
            rotateX: 40,
          },
          {
            opacity: 1,
            scale: 1,
            rotateX: 0,
            duration: 1,
            stagger: 0.15,
          },
          "-=1",
        );

      gsap.to(cards, {
        y: "+=25",
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.4,
      });

      gsap.to(".energy-ring", {
        rotate: 360,
        duration: 25,
        repeat: -1,
        ease: "none",
      });
    }, rootRef);

    return () => ctx.revert();
  }, [ready]);

  useEffect(() => {
    let raf: number;

    const move = () => {
      const { x, y } = normalized.current;

      if (cardsRef.current) {
        cardsRef.current.style.transform = `
          rotateX(${-y * 8}deg)
          rotateY(${x * 10}deg)
        `;
      }

      if (glowRef.current) {
        glowRef.current.style.transform = `
          translate3d(
          ${x * 40}px,
          ${y * 40}px,
          0
          )
        `;
      }

      raf = requestAnimationFrame(move);
    };

    raf = requestAnimationFrame(move);

    return () => cancelAnimationFrame(raf);
  }, [normalized]);

  return (
    <section
      id="top"
      ref={rootRef}
      className="
      relative
      flex
      min-h-screen
      items-center
      justify-center
      overflow-hidden
      bg-void
      px-5
      py-24
      "
    >
      {/* Giant Background Logo */}

      <div
        className="
        pointer-events-none
        absolute
        inset-0
        flex
        items-center
        justify-center
        "
      >
        <h1
          className="
          select-none
          font-black
          tracking-tighter
          text-[40vw]
          text-white/[0.025]
          "
        >
          AG
        </h1>
      </div>

      {/* Moving Glow */}

      <div
        ref={glowRef}
        className="
        pointer-events-none
        absolute
        left-1/2
        top-1/2
        h-[500px]
        w-[500px]
        -translate-x-1/2
        -translate-y-1/2
        rounded-full
        bg-electric/20
        blur-[140px]
        "
      />

      {/* Energy Rings */}

      <div
        className="
        pointer-events-none
        absolute
        left-1/2
        top-1/2
        -translate-x-1/2
        -translate-y-1/2
        "
      >
        <div
          className="
          energy-ring
          h-[450px]
          w-[450px]
          rounded-full
          border
          border-electric/20
          "
        />

        <div
          className="
          absolute
          inset-10
          rounded-full
          border
          border-violet/20
          "
        />
      </div>

      {/* Grid */}

      <div
        className="
        pointer-events-none
        absolute
        inset-0
        opacity-[0.06]
        "
        style={{
          backgroundImage: `
          linear-gradient(
          rgba(255,255,255,.5) 1px,
          transparent 1px
          ),
          linear-gradient(
          90deg,
          rgba(255,255,255,.5) 1px,
          transparent 1px
          )
          `,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Floating Cards */}

      <div
        ref={cardsRef}
        className="
        pointer-events-none
        absolute
        inset-0
        [perspective:1200px]
        "
      >
        {["React.js", "Next.js", "TypeScript", "GSAP"].map((item, index) => (
          <div
            key={item}
            className={`
            floating-card
            glass-panel
            absolute
            flex
            h-20
            w-32
            items-center
            justify-center

            ${index === 0 ? "left-[10%] top-[20%]" : ""}

            ${index === 1 ? "right-[10%] top-[18%]" : ""}

            ${index === 2 ? "bottom-[18%] left-[12%]" : ""}

            ${index === 3 ? "bottom-[18%] right-[12%]" : ""}
            `}
          >
            <span
              className="
              font-mono
              text-xs
              text-ink-dim
              "
            >
              {item}
            </span>
          </div>
        ))}
      </div>

      {/* Main Content */}

      <div
        className="
        relative
        z-10
        mx-auto
        flex
        max-w-5xl
        flex-col
        items-center
        text-center
        "
      >
        <p
          ref={subtitleRef}
          className="
          mb-6
          font-mono
          text-[40px]
          uppercase
          tracking-[0.4em]
          text-electric
          "
        >
          Frontend Developer
        </p>

        <h1
          ref={titleRef}
          className="
          max-w-5xl
          font-display
          text-5xl
          font-semibold
          leading-[1.05]
          tracking-tight
          text-ink

          sm:text-7xl
          lg:text-8xl
          mt-10
          "
        >
          {splitWords(TITLE)}
        </h1>

        <div
          ref={techRef}
          className="
          mt-10
          flex
          flex-wrap
          justify-center
          gap-3
          "
        >
          {/* {TECH.map((tech) => (
            <span
              key={tech}
              className="
              rounded-full
              border
              border-white/10
              bg-white/5
              px-5
              py-2
              font-mono
              text-xs
              uppercase
              tracking-wider
              text-ink-dim
              backdrop-blur-xl
              transition
              hover:border-electric/40
              hover:text-electric
              "
            >
              {tech}
            </span>
          ))} */}
        </div>

        {/* <p
          ref={descRef}
          className="
          mt-8
          max-w-2xl
          text-base
          leading-relaxed
          text-ink-dim
          sm:text-lg
          "
        >
          Building scalable, interactive and visually rich web applications
          using modern technologies with focus on performance, accessibility and
          user experience.
        </p> */}

        <div
          ref={buttonsRef}
          className="
          mt-10
          flex
          flex-col
          gap-4

          sm:flex-row
          "
        >
          <MagneticButton href="#projects" variant="primary">
            Explore Work
          </MagneticButton>

          <MagneticButton href="#contact" variant="ghost">
            Let's Connect
          </MagneticButton>
        </div>

        <div
          ref={statsRef}
          className="
          mt-16
          flex
          gap-10
          sm:gap-20
          "
        >
          <div>
            <h3
              className="
              text-3xl
              font-bold
              text-ink
              "
            >
              15+
            </h3>

            <p
              className="
              text-xs
              text-ink-dim
              "
            >
              Projects
            </p>
          </div>

          <div>
            <h3
              className="
              text-3xl
              font-bold
              text-ink
              "
            >
              10+
            </h3>

            <p
              className="
              text-xs
              text-ink-dim
              "
            >
              Technologies
            </p>
          </div>

          <div>
            <h3
              className="
              text-3xl
              font-bold
              text-ink
              "
            >
              ∞
            </h3>

            <p
              className="
              text-xs
              text-ink-dim
              "
            >
              Growth
            </p>
          </div>
        </div>
      </div>

      {/* Scroll */}

      <div
        className="
        absolute
        bottom-8
        left-1/2
        hidden
        -translate-x-1/2
        flex-col
        items-center
        md:flex
        "
      >
        <span
          className="
          font-mono
          text-[10px]
          uppercase
          tracking-[0.4em]
          text-ink-faint
          "
        >
          Scroll
        </span>

        <div
          className="
          mt-3
          h-12
          w-px
          bg-gradient-to-b
          from-electric
          to-transparent
          "
        />
      </div>
    </section>
  );
}
