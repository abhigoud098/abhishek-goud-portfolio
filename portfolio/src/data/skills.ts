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
  SiPostman
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
        level: 85,
        icon: SiCss,
      },

      {
        name: "JavaScript",
        level: 75,
        icon: SiJavascript,
      },
      {
        name: "React.js",
        level: 70,
        icon: SiReact,
      },

      {
        name: "Next.js",
        level: 60,
        icon: SiNextdotjs,
      },

      {
        name: "TypeScript",
        level: 75,
        icon: SiTypescript,
      },

      {
        name: "Tailwind CSS",
        level: 85,
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
        level: 70,
        icon: SiNodedotjs,
      },

      {
        name: "Express.js",
        level: 70,
        icon: SiExpress,
      },

      {
        name: "MongoDB",
        level: 65,
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
        level: 70,
        icon: SiGit,
      },

      {
        name: "GitHub",
        level: 75,
        icon: SiGithub,
      },

      {
        name: "Figma",
        level: 80,
        icon: SiFigma,
      },

      {
        name: "GSAP",
        level: 70,
        icon: SiGsap,
      },

      {
        name: "Framer Motion",
        level: 60,
        icon: SiFramer,
      },

      {
        name: "Redux Toolkit",
        level: 85,
        icon: SiRedux,
      },

       {
        name: "Postmen",
        level: 70,
        icon: SiPostman,
      },
    ],
  },
];
