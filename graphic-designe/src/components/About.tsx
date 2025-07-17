"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Palette,
  Video,
  PenTool,
  Zap,
  Heart,
  Star,
  Award,
  Users,
  Coffee,
  Sparkles,
  TrendingUp,
  Target,
  Lightbulb,
  Brush,
  Monitor,
  Smartphone,
  Camera,
  Edit3,
  Layout,
  Type,
  Image as ImageIcon,
  Play,
  Instagram,
  Figma,
  Layers,
} from "lucide-react";
import {
  cn,
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  scaleIn,
  bounceIn,
  staggerDelay,
} from "@/lib/utils";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const skills = [
  {
    category: "Design Skills",
    items: [
      {
        name: "Branding & Identity",
        icon: Palette,
        level: 95,
        color: "from-pink-500 to-purple-500",
      },
      {
        name: "UI/UX Design",
        icon: Monitor,
        level: 90,
        color: "from-purple-500 to-blue-500",
      },
      {
        name: "Illustration",
        icon: Brush,
        level: 85,
        color: "from-blue-500 to-cyan-500",
      },
      {
        name: "Typography",
        icon: Type,
        level: 92,
        color: "from-cyan-500 to-teal-500",
      },
      {
        name: "Layout Design",
        icon: Layout,
        level: 88,
        color: "from-teal-500 to-green-500",
      },
      {
        name: "Photo Editing",
        icon: ImageIcon,
        level: 90,
        color: "from-green-500 to-yellow-500",
      },
    ],
  },
  {
    category: "Video & Motion",
    items: [
      {
        name: "Motion Graphics",
        icon: Video,
        level: 87,
        color: "from-orange-500 to-red-500",
      },
      {
        name: "Video Editing",
        icon: Edit3,
        level: 85,
        color: "from-red-500 to-pink-500",
      },
      {
        name: "Animation",
        icon: Play,
        level: 83,
        color: "from-pink-500 to-purple-500",
      },
      {
        name: "Social Media Content",
        icon: Instagram,
        level: 95,
        color: "from-purple-500 to-indigo-500",
      },
    ],
  },
];

const tools = [
  { name: "Photoshop", icon: "🎨", proficiency: 95 },
  { name: "Illustrator", icon: "✏️", proficiency: 90 },
  { name: "Figma", icon: "🔧", proficiency: 88 },
  { name: "After Effects", icon: "🎬", proficiency: 85 },
  { name: "Premiere Pro", icon: "🎥", proficiency: 87 },
  { name: "InDesign", icon: "📄", proficiency: 82 },
  { name: "Canva", icon: "🎪", proficiency: 95 },
  { name: "CapCut", icon: "📱", proficiency: 92 },
  { name: "Procreate", icon: "🖌️", proficiency: 80 },
  { name: "Blender", icon: "🎭", proficiency: 75 },
];

const achievements = [
  { number: "100+", label: "Dự án hoàn thành", icon: Target },
  { number: "50+", label: "Khách hàng hài lòng", icon: Users },
  { number: "5+", label: "Năm kinh nghiệm", icon: Award },
  { number: "25K+", label: "Followers trên social", icon: Heart },
];

const personalityTraits = [
  {
    trait: "Sáng tạo",
    description: "Luôn tìm kiếm những ý tưởng mới mẻ và độc đáo",
    icon: Lightbulb,
    color: "from-yellow-400 to-orange-500",
  },
  {
    trait: "Tỉ mỉ",
    description: "Chú ý đến từng chi tiết nhỏ trong mỗi thiết kế",
    icon: Target,
    color: "from-blue-400 to-purple-500",
  },
  {
    trait: "Năng động",
    description: "Theo kịp xu hướng và luôn học hỏi điều mới",
    icon: TrendingUp,
    color: "from-green-400 to-blue-500",
  },
  {
    trait: "Đam mê",
    description: "Yêu thích và tận tụy với nghề thiết kế",
    icon: Heart,
    color: "from-pink-400 to-red-500",
  },
];

