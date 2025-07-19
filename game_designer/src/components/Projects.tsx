"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  ExternalLink,
  Github,
  Play,
  ArrowLeft,
  ArrowRight,
  Star,
  Calendar,
  Users,
  Code,
  Gamepad2,
  Trophy,
  Zap,
  Heart,
  Eye,
  Download,
} from "lucide-react";
import { gsap } from "gsap";

interface Project {
  id: number;
  title: string;
  description: string;
  fullDescription: string;
  category: string;
  tags: string[];
  image: string;
  demoUrl?: string;
  githubUrl?: string;
  downloadUrl?: string;
  status: "completed" | "in-progress" | "concept";
  stats: {
    downloads?: number;
    rating?: number;
    players?: number;
  };
  features: string[];
  tech: string[];
  timeline: string;
  teamSize: number;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Cyber Racing VN",
    description:
      "Game đua xe thể hiện văn hóa đường phố Việt Nam với gameplay độc đáo",
    fullDescription:
      "Một trải nghiệm đua xe hoàn toàn mới lấy bối cảnh các con phố quen thuộc của Việt Nam. Game kết hợp yếu tố văn hóa bản địa với công nghệ hiện đại, tạo nên trải nghiệm độc đáo chỉ có ở Việt Nam.",
    category: "Mobile Game",
    tags: ["Unity", "C#", "Mobile", "Racing"],
    image: "🏎️",
    demoUrl: "https://demo.com",
    githubUrl: "https://github.com",
    downloadUrl: "https://store.com",
    status: "completed",
    stats: {
      downloads: 100000,
      rating: 4.8,
      players: 25000,
    },
    features: [
      "15+ xe đua Việt Nam",
      "10 track iconic VN",
      "Multiplayer real-time",
      "Tùy chỉnh xe chi tiết",
    ],
    tech: ["Unity 2022", "C#", "Photon Network", "Firebase"],
    timeline: "6 tháng",
    teamSize: 8,
  },
  {
    id: 2,
    title: "Mystic Legends",
    description:
      "RPG fantasy với hệ thống magic system sáng tạo và storyline cuốn hút",
    fullDescription:
      "Một thế giới fantasy rộng lớn nơi người chơi khám phá những bí ẩn cổ xưa. Game có hệ thống magic độc đáo cho phép kết hợp các phép thuật để tạo ra combo mạnh mẽ.",
    category: "PC Game",
    tags: ["Unreal", "C++", "RPG", "Fantasy"],
    image: "🗡️",
    demoUrl: "https://demo.com",
    githubUrl: "https://github.com",
    status: "in-progress",
    stats: {
      rating: 4.9,
    },
    features: [
      "Open world 50km²",
      "500+ spells kết hợp",
      "Dynamic weather system",
      "AI companion thông minh",
    ],
    tech: ["Unreal Engine 5", "C++", "Blueprint", "Wwise Audio"],
    timeline: "12 tháng",
    teamSize: 15,
  },
  {
    id: 3,
    title: "Puzzle Master VR",
    description:
      "Game giải đố VR với physics engine tiên tiến và trải nghiệm immersive",
    fullDescription:
      "Trải nghiệm giải đố hoàn toàn mới trong không gian VR. Người chơi sử dụng tay để tương tác với các vật thể 3D, giải quyết những câu đố phức tạp trong môi trường ảo sống động.",
    category: "VR Game",
    tags: ["Unity", "VR", "Physics", "Puzzle"],
    image: "🥽",
    demoUrl: "https://demo.com",
    status: "concept",
    stats: {},
    features: [
      "Hand tracking chính xác",
      "Physics simulation thực tế",
      "100+ puzzle levels",
      "Voice command support",
    ],
    tech: ["Unity XR", "Oculus SDK", "Hand Tracking", "Spatial Audio"],
    timeline: "4 tháng",
    teamSize: 5,
  },
  {
    id: 4,
    title: "Battle Royale 2077",
    description:
      "BR game futuristic với 100 players và map procedural generation",
    fullDescription:
      "Game Battle Royale đặt trong tương lai năm 2077 với công nghệ tiên tiến. Map được tạo ngẫu nhiên mỗi trận đấu, mang đến trải nghiệm luôn mới mẻ cho người chơi.",
    category: "PC/Console",
    tags: ["Unreal", "Multiplayer", "BR", "Sci-fi"],
    image: "🚀",
    githubUrl: "https://github.com",
    downloadUrl: "https://store.com",
    status: "completed",
    stats: {
      downloads: 500000,
      rating: 4.7,
      players: 150000,
    },
    features: [
      "100 players per match",
      "Procedural map gen",
      "Futuristic weapons",
      "Real-time voice chat",
    ],
    tech: ["Unreal Engine 5", "AWS GameLift", "Vivox", "EOS"],
    timeline: "18 tháng",
    teamSize: 25,
  },
];

