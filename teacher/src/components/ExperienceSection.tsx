"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  GraduationCap,
  Briefcase,
  Award,
  Globe,
  Users,
  BookOpen,
  Star,
  Calendar,
  MapPin,
  TrendingUp,
  Clock,
  Target,
  Heart,
  Zap,
  ChevronRight,
  ExternalLink,
  Download,
  CheckCircle,
  Sparkles,
  Building,
  Trophy,
} from "lucide-react";
import { cn, fadeInUp, staggerChildren } from "@/utils/cn";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const experiences = [
  {
    id: 1,
    type: "work",
    company: "International Language Academy",
    position: "Senior English Instructor",
    location: "London, UK",
    period: "2020 - Present",
    duration: "4 years",
    description:
      "Leading advanced English programs for international students and professionals, specializing in IELTS preparation and business communication.",
    achievements: [
      "Achieved 98% student satisfaction rate",
      "Developed curriculum for 500+ students",
      "Mentored 15 junior instructors",
      "Created innovative online learning materials",
    ],
    technologies: [
      "IELTS Preparation",
      "Business English",
      "Curriculum Development",
      "Online Teaching",
    ],
    color: "from-blue-500 to-purple-600",
    icon: Briefcase,
    featured: true,
  },
  {
    id: 2,
    type: "education",
    company: "University of Cambridge",
    position: "Master of Education (TESOL)",
    location: "Cambridge, UK",
    period: "2018 - 2020",
    duration: "2 years",
    description:
      "Specialized in Teaching English to Speakers of Other Languages with focus on innovative pedagogical approaches and language acquisition theory.",
    achievements: [
      "Graduated with Distinction (First Class)",
      "Research in Digital Language Learning",
      "Published paper on motivation in ESL",
      "Teaching practicum in 5 countries",
    ],
    technologies: [
      "Language Acquisition",
      "Digital Learning",
      "Research Methods",
      "Cross-cultural Communication",
    ],
    color: "from-green-500 to-blue-500",
    icon: GraduationCap,
    featured: false,
  },
  {
    id: 3,
    type: "work",
    company: "Global English Solutions",
    position: "English Language Consultant",
    location: "Remote / Worldwide",
    period: "2017 - 2020",
    duration: "3 years",
    description:
      "Provided customized English training programs for multinational corporations and government agencies across 15 countries.",
    achievements: [
      "Designed corporate training programs",
      "Managed international client relationships",
      "Delivered workshops to 200+ professionals",
      "Achieved 95% client retention rate",
    ],
    technologies: [
      "Corporate Training",
      "International Relations",
      "Program Management",
      "Cross-cultural Training",
    ],
    color: "from-purple-500 to-pink-600",
    icon: Globe,
    featured: false,
  },
  {
    id: 4,
    type: "work",
    company: "Riverside High School",
    position: "ESL Teacher",
    location: "Manchester, UK",
    period: "2015 - 2017",
    duration: "2 years",
    description:
      "Taught English as a Second Language to international students aged 16-18, preparing them for university entrance.",
    achievements: [
      "Managed classes of 15-20 students",
      "Developed cultural exchange programs",
      "Achieved 95% course completion rate",
      "Coordinated with local education ministry",
    ],
    technologies: [
      "Classroom Management",
      "Cultural Adaptation",
      "Youth Education",
      "Program Coordination",
    ],
    color: "from-cyan-500 to-blue-500",
    icon: BookOpen,
    featured: false,
  },
];

const stats = [
  {
    icon: Users,
    value: 500,
    suffix: "+",
    label: "Students Taught",
    description: "Across 25+ countries",
    color: "from-blue-500 to-purple-600",
  },
  {
    icon: Clock,
    value: 8,
    suffix: "+",
    label: "Years Experience",
    description: "In English education",
    color: "from-purple-500 to-pink-600",
  },
  {
    icon: Star,
    value: 4.9,
    suffix: "/5",
    label: "Average Rating",
    description: "From student feedback",
    color: "from-pink-500 to-red-500",
  },
  {
    icon: Target,
    value: 98,
    suffix: "%",
    label: "Success Rate",
    description: "Goal achievement",
    color: "from-cyan-500 to-blue-500",
  },
];

