"use client";

import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";
import {
  ChevronDown,
  Download,
  ExternalLink,
  Code2,
  Sparkles,
  Rocket,
  Zap,
} from "lucide-react";

interface HeroSectionProps {
  className?: string;
}

export default function HeroSection({ className = "" }: HeroSectionProps) {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Mouse tracking for interactive effects
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // GSAP Animations
  useGSAP(
    () => {
      const tl = gsap.timeline({ delay: 1 });

      // Set initial states
      gsap.set(
        [
          titleRef.current,
          subtitleRef.current,
          descriptionRef.current,
          ctaRef.current,
        ],
        {
          opacity: 0,
          y: 60,
        }
      );

      // Hero title animation with typewriter effect
      tl.to(titleRef.current, {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: "power3.out",
      })
        .to(
          subtitleRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
          },
          "-=0.6"
        )
        .to(
          descriptionRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.4"
        )
        .to(
          ctaRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
          },
          "-=0.4"
        )
        .to(
          scrollIndicatorRef.current,
          {
            opacity: 1,
            y: 0,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.2"
        );

      // Floating animation for scroll indicator
      gsap.to(scrollIndicatorRef.current, {
        y: 10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Sparkle animation
      gsap.to(".sparkle", {
        scale: "random(0.5, 1.5)",
        opacity: "random(0.3, 1)",
        duration: "random(1, 3)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.2,
      });
    },
    { scope: heroRef }
  );

  // Typewriter effect for main title
  const [displayedText, setDisplayedText] = useState("");
  const [sparkles, setSparkles] = useState<
    Array<{ left: string; top: string; delay: string }>
  >([]);
  const fullText = "Frontend Developer";

  // Generate sparkles only on client side
  useEffect(() => {
    const generatedSparkles = [...Array(6)].map(() => ({
      left: `${20 + Math.random() * 60}%`,
      top: `${20 + Math.random() * 60}%`,
      delay: `${Math.random() * 2}s`,
    }));
    setSparkles(generatedSparkles);
  }, []);

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.slice(0, index + 1));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  const handleScrollToNext = () => {
    const nextSection = document.querySelector("#about");
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className={`relative min-h-screen flex items-center justify-center overflow-hidden ${className}`}
    >
      {/* Interactive cursor effect */}
      <div
        className="fixed pointer-events-none z-10 w-6 h-6 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 opacity-50 blur-sm transition-all duration-300"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
          transform: "translate3d(0, 0, 0)",
        }}
      />

      {/* Main content */}
      <div className="relative z-20 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Greeting */}
        <motion.div
          className="mb-6"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-full border border-white/10">
            <Sparkles className="w-4 h-4 text-yellow-400" />
            <span className="text-sm text-white/80">Hello, I'm</span>
          </div>
        </motion.div>

        {/* Name */}
        <h1
          ref={titleRef}
          className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 leading-tight"
        >
          <span className="bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
            John Doe
          </span>
        </h1>

        {/* Role with typewriter effect */}
        <h2
          ref={subtitleRef}
          className="text-xl sm:text-2xl lg:text-3xl font-medium mb-6 text-white/90"
        >
          <span className="inline-flex items-center space-x-2">
            <Code2 className="w-6 h-6 text-purple-400" />
            <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
              {displayedText}
            </span>
            <span className="animate-pulse">|</span>
          </span>
        </h2>

        {/* Description */}
        <p
          ref={descriptionRef}
          className="text-lg sm:text-xl text-white/70 mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          I craft exceptional digital experiences through innovative frontend
          solutions, combining modern technologies with creative design to build
          applications that inspire and engage users across the digital
          universe.
        </p>

        {/* CTA Buttons */}
        <div
          ref={ctaRef}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
        >
          <motion.button
            className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full font-medium text-white transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 hover:scale-105"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="flex items-center space-x-2">
              <Rocket className="w-5 h-5" />
              <span>View My Work</span>
              <ExternalLink className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full blur opacity-50 group-hover:opacity-70 transition-opacity" />
          </motion.button>

          <motion.button
            className="group px-8 py-4 border border-white/20 rounded-full font-medium text-white/90 hover:bg-white/5 hover:border-white/40 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="flex items-center space-x-2">
              <Download className="w-5 h-5" />
              <span>Download CV</span>
            </span>
          </motion.button>
        </div>

        {/* Floating sparkles */}
        <div className="absolute inset-0 pointer-events-none">
          {sparkles.map((sparkle, i) => (
            <div
              key={i}
              className="sparkle absolute"
              style={{
                left: sparkle.left,
                top: sparkle.top,
                animationDelay: sparkle.delay,
              }}
            >
              <Zap className="w-4 h-4 text-purple-400/60" />
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer opacity-0"
        onClick={handleScrollToNext}
      >
        <motion.div
          className="flex flex-col items-center space-y-2 text-white/60 hover:text-white/80 transition-colors duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <span className="text-sm font-medium">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/40 rounded-full mt-2 animate-bounce" />
          </div>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}
