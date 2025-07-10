"use client";

import { useEffect, useRef, useState } from "react";
import {
  ExternalLink,
  Github,
  Play,
  Star,
  Download,
  Users,
  Zap,
  Smartphone,
  ShoppingCart,
  Heart,
  Music,
  MapPin,
  MessageCircle,
  Camera,
  Database,
} from "lucide-react";

const Projects = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeFilter, setActiveFilter] = useState("all");
  const [filteredProjects, setFilteredProjects] = useState<any[]>([]);

  const projectCategories = [
    { id: "all", name: "All Projects", count: 8 },
    { id: "react-native", name: "React Native", count: 4 },
    { id: "flutter", name: "Flutter", count: 2 },
    { id: "native", name: "Native", count: 2 },
  ];

  const projects = [
    {
      id: 1,
      title: "EcoShop - Sustainable Shopping",
      description:
        "A comprehensive e-commerce app focused on eco-friendly products with AR try-on features and carbon footprint tracking.",
      longDescription:
        "Revolutionary shopping experience that helps users make sustainable choices. Features include AI-powered product recommendations, AR visualization, and real-time carbon footprint calculation.",
      image: "🛒",
      category: "react-native",
      technologies: [
        "React Native",
        "TypeScript",
        "Firebase",
        "Stripe",
        "AR Kit",
      ],
      features: [
        "AR Product Visualization",
        "Carbon Footprint Tracker",
        "AI Recommendations",
        "Secure Payments",
      ],
      stats: {
        downloads: "50K+",
        rating: 4.8,
        reviews: "2.1K",
      },
      links: {
        github: "https://github.com",
        live: "https://apps.apple.com",
        playStore: "https://play.google.com",
      },
      status: "Live",
      year: "2023",
      duration: "6 months",
      team: "4 developers",
    },
    {
      id: 2,
      title: "HealthTracker Pro",
      description:
        "AI-powered health monitoring app with real-time vitals tracking, personalized fitness plans, and telemedicine integration.",
      longDescription:
        "Comprehensive health management platform that uses machine learning to provide personalized health insights and connects users with healthcare professionals.",
      image: "❤️",
      category: "flutter",
      technologies: [
        "Flutter",
        "Dart",
        "TensorFlow Lite",
        "WebRTC",
        "Firebase",
      ],
      features: [
        "AI Health Analysis",
        "Video Consultations",
        "Wearable Integration",
        "Health Reports",
      ],
      stats: {
        downloads: "100K+",
        rating: 4.9,
        reviews: "5.2K",
      },
      links: {
        github: "https://github.com",
        live: "https://apps.apple.com",
        playStore: "https://play.google.com",
      },
      status: "Live",
      year: "2023",
      duration: "8 months",
      team: "6 developers",
    },
    {
      id: 3,
      title: "SoundWave Music Player",
      description:
        "Next-generation music streaming app with spatial audio, AI-curated playlists, and social sharing features.",
      longDescription:
        "Immersive music experience with cutting-edge audio technology, smart playlist generation, and seamless social integration for music lovers.",
      image: "🎵",
      category: "native",
      technologies: [
        "Swift",
        "Kotlin",
        "Core Audio",
        "Machine Learning",
        "WebSocket",
      ],
      features: [
        "Spatial Audio",
        "AI Playlists",
        "Social Features",
        "Offline Mode",
      ],
      stats: {
        downloads: "250K+",
        rating: 4.7,
        reviews: "12K",
      },
      links: {
        github: "https://github.com",
        live: "https://apps.apple.com",
        playStore: "https://play.google.com",
      },
      status: "Live",
      year: "2022",
      duration: "10 months",
      team: "8 developers",
    },
    {
      id: 4,
      title: "TravelBuddy Navigator",
      description:
        "Smart travel companion with offline maps, AR navigation, local recommendations, and real-time translation.",
      longDescription:
        "Ultimate travel app that combines advanced navigation with cultural insights, helping travelers explore new destinations with confidence.",
      image: "🗺️",
      category: "react-native",
      technologies: [
        "React Native",
        "MapBox",
        "Google Translate API",
        "AR Core",
        "SQLite",
      ],
      features: [
        "Offline Maps",
        "AR Navigation",
        "Real-time Translation",
        "Local Insights",
      ],
      stats: {
        downloads: "75K+",
        rating: 4.6,
        reviews: "3.8K",
      },
      links: {
        github: "https://github.com",
        live: "https://apps.apple.com",
        playStore: "https://play.google.com",
      },
      status: "Live",
      year: "2023",
      duration: "5 months",
      team: "5 developers",
    },
    {
      id: 5,
      title: "ChatConnect Messenger",
      description:
        "Secure messaging platform with end-to-end encryption, voice/video calls, and collaborative workspaces.",
      longDescription:
        "Professional communication platform designed for teams and businesses, featuring advanced security and productivity tools.",
      image: "💬",
      category: "flutter",
      technologies: ["Flutter", "WebRTC", "Socket.io", "MongoDB", "JWT"],
      features: [
        "End-to-End Encryption",
        "Video Calls",
        "File Sharing",
        "Team Workspaces",
      ],
      stats: {
        downloads: "200K+",
        rating: 4.5,
        reviews: "8.9K",
      },
      links: {
        github: "https://github.com",
        live: "https://apps.apple.com",
        playStore: "https://play.google.com",
      },
      status: "Live",
      year: "2022",
      duration: "7 months",
      team: "7 developers",
    },
    {
      id: 6,
      title: "PhotoArt Studio",
      description:
        "Professional photo editing app with AI-powered filters, batch processing, and cloud synchronization.",
      longDescription:
        "Advanced photo editing suite that brings professional-grade tools to mobile devices with intuitive user experience.",
      image: "📸",
      category: "native",
      technologies: [
        "Swift",
        "Core Image",
        "Metal",
        "CloudKit",
        "Machine Learning",
      ],
      features: ["AI Filters", "Batch Processing", "Cloud Sync", "RAW Support"],
      stats: {
        downloads: "150K+",
        rating: 4.8,
        reviews: "6.7K",
      },
      links: {
        github: "https://github.com",
        live: "https://apps.apple.com",
        playStore: "https://play.google.com",
      },
      status: "Live",
      year: "2023",
      duration: "9 months",
      team: "3 developers",
    },
    {
      id: 7,
      title: "FitnessPal Trainer",
      description:
        "Personalized fitness coaching app with workout tracking, nutrition planning, and progress analytics.",
      longDescription:
        "Comprehensive fitness solution that adapts to user goals and provides personalized coaching experience.",
      image: "💪",
      category: "react-native",
      technologies: [
        "React Native",
        "TensorFlow",
        "HealthKit",
        "Firebase",
        "Stripe",
      ],
      features: [
        "Personal Training",
        "Nutrition Tracking",
        "Progress Analytics",
        "Community",
      ],
      stats: {
        downloads: "120K+",
        rating: 4.7,
        reviews: "4.5K",
      },
      links: {
        github: "https://github.com",
        live: "https://apps.apple.com",
        playStore: "https://play.google.com",
      },
      status: "In Development",
      year: "2024",
      duration: "4 months",
      team: "5 developers",
    },
    {
      id: 8,
      title: "SmartHome Controller",
      description:
        "IoT home automation app with voice control, energy monitoring, and intelligent scheduling.",
      longDescription:
        "Complete smart home management system that integrates with various IoT devices for seamless home automation.",
      image: "🏠",
      category: "react-native",
      technologies: [
        "React Native",
        "MQTT",
        "Voice Recognition",
        "BLE",
        "Firebase",
      ],
      features: [
        "Voice Control",
        "Energy Monitoring",
        "Device Automation",
        "Remote Access",
      ],
      stats: {
        downloads: "80K+",
        rating: 4.6,
        reviews: "2.8K",
      },
      links: {
        github: "https://github.com",
        live: "https://apps.apple.com",
        playStore: "https://play.google.com",
      },
      status: "Live",
      year: "2023",
      duration: "6 months",
      team: "4 developers",
    },
  ];

  useEffect(() => {
    setFilteredProjects(projects);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleFilterChange = (categoryId: string) => {
    setActiveFilter(categoryId);
    if (categoryId === "all") {
      setFilteredProjects(projects);
    } else {
      setFilteredProjects(
        projects.filter((project) => project.category === categoryId)
      );
    }
  };

  const getIcon = (tech: string) => {
    const iconMap: { [key: string]: any } = {
      "React Native": Smartphone,
      Flutter: Zap,
      Swift: Heart,
      Kotlin: Users,
      TypeScript: Star,
      Firebase: Database,
    };
    return iconMap[tech] || Star;
  };

  return (
    <section id="projects" ref={sectionRef} className="relative py-20 lg:py-32">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/project-grid.svg')] bg-repeat"></div>
      </div>

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full border border-purple-500/30 text-purple-300 text-sm font-medium backdrop-blur-sm mb-6">
            Featured Work
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            My <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of innovative mobile applications that solve real-world
            problems
          </p>
        </div>

        {/* Filter Tabs */}
        <div
          className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {projectCategories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleFilterChange(category.id)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === category.id
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                  : "bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 hover:text-white"
              }`}
            >
              {category.name} ({category.count})
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className={`group glass-effect rounded-2xl overflow-hidden transition-all duration-1000 card-hover ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${500 + index * 150}ms` }}
            >
              {/* Project Image/Icon */}
              <div className="relative h-48 bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center overflow-hidden">
                <div className="text-6xl group-hover:scale-110 transition-transform duration-300">
                  {project.image}
                </div>
                <div className="absolute top-4 right-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-medium ${
                      project.status === "Live"
                        ? "bg-green-500/20 text-green-400 border border-green-500/30"
                        : "bg-yellow-500/20 text-yellow-400 border border-yellow-500/30"
                    }`}
                  >
                    {project.status}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                {/* Title & Description */}
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors duration-300">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech: any) => {
                    const IconComponent = getIcon(tech);
                    return (
                      <span
                        key={tech}
                        className="flex items-center space-x-1 px-2 py-1 bg-slate-700/50 rounded-md text-xs text-gray-300"
                      >
                        <IconComponent size={12} />
                        <span>{tech}</span>
                      </span>
                    );
                  })}
                  {project.technologies.length > 3 && (
                    <span className="px-2 py-1 bg-slate-700/50 rounded-md text-xs text-gray-300">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Stats */}
                <div className="flex justify-between items-center mb-6 text-sm text-gray-400">
                  <div className="flex items-center space-x-1">
                    <Download size={14} />
                    <span>{project.stats.downloads}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star size={14} className="text-yellow-400" />
                    <span>{project.stats.rating}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Users size={14} />
                    <span>{project.stats.reviews}</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex space-x-3">
                  <a
                    href={project.links.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center space-x-2 py-2 bg-slate-700/50 hover:bg-slate-600/50 rounded-lg transition-colors duration-300 text-gray-300 hover:text-white"
                  >
                    <Github size={16} />
                    <span className="text-sm">Code</span>
                  </a>
                  <a
                    href={project.links.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 flex items-center justify-center space-x-2 py-2 bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 rounded-lg transition-all duration-300 text-white"
                  >
                    <ExternalLink size={16} />
                    <span className="text-sm">Demo</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div
          className={`text-center mt-12 transition-all duration-1000 delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <button className="group bg-gradient-to-r from-slate-800 to-slate-700 hover:from-purple-600 hover:to-pink-600 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 border border-slate-600 hover:border-transparent">
            <span className="flex items-center space-x-2">
              <span>View All Projects</span>
              <ExternalLink
                size={18}
                className="group-hover:translate-x-1 transition-transform duration-300"
              />
            </span>
          </button>
        </div>
      </div>

      {/* Floating Decorative Elements */}
      <div className="absolute top-20 right-20 w-16 h-16 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-xl animate-pulse-slow"></div>
      <div
        className="absolute bottom-32 left-16 w-24 h-24 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-xl animate-pulse-slow"
        style={{ animationDelay: "2s" }}
      ></div>
    </section>
  );
};

export default Projects;