const skills = [
  { name: "IELTS Preparation", level: 98, category: "Specialization" },
  { name: "Business English", level: 95, category: "Specialization" },
  { name: "Conversation Training", level: 97, category: "Core Skills" },
  { name: "Curriculum Development", level: 92, category: "Professional" },
  { name: "Online Teaching", level: 96, category: "Technology" },
  { name: "Cross-cultural Communication", level: 94, category: "Professional" },
];

const certifications = [
  {
    name: "CELTA",
    issuer: "Cambridge Assessment",
    year: "2018",
    icon: Award,
  },
  {
    name: "TESOL Master's",
    issuer: "University of Cambridge",
    year: "2020",
    icon: GraduationCap,
  },
  {
    name: "Teaching Excellence Award",
    issuer: "ILA London",
    year: "2023",
    icon: Trophy,
  },
];

export default function ExperienceSection() {
  const [activeExperience, setActiveExperience] = useState(experiences[0].id);
  const [isMounted, setIsMounted] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(sectionRef, { once: true, margin: "-50px" });

  // Fixed positions for particles to avoid hydration mismatch
  const particlePositions = [
    { left: 10, top: 15 },
    { left: 90, top: 25 },
    { left: 20, top: 80 },
    { left: 80, top: 10 },
    { left: 50, top: 90 },
    { left: 70, top: 60 },
    { left: 30, top: 40 },
    { left: 85, top: 70 },
    { left: 15, top: 55 },
    { left: 95, top: 85 },
    { left: 5, top: 35 },
    { left: 60, top: 20 },
  ];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isInView || !isMounted) return;

    const ctx = gsap.context(() => {
      // Header animation - Fixed: no initial transform that hides content
      gsap.fromTo(
        headerRef.current,
        {
          opacity: 0,
          y: 30, // Reduced from large values that hide content
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 90%", // Start earlier so content is visible
            toggleActions: "play none none reverse",
          },
        }
      );

      // Stats counter animation
      const statElements = statsRef.current?.querySelectorAll(".stat-counter");
      if (statElements) {
        statElements.forEach((element, index) => {
          const stat = stats[index];
          const counterObj = { value: 0 };

          gsap.fromTo(
            element,
            { opacity: 0, y: 20 },
            {
              opacity: 1,
              y: 0,
              duration: 0.6,
              delay: index * 0.1,
              ease: "power2.out",
            }
          );

          gsap.to(counterObj, {
            value: stat.value,
            duration: 2,
            ease: "power2.out",
            delay: index * 0.1 + 0.5,
            scrollTrigger: {
              trigger: statsRef.current,
              start: "top 80%",
              toggleActions: "play none none none",
            },
            onUpdate: () => {
              if (element) {
                const formattedValue =
                  stat.suffix === "/5"
                    ? counterObj.value.toFixed(1)
                    : Math.floor(counterObj.value);
                element.textContent = formattedValue + stat.suffix;
              }
            },
          });
        });
      }

      // Timeline animation - Fixed: reduced initial transforms
      const timelineItems =
        timelineRef.current?.querySelectorAll(".timeline-item");
      if (timelineItems) {
        gsap.fromTo(
          timelineItems,
          {
            opacity: 0,
            x: -30, // Reduced from -50
            scale: 0.95, // Reduced from 0.9
          },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.8,
            ease: "power2.out",
            stagger: 0.15,
            scrollTrigger: {
              trigger: timelineRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Timeline line animation
      gsap.fromTo(
        ".timeline-line",
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Skills progress bars animation
      const skillBars = skillsRef.current?.querySelectorAll(".skill-progress");
      if (skillBars) {
        skillBars.forEach((bar, index) => {
          const skill = skills[index];
          gsap.fromTo(
            bar,
            { width: "0%" },
            {
              width: `${skill.level}%`,
              duration: 1.5,
              ease: "power2.out",
              delay: index * 0.1,
              scrollTrigger: {
                trigger: skillsRef.current,
                start: "top 85%",
                toggleActions: "play none none none",
              },
            }
          );
        });
      }

      // Floating animation for experience cards
      gsap.to(".floating-experience", {
        y: -8,
        duration: 3,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.5,
      });

      // Parallax background elements
      gsap.to(".parallax-bg", {
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      // Magnetic hover effects
      const magneticElements =
        sectionRef.current?.querySelectorAll(".magnetic-element");
      magneticElements?.forEach((element) => {
        const magnetic = element as HTMLElement;

        magnetic.addEventListener("mouseenter", () => {
          gsap.to(magnetic, {
            scale: 1.05,
            duration: 0.3,
            ease: "power2.out",
          });
        });

        magnetic.addEventListener("mouseleave", () => {
          gsap.to(magnetic, {
            scale: 1,
            x: 0,
            y: 0,
            duration: 0.3,
            ease: "power2.out",
          });
        });

        magnetic.addEventListener("mousemove", (e: MouseEvent) => {
          const rect = magnetic.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;

          gsap.to(magnetic, {
            x: x * 0.1,
            y: y * 0.1,
            duration: 0.3,
            ease: "power2.out",
          });
        });
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [isInView, isMounted]);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="parallax-bg absolute top-20 right-20 w-96 h-96 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-3xl" />
        <div className="parallax-bg absolute bottom-40 left-20 w-80 h-80 rounded-full bg-gradient-to-r from-purple-400/20 to-pink-400/20 blur-3xl" />

        {/* Floating particles */}
        {isMounted &&
          particlePositions.map((position, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full"
              style={{
                left: `${position.left}%`,
                top: `${position.top}%`,
                animation: `float ${3 + (i % 3)}s ease-in-out infinite`,
                animationDelay: `${i * 0.2}s`,
              }}
            />
          ))}

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.02)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={headerRef}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={staggerChildren}
          className="text-center mb-20"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center px-6 py-3 rounded-full bg-white/80 backdrop-blur-sm border border-blue-200/50 text-blue-600 text-sm font-semibold mb-8 shadow-lg"
          >
            <Briefcase className="w-5 h-5 mr-2" />
            Professional Journey
            <Sparkles className="w-4 h-4 ml-2" />
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6"
          >
            My{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Experience
            </span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            8+ years of dedicated teaching experience across international
            institutions, helping students achieve their English language goals
            through innovative and personalized learning approaches.
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="text-center group magnetic-element"
            >
              <div
                className={cn(
                  "w-20 h-20 mx-auto mb-4 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300",
                  `bg-gradient-to-r ${stat.color}`
                )}
              >
                <stat.icon className="w-10 h-10 text-white" />
              </div>
              <div className="stat-counter text-4xl font-bold text-gray-900 mb-2">
                0{stat.suffix}
              </div>
              <div className="font-semibold text-gray-600 mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-gray-500">{stat.description}</div>
            </div>
          ))}
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Timeline Column */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-bold text-gray-900 mb-12 flex items-center">
              <Calendar className="w-8 h-8 mr-3 text-blue-500" />
              Professional Timeline
            </h3>

            <div ref={timelineRef} className="relative">
              {/* Timeline Line */}
              <div className="timeline-line absolute left-8 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-500 origin-top rounded-full" />

              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div
                    key={exp.id}
                    className={cn(
                      "timeline-item floating-experience relative pl-20 cursor-pointer transition-all duration-300 magnetic-element",
                      activeExperience === exp.id
                        ? "scale-105"
                        : "hover:scale-102"
                    )}
                    onClick={() => setActiveExperience(exp.id)}
                  >
                    {/* Timeline Dot */}
                    <div
                      className={cn(
                        "absolute left-6 w-6 h-6 rounded-full border-4 border-white transition-all duration-300 shadow-lg",
                        activeExperience === exp.id
                          ? `bg-gradient-to-r ${exp.color} scale-125`
                          : "bg-gray-300"
                      )}
                    />

                    {/* Experience Card */}
                    <div
                      className={cn(
                        "bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg border transition-all duration-300 relative overflow-hidden",
                        activeExperience === exp.id
                          ? "border-blue-300 shadow-2xl shadow-blue-500/20"
                          : "border-gray-200/50 hover:border-blue-200"
                      )}
                    >
                      {/* Featured Badge */}
                      {exp.featured && (
                        <div className="absolute top-4 right-4">
                          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-xs font-bold flex items-center gap-1">
                            <Star className="w-3 h-3 fill-current" />
                            Current Role
                          </div>
                        </div>
                      )}

                      {/* Header */}
                      <div className="flex items-start gap-4 mb-6">
                        <div
                          className={cn(
                            "p-3 rounded-2xl bg-gradient-to-r shadow-lg",
                            exp.color
                          )}
                        >
                          <exp.icon className="w-8 h-8 text-white" />
                        </div>

                        <div className="flex-1">
                          <h4 className="text-2xl font-bold text-gray-900 mb-1">
                            {exp.position}
                          </h4>
                          <p className="text-blue-600 font-semibold mb-2 flex items-center gap-2">
                            <Building className="w-4 h-4" />
                            {exp.company}
                          </p>

                          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600 mb-4">
                            <span className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {exp.location}
                            </span>
                            <span className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {exp.period}
                            </span>
                            <span className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {exp.duration}
                            </span>
                          </div>

                          <p className="text-gray-700 leading-relaxed mb-6">
                            {exp.description}
                          </p>
                        </div>
                      </div>

                      {/* Content Grid */}
                      <div className="grid md:grid-cols-2 gap-6">
                        {/* Achievements */}
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                            <Trophy className="w-5 h-5 text-yellow-500" />
                            Key Achievements
                          </h5>
                          <ul className="space-y-2">
                            {exp.achievements.map((achievement, idx) => (
                              <li
                                key={idx}
                                className="flex items-start gap-2 text-sm text-gray-600"
                              >
                                <CheckCircle className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>

                        {/* Technologies */}
                        <div>
                          <h5 className="font-semibold text-gray-900 mb-3 flex items-center gap-2">
                            <Zap className="w-5 h-5 text-purple-500" />
                            Expertise Areas
                          </h5>
                          <div className="flex flex-wrap gap-2">
                            {exp.technologies.map((tech, idx) => (
                              <span
                                key={idx}
                                className="px-3 py-1 bg-gradient-to-r from-blue-100 to-purple-100 text-blue-700 rounded-full text-xs font-medium"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Skills & Certifications Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Skills */}
            <div
              ref={skillsRef}
              className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/20"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <TrendingUp className="w-6 h-6 text-blue-500" />
                Core Skills
              </h3>

              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-gray-700">
                        {skill.name}
                      </span>
                      <span className="text-sm font-bold text-blue-600">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="skill-progress h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-300"
                        style={{ width: "0%" }}
                      />
                    </div>
                    <span className="text-xs text-gray-500 capitalize">
                      {skill.category}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications */}
            <div className="bg-white/90 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-white/20">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <Award className="w-6 h-6 text-yellow-500" />
                Certifications
              </h3>

              <div className="space-y-4">
                {certifications.map((cert, index) => (
                  <div
                    key={cert.name}
                    className="flex items-center gap-4 p-4 bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl magnetic-element hover:shadow-md transition-all duration-300"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                      <cert.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-gray-900">
                        {cert.name}
                      </h4>
                      <p className="text-sm text-gray-600">{cert.issuer}</p>
                      <span className="text-xs text-blue-600 font-medium">
                        {cert.year}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <button className="w-full mt-6 py-3 px-6 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 magnetic-element">
                <Download className="w-5 h-5" />
                Download CV
                <ExternalLink className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Custom animation keyframes */}
      <style jsx>{`
        @keyframes float {
          0%,
          100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-10px);
          }
        }
      `}</style>
    </section>
  );
}
