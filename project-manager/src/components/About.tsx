"use client";

import { motion } from "framer-motion";
import {
  Target,
  Users,
  TrendingUp,
  Lightbulb,
  Calendar,
  MessageCircle,
  BarChart3,
  Zap,
} from "lucide-react";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
} from "@/lib/utils";

const skills = [
  {
    icon: Target,
    title: "Quản lý Dự án",
    description: "Agile, Scrum, Kanban",
    color: "from-pink-500 to-purple-500",
  },
  {
    icon: Users,
    title: "Lãnh đạo Nhóm",
    description: "Team Building, Motivation",
    color: "from-purple-500 to-cyan-500",
  },
  {
    icon: TrendingUp,
    title: "Tối ưu Quy trình",
    description: "Process Improvement",
    color: "from-cyan-500 to-blue-500",
  },
  {
    icon: Lightbulb,
    title: "Tư duy Sáng tạo",
    description: "Creative Problem Solving",
    color: "from-orange-500 to-pink-500",
  },
  {
    icon: Calendar,
    title: "Quản lý Thời gian",
    description: "Time Management, Planning",
    color: "from-green-500 to-teal-500",
  },
  {
    icon: MessageCircle,
    title: "Giao tiếp Hiệu quả",
    description: "Communication, Presentation",
    color: "from-indigo-500 to-purple-500",
  },
];

const tools = [
  "Jira",
  "Trello",
  "Asana",
  "Monday.com",
  "Slack",
  "Microsoft Teams",
  "Zoom",
  "Figma",
  "Notion",
  "Miro",
  "Google Workspace",
  "Confluence",
];

export default function About() {
  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-black via-gray-900 to-black"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
              Về tôi
            </span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Với hơn 5 năm kinh nghiệm trong quản lý dự án, tôi luôn tìm kiếm
            những cách thức mới mẻ và sáng tạo để đưa các dự án đến thành công
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Story Section */}
          <motion.div
            variants={fadeInLeft}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.5 }}
            className="space-y-6"
          >
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 to-purple-500 rounded-lg blur opacity-25"></div>
              <div className="relative bg-gray-900/50 backdrop-blur-sm p-8 rounded-lg border border-gray-800">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                    <Zap className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Câu chuyện của tôi
                  </h3>
                </div>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Bắt đầu từ một developer trẻ tuổi, tôi đã dần chuyển hướng
                  sang quản lý dự án khi nhận ra đam mê thực sự của mình nằm ở
                  việc kết nối con người và tối ưu quy trình làm việc.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Phong cách làm việc của tôi kết hợp giữa{" "}
                  <span className="text-pink-400 font-semibold">
                    chuyên nghiệp
                  </span>{" "}
                  và
                  <span className="text-purple-400 font-semibold">
                    {" "}
                    sáng tạo
                  </span>
                  , luôn tạo ra môi trường làm việc tích cực và hiệu quả cho
                  team.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div
            variants={fadeInRight}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.5 }}
            className="grid grid-cols-2 gap-4"
          >
            {[
              { number: "50+", label: "Dự án hoàn thành" },
              { number: "5+", label: "Năm kinh nghiệm" },
              { number: "100+", label: "Khách hàng hài lòng" },
              { number: "15+", label: "Thành viên đã quản lý" },
            ].map((stat, index) => (
              <motion.div
                key={index}
                whileHover={{ scale: 1.05 }}
                className="bg-gradient-to-br from-gray-800/50 to-gray-900/50 backdrop-blur-sm p-6 rounded-lg border border-gray-700 text-center"
              >
                <div className="text-3xl font-bold bg-gradient-to-r from-pink-500 to-purple-500 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-16"
        >
          <motion.h3
            variants={fadeInUp}
            className="text-3xl font-bold text-center mb-12 text-white"
          >
            Kỹ năng chuyên môn
          </motion.h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
                whileHover={{ scale: 1.05, y: -5 }}
                className="group relative"
              >
                <div className="absolute -inset-0.5 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg blur"></div>
                <div className="relative bg-gray-900/80 backdrop-blur-sm p-6 rounded-lg border border-gray-800 hover:border-gray-700 transition-all duration-300">
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${skill.color} rounded-full flex items-center justify-center mb-4`}
                  >
                    <skill.icon className="text-white" size={24} />
                  </div>
                  <h4 className="text-xl font-semibold text-white mb-2">
                    {skill.title}
                  </h4>
                  <p className="text-gray-400">{skill.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Tools Section */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center"
        >
          <h3 className="text-3xl font-bold mb-8 text-white">
            Công cụ thường dùng
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool, index) => (
              <motion.span
                key={index}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-gradient-to-r from-gray-800 to-gray-900 text-gray-300 rounded-full border border-gray-700 hover:border-purple-500 transition-all duration-300 cursor-pointer"
              >
                {tool}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
