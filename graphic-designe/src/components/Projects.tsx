"use client";

import {
  cn,
  fadeInLeft,
  fadeInRight,
  fadeInUp,
  staggerContainer,
  staggerDelay,
} from "@/lib/utils";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ArrowRight,
  Calendar,
  ExternalLink,
  Eye,
  Globe,
  Grid3X3,
  Heart,
  List,
  Palette,
  Play,
  Search,
  Share2,
  Smartphone,
  Star,
  Tag,
  Video,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const projectCategories = [
  { id: "all", name: "Tất cả", icon: Grid3X3, count: 12 },
  { id: "branding", name: "Branding", icon: Palette, count: 4 },
  { id: "ui-ux", name: "UI/UX", icon: Smartphone, count: 3 },
  { id: "motion", name: "Motion Graphics", icon: Video, count: 3 },
  { id: "social", name: "Social Media", icon: Globe, count: 2 },
];

const projects = [
  {
    id: 1,
    title: "Bubble Tea Brand Identity",
    description:
      "Thiết kế hệ thống nhận diện thương hiệu cho chuỗi trà sữa với phong cách trẻ trung, màu sắc tươi sáng",
    category: "branding",
    image: "/api/placeholder/400/300",
    tags: ["Logo Design", "Brand Identity", "Packaging", "Marketing"],
    client: "Bubble Tea Co.",
    duration: "3 tuần",
    year: "2024",
    likes: 156,
    views: 2840,
    featured: true,
    colors: ["#FF6B9D", "#4ECDC4", "#45B7D1", "#FFA07A"],
    tools: ["Illustrator", "Photoshop", "Figma"],
    results: [
      "Tăng 40% nhận diện thương hiệu",
      "Tăng 60% engagement trên social media",
      "Design system hoàn chỉnh cho 15+ cửa hàng",
    ],
    liveUrl: "#",
    githubUrl: "#",
    downloadUrl: "#",
  },
  {
    id: 2,
    title: "Fitness App UI/UX Design",
    description:
      "Thiết kế giao diện ứng dụng fitness với trải nghiệm người dùng tối ưu, tích hợp tracking và gamification",
    category: "ui-ux",
    image: "/api/placeholder/400/300",
    tags: ["Mobile App", "User Experience", "Prototyping", "Design System"],
    client: "FitLife Startup",
    duration: "6 tuần",
    year: "2024",
    likes: 203,
    views: 3920,
    featured: true,
    colors: ["#667EEA", "#764BA2", "#F093FB", "#F5576C"],
    tools: ["Figma", "Principle", "Adobe XD"],
    results: [
      "4.8/5 rating trên App Store",
      "Tăng 75% user retention",
      "Giảm 30% churn rate",
    ],
    liveUrl: "#",
    githubUrl: "#",
    downloadUrl: "#",
  },
  {
    id: 3,
    title: "E-commerce Motion Graphics",
    description:
      "Tạo motion graphics cho chiến dịch quảng cáo sản phẩm, bao gồm video ads và animated banners",
    category: "motion",
    image: "/api/placeholder/400/300",
    tags: ["After Effects", "Motion Design", "Animation", "Video Ads"],
    client: "Fashion Brand X",
    duration: "4 tuần",
    year: "2024",
    likes: 89,
    views: 1670,
    featured: false,
    colors: ["#FF7675", "#74B9FF", "#A29BFE", "#FD79A8"],
    tools: ["After Effects", "Cinema 4D", "Premiere Pro"],
    results: [
      "Tăng 85% click-through rate",
      "Tăng 45% conversion rate",
      "Viral trên TikTok với 500K views",
    ],
    liveUrl: "#",
    githubUrl: "#",
    downloadUrl: "#",
  },
  {
    id: 4,
    title: "Restaurant Social Media Kit",
    description:
      "Bộ template và content strategy cho nhà hàng, bao gồm posts, stories và menu design",
    category: "social",
    image: "/api/placeholder/400/300",
    tags: [
      "Social Media",
      "Content Strategy",
      "Template Design",
      "Food Photography",
    ],
    client: "Saigon Bistro",
    duration: "2 tuần",
    year: "2024",
    likes: 134,
    views: 2150,
    featured: true,
    colors: ["#F39C12", "#E74C3C", "#27AE60", "#3498DB"],
    tools: ["Canva", "Photoshop", "Lightroom"],
    results: [
      "Tăng 120% followers",
      "Tăng 90% engagement rate",
      "Tăng 35% lượt đặt bàn",
    ],
    liveUrl: "#",
    githubUrl: "#",
    downloadUrl: "#",
  },
  {
    id: 5,
    title: "Tech Startup Branding",
    description:
      "Thiết kế logo, website và marketing materials cho startup công nghệ với tone hiện đại, chuyên nghiệp",
    category: "branding",
    image: "/api/placeholder/400/300",
    tags: ["Logo Design", "Web Design", "Marketing", "Tech"],
    client: "InnovateTech",
    duration: "5 tuần",
    year: "2023",
    likes: 178,
    views: 3450,
    featured: true,
    colors: ["#6C5CE7", "#A29BFE", "#74B9FF", "#00B894"],
    tools: ["Illustrator", "Figma", "Photoshop"],
    results: [
      "Tăng 200% brand awareness",
      "Gọi vốn thành công $2M",
      "Mở rộng ra 3 thị trường mới",
    ],
    liveUrl: "#",
    githubUrl: "#",
    downloadUrl: "#",
  },
  {
    id: 6,
    title: "Music Festival Visual Identity",
    description:
      "Thiết kế visual identity cho festival âm nhạc với phong cách năng động, màu sắc sống động",
    category: "branding",
    image: "/api/placeholder/400/300",
    tags: ["Event Branding", "Visual Identity", "Print Design", "Digital"],
    client: "Summer Vibes Festival",
    duration: "4 tuần",
    year: "2023",
    likes: 267,
    views: 4820,
    featured: true,
    colors: ["#FF6B6B", "#4ECDC4", "#45B7D1", "#FFA07A"],
    tools: ["Illustrator", "Photoshop", "InDesign"],
    results: [
      "Sold out 50,000 tickets",
      "Viral trên social media",
      "Giải thưởng Design Excellence",
    ],
    liveUrl: "#",
    githubUrl: "#",
    downloadUrl: "#",
  },
];

