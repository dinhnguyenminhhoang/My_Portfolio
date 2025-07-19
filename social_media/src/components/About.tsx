"use client";

import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import { Calendar, MapPin, Award, TrendingUp, Users, Zap } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
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
        delayChildren: 0.1,
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

  const achievements = [
    {
      icon: TrendingUp,
      title: "Viral Content",
      description: "20+ video đạt 100K+ views",
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: Users,
      title: "Community Building",
      description: "Xây dựng cộng đồng 50K+ followers",
      color: "from-purple-500 to-indigo-500",
    },
    {
      icon: Award,
      title: "Brand Partnerships",
      description: "Hợp tác với 25+ thương hiệu lớn",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Zap,
      title: "Creative Strategy",
      description: "Tăng engagement rate 300%+",
      color: "from-orange-500 to-yellow-500",
    },
  ];

  const timeline = [
    {
      year: "2021",
      title: "Bắt đầu Content Creation",
      description: "Khởi đầu với những video đầu tiên trên TikTok",
      icon: "🚀",
    },
    {
      year: "2022",
      title: "Viral đầu tiên",
      description: "Video đầu tiên đạt 500K views, mở ra cơ hội mới",
      icon: "🔥",
    },
    {
      year: "2023",
      title: "Brand Collaborations",
      description: "Bắt đầu hợp tác với các thương hiệu và agency",
      icon: "🤝",
    },
    {
      year: "2024",
      title: "Creative Director",
      description: "Phát triển thành Creative Director cho multiple brands",
      icon: "👑",
    },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="relative py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 -right-32 w-64 h-64 bg-gradient-to-r from-purple-300/20 to-pink-300/20 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/4 -left-32 w-48 h-48 bg-gradient-to-r from-blue-300/20 to-indigo-300/20 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-purple-600 font-medium text-sm">
                Về tôi
              </span>
            </motion.div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
              Câu chuyện của một{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Creative Mind
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Từ một người yêu thích sáng tạo đến Content Creator chuyên nghiệp,
              tôi đã xây dựng nên câu chuyện riêng trong thế giới số.
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left: Personal Info & Story */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="relative">
                <motion.div
                  className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl"
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />
                <div className="relative bg-white rounded-2xl p-8 shadow-xl border border-gray-100">
                  <div className="flex items-start space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                      H
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">
                        Hoàng Nguyễn
                      </h3>
                      <p className="text-purple-600 font-medium">
                        Creative Content Creator
                      </p>
                    </div>
                  </div>

                  <div className="space-y-4 text-gray-600">
                    <div className="flex items-center space-x-3">
                      <MapPin className="w-5 h-5 text-purple-500" />
                      <span>Thành phố Hồ Chí Minh, Việt Nam</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Calendar className="w-5 h-5 text-purple-500" />
                      <span>3+ năm kinh nghiệm</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="prose prose-gray max-w-none">
                <p className="text-gray-600 leading-relaxed">
                  Bắt đầu từ niềm đam mê với việc tạo ra những nội dung độc đáo,
                  tôi đã phát triển từ một người mới bắt đầu thành một Creative
                  Director được nhiều thương hiệu tin tướng.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Với phong cách sáng tạo đầy cá tính và hiểu biết sâu sắc về
                  tâm lý người xem, tôi chuyên tạo ra những video viral và chiến
                  lược content marketing hiệu quả cho các brand trên các
                  platform như TikTok, Instagram và YouTube.
                </p>
              </div>

              <motion.button
                onClick={() => {
                  const contactSection = document.querySelector("#contact");
                  contactSection?.scrollIntoView({ behavior: "smooth" });
                }}
                className="group px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-medium transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center">
                  Kết nối với tôi
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="ml-2"
                  >
                    →
                  </motion.div>
                </span>
              </motion.button>
            </motion.div>

            {/* Right: Timeline */}
            <motion.div variants={itemVariants} className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-8">
                Hành trình phát triển
              </h3>
              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500"></div>

                {timeline.map((item, index) => (
                  <motion.div
                    key={index}
                    className="relative flex items-start space-x-6 pb-8"
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.2 + 0.5 }}
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-white border-4 border-purple-500 rounded-full flex items-center justify-center text-lg relative z-10">
                      {item.icon}
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center space-x-3">
                        <span className="text-purple-600 font-bold text-sm">
                          {item.year}
                        </span>
                        <span className="w-2 h-2 bg-purple-300 rounded-full"></span>
                      </div>
                      <h4 className="text-lg font-semibold text-gray-900">
                        {item.title}
                      </h4>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Achievements Grid */}
          <motion.div variants={itemVariants} className="space-y-8">
            <div className="text-center">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">
                Thành tựu nổi bật
              </h3>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Những con số và kết quả thực tế trong hành trình Content
                Creation
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className="group relative bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                  whileHover={{ y: -5, scale: 1.02 }}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 + 0.8 }}
                >
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-r ${achievement.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <achievement.icon className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    {achievement.title}
                  </h4>
                  <p className="text-gray-600 text-sm">
                    {achievement.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
