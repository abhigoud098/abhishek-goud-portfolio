export type SkillCategory = {
  id: string;
  label: string;
  index: string;
  skills: {
    name: string;
    level: number;
    icon: React.ElementType;
  }[];
};

import {
  SiHtml5,
  SiCss,
  SiJavascript,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiExpress,
  SiMongodb,
  SiGsap,
  SiFramer,
  SiRedux,
  SiGit,
  SiGithub,
  SiFigma,
} from "react-icons/si";

export const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    label: "Frontend",
    index: "FE",

    skills: [
      {
        name: "HTML5",
        level: 95,
        icon: SiHtml5,
      },

      {
        name: "CSS3",
        level: 92,
        icon: SiCss,
      },

      {
        name: "JavaScript",
        level: 90,
        icon: SiJavascript,
      },
      {
        name: "React.js",
        level: 88,
        icon: SiReact,
      },

      {
        name: "Next.js",
        level: 82,
        icon: SiNextdotjs,
      },

      {
        name: "TypeScript",
        level: 78,
        icon: SiTypescript,
      },

      {
        name: "Tailwind CSS",
        level: 90,
        icon: SiTailwindcss,
      },
    ],
  },

  {
    id: "backend",
    label: "Backend",
    index: "BE",

    skills: [
      {
        name: "Node.js",
        level: 80,
        icon: SiNodedotjs,
      },

      {
        name: "Express.js",
        level: 78,
        icon: SiExpress,
      },

      {
        name: "MongoDB",
        level: 75,
        icon: SiMongodb,
      },
    ],
  },

  {
    id: "tools",
    label: "Tools",
    index: "TL",

    skills: [
      {
        name: "Git",
        level: 88,
        icon: SiGit,
      },

      {
        name: "GitHub",
        level: 88,
        icon: SiGithub,
      },

      {
        name: "Figma",
        level: 70,
        icon: SiFigma,
      },

      {
        name: "GSAP",
        level: 75,
        icon: SiGsap,
      },

      {
        name: "Framer Motion",
        level: 80,
        icon: SiFramer,
      },

      {
        name: "Redux Toolkit",
        level: 78,
        icon: SiRedux,
      },
    ],
  },
];
