"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const commands = [
  { cmd: "$ whoami", output: "Abhishek Goud" },
  { cmd: "$ role", output: "Frontend Developer" },
  { cmd: "$ location", output: "Indore" },
  {
    cmd: "$ mission",
    output: "Building fast, beautiful and scalable web experiences.",
  },
  {
    cmd: "$ npm run skills",
    output:
      "✓ React\n✓ Next.js\n✓ TypeScript\n✓ Tailwind CSS\n✓ GSAP\n✓ Node.js",
  },
];

export default function About() {
  const [visible, setVisible] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setVisible((prev) => {
        if (prev >= commands.length) {
          clearInterval(timer);
          return prev;
        }
        return prev + 1;
      });
    }, 800);

    return () => clearInterval(timer);
  }, []);

  return (
    <section id="about" className="relative overflow-hidden px-6 py-32">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-20 h-80 w-80 -translate-x-1/2 rounded-full bg-cyan-500/20 blur-[140px]" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-20 lg:grid-cols-2">
        {/* Left Side */}
        <div>
          <p className="mb-4 font-mono tracking-[0.3em]  text-electric">
            ABOUT ME
          </p>

          <h2 className="text-5xl font-bold leading-tight text-white lg:text-6xl">
            Understanding the developer behind the code.
          </h2>

          <p className="mt-8 max-w-xl text-lg leading-8 text-zinc-400">
            I enjoy crafting modern interfaces with React, Next.js, GSAP and
            TypeScript. My focus is creating experiences that are fast,
            interactive and memorable.
          </p>
        </div>

        {/* Terminal */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="rounded-3xl border border-white/10 bg-[#0D1117] p-8 shadow-2xl"
        >
          <div className="mb-8 flex gap-2">
            <span className="h-3 w-3 rounded-full bg-red-500" />
            <span className="h-3 w-3 rounded-full bg-yellow-500" />
            <span className="h-3 w-3 rounded-full bg-green-500" />
          </div>

          <div className="space-y-6 font-mono">
            {commands.slice(0, visible).map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
              >
                <p className="text-electric/70">{item.cmd}</p>

                <pre className="mt-2 whitespace-pre-wrap text-zinc-300">
                  {item.output}
                </pre>
              </motion.div>
            ))}

            <motion.span
              animate={{ opacity: [0, 1, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1,
              }}
              className="font-mono text-cyan-400"
            >
              █
            </motion.span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
