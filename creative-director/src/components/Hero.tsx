"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Play, Zap, Heart, Star } from "lucide-react";
import { gsap } from "gsap";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    // GSAP Timeline Animation
    const tl = gsap.timeline();

    // Title animation với stagger effect
    tl.fromTo(
      titleRef.current?.children as any,
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1, stagger: 0.1, ease: "power3.out" }
    ).fromTo(
      subtitleRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
      "-=0.5"
    );

    // Floating elements animation
    gsap.to(".floating-1", {
      y: -20,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
    });

    gsap.to(".floating-2", {
      y: -15,
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
      delay: 0.5,
    });

    gsap.to(".floating-3", {
      y: -25,
      duration: 1.8,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
      delay: 1,
    });
  }, []);

  // Smooth scroll to next section
  const handleScrollDown = () => {
    const aboutSection = document.querySelector("#about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      ref={heroRef}
      className="min-h-screen relative overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 flex items-center justify-center"
      id="hero"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse floating-1"></div>
        <div className="absolute top-1/3 right-1/3 w-64 h-64 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse floating-2"></div>
        <div className="absolute bottom-1/4 left-1/2 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse floating-3"></div>

        {/* Particle Effects */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -20, 0],
                opacity: [0.3, 0.8, 0.3],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </div>

      {/* Hero Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        {/* Badge */}
        <motion.div
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-2 mb-8"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.5 }}
        >
          <Star className="w-4 h-4 text-yellow-400" />
          <span className="text-white text-sm font-medium">
            ✨ Creative Director & Content Creator
          </span>
        </motion.div>

        {/* Main Title */}
        <h1
          ref={titleRef}
          className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight"
        >
          <span className="block">Tôi là</span>
          <span className="block bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 bg-clip-text text-transparent">
            Hoàng Creative
          </span>
          <span className="block">Director với chất riêng</span>
        </h1>

        {/* Subtitle */}
        <p
          ref={subtitleRef}
          className="text-lg sm:text-xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
        >
          Tạo ra những nội dung viral, campaigns sáng tạo và trải nghiệm thương
          hiệu độc đáo cho thế hệ Gen Z Việt Nam. Phong cách "chipi" nhưng
          chuyên nghiệp! 🚀
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <motion.button
            className="group relative bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 flex items-center gap-3"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ x: -50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
          >
            <Zap className="w-5 h-5" />
            Xem Portfolio
            <motion.div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-300" />
          </motion.button>

          <motion.button
            className="group flex items-center gap-3 text-white border border-white/30 px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.8 }}
          >
            <Play className="w-5 h-5" />
            Xem Demo Reel
          </motion.button>
        </div>

        {/* Stats */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center items-center gap-8 text-center"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.8 }}
        >
          <div className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-red-400" />
            <span className="text-white">
              <span className="font-bold text-xl">2M+</span>
              <span className="text-gray-300 ml-1">Views</span>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Star className="w-5 h-5 text-yellow-400" />
            <span className="text-white">
              <span className="font-bold text-xl">50+</span>
              <span className="text-gray-300 ml-1">Projects</span>
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Zap className="w-5 h-5 text-blue-400" />
            <span className="text-white">
              <span className="font-bold text-xl">3+</span>
              <span className="text-gray-300 ml-1">Years</span>
            </span>
          </div>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        onClick={handleScrollDown}
      >
        <div className="flex flex-col items-center gap-2 text-white/70 hover:text-white transition-colors">
          <span className="text-sm">Cuộn xuống</span>
          <ChevronDown className="w-6 h-6" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
