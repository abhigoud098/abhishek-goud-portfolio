export type Project = {
  id: string;
  index: string;
  name: string;
  description: string;
  stack: string[];
  liveUrl: string;
  githubUrl: string;
  accent: "electric" | "violet" | "magenta";
};

export const projects: Project[] = [
  {
    id: "shopverse",
    index: "01",
    name: "ShopVerse",
    description:
      "A full-featured React e-commerce experience with dynamic product listings, cart state, and a responsive layout tuned down to the smallest breakpoint.",
    stack: ["React", "Tailwind CSS", "Context API", "Vite"],
    liveUrl: "#",
    githubUrl: "#",
    accent: "electric",
  },
  {
    id: "secret-notes-vault",
    index: "02",
    name: "Secret Notes Vault",
    description:
      "A full-stack secure notes application with authenticated sessions, encrypted storage, and a clean editing surface built for speed.",
    stack: ["Next.js", "Node.js", "MongoDB", "JWT"],
    liveUrl: "#",
    githubUrl: "#",
    accent: "violet",
  },
  {
    id: "portfolio",
    index: "03",
    name: "Portfolio Website",
    description:
      "This site — a cinematic, GSAP-animated developer portfolio built to feel like a high-end studio brand rather than a template.",
    stack: ["Next.js", "GSAP", "Framer Motion", "Lenis"],
    liveUrl: "#",
    githubUrl: "#",
    accent: "magenta",
  },
];
