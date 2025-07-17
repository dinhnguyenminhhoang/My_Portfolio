"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  ExternalLink,
  Play,
  Eye,
  Heart,
  Share2,
  TrendingUp,
  Video,
  Instagram,
  Youtube,
  Facebook,
  Filter,
  ArrowRight,
} from "lucide-react";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [activeFilter, setActiveFilter] = useState("all");

  const filters = [
    { id: "all", label: "Tất cả", count: 12 },
    { id: "video", label: "Video Script", count: 5 },
    { id: "social", label: "Social Content", count: 4 },
    { id: "campaign", label: "Campaign", count: 3 },
  ];

  const projects = [
    {
      id: 1,
      title: "Viral TikTok Campaign - Beauty Brand",
      category: "video",
      platform: "TikTok",
      views: "2.5M",
      likes: "180K",
      shares: "12K",
      description:
        "Tạo script cho loạt video TikTok về skincare routine, đạt 2.5M views trong 1 tuần",
      image: "/api/placeholder/400/300",
      tags: ["TikTok", "Beauty", "Viral", "Script"],
      platformIcon: Video,
      color: "from-pink-500 to-rose-500",
      featured: true,
    },
    {
      id: 2,
      title: "Instagram Reels Series - Fashion Brand",
      category: "social",
      platform: "Instagram",
      views: "850K",
      likes: "45K",
      shares: "3.2K",
      description:
        "Chiến dịch Instagram Reels cho thương hiệu thời trang, tăng 300% engagement",
      image: "/api/placeholder/400/300",
      tags: ["Instagram", "Fashion", "Reels", "Content"],
      platformIcon: Instagram,
      color: "from-purple-500 to-pink-500",
      featured: false,
    },
    {
      id: 3,
      title: "YouTube Ad Campaign - Tech Startup",
      category: "campaign",
      platform: "YouTube",
      views: "1.2M",
      likes: "95K",
      shares: "8.5K",
      description:
        "Script cho series YouTube Ads giúp startup tech tăng 250% conversion rate",
      image: "/api/placeholder/400/300",
      tags: ["YouTube", "Tech", "Ads", "Conversion"],
      platformIcon: Youtube,
      color: "from-blue-500 to-purple-500",
      featured: true,
    },
    {
      id: 4,
      title: "Facebook Campaign - F&B Chain",
      category: "campaign",
      platform: "Facebook",
      views: "680K",
      likes: "32K",
      shares: "2.8K",
      description:
        "Chiến dịch Facebook cho chuỗi F&B, tăng 180% traffic đến store",
      image: "/api/placeholder/400/300",
      tags: ["Facebook", "F&B", "Campaign", "Traffic"],
      platformIcon: Facebook,
      color: "from-blue-600 to-indigo-600",
      featured: false,
    },
    {
      id: 5,
      title: "TikTok Brand Challenge - Gaming",
      category: "video",
      platform: "TikTok",
      views: "3.8M",
      likes: "290K",
      shares: "18K",
      description:
        "Tạo hashtag challenge cho game mobile, thu hút 50K+ user tham gia",
      image: "/api/placeholder/400/300",
      tags: ["TikTok", "Gaming", "Challenge", "UGC"],
      platformIcon: Video,
      color: "from-green-500 to-blue-500",
      featured: true,
    },
    {
      id: 6,
      title: "Instagram Story Campaign - Lifestyle",
      category: "social",
      platform: "Instagram",
      views: "420K",
      likes: "28K",
      shares: "1.9K",
      description:
        "Series Instagram Stories cho thương hiệu lifestyle, tăng 200% story views",
      image: "/api/placeholder/400/300",
      tags: ["Instagram", "Lifestyle", "Stories", "Engagement"],
      platformIcon: Instagram,
      color: "from-orange-500 to-pink-500",
      featured: false,
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
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

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-purple-50 via-pink-50 to-blue-50 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-40 left-20 w-64 h-64 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-40 right-20 w-80 h-80 bg-pink-500 rounded-full blur-3xl"></div>
      </div>

      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        ref={ref}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-12">
            <motion.div
              className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm rounded-full px-6 py-3 mb-6 shadow-lg"
              whileHover={{ scale: 1.05 }}
            >
              <TrendingUp className="w-5 h-5 text-purple-600" />
              <span className="text-purple-800 font-semibold">Portfolio</span>
            </motion.div>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Dự án{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Nổi bật
              </span>
            </h2>

            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Khám phá những dự án content đã tạo ra impact thực sự cho các
              thương hiệu
            </p>
          </motion.div>

          {/* Filter Tabs */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center mb-12"
          >
            <div className="bg-white/80 backdrop-blur-sm rounded-full p-2 shadow-lg">
              <div className="flex gap-2">
                {filters.map((filter) => (
                  <motion.button
                    key={filter.id}
                    onClick={() => setActiveFilter(filter.id)}
                    className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                      activeFilter === filter.id
                        ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                        : "text-gray-600 hover:text-purple-600 hover:bg-purple-50"
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {filter.label} ({filter.count})
                  </motion.button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            layout
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                layout
                className={`group bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 ${
                  project.featured ? "lg:col-span-2" : ""
                }`}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <div
                    className={`h-48 bg-gradient-to-br ${project.color} flex items-center justify-center relative`}
                  >
                    <project.platformIcon className="w-16 h-16 text-white/80" />

                    {/* Hover Overlay */}
                    <motion.div
                      className="absolute inset-0 bg-black/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={false}
                    >
                      <motion.button
                        className="bg-white/90 rounded-full p-4 backdrop-blur-sm"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Play className="w-6 h-6 text-purple-600 ml-1" />
                      </motion.button>
                    </motion.div>

                    {/* Featured Badge */}
                    {project.featured && (
                      <div className="absolute top-4 right-4 bg-yellow-400 text-black px-3 py-1 rounded-full text-sm font-semibold">
                        Featured
                      </div>
                    )}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  {/* Platform & Stats */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <project.platformIcon className="w-5 h-5 text-purple-600" />
                      <span className="text-sm font-medium text-purple-600">
                        {project.platform}
                      </span>
                    </div>

                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <div className="flex items-center gap-1">
                        <Eye className="w-4 h-4" />
                        {project.views}
                      </div>
                      <div className="flex items-center gap-1">
                        <Heart className="w-4 h-4" />
                        {project.likes}
                      </div>
                      <div className="flex items-center gap-1">
                        <Share2 className="w-4 h-4" />
                        {project.shares}
                      </div>
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors">
                    {project.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600 mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <motion.button
                    className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold flex items-center justify-center gap-2 group-hover:shadow-lg transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span>Xem chi tiết</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Load More Button */}
          <motion.div variants={itemVariants} className="text-center mt-12">
            <motion.button
              className="bg-white/80 backdrop-blur-sm text-purple-600 px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-200 hover:border-purple-400 flex items-center gap-2 mx-auto"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Xem thêm dự án</span>
              <ExternalLink className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