export default function About() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  useEffect(() => {
    if (typeof window !== "undefined" && isInView) {
      const ctx = gsap.context(() => {
        // Animate skill bars
        gsap.fromTo(
          ".skill-bar",
          { width: 0 },
          {
            width: "100%",
            duration: 1.5,
            ease: "power2.out",
            stagger: 0.1,
            scrollTrigger: {
              trigger: skillsRef.current,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          }
        );

        // Animate achievement numbers
        gsap.fromTo(
          ".achievement-number",
          { innerText: 0 },
          {
            innerText: (_: any, target: any) =>
              target.getAttribute("data-number"),
            duration: 2,
            ease: "power2.out",
            snap: { innerText: 1 },
            stagger: 0.2,
            scrollTrigger: {
              trigger: ".achievements-grid",
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      return () => ctx.revert();
    }
  }, [isInView]);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-white via-purple-50/30 to-pink-50/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="text-center mb-16"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-full border border-pink-200/50 mb-6"
          >
            <Star className="w-4 h-4 text-pink-500 mr-2" />
            <span className="text-sm font-medium text-pink-700">Về tôi</span>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
              Graphic Designer
            </span>
            <br />
            <span className="text-gray-900">với chất riêng</span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Tôi là người luôn tìm kiếm sự khác biệt trong từng thiết kế, kết hợp
            xu hướng hiện đại với phong cách cá nhân độc đáo
          </motion.p>
        </motion.div>

        {/* Story & Achievements */}
        <div className="grid lg:grid-cols-2 gap-12 mb-20">
          {/* Story */}
          <motion.div
            variants={fadeInLeft}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            className="space-y-6"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-2xl blur-xl"></div>
              <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-pink-100 shadow-lg">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                    <Sparkles className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Câu chuyện của tôi
                  </h3>
                </div>

                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>
                    Bắt đầu từ một sinh viên đại học với niềm đam mê thiết kế,
                    tôi đã dần phát triển phong cách riêng thông qua việc thử
                    nghiệm và học hỏi từ những xu hướng mới nhất.
                  </p>
                  <p>
                    Với{" "}
                    <span className="font-semibold text-pink-600">
                      5+ năm kinh nghiệm
                    </span>
                    , tôi đã hoàn thành hơn{" "}
                    <span className="font-semibold text-purple-600">
                      100 dự án
                    </span>
                    từ branding cho startup đến content cho các thương hiệu lớn.
                  </p>
                  <p>
                    Điều đặc biệt ở tôi là khả năng tạo ra những thiết kế
                    <span className="font-semibold text-blue-600">
                      {" "}
                      "chipi"
                    </span>{" "}
                    - vừa chuyên nghiệp, vừa trẻ trung và đầy cá tính.
                  </p>
                </div>

                <div className="mt-6 flex items-center space-x-4">
                  <div className="flex items-center">
                    <Coffee className="w-5 h-5 text-orange-500 mr-2" />
                    <span className="text-sm text-gray-600">Powered by ☕</span>
                  </div>
                  <div className="flex items-center">
                    <Zap className="w-5 h-5 text-yellow-500 mr-2" />
                    <span className="text-sm text-gray-600">
                      Always creative
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            variants={fadeInRight}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            className="space-y-6"
          >
            <div className="achievements-grid grid grid-cols-2 gap-4">
              {achievements.map((achievement, index) => {
                const Icon = achievement.icon;
                return (
                  <motion.div
                    key={index}
                    variants={scaleIn}
                    custom={index}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-purple-100 shadow-lg text-center hover:shadow-xl transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div
                      className="achievement-number text-3xl font-bold bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent mb-2"
                      data-number={achievement.number.replace(/\D/g, "")}
                    >
                      {achievement.number}
                    </div>
                    <div className="text-sm text-gray-600 font-medium">
                      {achievement.label}
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Personality Traits */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-gray-900 mb-4">
                Tính cách & Phong cách
              </h4>
              {personalityTraits.map((trait, index) => {
                const Icon = trait.icon;
                return (
                  <motion.div
                    key={index}
                    variants={fadeInUp}
                    custom={index}
                    whileHover={{ scale: 1.02, x: 5 }}
                    className="flex items-center p-4 bg-white/60 rounded-xl border border-gray-200 hover:border-purple-200 transition-all duration-300"
                  >
                    <div
                      className={cn(
                        "w-10 h-10 rounded-full flex items-center justify-center mr-4 bg-gradient-to-r",
                        trait.color
                      )}
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        {trait.trait}
                      </div>
                      <div className="text-sm text-gray-600">
                        {trait.description}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          ref={skillsRef}
          variants={staggerContainer}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="mb-20"
        >
          <motion.h3
            variants={fadeInUp}
            className="text-3xl font-bold text-center mb-12"
          >
            <span className="bg-gradient-to-r from-pink-600 to-purple-600 bg-clip-text text-transparent">
              Kỹ năng chuyên môn
            </span>
          </motion.h3>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skillGroup, groupIndex) => (
              <motion.div
                key={groupIndex}
                variants={fadeInUp}
                custom={groupIndex}
                className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-purple-100 shadow-lg"
              >
                <h4 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mr-3">
                    <Palette className="w-4 h-4 text-white" />
                  </div>
                  {skillGroup.category}
                </h4>

                <div className="space-y-6">
                  {skillGroup.items.map((skill, skillIndex) => {
                    const Icon = skill.icon;
                    return (
                      <div key={skillIndex} className="group">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center">
                            <Icon className="w-5 h-5 text-gray-600 mr-3" />
                            <span className="font-medium text-gray-900">
                              {skill.name}
                            </span>
                          </div>
                          <span className="text-sm font-semibold text-gray-600">
                            {skill.level}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                          <div
                            className={cn(
                              "skill-bar h-full rounded-full bg-gradient-to-r",
                              skill.color
                            )}
                            style={{ width: `${skill.level}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tools Section */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="text-center"
        >
          <motion.h3 variants={fadeInUp} className="text-3xl font-bold mb-12">
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Công cụ thường dùng
            </span>
          </motion.h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                variants={scaleIn}
                custom={index}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-purple-100 shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <div className="text-3xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {tool.icon}
                </div>
                <div className="font-semibold text-gray-900 mb-2">
                  {tool.name}
                </div>
                <div className="text-sm text-gray-600 mb-3">
                  {tool.proficiency}%
                </div>
                <div className="w-full bg-gray-200 rounded-full h-1.5 overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"
                    initial={{ width: 0 }}
                    animate={
                      isInView
                        ? { width: `${tool.proficiency}%` }
                        : { width: 0 }
                    }
                    transition={{
                      duration: 1.5,
                      delay: staggerDelay(index, 0.1),
                    }}
                  />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Fun Quote */}
          <motion.div variants={fadeInUp} className="mt-16 relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-pink-500/10 to-purple-500/10 rounded-2xl blur-xl"></div>
            <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-pink-100 shadow-lg max-w-3xl mx-auto">
              <div className="flex items-center justify-center mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                  <Heart className="w-6 h-6 text-white" />
                </div>
              </div>
              <blockquote className="text-lg md:text-xl text-gray-700 italic text-center mb-4">
                "Thiết kế không chỉ là cách nó trông như thế nào. Thiết kế chính
                là cách nó hoạt động và cảm nhận."
              </blockquote>
              <div className="text-center">
                <span className="font-semibold text-pink-600">
                  - Triết lý thiết kế của tôi
                </span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
