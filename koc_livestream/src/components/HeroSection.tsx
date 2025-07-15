"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import {
  Play,
  Users,
  TrendingUp,
  Award,
  ChevronDown,
  Sparkles,
  Zap,
} from "lucide-react";
import { cn, scrollToSection } from "@/lib/utils";
import Button from "@/components/ui/Button";

interface StatsItem {
  label: string;
  value: string;
  icon: React.ReactNode;
  color: string;
}

const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [currentWord, setCurrentWord] = useState(0);
  const heroRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const words = ["Livestream", "Content Creator", "KOC", "Influencer"];
  const stats: StatsItem[] = [
    {
      label: "Followers",
      value: "150K+",
      icon: <Users className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      label: "Engagement",
      value: "95%",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
    },
    {
      label: "Campaigns",
      value: "500+",
      icon: <Award className="w-6 h-6" />,
      color: "from-purple-500 to-pink-500",
    },
    {
      label: "Brands",
      value: "100+",
      icon: <Sparkles className="w-6 h-6" />,
      color: "from-yellow-500 to-orange-500",
    },
  ];

  useEffect(() => {
    setIsVisible(true);

    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  const floatingVariants = {
    animate: {
      y: [-20, 20, -20],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  return (
    <>
      <section
        ref={heroRef}
        id="home"
        className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-blue-900/20 to-pink-900/20" />
          {[...Array(50)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-white rounded-full"
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
                delay: Math.random() * 5,
              }}
            />
          ))}
        </div>

        <motion.div
          style={{ y }}
          className="absolute inset-0 pointer-events-none"
        >
          <div className="absolute top-20 left-20 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
        </motion.div>

        <motion.div
          style={{ opacity }}
          className="container mx-auto px-4 relative z-10"
        >
          <motion.div
            className="text-center max-w-5xl mx-auto"
            variants={containerVariants}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
          >
            <motion.div variants={itemVariants as any} className="mb-8">
              <div className="flex items-center justify-center mb-4">
                <motion.div
                  className="px-4 py-2 glass rounded-full border border-white/20"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <span className="text-purple-400 font-medium flex items-center space-x-2">
                    <Zap className="w-4 h-4" />
                    <span>Chuyên gia KOC Livestream</span>
                  </span>
                </motion.div>
              </div>

              <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6">
                <span className="block">Kết nối thương hiệu</span>
                <span className="block">
                  với{" "}
                  <span className="relative inline-block">
                    <span className="gradient-text-purple animate-text-glow">
                      {words[currentWord]}
                    </span>
                    <motion.div
                      className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.8, ease: "easeOut" }}
                    />
                  </span>
                </span>
              </h1>

              <motion.p
                className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed"
                variants={itemVariants as any}
              >
                Tôi là một KOC chuyên nghiệp với hơn 5 năm kinh nghiệm trong
                lĩnh vực livestream, giúp các thương hiệu tiếp cận và tương tác
                với khách hàng một cách hiệu quả nhất.
              </motion.p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              variants={itemVariants as any}
              className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-16"
            >
              <Button
                variant="gradient"
                size="lg"
                icon={<Play className="w-5 h-5" />}
                glow
                onClick={() => scrollToSection("portfolio")}
              >
                Xem Portfolio
              </Button>

              <Button
                variant="glass"
                size="lg"
                onClick={() => scrollToSection("contact")}
              >
                Liên hệ hợp tác
              </Button>
            </motion.div>

            {/* Stats */}
            <motion.div
              variants={itemVariants as any}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="glass p-6 rounded-2xl border border-white/20 hover-lift group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  variants={itemVariants as any}
                >
                  <div
                    className={cn(
                      "w-12 h-12 rounded-xl bg-gradient-to-r mb-4 flex items-center justify-center text-white mx-auto group-hover:scale-110 transition-transform duration-300",
                      stat.color
                    )}
                  >
                    {stat.icon}
                  </div>
                  <div className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-white mb-1 group-hover:text-purple-400 transition-colors">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                      {stat.label}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            {/* Floating Avatar */}
            <motion.div
              variants={floatingVariants as any}
              animate="animate"
              className="relative mx-auto w-32 h-32 md:w-40 md:h-40 mb-8"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-lg opacity-50" />
              <div className="relative w-full h-full bg-gradient-to-r from-purple-600 to-pink-600 rounded-full p-1">
                <div className="w-full h-full bg-gray-800 rounded-full flex items-center justify-center">
                  <span className="text-4xl md:text-5xl font-bold text-white">
                    K
                  </span>
                </div>
              </div>

              {/* Status Indicator */}
              <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-500 rounded-full border-2 border-white animate-pulse">
                <div className="absolute inset-0 bg-green-500 rounded-full animate-ping" />
              </div>
            </motion.div>

            {/* Scroll Indicator */}
            <motion.div
              variants={itemVariants as any}
              className="flex flex-col items-center space-y-4"
            >
              <span className="text-gray-400 text-sm">
                Cuộn xuống để khám phá
              </span>
              <motion.button
                onClick={() => scrollToSection("about")}
                className="p-3 rounded-full glass border border-white/20 hover:bg-white/10 transition-colors group"
                animate={{
                  y: [0, 10, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
              >
                <ChevronDown className="w-6 h-6 text-purple-400 group-hover:text-purple-300 transition-colors" />
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>

        <div className="absolute top-20 left-10 w-20 h-20 border border-purple-500/30 rounded-full animate-pulse" />
        <div className="absolute bottom-20 right-10 w-16 h-16 border border-pink-500/30 rounded-full animate-pulse delay-1000" />
        <div className="absolute top-1/2 left-20 w-12 h-12 border border-blue-500/30 rounded-full animate-pulse delay-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent pointer-events-none" />
      </section>
    </>
  );
};

export default HeroSection;
