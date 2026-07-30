export type Project = {
  id: string;
  index: string;
  name: string;
  description: string;
  stack: string[];
  liveUrl: string;
  githubUrl: string;
  image: string;
  accent: "electric" | "violet" | "magenta";
};

export const projects: Project[] = [
  {
    id: "shopverse",
    index: "01",
    name: "ShopVerse",
    description:
      "A premium React e-commerce platform featuring product discovery, shopping cart, wishlist, API integration, responsive design, and smooth user interactions.",
    stack: ["React", "Tailwind CSS", "Context API", "Vite", "REST API"],
    image: "/Shopverce.png",
    liveUrl: "https://shopverce-app-9ydm.vercel.app/",
    githubUrl: "https://github.com/abhigoud098/shopverce-app",
    accent: "electric",
  },

  {
    id: "secret-notes-vault",
    index: "02",
    name: "Secret Notes Vault",
    description:
      "A secure full-stack notes application with JWT authentication, MongoDB storage, protected routes, and a clean writing experience.",
    stack: ["Next.js", "Node.js", "Express", "MongoDB", "JWT"],
    image: "/images/notes.png",
    liveUrl: "#",
    githubUrl: "#",
    accent: "violet",
  },

  {
    id: "portfolio",
    index: "03",
    name: "Developer Portfolio",
    description:
      "A cinematic portfolio crafted with Next.js, GSAP and Framer Motion, focused on storytelling, immersive animations, and premium user experience.",
    stack: ["Next.js", "TypeScript", "GSAP", "Framer Motion", "Tailwind CSS"],
    image: "/images/portfolio.png",
    liveUrl: "#",
    githubUrl: "#",
    accent: "magenta",
  },
];
