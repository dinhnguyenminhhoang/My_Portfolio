"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { gsap } from "gsap";
import { Play, Star, Users, BookOpen, Award } from "lucide-react";
import { cn, fadeInUp, staggerChildren, scrollToSection } from "@/utils/cn";

const stats = [
  { icon: Users, value: "500+", label: "Students Taught" },
  { icon: BookOpen, value: "8+", label: "Years Experience" },
  { icon: Star, value: "4.9", label: "Average Rating" },
  { icon: Award, value: "15+", label: "Certifications" },
];

const floatingWords = [
  "Hello",
  "Bonjour",
  "Hola",
  "Guten Tag",
  "Ciao",
  "こんにちは",
  "你好",
  "Привет",
];

export default function HeroSection() {
  const heroRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const wordsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Floating animation for profile image
      if (imageRef.current) {
        gsap.to(imageRef.current, {
          y: -20,
          duration: 3,
          ease: "power1.inOut",
          yoyo: true,
          repeat: -1,
        });
      }

      // Animate floating words
      if (wordsRef.current) {
        const words = wordsRef.current.children;
        gsap.set(words, { opacity: 0 });

        gsap.to(words, {
          opacity: 0.6,
          duration: 2,
          stagger: 0.3,
          ease: "power2.out",
          yoyo: true,
          repeat: -1,
          repeatDelay: 1,
        });
      }

      // Parallax effect for background elements
      gsap.to(".parallax-slow", {
        yPercent: -30,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(".parallax-fast", {
        yPercent: -60,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 via-white/30 to-purple-50/50 dark:from-gray-900/90 dark:via-gray-800/90 dark:to-blue-900/90" />

        {/* Geometric shapes */}
        <div className="parallax-slow absolute top-20 left-10 w-32 h-32 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-xl" />
        <div className="parallax-fast absolute top-40 right-20 w-48 h-48 rounded-full bg-gradient-to-r from-purple-400/20 to-pink-400/20 blur-xl" />
        <div className="parallax-slow absolute bottom-40 left-1/4 w-24 h-24 rounded-full bg-gradient-to-r from-green-400/20 to-blue-400/20 blur-xl" />

        {/* Floating words background */}
        <div ref={wordsRef} className="absolute inset-0 pointer-events-none">
          {floatingWords.map((word, index) => (
            <div
              key={word}
              className="absolute text-6xl font-light text-gray-300/20 dark:text-gray-700/20 select-none"
              style={{
                left: `${10 + index * 12}%`,
                top: `${15 + index * 8}%`,
                transform: `rotate(${-15 + index * 5}deg)`,
              }}
            >
              {word}
            </div>
          ))}
        </div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.01)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.01)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text Content */}
          <motion.div
            initial="initial"
            animate="animate"
            variants={staggerChildren}
            className="text-center lg:text-left"
          >
            {/* Badge */}
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6"
            >
              <Star className="w-4 h-4 mr-2 fill-current" />
              Top-Rated English Teacher
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              variants={fadeInUp}
              className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6"
            >
              <span className="block text-gray-900 dark:text-white">
                Master English
              </span>
              <span className="block bg-gradient-to-r from-blue-600 via-purple-600 to-blue-800 bg-clip-text text-transparent">
                with Confidence
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={fadeInUp}
              className="text-lg sm:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl"
            >
              Transform your English skills with personalized lessons,
              innovative teaching methods, and a passion for helping you achieve
              fluency.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 mb-12"
            >
              <motion.button
                onClick={() => scrollToSection("contact")}
                className={cn(
                  "group px-8 py-4 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl",
                  "font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300",
                  "flex items-center justify-center gap-2"
                )}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                Start Learning Today
                <motion.div
                  animate={{ x: [0, 4, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.div>
              </motion.button>

              <motion.button
                className={cn(
                  "group px-8 py-4 border-2 border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 rounded-2xl",
                  "font-semibold text-lg hover:bg-gray-50 dark:hover:bg-gray-800",
                  "transition-all duration-300 flex items-center justify-center gap-2"
                )}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Play className="w-5 h-5" />
                Watch Demo
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={fadeInUp}
              className="grid grid-cols-2 sm:grid-cols-4 gap-6"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                  className="text-center"
                >
                  <div className="flex justify-center mb-2">
                    <div className="p-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg">
                      <stat.icon className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                    </div>
                  </div>
                  <div className="text-2xl font-bold text-gray-900 dark:text-white">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Column - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Background decoration */}
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-3xl blur-2xl transform rotate-6" />

              {/* Profile image container */}
              <div
                ref={imageRef}
                className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden shadow-2xl"
              >
                {/* Placeholder for profile image */}
                <div className="w-full h-full bg-gradient-to-br from-blue-200 via-purple-200 to-pink-200 flex items-center justify-center">
                  <div className="w-32 h-32 bg-white/50 rounded-full flex items-center justify-center">
                    <Users className="w-16 h-16 text-gray-400" />
                  </div>
                </div>

                {/* Overlay with teaching badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 dark:bg-gray-900/90 backdrop-blur-sm rounded-2xl p-4">
                  <div className="flex items-center gap-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                      Currently teaching • Available for lessons
                    </span>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <motion.div
                animate={{ y: [-10, 10, -10] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-6 -right-6 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg"
              >
                📚
              </motion.div>

              <motion.div
                animate={{ y: [10, -10, 10] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-6 -left-6 w-16 h-16 bg-gradient-to-r from-green-400 to-blue-500 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-lg"
              >
                ✨
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        onClick={() => scrollToSection("about")}
      >
        <motion.div
          className="w-6 h-10 border-2 border-gray-400 dark:border-gray-600 rounded-full flex justify-center"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1 h-3 bg-gray-400 dark:bg-gray-600 rounded-full mt-2"
            animate={{ height: [12, 6, 12] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
        <p className="text-xs text-gray-500 dark:text-gray-400 mt-2 font-medium">
          Scroll to explore
        </p>
      </motion.div>
    </section>
  );
}
