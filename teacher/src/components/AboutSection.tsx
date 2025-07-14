"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Heart,
  Star,
  Award,
  Users,
  BookOpen,
  GraduationCap,
  Globe,
  Target,
  Coffee,
  Music,
  Camera,
  Palette,
  Plane,
  Book,
  Sparkles,
  ChevronRight,
  Download,
  MapPin,
  Calendar,
  TrendingUp,
  Zap,
} from "lucide-react";
import { cn, fadeInUp, staggerChildren } from "@/utils/cn";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const achievements = [
  {
    icon: GraduationCap,
    title: "Master's in TESOL",
    subtitle: "University of Cambridge",
    description:
      "Specialized in Teaching English to Speakers of Other Languages",
    year: "2020",
    color: "from-blue-500 to-purple-600",
  },
  {
    icon: Award,
    title: "CELTA Certification",
    subtitle: "Cambridge Assessment",
    description:
      "Certificate in Teaching English to Speakers of Other Languages",
    year: "2018",
    color: "from-purple-500 to-pink-600",
  },
  {
    icon: Star,
    title: "Excellence in Teaching Award",
    subtitle: "International Language Academy",
    description: "Recognized for outstanding student outcomes and innovation",
    year: "2023",
    color: "from-pink-500 to-red-500",
  },
  {
    icon: Globe,
    title: "25+ Countries Experience",
    subtitle: "Global Teaching Portfolio",
    description: "Taught students from diverse cultural backgrounds worldwide",
    year: "2017-2025",
    color: "from-cyan-500 to-blue-500",
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
    icon: BookOpen,
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

const interests = [
  { name: "Reading", icon: Book, color: "from-blue-500 to-blue-600" },
  { name: "Travel", icon: Plane, color: "from-purple-500 to-purple-600" },
  { name: "Photography", icon: Camera, color: "from-pink-500 to-pink-600" },
  { name: "Music", icon: Music, color: "from-cyan-500 to-cyan-600" },
  { name: "Coffee", icon: Coffee, color: "from-amber-500 to-orange-500" },
  { name: "Art", icon: Palette, color: "from-emerald-500 to-teal-500" },
];

const skills = [
  { name: "IELTS Preparation", level: 98, category: "Specialization" },
  { name: "Business English", level: 95, category: "Specialization" },
  { name: "Conversation Training", level: 97, category: "Core Skills" },
  { name: "Curriculum Development", level: 92, category: "Professional" },
  { name: "Online Teaching", level: 96, category: "Technology" },
  { name: "Cross-cultural Communication", level: 94, category: "Professional" },
];

export default function AboutSection() {
  const [activeTab, setActiveTab] = useState("story");
  const [counters, setCounters] = useState({
    students: 0,
    years: 0,
    rating: 0,
    success: 0,
  });
  const [isVisible, setIsVisible] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);
  const heroRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const achievementsRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // Fixed positions for particles to avoid hydration mismatch
  const particlePositions = [
    { left: 10, top: 20 },
    { left: 85, top: 15 },
    { left: 25, top: 75 },
    { left: 70, top: 85 },
    { left: 45, top: 30 },
    { left: 90, top: 60 },
    { left: 15, top: 55 },
    { left: 60, top: 10 },
    { left: 35, top: 90 },
    { left: 80, top: 45 },
    { left: 5, top: 80 },
    { left: 95, top: 25 },
    { left: 50, top: 70 },
    { left: 20, top: 40 },
    { left: 75, top: 20 },
  ];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isInView) return;

    const ctx = gsap.context(() => {
      // Hero section animation
      gsap.fromTo(
        heroRef.current,
        {
          opacity: 0,
          y: 100,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Image parallax and reveal
      gsap.fromTo(
        imageRef.current,
        {
          opacity: 0,
          scale: 0.8,
          rotateY: -15,
        },
        {
          opacity: 1,
          scale: 1,
          rotateY: 0,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 80%",
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

          gsap.to(counterObj, {
            value: stat.value,
            duration: 2,
            ease: "power2.out",
            delay: index * 0.2,
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

      // Achievements stagger animation
      const achievementCards =
        achievementsRef.current?.querySelectorAll(".achievement-card");
      if (achievementCards) {
        gsap.fromTo(
          achievementCards,
          {
            opacity: 0,
            y: 80,
            scale: 0.9,
            rotateX: -10,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotateX: 0,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.15,
            scrollTrigger: {
              trigger: achievementsRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Skills progress bars animation
      const skillBars = skillsRef.current?.querySelectorAll(".skill-bar");
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
                start: "top 80%",
                toggleActions: "play none none none",
              },
            }
          );
        });
      }

      // Floating elements
      gsap.to(".floating-card", {
        y: -15,
        duration: 3,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.5,
      });

      // Parallax background elements
      gsap.to(".parallax-bg", {
        yPercent: -30,
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
  }, [isInView]);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-20 lg:py-32 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="parallax-bg absolute top-20 left-20 w-96 h-96 rounded-full bg-gradient-to-r from-blue-400/20 to-purple-400/20 blur-3xl" />
        <div className="parallax-bg absolute bottom-40 right-20 w-80 h-80 rounded-full bg-gradient-to-r from-purple-400/20 to-pink-400/20 blur-3xl" />
        <div className="parallax-bg absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-gradient-to-r from-cyan-400/10 to-blue-400/10 blur-3xl" />

        {/* Floating particles */}
        {isMounted &&
          particlePositions.map((position, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-gradient-to-r from-blue-400/30 to-purple-400/30 rounded-full floating-card"
              style={{
                left: `${position.left}%`,
                top: `${position.top}%`,
                animationDelay: `${i * 0.3}s`,
              }}
            />
          ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          ref={heroRef}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={staggerChildren}
          className="text-center mb-20"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center px-6 py-3 rounded-full bg-white/80 backdrop-blur-sm border border-blue-200/50 text-blue-600 text-sm font-semibold mb-8 shadow-lg"
          >
            <Heart className="w-5 h-5 mr-2" />
            Get to Know Me
            <Sparkles className="w-4 h-4 ml-2" />
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6"
          >
            About{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Sarah
            </span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            Passionate educator with a mission to make English learning
            enjoyable, effective, and accessible for students of all backgrounds
            and skill levels around the world.
          </motion.p>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-20 items-start mb-20">
          {/* Left Column - Profile & Story */}
          <div className="space-y-12">
            {/* Profile Image */}
            <motion.div ref={imageRef} className="relative perspective-1000">
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-600 rounded-3xl blur-2xl opacity-20 group-hover:opacity-30 transition-opacity duration-500" />
                <div className="relative w-full aspect-[4/5] max-w-md mx-auto bg-gradient-to-br from-white/90 to-blue-50/90 rounded-3xl overflow-hidden backdrop-blur-sm border border-white/20 shadow-2xl magnetic-element floating-card">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10" />
                  <div className="flex items-center justify-center h-full">
                    <div className="text-center">
                      <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center shadow-2xl">
                        <span className="text-5xl font-bold text-white">
                          SJ
                        </span>
                      </div>
                      <h3 className="text-2xl font-bold text-gray-800 mb-2">
                        Sarah Johnson
                      </h3>
                      <p className="text-blue-600 font-semibold mb-4">
                        English Teacher
                      </p>
                      <div className="flex items-center justify-center text-gray-600 text-sm mb-2">
                        <MapPin className="w-4 h-4 mr-1" />
                        London, UK
                      </div>
                      <div className="flex items-center justify-center text-gray-600 text-sm">
                        <Calendar className="w-4 h-4 mr-1" />
                        8+ Years Experience
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Tab Navigation */}
            <div className="flex bg-white/80 backdrop-blur-sm rounded-2xl p-2 shadow-lg border border-white/20">
              {[
                { id: "story", label: "My Story", icon: Book },
                { id: "interests", label: "Interests", icon: Heart },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={cn(
                    "flex-1 flex items-center justify-center px-6 py-3 rounded-xl font-semibold transition-all duration-300",
                    activeTab === tab.id
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg"
                      : "text-gray-600 hover:text-gray-800 hover:bg-gray-50"
                  )}
                >
                  <tab.icon className="w-5 h-5 mr-2" />
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Tab Content */}
            <div className="min-h-[300px]">
              {activeTab === "story" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 magnetic-element">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center">
                      <Sparkles className="w-6 h-6 mr-3 text-blue-500" />
                      My Teaching Philosophy
                    </h3>
                    <p className="text-gray-700 leading-relaxed mb-6">
                      I believe that learning English should be an exciting
                      journey, not a chore. My approach combines proven teaching
                      methodologies with innovative techniques that make
                      learning engaging, practical, and fun.
                    </p>
                    <p className="text-gray-700 leading-relaxed">
                      Every student is unique, and I tailor my lessons to match
                      individual learning styles, goals, and interests. Whether
                      you're preparing for IELTS, advancing your career with
                      Business English, or simply wanting to communicate with
                      confidence, I'm here to guide you every step of the way.
                    </p>
                  </div>
                </motion.div>
              )}

              {activeTab === "interests" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                      <Heart className="w-6 h-6 mr-3 text-pink-500" />
                      Personal Interests
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      {interests.map((interest, index) => (
                        <motion.div
                          key={interest.name}
                          initial={{ opacity: 0, scale: 0.8 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: index * 0.1 }}
                          className={cn(
                            "flex items-center gap-3 px-4 py-3 rounded-xl text-white shadow-lg magnetic-element",
                            `bg-gradient-to-r ${interest.color}`,
                            "hover:shadow-xl transition-shadow duration-300"
                          )}
                        >
                          <interest.icon className="w-5 h-5" />
                          <span className="font-medium">{interest.name}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>

          {/* Right Column - Stats & Achievements */}
          <div className="space-y-12">
            {/* Stats */}
            <div ref={statsRef} className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={stat.label}
                  className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 text-center magnetic-element floating-card group hover:shadow-xl transition-all duration-300"
                >
                  <div
                    className={cn(
                      "w-16 h-16 mx-auto mb-4 rounded-2xl flex items-center justify-center",
                      `bg-gradient-to-r ${stat.color}`,
                      "shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                    )}
                  >
                    <stat.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="stat-counter text-3xl font-bold text-gray-900 mb-2">
                    0{stat.suffix}
                  </div>
                  <div className="text-sm font-semibold text-gray-600 mb-1">
                    {stat.label}
                  </div>
                  <div className="text-xs text-gray-500">
                    {stat.description}
                  </div>
                </div>
              ))}
            </div>

            {/* Achievements */}
            <div ref={achievementsRef} className="space-y-6">
              <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
                <Award className="w-6 h-6 mr-3 text-yellow-500" />
                Achievements & Qualifications
              </h3>

              {achievements.map((achievement, index) => (
                <div
                  key={achievement.title}
                  className="achievement-card bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 magnetic-element group hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={cn(
                        "w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0",
                        `bg-gradient-to-r ${achievement.color}`,
                        "shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                      )}
                    >
                      <achievement.icon className="w-7 h-7 text-white" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h4 className="text-lg font-bold text-gray-900">
                          {achievement.title}
                        </h4>
                        <span className="text-sm font-semibold text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
                          {achievement.year}
                        </span>
                      </div>
                      <p className="text-blue-600 font-semibold mb-2">
                        {achievement.subtitle}
                      </p>
                      <p className="text-gray-600 text-sm leading-relaxed">
                        {achievement.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Skills Section */}
        <div
          ref={skillsRef}
          className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-xl border border-white/20"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center">
              <TrendingUp className="w-8 h-8 mr-3 text-blue-500" />
              Core Expertise
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Specialized skills and competencies developed through years of
              teaching experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div key={skill.name} className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold text-gray-900">
                    {skill.name}
                  </span>
                  <span className="text-sm font-bold text-blue-600">
                    {skill.level}%
                  </span>
                </div>
                <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className="skill-bar h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transition-all duration-300"
                    style={{ width: "0%" }}
                  />
                </div>
                <span className="text-sm text-gray-500 capitalize">
                  {skill.category}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-20">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            transition={{ delay: 1.5 }}
            className="bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 rounded-3xl p-12 text-white shadow-2xl"
          >
            <Zap className="w-16 h-16 mx-auto mb-6 text-yellow-300" />
            <h3 className="text-3xl font-bold mb-4">
              Ready to Start Your English Journey?
            </h3>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Join hundreds of successful students who have transformed their
              English skills with personalized, engaging lessons designed for
              real-world success.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="magnetic-element px-8 py-4 bg-white text-blue-600 rounded-full font-bold hover:shadow-xl transition-all duration-300 flex items-center justify-center">
                <Calendar className="w-5 h-5 mr-2" />
                Book a Free Consultation
                <ChevronRight className="w-5 h-5 ml-2" />
              </button>
              <button className="magnetic-element px-8 py-4 border-2 border-white text-white rounded-full font-bold hover:bg-white hover:text-blue-600 transition-all duration-300 flex items-center justify-center">
                <Download className="w-5 h-5 mr-2" />
                Download CV
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
