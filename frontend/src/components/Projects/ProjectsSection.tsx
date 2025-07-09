"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  FolderOpen,
  ExternalLink,
  Github,
  Play,
  Code2,
  Palette,
  Smartphone,
  Globe,
  Filter,
  Star,
  Calendar,
  Users,
  Zap,
  ArrowRight,
  Eye,
  Heart,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface ProjectsSectionProps {
  className?: string;
}

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description:
      "A modern, full-featured e-commerce platform with real-time inventory management, secure payment processing, and admin dashboard.",
    image: "/api/placeholder/600/400",
    category: "web",
    tags: ["React", "Next.js", "TypeScript", "Stripe", "MongoDB"],
    demo: "https://demo.example.com",
    github: "https://github.com/example/ecommerce",
    featured: true,
    stats: { views: "12.5K", likes: "890", forks: "234" },
    year: "2023",
    team: "4 developers",
    status: "Live",
  },
  {
    id: 2,
    title: "AI Dashboard",
    description:
      "An intelligent dashboard for data analytics with machine learning insights, interactive charts, and real-time data visualization.",
    image: "/api/placeholder/600/400",
    category: "web",
    tags: ["React", "D3.js", "Python", "TensorFlow", "PostgreSQL"],
    demo: "https://demo.example.com",
    github: "https://github.com/example/ai-dashboard",
    featured: true,
    stats: { views: "8.2K", likes: "645", forks: "156" },
    year: "2023",
    team: "3 developers",
    status: "Live",
  },
  {
    id: 3,
    title: "Mobile Banking App",
    description:
      "A secure mobile banking application with biometric authentication, transaction history, and budget tracking features.",
    image: "/api/placeholder/600/400",
    category: "mobile",
    tags: ["React Native", "TypeScript", "Firebase", "Biometrics"],
    demo: "https://demo.example.com",
    github: "https://github.com/example/banking-app",
    featured: false,
    stats: { views: "5.8K", likes: "423", forks: "89" },
    year: "2022",
    team: "2 developers",
    status: "Live",
  },
  {
    id: 4,
    title: "Design System",
    description:
      "A comprehensive design system and component library for consistent UI across multiple applications.",
    image: "/api/placeholder/600/400",
    category: "design",
    tags: ["React", "Storybook", "Figma", "TypeScript"],
    demo: "https://demo.example.com",
    github: "https://github.com/example/design-system",
    featured: false,
    stats: { views: "3.2K", likes: "276", forks: "45" },
    year: "2022",
    team: "1 developer",
    status: "Active",
  },
  {
    id: 5,
    title: "Portfolio Website",
    description:
      "A stunning portfolio website with 3D animations, interactive elements, and optimized performance.",
    image: "/api/placeholder/600/400",
    category: "web",
    tags: ["Next.js", "Three.js", "GSAP", "Tailwind CSS"],
    demo: "https://demo.example.com",
    github: "https://github.com/example/portfolio",
    featured: true,
    stats: { views: "15.6K", likes: "1.2K", forks: "345" },
    year: "2023",
    team: "1 developer",
    status: "Live",
  },
  {
    id: 6,
    title: "Real Estate Platform",
    description:
      "A comprehensive real estate platform with property listings, virtual tours, and mortgage calculator.",
    image: "/api/placeholder/600/400",
    category: "web",
    tags: ["Vue.js", "Node.js", "Express", "MongoDB"],
    demo: "https://demo.example.com",
    github: "https://github.com/example/real-estate",
    featured: false,
    stats: { views: "6.7K", likes: "534", forks: "123" },
    year: "2022",
    team: "5 developers",
    status: "Live",
  },
];

const categories = [
  { id: "all", name: "All Projects", icon: FolderOpen },
  { id: "web", name: "Web Apps", icon: Globe },
  { id: "mobile", name: "Mobile Apps", icon: Smartphone },
  { id: "design", name: "Design", icon: Palette },
];

