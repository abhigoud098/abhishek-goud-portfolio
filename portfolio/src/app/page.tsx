"use client";

import { useCallback, useEffect, useState } from "react";
import Preloader from "@/components/Preloader";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";

export default function Home() {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (!ready) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [ready]);

  const handlePreloaderComplete = useCallback(() => {
    setReady(true);
  }, []);

  return (
    <main>
      <Preloader onComplete={handlePreloaderComplete} />

      <Hero ready={ready} />

      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />
    </main>
  );
}
