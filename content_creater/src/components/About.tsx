"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Camera,
  Video,
  Palette,
  Users,
  TrendingUp,
  Award,
  Code,
  Mic,
  Edit3,
  Zap,
} from "lucide-react";
import { gsap } from "gsap";
import { cn } from "@/lib/utils";

const skills = [
  {
    name: "Video Production",
    icon: Video,
    level: 95,
    color: "from-red-500 to-pink-500",
    description: "Sản xuất video chuyên nghiệp, từ concept đến post-production",
  },
  {
    name: "Content Strategy",
    icon: TrendingUp,
    level: 90,
    color: "from-purple-500 to-blue-500",
    description: "Xây dựng chiến lược nội dung hiệu quả cho từng platform",
  },
  {
    name: "Photography",
    icon: Camera,
    level: 85,
    color: "from-green-500 to-emerald-500",
    description: "Chụp ảnh lifestyle, portrait và product photography",
  },
  {
    name: "Community Building",
    icon: Users,
    level: 88,
    color: "from-yellow-500 to-orange-500",
    description: "Xây dựng và phát triển cộng đồng trên social media",
  },
  {
    name: "Creative Design",
    icon: Palette,
    level: 80,
    color: "from-pink-500 to-purple-500",
    description: "Thiết kế graphics, thumbnails và visual identity",
  },
  {
    name: "Audio Production",
    icon: Mic,
    level: 75,
    color: "from-blue-500 to-cyan-500",
    description: "Sản xuất podcast, voice-over và audio editing",
  },
];

const tools = [
  { name: "Adobe Premiere Pro", category: "Video" },
  { name: "After Effects", category: "Animation" },
  { name: "Photoshop", category: "Photo" },
  { name: "Figma", category: "Design" },
  { name: "Canva", category: "Graphics" },
  { name: "Final Cut Pro", category: "Video" },
  { name: "Lightroom", category: "Photo" },
  { name: "Audacity", category: "Audio" },
];

const achievements = [
  {
    icon: Award,
    title: "1M+ Followers",
    description: "Tổng lượng followers trên các platform",
    color: "text-yellow-400",
  },
  {
    icon: Zap,
    title: "500+ Projects",
    description: "Dự án content đã hoàn thành thành công",
    color: "text-purple-400",
  },
  {
    icon: TrendingUp,
    title: "50M+ Views",
    description: "Tổng lượt xem trên tất cả nền tảng",
    color: "text-green-400",
  },
  {
    icon: Users,
    title: "Brand Partnerships",
    description: "Hợp tác với 100+ thương hiệu uy tín",
    color: "text-blue-400",
  },
];

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const [animatedSkills, setAnimatedSkills] = useState<number[]>([]);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const skillsInView = useInView(skillsRef, { once: true, margin: "-50px" });

  useEffect(() => {
    if (skillsInView && animatedSkills.length === 0) {
      // Animate skill bars
      skills.forEach((skill, index) => {
        setTimeout(() => {
          setAnimatedSkills((prev) => [...prev, index]);
        }, index * 200);
      });
    }
  }, [skillsInView, animatedSkills.length]);

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
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  } as any;

  return (
    <section id="about" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={sectionRef}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.span
              initial={{ scale: 0, opacity: 0 }}
              animate={
                isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }
              }
              transition={{ delay: 0.5, duration: 0.6, ease: "backOut" }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full border border-purple-500/30 text-purple-300 text-sm font-medium mb-6"
            >
              <Edit3 className="w-4 h-4" />
              Về tôi
            </motion.span>

            <h2 className="text-3xl md:text-5xl font-bold font-poppins mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Passion for Creation
              </span>
            </h2>

            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Với hơn 5 năm kinh nghiệm trong lĩnh vực sáng tạo nội dung, tôi
              chuyên tạo ra những câu chuyện độc đáo và truyền cảm hứng. Từ
              video viral đến chiến dịch brand awareness, mỗi dự án đều mang dấu
              ấn riêng biệt.
            </p>
          </motion.div>

          {/* Skills Grid */}
          <motion.div ref={skillsRef} variants={itemVariants} className="mb-20">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-white">
              Kỹ năng chuyên môn
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ x: index % 2 === 0 ? -60 : 60, opacity: 0 }}
                  animate={
                    isInView
                      ? { x: 0, opacity: 1 }
                      : { x: index % 2 === 0 ? -60 : 60, opacity: 0 }
                  }
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                  className="group"
                >
                  <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300">
                    <div className="flex items-center mb-4">
                      <div
                        className={cn(
                          "p-3 rounded-lg bg-gradient-to-r mr-4 group-hover:scale-110 transition-transform duration-300",
                          skill.color
                        )}
                      >
                        <skill.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-white mb-1">
                          {skill.name}
                        </h4>
                        <p className="text-sm text-gray-400">
                          {skill.description}
                        </p>
                      </div>
                    </div>

                    {/* Skill Bar */}
                    <div className="relative">
                      <div className="flex justify-between text-sm text-gray-300 mb-2">
                        <span>Thành thạo</span>
                        <span>{skill.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <motion.div
                          className={cn(
                            "h-2 rounded-full bg-gradient-to-r",
                            skill.color
                          )}
                          initial={{ width: 0 }}
                          animate={
                            animatedSkills.includes(index)
                              ? { width: `${skill.level}%` }
                              : { width: 0 }
                          }
                          transition={{ duration: 1.5, ease: "easeOut" }}
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Tools Section */}
          <motion.div variants={itemVariants} className="mb-20">
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-white">
              Công cụ sử dụng
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {tools.map((tool, index) => (
                <motion.div
                  key={tool.name}
                  initial={{ scale: 0, opacity: 0 }}
                  animate={
                    isInView
                      ? { scale: 1, opacity: 1 }
                      : { scale: 0, opacity: 0 }
                  }
                  transition={{ delay: 1.2 + index * 0.1, duration: 0.5 }}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-lg p-4 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 text-center group"
                >
                  <Code className="w-8 h-8 text-purple-400 mx-auto mb-2 group-hover:scale-110 transition-transform duration-300" />
                  <h4 className="font-semibold text-white text-sm mb-1">
                    {tool.name}
                  </h4>
                  <span className="text-xs text-purple-300 bg-purple-500/20 px-2 py-1 rounded-full">
                    {tool.category}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div variants={itemVariants}>
            <h3 className="text-2xl md:text-3xl font-bold text-center mb-12 text-white">
              Thành tích nổi bật
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={achievement.title}
                  initial={{ y: 60, opacity: 0 }}
                  animate={
                    isInView ? { y: 0, opacity: 1 } : { y: 60, opacity: 0 }
                  }
                  transition={{ delay: 1.5 + index * 0.15, duration: 0.6 }}
                  whileHover={{ y: -10, scale: 1.05 }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 text-center group"
                >
                  <div className="mb-4">
                    <achievement.icon
                      className={cn(
                        "w-12 h-12 mx-auto group-hover:scale-110 transition-transform duration-300",
                        achievement.color
                      )}
                    />
                  </div>
                  <h4 className="font-bold text-xl text-white mb-2">
                    {achievement.title}
                  </h4>
                  <p className="text-sm text-gray-400">
                    {achievement.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-2 h-2 bg-purple-400 rounded-full opacity-60" />
        <div className="absolute top-1/2 right-10 w-3 h-3 bg-pink-400 rounded-full opacity-40" />
        <div className="absolute bottom-1/4 left-1/3 w-2 h-2 bg-blue-400 rounded-full opacity-50" />
      </div>
    </section>
  );
}
