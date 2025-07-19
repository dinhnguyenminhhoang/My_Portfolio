"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import {
  Video,
  PenTool,
  TrendingUp,
  Camera,
  Palette,
  BarChart3,
  Users,
  Lightbulb,
  Instagram,
  Youtube,
  Music,
  Smartphone,
} from "lucide-react";

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  const controls = useAnimation();
  const [activeTab, setActiveTab] = useState("skills");

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
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  } as any;

  const skills = [
    {
      icon: Video,
      name: "Video Editing",
      level: 95,
      description: "Premiere Pro, CapCut, DaVinci Resolve",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: PenTool,
      name: "Scriptwriting",
      level: 90,
      description: "Hook writing, Storytelling, Content strategy",
      color: "from-blue-500 to-indigo-500",
    },
    {
      icon: TrendingUp,
      name: "Social Strategy",
      level: 88,
      description: "Algorithm optimization, Trend analysis",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Camera,
      name: "Content Production",
      level: 92,
      description: "Photography, Videography, Creative direction",
      color: "from-purple-500 to-violet-500",
    },
    {
      icon: Palette,
      name: "Graphic Design",
      level: 85,
      description: "Canva, Photoshop, Brand visual identity",
      color: "from-orange-500 to-yellow-500",
    },
    {
      icon: BarChart3,
      name: "Analytics & ROI",
      level: 82,
      description: "Performance tracking, Growth metrics",
      color: "from-cyan-500 to-blue-500",
    },
  ];

  const tools = [
    {
      category: "Video Editing",
      items: [
        { name: "Premiere Pro", level: 95, icon: "🎬" },
        { name: "CapCut", level: 98, icon: "✂️" },
        { name: "DaVinci Resolve", level: 85, icon: "🎯" },
        { name: "After Effects", level: 80, icon: "⚡" },
      ],
    },
    {
      category: "Design Tools",
      items: [
        { name: "Canva Pro", level: 95, icon: "🎨" },
        { name: "Photoshop", level: 85, icon: "🖼️" },
        { name: "Figma", level: 80, icon: "🔧" },
        { name: "Lightroom", level: 88, icon: "📸" },
      ],
    },
    {
      category: "Social Platforms",
      items: [
        { name: "TikTok Creator", level: 98, icon: "🎵" },
        { name: "Instagram Pro", level: 95, icon: "📱" },
        { name: "YouTube Studio", level: 90, icon: "📺" },
        { name: "Facebook Creator", level: 85, icon: "👥" },
      ],
    },
    {
      category: "Analytics",
      items: [
        { name: "TikTok Analytics", level: 92, icon: "📊" },
        { name: "Instagram Insights", level: 90, icon: "📈" },
        { name: "Google Analytics", level: 85, icon: "🔍" },
        { name: "Social Blade", level: 88, icon: "⚔️" },
      ],
    },
  ];

  const specialties = [
    {
      icon: Users,
      title: "Community Building",
      description: "Xây dựng và duy trì cộng đồng engaged followers",
      features: ["Fan engagement", "UGC campaigns", "Community events"],
    },
    {
      icon: Lightbulb,
      title: "Trend Innovation",
      description: "Phát hiện và tạo ra các trend mới trên social media",
      features: ["Trend forecasting", "Viral content", "Algorithm hacking"],
    },
    {
      icon: Smartphone,
      title: "Mobile-First Content",
      description: "Tối ưu nội dung cho trải nghiệm mobile",
      features: ["Vertical video", "Quick attention", "Thumb-stopping content"],
    },
  ];

  const tabs = [
    { id: "skills", label: "Kỹ năng chuyên môn", icon: BarChart3 },
    { id: "tools", label: "Công cụ & Platform", icon: PenTool },
    { id: "specialties", label: "Chuyên môn đặc biệt", icon: Lightbulb },
  ];

  return (
    <section
      id="skills"
      ref={ref}
      className="relative py-20 lg:py-32 bg-gray-900 text-white overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(120, 119, 198, 0.15) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(255, 119, 198, 0.15) 0%, transparent 50%)
            `,
            backgroundSize: "400% 400%",
          }}
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
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full border border-purple-500/30"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-purple-300 font-medium text-sm">
                Kỹ năng & Chuyên môn
              </span>
            </motion.div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Bộ công cụ{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Sáng tạo
              </span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Kết hợp giữa kỹ thuật chuyên nghiệp và sự sáng tạo không giới hạn
              để tạo nên những content viral và chiến lược marketing hiệu quả.
            </p>
          </motion.div>

          {/* Tab Navigation */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <div className="flex bg-gray-800/50 backdrop-blur-sm rounded-2xl p-2 border border-gray-700">
              {tabs.map((tab) => (
                <motion.button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                    activeTab === tab.id
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                      : "text-gray-400 hover:text-white hover:bg-gray-700/50"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <tab.icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{tab.label}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {activeTab === "skills" && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={index}
                    className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700 hover:border-purple-500/50 transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                  >
                    <div
                      className={`w-12 h-12 rounded-xl bg-gradient-to-r ${skill.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <skill.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{skill.name}</h3>
                    <p className="text-gray-400 text-sm mb-4">
                      {skill.description}
                    </p>

                    {/* Progress Bar */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-gray-300">Proficiency</span>
                        <span className="text-purple-400 font-medium">
                          {skill.level}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <motion.div
                          className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1.5, delay: index * 0.2 }}
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {activeTab === "tools" && (
              <div className="grid md:grid-cols-2 gap-8">
                {tools.map((category, categoryIndex) => (
                  <motion.div
                    key={categoryIndex}
                    className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700"
                    initial={{
                      opacity: 0,
                      x: categoryIndex % 2 === 0 ? -50 : 50,
                    }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: categoryIndex * 0.2 }}
                  >
                    <h3 className="text-xl font-bold mb-6 text-purple-300">
                      {category.category}
                    </h3>
                    <div className="space-y-4">
                      {category.items.map((tool, toolIndex) => (
                        <motion.div
                          key={toolIndex}
                          className="flex items-center justify-between p-3 bg-gray-700/30 rounded-xl hover:bg-gray-700/50 transition-colors duration-200"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            delay: categoryIndex * 0.2 + toolIndex * 0.1,
                          }}
                        >
                          <div className="flex items-center space-x-3">
                            <span className="text-xl">{tool.icon}</span>
                            <span className="font-medium">{tool.name}</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <div className="w-20 bg-gray-600 rounded-full h-1.5">
                              <motion.div
                                className="h-1.5 rounded-full bg-gradient-to-r from-purple-500 to-pink-500"
                                initial={{ width: 0 }}
                                animate={{ width: `${tool.level}%` }}
                                transition={{
                                  duration: 1,
                                  delay: categoryIndex * 0.2 + toolIndex * 0.1,
                                }}
                              />
                            </div>
                            <span className="text-sm text-purple-400 font-medium w-8">
                              {tool.level}%
                            </span>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {activeTab === "specialties" && (
              <div className="grid lg:grid-cols-3 gap-8">
                {specialties.map((specialty, index) => (
                  <motion.div
                    key={index}
                    className="group bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700 hover:border-purple-500/50 transition-all duration-300 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.2 }}
                    whileHover={{ y: -10, scale: 1.05 }}
                  >
                    <motion.div
                      className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300"
                      animate={{
                        rotate: [0, 5, -5, 0],
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "easeInOut",
                      }}
                    >
                      <specialty.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="text-xl font-bold mb-4">
                      {specialty.title}
                    </h3>
                    <p className="text-gray-400 mb-6">
                      {specialty.description}
                    </p>
                    <div className="space-y-2">
                      {specialty.features.map((feature, featureIndex) => (
                        <motion.div
                          key={featureIndex}
                          className="flex items-center justify-center space-x-2 text-sm text-purple-300"
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{
                            delay: index * 0.2 + featureIndex * 0.1,
                          }}
                        >
                          <div className="w-1.5 h-1.5 bg-purple-400 rounded-full"></div>
                          <span>{feature}</span>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="text-center bg-gradient-to-r from-purple-800/50 to-pink-800/50 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-purple-500/30"
          >
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Sẵn sàng tạo nên điều{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Đặc biệt
              </span>
              ?
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Hãy cùng tôi biến ý tưởng của bạn thành những video viral và chiến
              lược content marketing bùng nổ trên social media.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                onClick={() => {
                  const projectsSection = document.querySelector("#projects");
                  projectsSection?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Xem Portfolio
              </motion.button>

              <motion.button
                onClick={() => {
                  const contactSection = document.querySelector("#contact");
                  contactSection?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-8 py-4 border-2 border-purple-400/50 text-purple-300 rounded-xl font-semibold text-lg backdrop-blur-sm transition-all duration-300 hover:bg-purple-500/10 hover:border-purple-400"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Liên hệ hợp tác
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-1/4 right-10 w-24 h-24 border border-purple-400/20 rounded-full"
        animate={{
          rotate: 360,
          scale: [1, 1.1, 1],
        }}
        transition={{
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        }}
      />
      <motion.div
        className="absolute bottom-1/4 left-10 w-16 h-16 border border-pink-400/20 rounded-full"
        animate={{
          rotate: -360,
          y: [0, -10, 0],
        }}
        transition={{
          rotate: { duration: 15, repeat: Infinity, ease: "linear" },
          y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
        }}
      />
    </section>
  );
};

export default Skills;
