"use client";

import { motion } from "framer-motion";
import { useMagnetic } from "@/hooks/useMagnetic";
import clsx from "clsx";

type MagneticButtonProps = {
  children: React.ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "ghost";
  className?: string;
};

export default function MagneticButton({
  children,
  href,
  onClick,
  variant = "primary",
  className,
}: MagneticButtonProps) {
  const ref = useMagnetic<HTMLAnchorElement>(0.3);

  const classes = clsx(
    variant === "primary" ? "btn-primary" : "btn-ghost",
    className
  );

  return (
    <motion.a
      ref={ref}
      href={href ?? "#"}
      onClick={onClick}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      className={classes}
    >
      {children}
    </motion.a>
  );
}
