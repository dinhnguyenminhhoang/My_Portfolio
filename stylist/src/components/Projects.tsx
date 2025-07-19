"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import {
  Play,
  Eye,
  Heart,
  Share2,
  ExternalLink,
  Calendar,
  Tag,
  TrendingUp,
  Award,
  Video,
  Camera,
  Instagram,
  Youtube,
  Music,
  ChevronLeft,
  ChevronRight,
  Filter,
  Star,
} from "lucide-react";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();
  const [activeFilter, setActiveFilter] = useState("all");
  const [currentSlide, setCurrentSlide] = useState(0);

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

  const projects = [
    {
      id: 1,
      title: "Brand Campaign - Fashion Week",
      description: "Chiến dịch thời trang viral với 2M+ views trên TikTok",
      category: "brand",
      type: "Video Content",
      platform: "TikTok",
      date: "2024-03",
      stats: {
        views: "2.1M",
        likes: "150K",
        shares: "25K",
        engagement: "8.5%",
      },
      tags: ["Fashion", "Viral", "TikTok", "Brand Campaign"],
      color: "from-pink-500 to-purple-500",
      featured: true,
    },
    {
      id: 2,
      title: "Product Launch - Tech Startup",
      description: "Series video giới thiệu sản phẩm công nghệ mới",
      category: "product",
      type: "Video Series",
      platform: "YouTube",
      date: "2024-02",
      stats: {
        views: "500K",
        likes: "45K",
        shares: "8K",
        engagement: "12.3%",
      },
      tags: ["Tech", "Product", "YouTube", "Startup"],
      color: "from-blue-500 to-cyan-500",
      featured: false,
    },
    {
      id: 3,
      title: "Lifestyle Content - Travel Blog",
      description: "Nội dung du lịch phong cách minimalist",
      category: "lifestyle",
      type: "Photo + Video",
      platform: "Instagram",
      date: "2024-01",
      stats: {
        views: "800K",
        likes: "65K",
        shares: "12K",
        engagement: "9.8%",
      },
      tags: ["Travel", "Lifestyle", "Instagram", "Photography"],
      color: "from-green-500 to-emerald-500",
      featured: true,
    },
    {
      id: 4,
      title: "Music Video - Indie Artist",
      description: "MV nghệ thuật cho ca sĩ độc lập với style retro",
      category: "entertainment",
      type: "Music Video",
      platform: "YouTube",
      date: "2023-12",
      stats: {
        views: "1.2M",
        likes: "89K",
        shares: "15K",
        engagement: "11.2%",
      },
      tags: ["Music", "Artistic", "Retro", "Creative"],
      color: "from-purple-500 to-pink-500",
      featured: false,
    },
    {
      id: 5,
      title: "Food Brand - Recipe Series",
      description: "Series công thức nấu ăn trending trên social media",
      category: "food",
      type: "Recipe Videos",
      platform: "TikTok",
      date: "2023-11",
      stats: {
        views: "3.5M",
        likes: "280K",
        shares: "45K",
        engagement: "15.1%",
      },
      tags: ["Food", "Recipe", "Viral", "Trending"],
      color: "from-orange-500 to-red-500",
      featured: true,
    },
    {
      id: 6,
      title: "Corporate Training - Online Course",
      description: "Video khóa học đào tạo doanh nghiệp chuyên nghiệp",
      category: "corporate",
      type: "Educational",
      platform: "YouTube",
      date: "2023-10",
      stats: {
        views: "200K",
        likes: "18K",
        shares: "5K",
        engagement: "13.5%",
      },
      tags: ["Corporate", "Education", "Professional", "Training"],
      color: "from-gray-500 to-blue-500",
      featured: false,
    },
  ];

  const filters = [
    { id: "all", label: "Tất cả", icon: Star },
    { id: "brand", label: "Brand Campaign", icon: Award },
    { id: "product", label: "Product", icon: Tag },
    { id: "lifestyle", label: "Lifestyle", icon: Camera },
    { id: "entertainment", label: "Entertainment", icon: Music },
    { id: "food", label: "Food & Beverage", icon: Heart },
    { id: "corporate", label: "Corporate", icon: TrendingUp },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const featuredProjects = projects.filter((project) => project.featured);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredProjects.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length
    );
  };

  const getPlatformIcon = (platform: string) => {
    switch (platform) {
      case "TikTok":
        return Music;
      case "Instagram":
        return Instagram;
      case "YouTube":
        return Youtube;
      default:
        return Video;
    }
  };

  return (
    <section
      id="projects"
      className="py-20 lg:py-32 bg-gradient-to-br from-purple-50 via-white to-pink-50 relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full blur-3xl animate-pulse" />
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
            <Video className="w-5 h-5 text-purple-500" />
            <span className="text-purple-600 font-medium">Portfolio</span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent">
              Dự án
            </span>
            <br />
            <span className="text-gray-800">nổi bật</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Những câu chuyện thành công được kể qua từng khung hình và video
            viral
          </motion.p>
        </motion.div>

        {/* Featured Projects Carousel */}
        <motion.div
          className="mb-16 lg:mb-24"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.h3
            variants={itemVariants}
            className="text-2xl md:text-3xl font-bold text-center mb-12 text-gray-800"
          >
            Dự án được yêu thích nhất
          </motion.h3>

          <div className="relative">
            <div className="overflow-hidden rounded-3xl">
              <motion.div
                className="flex"
                animate={{ x: -currentSlide * 100 + "%" }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                {featuredProjects.map((project, index) => (
                  <div key={project.id} className="w-full flex-shrink-0">
                    <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-purple-100 mx-4">
                      <div className="grid lg:grid-cols-2 gap-8 items-center">
                        {/* Project Image/Video Placeholder */}
                        <div className="relative">
                          <div
                            className={`aspect-video bg-gradient-to-br ${project.color} rounded-2xl overflow-hidden shadow-xl`}
                          >
                            <div className="absolute inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center">
                              <div className="text-center text-white">
                                <Play className="w-16 h-16 mx-auto mb-4 opacity-80" />
                                <p className="text-lg font-medium">
                                  {project.type}
                                </p>
                                <p className="text-sm opacity-80">
                                  {project.platform}
                                </p>
                              </div>
                            </div>
                          </div>

                          {/* Platform Badge */}
                          <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center space-x-2">
                            {React.createElement(
                              getPlatformIcon(project.platform),
                              { className: "w-4 h-4 text-purple-600" }
                            )}
                            <span className="text-purple-600 font-medium text-sm">
                              {project.platform}
                            </span>
                          </div>

                          {/* View Button */}
                          <motion.button
                            className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-all duration-200"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <ExternalLink className="w-5 h-5 text-purple-600" />
                          </motion.button>
                        </div>

                        {/* Project Info */}
                        <div className="space-y-6">
                          <div>
                            <h4 className="text-2xl md:text-3xl font-bold text-gray-800 mb-3">
                              {project.title}
                            </h4>
                            <p className="text-gray-600 text-lg leading-relaxed">
                              {project.description}
                            </p>
                          </div>

                          {/* Stats */}
                          <div className="grid grid-cols-2 gap-4">
                            <div className="bg-purple-50 p-4 rounded-xl">
                              <div className="flex items-center space-x-2 mb-2">
                                <Eye className="w-5 h-5 text-purple-600" />
                                <span className="text-purple-600 font-medium">
                                  Views
                                </span>
                              </div>
                              <div className="text-2xl font-bold text-gray-800">
                                {project.stats.views}
                              </div>
                            </div>
                            <div className="bg-pink-50 p-4 rounded-xl">
                              <div className="flex items-center space-x-2 mb-2">
                                <Heart className="w-5 h-5 text-pink-600" />
                                <span className="text-pink-600 font-medium">
                                  Likes
                                </span>
                              </div>
                              <div className="text-2xl font-bold text-gray-800">
                                {project.stats.likes}
                              </div>
                            </div>
                            <div className="bg-blue-50 p-4 rounded-xl">
                              <div className="flex items-center space-x-2 mb-2">
                                <Share2 className="w-5 h-5 text-blue-600" />
                                <span className="text-blue-600 font-medium">
                                  Shares
                                </span>
                              </div>
                              <div className="text-2xl font-bold text-gray-800">
                                {project.stats.shares}
                              </div>
                            </div>
                            <div className="bg-green-50 p-4 rounded-xl">
                              <div className="flex items-center space-x-2 mb-2">
                                <TrendingUp className="w-5 h-5 text-green-600" />
                                <span className="text-green-600 font-medium">
                                  Engagement
                                </span>
                              </div>
                              <div className="text-2xl font-bold text-gray-800">
                                {project.stats.engagement}
                              </div>
                            </div>
                          </div>

                          {/* Tags */}
                          <div className="flex flex-wrap gap-2">
                            {project.tags.map((tag, i) => (
                              <span
                                key={i}
                                className="px-3 py-1 bg-white/80 backdrop-blur-sm text-gray-700 text-sm rounded-full border border-purple-200 font-medium"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Navigation Buttons */}
            <motion.button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-all duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </motion.button>

            <motion.button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-all duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </motion.button>

            {/* Dots Indicator */}
            <div className="flex justify-center mt-8 space-x-2">
              {featuredProjects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-200 ${
                    index === currentSlide
                      ? "bg-purple-600 scale-125"
                      : "bg-gray-300 hover:bg-purple-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>

        {/* Filter Tabs */}
        <motion.div
          className="flex flex-wrap justify-center gap-3 mb-12"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-200 flex items-center space-x-2 ${
                activeFilter === filter.id
                  ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
                  : "bg-white/70 backdrop-blur-sm text-gray-600 hover:text-purple-600 border border-purple-200"
              }`}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <filter.icon className="w-4 h-4" />
              <span>{filter.label}</span>
            </motion.button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="bg-white/70 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 border border-purple-100"
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              {/* Project Image */}
              <div className="relative">
                <div
                  className={`aspect-video bg-gradient-to-br ${project.color} relative overflow-hidden`}
                >
                  <div className="absolute inset-0 bg-black/20 backdrop-blur-sm flex items-center justify-center">
                    <div className="text-center text-white">
                      <Play className="w-12 h-12 mx-auto mb-2 opacity-80" />
                      <p className="text-sm font-medium">{project.type}</p>
                    </div>
                  </div>
                </div>

                {/* Platform Badge */}
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center space-x-1">
                  {React.createElement(getPlatformIcon(project.platform), {
                    className: "w-3 h-3 text-purple-600",
                  })}
                  <span className="text-purple-600 font-medium text-xs">
                    {project.platform}
                  </span>
                </div>

                {/* Date */}
                <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full flex items-center space-x-1">
                  <Calendar className="w-3 h-3 text-gray-600" />
                  <span className="text-gray-600 text-xs">{project.date}</span>
                </div>
              </div>

              {/* Project Info */}
              <div className="p-6">
                <h4 className="text-xl font-bold text-gray-800 mb-2">
                  {project.title}
                </h4>
                <p className="text-gray-600 mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Mini Stats */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center space-x-4 text-sm text-gray-600">
                    <div className="flex items-center space-x-1">
                      <Eye className="w-4 h-4" />
                      <span>{project.stats.views}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Heart className="w-4 h-4" />
                      <span>{project.stats.likes}</span>
                    </div>
                  </div>
                  <span className="text-sm font-medium text-purple-600">
                    {project.stats.engagement}
                  </span>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tags.slice(0, 3).map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-purple-50 text-purple-700 text-xs rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* View Button */}
                <motion.button
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 text-white py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-200"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Xem chi tiết
                </motion.button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Load More Button */}
        <motion.div
          className="text-center mt-12"
          variants={itemVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.button
            className="bg-white/70 backdrop-blur-sm border border-purple-200 text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-purple-50 transition-all duration-200"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Xem thêm dự án
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
