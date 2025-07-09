"use client";

import { useRef, useState, useMemo, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Code2,
  Palette,
  Database,
  Wrench,
  Zap,
  Star,
  TrendingUp,
  Award,
  ChevronRight,
  ExternalLink,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface SkillsSectionProps {
  className?: string;
}

const skillCategories = [
  {
    id: "frontend",
    title: "Frontend",
    icon: Code2,
    color: "from-purple-500 to-blue-500",
    skills: [
      { name: "React", level: 95, experience: "3+ years" },
      { name: "Next.js", level: 90, experience: "2+ years" },
      { name: "TypeScript", level: 88, experience: "2+ years" },
      { name: "JavaScript", level: 92, experience: "3+ years" },
      { name: "HTML/CSS", level: 95, experience: "3+ years" },
      { name: "Tailwind CSS", level: 90, experience: "2+ years" },
    ],
  },
  {
    id: "design",
    title: "Design & UX",
    icon: Palette,
    color: "from-pink-500 to-purple-500",
    skills: [
      { name: "Figma", level: 85, experience: "2+ years" },
      { name: "UI/UX Design", level: 80, experience: "2+ years" },
      { name: "Responsive Design", level: 92, experience: "3+ years" },
      { name: "Animation", level: 88, experience: "2+ years" },
      { name: "Prototyping", level: 82, experience: "2+ years" },
    ],
  },
  {
    id: "backend",
    title: "Backend & Database",
    icon: Database,
    color: "from-green-500 to-blue-500",
    skills: [
      { name: "Node.js", level: 75, experience: "1+ years" },
      { name: "Express.js", level: 70, experience: "1+ years" },
      { name: "MongoDB", level: 72, experience: "1+ years" },
      { name: "PostgreSQL", level: 68, experience: "1+ years" },
      { name: "REST APIs", level: 80, experience: "2+ years" },
    ],
  },
  {
    id: "tools",
    title: "Tools & Technologies",
    icon: Wrench,
    color: "from-orange-500 to-red-500",
    skills: [
      { name: "Git & GitHub", level: 90, experience: "3+ years" },
      { name: "Webpack", level: 75, experience: "2+ years" },
      { name: "Docker", level: 65, experience: "1+ years" },
      { name: "AWS", level: 60, experience: "1+ years" },
      { name: "Testing", level: 78, experience: "2+ years" },
    ],
  },
];

const achievements = [
  {
    icon: Award,
    title: "Best Developer Award",
    description: "Recognized for outstanding frontend development",
    year: "2023",
  },
  {
    icon: Star,
    title: "Open Source Contributor",
    description: "Active contributor to React ecosystem",
    year: "2022-2023",
  },
  {
    icon: TrendingUp,
    title: "Performance Optimization",
    description: "Improved app performance by 60%",
    year: "2023",
  },
];

export default function SkillsSection({ className = "" }: SkillsSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [activeCategory, setActiveCategory] = useState("frontend");
  const [hoveredSkill, setHoveredSkill] = useState<string | null>(null);

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });
  const [sparkles, setSparkles] = useState<
    Array<{ id: number; left: number; top: number; animationDelay: number }>
  >([]);

  // Generate sparkles only on client side
  useEffect(() => {
    const generatedSparkles = [...Array(12)].map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      animationDelay: Math.random() * 2,
    }));
    setSparkles(generatedSparkles);
  }, []);

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

      // Category tabs animation
      tl.fromTo(
        ".category-tab",
        { opacity: 0, x: -20 },
        {
          opacity: 1,
          x: 0,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.1,
        },
        "-=0.5"
      );

      // Skills animation
      tl.fromTo(
        ".skill-item",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.05,
        },
        "-=0.3"
      );

      // Achievements animation
      tl.fromTo(
        ".achievement-item",
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: "back.out(1.7)",
          stagger: 0.1,
        },
        "-=0.4"
      );

      // Skill bar animations
      gsap.set(".skill-bar", { scaleX: 0 });

      ScrollTrigger.create({
        trigger: ".skills-grid",
        start: "top 80%",
        onEnter: () => {
          gsap.to(".skill-bar", {
            scaleX: 1,
            duration: 1.5,
            ease: "power2.out",
            stagger: 0.1,
          });
        },
      });

      // Floating particles
      gsap.to(".skill-particle", {
        y: "random(-20, 20)",
        x: "random(-20, 20)",
        rotation: "random(-180, 180)",
        duration: "random(3, 6)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.2,
      });
    },
    { scope: sectionRef }
  );

  const activeSkills =
    skillCategories.find((cat) => cat.id === activeCategory)?.skills || [];
  const activeCategoryData = skillCategories.find(
    (cat) => cat.id === activeCategory
  );

  return (
    <section
      id="skills"
      ref={sectionRef}
      className={`relative py-20 lg:py-32 overflow-hidden ${className}`}
    >
      {/* Background particles */}
      <div className="absolute inset-0 pointer-events-none">
        {sparkles.map((particle) => (
          <div
            key={particle.id}
            className="skill-particle absolute"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animationDelay: `${particle.animationDelay}s`,
            }}
          >
            <Zap className="w-2 h-2 text-purple-400/20" />
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.div
            ref={titleRef}
            className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-500/10 backdrop-blur-sm rounded-full border border-blue-500/20 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <Code2 className="w-5 h-5 text-blue-400" />
            <span className="text-blue-300 font-medium">
              Skills & Expertise
            </span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
              Technical Arsenal
            </span>
          </h2>

          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Crafting digital experiences with modern technologies and best
            practices
          </p>
        </div>

        <div ref={ref} className="space-y-12">
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {skillCategories.map((category) => (
              <motion.button
                key={category.id}
                className={`category-tab group relative px-6 py-3 rounded-full font-medium transition-all duration-300 ${
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
                  <span>{category.title}</span>
                </span>
                {activeCategory === category.id && (
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-r ${category.color} opacity-20 rounded-full blur-lg`}
                    layoutId="activeCategory"
                  />
                )}
              </motion.button>
            ))}
          </div>

          {/* Skills Grid */}
          <div className="skills-grid grid lg:grid-cols-2 gap-8">
            {/* Skills List */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-6">
                {activeCategoryData && (
                  <>
                    <div
                      className={`p-3 bg-gradient-to-r ${activeCategoryData.color} rounded-xl`}
                    >
                      <activeCategoryData.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">
                        {activeCategoryData.title}
                      </h3>
                      <p className="text-white/60">Professional expertise</p>
                    </div>
                  </>
                )}
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  {activeSkills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      className="skill-item group p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-purple-500/30 transition-all duration-300"
                      onHoverStart={() => setHoveredSkill(skill.name)}
                      onHoverEnd={() => setHoveredSkill(null)}
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-3">
                          <span className="font-semibold text-white group-hover:text-purple-300 transition-colors">
                            {skill.name}
                          </span>
                          <span className="text-xs text-white/50 bg-white/10 px-2 py-1 rounded-full">
                            {skill.experience}
                          </span>
                        </div>
                        <span className="text-purple-400 font-medium">
                          {skill.level}%
                        </span>
                      </div>

                      <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                        <div
                          className={`skill-bar h-full bg-gradient-to-r ${activeCategoryData?.color} rounded-full origin-left transform`}
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Achievements */}
            <div className="space-y-6">
              <div className="flex items-center space-x-3 mb-6">
                <div className="p-3 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl">
                  <Award className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">
                    Achievements
                  </h3>
                  <p className="text-white/60">Recognition & milestones</p>
                </div>
              </div>

              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.title}
                    className="achievement-item group p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-yellow-500/30 transition-all duration-300"
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="flex items-start space-x-4">
                      <div className="p-3 bg-yellow-500/20 rounded-lg group-hover:bg-yellow-500/30 transition-colors">
                        <achievement.icon className="w-6 h-6 text-yellow-400" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-2">
                          <h4 className="font-semibold text-white group-hover:text-yellow-300 transition-colors">
                            {achievement.title}
                          </h4>
                          <span className="text-xs text-white/50 bg-white/10 px-2 py-1 rounded-full">
                            {achievement.year}
                          </span>
                        </div>
                        <p className="text-white/70 text-sm">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA */}
              <motion.div
                className="p-6 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-xl border border-purple-500/20"
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-semibold text-white mb-2">
                      Want to collaborate?
                    </h4>
                    <p className="text-white/70 text-sm">
                      Let's build something amazing together
                    </p>
                  </div>
                  <motion.button
                    className="flex items-center space-x-2 px-4 py-2 bg-purple-500/20 hover:bg-purple-500/30 rounded-lg transition-colors"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span className="text-white font-medium">Get In Touch</span>
                    <ChevronRight className="w-4 h-4 text-purple-400" />
                  </motion.button>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Skill Visualization */}
        <div className="mt-16 text-center">
          <motion.div
            className="inline-flex items-center space-x-2 px-6 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10"
            whileHover={{ scale: 1.05 }}
          >
            <Zap className="w-5 h-5 text-purple-400" />
            <span className="text-white font-medium">
              Always learning, always growing
            </span>
            <ExternalLink className="w-4 h-4 text-purple-400" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
