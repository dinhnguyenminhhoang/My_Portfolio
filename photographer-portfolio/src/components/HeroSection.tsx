"use client";

import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import { ArrowDown, Play, Award, Users, Camera } from "lucide-react";
import { gsap } from "gsap";

const HeroSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const heroTextRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true });

  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 150]);
  const y2 = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // GSAP animations
  useEffect(() => {
    if (isInView && heroTextRef.current) {
      const tl = gsap.timeline();

      tl.fromTo(
        ".hero-title-word",
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.2,
          stagger: 0.2,
          ease: "power3.out",
        }
      )
        .fromTo(
          ".hero-subtitle",
          { y: 50, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
          },
          "-=0.5"
        )
        .fromTo(
          ".hero-stats",
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
          },
          "-=0.3"
        )
        .fromTo(
          ".hero-cta",
          { y: 30, opacity: 0, scale: 0.9 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: "back.out(1.7)",
          },
          "-=0.2"
        );
    }
  }, [isInView]);

  // Auto-play video when in view
  useEffect(() => {
    if (videoRef.current && isInView) {
      videoRef.current.play().catch(console.error);
    }
  }, [isInView]);

  const stats = [
    { icon: Camera, value: "500+", label: "Projects Completed" },
    { icon: Users, value: "200+", label: "Happy Clients" },
    { icon: Award, value: "15+", label: "Awards Won" },
  ];

  const scrollToPortfolio = () => {
    const element = document.querySelector("#portfolio");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          muted
          loop
          playsInline
          poster="/images/hero-poster.jpg"
        >
          <source src="/videos/hero-video.mp4" type="video/mp4" />
        </video>

        {/* Video Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
      </div>

      {/* Floating Elements */}
      <motion.div
        style={{ y: y1 }}
        className="absolute top-1/4 left-10 w-20 h-20 rounded-full border border-accent-500/30 flex items-center justify-center"
      >
        <Camera className="w-8 h-8 text-accent-500" />
      </motion.div>

      <motion.div
        style={{ y: y2 }}
        className="absolute top-1/3 right-16 w-16 h-16 rounded-full bg-gold-500/10 border border-gold-500/30 flex items-center justify-center"
      >
        <Award className="w-6 h-6 text-gold-500" />
      </motion.div>

      {/* Main Content */}
      <motion.div
        style={{ opacity }}
        className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-6xl mx-auto"
      >
        <div ref={heroTextRef}>
          {/* Main Title */}
          <div className="mb-6 overflow-hidden">
            <h1 className="text-4xl sm:text-6xl lg:text-8xl font-display font-bold leading-tight">
              {["Capturing", "Life's", "Precious", "Moments"].map(
                (word, index) => (
                  <span
                    key={index}
                    className="hero-title-word inline-block mr-4 text-gradient"
                  >
                    {word}
                  </span>
                )
              )}
            </h1>
          </div>

          {/* Subtitle */}
          <div className="mb-8 overflow-hidden">
            <p className="hero-subtitle text-lg sm:text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Professional photographer creating stunning visual stories through
              the lens. Specializing in portraits, landscapes, and commercial
              photography.
            </p>
          </div>

          {/* Stats */}
          <div className="mb-12 grid grid-cols-3 gap-8 max-w-2xl mx-auto">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="hero-stats text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div className="flex items-center justify-center mb-2">
                  <stat.icon className="w-6 h-6 text-accent-500 mr-2" />
                  <span className="text-2xl sm:text-3xl font-bold text-white">
                    {stat.value}
                  </span>
                </div>
                <p className="text-sm text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hero-cta flex flex-col sm:flex-row gap-4 justify-center items-center">
            <motion.button
              onClick={scrollToPortfolio}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-accent-500 text-white rounded-lg font-semibold text-lg overflow-hidden hover-glow"
            >
              <span className="relative z-10 flex items-center">
                View Portfolio
                <ArrowDown className="ml-2 w-5 h-5 group-hover:translate-y-1 transition-transform duration-300" />
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-accent-600 to-gold-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                initial={false}
              />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group flex items-center px-8 py-4 border-2 border-white/30 text-white rounded-lg font-semibold text-lg hover:border-accent-500 hover:bg-accent-500/10 transition-all duration-300"
            >
              <Play className="mr-2 w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
              Watch Reel
            </motion.button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2 }}
            className="flex flex-col items-center text-white/60 hover:text-white transition-colors duration-300 cursor-pointer"
            onClick={scrollToPortfolio}
          >
            <span className="text-sm mb-2 font-medium">Scroll Down</span>
            <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 2 }}
                className="w-1 h-3 bg-current rounded-full mt-2"
              />
            </div>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-dark-950 to-transparent z-20"></div>

      {/* Animated Background Particles */}
      <div className="absolute inset-0 z-5">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroSection;
