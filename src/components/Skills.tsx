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
} from "lucide-react";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Skills = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const categoriesRef = useRef<HTMLDivElement>(null);
  const progressBarsRef = useRef<HTMLDivElement>(null);
  const [activeCategory, setActiveCategory] = useState("frontend");

  const skillCategories = [
    {
      id: "frontend",
      label: "Frontend",
      icon: Monitor,
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: "backend",
      label: "Backend",
      icon: Server,
      color: "from-purple-500 to-pink-500",
    },
    {
      id: "mobile",
      label: "Mobile",
      icon: Smartphone,
      color: "from-green-500 to-emerald-500",
    },
    {
      id: "cloud",
      label: "Cloud & DevOps",
      icon: Cloud,
      color: "from-orange-500 to-red-500",
    },
    {
      id: "tools",
      label: "Tools & Others",
      icon: Settings,
      color: "from-indigo-500 to-purple-500",
    },
  ];

  const skillsData = {
    frontend: [
      { name: "React/Next.js", level: 95, icon: Code2 },
      { name: "TypeScript", level: 90, icon: Zap },
      { name: "Tailwind CSS", level: 92, icon: Palette },
      { name: "Vue.js", level: 85, icon: Code2 },
      { name: "JavaScript (ES6+)", level: 95, icon: Globe },
      { name: "HTML5/CSS3", level: 98, icon: Monitor },
    ],
    backend: [
      { name: "Node.js", level: 90, icon: Server },
      { name: "Python", level: 85, icon: Cpu },
      { name: "PostgreSQL", level: 88, icon: Database },
      { name: "MongoDB", level: 82, icon: Database },
      { name: "GraphQL", level: 80, icon: GitBranch },
      { name: "REST APIs", level: 95, icon: Globe },
    ],
    mobile: [
      { name: "React Native", level: 88, icon: Smartphone },
      { name: "Expo", level: 85, icon: Zap },
      { name: "iOS Development", level: 75, icon: Smartphone },
      { name: "Android Development", level: 70, icon: Smartphone },
      { name: "Flutter", level: 65, icon: Code2 },
      { name: "PWA", level: 90, icon: Globe },
    ],
    cloud: [
      { name: "AWS", level: 85, icon: Cloud },
      { name: "Docker", level: 90, icon: Settings },
      { name: "Kubernetes", level: 78, icon: Server },
      { name: "CI/CD", level: 88, icon: GitBranch },
      { name: "Vercel/Netlify", level: 95, icon: Globe },
      { name: "Firebase", level: 82, icon: Database },
    ],
    tools: [
      { name: "Git/GitHub", level: 95, icon: GitBranch },
      { name: "VS Code", level: 98, icon: Code2 },
      { name: "Figma", level: 85, icon: Palette },
      { name: "Postman", level: 90, icon: Settings },
      { name: "Jest/Testing", level: 80, icon: Zap },
      { name: "Webpack/Vite", level: 85, icon: Settings },
    ],
  };

  const [animatedLevels, setAnimatedLevels] = useState<Record<string, number>>(
    {}
  );

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

      // Progress bars animation
      gsap.fromTo(
        progressBarsRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: progressBarsRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
            onEnter: () => animateProgressBars(),
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const animateProgressBars = () => {
    const currentSkills = skillsData[activeCategory as keyof typeof skillsData];
    const newLevels: Record<string, number> = {};

    currentSkills.forEach((skill, index) => {
      gsap.fromTo(
        { level: animatedLevels[skill.name] || 0 },
        { level: skill.level },
        {
          duration: 1.5,
          delay: index * 0.1,
          ease: "power2.out",
          onUpdate: function () {
            newLevels[skill.name] = this.targets()[0].level;
            setAnimatedLevels((prev) => ({ ...prev, ...newLevels }));
          },
        }
      );
    });
  };

  useEffect(() => {
    animateProgressBars();
  }, [activeCategory]);

  const handleCategoryChange = (categoryId: string) => {
    if (categoryId !== activeCategory) {
      // Reset levels first
      setAnimatedLevels({});
      setActiveCategory(categoryId);

      // Animate category switch
      gsap.fromTo(
        progressBarsRef.current?.children || [],
        { x: 20, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.5, stagger: 0.05, ease: "power2.out" }
      );
    }
  };

  const currentSkills = skillsData[activeCategory as keyof typeof skillsData];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-20 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-20 left-10 w-2 h-2 bg-purple-400 rounded-full animate-ping" />
        <div className="absolute top-40 right-20 w-1 h-1 bg-cyan-400 rounded-full animate-pulse" />
        <div className="absolute bottom-32 left-1/4 w-1.5 h-1.5 bg-pink-400 rounded-full animate-ping" />
        <div className="absolute bottom-20 right-1/3 w-2 h-2 bg-blue-400 rounded-full animate-pulse" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent mb-4">
            Skills & Expertise
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A comprehensive overview of my technical skills and proficiency
            levels
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full mt-6" />
        </div>

        {/* Category Selector */}
        <div
          ref={categoriesRef}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {skillCategories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => handleCategoryChange(category.id)}
                className={`group relative px-6 py-4 rounded-2xl font-semibold transition-all duration-500 ${
                  activeCategory === category.id
                    ? "bg-white/10 text-white scale-105 shadow-lg shadow-purple-500/25"
                    : "bg-white/5 text-gray-300 hover:bg-white/8 hover:text-white hover:scale-102"
                }`}
              >
                <div className="flex items-center space-x-3">
                  <div
                    className={`p-2 rounded-lg bg-gradient-to-r ${
                      category.color
                    } ${
                      activeCategory === category.id
                        ? "shadow-lg"
                        : "opacity-70 group-hover:opacity-100"
                    } transition-all duration-300`}
                  >
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <span>{category.label}</span>
                </div>

                {/* Active indicator */}
                {activeCategory === category.id && (
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-2xl -z-10" />
                )}
              </button>
            );
          })}
        </div>

        {/* Skills Progress Bars */}
        <div ref={progressBarsRef} className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {currentSkills.map((skill, index) => {
              const Icon = skill.icon;
              const animatedLevel = animatedLevels[skill.name] || 0;

              return (
                <div
                  key={skill.name}
                  className="group p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/8 hover:border-purple-500/30 transition-all duration-300"
                >
                  {/* Skill Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center space-x-3">
                      <div className="p-2 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 rounded-lg group-hover:from-purple-500/30 group-hover:to-cyan-500/30 transition-all duration-300">
                        <Icon className="w-5 h-5 text-purple-400" />
                      </div>
                      <span className="text-white font-semibold">
                        {skill.name}
                      </span>
                    </div>
                    <span className="text-2xl font-bold text-purple-400">
                      {Math.round(animatedLevel)}%
                    </span>
                  </div>

                  {/* Progress Bar */}
                  <div className="relative">
                    <div className="w-full h-3 bg-gray-700/50 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full relative overflow-hidden transition-all duration-300"
                        style={{ width: `${animatedLevel}%` }}
                      >
                        {/* Shimmer effect */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-shimmer" />
                      </div>
                    </div>

                    {/* Glow effect */}
                    <div
                      className="absolute top-0 h-3 bg-gradient-to-r from-purple-500/50 to-cyan-500/50 rounded-full blur-sm opacity-75"
                      style={{ width: `${animatedLevel}%` }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Skills Summary */}
        <div className="mt-16 text-center">
          <div className="inline-block p-8 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 rounded-3xl border border-white/10 backdrop-blur-sm">
            <h3 className="text-2xl font-bold text-white mb-4">
              Continuous Learning & Growth
            </h3>
            <p className="text-gray-300 max-w-2xl">
              I believe in staying updated with the latest technologies and
              continuously improving my skills. These percentages represent my
              current proficiency and comfort level with each technology.
            </p>
          </div>
        </div>
      </div>

      {/* Custom CSS for shimmer effect */}
      <style jsx global>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%) skewX(-12deg);
          }
          100% {
            transform: translateX(200%) skewX(-12deg);
          }
        }

        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
      `}</style>
    </section>
  );
};

export default Skills;