const ProjectCard = ({
  project,
  index,
  isActive,
  onClick,
}: {
  project: Project;
  index: number;
  isActive: boolean;
  onClick: () => void;
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (!cardRef.current) return;

    const card = cardRef.current;

    if (isActive) {
      gsap.to(card, {
        scale: 1.05,
        z: 50,
        rotationY: 0,
        duration: 0.6,
        ease: "power2.out",
      });
    } else {
      gsap.to(card, {
        scale: 0.9,
        z: 0,
        rotationY: index % 2 === 0 ? -15 : 15,
        duration: 0.6,
        ease: "power2.out",
      });
    }
  }, [isActive, index]);

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "from-green-500 to-emerald-600";
      case "in-progress":
        return "from-yellow-500 to-orange-600";
      case "concept":
        return "from-purple-500 to-violet-600";
      default:
        return "from-gray-500 to-gray-600";
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case "completed":
        return "Hoàn thành";
      case "in-progress":
        return "Đang phát triển";
      case "concept":
        return "Ý tưởng";
      default:
        return "Unknown";
    }
  };

  return (
    <motion.div
      ref={cardRef}
      className={`relative w-80 h-[500px] cursor-pointer transition-all duration-500 ${
        isActive ? "z-20" : "z-10"
      }`}
      style={{ perspective: "1000px", transformStyle: "preserve-3d" }}
      onClick={onClick}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      whileHover={{ y: isActive ? -10 : -5 }}
    >
      <div
        className={`relative w-full h-full rounded-3xl overflow-hidden transition-all duration-500 ${
          isActive
            ? "glass-effect border-2 border-purple-400/50"
            : "glass-effect border border-white/10"
        }`}
      >
        {/* Project Image/Icon */}
        <div
          className={`relative h-48 bg-gradient-to-br ${getStatusColor(
            project.status
          )} flex items-center justify-center overflow-hidden`}
        >
          <div className="text-8xl opacity-80">{project.image}</div>

          {/* Status Badge */}
          <div className="absolute top-4 left-4">
            <div
              className={`px-3 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${getStatusColor(
                project.status
              )} text-white`}
            >
              {getStatusText(project.status)}
            </div>
          </div>

          {/* Category Badge */}
          <div className="absolute top-4 right-4">
            <div className="px-3 py-1 rounded-full text-xs font-medium bg-black/30 backdrop-blur-sm text-white border border-white/20">
              {project.category}
            </div>
          </div>

          {/* Hover Overlay */}
          <motion.div
            className="absolute inset-0 bg-black/20 flex items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: isHovered && isActive ? 1 : 0 }}
          >
            <Play className="w-12 h-12 text-white" />
          </motion.div>
        </div>

        {/* Content */}
        <div className="p-6 space-y-4">
          <div>
            <h3 className="text-xl font-bold text-white mb-2">
              {project.title}
            </h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              {isActive ? project.fullDescription : project.description}
            </p>
          </div>

          {/* Stats */}
          {project.stats && Object.keys(project.stats).length > 0 && (
            <div className="flex items-center space-x-4 text-xs">
              {project.stats.downloads && (
                <div className="flex items-center space-x-1">
                  <Download className="w-3 h-3 text-green-400" />
                  <span className="text-gray-400">
                    {project.stats.downloads.toLocaleString()}
                  </span>
                </div>
              )}
              {project.stats.rating && (
                <div className="flex items-center space-x-1">
                  <Star className="w-3 h-3 text-yellow-400 fill-current" />
                  <span className="text-gray-400">{project.stats.rating}</span>
                </div>
              )}
              {project.stats.players && (
                <div className="flex items-center space-x-1">
                  <Users className="w-3 h-3 text-blue-400" />
                  <span className="text-gray-400">
                    {project.stats.players.toLocaleString()}
                  </span>
                </div>
              )}
            </div>
          )}

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {project.tags
              .slice(0, isActive ? project.tags.length : 3)
              .map((tag) => (
                <span
                  key={tag}
                  className="px-2 py-1 bg-purple-500/20 text-purple-300 text-xs rounded-lg border border-purple-500/30"
                >
                  {tag}
                </span>
              ))}
          </div>

          {/* Action Buttons */}
          <div
            className={`flex space-x-2 transition-all duration-300 ${
              isActive
                ? "opacity-100 translate-y-0"
                : "opacity-60 translate-y-2"
            }`}
          >
            {project.demoUrl && (
              <button className="flex-1 flex items-center justify-center space-x-2 py-2 bg-gradient-primary rounded-lg text-sm font-medium hover:scale-105 transition-transform">
                <Eye className="w-4 h-4" />
                <span>Demo</span>
              </button>
            )}
            {project.githubUrl && (
              <button className="flex items-center justify-center p-2 glass-effect border border-white/20 rounded-lg hover:scale-105 transition-transform">
                <Github className="w-4 h-4" />
              </button>
            )}
            {project.downloadUrl && (
              <button className="flex items-center justify-center p-2 glass-effect border border-white/20 rounded-lg hover:scale-105 transition-transform">
                <Download className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Glow Effect */}
        <motion.div
          className="absolute inset-0 rounded-3xl pointer-events-none"
          animate={{
            boxShadow: isActive
              ? "0 20px 60px rgba(139, 92, 246, 0.3)"
              : "0 10px 30px rgba(139, 92, 246, 0.1)",
          }}
          transition={{ duration: 0.3 }}
        />
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [activeProject, setActiveProject] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const nextProject = () => {
    setActiveProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setActiveProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  // Auto-rotate carousel
  useEffect(() => {
    const interval = setInterval(() => {
      nextProject();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") prevProject();
      if (e.key === "ArrowRight") nextProject();
    };

    window.addEventListener("keydown", handleKeyPress);
    return () => window.removeEventListener("keydown", handleKeyPress);
  }, []);

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950/10 to-slate-950" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-300 text-sm font-medium mb-6">
            <Trophy className="w-4 h-4" />
            <span>Dự án nổi bật</span>
          </div>

          <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-gradient text-display">
            Game Portfolio
          </h2>

          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Khám phá những dự án game độc đáo mà tôi đã thiết kế và phát triển.
            Mỗi game đều mang trong mình một câu chuyện và trải nghiệm riêng
            biệt.
          </p>
        </motion.div>

        {/* Project Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {[
            {
              icon: <Gamepad2 className="w-6 h-6" />,
              number: projects.length,
              label: "Games Created",
              color: "from-purple-500 to-violet-600",
            },
            {
              icon: <Users className="w-6 h-6" />,
              number: "320K+",
              label: "Total Players",
              color: "from-cyan-500 to-blue-600",
            },
            {
              icon: <Star className="w-6 h-6" />,
              number: "4.8",
              label: "Avg Rating",
              color: "from-yellow-500 to-orange-600",
            },
            {
              icon: <Trophy className="w-6 h-6" />,
              number: "12+",
              label: "Awards Won",
              color: "from-green-500 to-emerald-600",
            },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
              transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
              className="text-center p-4 glass-effect rounded-2xl border border-white/10"
            >
              <div
                className={`w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center`}
              >
                {stat.icon}
              </div>
              <div className="text-2xl font-bold text-gradient mb-1">
                {stat.number}
              </div>
              <div className="text-xs text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* 3D Carousel */}
        <motion.div
          ref={carouselRef}
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="relative"
        >
          <div className="flex items-center justify-center min-h-[600px] perspective-1000">
            <div className="relative flex items-center space-x-8">
              {projects.map((project, index) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={index}
                  isActive={index === activeProject}
                  onClick={() => {
                    setActiveProject(index);
                    setSelectedProject(project);
                  }}
                />
              ))}
            </div>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center space-x-4 mt-8">
            <button
              onClick={prevProject}
              className="p-3 glass-effect border border-white/20 rounded-full hover:border-purple-400/50 transition-all duration-300 group"
            >
              <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
            </button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveProject(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === activeProject
                      ? "bg-gradient-primary scale-125"
                      : "bg-white/20 hover:bg-white/40"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={nextProject}
              className="p-3 glass-effect border border-white/20 rounded-full hover:border-purple-400/50 transition-all duration-300 group"
            >
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </motion.div>

        {/* Project Details Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="max-w-4xl w-full max-h-[90vh] overflow-y-auto glass-effect rounded-3xl border border-white/20 p-8"
              >
                <div className="flex items-start justify-between mb-6">
                  <div>
                    <h3 className="text-3xl font-bold text-white mb-2">
                      {selectedProject.title}
                    </h3>
                    <p className="text-purple-300">
                      {selectedProject.category}
                    </p>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="p-2 hover:bg-white/10 rounded-lg transition-colors"
                  >
                    ✕
                  </button>
                </div>

                <div className="grid lg:grid-cols-2 gap-8">
                  <div>
                    <h4 className="text-xl font-semibold text-white mb-4">
                      Mô tả dự án
                    </h4>
                    <p className="text-gray-300 leading-relaxed mb-6">
                      {selectedProject.fullDescription}
                    </p>

                    <h4 className="text-xl font-semibold text-white mb-4">
                      Tính năng chính
                    </h4>
                    <ul className="space-y-2 mb-6">
                      {selectedProject.features.map((feature, index) => (
                        <li
                          key={index}
                          className="flex items-center space-x-2 text-gray-300"
                        >
                          <Zap className="w-4 h-4 text-purple-400" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h4 className="text-xl font-semibold text-white mb-4">
                      Thông tin kỹ thuật
                    </h4>
                    <div className="space-y-4">
                      <div>
                        <span className="text-gray-400">Công nghệ:</span>
                        <div className="flex flex-wrap gap-2 mt-2">
                          {selectedProject.tech.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-cyan-500/20 text-cyan-300 text-sm rounded-lg"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div>
                        <span className="text-gray-400">Timeline:</span>
                        <span className="text-white ml-2">
                          {selectedProject.timeline}
                        </span>
                      </div>
                      <div>
                        <span className="text-gray-400">Team size:</span>
                        <span className="text-white ml-2">
                          {selectedProject.teamSize} người
                        </span>
                      </div>
                    </div>

                    <div className="flex space-x-4 mt-8">
                      {selectedProject.demoUrl && (
                        <button className="btn-primary flex-1">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Live Demo
                        </button>
                      )}
                      {selectedProject.githubUrl && (
                        <button className="btn-secondary">
                          <Github className="w-4 h-4 mr-2" />
                          Code
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="text-center mt-16"
        >
          <div className="glass-effect rounded-3xl p-8 border border-white/10 max-w-2xl mx-auto">
            <Heart className="w-12 h-12 text-red-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">
              Có ý tưởng game thú vị?
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Hãy cùng nhau biến ý tưởng của bạn thành một trải nghiệm game
              tuyệt vời. Tôi sẵn sàng hợp tác để tạo ra điều đặc biệt!
            </p>
            <button className="btn-primary">Thảo luận dự án</button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
