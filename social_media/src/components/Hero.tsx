"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { ArrowDown, Play, Sparkles, Zap, Heart } from "lucide-react";

const Hero = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

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
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  } as any;

  const floatingIcons = [
    { Icon: Sparkles, delay: 0, x: 10, y: 20 },
    { Icon: Zap, delay: 0.5, x: -15, y: -10 },
    { Icon: Heart, delay: 1, x: 20, y: -25 },
  ];

  const scrollToNext = () => {
    const aboutSection = document.querySelector("#about");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 50%, rgba(120, 119, 198, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(255, 119, 198, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 40% 80%, rgba(255, 177, 153, 0.3) 0%, transparent 50%)
            `,
            backgroundSize: "200% 200%",
          }}
        />
      </div>

      {/* Floating Icons */}
      {floatingIcons.map((item, index) => (
        <motion.div
          key={index}
          className="absolute text-white/20"
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.2, 0.5, 0.2],
            scale: [1, 1.2, 1],
            x: [item.x, item.x + 10, item.x],
            y: [item.y, item.y - 10, item.y],
          }}
          transition={{
            duration: 4,
            delay: item.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          style={{
            top: `${20 + index * 20}%`,
            left: `${10 + index * 15}%`,
          }}
        >
          <item.Icon size={32} />
        </motion.div>
      ))}

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="space-y-8"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
          >
            <Sparkles className="w-4 h-4 text-yellow-400 mr-2" />
            <span className="text-white text-sm font-medium">
              Creative Content Creator
            </span>
          </motion.div>

          {/* Main Title */}
          <motion.div variants={itemVariants} className="space-y-4">
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold text-white leading-tight">
              Tôi là{" "}
              <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-indigo-400 bg-clip-text text-transparent">
                Hoàng
              </span>
              <br />
              <span className="text-2xl sm:text-4xl lg:text-5xl font-light text-gray-300">
                Content Creator với{" "}
                <motion.span
                  animate={{
                    color: ["#ff6b9d", "#feca57", "#48cae4", "#ff6b9d"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  className="font-bold"
                >
                  chất riêng
                </motion.span>
              </span>
            </h1>
          </motion.div>

          {/* Description */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed"
          >
            Tạo nên những video viral trên TikTok & Instagram với hơn{" "}
            <span className="text-pink-400 font-semibold">2M+ lượt xem</span>.
            Chuyên biến ý tưởng thành content bùng nổ và chiến lược social media
            hiệu quả.
          </motion.p>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-8 sm:gap-12 py-8"
          >
            {[
              { number: "2M+", label: "Lượt xem" },
              { number: "50K+", label: "Followers" },
              { number: "100+", label: "Video viral" },
              { number: "25+", label: "Brand hợp tác" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="text-center"
                whileHover={{ scale: 1.1 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1 }}
              >
                <div className="text-2xl sm:text-3xl font-bold text-white">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <motion.button
              onClick={() => {
                const projectsSection = document.querySelector("#projects");
                projectsSection?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white rounded-full font-semibold text-lg transition-all duration-300 hover:shadow-2xl hover:shadow-pink-500/25"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center">
                Xem Portfolio
                <motion.div
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                  className="ml-2"
                >
                  →
                </motion.div>
              </span>
            </motion.button>

            <motion.button
              className="group px-8 py-4 border-2 border-white/30 text-white rounded-full font-semibold text-lg backdrop-blur-sm transition-all duration-300 hover:bg-white/10 hover:border-white/50"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="flex items-center">
                <Play className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
                Xem Demo Reel
              </span>
            </motion.button>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          >
            <motion.button
              onClick={scrollToNext}
              className="text-white/60 hover:text-white transition-colors duration-300"
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <ArrowDown className="w-6 h-6" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute top-1/4 right-10 w-32 h-32 border border-white/10 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-1/4 left-10 w-20 h-20 border border-pink-400/20 rounded-full"
        animate={{ rotate: -360 }}
        transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
      />
    </section>
  );
};

export default Hero;
