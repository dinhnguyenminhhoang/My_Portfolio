"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { gsap } from "gsap";
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
} from "lucide-react";
import { cn, fadeInUp, staggerChildren } from "@/utils/cn";

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
      "Trained 200+ executives globally",
      "Designed corporate training modules",
      "Improved team communication by 85%",
      "Established partnerships in Asia-Pacific",
    ],
    technologies: [
      "Corporate Training",
      "Cross-cultural Communication",
      "Program Design",
      "Remote Teaching",
    ],
    color: "from-purple-500 to-pink-500",
    icon: Globe,
    featured: false,
  },
  {
    id: 4,
    type: "certification",
    company: "TESOL International Association",
    position: "Advanced TESOL Certification",
    location: "Alexandria, VA",
    period: "2017",
    duration: "6 months",
    description:
      "Comprehensive certification program covering advanced teaching methodologies, assessment techniques, and technology integration.",
    achievements: [
      "Top 5% of certification candidates",
      "Specialized in Technology-Enhanced Learning",
      "Completed 120 hours of practicum",
      "Certified in multiple teaching methodologies",
    ],
    technologies: [
      "TESOL",
      "Assessment Design",
      "Technology Integration",
      "Methodology",
    ],
    color: "from-orange-500 to-red-500",
    icon: Award,
    featured: false,
  },
  {
    id: 5,
    type: "work",
    company: "British Council Vietnam",
    position: "English Instructor",
    location: "Ho Chi Minh City, Vietnam",
    period: "2015 - 2017",
    duration: "2 years",
    description:
      "Taught English to diverse student groups including children, teenagers, and adults in both group and individual settings.",
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
    value: "500+",
    label: "Students Taught",
    description: "Across 25+ countries",
  },
  {
    icon: Clock,
    value: "8+",
    label: "Years Experience",
    description: "In English education",
  },
  {
    icon: Star,
    value: "4.9/5",
    label: "Average Rating",
    description: "From student feedback",
  },
  {
    icon: Target,
    value: "98%",
    label: "Success Rate",
    description: "Goal achievement",
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

export default function ExperienceSection() {
  const [activeExperience, setActiveExperience] = useState(experiences[0].id);
  const [visibleStats, setVisibleStats] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  useEffect(() => {
    if (!isInView) return;

    const ctx = gsap.context(() => {
      // Timeline animation
      const timelineItems =
        timelineRef.current?.querySelectorAll(".timeline-item");
      if (timelineItems) {
        gsap.fromTo(
          timelineItems,
          { opacity: 0, x: -50, scale: 0.9 },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.8,
            ease: "power2.out",
            stagger: 0.2,
            scrollTrigger: {
              trigger: timelineRef.current,
              start: "top 80%",
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
          },
        }
      );

      // Skills animation
      const skillBars = skillsRef.current?.querySelectorAll(".skill-progress");
      if (skillBars) {
        skillBars.forEach((bar, index) => {
          const skill = skills[index];
          gsap.fromTo(
            bar,
            { scaleX: 0 },
            {
              scaleX: skill.level / 100,
              duration: 1.5,
              delay: index * 0.1,
              ease: "power2.out",
              scrollTrigger: {
                trigger: skillsRef.current,
                start: "top 85%",
              },
            }
          );
        });
      }

      // Stats counter animation
      if (visibleStats) {
        const statNumbers = document.querySelectorAll(".stat-number");
        statNumbers.forEach((stat) => {
          const finalValue = stat.textContent || "0";
          const numericValue = parseInt(finalValue.replace(/\D/g, ""));

          gsap.fromTo(
            stat,
            { textContent: 0 },
            {
              textContent: numericValue,
              duration: 2,
              ease: "power2.out",
              snap: { textContent: 1 },
              onUpdate: function () {
                const current = Math.round(
                  gsap.getProperty(this.targets()[0], "textContent") as number
                );
                if (finalValue.includes("+")) {
                  stat.textContent = current + "+";
                } else if (finalValue.includes("/5")) {
                  stat.textContent = (current / 10).toFixed(1) + "/5";
                } else if (finalValue.includes("%")) {
                  stat.textContent = current + "%";
                } else {
                  stat.textContent = current.toString();
                }
              },
            }
          );
        });
      }

      // Floating animation for experience cards
      gsap.to(".floating-experience", {
        y: -5,
        duration: 2,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.3,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [isInView, visibleStats]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisibleStats(true);
        }
      },
      { threshold: 0.5 }
    );

    const statsElement = document.querySelector(".stats-container");
    if (statsElement) {
      observer.observe(statsElement);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="experience"
      className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-white to-gray-50 dark:from-gray-800 dark:to-gray-900"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 right-20 w-96 h-96 rounded-full bg-gradient-to-r from-blue-400/10 to-purple-400/10 blur-3xl" />
        <div className="absolute bottom-40 left-20 w-80 h-80 rounded-full bg-gradient-to-r from-purple-400/10 to-pink-400/10 blur-3xl" />

        {/* Animated grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={staggerChildren}
          className="text-center mb-20"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-600 dark:text-blue-400 text-sm font-semibold mb-8"
          >
            <TrendingUp className="w-4 h-4 mr-2" />
            Professional Journey
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="text-5xl lg:text-7xl font-black text-gray-900 dark:text-white mb-8"
          >
            My Teaching{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Evolution
            </span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            8+ years of dedicated experience in English education, from
            classroom teaching to global corporate training, shaping the future
            of language learning.
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={staggerChildren}
          className="stats-container grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              variants={fadeInUp}
              className="text-center group"
            >
              <div className="inline-flex p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                <stat.icon className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="stat-number text-4xl font-black text-gray-900 dark:text-white mb-2">
                {stat.value}
              </div>
              <div className="font-semibold text-gray-900 dark:text-white mb-1">
                {stat.label}
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {stat.description}
              </div>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Timeline Column */}
          <div className="lg:col-span-2">
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              className="text-3xl font-bold text-gray-900 dark:text-white mb-12"
            >
              Professional Timeline
            </motion.h3>

            <div ref={timelineRef} className="relative">
              {/* Timeline Line */}
              <div className="timeline-line absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 to-purple-500 origin-top" />

              <div className="space-y-12">
                {experiences.map((exp, index) => (
                  <motion.div
                    key={exp.id}
                    className={cn(
                      "timeline-item floating-experience relative pl-20 cursor-pointer transition-all duration-300",
                      activeExperience === exp.id
                        ? "scale-105"
                        : "hover:scale-102"
                    )}
                    onClick={() => setActiveExperience(exp.id)}
                  >
                    {/* Timeline Dot */}
                    <div
                      className={cn(
                        "absolute left-6 w-4 h-4 rounded-full border-4 border-white dark:border-gray-800 transition-all duration-300",
                        activeExperience === exp.id
                          ? `bg-gradient-to-r ${exp.color} scale-150 shadow-lg`
                          : "bg-gray-300 dark:bg-gray-600"
                      )}
                    />

                    {/* Experience Card */}
                    <div
                      className={cn(
                        "bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg border transition-all duration-300 relative overflow-hidden",
                        activeExperience === exp.id
                          ? "border-blue-300 dark:border-blue-600 shadow-2xl shadow-blue-500/20"
                          : "border-gray-200/50 dark:border-gray-700/50 hover:border-blue-200 dark:hover:border-blue-700"
                      )}
                    >
                      {/* Featured Badge */}
                      {exp.featured && (
                        <div className="absolute top-4 right-4">
                          <div className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold">
                            Current Role
                          </div>
                        </div>
                      )}

                      {/* Header */}
                      <div className="flex items-start gap-4 mb-6">
                        <div
                          className={cn(
                            "p-3 rounded-2xl bg-gradient-to-r",
                            exp.color
                          )}
                        >
                          <exp.icon className="w-6 h-6 text-white" />
                        </div>

                        <div className="flex-1">
                          <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-1">
                            {exp.position}
                          </h4>
                          <p className="text-blue-600 dark:text-blue-400 font-semibold mb-2">
                            {exp.company}
                          </p>

                          <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400">
                            <div className="flex items-center gap-1">
                              <MapPin className="w-4 h-4" />
                              {exp.location}
                            </div>
                            <div className="flex items-center gap-1">
                              <Calendar className="w-4 h-4" />
                              {exp.period}
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="w-4 h-4" />
                              {exp.duration}
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                        {exp.description}
                      </p>

                      {/* Achievements */}
                      <div className="mb-6">
                        <h5 className="font-semibold text-gray-900 dark:text-white mb-3 flex items-center gap-2">
                          <Star className="w-4 h-4 text-yellow-500" />
                          Key Achievements
                        </h5>
                        <ul className="space-y-2">
                          {exp.achievements.map((achievement, idx) => (
                            <li
                              key={idx}
                              className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-300"
                            >
                              <ChevronRight className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h5 className="font-semibold text-gray-900 dark:text-white mb-3">
                          Expertise Areas
                        </h5>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, idx) => (
                            <span
                              key={idx}
                              className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-full text-xs font-medium"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Skills Sidebar */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
              transition={{ delay: 0.5 }}
              className="sticky top-8"
            >
              <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8">
                Core Skills
              </h3>

              <div ref={skillsRef} className="space-y-8">
                {skills.map((skill, index) => (
                  <div key={skill.name}>
                    <div className="flex justify-between items-center mb-3">
                      <div>
                        <span className="font-semibold text-gray-900 dark:text-white">
                          {skill.name}
                        </span>
                        <span className="block text-xs text-blue-600 dark:text-blue-400 font-medium">
                          {skill.category}
                        </span>
                      </div>
                      <span className="text-lg font-bold text-gray-900 dark:text-white">
                        {skill.level}%
                      </span>
                    </div>

                    <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div className="skill-progress h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full origin-left transform scale-x-0" />
                    </div>
                  </div>
                ))}
              </div>

              {/* Download CV Button */}
              <motion.button
                className="w-full mt-12 px-6 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-semibold flex items-center justify-center gap-2 hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
              >
                <ExternalLink className="w-5 h-5" />
                Download CV
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
