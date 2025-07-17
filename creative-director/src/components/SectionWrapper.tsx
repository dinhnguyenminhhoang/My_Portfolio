"use client";

import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ReactNode } from "react";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
  delay?: number;
  direction?: "up" | "down" | "left" | "right";
  threshold?: number;
}

const SectionWrapper = ({
  children,
  className = "",
  id,
  delay = 0,
  direction = "up",
  threshold = 0.1,
}: SectionWrapperProps) => {
  const [ref, inView] = useInView({
    threshold,
    triggerOnce: true,
  });

  // Animation variants dựa trên direction
  const variants = {
    hidden: {
      opacity: 0,
      y: direction === "up" ? 50 : direction === "down" ? -50 : 0,
      x: direction === "left" ? 50 : direction === "right" ? -50 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.8,
        delay,
        ease: [0.25, 0.1, 0.25, 1], // Smooth easing
      },
    },
  } as any;

  return (
    <motion.section
      ref={ref}
      id={id}
      className={className}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      variants={variants}
    >
      {children}
    </motion.section>
  );
};

export default SectionWrapper;
