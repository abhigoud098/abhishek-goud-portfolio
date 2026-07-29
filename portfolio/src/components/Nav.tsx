"use client";

import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

const LINKS = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const progressRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLElement>(null);

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#about");

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();

    const section = document.querySelector(href);

    if (!section) return;

    const navHeight = navRef.current?.getBoundingClientRect().height || 80;

    const top =
      section.getBoundingClientRect().top + window.scrollY - navHeight - 20;

    window.scrollTo({
      top,
      behavior: "smooth",
    });

    setOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => {
      const doc = document.documentElement;

      const scrollTop = doc.scrollTop;

      const height = doc.scrollHeight - doc.clientHeight;

      const progress = height > 0 ? scrollTop / height : 0;

      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${progress})`;
      }

      setScrolled(scrollTop > 40);

      LINKS.forEach((link) => {
        const section = document.querySelector(link.href);

        if (section) {
          const top = section.getBoundingClientRect().top;

          if (top < 180 && top > -section.clientHeight) {
            setActive(link.href);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      ref={navRef}
      className={`
fixed
inset-x-0
top-0
z-50
transition-all
duration-500

${scrolled ? "pt-4" : "pt-0"}

`}
    >
      <nav
        className={`
mx-auto
flex
max-w-7xl
items-center
justify-between
px-6
py-5
transition-all
duration-500

${
  scrolled
    ? "rounded-2xl border border-white/10 bg-void/70 backdrop-blur-xl md:px-8"
    : "bg-transparent"
}

`}
      >
        {/* Logo */}

        <motion.a
          href="#top"
          onClick={(e) => scrollToSection(e, "#top")}
          whileHover={{
            scale: 1.05,
          }}
          className="
font-mono
text-lg
tracking-tight
text-ink
"
        >
          AG<span className="text-electric">.</span>
        </motion.a>

        {/* Desktop */}

        <ul
          className="
hidden
items-center
gap-8
md:flex
"
        >
          {LINKS.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                onClick={(e) => scrollToSection(e, link.href)}
                className="
relative
font-mono
text-xs
uppercase
tracking-[0.15em]
text-ink-dim
transition
hover:text-ink
"
              >
                {link.label}

                {active === link.href && (
                  <motion.span
                    layoutId="nav-active"
                    className="
absolute
left-0
right-0
-bottom-2
h-px
bg-electric
"
                  />
                )}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile */}

        <button
          onClick={() => setOpen(!open)}
          className="
font-mono
text-xs
uppercase
tracking-widest
text-ink
md:hidden
"
        >
          {open ? "Close" : "Menu"}
        </button>
      </nav>

      {/* Mobile menu */}

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{
              opacity: 0,
              y: -20,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -20,
            }}
            className="
mx-6
rounded-2xl
border
border-white/10
bg-void/90
p-6
backdrop-blur-xl
md:hidden
"
          >
            <div
              className="
flex
flex-col
gap-5
"
            >
              {LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => scrollToSection(e, link.href)}
                  className="
font-mono
text-sm
uppercase
tracking-widest
text-ink-dim
transition
hover:text-electric
"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Scroll Progress */}

      <div
        className="
h-px
w-full
bg-white/5
"
      >
        <div
          ref={progressRef}
          className="
h-full
w-full
origin-left
scale-x-0
bg-grad-signal
shadow-glow
"
        />
      </div>
    </header>
  );
}
