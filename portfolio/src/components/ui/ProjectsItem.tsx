"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Project } from "@/data/projects";

type ProjectItemProps = {
  project: Project;
  reverse?: boolean;
};

export default function ProjectItem({
  project,
  reverse = false,
}: ProjectItemProps) {
  // Prevent runtime crash
  if (!project) return null;

  return (
    <motion.article
      className="project-item relative"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="absolute left-1/2 top-16 hidden h-5 w-5 -translate-x-1/2 rounded-full border-4 border-void bg-electric shadow-[0_0_25px_rgba(59,130,246,.8)] lg:block" />

      <div
        className={`grid items-center gap-16 lg:grid-cols-2 ${
          reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        <div className="space-y-8">
          <span className="font-mono text-6xl font-bold text-electric/30">
            {project.index}
          </span>

          <div>
            <h2 className="font-display text-4xl font-semibold text-ink lg:text-5xl">
              {project.name}
            </h2>

            <p className="mt-6 text-lg leading-8 text-ink-dim">
              {project.description}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            {project.stack.map((tech) => (
              <span
                key={tech}
                className="rounded-full border border-line bg-white/[0.04] px-4 py-2 text-xs uppercase tracking-widest text-ink-dim transition hover:border-electric hover:text-electric"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex flex-wrap gap-4 pt-2">
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full bg-grad-signal px-6 py-3 text-sm font-medium text-white"
            >
              Live Demo
              <ArrowUpRight size={18} />
            </a>

            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 rounded-full border border-line px-6 py-3 text-sm font-medium text-ink"
            >
              GitHub
              {/* <Github size={18} /> */}
            </a>
          </div>
        </div>

        <div
          className="h-[420px] rounded-3xl border border-line bg-cover bg-center"
          style={{
            backgroundImage: `url(${project.image})`,
          }}
        />
      </div>
    </motion.article>
  );
}
