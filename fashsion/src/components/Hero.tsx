"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import { ArrowDown, Sparkles, Camera, Heart } from "lucide-react";
import { gsap } from "gsap";

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false });

  // GSAP Animations
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

      // Background gradient animation
      gsap.to(".gradient-bg", {
        backgroundPosition: "200% center",
        duration: 8,
        ease: "none",
        repeat: -1,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Mouse interaction
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    mouseX.set(x * 0.1);
    mouseY.set(y * 0.1);
  };

  const textVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.8,
        ease: [0.25, 0.4, 0.25, 1],
      },
    }),
  } as any;

  const iconVariants = {
    hidden: { scale: 0, rotate: -180 },
    visible: {
      scale: 1,
      rotate: 0,
      transition: {
        type: "spring",
        stiffness: 200,
        damping: 15,
      },
    },
  } as any;

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50"
      onMouseMove={handleMouseMove}
    >
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-bg bg-gradient-to-r from-purple-200/30 via-pink-200/30 to-orange-200/30 bg-[length:200%_100%]" />

      {/* Floating decorative elements */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          className="floating-element absolute top-20 left-20 w-4 h-4 bg-purple-300 rounded-full opacity-60"
          style={{ x: springX, y: springY }}
        />
        <motion.div
          className="floating-element absolute top-40 right-32 w-6 h-6 bg-pink-300 rounded-full opacity-50"
          style={{ x: springX, y: springY, scale: 1.2 }}
        />
        <motion.div
          className="floating-element absolute bottom-40 left-40 w-5 h-5 bg-orange-300 rounded-full opacity-70"
          style={{ x: springX, y: springY, scale: 0.8 }}
        />
        <motion.div
          className="floating-element absolute bottom-20 right-20 w-3 h-3 bg-blue-300 rounded-full opacity-60"
          style={{ x: springX, y: springY, scale: 1.5 }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          {/* Greeting with icon */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={0}
            variants={textVariants}
            className="flex items-center justify-center space-x-3"
          >
            <motion.div variants={iconVariants} className="text-2xl">
              👋
            </motion.div>
            <span className="text-lg lg:text-xl text-gray-600 font-medium">
              Xin chào, tôi là
            </span>
          </motion.div>

          {/* Main title */}
          <motion.h1
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={1}
            variants={textVariants}
            className="text-4xl sm:text-6xl lg:text-8xl font-bold leading-tight"
          >
            <span className="block bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
              Hoàng
            </span>
            <span className="block text-gray-800 text-2xl sm:text-4xl lg:text-5xl mt-2">
              Fashion Model
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={2}
            variants={textVariants}
            className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Sáng tạo những khoảnh khắc thời trang đẹp nhất với{" "}
            <span className="relative">
              <span className="bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent font-semibold">
                chất riêng
              </span>
              <motion.div
                initial={{ scaleX: 0 }}
                animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ delay: 1.5, duration: 0.8 }}
                className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-pink-500 to-purple-500 origin-left"
              />
            </span>{" "}
            và phong cách cá nhân độc đáo
          </motion.p>

          {/* Feature highlights */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={3}
            variants={textVariants}
            className="flex flex-wrap items-center justify-center gap-6 text-sm lg:text-base"
          >
            {[
              { icon: Camera, text: "Fashion Photography" },
              { icon: Sparkles, text: "Creative Direction" },
              { icon: Heart, text: "Brand Storytelling" },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05, y: -2 }}
                className="flex items-center space-x-2 bg-white/70 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg border border-white/50"
              >
                <item.icon size={16} className="text-purple-600" />
                <span className="text-gray-700 font-medium">{item.text}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            custom={4}
            variants={textVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(147, 51, 234, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full overflow-hidden shadow-2xl"
            >
              <span className="relative z-10">Xem Portfolio</span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-pink-600 to-orange-500"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-gray-300 text-gray-700 font-semibold rounded-full hover:border-purple-500 hover:text-purple-600 transition-colors duration-300"
            >
              Liên hệ ngay
            </motion.button>
          </motion.div>

          {/* Scroll indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 2, duration: 0.8 }}
            className="pt-16"
          >
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="flex flex-col items-center space-y-2 text-gray-400"
            >
              <span className="text-sm font-medium">
                Cuộn xuống để khám phá
              </span>
              <ArrowDown size={20} />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern
              id="grid"
              width="60"
              height="60"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 60 0 L 0 0 0 60"
                fill="none"
                stroke="purple"
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