const ProjectCard = ({
  project,
  index,
  layoutType,
}: {
  project: (typeof projects)[0];
  index: number;
  layoutType: "grid" | "list";
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (cardRef.current) {
      gsap.set(cardRef.current, { y: 50, opacity: 0 });
      gsap.to(cardRef.current, {
        y: 0,
        opacity: 1,
        duration: 0.8,
        delay: staggerDelay(index, 0.1),
        ease: "power2.out",
      });
    }
  }, [index]);

  const handleLike = () => {
    // Logic for liking project
    console.log(`Liked project: ${project.title}`);
  };

  const handleShare = () => {
    // Logic for sharing project
    console.log(`Shared project: ${project.title}`);
  };

  if (layoutType === "list") {
    return (
      <motion.div
        ref={cardRef}
        className="bg-white/80 backdrop-blur-sm rounded-2xl border border-purple-100 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        whileHover={{ y: -5 }}
      >
        <div className="flex flex-col md:flex-row">
          {/* Project Image */}
          <div className="relative md:w-1/3 h-64 md:h-auto overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-purple-500/20" />
            <div className="absolute top-4 left-4 z-10">
              <div className="flex items-center space-x-2">
                {project.featured && (
                  <div className="px-2 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-semibold rounded-full flex items-center">
                    <Star className="w-3 h-3 mr-1" />
                    Featured
                  </div>
                )}
                <div className="px-2 py-1 bg-black/70 text-white text-xs rounded-full">
                  {project.year}
                </div>
              </div>
            </div>
            <motion.div
              className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 hover:opacity-100 transition-opacity duration-300"
              whileHover={{ opacity: 1 }}
            >
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center text-gray-900 hover:bg-white transition-colors duration-300"
              >
                <Play className="w-6 h-6 ml-1" />
              </motion.button>
            </motion.div>
          </div>

          {/* Project Info */}
          <div className="flex-1 p-6">
            <div className="flex items-start justify-between mb-4">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 hover:text-purple-600 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-600 mb-4">{project.description}</p>
              </div>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <Eye className="w-4 h-4" />
                <span>{project.views.toLocaleString()}</span>
              </div>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag, tagIndex) => (
                <span
                  key={tagIndex}
                  className="px-3 py-1 bg-gradient-to-r from-pink-500/10 to-purple-500/10 text-pink-700 text-xs rounded-full border border-pink-200/50"
                >
                  {tag}
                </span>
              ))}
            </div>

            {/* Project Meta */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-4 text-sm text-gray-500">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span>{project.duration}</span>
                </div>
                <div className="flex items-center">
                  <Tag className="w-4 h-4 mr-1" />
                  <span>{project.client}</span>
                </div>
              </div>

              <div className="flex items-center space-x-2">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleLike}
                  className="flex items-center space-x-1 px-3 py-1 bg-pink-500/10 text-pink-600 rounded-full hover:bg-pink-500/20 transition-colors duration-300"
                >
                  <Heart className="w-4 h-4" />
                  <span>{project.likes}</span>
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={handleShare}
                  className="p-2 bg-gray-100 text-gray-600 rounded-full hover:bg-gray-200 transition-colors duration-300"
                >
                  <Share2 className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      ref={cardRef}
      className="group relative bg-white/80 backdrop-blur-sm rounded-2xl border border-purple-100 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: -8 }}
    >
      {/* Project Image */}
      <div className="relative h-64 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-pink-500/20 to-purple-500/20" />

        {/* Badges */}
        <div className="absolute top-4 left-4 z-10">
          <div className="flex items-center space-x-2">
            {project.featured && (
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2 }}
                className="px-2 py-1 bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs font-semibold rounded-full flex items-center"
              >
                <Star className="w-3 h-3 mr-1" />
                Featured
              </motion.div>
            )}
            <div className="px-2 py-1 bg-black/70 text-white text-xs rounded-full">
              {project.year}
            </div>
          </div>
        </div>

        {/* Color Palette */}
        <div className="absolute top-4 right-4 z-10">
          <div className="flex space-x-1">
            {project.colors.map((color, colorIndex) => (
              <div
                key={colorIndex}
                className="w-4 h-4 rounded-full border-2 border-white shadow-lg"
                style={{ backgroundColor: color }}
              />
            ))}
          </div>
        </div>

        {/* Hover Overlay */}
        <AnimatePresence>
          {isHovered && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="absolute inset-0 bg-black/50 flex items-center justify-center"
            >
              <div className="flex items-center space-x-3">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center text-gray-900 hover:bg-white transition-colors duration-300"
                >
                  <Play className="w-5 h-5 ml-0.5" />
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="w-12 h-12 bg-white/90 rounded-full flex items-center justify-center text-gray-900 hover:bg-white transition-colors duration-300"
                >
                  <ExternalLink className="w-5 h-5" />
                </motion.button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Stats */}
        <div className="absolute bottom-4 left-4 right-4 z-10">
          <div className="flex items-center justify-between text-white">
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center">
                <Eye className="w-4 h-4 mr-1" />
                <span>{project.views.toLocaleString()}</span>
              </div>
              <div className="flex items-center">
                <Heart className="w-4 h-4 mr-1" />
                <span>{project.likes}</span>
              </div>
            </div>
            <div className="flex items-center space-x-1">
              {project.tools.slice(0, 3).map((tool, toolIndex) => (
                <div
                  key={toolIndex}
                  className="px-2 py-1 bg-white/20 backdrop-blur-sm text-xs rounded-full"
                >
                  {tool}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Project Info */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <div>
            <h3 className="text-lg font-bold text-gray-900 mb-1 group-hover:text-purple-600 transition-colors duration-300">
              {project.title}
            </h3>
            <p className="text-gray-600 text-sm mb-3 line-clamp-2">
              {project.description}
            </p>
          </div>
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.slice(0, 3).map((tag, tagIndex) => (
            <span
              key={tagIndex}
              className="px-2 py-1 bg-gradient-to-r from-pink-500/10 to-purple-500/10 text-pink-700 text-xs rounded-full border border-pink-200/50"
            >
              {tag}
            </span>
          ))}
          {project.tags.length > 3 && (
            <span className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-full">
              +{project.tags.length - 3}
            </span>
          )}
        </div>

        {/* Project Meta */}
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center space-x-3">
            <div className="flex items-center">
              <Calendar className="w-4 h-4 mr-1" />
              <span>{project.duration}</span>
            </div>
            <div className="flex items-center">
              <Tag className="w-4 h-4 mr-1" />
              <span>{project.client}</span>
            </div>
          </div>

          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={handleLike}
            className="flex items-center space-x-1 px-2 py-1 bg-pink-500/10 text-pink-600 rounded-full hover:bg-pink-500/20 transition-colors duration-300"
          >
            <Heart className="w-4 h-4" />
            <span>{project.likes}</span>
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState("all");
  const [layoutType, setLayoutType] = useState<"grid" | "list">("grid");
  const [searchTerm, setSearchTerm] = useState("");
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      activeCategory === "all" || project.category === activeCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tags.some((tag) =>
        tag.toLowerCase().includes(searchTerm.toLowerCase())
      );
    return matchesCategory && matchesSearch;
  });

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
  };

  const handleLayoutChange = (layout: "grid" | "list") => {
    setLayoutType(layout);
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-purple-50/30 via-pink-50/30 to-blue-50/30"
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
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full border border-purple-200/50 mb-6"
          >
            <Palette className="w-4 h-4 text-purple-500 mr-2" />
            <span className="text-sm font-medium text-purple-700">
              Portfolio
            </span>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              Dự án nổi bật
            </span>
            <br />
            <span className="text-gray-900">của tôi</span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Khám phá những dự án thiết kế tôi đã thực hiện, từ branding đến
            UI/UX, motion graphics và social media content
          </motion.p>
        </motion.div>

        {/* Filters and Controls */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="mb-12"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            {/* Category Filters */}
            <motion.div variants={fadeInLeft} className="flex flex-wrap gap-2">
              {projectCategories.map((category) => {
                const Icon = category.icon;
                return (
                  <motion.button
                    key={category.id}
                    onClick={() => handleCategoryChange(category.id)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={cn(
                      "flex items-center space-x-2 px-4 py-2 rounded-full text-sm font-medium transition-all duration-300",
                      activeCategory === category.id
                        ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg shadow-purple-500/25"
                        : "bg-white/80 text-gray-700 hover:bg-white hover:text-purple-600 border border-purple-100"
                    )}
                  >
                    <Icon className="w-4 h-4" />
                    <span>{category.name}</span>
                    <span
                      className={cn(
                        "px-2 py-0.5 rounded-full text-xs",
                        activeCategory === category.id
                          ? "bg-white/20 text-white"
                          : "bg-purple-100 text-purple-600"
                      )}
                    >
                      {category.count}
                    </span>
                  </motion.button>
                );
              })}
            </motion.div>

            {/* Search and Layout Controls */}
            <motion.div
              variants={fadeInRight}
              className="flex items-center space-x-4"
            >
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Tìm kiếm dự án..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 pr-4 py-2 bg-white/80 border border-purple-100 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                />
              </div>

              {/* Layout Toggle */}
              <div className="flex items-center bg-white/80 border border-purple-100 rounded-full p-1">
                <button
                  onClick={() => handleLayoutChange("grid")}
                  className={cn(
                    "p-2 rounded-full transition-all duration-300",
                    layoutType === "grid"
                      ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                      : "text-gray-600 hover:text-purple-600"
                  )}
                >
                  <Grid3X3 className="w-4 h-4" />
                </button>
                <button
                  onClick={() => handleLayoutChange("list")}
                  className={cn(
                    "p-2 rounded-full transition-all duration-300",
                    layoutType === "list"
                      ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white"
                      : "text-gray-600 hover:text-purple-600"
                  )}
                >
                  <List className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Projects Grid/List */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className={cn(
            "gap-8 mb-12",
            layoutType === "grid"
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
              : "flex flex-col space-y-8"
          )}
        >
          <AnimatePresence mode="wait">
            {filteredProjects.map((project, index) => (
              <ProjectCard
                key={`${project.id}-${layoutType}`}
                project={project}
                index={index}
                layoutType={layoutType}
              />
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="text-center"
        >
          <motion.button
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 text-white font-semibold rounded-full shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300"
          >
            <span>Xem thêm dự án</span>
            <ArrowRight className="w-5 h-5 ml-2" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
