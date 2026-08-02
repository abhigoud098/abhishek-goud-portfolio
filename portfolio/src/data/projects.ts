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
    id: "DevOs",
    index: "01",
    name: "DevOS",
    description:
      "DevOS is a personal desktop web application built for developers who want one place to manage everything they learn.",
    stack: ["Next.js", "Tailwind CSS", "TypeScript", "Zustand", "Dexie"],
    image: "/devos.png",
    liveUrl: "https://devos-t527.vercel.app/",
    githubUrl: "https://github.com/abhigoud098/devos",
    accent: "electric",
  },

  {
    id: "shopverse",
    index: "02",
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
    id: "portfolio",
    index: "03",
    name: "Portfolio",
    description:
      "A cinematic portfolio crafted with Next.js, GSAP and Framer Motion, focused on storytelling, immersive animations, and premium user experience.",
    stack: ["Next.js", "TypeScript", "GSAP", "Framer Motion", "Tailwind CSS"],
    image: "/Portfolio.png",
    liveUrl: "https://abhishek-goud-portfolio-5kb8.vercel.app/",
    githubUrl: "https://github.com/abhigoud098/abhishek-goud-portfolio",
    accent: "magenta",
  },

  {
    id: "ShopSavy",
    index: "04",
    name: "ShopSavy",
    description:
      "ShopSavy is a lightweight web app for shop owners to manage products, orders, and inventory quickly — no notebooks, just a clean dashboard.",
    stack: ["Next.js", "RestApis", "CSS3", "MongoDB"],
    image: "/Shopsevy.png",
    liveUrl: "https://stocksavy.vercel.app/",
    githubUrl: "https://github.com/abhigoud098/shopsavy-inventory-app",
    accent: "magenta",
  },

  {
    id: "RecipeFinder",
    index: "05",
    name: "RecipeFinder",
    description:
      "A modern and responsive recipe discovery web app powered by the DummyJSON Recipes API. Search, explore, and save your favorite recipes with a clean, intuitive interface. Built using HTML, CSS, and JavaScript without any frameworks.",
    stack: ["Next.js", "RestApis", "CSS3", "MongoDB"],
    image: "/Recipe.png",
    liveUrl: "https://recipe-lime-zeta.vercel.app/",
    githubUrl: "https://github.com/abhigoud098/recipe-finder",
    accent: "magenta",
  },

  {
    id: "Car Rental",
    index: "06",
    name: "Car Rental",
    description:
      " A modern and responsive Car Rental Application built using React.js, Tailwind CSS, and JavaScript. The application allows users to browse available cars, book rentals, return rented vehicles, and share feedback through an intuitive user interface.",
    stack: ["Next.js", "RestApis", "CSS3", "MongoDB"],
    image: "/CarRental.png",
    liveUrl: "https://rentcar-navy.vercel.app/",
    githubUrl: "https://github.com/abhigoud098/car-rental-web-app",
    accent: "magenta",
  },
];
