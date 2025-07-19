"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Eye,
  ExternalLink,
  Calendar,
  Tag,
  Filter,
  Grid3X3,
  LayoutGrid,
  Heart,
  Sparkles,
  Camera,
  Video,
  Palette,
} from "lucide-react";
import { gsap } from "gsap";

const Projects = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, margin: "-100px" });
  const [activeFilter, setActiveFilter] = useState("all");
  const [viewMode, setViewMode] = useState("grid");

  // GSAP Animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Magnetic effect for project cards
      const cards = gsap.utils.toArray(".project-card");

      cards.forEach((card: any) => {
        const cardElement = card;

        cardElement.addEventListener("mouseenter", () => {
          gsap.to(cardElement, {
            scale: 1.05,
            rotationY: 5,
            rotationX: 5,
            duration: 0.3,
            ease: "power2.out",
          });
        });

        cardElement.addEventListener("mouseleave", () => {
          gsap.to(cardElement, {
            scale: 1,
            rotationY: 0,
            rotationX: 0,
            duration: 0.3,
            ease: "power2.out",
          });
        });

        cardElement.addEventListener("mousemove", (e: MouseEvent) => {
          const rect = cardElement.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;

          gsap.to(cardElement, {
            rotationY: x * 0.1,
            rotationX: -y * 0.1,
            duration: 0.3,
            ease: "power2.out",
          });
        });
      });
    }, gridRef);

    return () => ctx.revert();
  }, [activeFilter]);

  const filters = [
    { id: "all", name: "Tất cả", icon: LayoutGrid },
    { id: "fashion", name: "Fashion", icon: Camera },
    { id: "video", name: "Video", icon: Video },
    { id: "brand", name: "Branding", icon: Palette },
  ];

  const projects = [
    {
      id: 1,
      title: "Bohemian Rhapsody Collection",
      category: "fashion",
      tags: ["Fashion Photography", "Art Direction"],
      date: "Tháng 12, 2024",
      description:
        "Bộ sưu tập thời trang bohemian với phong cách tự do, phóng khoáng, thể hiện tinh thần trẻ trung và sáng tạo.",
      image: "from-purple-400 via-pink-400 to-red-400",
      views: "2.5K",
      likes: "324",
      featured: true,
    },
    {
      id: 2,
      title: "Urban Street Style Campaign",
      category: "video",
      tags: ["Video Production", "Street Fashion"],
      date: "Tháng 11, 2024",
      description:
        "Campaign quảng bá thời trang đường phố với góc nhìn hiện đại và năng động.",
      image: "from-blue-400 via-purple-400 to-pink-400",
      views: "3.2K",
      likes: "467",
      featured: false,
    },
    {
      id: 3,
      title: "Luxury Brand Identity",
      category: "brand",
      tags: ["Brand Identity", "Visual Design"],
      date: "Tháng 10, 2024",
      description:
        "Thiết kế nhận diện thương hiệu cho brand thời trang cao cấp với phong cách tối giản và sang trọng.",
      image: "from-emerald-400 via-teal-400 to-cyan-400",
      views: "1.8K",
      likes: "256",
      featured: true,
    },
    {
      id: 4,
      title: "Minimalist Portrait Series",
      category: "fashion",
      tags: ["Portrait", "Minimalism"],
      date: "Tháng 9, 2024",
      description:
        "Series chân dung thời trang theo phong cách tối giản, tập trung vào cảm xúc và biểu cảm.",
      image: "from-orange-400 via-red-400 to-pink-400",
      views: "2.1K",
      likes: "389",
      featured: false,
    },
    {
      id: 5,
      title: "TikTok Viral Fashion Content",
      category: "video",
      tags: ["TikTok", "Viral Content"],
      date: "Tháng 8, 2024",
      description:
        "Nội dung thời trang viral trên TikTok với hơn 1M views, showcasing xu hướng mới nhất.",
      image: "from-violet-400 via-purple-400 to-indigo-400",
      views: "1.2M",
      likes: "15.6K",
      featured: true,
    },
    {
      id: 6,
      title: "Sustainable Fashion Campaign",
      category: "brand",
      tags: ["Sustainability", "Campaign"],
      date: "Tháng 7, 2024",
      description:
        "Chiến dịch truyền thông về thời trang bền vững, kết hợp thông điệp ý nghĩa với visual ấn tượng.",
      image: "from-green-400 via-emerald-400 to-teal-400",
      views: "4.1K",
      likes: "672",
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
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  } as any;

  const projectVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      transition: {
        duration: 0.3,
      },
    },
  } as any;

  return (
    <section
      ref={containerRef}
      id="portfolio"
      className="relative py-20 lg:py-32 bg-gradient-to-br from-white via-gray-50 to-purple-50/30 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-10 w-96 h-96 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-br from-blue-200/20 to-cyan-200/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-12"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center space-y-6">
            <div className="flex items-center justify-center space-x-3">
              <motion.div
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.3 }}
              >
                <Sparkles className="w-6 h-6 text-purple-600" />
              </motion.div>
              <span className="text-purple-600 font-semibold tracking-wider uppercase text-sm">
                Portfolio
              </span>
            </div>

            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Creative{" "}
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
                Works
              </span>
              <br />& Projects
            </h2>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Khám phá những dự án thời trang độc đáo và sáng tạo, từ
              photography đến video content, thể hiện phong cách "chipi" đầy cá
              tính
            </p>
          </motion.div>

          {/* Filter & View Controls */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col lg:flex-row items-center justify-between gap-6"
          >
            {/* Filters */}
            <div className="flex flex-wrap items-center gap-2">
              {filters.map((filter) => (
                <motion.button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative px-6 py-3 rounded-full font-semibold transition-all duration-300 ${
                    activeFilter === filter.id
                      ? "text-white shadow-lg"
                      : "text-gray-600 hover:text-gray-900 bg-white/70 backdrop-blur-sm border border-gray-200"
                  }`}
                >
                  {activeFilter === filter.id && (
                    <motion.div
                      layoutId="activeFilter"
                      className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"
                      transition={{
                        type: "spring",
                        bounce: 0.2,
                        duration: 0.6,
                      }}
                    />
                  )}
                  <span className="relative z-10 flex items-center space-x-2">
                    <filter.icon className="w-4 h-4" />
                    <span>{filter.name}</span>
                  </span>
                </motion.button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center space-x-2 bg-white/70 backdrop-blur-sm p-2 rounded-full border border-gray-200">
              <motion.button
                onClick={() => setViewMode("grid")}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`p-2 rounded-full transition-colors duration-300 ${
                  viewMode === "grid"
                    ? "bg-purple-600 text-white"
                    : "text-gray-600"
                }`}
              >
                <Grid3X3 className="w-4 h-4" />
              </motion.button>
              <motion.button
                onClick={() => setViewMode("list")}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className={`p-2 rounded-full transition-colors duration-300 ${
                  viewMode === "list"
                    ? "bg-purple-600 text-white"
                    : "text-gray-600"
                }`}
              >
                <LayoutGrid className="w-4 h-4" />
              </motion.button>
            </div>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            ref={gridRef}
            variants={containerVariants}
            className={`grid gap-6 lg:gap-8 ${
              viewMode === "grid"
                ? "md:grid-cols-2 lg:grid-cols-3"
                : "grid-cols-1 max-w-4xl mx-auto"
            }`}
          >
            <AnimatePresence mode="wait">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={`${activeFilter}-${project.id}`}
                  variants={projectVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  layout
                  className={`project-card group relative bg-white/70 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl border border-white/50 hover:shadow-2xl transition-all duration-500 ${
                    project.featured ? "lg:col-span-2" : ""
                  } ${viewMode === "list" ? "lg:flex lg:items-center" : ""}`}
                >
                  {/* Image/Visual */}
                  <div
                    className={`relative overflow-hidden ${
                      viewMode === "list" ? "lg:w-1/2" : "aspect-[4/3]"
                    }`}
                  >
                    <div
                      className={`w-full h-full bg-gradient-to-br ${project.image} relative`}
                    >
                      {/* Overlay Content */}
                      <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex space-x-4">
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-3 bg-white/90 rounded-full text-gray-900 shadow-lg"
                          >
                            <Eye className="w-5 h-5" />
                          </motion.button>
                          <motion.button
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                            className="p-3 bg-white/90 rounded-full text-gray-900 shadow-lg"
                          >
                            <ExternalLink className="w-5 h-5" />
                          </motion.button>
                        </div>
                      </div>

                      {/* Featured Badge */}
                      {project.featured && (
                        <motion.div
                          initial={{ scale: 0, rotate: -180 }}
                          animate={{ scale: 1, rotate: 0 }}
                          transition={{ delay: 0.3, type: "spring" }}
                          className="absolute top-4 right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-sm font-bold shadow-lg"
                        >
                          ⭐ Featured
                        </motion.div>
                      )}

                      {/* Stats Overlay */}
                      <div className="absolute bottom-4 left-4 flex space-x-4">
                        <div className="flex items-center space-x-1 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                          <Eye className="w-3 h-3" />
                          <span>{project.views}</span>
                        </div>
                        <div className="flex items-center space-x-1 bg-black/50 text-white px-3 py-1 rounded-full text-sm">
                          <Heart className="w-3 h-3" />
                          <span>{project.likes}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    className={`p-6 ${viewMode === "list" ? "lg:w-1/2" : ""}`}
                  >
                    <div className="space-y-4">
                      {/* Tags */}
                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-xs font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* Title */}
                      <h3 className="text-xl lg:text-2xl font-bold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="text-gray-600 leading-relaxed">
                        {project.description}
                      </p>

                      {/* Date */}
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <Calendar className="w-4 h-4" />
                        <span>{project.date}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Load More Button */}
          <motion.div variants={itemVariants} className="text-center pt-8">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(147, 51, 234, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full overflow-hidden shadow-2xl"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <span>Xem thêm dự án</span>
                <Sparkles className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-pink-600 to-orange-500"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
