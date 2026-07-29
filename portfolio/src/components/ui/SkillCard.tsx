"use client";

import { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

export default function SkillCard({
  name,
  level,
  icon: Icon,
}: {
  name: string;
  level: number;
  icon: React.ElementType;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), {
    stiffness: 160,
    damping: 18,
  });

  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), {
    stiffness: 160,
    damping: 18,
  });

  const move = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();

    if (!rect) return;

    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);

    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const reset = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={move}
      onMouseLeave={reset}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 1000,
      }}
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      className="
group
relative
h-[220px]
overflow-hidden
rounded-3xl

border
border-white/10

bg-[#09090b]

p-6

shadow-2xl

transition-all
duration-500

hover:border-white/20

"
    >
      {/* Background Shape */}

      <div
        className="
absolute
-right-10
-top-10

h-40
w-40

rounded-full

bg-gradient-to-br

from-[#4f7cff]

to-[#9b5cff]

opacity-20

blur-3xl

transition-all

duration-700

group-hover:opacity-40

"
      />

      {/* Glass circle */}

      <div
        className="
absolute
bottom-[-60px]
left-[-40px]

h-48
w-48

rounded-full

border
border-white/5

bg-white/[0.03]

"
      />

      {/* Moving shine */}

      <motion.div
        animate={{
          x: ["-120%", "120%"],
        }}
        transition={{
          duration: 4,

          repeat: Infinity,

          ease: "linear",
        }}
        className="
absolute
inset-y-0

w-1/3

rotate-12

bg-gradient-to-r

from-transparent

via-white/10

to-transparent

"
      />

      {/* Content */}

      <div
        className="
relative
z-10
flex
h-full
flex-col
justify-between

"
      >
        <div
          className="
flex
items-start
justify-between
"
        >
          {/* Icon */}

          <div
            className="
flex
h-14
w-14
items-center
justify-center

rounded-2xl

bg-gradient-to-br

from-[#4f7cff]/20

to-[#9b5cff]/20

border
border-white/10

shadow-lg

transition

duration-500

group-hover:scale-110

"
          >
            <Icon
              className="
text-3xl

text-[#4f7cff]

transition

duration-500

group-hover:text-[#9b5cff]

"
            />
          </div>

          <span
            className="
font-mono
text-sm
text-white/40

"
          >
            {level}%
          </span>
        </div>

        <div>
          <h3
            className="
font-display

text-2xl

font-semibold

text-white

"
          >
            {name}
          </h3>

          {/* Progress */}

          <div
            className="
mt-5

h-1.5

overflow-hidden

rounded-full

bg-white/10

"
          >
            <motion.div
              initial={{
                width: 0,
              }}
              whileInView={{
                width: `${level}%`,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 1.3,
              }}
              className="
h-full

rounded-full

bg-gradient-to-r

from-[#4f7cff]

to-[#9b5cff]

"
            />
          </div>
        </div>
      </div>

      {/* Bottom border animation */}

      <div
        className="
absolute
bottom-0
left-0

h-[2px]

w-0

bg-gradient-to-r

from-[#4f7cff]

to-[#9b5cff]

transition-all

duration-700

group-hover:w-full

"
      />
    </motion.div>
  );
}
