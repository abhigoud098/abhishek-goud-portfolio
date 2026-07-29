"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { timeline } from "@/data/experience";

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".timeline-line",
        {
          scaleY: 0,
        },
        {
          scaleY: 1,
          ease: "none",
          transformOrigin: "top",

          scrollTrigger: {
            trigger: ".timeline-track",
            start: "top 65%",
            end: "bottom 70%",
            scrub: 1,
          },
        },
      );

      gsap.utils
        .toArray<HTMLElement>(".timeline-entry")
        .forEach((entry, index) => {
          gsap.fromTo(
            entry,
            {
              opacity: 0,
              x: -60,
              rotateX: -15,
            },
            {
              opacity: 1,
              x: 0,
              rotateX: 0,

              duration: 0.9,
              delay: index * 0.1,

              ease: "power3.out",

              scrollTrigger: {
                trigger: entry,
                start: "top 85%",
              },
            },
          );
        });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="experience"
      ref={rootRef}
      className="
        relative
        overflow-hidden
        section-pad
      "
    >
      {/* Background Glow */}

      <div
        className="
          absolute
          right-0
          top-40
          h-96
          w-96
          rounded-full
          bg-violet/20
          blur-[150px]
        "
      />

      <div
        className="
          relative
          mx-auto
          max-w-5xl
        "
      >
        {/* Heading */}

        <div className="mb-20">
          <p className="eyebrow mb-4">EXPERIENCE</p>

          <h2
            className="
              font-display
              text-4xl
              font-semibold
              text-ink
              sm:text-6xl
            "
          >
            Building the stack,
            <br />
            <span className="grad-text">one layer at a time.</span>
          </h2>

          <p
            className="
              mt-5
              max-w-xl
              text-ink-dim
            "
          >
            My journey from learning fundamentals to building real-world
            applications and professional experiences.
          </p>
        </div>

        {/* Timeline */}

        <div
          className="
            timeline-track
            relative
            pl-10
          "
        >
          {/* Base Line */}

          <div
            className="
              absolute
              left-[7px]
              top-0
              h-full
              w-[2px]
              bg-white/10
            "
          />

          {/* Animated Line */}

          <div
            className="
              timeline-line
              absolute
              left-[7px]
              top-0
              h-full
              w-[2px]
              origin-top
              bg-gradient-to-b
              from-electric
              via-violet
              to-transparent
            "
          />

          <div
            className="
              flex
              flex-col
              gap-16
            "
          >
            {timeline.map((entry, index) => (
              <div
                key={entry.id}
                className="
                  timeline-entry
                  relative
                "
              >
                {/* Timeline Dot */}

                <div
                  className="
                    absolute
                    -left-[40px]
                    top-8
                    flex
                    h-5
                    w-5
                    items-center
                    justify-center
                    rounded-full
                    bg-void
                  "
                >
                  <div
                    className="
                      h-3
                      w-3
                      rounded-full
                      bg-electric
                      shadow-[0_0_20px_rgba(0,255,255,.8)]
                    "
                  />
                </div>

                {/* Card */}

                <div
                  className="
                    glass-panel
                    group
                    relative
                    overflow-hidden
                    p-7
                    transition-all
                    duration-500
                    hover:-translate-y-2
                  "
                >
                  {/* Hover Glow */}

                  <div
                    className="
                      absolute
                      inset-0
                      bg-gradient-to-br
                      from-electric/10
                      via-transparent
                      to-transparent
                      opacity-0
                      transition
                      duration-500
                      group-hover:opacity-100
                    "
                  />

                  <div className="relative z-10">
                    {/* Header */}

                    <div
                      className="
                        mb-5
                        flex
                        items-center
                        justify-between
                        gap-4
                      "
                    >
                      <div className="flex items-center gap-3">
                        <span
                          className="
                            rounded-full
                            border
                            border-electric/30
                            bg-electric/10
                            px-4
                            py-1
                            font-mono
                            text-xs
                            text-electric
                          "
                        >
                          0{index + 1}
                        </span>

                        {entry.title.includes("Intern") && (
                          <span
                            className="
                              rounded-full
                              border
                              border-violet/30
                              bg-violet/10
                              px-3
                              py-1
                              font-mono
                              text-[10px]
                              uppercase
                              tracking-wider
                              text-violet
                            "
                          >
                            Internship
                          </span>
                        )}
                      </div>

                      <p
                        className="
                          font-mono
                          text-xs
                          uppercase
                          tracking-widest
                          text-ink-faint
                        "
                      >
                        {entry.phase}
                      </p>
                    </div>

                    <h3
                      className="
                        font-display
                        text-2xl
                        font-medium
                        text-ink
                      "
                    >
                      {entry.title}
                    </h3>

                    <p
                      className="
                        mt-3
                        max-w-xl
                        leading-relaxed
                        text-sm
                        text-ink-dim
                      "
                    >
                      {entry.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
