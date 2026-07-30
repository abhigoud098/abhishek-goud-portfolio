"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { timeline } from "@/data/experience";
import Link from "next/link";

gsap.registerPlugin(ScrollTrigger);

export default function Experience() {
  const rootRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Timeline Progress
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
            start: "top 70%",
            end: "bottom 70%",
            scrub: 1,
          },
        },
      );

      // Cards
      gsap.utils
        .toArray<HTMLElement>(".timeline-entry")
        .forEach((entry, index) => {
          gsap.fromTo(
            entry,
            {
              opacity: 0,
              y: 80,
              rotateX: -12,
              scale: 0.95,
            },
            {
              opacity: 1,
              y: 0,
              rotateX: 0,
              scale: 1,
              duration: 1,
              delay: index * 0.12,
              ease: "power4.out",
              scrollTrigger: {
                trigger: entry,
                start: "top 85%",
              },
            },
          );
        });

      // Dots
      gsap.utils.toArray<HTMLElement>(".timeline-dot").forEach((dot) => {
        gsap.fromTo(
          dot,
          {
            scale: 0,
            opacity: 0,
          },
          {
            scale: 1,
            opacity: 1,
            duration: 0.5,
            ease: "back.out(2)",
            scrollTrigger: {
              trigger: dot,
              start: "top 90%",
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
      className="relative overflow-hidden section-pad"
    >
      {/* Background */}

      <div className="absolute inset-0 -z-20 bg-grid-white/[0.02]" />

      <div className="absolute left-0 top-24 h-80 w-80 rounded-full bg-electric/10 blur-[160px]" />

      <div className="absolute right-0 bottom-20 h-[420px] w-[420px] rounded-full bg-violet/10 blur-[180px]" />

      <div className="relative mx-auto max-w-6xl">
        {/* Heading */}

        <div className="mb-24 text-center">
          <p className="eyebrow mb-4 font-mono tracking-[0.4em] text-electric">
            EXPERIENCE
          </p>

          <h2 className="font-display text-5xl font-semibold text-ink sm:text-7xl">
            Building Products,
            <br />
            <span className="grad-text">One Experience at a Time.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-ink-dim">
            From internships to startups, every experience strengthened my
            skills in building scalable, user-focused web applications.
          </p>
        </div>

        {/* Timeline */}

        <div className="timeline-track relative pl-12">
          {/* Base Line */}

          <div className="absolute left-[9px] top-0 h-full w-[2px] bg-white/10" />

          {/* Animated Line */}

          <div className="timeline-line absolute left-[9px] top-0 h-full w-[2px] origin-top bg-gradient-to-b from-electric via-violet to-transparent" />

          <div className="flex flex-col gap-20">
            {timeline.map((entry, index) => (
              <div key={index} className="timeline-entry relative">
                {/* Timeline Dot */}

                <div className="timeline-dot absolute -left-[48px] top-12 flex h-7 w-7 items-center justify-center rounded-full border border-electric/30 bg-void">
                  <div className="absolute h-6 w-6 animate-ping rounded-full bg-electric/20" />

                  <div className="h-3.5 w-3.5 rounded-full bg-electric shadow-[0_0_22px_rgba(0,255,255,.9)]" />
                </div>

                {/* Card */}

                <div
                  className="
                    group
                    relative
                    overflow-hidden
                    rounded-3xl
                    border
                    border-white/10
                    bg-white/[0.03]
                    p-8
                    backdrop-blur-xl
                    transition-all
                    duration-500
                    hover:-translate-y-3
                    hover:border-electric/30
                  "
                >
                  {/* Animated Border */}

                  <div className="absolute inset-0 rounded-3xl opacity-0 transition duration-700 group-hover:opacity-100">
                    <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-electric/10 via-violet/10 to-electric/10 blur-xl" />
                  </div>

                  {/* Glow */}

                  <div className="absolute -right-20 -top-20 h-44 w-44 rounded-full bg-electric/10 blur-3xl transition duration-700 group-hover:scale-150" />

                  <div className="relative z-10">
                    {/* Header */}

                    <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
                      <div className="flex items-center gap-3">
                        <span className="rounded-full border border-electric/30 bg-electric/10 px-4 py-1 text-xs font-mono uppercase tracking-wider text-electric">
                          {entry.duration}
                        </span>

                        <span className="rounded-full border border-violet/30 bg-violet/10 px-3 py-1 text-[10px] font-mono uppercase tracking-[0.25em] text-violet">
                          {entry.type}
                        </span>
                      </div>

                      <span className="font-mono text-xs text-ink-faint">
                        0{index + 1}
                      </span>
                    </div>

                    <h3 className="font-display text-3xl font-semibold text-ink">
                      {entry.role}
                    </h3>

                    <p className="mt-2 font-mono text-electric">
                      {entry.company}
                    </p>

                    <p className="mt-5 max-w-2xl leading-8 text-ink-dim">
                      {entry.description}
                    </p>

                    {/* Tech Stack */}

                    <div className="mt-8 flex flex-wrap gap-2">
                      {["React", "Next.js", "TypeScript", "Tailwind CSS", "Web3"].map(
                        (tech) => (
                          <span
                            key={tech}
                            className="
                            rounded-full
                            border
                            border-white/10
                            bg-white/5
                            px-3
                            py-1
                            text-xs
                            font-mono
                            text-ink-dim
                            transition-all
                            duration-300
                            hover:border-electric/30
                            hover:bg-electric/10
                            hover:text-electric
                          "
                          >
                            {tech}
                          </span>
                        ),
                      )}
                    </div>

                    {/* Footer */}

                    <div className="mt-8 flex items-center justify-between">
                      <div className="flex items-center gap-2 text-sm text-ink-faint">
                        <span>Professional Experience</span>
                      </div>

                      <div
                        className="
                          flex
                          items-center
                          gap-2
                          text-electric
                          transition-all
                          duration-300
                          group-hover:translate-x-2
                        "
                      >
                        <span className="text-sm font-medium">
                          <Link href="https://www.linkedin.com/company/codes-for-tomorrow/posts/?feedView=all">About Startup</Link>
                        </span>

                        <svg
                          className="h-4 w-4"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 12h14M13 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Shine Effect */}

                  <div
                    className="
                      pointer-events-none
                      absolute
                      inset-0
                      -translate-x-full
                      bg-gradient-to-r
                      from-transparent
                      via-white/10
                      to-transparent
                      transition-transform
                      duration-1000
                      group-hover:translate-x-full
                    "
                  />
                </div>

                {/* Connector */}

                {index !== timeline.length - 1 && (
                  <div
                    className="
                      absolute
                      left-[-39px]
                      top-full
                      h-10
                      w-[2px]
                      bg-gradient-to-b
                      from-electric/50
                      to-transparent
                    "
                  />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
