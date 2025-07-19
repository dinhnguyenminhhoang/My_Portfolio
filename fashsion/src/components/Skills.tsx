"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import {
  Camera,
  Video,
  Palette,
  Instagram,
  Youtube,
  Edit3,
  Zap,
  TrendingUp,
  Heart,
  Star,
  Sparkles,
} from "lucide-react";
import { gsap } from "gsap";

const Skills = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, margin: "-100px" });
  const [activeTab, setActiveTab] = useState(0);

  // Mouse parallax effect
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 300, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 300, damping: 30 });

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) * 0.1;
    const y = (e.clientY - rect.top - rect.height / 2) * 0.1;
    mouseX.set(x);
    mouseY.set(y);
  };

  // GSAP animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Floating animation for skill cards
      gsap.set(".skill-card", { y: 0 });

      const tl = gsap.timeline({ repeat: -1, yoyo: true });
      tl.to(".skill-card:nth-child(odd)", {
        y: -10,
        duration: 3,
        ease: "power2.inOut",
        stagger: 0.2,
      }).to(
        ".skill-card:nth-child(even)",
        {
          y: 10,
          duration: 2.5,
          ease: "power2.inOut",
          stagger: 0.15,
        },
        0
      );
    }, skillsRef);

    return () => ctx.revert();
  }, []);

  const tabs = [
    {
      name: "Creative Skills",
      icon: Palette,
      color: "from-purple-500 to-pink-500",
    },
    {
      name: "Technical Tools",
      icon: Zap,
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Social Media",
      icon: TrendingUp,
      color: "from-pink-500 to-orange-500",
    },
  ];

  const skillCategories = [
    {
      // Creative Skills
      skills: [
        {
          name: "Fashion Photography",
          level: 95,
          icon: Camera,
          description:
            "Chụp ảnh thời trang chuyên nghiệp với góc nhìn sáng tạo",
          color: "from-purple-500 to-pink-500",
        },
        {
          name: "Creative Direction",
          level: 90,
          icon: Sparkles,
          description: "Định hướng sáng tạo cho các dự án thời trang",
          color: "from-pink-500 to-red-500",
        },
        {
          name: "Brand Storytelling",
          level: 88,
          icon: Heart,
          description: "Kể chuyện thương hiệu qua hình ảnh và nội dung",
          color: "from-red-500 to-orange-500",
        },
        {
          name: "Style Consulting",
          level: 92,
          icon: Star,
          description: "Tư vấn phong cách thời trang cá nhân",
          color: "from-orange-500 to-yellow-500",
        },
      ],
    },
    {
      // Technical Tools
      skills: [
        {
          name: "Adobe Photoshop",
          level: 94,
          icon: Edit3,
          description: "Chỉnh sửa ảnh chuyên nghiệp và thiết kế sáng tạo",
          color: "from-blue-500 to-purple-500",
        },
        {
          name: "Adobe Lightroom",
          level: 90,
          icon: Camera,
          description: "Xử lý và tối ưu hóa ảnh thời trang",
          color: "from-cyan-500 to-blue-500",
        },
        {
          name: "Video Editing",
          level: 85,
          icon: Video,
          description: "Dựng video content cho social media",
          color: "from-green-500 to-teal-500",
        },
        {
          name: "Canva Pro",
          level: 88,
          icon: Palette,
          description: "Thiết kế graphics và templates nhanh chóng",
          color: "from-teal-500 to-cyan-500",
        },
      ],
    },
    {
      // Social Media
      skills: [
        {
          name: "Instagram Marketing",
          level: 96,
          icon: Instagram,
          description: "Xây dựng và phát triển thương hiệu trên Instagram",
          color: "from-pink-500 to-purple-500",
        },
        {
          name: "TikTok Content",
          level: 93,
          icon: Video,
          description: "Tạo nội dung viral và xu hướng trên TikTok",
          color: "from-black to-purple-500",
        },
        {
          name: "YouTube Strategy",
          level: 87,
          icon: Youtube,
          description: "Chiến lược nội dung và phát triển kênh YouTube",
          color: "from-red-500 to-pink-500",
        },
        {
          name: "Content Planning",
          level: 91,
          icon: TrendingUp,
          description: "Lập kế hoạch nội dung và phân tích engagement",
          color: "from-orange-500 to-red-500",
        },
      ],
    },
  ];

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
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  } as any;

  return (
    <section
      ref={containerRef}
      id="skills"
      className="relative py-20 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-purple-50/30 overflow-hidden"
      onMouseMove={handleMouseMove}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <motion.div
          style={{ x: springX, y: springY }}
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-3xl"
        />
        <motion.div
          style={{ x: springX, y: springY, scale: 1.2 }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-blue-200/20 to-cyan-200/20 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-16"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center space-y-6">
            <div className="flex items-center justify-center space-x-3">
              <motion.div
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.3 }}
              >
                <Sparkles className="w-6 h-6 text-purple-600" />
              </motion.div>
              <span className="text-purple-600 font-semibold tracking-wider uppercase text-sm">
                Kỹ Năng Chuyên Môn
              </span>
            </div>

            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Creative{" "}
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
                Expertise
              </span>
              <br />& Technical Skills
            </h2>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Kết hợp giữa kỹ năng sáng tạo và công nghệ hiện đại để tạo ra
              những nội dung thời trang độc đáo và ấn tượng
            </p>
          </motion.div>

          {/* Tab Navigation */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <div className="bg-white/70 backdrop-blur-sm p-2 rounded-2xl shadow-lg border border-white/50">
              <div className="flex space-x-2">
                {tabs.map((tab, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setActiveTab(index)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`relative px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                      activeTab === index
                        ? "text-white shadow-lg"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    {activeTab === index && (
                      <motion.div
                        layoutId="activeTab"
                        className={`absolute inset-0 bg-gradient-to-r ${tab.color} rounded-xl`}
                        transition={{
                          type: "spring",
                          bounce: 0.2,
                          duration: 0.6,
                        }}
                      />
                    )}
                    <span className="relative z-10 flex items-center space-x-2">
                      <tab.icon className="w-4 h-4" />
                      <span>{tab.name}</span>
                    </span>
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Skills Grid */}
          <motion.div
            ref={skillsRef}
            variants={containerVariants}
            className="grid md:grid-cols-2 gap-6 lg:gap-8"
          >
            {skillCategories[activeTab].skills.map((skill, index) => (
              <motion.div
                key={`${activeTab}-${index}`}
                variants={itemVariants}
                initial="hidden"
                animate="visible"
                exit="hidden"
                whileHover={{ scale: 1.02, y: -5 }}
                className="skill-card group relative bg-white/70 backdrop-blur-sm p-6 lg:p-8 rounded-3xl shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500"
              >
                {/* Icon */}
                <motion.div
                  className={`w-14 h-14 mb-6 rounded-2xl bg-gradient-to-r ${skill.color} flex items-center justify-center shadow-lg`}
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <skill.icon className="w-7 h-7 text-white" />
                </motion.div>

                {/* Content */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                      {skill.name}
                    </h3>
                    <span className="text-lg font-semibold text-purple-600">
                      {skill.level}%
                    </span>
                  </div>

                  <p className="text-gray-600 text-sm leading-relaxed">
                    {skill.description}
                  </p>

                  {/* Progress Bar */}
                  <div className="space-y-2">
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${skill.color} rounded-full`}
                        initial={{ width: 0 }}
                        animate={
                          isInView ? { width: `${skill.level}%` } : { width: 0 }
                        }
                        transition={{
                          delay: 0.5 + index * 0.1,
                          duration: 1.5,
                          ease: [0.25, 0.4, 0.25, 1],
                        }}
                      />
                    </div>
                  </div>
                </div>

                {/* Hover Effect */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${skill.color} rounded-3xl opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                />
              </motion.div>
            ))}
          </motion.div>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="text-center">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(147, 51, 234, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full overflow-hidden shadow-2xl"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <span>Hợp tác cùng tôi</span>
                <Heart className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-pink-600 to-orange-500"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
