"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { projects } from "@/data/projects";
import ProjectItem from "./ui/ProjectsItem";

gsap.registerPlugin(ScrollTrigger);

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate timeline line
      gsap.fromTo(
        lineRef.current,
        {
          scaleY: 0,
          transformOrigin: "top",
        },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 70%",
            end: "bottom bottom",
            scrub: true,
          },
        },
      );

      // Reveal project sections
      gsap.utils.toArray<HTMLElement>(".project-item").forEach((item) => {
        gsap.fromTo(
          item,
          {
            opacity: 0,
            y: 80,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: item,
              start: "top 80%",
            },
          },
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative overflow-hidden py-32"
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-24 h-[450px] w-[450px] -translate-x-1/2 rounded-full bg-electric/20 blur-[180px]" />

      <div className="relative mx-auto max-w-7xl px-6">
        {/* Heading */}
        <div className="mb-28 text-center">
          <p className="mb-4 font-mono uppercase tracking-[0.35em] text-electric">
            Selected Work
          </p>

          <h2 className="font-display text-5xl font-semibold text-ink md:text-7xl">
            Projects built to be <span className="grad-text">experienced.</span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-ink-dim">
            Every project is crafted with attention to performance, interaction,
            and user experience.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div
            ref={lineRef}
            className="absolute left-1/2 top-0 hidden h-full w-[3px] -translate-x-1/2 rounded-full bg-gradient-to-b from-electric via-violet to-transparent lg:block"
          />

          {/* Projects */}
          <div className="space-y-40">
            {projects.map((project, index) => (
              <ProjectItem
                key={project.id}
                project={project}
                reverse={index % 2 === 1}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
