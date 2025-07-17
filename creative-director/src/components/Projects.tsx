"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Play,
  ExternalLink,
  TrendingUp,
  Heart,
  Eye,
  Share2,
  Calendar,
  Tag,
  ChevronLeft,
  ChevronRight,
  Filter,
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import SectionWrapper from "./SectionWrapper";

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const filters = [
    { id: "all", label: "Tất cả", count: 12 },
    { id: "viral", label: "Viral Videos", count: 8 },
    { id: "campaign", label: "Campaigns", count: 6 },
    { id: "brand", label: "Brand Content", count: 4 },
    { id: "social", label: "Social Media", count: 7 },
  ];

  const projects = [
    {
      id: 1,
      title: "Shopee 12.12 - Gen Z Shopping Challenge",
      category: "campaign",
      type: "Brand Campaign",
      client: "Shopee",
      date: "Dec 2023",
      thumbnail: "🛍️",
      description:
        "Viral campaign tăng 400% engagement cho Shopee trong mùa sale 12.12",
      tags: ["TikTok", "Campaign", "Gen Z"],
      stats: {
        views: "2.5M",
        likes: "150K",
        shares: "25K",
        engagement: "12.5%",
      },
      results: [
        "400% tăng engagement rate",
        "2.5M+ views trong 7 ngày",
        "Top 1 trending TikTok VN",
      ],
      color: "from-orange-500 to-red-500",
    },
    {
      id: 2,
      title: "Grab Food - Đói Là Gọi Series",
      category: "viral",
      type: "Video Series",
      client: "Grab",
      date: "Nov 2023",
      thumbnail: "🍜",
      description:
        "Series video hài hước về văn hóa ăn uống của Gen Z Việt Nam",
      tags: ["Comedy", "Food", "Series"],
      stats: {
        views: "1.8M",
        likes: "120K",
        shares: "18K",
        engagement: "9.8%",
      },
      results: [
        "1.8M+ views organic",
        "95% positive sentiment",
        "30% tăng brand awareness",
      ],
      color: "from-green-500 to-emerald-500",
    },
    {
      id: 3,
      title: "Tiki - Back to School Creative Contest",
      category: "social",
      type: "UGC Campaign",
      client: "Tiki",
      date: "Aug 2023",
      thumbnail: "🎓",
      description:
        "Cuộc thi sáng tạo cho học sinh, sinh viên với 10K+ submissions",
      tags: ["UGC", "Contest", "Education"],
      stats: {
        views: "3.2M",
        likes: "200K",
        shares: "45K",
        engagement: "15.2%",
      },
      results: [
        "10K+ user submissions",
        "3.2M+ reach total",
        "50% tăng app downloads",
      ],
      color: "from-blue-500 to-purple-500",
    },
    {
      id: 4,
      title: "Vinamilk - Sữa Mới Lạ Series",
      category: "brand",
      type: "Brand Content",
      client: "Vinamilk",
      date: "Sep 2023",
      thumbnail: "🥛",
      description:
        "Content series giới thiệu sản phẩm mới theo phong cách Gen Z",
      tags: ["Brand", "Product", "Storytelling"],
      stats: {
        views: "1.5M",
        likes: "85K",
        shares: "12K",
        engagement: "8.5%",
      },
      results: [
        "1.5M+ views",
        "25% tăng product awareness",
        "High brand recall",
      ],
      color: "from-pink-500 to-rose-500",
    },
    {
      id: 5,
      title: "Viettel - 5G Experience Challenge",
      category: "viral",
      type: "Tech Content",
      client: "Viettel",
      date: "Oct 2023",
      thumbnail: "📱",
      description: "Challenge viral về trải nghiệm 5G với các game thú vị",
      tags: ["Tech", "Challenge", "5G"],
      stats: {
        views: "2.1M",
        likes: "140K",
        shares: "28K",
        engagement: "11.3%",
      },
      results: ["2.1M+ views", "Top 3 trending tech", "35% tăng 5G adoption"],
      color: "from-cyan-500 to-blue-500",
    },
    {
      id: 6,
      title: "Biti's - Giày Việt Nam Đi Khắp Thế Giới",
      category: "campaign",
      type: "Brand Campaign",
      client: "Biti's",
      date: "Jul 2023",
      thumbnail: "👟",
      description: "Campaign patriotic kết hợp trend để promote giày Việt Nam",
      tags: ["Patriotic", "Fashion", "Pride"],
      stats: {
        views: "1.7M",
        likes: "110K",
        shares: "22K",
        engagement: "10.1%",
      },
      results: [
        "1.7M+ views",
        "Strong patriotic sentiment",
        "40% tăng brand loyalty",
      ],
      color: "from-red-500 to-orange-500",
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  useEffect(() => {
    // Animate project cards
    gsap.fromTo(
      ".project-card",
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <SectionWrapper id="projects" className="py-20 bg-gray-50">
      <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Dự án
            <span className="block text-transparent bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text">
              nổi bật
            </span>
          </motion.h2>

          <motion.p
            className="text-lg text-gray-600 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Từ viral videos đến brand campaigns, mỗi dự án đều mang dấu ấn sáng
            tạo và hiệu quả kinh doanh rõ rệt! 🔥
          </motion.p>
        </div>

        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {filters.map((filter) => (
            <motion.button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === filter.id
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-gray-50 border border-gray-200"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Filter className="w-4 h-4" />
              <span>{filter.label}</span>
              <span
                className={`text-xs px-2 py-1 rounded-full ${
                  activeFilter === filter.id
                    ? "bg-white/20 text-white"
                    : "bg-gray-100 text-gray-500"
                }`}
              >
                {filter.count}
              </span>
            </motion.button>
          ))}
        </div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeFilter}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                className="project-card group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden"
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                {/* Project Thumbnail */}
                <div
                  className={`relative h-48 bg-gradient-to-br ${project.color} flex items-center justify-center overflow-hidden`}
                >
                  <div className="text-6xl mb-4 group-hover:scale-110 transition-transform duration-300">
                    {project.thumbnail}
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300" />

                  {/* Play Button */}
                  <motion.div
                    className="absolute inset-0 flex items-center justify-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{
                      opacity: hoveredProject === project.id ? 1 : 0,
                      scale: hoveredProject === project.id ? 1 : 0.8,
                    }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="bg-white/90 backdrop-blur-sm rounded-full p-4 shadow-lg">
                      <Play className="w-8 h-8 text-gray-900" />
                    </div>
                  </motion.div>

                  {/* Project Type Badge */}
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-medium text-gray-900">
                    {project.type}
                  </div>

                  {/* Date */}
                  <div className="absolute top-4 right-4 flex items-center gap-1 text-white/90 text-sm">
                    <Calendar className="w-4 h-4" />
                    {project.date}
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6">
                  {/* Title & Client */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-gray-600 mb-3">
                      Client:{" "}
                      <span className="font-medium">{project.client}</span>
                    </p>
                    <p className="text-gray-700 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="inline-flex items-center gap-1 bg-purple-100 text-purple-600 px-2 py-1 rounded-md text-xs font-medium"
                      >
                        <Tag className="w-3 h-3" />
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Stats */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 text-red-500 mb-1">
                        <Eye className="w-4 h-4" />
                        <span className="font-bold">{project.stats.views}</span>
                      </div>
                      <div className="text-xs text-gray-500">Views</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 text-pink-500 mb-1">
                        <Heart className="w-4 h-4" />
                        <span className="font-bold">{project.stats.likes}</span>
                      </div>
                      <div className="text-xs text-gray-500">Likes</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 text-blue-500 mb-1">
                        <Share2 className="w-4 h-4" />
                        <span className="font-bold">
                          {project.stats.shares}
                        </span>
                      </div>
                      <div className="text-xs text-gray-500">Shares</div>
                    </div>
                    <div className="text-center">
                      <div className="flex items-center justify-center gap-1 text-green-500 mb-1">
                        <TrendingUp className="w-4 h-4" />
                        <span className="font-bold">
                          {project.stats.engagement}
                        </span>
                      </div>
                      <div className="text-xs text-gray-500">Engagement</div>
                    </div>
                  </div>

                  {/* Results */}
                  <div className="space-y-2 mb-6">
                    <h4 className="text-sm font-semibold text-gray-900 mb-2">
                      Key Results:
                    </h4>
                    {project.results.map((result, resultIndex) => (
                      <div
                        key={resultIndex}
                        className="flex items-center gap-2 text-sm text-gray-600"
                      >
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full"></div>
                        {result}
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <motion.button
                      className="flex-1 bg-gradient-to-r from-purple-600 to-pink-600 text-white px-4 py-2 rounded-lg font-medium text-sm hover:shadow-lg transition-shadow flex items-center justify-center gap-2"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Play className="w-4 h-4" />
                      Xem chi tiết
                    </motion.button>

                    <motion.button
                      className="px-4 py-2 border border-gray-200 rounded-lg text-gray-700 hover:bg-gray-50 transition-colors"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <ExternalLink className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>

                {/* Hover Effect Overlay */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-pink-600/5 pointer-events-none"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredProject === project.id ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

        {/* Load More Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <motion.button
            className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-shadow flex items-center gap-3 mx-auto"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <TrendingUp className="w-5 h-5" />
            Xem thêm dự án
          </motion.button>
        </motion.div>

        {/* Achievement Banner */}
        <motion.div
          className="mt-20 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl p-8 text-white text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h3 className="text-3xl font-bold mb-4">Kết quả ấn tượng</h3>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Sau 3 năm làm việc, các dự án của tôi đã mang lại những con số ấn
            tượng cho các thương hiệu lớn tại Việt Nam
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">15M+</div>
              <div className="text-white/80">Total Views</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">500K+</div>
              <div className="text-white/80">Engagements</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">50+</div>
              <div className="text-white/80">Projects</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">30+</div>
              <div className="text-white/80">Happy Clients</div>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default Projects;
