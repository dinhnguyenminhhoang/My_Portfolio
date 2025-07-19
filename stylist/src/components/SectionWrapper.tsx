"use client";

import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface SectionWrapperProps {
  children: React.ReactNode;
  id?: string;
  className?: string;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right";
  threshold?: number;
  once?: boolean;
  staggerChildren?: boolean;
  staggerDelay?: number;
  backgroundColor?: string;
  backgroundPattern?: "dots" | "grid" | "waves" | "none";
  enableParallax?: boolean;
  parallaxOffset?: number;
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({
  children,
  id,
  className = "",
  delay = 0,
  duration = 0.8,
  direction = "up",
  threshold = 0.1,
  once = true,
  staggerChildren = false,
  staggerDelay = 0.1,
  backgroundColor,
  backgroundPattern = "none",
  enableParallax = false,
  parallaxOffset = 50,
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: threshold });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  // Animation variants based on direction
  const getVariants = () => {
    const directions = {
      up: { hidden: { y: 60, opacity: 0 }, visible: { y: 0, opacity: 1 } },
      down: { hidden: { y: -60, opacity: 0 }, visible: { y: 0, opacity: 1 } },
      left: { hidden: { x: -60, opacity: 0 }, visible: { x: 0, opacity: 1 } },
      right: { hidden: { x: 60, opacity: 0 }, visible: { x: 0, opacity: 1 } },
    };

    return {
      hidden: directions[direction].hidden,
      visible: {
        ...directions[direction].visible,
        transition: {
          duration,
          delay,
          ease: [0.25, 0.25, 0.25, 0.75],
          ...(staggerChildren && {
            staggerChildren: staggerDelay,
            delayChildren: delay,
          }),
        },
      },
    };
  };

  // Background patterns
  const BackgroundPattern = () => {
    switch (backgroundPattern) {
      case "dots":
        return (
          <div className="absolute inset-0 opacity-10">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `radial-gradient(circle, currentColor 1px, transparent 1px)`,
                backgroundSize: "24px 24px",
              }}
            />
          </div>
        );
      case "grid":
        return (
          <div className="absolute inset-0 opacity-10">
            <div
              className="w-full h-full"
              style={{
                backgroundImage: `
                  linear-gradient(currentColor 1px, transparent 1px),
                  linear-gradient(90deg, currentColor 1px, transparent 1px)
                `,
                backgroundSize: "24px 24px",
              }}
            />
          </div>
        );
      case "waves":
        return (
          <div className="absolute inset-0 opacity-10 overflow-hidden">
            <svg
              className="absolute inset-0 w-full h-full"
              viewBox="0 0 1000 1000"
              xmlns="http://www.w3.org/2000/svg"
            >
              <defs>
                <pattern
                  id="wave-pattern"
                  x="0"
                  y="0"
                  width="100"
                  height="100"
                  patternUnits="userSpaceOnUse"
                >
                  <path
                    d="M0,50 Q25,0 50,50 T100,50"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                  />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#wave-pattern)" />
            </svg>
          </div>
        );
      default:
        return null;
    }
  };

  // Parallax effect
  const ParallaxContent = ({ children }: { children: React.ReactNode }) => {
    const [scrollY, setScrollY] = React.useState(0);

    React.useEffect(() => {
      if (!enableParallax) return;

      const handleScroll = () => {
        setScrollY(window.scrollY);
      };

      window.addEventListener("scroll", handleScroll);
      return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const parallaxStyle = enableParallax
      ? {
          transform: `translateY(${scrollY * parallaxOffset * 0.01}px)`,
        }
      : {};

    return <div style={parallaxStyle}>{children}</div>;
  };

  return (
    <motion.section
      ref={ref}
      id={id}
      className={`relative overflow-hidden ${className}`}
      style={{ backgroundColor }}
      initial="hidden"
      animate={controls}
      variants={getVariants() as any}
    >
      {/* Background Pattern */}
      <BackgroundPattern />

      {/* Content */}
      <ParallaxContent>
        <div className="relative z-10">{children}</div>
      </ParallaxContent>

      {/* Decorative Elements */}
      <motion.div
        className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-purple-500/20 to-transparent"
        initial={{ scaleX: 0 }}
        animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
        transition={{ duration: 1.5, delay: delay + 0.5 }}
      />
    </motion.section>
  );
};

// Higher-order component for easy wrapping
export const withSectionWrapper = (
  Component: React.ComponentType,
  wrapperProps?: Partial<SectionWrapperProps>
) => {
  return function WrappedComponent(props: any) {
    return (
      <SectionWrapper {...wrapperProps}>
        <Component {...props} />
      </SectionWrapper>
    );
  };
};

// Hook for section animations
export const useSectionAnimation = (
  threshold: number = 0.1,
  once: boolean = true
) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once, amount: threshold });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return { ref, isInView, controls };
};

// Common animation variants
export const sectionVariants = {
  fadeIn: {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.8 } },
  },
  slideInLeft: {
    hidden: { x: -100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
  },
  slideInRight: {
    hidden: { x: 100, opacity: 0 },
    visible: { x: 0, opacity: 1, transition: { duration: 0.8 } },
  },
  slideInUp: {
    hidden: { y: 100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8 } },
  },
  slideInDown: {
    hidden: { y: -100, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.8 } },
  },
  scaleIn: {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { scale: 1, opacity: 1, transition: { duration: 0.8 } },
  },
  stagger: {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  },
};

// Preset configurations
export const sectionPresets = {
  hero: {
    direction: "up" as const,
    duration: 1.2,
    backgroundColor: "transparent",
    backgroundPattern: "dots" as const,
    enableParallax: true,
    parallaxOffset: 30,
  },
  content: {
    direction: "up" as const,
    duration: 0.8,
    threshold: 0.2,
    staggerChildren: true,
    staggerDelay: 0.15,
  },
  feature: {
    direction: "left" as const,
    duration: 1,
    threshold: 0.3,
    backgroundPattern: "grid" as const,
  },
  testimonial: {
    direction: "right" as const,
    duration: 0.9,
    threshold: 0.25,
    backgroundPattern: "waves" as const,
  },
  contact: {
    direction: "up" as const,
    duration: 1,
    threshold: 0.15,
    backgroundColor: "rgba(139, 69, 19, 0.05)",
  },
};

export default SectionWrapper;
