"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Pen,
  Lightbulb,
  Target,
  Zap,
  Heart,
  Star,
  Video,
  Instagram,
  TrendingUp,
  Palette,
  MessageCircle,
  BarChart3,
} from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.2,
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
        ease: "easeOut",
      },
    },
  } as any;

  const skills = [
    {
      icon: Pen,
      name: "Copywriting",
      level: 95,
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Video,
      name: "Video Script",
      level: 90,
      color: "from-blue-500 to-purple-500",
    },
    {
      icon: MessageCircle,
      name: "Social Content",
      level: 88,
      color: "from-pink-500 to-rose-500",
    },
    {
      icon: TrendingUp,
      name: "Social Strategy",
      level: 85,
      color: "from-green-500 to-blue-500",
    },
    {
      icon: Palette,
      name: "Creative Direction",
      level: 82,
      color: "from-orange-500 to-pink-500",
    },
    {
      icon: BarChart3,
      name: "Content Analytics",
      level: 80,
      color: "from-indigo-500 to-purple-500",
    },
  ];

  const tools = [
    { name: "Premiere Pro", icon: "🎬", category: "Video" },
    { name: "CapCut", icon: "✂️", category: "Editing" },
    { name: "Canva", icon: "🎨", category: "Design" },
    { name: "Figma", icon: "🔧", category: "Design" },
    { name: "TikTok", icon: "🎵", category: "Social" },
    { name: "Instagram", icon: "📸", category: "Social" },
    { name: "YouTube", icon: "📺", category: "Platform" },
    { name: "Facebook", icon: "👥", category: "Social" },
  ];

  const achievements = [
    {
      icon: Star,
      title: "Top Content Creator",
      desc: "Được công nhận là creator hàng đầu",
    },
    {
      icon: Heart,
      title: "10M+ Views",
      desc: "Tổng lượt xem trên các platform",
    },
    {
      icon: Target,
      title: "Brand Partner",
      desc: "Hợp tác với 20+ thương hiệu lớn",
    },
    { icon: Zap, title: "Viral Content", desc: "Tạo ra 50+ content viral" },
  ];

  return (
    <section id="about" className="py-20 bg-white relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-40 h-40 bg-pink-500 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.div
              className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full px-6 py-3 mb-6"
              whileHover={{ scale: 1.05 }}
            >
              <Lightbulb className="w-5 h-5 text-purple-600" />
              <span className="text-purple-800 font-semibold">Về tôi</span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Tôi là một{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Creative Mind
              </span>
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Với 2+ năm kinh nghiệm trong lĩnh vực content creation, tôi chuyên
              tạo ra những câu chuyện
              <span className="text-purple-600 font-semibold"> chipi</span> và
              <span className="text-pink-600 font-semibold"> độc đáo</span> giúp
              thương hiệu kết nối với khách hàng.
            </p>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Left: Story */}
            <motion.div variants={itemVariants} className="space-y-6">
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Câu chuyện của tôi
                </h3>
                <div className="space-y-4 text-gray-700">
                  <p>
                    Bắt đầu từ một người yêu thích viết lách, tôi đã phát triển
                    thành một content creator chuyên nghiệp với phong cách riêng
                    biệt - <strong>chipi</strong> nhưng chuyên sâu.
                  </p>
                  <p>
                    Tôi tin rằng mỗi thương hiệu đều có một câu chuyện độc đáo,
                    và nhiệm vụ của tôi là kể câu chuyện đó theo cách thú vị
                    nhất, để lại ấn tượng sâu sắc trong lòng khách hàng.
                  </p>
                  <p>
                    Từ script video viral đến caption Instagram cuốn hút, tôi
                    luôn mang đến góc nhìn mới mẻ và sáng tạo cho mọi dự án.
                  </p>
                </div>
              </div>

              {/* Achievements */}
              <div className="grid grid-cols-2 gap-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    className="bg-white rounded-xl p-6 shadow-lg border border-purple-100 hover:shadow-xl transition-all duration-300"
                    whileHover={{ y: -5, scale: 1.02 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: index * 0.1 + 0.8 }}
                  >
                    <achievement.icon className="w-8 h-8 text-purple-600 mb-3" />
                    <h4 className="font-semibold text-gray-900 mb-1">
                      {achievement.title}
                    </h4>
                    <p className="text-sm text-gray-600">{achievement.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right: Skills */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="bg-white rounded-2xl p-8 shadow-lg border border-purple-100">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                  <Target className="w-6 h-6 text-purple-600" />
                  Kỹ năng chuyên môn
                </h3>

                <div className="space-y-6">
                  {skills.map((skill, index) => (
                    <motion.div
                      key={index}
                      className="space-y-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: index * 0.1 + 1 }}
                    >
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3">
                          <skill.icon className="w-5 h-5 text-purple-600" />
                          <span className="font-medium text-gray-900">
                            {skill.name}
                          </span>
                        </div>
                        <span className="text-sm font-semibold text-purple-600">
                          {skill.level}%
                        </span>
                      </div>

                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <motion.div
                          className={`h-2 rounded-full bg-gradient-to-r ${skill.color}`}
                          initial={{ width: 0 }}
                          animate={isInView ? { width: `${skill.level}%` } : {}}
                          transition={{ duration: 1, delay: index * 0.1 + 1.2 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Tools Section */}
          <motion.div variants={itemVariants} className="text-center">
            <h3 className="text-2xl font-bold text-gray-900 mb-8">
              Công cụ tôi sử dụng
            </h3>

            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
              {tools.map((tool, index) => (
                <motion.div
                  key={index}
                  className="bg-white rounded-xl p-6 shadow-lg border border-purple-100 hover:shadow-xl transition-all duration-300 group"
                  whileHover={{ y: -5, scale: 1.05 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: index * 0.05 + 1.5 }}
                >
                  <div className="text-3xl mb-2 group-hover:scale-110 transition-transform">
                    {tool.icon}
                  </div>
                  <h4 className="font-semibold text-gray-900 text-sm mb-1">
                    {tool.name}
                  </h4>
                  <p className="text-xs text-gray-500">{tool.category}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="text-center mt-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white"
          >
            <h3 className="text-2xl font-bold mb-4">Sẵn sàng hợp tác?</h3>
            <p className="text-purple-100 mb-6">
              Hãy cùng tôi tạo ra những nội dung chipi và ấn tượng cho thương
              hiệu của bạn!
            </p>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Liên hệ ngay
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
