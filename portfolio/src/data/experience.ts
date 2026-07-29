export type TimelineEntry = {
  id: string;
  phase: string;
  title: string;
  description: string;
};

export const timeline: TimelineEntry[] = [
  {
    id: "engineering-foundation",
    phase: "Phase 01",
    title: "Engineering Foundation",
    description:
      "Started my journey with Electronics & Communication Engineering, developing problem-solving skills and a strong technical foundation.",
  },

  {
    id: "web-development",
    phase: "Phase 02",
    title: "Web Development Journey",
    description:
      "Entered the world of web development by learning semantic HTML, modern CSS, JavaScript fundamentals and building interactive user interfaces.",
  },

  {
    id: "frontend-development",
    phase: "Phase 03",
    title: "Frontend Development",
    description:
      "Focused on React.js, Next.js and Tailwind CSS. Built reusable components, responsive applications and polished user experiences with modern frontend practices.",
  },

  {
    id: "frontend-internship",
    phase: "Phase 04",
    title: "Frontend Developer Internship",
    description:
      "Gained professional experience by contributing to real-world frontend development, creating UI components, improving application performance and following industry workflows.",
  },

  {
    id: "fullstack-development",
    phase: "Phase 05",
    title: "Full Stack Development",
    description:
      "Expanded into backend development with Node.js, Express, MongoDB and REST APIs while building complete applications from database to deployment.",
  },

  {
    id: "production-projects",
    phase: "Phase 06",
    title: "Building Production-Level Experiences",
    description:
      "Currently improving system design, animations, performance optimization and creating scalable digital products with modern technologies.",
  },
];
