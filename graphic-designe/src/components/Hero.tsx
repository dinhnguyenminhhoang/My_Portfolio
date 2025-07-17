"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { gsap } from "gsap";
import {
  ArrowDown,
  Sparkles,
  Palette,
  Zap,
  Heart,
  Star,
  Download,
  Play,
  Instagram,
  Youtube,
  Facebook,
} from "lucide-react";
import {
  cn,
  scrollToSection,
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  bounceIn,
  floatingAnimation,
  scaleIn,
} from "@/lib/utils";

const socialStats = [
  {
    platform: "Instagram",
    followers: "25.8K",
    icon: Instagram,
    color: "from-pink-500 to-purple-500",
  },
  {
    platform: "TikTok",
    followers: "18.2K",
    icon: Facebook,
    color: "from-blue-500 to-cyan-500",
  },
  {
    platform: "YouTube",
    followers: "12.5K",
    icon: Youtube,
    color: "from-red-500 to-orange-500",
  },
];

const floatingElements = [
  { icon: Palette, color: "text-pink-500", delay: 0, x: "10%", y: "20%" },
  { icon: Sparkles, color: "text-purple-500", delay: 0.5, x: "80%", y: "30%" },
  { icon: Zap, color: "text-blue-500", delay: 1, x: "15%", y: "70%" },
  { icon: Heart, color: "text-orange-500", delay: 1.5, x: "85%", y: "65%" },
  { icon: Star, color: "text-cyan-500", delay: 2, x: "50%", y: "80%" },
];

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const avatarRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  // Parallax effects
  const y = useTransform(scrollY, [0, 500], [0, -100]);
  const opacity = useTransform(scrollY, [0, 300], [1, 0]);

  // GSAP animations on mount
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      if (titleRef.current) {
        gsap.from(titleRef.current.children, {
          duration: 1.2,
          y: 100,
          opacity: 0,
          stagger: 0.2,
          ease: "power3.out",
          delay: 0.5,
        });
      }

      // Subtitle animation
      if (subtitleRef.current) {
        gsap.from(subtitleRef.current, {
          duration: 1,
          y: 50,
          opacity: 0,
          ease: "power2.out",
          delay: 1.2,
        });
      }

      // Avatar animation
      if (avatarRef.current) {
        gsap.from(avatarRef.current, {
          duration: 1.5,
          scale: 0,
          rotation: 180,
          ease: "back.out(1.7)",
          delay: 0.8,
        });
      }
    });

    setIsLoaded(true);
    return () => ctx.revert();
  }, []);

  const handleScrollToProjects = () => {
    scrollToSection("#projects");
  };

  const handleScrollToContact = () => {
    scrollToSection("#contact");
  };

  const handlePlayReel = () => {
    // Logic cho play demo reel
    console.log("Playing demo reel...");
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Gradient Orbs */}
        <motion.div
          className="absolute top-20 left-20 w-72 h-72 bg-gradient-to-r from-pink-400/30 to-purple-400/30 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-20 w-80 h-80 bg-gradient-to-r from-blue-400/30 to-cyan-400/30 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        {/* Floating Elements */}
        {floatingElements.map((element, index) => {
          const Icon = element.icon;
          return (
            <motion.div
              key={index}
              className={cn("absolute", element.color)}
              style={{ left: element.x, top: element.y }}
              initial={{ opacity: 0, scale: 0 }}
              animate={{
                opacity: 1,
                scale: 1,
                y: [0, -20, 0],
                rotate: [0, 180, 360],
              }}
              transition={{
                opacity: { delay: element.delay, duration: 0.5 },
                scale: { delay: element.delay, duration: 0.5 },
                y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
                rotate: { duration: 10, repeat: Infinity, ease: "linear" },
              }}
            >
              <Icon size={24} />
            </motion.div>
          );
        })}
      </div>

      {/* Main Content */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate={isLoaded ? "animate" : "initial"}
            className="text-center lg:text-left"
          >
            {/* Greeting */}
            <motion.div
              variants={fadeInUp}
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-full border border-pink-200/50 mb-6"
            >
              <Sparkles className="w-4 h-4 text-pink-500 mr-2" />
              <span className="text-sm font-medium text-pink-700">
                Xin chào! Tôi là Graphic Designer
              </span>
            </motion.div>

            {/* Main Title */}
            <h1
              ref={titleRef}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
            >
              <span className="block text-gray-900">Tôi là</span>
              <span className="block bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                Hoàng
              </span>
              <span className="block text-2xl md:text-3xl lg:text-4xl text-gray-700 font-medium">
                với chất riêng
              </span>
            </h1>

            {/* Subtitle */}
            <p
              ref={subtitleRef}
              className="text-lg md:text-xl text-gray-600 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed"
            >
              Tạo ra những thiết kế{" "}
              <span className="font-semibold text-pink-600">độc đáo</span>,{" "}
              <span className="font-semibold text-purple-600">sáng tạo</span> và{" "}
              <span className="font-semibold text-blue-600">ấn tượng</span> - từ
              branding đến content visual, tôi biến ý tưởng thành hiện thực một
              cách "chipi" nhất!
            </p>

            {/* Action Buttons */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <motion.button
                onClick={handleScrollToProjects}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white font-semibold rounded-full shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Palette className="w-5 h-5" />
                <span>Xem Portfolio</span>
              </motion.button>

              <motion.button
                onClick={handlePlayReel}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-white text-gray-900 font-semibold rounded-full border-2 border-gray-200 hover:border-purple-300 hover:bg-purple-50 transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg"
              >
                <Play className="w-5 h-5" />
                <span>Demo Reel</span>
              </motion.button>

              <motion.button
                onClick={handleScrollToContact}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-orange-500 to-pink-500 text-white font-semibold rounded-full shadow-lg shadow-orange-500/25 hover:shadow-xl hover:shadow-orange-500/30 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <Download className="w-5 h-5" />
                <span>Tải CV</span>
              </motion.button>
            </motion.div>

            {/* Social Stats */}
            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap justify-center lg:justify-start gap-6"
            >
              {socialStats.map((stat, index) => {
                const Icon = stat.icon;
                return (
                  <motion.div
                    key={stat.platform}
                    variants={scaleIn}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="flex items-center space-x-2 px-4 py-2 bg-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div
                      className={cn(
                        "w-8 h-8 rounded-full flex items-center justify-center bg-gradient-to-r",
                        stat.color
                      )}
                    >
                      <Icon className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <div className="text-sm font-bold text-gray-900">
                        {stat.followers}
                      </div>
                      <div className="text-xs text-gray-500">
                        {stat.platform}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          {/* Right Content - Avatar */}
          <motion.div
            variants={fadeInRight}
            initial="initial"
            animate={isLoaded ? "animate" : "initial"}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Main Avatar */}
              <motion.div
                ref={avatarRef}
                variants={floatingAnimation}
                className="relative w-80 h-80 md:w-96 md:h-96"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-full blur-xl opacity-20"></div>
                <div className="relative w-full h-full bg-gradient-to-br from-pink-400/20 to-purple-400/20 rounded-full border-4 border-white shadow-2xl overflow-hidden">
                  {/* Placeholder for actual image */}
                  <div className="w-full h-full bg-gradient-to-br from-pink-100 to-purple-100 flex items-center justify-center">
                    <div className="text-center">
                      <Palette className="w-16 h-16 text-purple-500 mx-auto mb-4" />
                      <p className="text-purple-600 font-medium">
                        Your Photo Here
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Badges */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.5, duration: 0.5 }}
                className="absolute -top-4 -right-4 px-4 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-full shadow-lg"
              >
                <div className="flex items-center space-x-1">
                  <Star className="w-4 h-4" />
                  <span className="text-sm font-semibold">5+ năm</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2, duration: 0.5 }}
                className="absolute -bottom-4 -left-4 px-4 py-2 bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-full shadow-lg"
              >
                <div className="flex items-center space-x-1">
                  <Heart className="w-4 h-4" />
                  <span className="text-sm font-semibold">100+ dự án</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          onClick={() => scrollToSection("#about")}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          whileHover={{ scale: 1.1 }}
          className="flex flex-col items-center space-y-2 text-gray-500 hover:text-gray-700 transition-colors duration-300"
        >
          <span className="text-sm font-medium">Cuộn xuống</span>
          <ArrowDown className="w-5 h-5" />
        </motion.button>
      </motion.div>
    </section>
  );
}
