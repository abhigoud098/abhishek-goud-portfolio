"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import MagneticButton from "./MagneticButton";

gsap.registerPlugin(ScrollTrigger);

const LINKS = [
  {
    label: "Email",
    href: "mailto:hello@abhishekgoud.dev",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
  },
  {
    label: "GitHub",
    href: "https://github.com/abhigoud098",
  },
];

export default function Contact() {
  const rootRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contact-item",
        {
          opacity: 0,
          y: 50,
          rotateX: -15,
        },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 1,
          stagger: 0.15,
          ease: "power4.out",

          scrollTrigger: {
            trigger: rootRef.current,
            start: "top 75%",
          },
        },
      );

      gsap.to(".contact-orb", {
        y: -40,
        duration: 4,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="contact"
      ref={rootRef}
      className="
relative
min-h-[85vh]
overflow-hidden
flex
items-center
justify-center
px-6
py-32
"
    >
      {/* Background */}

      <div
        className="
absolute
inset-0
pointer-events-none
"
      >
        <div
          className="
contact-orb
absolute
left-1/2
top-1/2
h-[550px]
w-[550px]
-translate-x-1/2
-translate-y-1/2
rounded-full
bg-electric/20
blur-[160px]
"
        />

        <div
          className="
absolute
right-0
top-20
h-72
w-72
rounded-full
bg-violet/20
blur-[130px]
"
        />
      </div>

      <div
        className="
relative
z-10
mx-auto
max-w-4xl
text-center
"
      >
        <p
          className="
contact-item
eyebrow
mb-6 font-mono tracking-[0.3em]  text-electric
"
        >
          CONTACT
        </p>

        <h2
          className="
contact-item
font-display
text-4xl
font-semibold
leading-tight
text-ink
sm:text-6xl
"
        >
          Lets create
          <br />
          <span className="grad-text">something extraordinary.</span>
        </h2>

        <p
          className="
contact-item
mx-auto
mt-6
max-w-xl
text-sm
leading-relaxed
text-ink-dim
"
        >
          Have an idea, project or opportunity? I&apos;m always interested in
          building meaningful digital experiences with modern technology.
        </p>

        <div
          className="
contact-item
mt-12
flex
flex-wrap
justify-center
gap-5
"
        >
          {LINKS.map((link, index) => (
            <MagneticButton
              key={link.label}
              href={link.href}
              variant={index === 0 ? "primary" : "ghost"}
            >
              {link.label}
            </MagneticButton>
          ))}
        </div>

        <div
          className="
contact-item
mt-24
rounded-full
border
border-white/10
bg-white/5
px-6
py-3
backdrop-blur-xl
"
        >
          <p
            className="
font-mono
text-xs
tracking-widest
text-ink-faint
"
          >
            © {new Date().getFullYear()} ABHISHEK GOUD • NEXT.JS • GSAP • REACT
          </p>
        </div>
      </div>
    </section>
  );
}
