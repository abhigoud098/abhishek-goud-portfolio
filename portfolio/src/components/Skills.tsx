"use client";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { skillCategories } from "@/data/skills";
import SkillCard from "./ui/SkillCard";

export default function Skills() {
  return (
    <section
      id="skills"
      className="
        relative
        overflow-hidden
        section-pad
      "
    >
      <div
        className="
          mx-auto
          max-w-6xl
        "
      >
        {/* Header */}

        <div
          className="
            mb-20
          "
        >
          <p className="eyebrow text-electric font-mono tracking-[0.3em] text-[15px]">SYSTEM / SKILLS</p>

          <h2
            className="
              mt-5
              max-w-3xl
              font-display
              text-4xl
              font-semibold
              text-ink
              sm:text-6xl
            "
          >
            The tools behind
            <br />
            <span className="grad-text">every experience.</span>
          </h2>

          <p
            className="
              mt-6
              max-w-xl
              text-ink-dim
            "
          >
            A carefully selected stack used to design, develop and ship modern
            web applications.
          </p>
        </div>

        {/* Categories */}

        <div
          className="
            space-y-16
          "
        >
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.id}
              initial={{
                opacity: 0,
                y: 40,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
                delay: index * 0.15,
              }}
            >
              <div
                className="
                      mb-7
                      flex
                      items-center
                      gap-4
                    "
              >
                <span
                  className="
                        font-mono
                        text-sm
                       grad-text
                      "
                >
                  0{index + 1}
                </span>

                <div
                  className="
                        h-px
                        flex-1
                        bg-white/10
                      "
                />

                <h3
                  className="
                        font-display
                        text-xl
                        text-ink
                      "
                >
                  {category.label}
                </h3>
              </div>

              <div
                className="
                      grid
                      gap-5
                      sm:grid-cols-2
                      lg:grid-cols-4
                    "
              >
                {category.skills.map((skill) => (
                  <SkillCard key={skill.name} {...skill} />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
