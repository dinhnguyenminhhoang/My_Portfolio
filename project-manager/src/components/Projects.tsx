"use client";

import { motion } from "framer-motion";
import {
  ExternalLink,
  Github,
  Calendar,
  Users,
  TrendingUp,
  Smartphone,
  Globe,
  ShoppingCart,
  BookOpen,
  Heart,
  Star,
} from "lucide-react";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
} from "@/lib/utils";

const projects = [
  {
    id: 1,
    title: "E-commerce Platform Redesign",
    description:
      "Tái thiết kế toàn bộ platform thương mại điện tử với UX/UI hiện đại, tăng conversion rate 45%",
    image: "/api/placeholder/600/400",
    category: "Web Development",
    duration: "6 tháng",
    teamSize: "8 người",
    technologies: ["React", "Node.js", "MongoDB", "AWS"],
    results: [
      "Tăng 45% conversion rate",
      "Giảm 30% bounce rate",
      "Cải thiện 60% user experience",
    ],
    status: "Hoàn thành",
    icon: ShoppingCart,
    gradient: "from-pink-500 to-purple-600",
    link: "#",
    github: "#",
  },
  {
    id: 2,
    title: "Mobile App cho Startup EdTech",
    description:
      "Phát triển app học tập trực tuyến với AI-powered recommendation system, phục vụ 10k+ users",
    image: "/api/placeholder/600/400",
    category: "Mobile Development",
    duration: "4 tháng",
    teamSize: "6 người",
    technologies: ["React Native", "Python", "TensorFlow", "Firebase"],
    results: [
      "10,000+ active users",
      "4.8/5 rating trên App Store",
      "Tăng 80% engagement rate",
    ],
    status: "Đang vận hành",
    icon: Smartphone,
    gradient: "from-cyan-500 to-blue-600",
    link: "#",
    github: "#",
  },
  {
    id: 3,
    title: "Corporate Website & CRM System",
    description:
      "Xây dựng website doanh nghiệp tích hợp CRM system, automation workflow cho 500+ nhân viên",
    image: "/api/placeholder/600/400",
    category: "Enterprise Solution",
    duration: "8 tháng",
    teamSize: "12 người",
    technologies: ["Vue.js", "Laravel", "PostgreSQL", "Docker"],
    results: [
      "Giảm 50% thời gian xử lý",
      "Tăng 35% productivity",
      "Tích hợp thành công 15+ tools",
    ],
    status: "Hoàn thành",
    icon: Globe,
    gradient: "from-green-500 to-teal-600",
    link: "#",
    github: "#",
  },
  {
    id: 4,
    title: "Healthcare Management System",
    description:
      "Hệ thống quản lý bệnh viện với AI diagnosis support, phục vụ 5 bệnh viện lớn",
    image: "/api/placeholder/600/400",
    category: "Healthcare Tech",
    duration: "10 tháng",
    teamSize: "15 người",
    technologies: ["Angular", "Spring Boot", "MySQL", "TensorFlow"],
    results: [
      "Giảm 40% thời gian chẩn đoán",
      "Tăng 60% hiệu quả quản lý",
      "Phục vụ 50,000+ bệnh nhân",
    ],
    status: "Đang phát triển",
    icon: Heart,
    gradient: "from-red-500 to-pink-600",
    link: "#",
    github: "#",
  },
];

const ProjectCard = ({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) => {
  const Icon = project.icon;

  return (
    <motion.div
      variants={fadeInUp}
      whileHover={{ y: -10 }}
      className="group relative"
    >
      <div className="absolute -inset-0.5 bg-gradient-to-r opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-xl blur"></div>
      <div className="relative bg-gray-900/80 backdrop-blur-sm rounded-xl border border-gray-800 hover:border-gray-700 transition-all duration-300 overflow-hidden">
        {/* Project Image */}
        <div className="relative h-48 bg-gradient-to-br from-gray-800 to-gray-900 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br opacity-20"></div>
          <div className="absolute top-4 left-4">
            <div
              className={`w-12 h-12 bg-gradient-to-r ${project.gradient} rounded-full flex items-center justify-center`}
            >
              <Icon className="text-white" size={24} />
            </div>
          </div>
          <div className="absolute top-4 right-4">
            <span
              className={`px-3 py-1 text-xs font-semibold rounded-full ${
                project.status === "Hoàn thành"
                  ? "bg-green-500/20 text-green-400"
                  : project.status === "Đang vận hành"
                  ? "bg-blue-500/20 text-blue-400"
                  : "bg-yellow-500/20 text-yellow-400"
              }`}
            >
              {project.status}
            </span>
          </div>
        </div>

        {/* Project Content */}
        <div className="p-6">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-purple-400 font-semibold">
              {project.category}
            </span>
            <div className="flex items-center text-gray-400 text-sm">
              <Star className="w-4 h-4 mr-1" />
              <span>Featured</span>
            </div>
          </div>

          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-pink-500 group-hover:to-purple-500 group-hover:bg-clip-text transition-all duration-300">
            {project.title}
          </h3>

          <p className="text-gray-300 mb-4 leading-relaxed">
            {project.description}
          </p>

          {/* Project Stats */}
          <div className="flex items-center gap-4 mb-4 text-sm text-gray-400">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              <span>{project.duration}</span>
            </div>
            <div className="flex items-center">
              <Users className="w-4 h-4 mr-1" />
              <span>{project.teamSize}</span>
            </div>
          </div>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map((tech, techIndex) => (
              <span
                key={techIndex}
                className="px-2 py-1 bg-gray-800 text-gray-300 rounded text-xs border border-gray-700"
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Results */}
          <div className="mb-4">
            <h4 className="text-sm font-semibold text-gray-400 mb-2">
              Kết quả đạt được:
            </h4>
            <ul className="space-y-1">
              {project.results.map((result, resultIndex) => (
                <li
                  key={resultIndex}
                  className="text-sm text-gray-300 flex items-center"
                >
                  <TrendingUp className="w-3 h-3 mr-2 text-green-400" />
                  {result}
                </li>
              ))}
            </ul>
          </div>

          {/* Action Buttons */}
          <div className="flex gap-3">
            <motion.a
              href={project.link}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`flex-1 bg-gradient-to-r ${project.gradient} text-white px-4 py-2 rounded-lg text-sm font-semibold text-center hover:shadow-lg transition-all duration-300 flex items-center justify-center`}
            >
              <ExternalLink className="w-4 h-4 mr-2" />
              Xem chi tiết
            </motion.a>
            <motion.a
              href={project.github}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 border border-gray-700 text-gray-300 rounded-lg text-sm font-semibold hover:border-gray-600 hover:bg-gray-800 transition-all duration-300 flex items-center justify-center"
            >
              <Github className="w-4 h-4" />
            </motion.a>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  return (
    <section
      id="projects"
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
              Dự án nổi bật
            </span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Khám phá những dự án tôi đã quản lý và triển khai thành công, từ
            startup đến enterprise
          </motion.p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.2 }}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mt-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white font-semibold rounded-full hover:from-purple-600 hover:to-pink-700 transition-all duration-300 shadow-lg shadow-purple-500/25"
          >
            Xem thêm dự án
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
