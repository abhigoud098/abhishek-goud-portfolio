"use client";

import { useEffect, useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import { projects } from "@/data/projects";

gsap.registerPlugin(ScrollTrigger);

const accentClasses = {
  electric: "from-electric/30 via-electric/10 to-transparent",
  violet: "from-violet/30 via-violet/10 to-transparent",
  magenta: "from-magenta/30 via-magenta/10 to-transparent",
} as const;

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  const cardRef = useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [12, -12]), {
    stiffness: 200,
    damping: 20,
  });

  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-12, 12]), {
    stiffness: 200,
    damping: 20,
  });

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();

    if (!rect) return;

    x.set((e.clientX - rect.left) / rect.width - 0.5);

    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const reset = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.article
      ref={cardRef}
      onMouseMove={handleMove}
      onMouseLeave={reset}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 900,
      }}
      initial={{
        opacity: 0,
        y: 50,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.3,
      }}
      transition={{
        duration: 0.7,
      }}
      whileHover={{
        scale: 1.03,
      }}
      className="
project-card
group
glass-panel
relative
flex
w-full
flex-shrink-0
flex-col
overflow-hidden
md:h-[460px]
md:w-[450px]
"
    >
      {/* Glow */}

      <div
        className="
pointer-events-none
absolute
inset-0
bg-gradient-to-br
from-white/10
via-transparent
to-transparent
opacity-0
transition-opacity
duration-500
group-hover:opacity-100
"
      />

      {/* Preview */}

      <div
        className={`
relative
flex
h-52
items-center
justify-center
overflow-hidden
border-b
bg-gradient-to-br
${accentClasses[project.accent]}
`}
      >
        <motion.span
          animate={{
            y: [0, -10, 0],
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
          }}
          className="
font-mono
text-7xl
font-bold
text-white/10
"
        >
          {project.index}
        </motion.span>

        <div
          className="
absolute
inset-0
opacity-20
"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.4) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.4) 1px,transparent 1px)",

            backgroundSize: "30px 30px",
          }}
        />
      </div>

      {/* Content */}

      <div
        className="
relative
flex
flex-1
flex-col
p-7
"
      >
        <h3
          className="
font-display
text-2xl
font-medium
text-ink
"
        >
          {project.name}
        </h3>

        <p
          className="
mt-4
flex-1
text-sm
leading-relaxed
text-ink-dim
"
        >
          {project.description}
        </p>

        <div
          className="
mt-6
flex
flex-wrap
gap-2
"
        >
          {project.stack.map((tech) => (
            <span
              key={tech}
              className="
rounded-full
border
border-line
bg-white/[0.03]
px-3
py-1
font-mono
text-[10px]
uppercase
tracking-wider
text-ink-dim
"
            >
              {tech}
            </span>
          ))}
        </div>

        <div
          className="
mt-7
flex
gap-3
"
        >
          <a
            href={project.liveUrl}
            className="
group/btn
flex-1
rounded-full
bg-grad-signal
py-3
text-center
text-xs
font-medium
text-white
shadow-glow
transition
hover:scale-105
"
          >
            <span>View Live</span>
          </a>

          <a
            href={project.githubUrl}
            className="
flex-1
rounded-full
border
border-line
py-3
text-center
text-xs
font-medium
text-ink
transition
hover:bg-white/5
"
          >
            Source
          </a>
        </div>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);

  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;

    const track = trackRef.current;

    if (!section || !track) return;

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();

      mm.add("(min-width:768px)", () => {
        const distance = track.scrollWidth - section.clientWidth;

        const tween = gsap.to(track, {
          x: -distance,
          ease: "none",

          scrollTrigger: {
            trigger: section,
            start: "top top",
            end: `+=${distance}`,
            scrub: 1,
            pin: true,
            invalidateOnRefresh: true,
          },
        });

        return () => {
          tween.scrollTrigger?.kill();
        };
      });
    }, section);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="
relative
overflow-hidden
bg-void
py-28
md:py-0
"
    >
      <div
        className="
absolute
left-1/2
top-20
h-96
w-96
-translate-x-1/2
rounded-full
bg-electric/20
blur-[150px]
"
      />

      <div
        className="
px-6
md:absolute
md:left-24
md:top-24
"
      >
        <p className="eyebrow mb-4">SELECTED WORK</p>

        <h2
          className="
max-w-md
font-display
text-4xl
font-semibold
text-ink
"
        >
          Projects built to be
          <span className="grad-text">experienced.</span>
        </h2>

        <p
          className="
mt-5
max-w-sm
text-sm
text-ink-dim
"
        >
          Real applications focused on UI, performance and user experience.
        </p>
      </div>

      <div
        ref={trackRef}
        className="
flex
flex-col
gap-8
px-6
pt-16
md:h-screen
md:flex-row
md:items-center
md:gap-10
md:px-24
md:pt-40
"
      >
        {projects.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
}
