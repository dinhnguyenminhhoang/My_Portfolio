"use client";

import { useEffect, useRef, useState } from "react";
import {
  Smartphone,
  Code,
  Database,
  Palette,
  Zap,
  Settings,
  CheckCircle,
  TrendingUp,
  Star,
  Award,
  Sparkles,
  Hexagon,
} from "lucide-react";

const Skills = () => {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredSkill, setHoveredSkill] = useState<any>(null);

  const skillCategories = [
    {
      title: "Mobile Development",
      icon: Smartphone,
      color: "from-blue-500 to-cyan-500",
      bgColor: "bg-blue-500/10",
      skills: [
        {
          name: "React Native",
          level: 95,
          experience: "4+ years",
          specialty: "Cross-Platform Expert",
        },
        {
          name: "Flutter",
          level: 90,
          experience: "3+ years",
          specialty: "UI/UX Master",
        },
        {
          name: "Swift (iOS)",
          level: 85,
          experience: "5+ years",
          specialty: "Native iOS Pro",
        },
        {
          name: "Kotlin (Android)",
          level: 88,
          experience: "4+ years",
          specialty: "Android Specialist",
        },
        {
          name: "Xamarin",
          level: 75,
          experience: "2+ years",
          specialty: "Enterprise Solutions",
        },
      ],
    },
    {
      title: "Frontend Technologies",
      icon: Code,
      color: "from-purple-500 to-pink-500",
      bgColor: "bg-purple-500/10",
      skills: [
        {
          name: "TypeScript",
          level: 92,
          experience: "5+ years",
          specialty: "Type Safety Expert",
        },
        {
          name: "JavaScript (ES6+)",
          level: 95,
          experience: "6+ years",
          specialty: "Language Master",
        },
        {
          name: "React.js",
          level: 90,
          experience: "4+ years",
          specialty: "Component Architect",
        },
        {
          name: "Next.js",
          level: 85,
          experience: "3+ years",
          specialty: "Full-Stack Developer",
        },
        {
          name: "Vue.js",
          level: 80,
          experience: "2+ years",
          specialty: "Progressive Framework",
        },
      ],
    },
    {
      title: "Backend & Database",
      icon: Database,
      color: "from-green-500 to-emerald-500",
      bgColor: "bg-green-500/10",
      skills: [
        {
          name: "Node.js",
          level: 88,
          experience: "4+ years",
          specialty: "Server-Side Expert",
        },
        {
          name: "Firebase",
          level: 92,
          experience: "5+ years",
          specialty: "Real-time Solutions",
        },
        {
          name: "MongoDB",
          level: 85,
          experience: "3+ years",
          specialty: "NoSQL Specialist",
        },
        {
          name: "PostgreSQL",
          level: 80,
          experience: "3+ years",
          specialty: "Relational DB Pro",
        },
        {
          name: "GraphQL",
          level: 78,
          experience: "2+ years",
          specialty: "API Architect",
        },
      ],
    },
    {
      title: "Design & Tools",
      icon: Palette,
      color: "from-orange-500 to-red-500",
      bgColor: "bg-orange-500/10",
      skills: [
        {
          name: "Figma",
          level: 90,
          experience: "4+ years",
          specialty: "Design Systems",
        },
        {
          name: "Adobe XD",
          level: 85,
          experience: "3+ years",
          specialty: "Prototyping Expert",
        },
        {
          name: "Git & GitHub",
          level: 95,
          experience: "6+ years",
          specialty: "Version Control Master",
        },
        {
          name: "Docker",
          level: 75,
          experience: "2+ years",
          specialty: "Containerization",
        },
        {
          name: "CI/CD",
          level: 80,
          experience: "3+ years",
          specialty: "DevOps Integration",
        },
      ],
    },
  ];

  const certifications = [
    {
      name: "Google Associate Android Developer",
      issuer: "Google",
      year: "2023",
      icon: "🤖",
    },
    {
      name: "AWS Certified Developer",
      issuer: "Amazon",
      year: "2022",
      icon: "☁️",
    },
    {
      name: "React Native Certified Developer",
      issuer: "Meta",
      year: "2023",
      icon: "⚛️",
    },
    {
      name: "Flutter Certified Developer",
      issuer: "Google",
      year: "2022",
      icon: "🐦",
    },
  ];

  const additionalSkills = [
    "Jest",
    "Detox",
    "Fastlane",
    "App Store Connect",
    "Google Play Console",
    "Firebase Analytics",
    "Crashlytics",
    "Redux",
    "MobX",
    "Socket.io",
    "REST APIs",
    "WebRTC",
    "Push Notifications",
    "In-App Purchases",
    "Biometric Authentication",
    "AR Kit",
    "ML Kit",
    "Maps Integration",
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const getSkillLevel = (level: number) => {
    if (level >= 90)
      return {
        text: "Expert",
        color: "text-green-400",
        bgColor: "bg-green-500/20",
        borderColor: "border-green-500/30",
      };
    if (level >= 80)
      return {
        text: "Advanced",
        color: "text-blue-400",
        bgColor: "bg-blue-500/20",
        borderColor: "border-blue-500/30",
      };
    if (level >= 70)
      return {
        text: "Intermediate",
        color: "text-yellow-400",
        bgColor: "bg-yellow-500/20",
        borderColor: "border-yellow-500/30",
      };
    return {
      text: "Beginner",
      color: "text-orange-400",
      bgColor: "bg-orange-500/20",
      borderColor: "border-orange-500/30",
    };
  };

  const getStarCount = (level: number) => {
    if (level >= 90) return 5;
    if (level >= 80) return 4;
    if (level >= 70) return 3;
    if (level >= 60) return 2;
    return 1;
  };

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative py-20 lg:py-32 bg-gradient-to-br from-slate-900 via-purple-900/20 to-slate-900 overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        {/* Floating Hexagons */}
        <div className="absolute top-20 left-10 text-purple-500/10 animate-bounce">
          <Hexagon size={80} />
        </div>
        <div
          className="absolute top-40 right-20 text-blue-500/10 animate-bounce"
          style={{ animationDelay: "1s" }}
        >
          <Hexagon size={60} />
        </div>
        <div
          className="absolute bottom-40 left-1/4 text-pink-500/10 animate-bounce"
          style={{ animationDelay: "2s" }}
        >
          <Hexagon size={70} />
        </div>
        <div
          className="absolute bottom-20 right-10 text-cyan-500/10 animate-bounce"
          style={{ animationDelay: "0.5s" }}
        >
          <Hexagon size={50} />
        </div>

        {/* Grid Pattern */}
        <div className="absolute inset-0 opacity-30">
          <div className="w-full h-full bg-gradient-to-r from-purple-500/5 via-transparent to-pink-500/5"></div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full border border-purple-500/30 text-purple-300 text-sm font-medium backdrop-blur-sm mb-8">
            <Sparkles size={16} />
            <span>Technical Mastery</span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
            My{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-cyan-400 bg-clip-text text-transparent">
              Superpowers
            </span>
          </h2>
          <p className="text-gray-400 text-xl max-w-3xl mx-auto leading-relaxed">
            A comprehensive arsenal of cutting-edge technologies and frameworks
            that power exceptional mobile experiences
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className={`group relative transition-all duration-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-20"
              }`}
              style={{ transitionDelay: `${categoryIndex * 200}ms` }}
            >
              {/* Category Card */}
              <div className="relative h-full">
                {/* Glow Effect */}
                <div
                  className={`absolute -inset-1 bg-gradient-to-r ${category.color} rounded-3xl blur-lg opacity-0 group-hover:opacity-30 transition-opacity duration-500`}
                ></div>

                {/* Main Card */}
                <div
                  className={`relative h-full ${category.bgColor} backdrop-blur-xl rounded-3xl border border-white/10 p-8 hover:border-white/20 transition-all duration-500`}
                >
                  {/* Category Header */}
                  <div className="flex items-center space-x-4 mb-8">
                    <div
                      className={`relative w-16 h-16 bg-gradient-to-r ${category.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <category.icon size={28} className="text-white" />
                      <div
                        className={`absolute inset-0 bg-gradient-to-r ${category.color} rounded-2xl blur-md opacity-50 group-hover:opacity-80 transition-opacity duration-300`}
                      ></div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                        {category.title}
                      </h3>
                      <p className="text-gray-400">Professional expertise</p>
                    </div>
                  </div>

                  {/* Skills Grid */}
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => {
                      const skillLevelInfo = getSkillLevel(skill.level);
                      const starCount = getStarCount(skill.level);
                      const skillKey = `${categoryIndex}-${skillIndex}`;
                      const isHovered = hoveredSkill === skillKey;

                      return (
                        <div
                          key={skill.name}
                          className={`group/skill relative p-4 rounded-2xl border border-gray-700/50 hover:border-gray-500/50 transition-all duration-300 cursor-pointer ${
                            isHovered
                              ? "bg-white/5 scale-105"
                              : "bg-black/20 hover:bg-white/5"
                          }`}
                          onMouseEnter={() => setHoveredSkill(skillKey)}
                          onMouseLeave={() => setHoveredSkill(null)}
                          style={{
                            animationDelay: `${
                              400 + categoryIndex * 200 + skillIndex * 100
                            }ms`,
                            transform: isHovered
                              ? "translateX(10px)"
                              : "translateX(0)",
                          }}
                        >
                          {/* Skill Content */}
                          <div className="flex items-center justify-between">
                            <div className="flex-1">
                              <div className="flex items-center space-x-3 mb-2">
                                <h4 className="text-white font-semibold text-lg group-hover/skill:text-purple-300 transition-colors duration-300">
                                  {skill.name}
                                </h4>
                                <span
                                  className={`px-2 py-1 rounded-lg text-xs font-medium ${skillLevelInfo.bgColor} ${skillLevelInfo.borderColor} border ${skillLevelInfo.color}`}
                                >
                                  {skillLevelInfo.text}
                                </span>
                              </div>
                              <p className="text-gray-400 text-sm mb-1">
                                {skill.experience}
                              </p>
                              <p className="text-gray-500 text-xs italic">
                                {skill.specialty}
                              </p>
                            </div>

                            {/* Star Rating */}
                            <div className="flex flex-col items-end space-y-2">
                              <div className="flex space-x-1">
                                {[...Array(5)].map((_, index) => (
                                  <Star
                                    key={index}
                                    size={16}
                                    className={`transition-all duration-300 ${
                                      index < starCount
                                        ? `text-yellow-400 fill-current ${
                                            isHovered ? "scale-125" : ""
                                          }`
                                        : "text-gray-600"
                                    }`}
                                    style={{
                                      transitionDelay: `${index * 50}ms`,
                                    }}
                                  />
                                ))}
                              </div>
                              <span className="text-gray-400 text-sm font-mono">
                                {skill.level}%
                              </span>
                            </div>
                          </div>

                          {/* Skill Level Indicator */}
                          <div className="mt-3 w-full bg-gray-700/50 rounded-full h-1 overflow-hidden">
                            <div
                              className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                              style={{
                                width: isVisible ? `${skill.level}%` : "0%",
                                transitionDelay: `${
                                  600 + categoryIndex * 200 + skillIndex * 100
                                }ms`,
                              }}
                            >
                              <div className="h-full bg-white/30 animate-pulse"></div>
                            </div>
                          </div>

                          {/* Hover Glow */}
                          <div
                            className={`absolute -inset-1 bg-gradient-to-r ${category.color} rounded-2xl blur opacity-0 group-hover/skill:opacity-20 transition-opacity duration-300 -z-10`}
                          ></div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Skills */}
        <div
          className={`mb-16 transition-all duration-1000 delay-800 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h3 className="text-2xl font-bold text-white mb-8 text-center flex items-center justify-center">
            <Zap className="mr-3 text-yellow-400" size={28} />
            Additional Technologies & Tools
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {additionalSkills.map((tool, index) => (
              <span
                key={tool}
                className={`px-4 py-2 bg-gradient-to-r from-slate-700 to-slate-800 rounded-full text-sm text-gray-300 border border-gray-600 transition-all duration-300 hover:scale-105 hover:border-purple-500 cursor-default ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-5"
                }`}
                style={{ transitionDelay: `${1200 + index * 50}ms` }}
              >
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Certifications Showcase */}
        <div
          className={`transition-all duration-1000 delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4 flex items-center justify-center">
              <Award className="mr-3 text-yellow-400" size={32} />
              Industry Certifications
            </h3>
            <p className="text-gray-400">
              Validated expertise from leading technology companies
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <div
                key={cert.name}
                className={`group relative transition-all duration-1000 hover:scale-105 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-5"
                }`}
                style={{ transitionDelay: `${1200 + index * 150}ms` }}
              >
                <div className="relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-xl rounded-2xl p-6 border border-gray-700/50 hover:border-green-500/50 transition-all duration-300">
                  <div className="text-center">
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                      {cert.icon}
                    </div>
                    <h4 className="text-white font-semibold mb-2 text-sm leading-tight">
                      {cert.name}
                    </h4>
                    <p className="text-gray-400 text-xs mb-1">{cert.issuer}</p>
                    <p className="text-green-400 text-xs font-medium">
                      {cert.year}
                    </p>
                  </div>

                  {/* Verification Badge */}
                  <div className="absolute top-2 right-2">
                    <CheckCircle size={16} className="text-green-400" />
                  </div>

                  {/* Hover Glow */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-green-500/20 to-emerald-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Skills Summary */}
        <div
          className={`mt-20 text-center transition-all duration-1000 delay-1500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="relative max-w-4xl mx-auto">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-3xl blur-lg opacity-30"></div>
            <div className="relative bg-gradient-to-br from-slate-800/90 to-slate-900/90 backdrop-blur-xl rounded-3xl p-8 border border-white/10">
              <TrendingUp className="w-16 h-16 text-purple-400 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-white mb-4">
                Continuous Evolution
              </h3>
              <p className="text-gray-300 leading-relaxed text-lg">
                I'm constantly evolving my skillset, currently exploring
                <span className="text-purple-400 font-medium">
                  {" "}
                  Web3 integration
                </span>
                ,
                <span className="text-pink-400 font-medium">
                  {" "}
                  AI/ML in mobile apps
                </span>
                , and
                <span className="text-cyan-400 font-medium">
                  {" "}
                  AR/VR development
                </span>
                . The future of mobile development is exciting, and I'm ready to
                lead the charge.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-32 left-10 w-6 h-6 bg-purple-500/20 rounded-full animate-bounce"></div>
      <div
        className="absolute top-1/2 right-10 w-4 h-4 bg-pink-500/20 rounded-full animate-bounce"
        style={{ animationDelay: "1s" }}
      ></div>
      <div
        className="absolute bottom-32 left-1/4 w-8 h-8 bg-cyan-500/20 rounded-full animate-bounce"
        style={{ animationDelay: "2s" }}
      ></div>
    </section>
  );
};

export default Skills;
