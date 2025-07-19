"use client";

import {
  AnimatePresence,
  motion,
  useAnimation,
  useInView,
} from "framer-motion";
import {
  Calendar,
  ExternalLink,
  Eye,
  Filter,
  Heart,
  Play,
  X,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const controls = useAnimation();
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState<any>(null);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

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
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  } as any;

  const projects = [
    {
      id: 1,
      title: "Fashion Brand TikTok Campaign",
      category: "brand",
      platform: "TikTok",
      description:
        "Chiến dịch viral cho thương hiệu thời trang local, đạt 2.5M views trong 48h",
      thumbnail: "/api/placeholder/400/300",
      views: "2.5M",
      likes: "180K",
      shares: "25K",
      date: "2024-03",
      tags: ["Fashion", "Viral", "Trendy"],
      results: [
        "Tăng 350% engagement rate",
        "Thu hút 50K+ followers mới",
        "Doanh số tăng 200% trong campaign",
      ],
      challenge:
        "Làm sao để một thương hiệu thời trang Việt Nam có thể cạnh tranh với các brand quốc tế trên TikTok?",
      solution:
        'Tạo ra series video "Outfit of the day" kết hợp với local trends và Vietnamese culture, sử dụng trending sounds và hashtags phù hợp.',
      color: "from-pink-500 to-rose-500",
    },
    {
      id: 2,
      title: "Food & Beverage Viral Series",
      category: "food",
      platform: "Instagram",
      description:
        'Series review món ăn street food Sài Gòn, tạo trend "Sài Gòn Food Hunt"',
      thumbnail: "/api/placeholder/400/300",
      views: "1.8M",
      likes: "120K",
      shares: "18K",
      date: "2024-02",
      tags: ["Food", "Street Food", "Local"],
      results: [
        "Viral trend được copy bởi 500+ creators",
        "Tăng 80% lượt tương tác cho brand",
        "Feature trên major food blogs",
      ],
      challenge:
        "Làm thế nào để nổi bật trong lĩnh vực food content đã quá bão hòa?",
      solution:
        'Tạo format độc đáo "60s Food Adventure" với storytelling về người bán, không chỉ review món ăn mà còn kể câu chuyện behind the scenes.',
      color: "from-orange-500 to-red-500",
    },
    {
      id: 3,
      title: "Tech Product Launch Campaign",
      category: "tech",
      platform: "YouTube",
      description:
        "Video unboxing và review sản phẩm tech mới, hướng dẫn sử dụng chi tiết",
      thumbnail: "/api/placeholder/400/300",
      views: "950K",
      likes: "85K",
      shares: "12K",
      date: "2024-01",
      tags: ["Tech", "Review", "Unboxing"],
      results: [
        "Highest engagement rate in tech category",
        "Brand partnership renewal",
        "Featured in company official channels",
      ],
      challenge:
        "Sản phẩm tech thường khô khan, làm sao để tạo content hấp dẫn cho audience Việt Nam?",
      solution:
        "Kết hợp tech review với lifestyle content, show real-world usage scenarios và so sánh với products phổ biến ở VN.",
      color: "from-blue-500 to-indigo-500",
    },
    {
      id: 4,
      title: "Lifestyle Vlog Series",
      category: "lifestyle",
      platform: "TikTok",
      description:
        'Series "Một ngày của Gen Z Sài Gòn" - authentic lifestyle content',
      thumbnail: "/api/placeholder/400/300",
      views: "1.2M",
      likes: "95K",
      shares: "15K",
      date: "2023-12",
      tags: ["Lifestyle", "Gen Z", "Authentic"],
      results: [
        "Xây dựng community 30K+ engaged followers",
        "Collaboration với 15+ local brands",
        "Content được share rộng rãi",
      ],
      challenge:
        "Lifestyle content rất nhiều, làm sao để có góc nhìn mới và authentic?",
      solution:
        'Focus vào "real life" của Gen Z Việt, không glamorize quá mức, show both struggles và highlights một cách balanced.',
      color: "from-purple-500 to-pink-500",
    },
    {
      id: 5,
      title: "Beauty Brand Collaboration",
      category: "beauty",
      platform: "Instagram",
      description:
        'Campaign "Makeup cho từng hoàn cảnh" - practical beauty content',
      thumbnail: "/api/placeholder/400/300",
      views: "2.1M",
      likes: "165K",
      shares: "22K",
      date: "2023-11",
      tags: ["Beauty", "Tutorial", "Practical"],
      results: [
        "Product sold out trong 24h",
        "Brand awareness tăng 400%",
        "Long-term partnership deal",
      ],
      challenge:
        "Beauty market rất competitive, làm sao để standout với budget limited?",
      solution:
        'Tạo content "relatable" cho working women Việt Nam - makeup nhanh cho đi làm, đi học, đi chơi với products accessible.',
      color: "from-rose-500 to-pink-500",
    },
    {
      id: 6,
      title: "Travel Content Series",
      category: "travel",
      platform: "YouTube",
      description:
        'Du lịch bụi Việt Nam với budget student - "Travel smart, spend less"',
      thumbnail: "/api/placeholder/400/300",
      views: "1.5M",
      likes: "110K",
      shares: "28K",
      date: "2023-10",
      tags: ["Travel", "Budget", "Local"],
      results: [
        "Tourism boost cho local destinations",
        "Partnership với travel agencies",
        "Featured trên travel magazines",
      ],
      challenge:
        "Travel content post-COVID cần approach mới, budget-conscious hơn.",
      solution:
        "Focus vào domestic travel, hidden gems trong nước, detailed budget breakdown và practical tips cho students/young adults.",
      color: "from-green-500 to-teal-500",
    },
  ];

  const filters = [
    { id: "all", label: "Tất cả", count: projects.length },
    {
      id: "brand",
      label: "Brand Campaign",
      count: projects.filter((p) => p.category === "brand").length,
    },
    {
      id: "food",
      label: "Food & Drink",
      count: projects.filter((p) => p.category === "food").length,
    },
    {
      id: "tech",
      label: "Technology",
      count: projects.filter((p) => p.category === "tech").length,
    },
    {
      id: "lifestyle",
      label: "Lifestyle",
      count: projects.filter((p) => p.category === "lifestyle").length,
    },
    {
      id: "beauty",
      label: "Beauty",
      count: projects.filter((p) => p.category === "beauty").length,
    },
    {
      id: "travel",
      label: "Travel",
      count: projects.filter((p) => p.category === "travel").length,
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  const openProjectModal = (project: any) => {
    setSelectedProject(project);
    document.body.style.overflow = "hidden";
  };

  const closeProjectModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = "unset";
  };

  return (
    <section
      id="projects"
      ref={ref}
      className="relative py-20 lg:py-32 bg-gradient-to-b from-white to-gray-50 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/3 -right-32 w-64 h-64 bg-gradient-to-r from-purple-200/30 to-pink-200/30 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-purple-600 font-medium text-sm">
                Portfolio Showcase
              </span>
            </motion.div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
              Những dự án{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Viral
              </span>
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Từ concept đến execution, mỗi dự án đều mang trong mình một câu
              chuyện độc đáo và kết quả ấn tượng. Xem cách tôi biến ý tưởng
              thành viral content.
            </p>
          </motion.div>

          {/* Filter Tabs */}
          <motion.div variants={itemVariants} className="flex justify-center">
            <div className="flex flex-wrap gap-2 bg-white rounded-2xl p-3 shadow-lg border border-gray-100">
              {filters.map((filter) => (
                <motion.button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                    activeFilter === filter.id
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-md"
                      : "text-gray-600 hover:text-purple-600 hover:bg-purple-50"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Filter className="w-4 h-4" />
                  <span>{filter.label}</span>
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full ${
                      activeFilter === filter.id
                        ? "bg-white/20 text-white"
                        : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {filter.count}
                  </span>
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            <AnimatePresence mode="wait">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="group bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  {/* Project Thumbnail */}
                  <div className="relative aspect-video bg-gradient-to-br from-gray-100 to-gray-200 overflow-hidden">
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-80`}
                      whileHover={{ opacity: 60 }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.button
                        onClick={() => openProjectModal(project)}
                        className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300"
                        whileHover={{ scale: 1.2 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <Play className="w-6 h-6 text-gray-700 ml-1" />
                      </motion.button>
                    </div>

                    {/* Platform Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm rounded-full text-xs font-medium text-gray-700">
                        {project.platform}
                      </span>
                    </div>

                    {/* Stats Overlay */}
                    <div className="absolute bottom-4 left-4 flex space-x-4 text-white text-sm">
                      <div className="flex items-center space-x-1">
                        <Eye className="w-4 h-4" />
                        <span>{project.views}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Heart className="w-4 h-4" />
                        <span>{project.likes}</span>
                      </div>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center space-x-2 text-sm text-gray-500">
                        <Calendar className="w-4 h-4" />
                        <span>{project.date}</span>
                      </div>
                      <motion.button
                        onClick={() => openProjectModal(project)}
                        className="text-purple-600 hover:text-purple-700"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                      >
                        <ExternalLink className="w-4 h-4" />
                      </motion.button>
                    </div>

                    <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-purple-600 transition-colors duration-200">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.slice(0, 2).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-2 py-1 bg-purple-100 text-purple-600 rounded-md text-xs font-medium"
                        >
                          #{tag}
                        </span>
                      ))}
                      {project.tags.length > 2 && (
                        <span className="px-2 py-1 bg-gray-100 text-gray-600 rounded-md text-xs font-medium">
                          +{project.tags.length - 2}
                        </span>
                      )}
                    </div>

                    {/* CTA */}
                    <motion.button
                      onClick={() => openProjectModal(project)}
                      className="w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-medium transition-all duration-300 hover:shadow-lg"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      Xem chi tiết
                    </motion.button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="text-center bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-8 lg:p-12 text-white"
          >
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Cùng tạo nên dự án viral tiếp theo?
            </h3>
            <p className="text-purple-100 mb-8 max-w-2xl mx-auto">
              Hãy để tôi giúp bạn biến ý tưởng thành content viral và chiến lược
              marketing hiệu quả. Liên hệ ngay để bắt đầu collaboration!
            </p>

            <motion.button
              onClick={() => {
                const contactSection = document.querySelector("#contact");
                contactSection?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-8 py-4 bg-white text-purple-600 rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:bg-gray-50"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Bắt đầu hợp tác
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={closeProjectModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-white rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="relative p-6 border-b border-gray-100">
                <button
                  onClick={closeProjectModal}
                  className="absolute top-6 right-6 p-2 text-gray-400 hover:text-gray-600 transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
                <h2 className="text-2xl font-bold text-gray-900 pr-12">
                  {selectedProject.title}
                </h2>
                <p className="text-gray-600 mt-2">
                  {selectedProject.description}
                </p>
              </div>

              {/* Modal Content */}
              <div className="p-6 space-y-8">
                {/* Stats */}
                <div className="grid grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-purple-600">
                      {selectedProject.views}
                    </div>
                    <div className="text-gray-600 text-sm">Views</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-pink-600">
                      {selectedProject.likes}
                    </div>
                    <div className="text-gray-600 text-sm">Likes</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-indigo-600">
                      {selectedProject.shares}
                    </div>
                    <div className="text-gray-600 text-sm">Shares</div>
                  </div>
                </div>

                {/* Challenge & Solution */}
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      Challenge
                    </h4>
                    <p className="text-gray-600">{selectedProject.challenge}</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      Solution
                    </h4>
                    <p className="text-gray-600">{selectedProject.solution}</p>
                  </div>
                </div>

                {/* Results */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">
                    Key Results
                  </h4>
                  <div className="grid gap-3">
                    {selectedProject.results.map(
                      (result: string, index: number) => (
                        <div
                          key={index}
                          className="flex items-center space-x-3"
                        >
                          <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                          <span className="text-gray-600">{result}</span>
                        </div>
                      )
                    )}
                  </div>
                </div>

                {/* Tags */}
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">
                    Tags
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.tags.map((tag: string, index: number) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-purple-100 text-purple-600 rounded-full text-sm font-medium"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
