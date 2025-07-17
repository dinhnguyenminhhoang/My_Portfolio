"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Video,
  Edit3,
  Palette,
  TrendingUp,
  Instagram,
  Users,
  Zap,
  Star,
  Play,
  Camera,
  Mic,
  Sparkles,
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import SectionWrapper from "./SectionWrapper";

gsap.registerPlugin(ScrollTrigger);

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState("creative");
  const circleRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  const categories = [
    {
      id: "creative",
      label: "Sáng tạo",
      icon: Palette,
      color: "from-purple-500 to-pink-500",
    },
    {
      id: "technical",
      label: "Kỹ thuật",
      icon: Edit3,
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: "marketing",
      label: "Marketing",
      icon: TrendingUp,
      color: "from-green-500 to-emerald-500",
    },
    {
      id: "social",
      label: "Social Media",
      icon: Instagram,
      color: "from-pink-500 to-red-500",
    },
  ];

  const skillsData = {
    creative: [
      {
        name: "Video Editing",
        level: 95,
        icon: Video,
        description: "Premiere Pro, After Effects",
      },
      {
        name: "Scriptwriting",
        level: 88,
        icon: Edit3,
        description: "Viral content, storytelling",
      },
      {
        name: "Creative Direction",
        level: 92,
        icon: Camera,
        description: "Brand vision, campaigns",
      },
      {
        name: "Content Strategy",
        level: 85,
        icon: Sparkles,
        description: "Planning, execution",
      },
    ],
    technical: [
      {
        name: "Premiere Pro",
        level: 95,
        icon: Play,
        description: "Professional video editing",
      },
      {
        name: "After Effects",
        level: 80,
        icon: Zap,
        description: "Motion graphics, VFX",
      },
      {
        name: "Photoshop",
        level: 85,
        icon: Palette,
        description: "Digital design, retouching",
      },
      {
        name: "CapCut",
        level: 90,
        icon: Video,
        description: "Mobile editing, trends",
      },
    ],
    marketing: [
      {
        name: "Campaign Strategy",
        level: 88,
        icon: TrendingUp,
        description: "ROI-focused planning",
      },
      {
        name: "Brand Storytelling",
        level: 92,
        icon: Star,
        description: "Emotional connection",
      },
      {
        name: "Audience Research",
        level: 85,
        icon: Users,
        description: "Gen Z insights",
      },
      {
        name: "Performance Analysis",
        level: 80,
        icon: TrendingUp,
        description: "Data-driven decisions",
      },
    ],
    social: [
      {
        name: "TikTok Strategy",
        level: 95,
        icon: Video,
        description: "Viral content creation",
      },
      {
        name: "Instagram Growth",
        level: 88,
        icon: Instagram,
        description: "Engagement optimization",
      },
      {
        name: "Live Streaming",
        level: 85,
        icon: Mic,
        description: "Real-time engagement",
      },
      {
        name: "Community Building",
        level: 90,
        icon: Users,
        description: "Loyal fanbase growth",
      },
    ],
  };

  const tools = [
    { name: "Premiere Pro", logo: "🎬", category: "Video" },
    { name: "After Effects", logo: "⚡", category: "Motion" },
    { name: "Photoshop", logo: "🎨", category: "Design" },
    { name: "CapCut", logo: "📱", category: "Mobile" },
    { name: "Canva", logo: "🎭", category: "Design" },
    { name: "Figma", logo: "🔧", category: "UI/UX" },
  ];

  useEffect(() => {
    // Animate skills circle
    if (circleRef.current) {
      gsap.fromTo(
        circleRef.current,
        { scale: 0, rotation: -180 },
        {
          scale: 1,
          rotation: 0,
          duration: 1.2,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: skillsRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }

    // Animate tools
    gsap.fromTo(
      ".tool-card",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: ".tools-container",
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const currentSkills = skillsData[activeCategory as keyof typeof skillsData];

  return (
    <SectionWrapper id="skills" className="py-20 bg-white">
      <div ref={skillsRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Kỹ năng &
            <span className="block text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text">
              Công cụ chuyên môn
            </span>
          </motion.h2>

          <motion.p
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Từ ý tưởng sáng tạo đến thực hiện chuyên nghiệp, tôi có đủ kỹ năng
            để biến vision thành viral content! 🔥
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Category Navigation */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 space-y-4">
              <h3 className="text-xl font-bold text-gray-900 mb-6">
                Danh mục kỹ năng
              </h3>
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`w-full flex items-center gap-4 p-4 rounded-xl transition-all duration-300 ${
                    activeCategory === category.id
                      ? "bg-gradient-to-r " +
                        category.color +
                        " text-white shadow-lg"
                      : "bg-gray-50 hover:bg-gray-100 text-gray-700"
                  }`}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <category.icon className="w-6 h-6" />
                  <span className="font-medium">{category.label}</span>
                </motion.button>
              ))}
            </div>
          </div>

          {/* Skills Display */}
          <div className="lg:col-span-2">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="space-y-6"
              >
                {currentSkills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    className="bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-shadow"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg">
                        <skill.icon className="w-6 h-6 text-purple-600" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-gray-900">
                            {skill.name}
                          </h4>
                          <span className="text-sm font-medium text-purple-600">
                            {skill.level}%
                          </span>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">
                          {skill.description}
                        </p>

                        {/* Skill Progress Bar */}
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <motion.div
                            className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ duration: 1, delay: index * 0.1 }}
                          />
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Tools Section */}
        <div className="mt-20">
          <motion.h3
            className="text-3xl font-bold text-center text-gray-900 mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Công cụ thường dùng
          </motion.h3>

          <div className="tools-container grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                className="tool-card bg-white p-6 rounded-xl shadow-sm border hover:shadow-md transition-all duration-300 text-center group"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                  {tool.logo}
                </div>
                <h4 className="font-semibold text-gray-900 mb-1">
                  {tool.name}
                </h4>
                <p className="text-xs text-gray-500">{tool.category}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Skills Circle Visualization */}
        <div className="mt-20 flex justify-center">
          <div ref={circleRef} className="relative w-80 h-80">
            <svg
              className="w-full h-full transform -rotate-90"
              viewBox="0 0 100 100"
            >
              {/* Background Circle */}
              <circle
                cx="50"
                cy="50"
                r="40"
                fill="none"
                stroke="#f3f4f6"
                strokeWidth="8"
              />

              {/* Skill Arcs */}
              {currentSkills.map((skill, index) => {
                const angle = (360 / currentSkills.length) * index;
                const strokeDasharray = `${skill.level * 2.51} 251.2`;

                return (
                  <motion.circle
                    key={skill.name}
                    cx="50"
                    cy="50"
                    r="40"
                    fill="none"
                    stroke={`url(#gradient-${index})`}
                    strokeWidth="3"
                    strokeDasharray={strokeDasharray}
                    strokeDashoffset="0"
                    transform={`rotate(${angle} 50 50)`}
                    initial={{ strokeDasharray: "0 251.2" }}
                    animate={{ strokeDasharray }}
                    transition={{ duration: 1, delay: index * 0.2 }}
                  />
                );
              })}

              {/* Gradients */}
              <defs>
                {currentSkills.map((_, index) => (
                  <linearGradient
                    key={index}
                    id={`gradient-${index}`}
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="0%"
                  >
                    <stop offset="0%" stopColor="#8b5cf6" />
                    <stop offset="100%" stopColor="#ec4899" />
                  </linearGradient>
                ))}
              </defs>
            </svg>

            {/* Center Content */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="text-center">
                <div className="text-3xl font-bold text-gray-900">
                  {Math.round(
                    currentSkills.reduce((acc, skill) => acc + skill.level, 0) /
                      currentSkills.length
                  )}
                  %
                </div>
                <div className="text-sm text-gray-600">Average</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Skills;
