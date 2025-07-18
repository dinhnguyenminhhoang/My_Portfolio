"use client";

import { useEffect, useRef, useState } from "react";
import {
  motion,
  useInView,
  useAnimation,
  AnimatePresence,
} from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Play,
  Eye,
  Heart,
  Share2,
  ExternalLink,
  TrendingUp,
  Users,
  Calendar,
  Sparkles,
  Filter,
  ChevronLeft,
  ChevronRight,
  Star,
  Zap,
  Camera,
  Video,
  Instagram,
  Youtube,
  Music,
} from "lucide-react";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const projectsGridRef = useRef<HTMLDivElement>(null);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [currentSlide, setCurrentSlide] = useState(0);

  const controls = useAnimation();
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Project cards reveal animation
      gsap.fromTo(
        ".project-card",
        { opacity: 0, y: 100, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: projectsGridRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Featured project parallax
      gsap.to(".featured-project", {
        y: -30,
        scrollTrigger: {
          trigger: ".featured-project",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      // Stats counter animation
      gsap.fromTo(
        ".stat-number",
        { textContent: 0 },
        {
          textContent: (_: any, target: any) =>
            target.getAttribute("data-value"),
          duration: 2,
          ease: "power2.out",
          snap: { textContent: 1 },
          scrollTrigger: {
            trigger: ".stats-container",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [selectedCategory]);

  const categories = [
    { id: "all", name: "Tất cả", icon: "🎬", count: 12 },
    { id: "tiktok", name: "TikTok", icon: "🎵", count: 6 },
    { id: "instagram", name: "Instagram", icon: "📸", count: 4 },
    { id: "youtube", name: "YouTube", icon: "📹", count: 2 },
  ];

  const projects = [
    {
      id: 1,
      title: "Trend Dance Challenge",
      description: "Video dance viral với 2.5M views và 300K likes trên TikTok",
      category: "tiktok",
      thumbnail: "bg-gradient-to-br from-pink-400 to-purple-600",
      views: "2.5M",
      likes: "300K",
      shares: "50K",
      date: "2024-01-15",
      featured: true,
      tags: ["Viral", "Dance", "Trending"],
      stats: {
        engagement: "12.5%",
        reach: "5.2M",
        saves: "45K",
      },
    },
    {
      id: 2,
      title: "Food Review Series",
      description: "Series review món ăn đường phố với góc nhìn Gen Z",
      category: "instagram",
      thumbnail: "bg-gradient-to-br from-orange-400 to-red-600",
      views: "1.8M",
      likes: "180K",
      shares: "25K",
      date: "2024-02-20",
      featured: false,
      tags: ["Food", "Review", "Lifestyle"],
      stats: {
        engagement: "10.2%",
        reach: "3.1M",
        saves: "32K",
      },
    },
    {
      id: 3,
      title: "Life Hacks Comedy",
      description: "Video hài về những mẹo vặt cuộc sống cực kỳ viral",
      category: "tiktok",
      thumbnail: "bg-gradient-to-br from-green-400 to-blue-600",
      views: "3.2M",
      likes: "420K",
      shares: "80K",
      date: "2024-03-10",
      featured: true,
      tags: ["Comedy", "Life Hacks", "Viral"],
      stats: {
        engagement: "15.8%",
        reach: "7.5M",
        saves: "68K",
      },
    },
    {
      id: 4,
      title: "Fashion Outfit Challenge",
      description: "Thử thách mix đồ với ngân sách 500K",
      category: "instagram",
      thumbnail: "bg-gradient-to-br from-purple-400 to-pink-600",
      views: "1.2M",
      likes: "150K",
      shares: "20K",
      date: "2024-04-05",
      featured: false,
      tags: ["Fashion", "Challenge", "Budget"],
      stats: {
        engagement: "9.8%",
        reach: "2.8M",
        saves: "28K",
      },
    },
    {
      id: 5,
      title: "Day in My Life Vlog",
      description: "Vlog một ngày làm việc của content creator",
      category: "youtube",
      thumbnail: "bg-gradient-to-br from-yellow-400 to-orange-600",
      views: "800K",
      likes: "85K",
      shares: "15K",
      date: "2024-05-12",
      featured: false,
      tags: ["Vlog", "Lifestyle", "Behind the scenes"],
      stats: {
        engagement: "11.2%",
        reach: "1.5M",
        saves: "18K",
      },
    },
    {
      id: 6,
      title: "Reaction to Viral Trends",
      description: "React và phân tích các trend đang hot",
      category: "youtube",
      thumbnail: "bg-gradient-to-br from-indigo-400 to-purple-600",
      views: "1.5M",
      likes: "120K",
      shares: "30K",
      date: "2024-06-08",
      featured: false,
      tags: ["Reaction", "Trends", "Analysis"],
      stats: {
        engagement: "8.9%",
        reach: "2.2M",
        saves: "22K",
      },
    },
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  const featuredProjects = projects.filter((project) => project.featured);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
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

  const handleProjectClick = (projectId: number) => {
    setSelectedProject(projectId);
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredProjects.length);
  };

  const prevSlide = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length
    );
  };

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-20 lg:py-32 bg-gradient-to-br from-gray-50 via-purple-50 to-pink-50 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full opacity-20 blur-xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-r from-pink-200 to-orange-200 rounded-full opacity-20 blur-xl animate-pulse delay-1000"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full px-6 py-3 mb-6">
              <Sparkles className="w-5 h-5 text-purple-500" />
              <span className="text-sm font-semibold text-purple-700">
                Portfolio
              </span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Dự án{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                viral
              </span>{" "}
              của tôi
            </h2>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Khám phá những dự án đã tạo nên tiếng vang lớn trên các nền tảng
              social media, từ TikTok đến Instagram và YouTube
            </p>
          </motion.div>

          {/* Featured Projects Carousel */}
          <motion.div variants={itemVariants} className="mb-20">
            <div className="relative">
              <div className="featured-project relative h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={currentSlide}
                    initial={{ opacity: 0, x: 300 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -300 }}
                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                    className={`absolute inset-0 ${featuredProjects[currentSlide]?.thumbnail} flex items-end`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

                    {/* Featured Project Content */}
                    <div className="relative z-10 p-8 lg:p-12 text-white">
                      <div className="flex items-center space-x-2 mb-4">
                        <Star className="w-5 h-5 text-yellow-400" />
                        <span className="text-sm font-medium">
                          Featured Project
                        </span>
                      </div>

                      <h3 className="text-3xl lg:text-4xl font-bold mb-4">
                        {featuredProjects[currentSlide]?.title}
                      </h3>

                      <p className="text-lg opacity-90 mb-6 max-w-2xl">
                        {featuredProjects[currentSlide]?.description}
                      </p>

                      <div className="flex items-center space-x-6 mb-6">
                        <div className="flex items-center space-x-2">
                          <Eye className="w-5 h-5" />
                          <span className="font-semibold">
                            {featuredProjects[currentSlide]?.views}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Heart className="w-5 h-5" />
                          <span className="font-semibold">
                            {featuredProjects[currentSlide]?.likes}
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Share2 className="w-5 h-5" />
                          <span className="font-semibold">
                            {featuredProjects[currentSlide]?.shares}
                          </span>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 mb-6">
                        {featuredProjects[currentSlide]?.tags.map(
                          (tag, index) => (
                            <span
                              key={index}
                              className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium"
                            >
                              {tag}
                            </span>
                          )
                        )}
                      </div>

                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() =>
                          handleProjectClick(featuredProjects[currentSlide]?.id)
                        }
                        className="inline-flex items-center space-x-2 bg-white text-gray-900 font-semibold px-6 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                      >
                        <Play className="w-5 h-5" />
                        <span>Xem chi tiết</span>
                      </motion.button>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>

              {/* Carousel Controls */}
              <div className="absolute top-1/2 -translate-y-1/2 left-4 right-4 flex justify-between pointer-events-none">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={prevSlide}
                  className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 pointer-events-auto"
                >
                  <ChevronLeft className="w-6 h-6" />
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={nextSlide}
                  className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/30 transition-all duration-300 pointer-events-auto"
                >
                  <ChevronRight className="w-6 h-6" />
                </motion.button>
              </div>

              {/* Carousel Indicators */}
              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2">
                {featuredProjects.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentSlide ? "bg-white" : "bg-white/50"
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Stats Section */}
          <motion.div variants={itemVariants} className="stats-container mb-20">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: <Eye className="w-8 h-8" />,
                  value: "10",
                  suffix: "M+",
                  label: "Tổng lượt xem",
                },
                {
                  icon: <Heart className="w-8 h-8" />,
                  value: "1.2",
                  suffix: "M+",
                  label: "Lượt yêu thích",
                },
                {
                  icon: <Share2 className="w-8 h-8" />,
                  value: "250",
                  suffix: "K+",
                  label: "Lượt chia sẻ",
                },
                {
                  icon: <TrendingUp className="w-8 h-8" />,
                  value: "15",
                  suffix: "%",
                  label: "Tỷ lệ tương tác",
                },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-purple-100"
                >
                  <div className="text-purple-500 mb-4 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">
                    <span className="stat-number" data-value={stat.value}>
                      0
                    </span>
                    <span>{stat.suffix}</span>
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Category Filter */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="flex flex-wrap justify-center gap-4">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`inline-flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    selectedCategory === category.id
                      ? "bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-lg"
                      : "bg-white/80 text-gray-700 hover:bg-white hover:shadow-md"
                  }`}
                >
                  <span className="text-lg">{category.icon}</span>
                  <span>{category.name}</span>
                  <span className="text-xs opacity-75">({category.count})</span>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            ref={projectsGridRef}
            variants={itemVariants}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="wait">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 25,
                    delay: index * 0.1,
                  }}
                  className="project-card group cursor-pointer"
                  onClick={() => handleProjectClick(project.id)}
                >
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/50 group-hover:scale-105">
                    {/* Project Thumbnail */}
                    <div
                      className={`relative h-48 ${project.thumbnail} group-hover:scale-110 transition-transform duration-500`}
                    >
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                      <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm rounded-full p-2">
                        <Play className="w-4 h-4 text-white" />
                      </div>

                      {/* Category Badge */}
                      <div className="absolute top-4 left-4">
                        <span className="inline-flex items-center space-x-1 bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-medium text-white">
                          {project.category === "tiktok" && (
                            <Music className="w-3 h-3" />
                          )}
                          {project.category === "instagram" && (
                            <Instagram className="w-3 h-3" />
                          )}
                          {project.category === "youtube" && (
                            <Youtube className="w-3 h-3" />
                          )}
                          <span className="capitalize">{project.category}</span>
                        </span>
                      </div>

                      {/* Stats Overlay */}
                      <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white text-sm">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <Eye className="w-4 h-4" />
                            <span>{project.views}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Heart className="w-4 h-4" />
                            <span>{project.likes}</span>
                          </div>
                        </div>
                        <span className="text-xs opacity-75">
                          {new Date(project.date).toLocaleDateString("vi-VN")}
                        </span>
                      </div>
                    </div>

                    {/* Project Content */}
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-purple-600 transition-colors duration-300">
                        {project.title}
                      </h3>

                      <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-2 py-1 bg-purple-50 text-purple-600 rounded-full text-xs font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-2 text-sm text-gray-500">
                          <Calendar className="w-4 h-4" />
                          <span>
                            {new Date(project.date).toLocaleDateString("vi-VN")}
                          </span>
                        </div>

                        <motion.div
                          whileHover={{ scale: 1.1 }}
                          className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* CTA Section */}
          <motion.div variants={itemVariants} className="mt-20 text-center">
            <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 rounded-3xl p-8 lg:p-12 text-white">
              <div className="max-w-3xl mx-auto">
                <div className="flex items-center justify-center space-x-2 mb-6">
                  <Zap className="w-6 h-6" />
                  <span className="text-sm font-semibold uppercase tracking-wide">
                    Ready to Create?
                  </span>
                </div>

                <h3 className="text-3xl lg:text-4xl font-bold mb-6">
                  Bạn có ý tưởng viral?
                </h3>

                <p className="text-lg lg:text-xl opacity-90 mb-8">
                  Hãy cùng tôi biến ý tưởng của bạn thành những nội dung viral
                  triệu view!
                </p>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const element = document.querySelector("#contact");
                    if (element) element.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center space-x-2 bg-white text-purple-600 font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <span>Bắt đầu hợp tác</span>
                  <motion.div
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    <Sparkles className="w-5 h-5" />
                  </motion.div>
                </motion.button>
              </div>
            </div>
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
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-white rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {(() => {
                const project = projects.find((p) => p.id === selectedProject);
                if (!project) return null;

                return (
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <h3 className="text-2xl font-bold text-gray-900">
                        {project.title}
                      </h3>
                      <button
                        onClick={() => setSelectedProject(null)}
                        className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors"
                      >
                        ×
                      </button>
                    </div>

                    <div
                      className={`h-64 ${project.thumbnail} rounded-2xl mb-6`}
                    />

                    <p className="text-gray-600 mb-6">{project.description}</p>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-purple-50 rounded-xl p-4">
                        <div className="text-sm text-purple-600 font-medium mb-1">
                          Engagement Rate
                        </div>
                        <div className="text-2xl font-bold text-purple-900">
                          {project.stats.engagement}
                        </div>
                      </div>
                      <div className="bg-pink-50 rounded-xl p-4">
                        <div className="text-sm text-pink-600 font-medium mb-1">
                          Total Reach
                        </div>
                        <div className="text-2xl font-bold text-pink-900">
                          {project.stats.reach}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag, index) => (
                        <span
                          key={index}
                          className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
