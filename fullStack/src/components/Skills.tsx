"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Code2,
  Database,
  Smartphone,
  Cloud,
  Palette,
  Settings,
  GitBranch,
  Zap,
  Monitor,
  Server,
  Globe,
  Cpu,
  Star,
  Award,
  TrendingUp,
} from "lucide-react";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const categoriesRef = useRef<HTMLDivElement>(null);
  const skillsGridRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState("frontend");

  const skillCategories = [
    {
      id: "frontend",
      label: "Frontend Development",
      icon: Monitor,
      color: "from-blue-500 to-cyan-500",
      description: "User Interface & Experience",
    },
    {
      id: "backend",
      label: "Backend Development",
      icon: Server,
      color: "from-purple-500 to-pink-500",
      description: "Server & Database",
    },
    {
      id: "mobile",
      label: "Mobile Development",
      icon: Smartphone,
      color: "from-green-500 to-emerald-500",
      description: "iOS & Android Apps",
    },
    {
      id: "cloud",
      label: "Cloud & DevOps",
      icon: Cloud,
      color: "from-orange-500 to-red-500",
      description: "Infrastructure & Deployment",
    },
    {
      id: "tools",
      label: "Tools & Workflow",
      icon: Settings,
      color: "from-indigo-500 to-purple-500",
      description: "Development Tools",
    },
  ];

  const skillsData = {
    frontend: [
      {
        name: "React & Next.js",
        expertise: "Expert",
        icon: Code2,
        years: "4+ years",
        projects: "50+ projects",
        color: "emerald",
        description:
          "Building scalable web applications with modern React patterns",
      },
      {
        name: "TypeScript",
        expertise: "Advanced",
        icon: Zap,
        years: "3+ years",
        projects: "40+ projects",
        color: "blue",
        description: "Type-safe development for large-scale applications",
      },
      {
        name: "Tailwind CSS",
        expertise: "Expert",
        icon: Palette,
        years: "3+ years",
        projects: "45+ projects",
        color: "emerald",
        description: "Utility-first CSS framework for rapid UI development",
      },
      {
        name: "Vue.js",
        expertise: "Advanced",
        icon: Code2,
        years: "2+ years",
        projects: "20+ projects",
        color: "blue",
        description: "Progressive framework for building user interfaces",
      },
      {
        name: "JavaScript ES6+",
        expertise: "Expert",
        icon: Globe,
        years: "5+ years",
        projects: "60+ projects",
        color: "emerald",
        description: "Modern JavaScript with latest ECMAScript features",
      },
      {
        name: "HTML5 & CSS3",
        expertise: "Expert",
        icon: Monitor,
        years: "6+ years",
        projects: "70+ projects",
        color: "emerald",
        description: "Semantic markup and modern CSS techniques",
      },
    ],
    backend: [
      {
        name: "Node.js",
        expertise: "Advanced",
        icon: Server,
        years: "3+ years",
        projects: "35+ projects",
        color: "blue",
        description: "Server-side JavaScript with Express and Fastify",
      },
      {
        name: "Python",
        expertise: "Advanced",
        icon: Cpu,
        years: "2+ years",
        projects: "25+ projects",
        color: "blue",
        description: "Backend development with Django and FastAPI",
      },
      {
        name: "PostgreSQL",
        expertise: "Advanced",
        icon: Database,
        years: "3+ years",
        projects: "30+ projects",
        color: "blue",
        description: "Relational database design and optimization",
      },
      {
        name: "MongoDB",
        expertise: "Intermediate",
        icon: Database,
        years: "2+ years",
        projects: "20+ projects",
        color: "orange",
        description: "NoSQL database for modern applications",
      },
      {
        name: "GraphQL",
        expertise: "Intermediate",
        icon: GitBranch,
        years: "1+ years",
        projects: "15+ projects",
        color: "orange",
        description: "API query language for efficient data fetching",
      },
      {
        name: "REST APIs",
        expertise: "Expert",
        icon: Globe,
        years: "4+ years",
        projects: "50+ projects",
        color: "emerald",
        description: "RESTful API design and implementation",
      },
    ],
    mobile: [
      {
        name: "React Native",
        expertise: "Advanced",
        icon: Smartphone,
        years: "2+ years",
        projects: "15+ apps",
        color: "blue",
        description: "Cross-platform mobile app development",
      },
      {
        name: "Expo",
        expertise: "Advanced",
        icon: Zap,
        years: "2+ years",
        projects: "12+ apps",
        color: "blue",
        description: "Rapid React Native development platform",
      },
      {
        name: "iOS Development",
        expertise: "Intermediate",
        icon: Smartphone,
        years: "1+ years",
        projects: "8+ apps",
        color: "orange",
        description: "Native iOS apps with Swift and SwiftUI",
      },
      {
        name: "Android Development",
        expertise: "Intermediate",
        icon: Smartphone,
        years: "1+ years",
        projects: "6+ apps",
        color: "orange",
        description: "Native Android apps with Kotlin",
      },
      {
        name: "Flutter",
        expertise: "Beginner",
        icon: Code2,
        years: "6+ months",
        projects: "3+ apps",
        color: "purple",
        description: "Google's UI toolkit for mobile development",
      },
      {
        name: "PWA",
        expertise: "Advanced",
        icon: Globe,
        years: "2+ years",
        projects: "20+ apps",
        color: "blue",
        description: "Progressive Web Apps with offline capabilities",
      },
    ],
    cloud: [
      {
        name: "AWS",
        expertise: "Advanced",
        icon: Cloud,
        years: "2+ years",
        projects: "25+ deployments",
        color: "blue",
        description: "Amazon Web Services for scalable applications",
      },
      {
        name: "Docker",
        expertise: "Advanced",
        icon: Settings,
        years: "2+ years",
        projects: "30+ containers",
        color: "blue",
        description: "Containerization for consistent deployments",
      },
      {
        name: "Kubernetes",
        expertise: "Intermediate",
        icon: Server,
        years: "1+ years",
        projects: "10+ clusters",
        color: "orange",
        description: "Container orchestration and management",
      },
      {
        name: "CI/CD",
        expertise: "Advanced",
        icon: GitBranch,
        years: "3+ years",
        projects: "40+ pipelines",
        color: "blue",
        description: "Automated testing and deployment workflows",
      },
      {
        name: "Vercel & Netlify",
        expertise: "Expert",
        icon: Globe,
        years: "3+ years",
        projects: "50+ sites",
        color: "emerald",
        description: "Modern deployment platforms for web apps",
      },
      {
        name: "Firebase",
        expertise: "Intermediate",
        icon: Database,
        years: "2+ years",
        projects: "18+ apps",
        color: "orange",
        description: "Google's backend-as-a-service platform",
      },
    ],
    tools: [
      {
        name: "Git & GitHub",
        expertise: "Expert",
        icon: GitBranch,
        years: "5+ years",
        projects: "100+ repos",
        color: "emerald",
        description: "Version control and collaborative development",
      },
      {
        name: "VS Code",
        expertise: "Expert",
        icon: Code2,
        years: "4+ years",
        projects: "Daily use",
        color: "emerald",
        description: "Primary development environment and extensions",
      },
      {
        name: "Figma",
        expertise: "Advanced",
        icon: Palette,
        years: "2+ years",
        projects: "30+ designs",
        color: "blue",
        description: "UI/UX design and prototyping tool",
      },
      {
        name: "Postman",
        expertise: "Advanced",
        icon: Settings,
        years: "3+ years",
        projects: "50+ APIs",
        color: "blue",
        description: "API development and testing platform",
      },
      {
        name: "Jest & Testing",
        expertise: "Intermediate",
        icon: Zap,
        years: "2+ years",
        projects: "25+ test suites",
        color: "orange",
        description: "Unit and integration testing frameworks",
      },
      {
        name: "Webpack & Vite",
        expertise: "Advanced",
        icon: Settings,
        years: "2+ years",
        projects: "30+ configs",
        color: "blue",
        description: "Build tools and module bundlers",
      },
    ],
  };

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

      // Categories animation
      const categoryCards = categoriesRef.current?.children;
      if (categoryCards) {
        gsap.fromTo(
          categoryCards,
          { y: 30, opacity: 0, scale: 0.9 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.6,
            ease: "power3.out",
            stagger: 0.1,
            scrollTrigger: {
              trigger: categoriesRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Skills grid animation
      animateSkillsGrid();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const animateSkillsGrid = () => {
    const skillCards = skillsGridRef.current?.children;
    if (skillCards) {
      gsap.fromTo(
        skillCards,
        { y: 50, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
          stagger: 0.1,
          scrollTrigger: {
            trigger: skillsGridRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  };

  useEffect(() => {
    // Re-animate when category changes
    if (skillsGridRef.current) {
      gsap.fromTo(
        skillsGridRef.current.children,
        { x: 20, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, stagger: 0.05, ease: "power2.out" }
      );
    }
  }, [activeCategory]);

  const handleCategoryChange = (categoryId: string) => {
    if (categoryId !== activeCategory) {
      setActiveCategory(categoryId);
    }
  };

  const currentSkills = skillsData[activeCategory as keyof typeof skillsData];
  const currentCategory = skillCategories.find(
    (cat) => cat.id === activeCategory
  );

  const getExpertiseIcon = (expertise: string) => {
    switch (expertise) {
      case "Expert":
        return <Award className="w-4 h-4" />;
      case "Advanced":
        return <TrendingUp className="w-4 h-4" />;
      case "Intermediate":
        return <Star className="w-4 h-4" />;
      default:
        return <Zap className="w-4 h-4" />;
    }
  };

  const getExpertiseColor = (color: string) => {
    const colors = {
      emerald: "bg-emerald-500/20 text-emerald-400 border-emerald-500/30",
      blue: "bg-blue-500/20 text-blue-400 border-blue-500/30",
      orange: "bg-orange-500/20 text-orange-400 border-orange-500/30",
      purple: "bg-purple-500/20 text-purple-400 border-purple-500/30",
    };
    return colors[color as keyof typeof colors] || colors.purple;
  };

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-20 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-2 h-2 bg-purple-400 dark:bg-purple-400 light:bg-purple-500 rounded-full animate-ping transition-colors duration-500" />
        <div className="absolute top-40 right-20 w-1 h-1 bg-cyan-400 dark:bg-cyan-400 light:bg-blue-500 rounded-full animate-pulse transition-colors duration-500" />
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-pink-400 dark:bg-pink-400 light:bg-indigo-500 rounded-full animate-ping transition-colors duration-500" />
        <div className="absolute bottom-20 right-1/3 w-2 h-2 bg-blue-400 dark:bg-blue-400 light:bg-blue-600 rounded-full animate-pulse transition-colors duration-500" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white to-purple-200 dark:from-white dark:to-purple-200 light:from-slate-800 light:to-indigo-600 bg-clip-text text-transparent mb-4 transition-colors duration-500">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-300 dark:text-gray-300 light:text-slate-600 max-w-3xl mx-auto transition-colors duration-500">
            A comprehensive overview of my technical expertise across various
            domains
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full mt-6" />
        </div>

        {/* Category Selector */}
        <div
          ref={categoriesRef}
          className="grid md:grid-cols-3 lg:grid-cols-5 gap-4 mb-16"
        >
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`group relative p-6 rounded-2xl font-semibold transition-all duration-500 text-left ${
                  activeCategory === category.id
                    ? "bg-white/10 dark:bg-white/10 light:bg-white shadow-xl scale-105 border border-white/20 dark:border-white/20 light:border-indigo-200"
                    : "bg-white/5 dark:bg-white/5 light:bg-slate-50 hover:bg-white/8 dark:hover:bg-white/8 light:hover:bg-slate-100 hover:scale-102 border border-white/10 dark:border-white/10 light:border-slate-200"
                } transition-colors duration-500`}
              >
                <div className="mb-4">
                  <div
                    className={`inline-flex p-3 rounded-xl bg-gradient-to-r ${
                      category.color
                    } ${
                      activeCategory === category.id
                        ? "shadow-lg"
                        : "opacity-70 group-hover:opacity-100"
                    } transition-all duration-300`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                </div>
                <h3 className="text-lg font-bold text-white dark:text-white light:text-slate-900 mb-2 transition-colors duration-500">
                  {category.label}
                </h3>
                <p className="text-sm text-gray-400 dark:text-gray-400 light:text-slate-500 transition-colors duration-500">
                  {category.description}
                </p>

                {/* Active indicator */}
                {activeCategory === category.id && (
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-2xl -z-10" />
                )}
              </button>
            );
          })}
        </div>

        {/* Current Category Header */}
        {currentCategory && (
          <div className="text-center mb-12">
            <div className="inline-flex items-center space-x-3 px-6 py-3 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-full border border-white/10 dark:border-white/10 light:border-slate-200 backdrop-blur-sm transition-colors duration-500">
              <currentCategory.icon className="w-5 h-5 text-purple-400 dark:text-purple-400 light:text-indigo-600 transition-colors duration-500" />
              <span className="text-lg font-semibold text-white dark:text-white light:text-slate-900 transition-colors duration-500">
                {currentCategory.label}
              </span>
            </div>
          </div>
        )}

        {/* Skills Grid */}
        <div
          ref={skillsGridRef}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {currentSkills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={skill.name}
                className="group relative p-6 bg-white/5 dark:bg-white/5 light:bg-white backdrop-blur-sm rounded-2xl border border-white/10 dark:border-white/10 light:border-slate-200 hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-slate-50 hover:border-purple-500/30 dark:hover:border-purple-500/30 light:hover:border-indigo-300 transition-all duration-500 hover:transform hover:scale-105"
              >
                {/* Skill Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="p-3 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 dark:from-purple-500/20 dark:to-cyan-500/20 light:from-indigo-100 light:to-blue-100 rounded-xl group-hover:from-purple-500/30 group-hover:to-cyan-500/30 dark:group-hover:from-purple-500/30 dark:group-hover:to-cyan-500/30 light:group-hover:from-indigo-200 light:group-hover:to-blue-200 transition-all duration-300">
                      <Icon className="w-5 h-5 text-purple-400 dark:text-purple-400 light:text-indigo-600 transition-colors duration-500" />
                    </div>
                  </div>
                  <div
                    className={`inline-flex items-center space-x-2 px-3 py-1 rounded-full border text-xs font-bold ${getExpertiseColor(
                      skill.color
                    )} transition-colors duration-500`}
                  >
                    {getExpertiseIcon(skill.expertise)}
                    <span>{skill.expertise}</span>
                  </div>
                </div>

                {/* Skill Content */}
                <div className="space-y-3">
                  <h3 className="text-lg font-bold text-white dark:text-white light:text-slate-900 group-hover:text-purple-300 dark:group-hover:text-purple-300 light:group-hover:text-indigo-700 transition-colors duration-300">
                    {skill.name}
                  </h3>

                  <p className="text-sm text-gray-300 dark:text-gray-300 light:text-slate-600 leading-relaxed transition-colors duration-500">
                    {skill.description}
                  </p>

                  {/* Experience Stats */}
                  <div className="grid grid-cols-2 gap-3 pt-3 border-t border-white/10 dark:border-white/10 light:border-slate-200 transition-colors duration-500">
                    <div className="text-center">
                      <div className="text-sm font-bold text-purple-400 dark:text-purple-400 light:text-indigo-600 transition-colors duration-500">
                        {skill.years}
                      </div>
                      <div className="text-xs text-gray-400 dark:text-gray-400 light:text-slate-500 transition-colors duration-500">
                        Experience
                      </div>
                    </div>
                    <div className="text-center">
                      <div className="text-sm font-bold text-cyan-400 dark:text-cyan-400 light:text-blue-600 transition-colors duration-500">
                        {skill.projects}
                      </div>
                      <div className="text-xs text-gray-400 dark:text-gray-400 light:text-slate-500 transition-colors duration-500">
                        Projects
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Skills Summary */}
        <div className="mt-20 text-center">
          <div className="inline-block p-8 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 dark:from-purple-500/10 dark:to-cyan-500/10 light:from-indigo-50 light:to-blue-50 rounded-3xl border border-white/10 dark:border-white/10 light:border-slate-200 backdrop-blur-sm transition-colors duration-500">
            <h3 className="text-2xl font-bold text-white dark:text-white light:text-slate-900 mb-4 transition-colors duration-500">
              Continuous Learning & Innovation
            </h3>
            <p className="text-gray-300 dark:text-gray-300 light:text-slate-600 max-w-2xl transition-colors duration-500">
              I'm passionate about staying current with emerging technologies
              and best practices. My expertise levels reflect hands-on
              experience building real-world solutions and continuous
              professional development.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
