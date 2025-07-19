"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import {
  Video,
  PenTool,
  Megaphone,
  Camera,
  Palette,
  TrendingUp,
  Play,
  Edit3,
  Target,
  Zap,
  Star,
  Award,
  Instagram,
  Youtube,
  Music,
  Smartphone,
  MonitorPlay,
  Lightbulb,
} from "lucide-react";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();
  const [activeTab, setActiveTab] = useState("skills");

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
        staggerChildren: 0.1,
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

  const skills = [
    {
      icon: Video,
      title: "Video Editing",
      description: "Chuyên gia cắt ghép video sáng tạo",
      level: 95,
      color: "from-red-500 to-pink-500",
      items: ["Storytelling", "Color Grading", "Motion Graphics", "Audio Sync"],
    },
    {
      icon: PenTool,
      title: "Script Writing",
      description: "Viết kịch bản hấp dẫn và viral",
      level: 90,
      color: "from-purple-500 to-indigo-500",
      items: [
        "Creative Writing",
        "Hook Creation",
        "Call-to-Action",
        "Trend Research",
      ],
    },
    {
      icon: Megaphone,
      title: "Social Strategy",
      description: "Chiến lược nội dung hiệu quả",
      level: 88,
      color: "from-blue-500 to-cyan-500",
      items: [
        "Content Planning",
        "Audience Analysis",
        "Trend Forecasting",
        "Engagement Strategy",
      ],
    },
    {
      icon: Camera,
      title: "Photography",
      description: "Chụp ảnh chuyên nghiệp và nghệ thuật",
      level: 85,
      color: "from-green-500 to-emerald-500",
      items: [
        "Portrait",
        "Product Photography",
        "Lifestyle",
        "Brand Photography",
      ],
    },
    {
      icon: Palette,
      title: "Creative Direction",
      description: "Định hướng sáng tạo cho brand",
      level: 92,
      color: "from-yellow-500 to-orange-500",
      items: [
        "Brand Identity",
        "Visual Concept",
        "Art Direction",
        "Creative Strategy",
      ],
    },
    {
      icon: TrendingUp,
      title: "Analytics & Growth",
      description: "Phân tích và tối ưu hiệu suất",
      level: 87,
      color: "from-pink-500 to-purple-500",
      items: [
        "Data Analysis",
        "Performance Tracking",
        "Growth Hacking",
        "ROI Optimization",
      ],
    },
  ];

  const tools = [
    {
      category: "Video Editing",
      icon: MonitorPlay,
      color: "from-red-500 to-pink-500",
      items: [
        { name: "Adobe Premiere Pro", level: 95, icon: Play },
        { name: "CapCut", level: 90, icon: Edit3 },
        { name: "After Effects", level: 85, icon: Zap },
        { name: "DaVinci Resolve", level: 80, icon: Palette },
      ],
    },
    {
      category: "Design Tools",
      icon: Palette,
      color: "from-purple-500 to-indigo-500",
      items: [
        { name: "Canva Pro", level: 95, icon: PenTool },
        { name: "Photoshop", level: 88, icon: Camera },
        { name: "Figma", level: 85, icon: Target },
        { name: "Illustrator", level: 82, icon: Star },
      ],
    },
    {
      category: "Social Platforms",
      icon: Smartphone,
      color: "from-blue-500 to-cyan-500",
      items: [
        { name: "TikTok", level: 95, icon: Music },
        { name: "Instagram", level: 93, icon: Instagram },
        { name: "YouTube", level: 88, icon: Youtube },
        { name: "Facebook", level: 85, icon: Award },
      ],
    },
  ];

  const processes = [
    {
      step: "01",
      title: "Research & Insight",
      description: "Nghiên cứu thị trường, đối thủ và xu hướng",
      icon: Lightbulb,
      color: "from-yellow-500 to-orange-500",
    },
    {
      step: "02",
      title: "Creative Concept",
      description: "Phát triển ý tưởng sáng tạo và độc đáo",
      icon: PenTool,
      color: "from-pink-500 to-purple-500",
    },
    {
      step: "03",
      title: "Production",
      description: "Thực hiện quay, chụp và tạo nội dung",
      icon: Camera,
      color: "from-blue-500 to-cyan-500",
    },
    {
      step: "04",
      title: "Post-Production",
      description: "Chỉnh sửa, cắt ghép và hoàn thiện",
      icon: Edit3,
      color: "from-green-500 to-emerald-500",
    },
    {
      step: "05",
      title: "Strategy & Launch",
      description: "Lên kế hoạch đăng tải và theo dõi hiệu suất",
      icon: Target,
      color: "from-red-500 to-pink-500",
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-purple-50 relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 right-1/4 w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full blur-3xl animate-pulse" />
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
            className="inline-flex items-center space-x-2 bg-white/70 backdrop-blur-sm px-6 py-3 rounded-full border border-purple-200 shadow-lg mb-6"
          >
            <Zap className="w-5 h-5 text-purple-500" />
            <span className="text-purple-600 font-medium">
              Kỹ năng & Công cụ
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent">
              Chuyên môn
            </span>
            <br />
            <span className="text-gray-800">của tôi</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Kết hợp kỹ năng sáng tạo với công nghệ hiện đại để tạo ra những nội
            dung độc đáo và hiệu quả
          </motion.p>
        </motion.div>

        {/* Tab Navigation */}
        <motion.div
          className="flex flex-col sm:flex-row justify-center items-center gap-4 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <div className="flex flex-col sm:flex-row bg-white/70 backdrop-blur-sm rounded-2xl p-1 border border-purple-200 shadow-lg gap-1 w-full sm:w-auto">
            {[
              { id: "skills", label: "Kỹ năng chính", icon: Star },
              { id: "tools", label: "Công cụ", icon: Award },
              { id: "process", label: "Quy trình", icon: Target },
            ].map((tab) => (
              <motion.button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center justify-center space-x-2 min-w-[140px] ${
                  activeTab === tab.id
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg transform scale-105"
                    : "text-gray-600 hover:text-purple-600 hover:bg-purple-50"
                }`}
                whileHover={{ scale: activeTab === tab.id ? 1.05 : 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={false}
                animate={{
                  backgroundColor:
                    activeTab === tab.id ? undefined : "transparent",
                }}
                transition={{ duration: 0.3 }}
              >
                <tab.icon className="w-4 h-4" />
                <span className="text-sm sm:text-base">{tab.label}</span>
              </motion.button>
            ))}
          </div>
        </motion.div>

        {/* Tab Content Container */}
        <motion.div
          className="min-h-[600px]"
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
        >
          {/* Skills Content */}
          {activeTab === "skills" && (
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-purple-100 shadow-lg hover:shadow-xl transition-all duration-300"
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, y: -5 }}
                >
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${skill.color} rounded-xl flex items-center justify-center mb-4`}
                  >
                    <skill.icon className="w-6 h-6 text-white" />
                  </div>

                  <h3 className="text-xl font-bold text-gray-800 mb-2">
                    {skill.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{skill.description}</p>

                  {/* Progress Bar */}
                  <div className="mb-4">
                    <div className="flex justify-between text-sm mb-2">
                      <span className="text-gray-600">Mức độ thành thạo</span>
                      <span className="text-purple-600 font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
                      <motion.div
                        className={`h-2 bg-gradient-to-r ${skill.color} rounded-full`}
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.level}%` }}
                        transition={{
                          duration: 1.5,
                          delay: index * 0.2,
                          ease: "easeOut",
                        }}
                      />
                    </div>
                  </div>

                  {/* Skill Items */}
                  <div className="flex flex-wrap gap-2">
                    {skill.items.map((item, i) => (
                      <span
                        key={i}
                        className="px-3 py-1 bg-purple-50 text-purple-700 text-xs rounded-full font-medium"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Tools Content */}
          {activeTab === "tools" && (
            <motion.div
              className="grid grid-cols-1 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {tools.map((category, index) => (
                <motion.div
                  key={index}
                  className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-purple-100 shadow-lg"
                  variants={itemVariants}
                >
                  <div className="flex items-center mb-6">
                    <div
                      className={`w-10 h-10 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mr-3`}
                    >
                      <category.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-800">
                      {category.category}
                    </h3>
                  </div>

                  <div className="space-y-4">
                    {category.items.map((tool, i) => (
                      <div
                        key={i}
                        className="flex items-center justify-between"
                      >
                        <div className="flex items-center space-x-3">
                          <div className="w-8 h-8 bg-gray-100 rounded-lg flex items-center justify-center">
                            <tool.icon className="w-4 h-4 text-gray-600" />
                          </div>
                          <span className="text-gray-700 font-medium">
                            {tool.name}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <div className="w-16 bg-gray-200 rounded-full h-2">
                            <motion.div
                              className={`h-2 bg-gradient-to-r ${category.color} rounded-full`}
                              initial={{ width: 0 }}
                              animate={{ width: `${tool.level}%` }}
                              transition={{
                                duration: 1.2,
                                delay: i * 0.2,
                                ease: "easeOut",
                              }}
                            />
                          </div>
                          <span className="text-sm text-gray-600 font-medium w-10 text-right">
                            {tool.level}%
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}

          {/* Process Content */}
          {activeTab === "process" && (
            <motion.div
              className="max-w-4xl mx-auto"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              <div className="relative space-y-8">
                {processes.map((process, index) => (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-6 relative"
                    variants={itemVariants}
                    custom={index}
                  >
                    <div className="flex-shrink-0">
                      <div
                        className={`w-16 h-16 bg-gradient-to-r ${process.color} rounded-2xl flex items-center justify-center relative z-10`}
                      >
                        <process.icon className="w-8 h-8 text-white" />
                        <div className="absolute -top-2 -right-2 w-8 h-8 bg-white rounded-full flex items-center justify-center border-2 border-gray-100 shadow-md">
                          <span className="text-xs font-bold text-gray-700">
                            {process.step}
                          </span>
                        </div>
                      </div>
                    </div>

                    <div className="flex-1 bg-white/70 backdrop-blur-sm rounded-2xl p-6 border border-purple-100 shadow-lg">
                      <h3 className="text-xl font-bold text-gray-800 mb-2">
                        {process.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {process.description}
                      </p>
                    </div>

                    {/* Connecting Line */}
                    {index < processes.length - 1 && (
                      <motion.div
                        className="absolute left-8 top-16 w-0.5 h-8 bg-gradient-to-b from-purple-400 via-purple-300 to-purple-200 z-0"
                        initial={{ scaleY: 0, opacity: 0 }}
                        animate={{ scaleY: 1, opacity: 1 }}
                        transition={{ duration: 0.6, delay: index * 0.3 + 0.5 }}
                        style={{ transformOrigin: "top" }}
                      />
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="mt-20 text-center"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-black/10" />
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Sẵn sàng tạo ra điều gì đó tuyệt vời?
              </h3>
              <p className="text-lg mb-6 opacity-90">
                Hãy để tôi giúp bạn biến ý tưởng thành hiện thực với những kỹ
                năng chuyên môn này
              </p>
              <motion.button
                className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-200 shadow-lg"
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const element = document.querySelector("#contact");
                  if (element) {
                    element.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Bắt đầu dự án ngay
              </motion.button>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 rounded-full" />
            <div className="absolute bottom-4 left-4 w-8 h-8 bg-white/20 rounded-full" />
            <div className="absolute top-1/2 right-8 w-6 h-6 bg-white/20 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
