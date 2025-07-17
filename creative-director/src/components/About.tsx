"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  Award,
  TrendingUp,
  Users,
  Coffee,
  Lightbulb,
  Target,
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import SectionWrapper from "./SectionWrapper";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const achievements = [
    {
      icon: TrendingUp,
      title: "Viral Content Creator",
      description:
        "Tạo ra 100+ video viral với tổng view 2M+ trên các platform",
      color: "text-green-500",
    },
    {
      icon: Award,
      title: "Creative Awards",
      description: "Đạt giải thưởng Creative Campaign của năm 2023",
      color: "text-yellow-500",
    },
    {
      icon: Users,
      title: "Brand Partnerships",
      description: "Hợp tác với 30+ thương hiệu lớn như Shopee, Grab, Tiki",
      color: "text-blue-500",
    },
    {
      icon: Target,
      title: "ROI Focused",
      description: "Tăng trung bình 300% engagement rate cho các campaign",
      color: "text-purple-500",
    },
  ];

  const personalTraits = [
    { emoji: "🔥", text: "Đam mê sáng tạo không giới hạn" },
    { emoji: "⚡", text: "Tư duy trendy, bắt kịp xu hướng" },
    { emoji: "🎯", text: "Hiểu sâu insight Gen Z Việt Nam" },
    { emoji: "🚀", text: "Luôn thử nghiệm format mới" },
  ];

  useEffect(() => {
    // GSAP ScrollTrigger animation for image
    gsap.fromTo(
      imageRef.current,
      {
        scale: 0.8,
        opacity: 0,
        rotation: -10,
      },
      {
        scale: 1,
        opacity: 1,
        rotation: 0,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Cleanup
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <SectionWrapper id="about" className="py-20 bg-gray-50">
      <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image & Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div ref={imageRef} className="relative w-full max-w-md mx-auto">
              {/* Main Image Placeholder */}
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 p-1 shadow-2xl">
                <div className="w-full h-full rounded-3xl bg-white flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-purple-100 to-pink-100 rounded-full flex items-center justify-center">
                      <Lightbulb className="w-16 h-16 text-purple-600" />
                    </div>
                    <p className="text-gray-600 font-medium">
                      Creative Director
                    </p>
                    <p className="text-purple-600 font-bold text-lg">Hoàng</p>
                  </div>
                </div>
              </div>

              {/* Floating Elements */}
              <motion.div
                className="absolute -top-4 -right-4 bg-yellow-400 rounded-full p-3 shadow-lg"
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
              >
                <Coffee className="w-6 h-6 text-white" />
              </motion.div>

              <motion.div
                className="absolute -bottom-4 -left-4 bg-green-400 rounded-full p-3 shadow-lg"
                animate={{ y: [-10, 10, -10] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <TrendingUp className="w-6 h-6 text-white" />
              </motion.div>

              <motion.div
                className="absolute top-1/2 -right-8 bg-blue-400 rounded-full p-2 shadow-lg"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              >
                <Users className="w-4 h-4 text-white" />
              </motion.div>
            </div>

            {/* Stats Cards */}
            <div className="mt-8 grid grid-cols-2 gap-4">
              <motion.div
                className="bg-white p-4 rounded-xl shadow-lg text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-2xl font-bold text-purple-600">2M+</div>
                <div className="text-sm text-gray-600">Total Views</div>
              </motion.div>
              <motion.div
                className="bg-white p-4 rounded-xl shadow-lg text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="text-2xl font-bold text-pink-600">50+</div>
                <div className="text-sm text-gray-600">Projects</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            {/* Section Title */}
            <div>
              <motion.h2
                className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                Creative Director
                <span className="block text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text">
                  với chất riêng
                </span>
              </motion.h2>

              <motion.p
                className="text-lg text-gray-600 leading-relaxed"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
              >
                3+ năm kinh nghiệm tạo nội dung viral và campaigns sáng tạo.
                Chuyên về insight Gen Z, trendy content và brand storytelling.
                Phong cách "chipi" nhưng hiệu quả thực tế! 🔥
              </motion.p>
            </div>

            {/* Personal Traits */}
            <div className="grid grid-cols-2 gap-4">
              {personalTraits.map((trait, index) => (
                <motion.div
                  key={index}
                  className="flex items-center gap-3 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <span className="text-2xl">{trait.emoji}</span>
                  <span className="text-sm font-medium text-gray-700">
                    {trait.text}
                  </span>
                </motion.div>
              ))}
            </div>

            {/* Achievements */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Thành tích nổi bật
              </h3>
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-4 bg-white p-5 rounded-xl shadow-sm hover:shadow-md transition-all duration-300"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div
                    className={`p-3 rounded-full bg-gray-100 ${achievement.color}`}
                  >
                    <achievement.icon className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {achievement.title}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {achievement.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* CTA */}
            <motion.div
              className="pt-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <motion.button
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Tìm hiểu thêm về tôi
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;
