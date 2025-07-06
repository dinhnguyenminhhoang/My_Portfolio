"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  ExternalLink,
  Github,
  Play,
  Star,
  Calendar,
  Users,
  Zap,
  Smartphone,
  Globe,
  Database,
  Code2,
  Palette,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const filterRef = useRef<HTMLDivElement>(null);
  const projectsGridRef = useRef<HTMLDivElement>(null);
  const featuredRef = useRef<HTMLDivElement>(null);

  const [activeFilter, setActiveFilter] = useState("all");
  const [currentFeatured, setCurrentFeatured] = useState(0);

  const filters = [
    { id: "all", label: "All Projects", icon: Globe },
    { id: "web", label: "Web Apps", icon: Code2 },
    { id: "mobile", label: "Mobile", icon: Smartphone },
    { id: "fullstack", label: "Full Stack", icon: Database },
    { id: "ui", label: "UI/UX", icon: Palette },
  ];

  const featuredProjects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A modern, scalable e-commerce platform built with Next.js, TypeScript, and Stripe integration. Features include real-time inventory, advanced search, and admin dashboard.",
      image: "/api/placeholder/800/500",
      category: "fullstack",
      technologies: [
        "Next.js",
        "TypeScript",
        "PostgreSQL",
        "Stripe",
        "Tailwind CSS",
      ],
      github: "https://github.com",
      live: "https://demo.com",
      stats: { stars: 234, forks: 45, users: "10K+" },
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: "/api/placeholder/800/500",
      category: "web",
      technologies: ["React", "Node.js", "Socket.io", "MongoDB", "Material-UI"],
      github: "https://github.com",
      live: "https://demo.com",
      stats: { stars: 156, forks: 32, users: "5K+" },
    },
    {
      id: 3,
      title: "Fitness Tracking Mobile App",
      description:
        "Cross-platform mobile app for fitness tracking with workout plans, progress monitoring, and social features.",
      image: "/api/placeholder/800/500",
      category: "mobile",
      technologies: [
        "React Native",
        "Expo",
        "Firebase",
        "Redux",
        "Native Base",
      ],
      github: "https://github.com",
      live: "https://demo.com",
      stats: { stars: 89, forks: 23, users: "2K+" },
    },
  ];

  const projects = [
    {
      id: 4,
      title: "Weather Dashboard",
      description:
        "Real-time weather app with beautiful animations and location-based forecasts.",
      image: "/api/placeholder/400/300",
      category: "web",
      technologies: ["Vue.js", "OpenWeather API", "CSS3"],
      github: "https://github.com",
      live: "https://demo.com",
    },
    {
      id: 5,
      title: "Crypto Portfolio Tracker",
      description:
        "Track cryptocurrency investments with real-time prices and portfolio analytics.",
      image: "/api/placeholder/400/300",
      category: "web",
      technologies: ["React", "Chart.js", "CoinGecko API"],
      github: "https://github.com",
      live: "https://demo.com",
    },
    {
      id: 6,
      title: "Recipe Sharing Platform",
      description:
        "Social platform for sharing and discovering recipes with ratings and reviews.",
      image: "/api/placeholder/400/300",
      category: "fullstack",
      technologies: ["Next.js", "Prisma", "PostgreSQL"],
      github: "https://github.com",
      live: "https://demo.com",
    },
    {
      id: 7,
      title: "Design System Library",
      description:
        "Comprehensive UI component library with Storybook documentation.",
      image: "/api/placeholder/400/300",
      category: "ui",
      technologies: ["React", "Storybook", "Styled Components"],
      github: "https://github.com",
      live: "https://demo.com",
    },
    {
      id: 8,
      title: "Chat Application",
      description:
        "Real-time messaging app with file sharing and video call features.",
      image: "/api/placeholder/400/300",
      category: "fullstack",
      technologies: ["React", "Node.js", "Socket.io", "WebRTC"],
      github: "https://github.com",
      live: "https://demo.com",
    },
    {
      id: 9,
      title: "Music Player App",
      description:
        "Beautiful music player with playlist management and audio visualization.",
      image: "/api/placeholder/400/300",
      category: "mobile",
      technologies: ["React Native", "Audio API", "Animated"],
      github: "https://github.com",
      live: "https://demo.com",
    },
  ];

  const filteredProjects =
    activeFilter === "all"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        titleRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Featured project animation
      gsap.fromTo(
        featuredRef.current,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: featuredRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Filter buttons animation
      const filterButtons = filterRef.current?.children;
      if (filterButtons) {
        gsap.fromTo(
          filterButtons,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power3.out",
            stagger: 0.1,
            scrollTrigger: {
              trigger: filterRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Projects grid animation
      animateProjectsGrid();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const animateProjectsGrid = () => {
    const cards = projectsGridRef.current?.children;
    if (cards) {
      gsap.fromTo(
        cards,
        { y: 50, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: projectsGridRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  };

  useEffect(() => {
    // Re-animate grid when filter changes
    if (projectsGridRef.current) {
      gsap.fromTo(
        projectsGridRef.current.children,
        { x: 20, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, stagger: 0.05, ease: "power2.out" }
      );
    }
  }, [activeFilter]);

  const nextFeatured = () => {
    setCurrentFeatured((prev) => (prev + 1) % featuredProjects.length);
  };

  const prevFeatured = () => {
    setCurrentFeatured(
      (prev) => (prev - 1 + featuredProjects.length) % featuredProjects.length
    );
  };

  const currentProject = featuredProjects[currentFeatured];

  return (
    <section
      id="projects"
      ref={sectionRef}
      className="relative py-20 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10 animate-pulse" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my best work and recent projects
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full mt-6" />
        </div>

        {/* Featured Project Carousel */}
        <div ref={featuredRef} className="mb-20">
          <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10 overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Project Image */}
              <div className="relative h-80 lg:h-96 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center">
                <div className="text-white/60 text-center">
                  <div className="w-24 h-24 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                    <Code2 className="w-12 h-12" />
                  </div>
                  <p className="text-lg">Project Screenshot</p>
                </div>
              </div>

              {/* Project Details */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 text-sm bg-purple-500/20 text-purple-200 rounded-full border border-purple-500/30">
                    Featured
                  </span>
                  <div className="flex items-center space-x-2 text-gray-400">
                    <Star className="w-4 h-4" />
                    <span>{currentProject.stats.stars}</span>
                    <Users className="w-4 h-4 ml-4" />
                    <span>{currentProject.stats.users}</span>
                  </div>
                </div>

                <h3 className="text-3xl font-bold text-white mb-4">
                  {currentProject.title}
                </h3>
                <p className="text-gray-300 text-lg leading-relaxed mb-6">
                  {currentProject.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {currentProject.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-sm bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-purple-200 rounded-full border border-purple-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Action Buttons */}
                <div className="flex flex-wrap gap-4">
                  <a
                    href={currentProject.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 hover:scale-105"
                  >
                    <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    <span>Live Demo</span>
                  </a>
                  <a
                    href={currentProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 px-6 py-3 border-2 border-purple-400 text-purple-400 rounded-xl font-semibold hover:bg-purple-400 hover:text-white transition-all duration-300 hover:scale-105"
                  >
                    <Github className="w-5 h-5" />
                    <span>Source Code</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Navigation Arrows */}
            <button
              onClick={prevFeatured}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 group"
            >
              <ChevronLeft className="w-6 h-6 text-white group-hover:text-purple-400" />
            </button>
            <button
              onClick={nextFeatured}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 hover:bg-white/20 transition-all duration-300 group"
            >
              <ChevronRight className="w-6 h-6 text-white group-hover:text-purple-400" />
            </button>

            {/* Dots Indicator */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
              {featuredProjects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentFeatured(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentFeatured
                      ? "bg-gradient-to-r from-purple-500 to-cyan-500 scale-125"
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Filter Buttons */}
        <div
          ref={filterRef}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => {
            const Icon = filter.icon;
            return (
              <button
                key={filter.id}
                onClick={() => setActiveFilter(filter.id)}
                className={`group flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeFilter === filter.id
                    ? "bg-gradient-to-r from-purple-600 to-cyan-600 text-white scale-105 shadow-lg shadow-purple-500/25"
                    : "bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white hover:scale-102"
                }`}
              >
                <Icon className="w-5 h-5" />
                <span>{filter.label}</span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div
          ref={projectsGridRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden hover:bg-white/10 hover:border-purple-500/30 transition-all duration-500 hover:transform hover:scale-105"
            >
              {/* Project Image */}
              <div className="relative h-48 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center overflow-hidden">
                <div className="text-white/60 text-center">
                  <Code2 className="w-12 h-12 mx-auto mb-2" />
                  <p className="text-sm">Project Image</p>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5 text-white" />
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                    >
                      <Github className="w-5 h-5 text-white" />
                    </a>
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h4 className="text-xl font-bold text-white mb-3 group-hover:text-purple-300 transition-colors">
                  {project.title}
                </h4>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-purple-200 rounded-full border border-purple-500/30"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 text-xs text-gray-400">
                      +{project.technologies.length - 3} more
                    </span>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20 text-center">
          <div className="inline-block p-8 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-3xl border border-white/10 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4">
              Interested in Working Together?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl">
              I'm always open to discussing new opportunities and exciting
              projects. Let's create something amazing together!
            </p>
            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="group px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full font-semibold text-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
            >
              <span className="flex items-center gap-2">
                Get In Touch
                <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
