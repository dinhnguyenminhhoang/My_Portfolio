"use client";

import React, { useRef, useEffect } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import {
  Palette,
  Camera,
  Heart,
  Sparkles,
  Target,
  Zap,
  Coffee,
  Music,
  Star,
  Trophy,
  Clock,
  Users,
} from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  } as any;

  const imageVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
        delay: 0.2,
      },
    },
  } as any;

  const achievements = [
    {
      icon: Trophy,
      title: "50+ Dự án",
      description: "Hoàn thành xuất sắc",
      color: "from-yellow-400 to-orange-500",
    },
    {
      icon: Users,
      title: "1M+ Lượt xem",
      description: "Trên các nền tảng",
      color: "from-pink-500 to-purple-500",
    },
    {
      icon: Star,
      title: "20+ Khách hàng",
      description: "Tin tưởng và hài lòng",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Clock,
      title: "3+ Năm kinh nghiệm",
      description: "Trong lĩnh vực sáng tạo",
      color: "from-green-500 to-emerald-500",
    },
  ];

  const personalityTraits = [
    { icon: Palette, text: "Sáng tạo không giới hạn", color: "text-pink-500" },
    {
      icon: Camera,
      text: "Chuyên nghiệp trong từng khung hình",
      color: "text-purple-500",
    },
    { icon: Heart, text: "Tình yêu với nghệ thuật", color: "text-red-500" },
    {
      icon: Sparkles,
      text: "Luôn tìm kiếm điều mới lạ",
      color: "text-yellow-500",
    },
    { icon: Target, text: "Tập trung vào chất lượng", color: "text-blue-500" },
    { icon: Zap, text: "Năng lượng tích cực", color: "text-orange-500" },
  ];

  return (
    <section
      id="about"
      className="py-20 lg:py-32 bg-gradient-to-br from-white via-pink-50 to-purple-50 relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-20 h-20 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full blur-xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-xl animate-pulse" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full blur-xl animate-pulse" />
      </div>

      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        ref={ref}
      >
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 lg:mb-24"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center space-x-2 bg-white/70 backdrop-blur-sm px-6 py-3 rounded-full border border-pink-200 shadow-lg mb-6"
          >
            <Heart className="w-5 h-5 text-pink-500" />
            <span className="text-pink-600 font-medium">Về tôi</span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Câu chuyện
            </span>
            <br />
            <span className="text-gray-800">của tôi</span>
          </motion.h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Column - Content */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            {/* Main Story */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-bold text-gray-800">
                Xin chào! Tôi là{" "}
                <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
                  Hoàng
                </span>
              </h3>

              <div className="space-y-4 text-gray-600 text-lg leading-relaxed">
                <p>
                  Một <strong className="text-pink-600">Content Creator</strong>{" "}
                  đam mê với hơn 3 năm kinh nghiệm trong việc tạo ra những nội
                  dung
                  <strong className="text-purple-600">
                    {" "}
                    sinh động
                  </strong> và{" "}
                  <strong className="text-indigo-600">truyền cảm hứng</strong>.
                </p>

                <p>
                  Tôi tin rằng mỗi thương hiệu đều có một câu chuyện riêng đáng
                  kể. Sứ mệnh của tôi là giúp các brand kể câu chuyện đó một
                  cách <strong className="text-pink-600">sáng tạo</strong> và{" "}
                  <strong className="text-purple-600">chân thực</strong> nhất.
                </p>

                <p>
                  Từ việc lên ý tưởng, quay dựng video cho đến xây dựng chiến
                  lược content - tôi luôn mang đến
                  <strong className="text-indigo-600">
                    {" "}
                    chất riêng
                  </strong> và{" "}
                  <strong className="text-pink-600">cảm xúc thật</strong>
                  trong từng sản phẩm.
                </p>
              </div>
            </motion.div>

            {/* Personality Traits */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h4 className="text-xl font-semibold text-gray-800 flex items-center">
                <Sparkles className="w-5 h-5 text-yellow-500 mr-2" />
                Điều đặc biệt về tôi
              </h4>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {personalityTraits.map((trait, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3 p-3 bg-white/60 backdrop-blur-sm rounded-lg border border-pink-100 hover:bg-white/80 transition-all duration-200"
                    variants={itemVariants}
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <trait.icon className={`w-5 h-5 ${trait.color}`} />
                    <span className="text-gray-700 font-medium">
                      {trait.text}
                    </span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Fun Facts */}
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-r from-pink-50 to-purple-50 p-6 rounded-2xl border border-pink-200"
            >
              <h4 className="text-xl font-semibold text-gray-800 mb-4 flex items-center">
                <Coffee className="w-5 h-5 text-orange-500 mr-2" />
                Fun Facts
              </h4>
              <div className="space-y-2 text-gray-600">
                <p>☕ Một ngày không thể thiếu cà phê và âm nhạc</p>
                <p>🎵 Playlist sáng tạo luôn có hơn 200 bài hát</p>
                <p>🌟 Thích khám phá các xu hướng mới trên social media</p>
                <p>📱 Luôn theo dõi 50+ tài khoản inspiration hàng ngày</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Visual */}
          <motion.div
            className="relative"
            variants={imageVariants}
            initial="hidden"
            animate={controls}
          >
            {/* Main Image Placeholder */}
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-pink-400 via-purple-400 to-indigo-400 rounded-3xl overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-purple-500/20 backdrop-blur-sm">
                  <div className="flex items-center justify-center h-full">
                    <div className="text-center text-white">
                      <Camera className="w-16 h-16 mx-auto mb-4 opacity-80" />
                      <p className="text-lg font-medium">Professional Photo</p>
                      <p className="text-sm opacity-80">Coming Soon</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Decorative Elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-12 h-12 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center"
                animate={{ rotate: [0, 360] }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <Star className="w-6 h-6 text-white" />
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Heart className="w-8 h-8 text-white" />
              </motion.div>

              <motion.div
                className="absolute top-1/2 -right-8 w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center"
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Music className="w-4 h-4 text-white" />
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Achievements Grid */}
        <motion.div
          className="mt-20 lg:mt-32"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.h3
            variants={itemVariants}
            className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-800"
          >
            Thành tựu nổi bật
          </motion.h3>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl border border-pink-100 shadow-lg text-center hover:shadow-xl transition-all duration-300"
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${achievement.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                >
                  <achievement.icon className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-xl font-bold text-gray-800 mb-2">
                  {achievement.title}
                </h4>
                <p className="text-gray-600 text-sm">
                  {achievement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