export default function ProjectsSection({
  className = "",
}: ProjectsSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [sparkles, setSparkles] = useState<
    Array<{ id: number; left: number; top: number; animationDelay: number }>
  >([]);

  // Generate sparkles only on client side
  useEffect(() => {
    const generatedSparkles = [...Array(15)].map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      animationDelay: Math.random() * 2,
    }));
    setSparkles(generatedSparkles);
  }, []);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const featuredProjects = projects.filter((project) => project.featured);

  // GSAP Animations
  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });

      // Title animation
      tl.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
      );

      // Category filters animation
      tl.fromTo(
        ".category-filter",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.1,
        },
        "-=0.5"
      );

      // Project cards animation
      tl.fromTo(
        ".project-card",
        { opacity: 0, y: 30, rotateY: 15 },
        {
          opacity: 1,
          y: 0,
          rotateY: 0,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.1,
        },
        "-=0.3"
      );

      // Floating animation for decorative elements
      gsap.to(".project-particle", {
        y: "random(-15, 15)",
        x: "random(-15, 15)",
        rotation: "random(-180, 180)",
        duration: "random(4, 8)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.2,
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="projects"
      ref={sectionRef}
      className={`relative py-20 lg:py-32 overflow-hidden ${className}`}
    >
      {/* Background particles */}
      <div className="absolute inset-0 pointer-events-none">
        {sparkles.map((sparkle, i) => (
          <div
            key={i}
            className="project-particle absolute"
            style={{
              left: `${sparkle.left}%`,
              top: `${sparkle.top}%`,
              animationDelay: `${sparkle.animationDelay}s`,
            }}
          >
            <Code2 className="w-3 h-3 text-blue-400/10" />
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.div
            ref={titleRef}
            className="inline-flex items-center space-x-2 px-4 py-2 bg-green-500/10 backdrop-blur-sm rounded-full border border-green-500/20 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <FolderOpen className="w-5 h-5 text-green-400" />
            <span className="text-green-300 font-medium">Featured Work</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
              Project Showcase
            </span>
          </h2>

          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Explore my latest projects and creative solutions that push the
            boundaries of web development
          </p>
        </div>

        <div ref={ref} className="space-y-12">
          {/* Category Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                className={`category-filter group relative px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeCategory === category.id
                    ? "text-white bg-white/10 border border-white/20"
                    : "text-white/70 hover:text-white hover:bg-white/5 border border-transparent"
                }`}
                onClick={() => setActiveCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center space-x-2">
                  <category.icon className="w-5 h-5" />
                  <span>{category.name}</span>
                </span>
                {activeCategory === category.id && (
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-green-500/20 to-blue-500/20 rounded-full blur-lg"
                    layoutId="activeProjectCategory"
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Featured Projects */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center space-x-2">
              <Star className="w-6 h-6 text-yellow-400" />
              <span>Featured Projects</span>
            </h3>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProjects.map((project) => (
                <motion.div
                  key={project.id}
                  className="project-card group relative"
                  onHoverStart={() => setHoveredProject(project.id)}
                  onHoverEnd={() => setHoveredProject(null)}
                  whileHover={{ y: -10, rotateY: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
                    {/* Project Image */}
                    <div className="relative h-48 overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20" />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300" />

                      {/* Overlay Actions */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex space-x-4">
                          <motion.button
                            className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Play className="w-5 h-5" />
                          </motion.button>
                          <motion.button
                            className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Github className="w-5 h-5" />
                          </motion.button>
                          <motion.button
                            className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <ExternalLink className="w-5 h-5" />
                          </motion.button>
                        </div>
                      </div>

                      {/* Status Badge */}
                      <div className="absolute top-4 right-4">
                        <span
                          className={`px-2 py-1 text-xs font-medium rounded-full ${
                            project.status === "Live"
                              ? "bg-green-500/20 text-green-400 border border-green-500/30"
                              : "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                          }`}
                        >
                          {project.status}
                        </span>
                      </div>
                    </div>

                    {/* Project Info */}
                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <h4 className="text-lg font-bold text-white group-hover:text-blue-300 transition-colors">
                          {project.title}
                        </h4>
                        <div className="flex items-center space-x-2 text-white/60">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm">{project.year}</span>
                        </div>
                      </div>

                      <p className="text-white/70 text-sm mb-4 line-clamp-3">
                        {project.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.slice(0, 3).map((tag) => (
                          <span
                            key={tag}
                            className="px-2 py-1 text-xs bg-white/10 text-white/80 rounded-full"
                          >
                            {tag}
                          </span>
                        ))}
                        {project.tags.length > 3 && (
                          <span className="px-2 py-1 text-xs bg-white/10 text-white/80 rounded-full">
                            +{project.tags.length - 3}
                          </span>
                        )}
                      </div>

                      {/* Stats */}
                      <div className="flex items-center justify-between pt-4 border-t border-white/10">
                        <div className="flex items-center space-x-4 text-white/60">
                          <div className="flex items-center space-x-1">
                            <Eye className="w-4 h-4" />
                            <span className="text-sm">
                              {project.stats.views}
                            </span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Heart className="w-4 h-4" />
                            <span className="text-sm">
                              {project.stats.likes}
                            </span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Users className="w-4 h-4" />
                            <span className="text-sm">{project.team}</span>
                          </div>
                        </div>

                        <motion.button
                          className="flex items-center space-x-1 text-blue-400 hover:text-blue-300 transition-colors"
                          whileHover={{ x: 5 }}
                        >
                          <span className="text-sm font-medium">
                            View Project
                          </span>
                          <ArrowRight className="w-4 h-4" />
                        </motion.button>
                      </div>
                    </div>

                    {/* Hover Effect */}
                    <div className="absolute inset-0 border-2 border-blue-500/0 group-hover:border-blue-500/50 rounded-2xl transition-all duration-300" />
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* All Projects Grid */}
          <div>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center space-x-2">
              <Filter className="w-6 h-6 text-blue-400" />
              <span>All Projects</span>
              <span className="text-sm text-white/60 bg-white/10 px-2 py-1 rounded-full">
                {filteredProjects.length}
              </span>
            </h3>

            <AnimatePresence mode="wait">
              <motion.div
                key={activeCategory}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {filteredProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    className="project-card group relative p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-purple-500/30 transition-all duration-300"
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="p-2 bg-purple-500/20 rounded-lg">
                          <FolderOpen className="w-5 h-5 text-purple-400" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-white">
                            {project.title}
                          </h4>
                          <p className="text-xs text-white/60">
                            {project.year}
                          </p>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <motion.button
                          className="p-2 text-white/60 hover:text-white transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Github className="w-4 h-4" />
                        </motion.button>
                        <motion.button
                          className="p-2 text-white/60 hover:text-white transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <ExternalLink className="w-4 h-4" />
                        </motion.button>
                      </div>
                    </div>

                    <p className="text-white/70 text-sm mb-4">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 text-xs bg-white/10 text-white/80 rounded-full"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-white/10">
                      <div className="flex items-center space-x-3 text-white/60">
                        <div className="flex items-center space-x-1">
                          <Eye className="w-3 h-3" />
                          <span className="text-xs">{project.stats.views}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Heart className="w-3 h-3" />
                          <span className="text-xs">{project.stats.likes}</span>
                        </div>
                      </div>
                      <span
                        className={`px-2 py-1 text-xs font-medium rounded-full ${
                          project.status === "Live"
                            ? "bg-green-500/20 text-green-400"
                            : "bg-yellow-500/20 text-yellow-400"
                        }`}
                      >
                        {project.status}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <motion.div
            className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full border border-purple-500/30"
            whileHover={{ scale: 1.05 }}
          >
            <Zap className="w-5 h-5 text-purple-400" />
            <span className="text-white font-medium">
              Have a project in mind?
            </span>
            <ArrowRight className="w-4 h-4 text-purple-400" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
