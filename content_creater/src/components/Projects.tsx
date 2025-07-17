"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Play,
  ExternalLink,
  Eye,
  Heart,
  Share2,
  Filter,
  X,
  Calendar,
  User,
  Tag,
} from "lucide-react";
import { gsap } from "gsap";
import { cn } from "@/lib/utils";

const categories = [
  "Tất cả",
  "Video",
  "Photography",
  "Social Media",
  "Brand Campaign",
];

const projects = [
  {
    id: 1,
    title: "Viral Dance Challenge",
    description:
      "Tạo trend dance viral với 10M+ views trên TikTok, kết hợp âm nhạc trending và choreography độc đáo",
    image: "/api/placeholder/600/400",
    category: "Video",
    tags: ["TikTok", "Dance", "Viral", "Trending"],
    stats: { views: "10.2M", likes: "850K", shares: "120K" },
    date: "2024-01",
    client: "Independent",
    link: "#",
  },
  {
    id: 2,
    title: "Brand Lifestyle Campaign",
    description:
      "Chiến dịch quảng cáo thời trang với concept 'Authentic Beauty', tăng engagement 300% cho thương hiệu",
    image: "/api/placeholder/600/400",
    category: "Brand Campaign",
    tags: ["Fashion", "Lifestyle", "Beauty", "Commercial"],
    stats: { views: "5.8M", likes: "420K", shares: "75K" },
    date: "2023-12",
    client: "Fashion Brand X",
    link: "#",
  },
  {
    id: 3,
    title: "Food Photography Series",
    description:
      "Series ảnh food styling chuyên nghiệp cho chuỗi nhà hàng, tăng doanh số 40% sau campaign",
    image: "/api/placeholder/600/400",
    category: "Photography",
    tags: ["Food", "Photography", "Styling", "Commercial"],
    stats: { views: "2.1M", likes: "180K", shares: "25K" },
    date: "2023-11",
    client: "Restaurant Chain",
    link: "#",
  },
  {
    id: 4,
    title: "Tech Product Launch",
    description:
      "Video review và unboxing sản phẩm công nghệ mới, đạt 8M views và influencer top đầu về tech",
    image: "/api/placeholder/600/400",
    category: "Video",
    tags: ["Tech", "Review", "Unboxing", "Product"],
    stats: { views: "8.5M", likes: "520K", shares: "95K" },
    date: "2023-10",
    client: "Tech Company",
    link: "#",
  },
  {
    id: 5,
    title: "Social Media Strategy",
    description:
      "Xây dựng chiến lược content đa nền tảng cho startup, tăng follower 500% trong 6 tháng",
    image: "/api/placeholder/600/400",
    category: "Social Media",
    tags: ["Strategy", "Growth", "Multi-platform", "Analytics"],
    stats: { views: "3.2M", likes: "210K", shares: "35K" },
    date: "2023-09",
    client: "Startup XYZ",
    link: "#",
  },
  {
    id: 6,
    title: "Travel Vlog Series",
    description:
      "Series vlog du lịch Việt Nam với góc nhìn độc đáo, khám phá văn hóa và ẩm thực địa phương",
    image: "/api/placeholder/600/400",
    category: "Video",
    tags: ["Travel", "Vlog", "Culture", "Vietnam"],
    stats: { views: "6.8M", likes: "380K", shares: "68K" },
    date: "2023-08",
    client: "Tourism Board",
    link: "#",
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [selectedCategory, setSelectedCategory] = useState("Tất cả");
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);
  const [filteredProjects, setFilteredProjects] = useState(projects);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (selectedCategory === "Tất cả") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) => project.category === selectedCategory)
      );
    }
  }, [selectedCategory]);

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
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  } as any;

  const projectVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
    exit: {
      scale: 0.8,
      opacity: 0,
      transition: {
        duration: 0.3,
      },
    },
  } as any;

  return (
    <section id="projects" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={sectionRef}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.span
              initial={{ scale: 0, opacity: 0 }}
              animate={
                isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }
              }
              transition={{ delay: 0.5, duration: 0.6, ease: "backOut" }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full border border-purple-500/30 text-purple-300 text-sm font-medium mb-6"
            >
              <Play className="w-4 h-4" />
              Dự án nổi bật
            </motion.span>

            <h2 className="text-3xl md:text-5xl font-bold font-poppins mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Creative Portfolio
              </span>
            </h2>

            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Khám phá những dự án sáng tạo đã tạo nên dấu ấn trong cộng đồng,
              từ viral videos đến brand campaigns thành công
            </p>
          </motion.div>

          {/* Category Filter */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="flex flex-wrap justify-center gap-3">
              {categories.map((category, index) => (
                <motion.button
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                  onClick={() => setSelectedCategory(category)}
                  className={cn(
                    "px-6 py-3 rounded-full font-medium transition-all duration-300 border",
                    selectedCategory === category
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white border-transparent shadow-lg"
                      : "bg-gray-800/50 text-gray-300 border-gray-700/50 hover:border-purple-500/50 hover:text-white"
                  )}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Filter className="w-4 h-4 inline mr-2" />
                  {category}
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="popLayout">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  variants={projectVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  layout
                  className="group cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                  whileHover={{ y: -10 }}
                >
                  <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300">
                    {/* Project Image */}
                    <div className="relative overflow-hidden aspect-video">
                      <div className="w-full h-full bg-gradient-to-br from-purple-600/20 to-pink-600/20 flex items-center justify-center">
                        <Play className="w-12 h-12 text-white/80" />
                      </div>

                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="flex items-center gap-2 text-white text-sm">
                            <Eye className="w-4 h-4" />
                            <span>{project.stats.views}</span>
                            <Heart className="w-4 h-4 ml-2" />
                            <span>{project.stats.likes}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="p-6">
                      <div className="flex items-center gap-2 mb-3">
                        <span className="px-2 py-1 bg-purple-500/20 text-purple-300 rounded-md text-xs font-medium">
                          {project.category}
                        </span>
                        <span className="text-xs text-gray-400">
                          {project.date}
                        </span>
                      </div>

                      <h3 className="font-semibold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                        {project.title}
                      </h3>

                      <p className="text-sm text-gray-400 mb-4 line-clamp-3">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 bg-gray-700/50 text-gray-300 rounded text-xs"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* View More Button */}
          <motion.div variants={itemVariants} className="text-center mt-12">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 border-2 border-purple-400 rounded-full text-purple-400 font-semibold hover:bg-purple-400/10 transition-all duration-300"
            >
              Xem thêm dự án
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-gray-900 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-6 md:p-8">
                {/* Modal Header */}
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-white">
                    {selectedProject.title}
                  </h3>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 hover:bg-gray-800 rounded-full transition-colors"
                  >
                    <X className="w-6 h-6 text-gray-400" />
                  </button>
                </div>

                {/* Project Image */}
                <div className="aspect-video bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-xl mb-6 flex items-center justify-center">
                  <Play className="w-16 h-16 text-white/80" />
                </div>

                {/* Project Details */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="font-semibold text-white mb-3">
                      Mô tả dự án
                    </h4>
                    <p className="text-gray-300 leading-relaxed mb-6">
                      {selectedProject.description}
                    </p>

                    <div className="space-y-3">
                      <div className="flex items-center gap-3">
                        <Calendar className="w-5 h-5 text-purple-400" />
                        <span className="text-gray-300">
                          Thời gian: {selectedProject.date}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <User className="w-5 h-5 text-purple-400" />
                        <span className="text-gray-300">
                          Khách hàng: {selectedProject.client}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <Tag className="w-5 h-5 text-purple-400" />
                        <span className="text-gray-300">
                          Loại: {selectedProject.category}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-white mb-3">Thống kê</h4>
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      <div className="text-center p-4 bg-gray-800/50 rounded-lg">
                        <Eye className="w-6 h-6 text-purple-400 mx-auto mb-2" />
                        <div className="text-lg font-bold text-white">
                          {selectedProject.stats.views}
                        </div>
                        <div className="text-xs text-gray-400">Views</div>
                      </div>
                      <div className="text-center p-4 bg-gray-800/50 rounded-lg">
                        <Heart className="w-6 h-6 text-pink-400 mx-auto mb-2" />
                        <div className="text-lg font-bold text-white">
                          {selectedProject.stats.likes}
                        </div>
                        <div className="text-xs text-gray-400">Likes</div>
                      </div>
                      <div className="text-center p-4 bg-gray-800/50 rounded-lg">
                        <Share2 className="w-6 h-6 text-blue-400 mx-auto mb-2" />
                        <div className="text-lg font-bold text-white">
                          {selectedProject.stats.shares}
                        </div>
                        <div className="text-xs text-gray-400">Shares</div>
                      </div>
                    </div>

                    <h4 className="font-semibold text-white mb-3">Tags</h4>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {selectedProject.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>

                    <motion.a
                      href={selectedProject.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg text-white font-semibold hover:shadow-lg transition-all duration-300"
                    >
                      <ExternalLink className="w-5 h-5" />
                      Xem dự án
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/3 right-10 w-2 h-2 bg-purple-400 rounded-full opacity-60" />
        <div className="absolute bottom-1/3 left-10 w-3 h-3 bg-pink-400 rounded-full opacity-40" />
        <div className="absolute top-2/3 left-1/2 w-2 h-2 bg-blue-400 rounded-full opacity-50" />
      </div>
    </section>
  );
}
