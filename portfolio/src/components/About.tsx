"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const STACK = [
  "React.js",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "Express.js",
  "MongoDB",
  "GSAP",
  "Framer Motion",
  "Redux Toolkit",
];

const JOURNEY = [
  {
    year: "2021",
    title: "Engineering Foundation",
    desc: "Started my journey with Electronics & Communication Engineering and developed a problem-solving mindset.",
  },
  {
    year: "2023",
    title: "Web Development Begins",
    desc: "Started learning HTML, CSS and JavaScript while building my first interactive web experiences.",
  },
  {
    year: "2024",
    title: "Frontend Development",
    desc: "Focused on React, Tailwind CSS and modern UI development with reusable and scalable components.",
  },
  {
    year: "2025",
    title: "Full Stack Growth",
    desc: "Built full-stack applications using React, Next.js, Node.js, Express and MongoDB.",
  },
  {
    year: "2026",
    title: "Building Better Experiences",
    desc: "Improving system design, animations, performance and creating production-ready digital products.",
  },
];

export default function About() {
  const rootRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".terminal-line",
        {
          opacity: 0,
          x: -30,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          stagger: 0.12,
          scrollTrigger: {
            trigger: ".terminal",
            start: "top 85%",
          },
        },
      );

      gsap.fromTo(
        ".journey-item",
        {
          opacity: 0,
          x: -40,
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.7,
          stagger: 0.15,
          scrollTrigger: {
            trigger: ".timeline",
            start: "top 80%",
          },
        },
      );

      gsap.fromTo(
        lineRef.current,
        {
          height: 0,
        },
        {
          height: "100%",
          duration: 2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".timeline",
            start: "top 80%",
          },
        },
      );
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={rootRef}
      className="
      relative
      overflow-hidden

      px-4
      py-20

      sm:px-8
      sm:py-28
      "
    >
      {/* Background Glow */}

      <div
        className="
        absolute
        left-1/2
        top-20

        h-72
        w-72

        -translate-x-1/2

        rounded-full

        bg-electric/20

        blur-[120px]

        sm:h-96
        sm:w-96
        sm:blur-[150px]
        "
      />

      <div
        className="
        relative
        mx-auto
        max-w-6xl
        "
      >
        {/* Heading */}

        <div
          className="
          mb-12
          text-center

          sm:mb-16
          "
        >
          <p className="eyebrow mb-5">ABOUT ME</p>

          <h2
            className="
            font-display

            text-3xl
            leading-tight

            font-semibold

            text-ink

            sm:text-5xl

            md:text-6xl
            "
          >
            Understanding the developer
            <br />
            behind the code.
          </h2>
        </div>

        <div
          className="
          grid

          gap-10

          md:gap-12

          lg:grid-cols-2
          "
        >
          {/* Terminal */}

          <div
            className="
            terminal

            glass-panel

            relative

            overflow-hidden

            p-5

            sm:p-8
            "
          >
            <div
              className="
              mb-8
              flex
              items-center
              gap-2
              "
            >
              <span
                className="
              h-3
              w-3
              rounded-full
              bg-red-400
              "
              />

              <span
                className="
              h-3
              w-3
              rounded-full
              bg-yellow-400
              "
              />

              <span
                className="
              h-3
              w-3
              rounded-full
              bg-green-400
              "
              />
            </div>

            <div
              className="
              space-y-5

              font-mono

              text-xs

              break-words

              sm:text-sm

              md:text-base
              "
            >
              <p className="terminal-line text-ink-dim">$ whoami</p>

              <p className="terminal-line text-electric">Abhishek Goud</p>

              <p className="terminal-line text-ink-dim">$ role</p>

              <p className="terminal-line text-violet">Frontend Developer</p>

              <p className="terminal-line text-ink-dim">$ mission</p>

              <p className="terminal-line text-ink">
                Building fast, scalable and beautiful digital products.
                <span className="animate-pulse">_</span>
              </p>

              <p className="terminal-line text-ink-dim">$ education</p>

              <p className="terminal-line text-electric">
                B.Tech Electronics & Communication Engineering
              </p>

              <p className="terminal-line text-ink-dim">$ currently_learning</p>

              <p className="terminal-line text-ink">
                System Design, Backend Architecture & Performance
              </p>

              <p className="terminal-line text-ink-dim">$ passion</p>

              <p className="terminal-line text-violet">
                UI Engineering + Creative Experiences
              </p>
              <p className="terminal-line mt-6 text-ink-dim">$ stack</p>

              <div
                className="
                flex
                flex-wrap
                gap-2

                pt-3

                sm:gap-3
                "
              >
                {STACK.map((item) => (
                  <span
                    key={item}
                    className="
                    rounded-full

                    border
                    border-white/10

                    bg-white/5

                    px-2.5
                    py-1.5

                    text-[11px]

                    text-ink-dim

                    sm:px-3
                    sm:py-2

                    sm:text-xs
                    "
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Timeline */}

          <div
            className="
            timeline

            relative

            pl-6

            sm:pl-8
            "
          >
            {/* Animated Line */}

            <div
              ref={lineRef}
              className="
              absolute

              left-[5px]

              top-0

              w-[2px]

              bg-gradient-to-b

              from-electric

              via-violet

              to-transparent

              sm:left-[7px]
              "
            />

            {JOURNEY.map((item) => (
              <div
                key={item.year}
                className="
                journey-item

                relative

                mb-10

                sm:mb-12
                "
              >
                {/* Dot */}

                <div
                  className="
                  absolute

                  -left-[29px]

                  top-3

                  h-3.5

                  w-3.5

                  rounded-full

                  bg-electric

                  shadow-lg

                  shadow-electric/50

                  sm:-left-[37px]

                  sm:h-4

                  sm:w-4
                  "
                />

                {/* Card */}

                <div
                  className="
                  glass-panel

                  p-5

                  sm:p-6

                  "
                >
                  <p
                    className="
                    font-mono

                    text-sm

                    text-electric
                    "
                  >
                    {item.year}
                  </p>

                  <h3
                    className="
                    mt-2

                    font-display

                    text-lg

                    text-ink

                    sm:text-xl
                    "
                  >
                    {item.title}
                  </h3>

                  <p
                    className="
                    mt-3

                    text-sm

                    leading-relaxed

                    text-ink-dim
                    "
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
