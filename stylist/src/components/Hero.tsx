"use client";

import React, { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import {
  ChevronDown,
  Sparkles,
  Camera,
  Heart,
  Star,
  Zap,
  Instagram,
  Youtube,
  Music,
} from "lucide-react";

const Hero = () => {
  const controls = useAnimation();
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    controls.start("visible");
  }, [controls]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  } as any;

  const floatingIcons = [
    { Icon: Camera, delay: 0, color: "text-pink-500" },
    { Icon: Heart, delay: 0.5, color: "text-red-500" },
    { Icon: Star, delay: 1, color: "text-yellow-500" },
    { Icon: Zap, delay: 1.5, color: "text-purple-500" },
    { Icon: Instagram, delay: 2, color: "text-pink-600" },
    { Icon: Youtube, delay: 2.5, color: "text-red-600" },
    { Icon: Music, delay: 3, color: "text-blue-500" },
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen relative overflow-hidden bg-gradient-to-br from-pink-50 via-purple-50 to-indigo-100"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-r from-pink-400/20 via-purple-400/20 to-indigo-400/20 animate-pulse" />

        {/* Floating Particles */}
        {Array.from({ length: 20 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full opacity-60"
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              scale: [1, 1.5, 1],
              opacity: [0.6, 1, 0.6],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      {/* Interactive Mouse Follow Effect */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full pointer-events-none opacity-50 blur-sm z-10"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
        }}
      />

      {/* Main Content */}
      <div className="relative z-20 flex items-center justify-center min-h-screen px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            {/* Greeting */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center space-x-2 bg-white/70 backdrop-blur-sm px-6 py-3 rounded-full border border-pink-200 shadow-lg"
            >
              <Sparkles className="w-5 h-5 text-pink-500" />
              <span className="text-pink-600 font-medium">
                Xin chào! Tôi là
              </span>
            </motion.div>

            {/* Main Title */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight"
            >
              <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
                Hoàng
              </span>
              <br />
              <span className="text-gray-800">Stylelist</span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              variants={itemVariants}
              className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            >
              Một{" "}
              <span className="font-semibold text-pink-600">
                Content Creator
              </span>{" "}
              với chất riêng - tạo nên những câu chuyện{" "}
              <span className="font-semibold text-purple-600">sinh động</span>{" "}
              và{" "}
              <span className="font-semibold text-indigo-600">
                truyền cảm hứng
              </span>
            </motion.p>

            {/* Skills Tags */}
            <motion.div
              variants={itemVariants}
              className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto"
            >
              {[
                "Video Editor",
                "Content Creator",
                "Social Media",
                "Brand Strategy",
                "Creative Direction",
                "Storytelling",
              ].map((skill, index) => (
                <motion.span
                  key={skill}
                  className="px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full text-sm font-medium text-gray-700 border border-pink-200 shadow-sm"
                  whileHover={{
                    scale: 1.05,
                    backgroundColor: "rgba(236, 72, 153, 0.1)",
                  }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <motion.button
                className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(236, 72, 153, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection("#projects")}
              >
                <Camera className="w-5 h-5 inline mr-2" />
                Xem Portfolio
              </motion.button>

              <motion.button
                className="bg-white/80 backdrop-blur-sm text-gray-800 px-8 py-4 rounded-full font-semibold text-lg border border-pink-200 hover:bg-pink-50 transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToSection("#contact")}
              >
                <Heart className="w-5 h-5 inline mr-2 text-pink-500" />
                Liên hệ ngay
              </motion.button>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-2xl mx-auto pt-8"
            >
              {[
                { number: "50+", label: "Dự án hoàn thành" },
                { number: "1M+", label: "Lượt xem" },
                { number: "20+", label: "Khách hàng" },
                { number: "99%", label: "Hài lòng" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.2 + index * 0.1 }}
                >
                  <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Floating Icons */}
          <div className="absolute inset-0 pointer-events-none">
            {floatingIcons.map(({ Icon, delay, color }, index) => (
              <motion.div
                key={index}
                className={`absolute ${color} opacity-20`}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: [0.2, 0.6, 0.2],
                  scale: [0.8, 1.2, 0.8],
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  delay: delay,
                  ease: "easeInOut",
                }}
                style={{
                  left: `${10 + index * 15}%`,
                  top: `${20 + index * 10}%`,
                }}
              >
                <Icon className="w-8 h-8" />
              </motion.div>
            ))}
          </div>

          {/* Scroll Indicator */}
          <motion.div
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2 }}
          >
            <motion.button
              onClick={() => scrollToSection("#about")}
              className="flex flex-col items-center space-y-2 text-gray-600 hover:text-pink-600 transition-colors duration-300"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <span className="text-sm">Khám phá thêm</span>
              <ChevronDown className="w-6 h-6" />
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
