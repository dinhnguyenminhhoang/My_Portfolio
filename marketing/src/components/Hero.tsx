"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { gsap } from "gsap";
import {
  ChevronDown,
  Sparkles,
  Heart,
  Star,
  Zap,
  Camera,
  Video,
  Palette,
} from "lucide-react";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const subtitleRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const floatingElementsRef = useRef<HTMLDivElement>(null);

  const controls = useAnimation();
  const isInView = useInView(heroRef, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Floating elements animation
      gsap.to(".floating-element", {
        y: -20,
        duration: 2,
        ease: "power2.inOut",
        stagger: 0.2,
        repeat: -1,
        yoyo: true,
      });

      // Sparkle animation
      gsap.to(".sparkle", {
        rotation: 360,
        duration: 3,
        ease: "none",
        repeat: -1,
      });

      // Pulse animation for heart
      gsap.to(".pulse-heart", {
        scale: 1.2,
        duration: 1,
        ease: "power2.inOut",
        repeat: -1,
        yoyo: true,
      });

      // Gradient animation
      gsap.to(".gradient-text", {
        backgroundPosition: "200% center",
        duration: 3,
        ease: "none",
        repeat: -1,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10,
      },
    },
  } as any;

  const handleScrollToProjects = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleScrollToContact = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 pt-20"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 floating-element">
          <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full opacity-20 blur-xl"></div>
        </div>
        <div className="absolute top-40 right-20 floating-element">
          <div className="w-24 h-24 bg-gradient-to-r from-pink-400 to-orange-400 rounded-full opacity-20 blur-xl"></div>
        </div>
        <div className="absolute bottom-40 left-20 floating-element">
          <div className="w-20 h-20 bg-gradient-to-r from-orange-400 to-yellow-400 rounded-full opacity-20 blur-xl"></div>
        </div>
        <div className="absolute bottom-20 right-10 floating-element">
          <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-purple-400 rounded-full opacity-20 blur-xl"></div>
        </div>
      </div>

      {/* Floating Icons */}
      <div
        ref={floatingElementsRef}
        className="absolute inset-0 pointer-events-none"
      >
        <motion.div
          animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-32 left-1/4 text-purple-400 sparkle"
        >
          <Sparkles className="w-6 h-6" />
        </motion.div>
        <motion.div
          animate={{ y: [0, -15, 0], rotate: [0, -5, 0] }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute top-40 right-1/4 text-pink-400 pulse-heart"
        >
          <Heart className="w-5 h-5" />
        </motion.div>
        <motion.div
          animate={{ y: [0, -20, 0], rotate: [0, 10, 0] }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-1/3 left-1/6 text-orange-400 sparkle"
        >
          <Star className="w-7 h-7" />
        </motion.div>
        <motion.div
          animate={{ y: [0, -12, 0], rotate: [0, -8, 0] }}
          transition={{
            duration: 3.5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 0.5,
          }}
          className="absolute bottom-40 right-1/3 text-yellow-400"
        >
          <Zap className="w-6 h-6" />
        </motion.div>
      </div>

      {/* Main Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate={controls}
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
      >
        {/* Badge */}
        <motion.div
          variants={itemVariants}
          className="mb-8 inline-flex items-center space-x-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 shadow-lg border border-purple-100"
        >
          <div className="flex items-center space-x-1">
            <Camera className="w-4 h-4 text-purple-500" />
            <Video className="w-4 h-4 text-pink-500" />
            <Palette className="w-4 h-4 text-orange-500" />
          </div>
          <span className="text-sm font-medium text-gray-700">
            Creative Content Creator
          </span>
          <motion.div
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-2 h-2 bg-green-400 rounded-full"
          />
        </motion.div>

        {/* Main Title */}
        <motion.div ref={titleRef} variants={itemVariants} className="mb-6">
          <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight">
            <span className="block text-gray-900 mb-2">Xin chào! Tôi là</span>
            <span className="block gradient-text bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent bg-[length:200%_auto]">
              Hoàng Creative
            </span>
          </h1>
          <motion.div
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mt-4 text-lg sm:text-xl font-medium text-gray-600"
          >
            <span className="inline-flex items-center space-x-2">
              <span>Content Creator với chất riêng</span>
              <span className="text-2xl">✨</span>
            </span>
          </motion.div>
        </motion.div>

        {/* Subtitle */}
        <motion.div
          ref={subtitleRef}
          variants={itemVariants}
          className="mb-10 max-w-3xl mx-auto"
        >
          <p className="text-xl sm:text-2xl text-gray-700 leading-relaxed">
            Tôi tạo ra những nội dung{" "}
            <span className="font-bold text-purple-600">viral</span>,{" "}
            <span className="font-bold text-pink-600">sáng tạo</span> và{" "}
            <span className="font-bold text-orange-600">có tâm</span> trên
            TikTok, Instagram & YouTube
          </p>
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="mt-4 text-base text-gray-600"
          >
            🎬 Video Editing • 📝 Script Writing • 🎨 Creative Strategy • 📱
            Social Media
          </motion.div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          ref={ctaRef}
          variants={itemVariants}
          className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.05, rotate: 1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleScrollToProjects}
            className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 overflow-hidden"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-pink-500 to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              whileHover={{ opacity: 1 }}
            />
            <span className="relative flex items-center space-x-2">
              <span>Xem Portfolio</span>
              <motion.div
                animate={{ x: [0, 3, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                <Sparkles className="w-5 h-5" />
              </motion.div>
            </span>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05, rotate: -1 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleScrollToContact}
            className="group px-8 py-4 bg-white/80 backdrop-blur-sm text-gray-700 font-semibold rounded-full shadow-xl hover:shadow-2xl border border-purple-100 hover:border-purple-200 transition-all duration-300"
          >
            <span className="flex items-center space-x-2">
              <span>Hợp tác ngay</span>
              <motion.div
                animate={{ rotate: [0, 20, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <Heart className="w-5 h-5 text-pink-500" />
              </motion.div>
            </span>
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto mb-16"
        >
          {[
            { number: "2M+", label: "Lượt xem", icon: "👀" },
            { number: "50K+", label: "Followers", icon: "💕" },
            { number: "100+", label: "Dự án", icon: "🎬" },
            { number: "3 năm+", label: "Kinh nghiệm", icon: "⭐" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-purple-100 hover:border-purple-200 transition-all duration-300"
            >
              <div className="text-3xl mb-2">{stat.icon}</div>
              <div className="text-2xl font-bold text-gray-900">
                {stat.number}
              </div>
              <div className="text-sm text-gray-600">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={handleScrollToProjects}
        >
          <div className="flex flex-col items-center space-y-2 text-gray-600 hover:text-purple-600 transition-colors duration-200">
            <span className="text-sm font-medium">Khám phá thêm</span>
            <ChevronDown className="w-6 h-6" />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
