"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import {
  Play,
  Zap,
  Target,
  Heart,
  TrendingUp,
  Users2,
  Trophy,
  Award,
  Star,
  Calendar,
  BarChart3,
  Sparkles,
  CheckCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Skill {
  name: string;
  level: number;
  color: string;
  icon: React.ReactNode;
  description: string;
}

interface Achievement {
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  date: string;
  stats?: string;
}

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  highlights: string[];
}

const SkillsSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<
    "skills" | "achievements" | "experience"
  >("skills");
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const skills: Skill[] = [
    {
      name: "Livestream Performance",
      level: 95,
      color: "from-purple-500 to-pink-500",
      icon: <Play className="w-5 h-5" />,
      description:
        "Khả năng dẫn livestream cuốn hút, tương tác tự nhiên với khán giả",
    },
    {
      name: "Content Creation",
      level: 90,
      color: "from-blue-500 to-cyan-500",
      icon: <Zap className="w-5 h-5" />,
      description: "Tạo nội dung sáng tạo, chất lượng cao trên đa nền tảng",
    },
    {
      name: "Brand Collaboration",
      level: 88,
      color: "from-green-500 to-emerald-500",
      icon: <Target className="w-5 h-5" />,
      description: "Hiểu rõ brand identity và truyền tải message hiệu quả",
    },
    {
      name: "Audience Engagement",
      level: 92,
      color: "from-yellow-500 to-orange-500",
      icon: <Heart className="w-5 h-5" />,
      description: "Xây dựng kết nối chặt chẽ với cộng đồng người theo dõi",
    },
    {
      name: "Social Media Strategy",
      level: 85,
      color: "from-red-500 to-pink-500",
      icon: <TrendingUp className="w-5 h-5" />,
      description: "Phát triển chiến lược social media toàn diện",
    },
    {
      name: "Community Building",
      level: 93,
      color: "from-indigo-500 to-purple-500",
      icon: <Users2 className="w-5 h-5" />,
      description: "Xây dựng và quản lý cộng đồng active, tương tác cao",
    },
  ];

  const achievements: Achievement[] = [
    {
      title: "Top KOC 2024",
      description:
        "Được vinh danh là KOC xuất sắc nhất năm 2024 bởi Vietnam Influencer Awards",
      icon: <Trophy className="w-6 h-6" />,
      color: "from-yellow-500 to-orange-500",
      date: "2024",
      stats: "Top 1/500+",
    },
    {
      title: "1M+ Interactions",
      description:
        "Đạt hơn 1 triệu lượt tương tác tổng cộng trên các nền tảng social media",
      icon: <Heart className="w-6 h-6" />,
      color: "from-red-500 to-pink-500",
      date: "2024",
      stats: "1.2M interactions",
    },
    {
      title: "Brand Ambassador",
      description:
        "Đại diện thương hiệu độc quyền cho 15+ brands lớn trong và ngoài nước",
      icon: <Award className="w-6 h-6" />,
      color: "from-purple-500 to-indigo-500",
      date: "2023",
      stats: "15+ brands",
    },
    {
      title: "Community Leader",
      description:
        "Xây dựng và phát triển cộng đồng 150K+ thành viên trung thành",
      icon: <Users2 className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
      date: "2023",
      stats: "150K+ members",
    },
    {
      title: "High Conversion Rate",
      description:
        "Đạt tỷ lệ chuyển đổi trung bình 8.5% trong các chiến dịch marketing",
      icon: <BarChart3 className="w-6 h-6" />,
      color: "from-green-500 to-teal-500",
      date: "2023",
      stats: "8.5% avg CVR",
    },
    {
      title: "Multi-Platform Success",
      description:
        "Thành công trên 5+ nền tảng social media với engagement rate cao",
      icon: <Star className="w-6 h-6" />,
      color: "from-pink-500 to-rose-500",
      date: "2022",
      stats: "5+ platforms",
    },
  ];

  const experiences: Experience[] = [
    {
      title: "Senior KOC & Content Creator",
      company: "Freelance",
      period: "2022 - Hiện tại",
      description:
        "Làm việc độc lập với nhiều thương hiệu lớn, tạo nội dung đa dạng và quản lý cộng đồng",
      highlights: [
        "Hợp tác với 100+ thương hiệu uy tín",
        "Tạo ra 500+ nội dung chất lượng cao",
        "Đạt 95% satisfaction rate từ khách hàng",
        "Xây dựng personal brand mạnh mẽ",
      ],
    },
    {
      title: "KOC Manager",
      company: "Digital Agency XYZ",
      period: "2021 - 2022",
      description:
        "Quản lý và phát triển mạng lưới KOC, đào tạo kỹ năng content creation",
      highlights: [
        "Quản lý 50+ KOC trong network",
        "Tăng 200% hiệu quả chiến dịch",
        "Đào tạo kỹ năng cho 100+ creator",
        "Phát triển quy trình chuẩn hóa",
      ],
    },
    {
      title: "Content Creator",
      company: "Beauty Brand ABC",
      period: "2020 - 2021",
      description:
        "Tạo nội dung chuyên về beauty, xây dựng cộng đồng và tương tác với khách hàng",
      highlights: [
        "Tăng 300% follower trong 1 năm",
        "Đạt 12% average engagement rate",
        "Launch 5 successful product campaigns",
        "Xây dựng loyal community",
      ],
    },
    {
      title: "Social Media Specialist",
      company: "Marketing Agency DEF",
      period: "2019 - 2020",
      description:
        "Chuyên viên social media, phát triển chiến lược content và quản lý các kênh truyền thông",
      highlights: [
        "Quản lý 20+ brand accounts",
        "Tăng 150% organic reach",
        "Tối ưu hóa ad performance",
        "Phát triển content strategy",
      ],
    },
  ];

  const tabs = [
    { id: "skills", label: "Kỹ năng", icon: <Zap className="w-5 h-5" /> },
    {
      id: "achievements",
      label: "Thành tích",
      icon: <Trophy className="w-5 h-5" />,
    },
    {
      id: "experience",
      label: "Kinh nghiệm",
      icon: <Calendar className="w-5 h-5" />,
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  } as any;

  const skillVariants = {
    hidden: { width: 0 },
    visible: (level: number) => ({
      width: `${level}%`,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delay: 0.5,
      },
    }),
  } as any;

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="py-20 md:py-32 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <motion.div
        style={{ y }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-40 right-10 w-32 h-32 border border-purple-500/20 rounded-full animate-spin-slow" />
        <div className="absolute bottom-40 left-10 w-24 h-24 border border-pink-500/20 rounded-full animate-pulse" />
      </motion.div>

      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <div className="px-4 py-2 glass rounded-full border border-white/20">
                <span className="text-purple-400 font-medium flex items-center space-x-2">
                  <Sparkles className="w-4 h-4" />
                  <span>Kỹ năng & Thành tích</span>
                </span>
              </div>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Năng lực của <span className="gradient-text-purple">tôi</span>
            </h2>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Với 5+ năm kinh nghiệm, tôi đã phát triển những kỹ năng chuyên môn
              và đạt được nhiều thành tích đáng tự hào trong lĩnh vực KOC.
            </p>
          </motion.div>

          {/* Tab Navigation */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center mb-12"
          >
            <div className="flex space-x-2 glass rounded-2xl p-2 border border-white/20">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={cn(
                    "flex items-center space-x-2 px-6 py-3 rounded-xl transition-all duration-300 font-medium",
                    activeTab === tab.id
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25"
                      : "text-gray-300 hover:text-white hover:bg-white/10"
                  )}
                >
                  {tab.icon}
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </motion.div>

          {/* Tab Content */}
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            {activeTab === "skills" && (
              <div className="grid md:grid-cols-2 gap-8">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    className="glass p-6 rounded-2xl border border-white/20 hover-lift group"
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div
                          className={cn(
                            "w-12 h-12 rounded-xl bg-gradient-to-r flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300",
                            skill.color
                          )}
                        >
                          {skill.icon}
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors">
                            {skill.name}
                          </h3>
                          <p className="text-sm text-gray-400">
                            {skill.level}%
                          </p>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-300 text-sm mb-4 leading-relaxed">
                      {skill.description}
                    </p>

                    <div className="relative">
                      <div className="h-2 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          className={cn(
                            "h-full bg-gradient-to-r rounded-full",
                            skill.color
                          )}
                          variants={skillVariants}
                          initial="hidden"
                          animate={isInView ? "visible" : "hidden"}
                          custom={skill.level}
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}

            {activeTab === "achievements" && (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.title}
                    variants={itemVariants}
                    className="glass p-6 rounded-2xl border border-white/20 hover-lift group text-center"
                  >
                    <div
                      className={cn(
                        "w-16 h-16 rounded-2xl bg-gradient-to-r mx-auto mb-4 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300",
                        achievement.color
                      )}
                    >
                      {achievement.icon}
                    </div>

                    <div className="mb-4">
                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                        {achievement.title}
                      </h3>
                      <div className="text-sm text-purple-400 font-medium mb-2">
                        {achievement.date}
                      </div>
                      {achievement.stats && (
                        <div className="text-lg font-bold text-purple-300 mb-2">
                          {achievement.stats}
                        </div>
                      )}
                    </div>

                    <p className="text-gray-300 text-sm leading-relaxed">
                      {achievement.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            )}

            {activeTab === "experience" && (
              <div className="space-y-8">
                {experiences.map((experience, index) => (
                  <motion.div
                    key={experience.title}
                    variants={itemVariants}
                    className="glass p-8 rounded-2xl border border-white/20 hover-lift group"
                  >
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-6">
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                          {experience.title}
                        </h3>
                        <div className="flex items-center space-x-4 text-purple-400 mb-2">
                          <span className="font-medium">
                            {experience.company}
                          </span>
                          <span className="text-gray-400">•</span>
                          <span className="text-gray-400">
                            {experience.period}
                          </span>
                        </div>
                      </div>

                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
                        <Calendar className="w-6 h-6" />
                      </div>
                    </div>

                    <p className="text-gray-300 mb-6 leading-relaxed">
                      {experience.description}
                    </p>

                    <div className="grid md:grid-cols-2 gap-4">
                      {experience.highlights.map((highlight, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <div className="w-5 h-5 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                            <CheckCircle className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-gray-300 text-sm">
                            {highlight}
                          </span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
