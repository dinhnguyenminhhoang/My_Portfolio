"use client";

import { motion } from "framer-motion";
import { ArrowDown, Sparkles, Zap } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/utils";

export default function Hero() {
  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-black via-purple-900/20 to-black">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl"
        />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="space-y-8"
        >
          {/* Floating Icons */}
          <div className="flex justify-center space-x-8 mb-8">
            <motion.div
              animate={{
                y: [0, -10, 0],
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="text-pink-400"
            >
              <Sparkles size={32} />
            </motion.div>
            <motion.div
              animate={{
                y: [0, -15, 0],
                rotate: [0, -5, 5, 0],
              }}
              transition={{
                duration: 2.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5,
              }}
              className="text-purple-400"
            >
              <Zap size={36} />
            </motion.div>
          </div>

          {/* Main Title */}
          <motion.h1
            variants={fadeInUp}
            className="text-4xl md:text-6xl lg:text-7xl font-bold leading-tight"
          >
            <span className="block text-white mb-2">Xin chào, tôi là</span>
            <span className="block bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
              Hoàng
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeInUp}
            className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto leading-relaxed"
          >
            Một{" "}
            <span className="text-pink-400 font-semibold">Project Manager</span>{" "}
            với
            <span className="text-purple-400 font-semibold"> chất riêng</span> -
            Sáng tạo, năng động và luôn đam mê tạo ra những dự án
            <span className="text-cyan-400 font-semibold"> ấn tượng</span>
          </motion.p>

          {/* Description */}
          <motion.p
            variants={fadeInUp}
            className="text-lg text-gray-400 max-w-xl mx-auto"
          >
            Chuyên quản lý dự án, tối ưu quy trình và xây dựng đội nhóm hiệu
            quả. Luôn tìm kiếm những cách tiếp cận mới mẻ và sáng tạo.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8"
          >
            <motion.button
              onClick={() => scrollToSection("#projects")}
              whileHover={{
                scale: 1.05,
                boxShadow: "0 0 25px rgba(168, 85, 247, 0.4)",
              }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-gradient-to-r from-pink-500 to-purple-600 text-white font-semibold rounded-full hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-purple-500/25"
            >
              Xem Portfolio
            </motion.button>

            <motion.button
              onClick={() => scrollToSection("#contact")}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-cyan-500 text-cyan-400 font-semibold rounded-full hover:bg-cyan-500 hover:text-black transition-all duration-300"
            >
              Liên hệ ngay
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.button
          onClick={() => scrollToSection("#about")}
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-gray-400 hover:text-white transition-colors duration-300"
        >
          <ArrowDown size={24} />
        </motion.button>
      </motion.div>
    </section>
  );
}
