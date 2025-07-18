"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Video,
  Edit,
  Palette,
  Smartphone,
  TrendingUp,
  Users,
  Sparkles,
  Play,
  Image,
  FileText,
  BarChart3,
  Heart,
  Star,
  Zap,
  Camera,
  Music,
  Lightbulb,
} from "lucide-react";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Skills = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const skillsGridRef = useRef<HTMLDivElement>(null);
  const toolsRef = useRef<HTMLDivElement>(null);
  const [activeSkill, setActiveSkill] = useState(0);

  const controls = useAnimation();
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Progress bar animation
      gsap.fromTo(
        ".progress-bar",
        { width: "0%" },
        {
          width: "100%",
          duration: 1.5,
          ease: "power2.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: skillsGridRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Skill cards stagger animation
      gsap.fromTo(
        ".skill-card",
        { opacity: 0, y: 50, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: skillsGridRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Tools floating animation
      gsap.to(".tool-icon", {
        y: -5,
        rotation: 3,
        duration: 2,
        ease: "power2.inOut",
        stagger: 0.1,
        repeat: -1,
        yoyo: true,
      });

      // Floating background elements
      gsap.to(".floating-bg", {
        y: -20,
        rotation: 5,
        duration: 3,
        ease: "power2.inOut",
        stagger: 0.2,
        repeat: -1,
        yoyo: true,
      });
    }, sectionRef);

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
        damping: 12,
      },
    },
  } as any;

  const mainSkills = [
    {
      icon: <Video className="w-8 h-8" />,
      title: "Video Editing",
      description: "Tạo ra những video viral với chất lượng điện ảnh",
      level: 95,
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
      projects: "200+ videos",
    },
    {
      icon: <Edit className="w-8 h-8" />,
      title: "Script Writing",
      description: "Viết kịch bản hấp dẫn, tạo engagement cao",
      level: 90,
      color: "from-pink-500 to-pink-600",
      bgColor: "bg-pink-50",
      projects: "150+ scripts",
    },
    {
      icon: <Palette className="w-8 h-8" />,
      title: "Creative Design",
      description: "Thiết kế thumbnail, poster và visual identity",
      level: 85,
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
      projects: "300+ designs",
    },
    {
      icon: <Smartphone className="w-8 h-8" />,
      title: "Social Media",
      description: "Quản lý và phát triển nhiều platform khác nhau",
      level: 92,
      color: "from-blue-500 to-blue-600",
      bgColor: "bg-blue-50",
      projects: "5+ platforms",
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Trend Analysis",
      description: "Bắt trend nhanh và áp dụng hiệu quả",
      level: 88,
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
      projects: "50+ trends",
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Community Building",
      description: "Xây dựng và nuôi dưỡng cộng đồng trung thành",
      level: 87,
      color: "from-indigo-500 to-indigo-600",
      bgColor: "bg-indigo-50",
      projects: "50K+ followers",
    },
  ];

  const tools = [
    {
      name: "Premiere Pro",
      icon: "🎬",
      category: "Video",
      color: "bg-purple-100 text-purple-600",
    },
    {
      name: "CapCut",
      icon: "✂️",
      category: "Video",
      color: "bg-pink-100 text-pink-600",
    },
    {
      name: "Canva",
      icon: "🎨",
      category: "Design",
      color: "bg-orange-100 text-orange-600",
    },
    {
      name: "Figma",
      icon: "📐",
      category: "Design",
      color: "bg-blue-100 text-blue-600",
    },
    {
      name: "TikTok",
      icon: "🎵",
      category: "Social",
      color: "bg-red-100 text-red-600",
    },
    {
      name: "Instagram",
      icon: "📸",
      category: "Social",
      color: "bg-pink-100 text-pink-600",
    },
    {
      name: "YouTube",
      icon: "📹",
      category: "Social",
      color: "bg-red-100 text-red-600",
    },
    {
      name: "Notion",
      icon: "📝",
      category: "Productivity",
      color: "bg-gray-100 text-gray-600",
    },
    {
      name: "ChatGPT",
      icon: "🤖",
      category: "AI",
      color: "bg-green-100 text-green-600",
    },
    {
      name: "Midjourney",
      icon: "🎭",
      category: "AI",
      color: "bg-purple-100 text-purple-600",
    },
  ];

  const achievements = [
    {
      icon: "🏆",
      title: "Top Creator",
      description: "Top 1% creators trên TikTok",
    },
    {
      icon: "💎",
      title: "Viral Master",
      description: "10+ videos đạt 1M+ views",
    },
    {
      icon: "🌟",
      title: "Brand Partner",
      description: "Hợp tác với 20+ brands",
    },
    {
      icon: "🎯",
      title: "Engagement King",
      description: "Tỷ lệ tương tác 8.5%",
    },
  ];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-20 lg:py-32 bg-gradient-to-br from-white via-purple-50 to-pink-50 overflow-hidden"
    >
      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 floating-bg">
          <div className="w-32 h-32 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full opacity-20 blur-xl"></div>
        </div>
        <div className="absolute top-40 right-20 floating-bg">
          <div className="w-24 h-24 bg-gradient-to-r from-pink-200 to-orange-200 rounded-full opacity-20 blur-xl"></div>
        </div>
        <div className="absolute bottom-40 left-20 floating-bg">
          <div className="w-28 h-28 bg-gradient-to-r from-orange-200 to-yellow-200 rounded-full opacity-20 blur-xl"></div>
        </div>
        <div className="absolute bottom-20 right-10 floating-bg">
          <div className="w-20 h-20 bg-gradient-to-r from-blue-200 to-purple-200 rounded-full opacity-20 blur-xl"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full px-6 py-3 mb-6">
              <Sparkles className="w-5 h-5 text-purple-500" />
              <span className="text-sm font-semibold text-purple-700">
                Kỹ năng chuyên môn
              </span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Kỹ năng{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                "chipi"
              </span>{" "}
              của tôi
            </h2>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Từ việc tạo nội dung viral đến xây dựng thương hiệu cá nhân, tôi
              thành thạo nhiều kỹ năng để tạo ra impact mạnh mẽ trong thế giới
              số
            </p>
          </motion.div>

          {/* Main Skills Grid */}
          <motion.div
            ref={skillsGridRef}
            variants={itemVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
          >
            {mainSkills.map((skill, index) => (
              <div
                key={index}
                className="skill-card group cursor-pointer"
                onMouseEnter={() => setActiveSkill(index)}
              >
                <div
                  className={`relative ${skill.bgColor} rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/50 group-hover:scale-105`}
                >
                  {/* Skill Icon */}
                  <div
                    className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${skill.color} rounded-2xl text-white mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    {skill.icon}
                  </div>

                  {/* Skill Content */}
                  <div className="space-y-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {skill.title}
                      </h3>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {skill.description}
                      </p>
                    </div>

                    {/* Progress Bar */}
                    <div className="space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium text-gray-700">
                          Skill Level
                        </span>
                        <span className="text-sm font-bold text-gray-900">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-white/60 rounded-full h-2 overflow-hidden">
                        <div
                          className={`progress-bar h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1000`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>

                    {/* Projects Count */}
                    <div className="flex items-center justify-between pt-2">
                      <span className="text-xs text-gray-500">
                        Dự án hoàn thành
                      </span>
                      <span className="text-sm font-semibold text-gray-700">
                        {skill.projects}
                      </span>
                    </div>
                  </div>

                  {/* Floating Badge */}
                  <motion.div
                    initial={{ scale: 0, rotate: -45 }}
                    animate={{
                      scale: activeSkill === index ? 1 : 0,
                      rotate: activeSkill === index ? 0 : -45,
                    }}
                    transition={{ type: "spring", stiffness: 200, damping: 15 }}
                    className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full flex items-center justify-center shadow-lg"
                  >
                    <Star className="w-4 h-4 text-white" />
                  </motion.div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Tools & Software */}
          <motion.div variants={itemVariants} className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Công cụ yêu thích
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Những công cụ giúp tôi tạo ra nội dung chất lượng cao và quản lý
                hiệu quả
              </p>
            </div>

            <div
              ref={toolsRef}
              className="grid grid-cols-2 md:grid-cols-5 gap-6"
            >
              {tools.map((tool, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05, rotate: 2 }}
                  whileTap={{ scale: 0.95 }}
                  className="tool-icon group"
                >
                  <div
                    className={`${tool.color} rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50 group-hover:border-white`}
                  >
                    <div className="text-3xl mb-3">{tool.icon}</div>
                    <h4 className="font-bold text-sm mb-1">{tool.name}</h4>
                    <p className="text-xs opacity-70">{tool.category}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div variants={itemVariants} className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
                Thành tích nổi bật
              </h3>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Những cột mốc đáng tự hào trong hành trình content creator
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.05 }}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100 hover:border-purple-200"
                >
                  <div className="text-4xl mb-4">{achievement.icon}</div>
                  <h4 className="text-lg font-bold text-gray-900 mb-2">
                    {achievement.title}
                  </h4>
                  <p className="text-sm text-gray-600">
                    {achievement.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Skills Showcase */}
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-3xl p-8 lg:p-12 text-white text-center"
          >
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center justify-center space-x-2 mb-6">
                <Zap className="w-6 h-6" />
                <span className="text-sm font-semibold uppercase tracking-wide">
                  Specialty
                </span>
              </div>

              <h3 className="text-3xl lg:text-4xl font-bold mb-6">
                Tạo nội dung viral trong 24h
              </h3>

              <p className="text-lg lg:text-xl opacity-90 mb-8 leading-relaxed">
                Với kinh nghiệm và sự hiểu biết sâu sắc về xu hướng, tôi có thể
                tạo ra những nội dung có khả năng viral cao, tương tác mạnh và
                lan tỏa rộng rãi trong cộng đồng
              </p>

              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <Camera className="w-8 h-8 mb-3 mx-auto" />
                  <h4 className="font-bold mb-2">Content Creation</h4>
                  <p className="text-sm opacity-80">
                    Từ ý tưởng đến sản phẩm hoàn thiện
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <TrendingUp className="w-8 h-8 mb-3 mx-auto" />
                  <h4 className="font-bold mb-2">Viral Strategy</h4>
                  <p className="text-sm opacity-80">
                    Chiến lược lan tỏa hiệu quả
                  </p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6">
                  <Users className="w-8 h-8 mb-3 mx-auto" />
                  <h4 className="font-bold mb-2">Community Engagement</h4>
                  <p className="text-sm opacity-80">
                    Xây dựng mối quan hệ bền vững
                  </p>
                </div>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const element = document.querySelector("#contact");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center space-x-2 bg-white text-purple-600 font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <span>Hợp tác với tôi</span>
                <motion.div
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <Heart className="w-5 h-5" />
                </motion.div>
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
