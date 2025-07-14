"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { gsap } from "gsap";
import {
  GraduationCap,
  Globe,
  Heart,
  Target,
  BookOpen,
  Users,
  Award,
  Lightbulb,
  Coffee,
  Music,
} from "lucide-react";
import { cn, fadeInUp, staggerChildren } from "@/utils/cn";

const achievements = [
  {
    icon: GraduationCap,
    title: "Master's in Education",
    subtitle: "TESOL Certified",
    description: "Advanced degree in English Language Teaching",
  },
  {
    icon: Globe,
    title: "8+ Years Experience",
    subtitle: "Global Teaching",
    description: "Taught students from 25+ countries",
  },
  {
    icon: Award,
    title: "500+ Students",
    subtitle: "Success Stories",
    description: "Helped students achieve their language goals",
  },
];

const skills = [
  { name: "Conversational English", level: 98 },
  { name: "IELTS Preparation", level: 95 },
  { name: "Business English", level: 90 },
  { name: "Grammar & Writing", level: 96 },
  { name: "Pronunciation", level: 92 },
  { name: "Academic English", level: 88 },
];

const personalValues = [
  {
    icon: Heart,
    title: "Passion",
    description: "I genuinely love teaching and seeing students grow",
  },
  {
    icon: Target,
    title: "Goal-Oriented",
    description: "Every lesson is designed to bring you closer to fluency",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Using modern methods and technology for better learning",
  },
  {
    icon: Users,
    title: "Community",
    description: "Building confidence through supportive learning environment",
  },
];

const interests = [
  { icon: BookOpen, name: "Literature", color: "from-blue-500 to-purple-500" },
  { icon: Music, name: "Music", color: "from-purple-500 to-pink-500" },
  { icon: Coffee, name: "Coffee", color: "from-amber-500 to-orange-500" },
  { icon: Globe, name: "Travel", color: "from-green-500 to-blue-500" },
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  useEffect(() => {
    if (!isInView) return;

    const ctx = gsap.context(() => {
      // Animate skill bars
      const skillBars = skillsRef.current?.querySelectorAll(".skill-bar");
      if (skillBars) {
        skillBars.forEach((bar, index) => {
          const level = skills[index].level;
          gsap.fromTo(
            bar,
            { scaleX: 0 },
            {
              scaleX: level / 100,
              duration: 1.5,
              delay: index * 0.1,
              ease: "power2.out",
            }
          );
        });
      }

      // Floating animation for cards
      gsap.to(".floating-card", {
        y: -10,
        duration: 2,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.3,
      });

      // Parallax effect for background elements
      gsap.to(".parallax-element", {
        yPercent: -30,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [isInView]);

  return (
    <section
      ref={sectionRef}
      id="about"
      className="relative py-20 lg:py-32 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="parallax-element absolute top-20 left-20 w-64 h-64 rounded-full bg-gradient-to-r from-blue-400/10 to-purple-400/10 blur-3xl" />
        <div className="parallax-element absolute bottom-40 right-20 w-80 h-80 rounded-full bg-gradient-to-r from-purple-400/10 to-pink-400/10 blur-3xl" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-transparent dark:via-gray-900/50" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={staggerChildren}
          className="text-center mb-16"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium mb-6"
          >
            <Heart className="w-4 h-4 mr-2" />
            Get to Know Me
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="text-4xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6"
          >
            About{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Sarah
            </span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Passionate educator with a mission to make English learning
            enjoyable, effective, and accessible for students of all backgrounds
            and skill levels.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Story & Values */}
          <motion.div
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            variants={staggerChildren}
            className="space-y-8"
          >
            {/* Personal Story */}
            <motion.div variants={fadeInUp} className="floating-card">
              <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-gray-200/50 dark:border-gray-700/50">
                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  My Teaching Journey
                </h3>
                <div className="space-y-4 text-gray-600 dark:text-gray-300">
                  <p>
                    My passion for teaching English began during my university
                    years when I started tutoring international students. Seeing
                    their confidence grow as they mastered the language inspired
                    me to pursue a career in education.
                  </p>
                  <p>
                    Over the past 8 years, I've had the privilege of working
                    with students from diverse backgrounds - from business
                    professionals preparing for international presentations to
                    teenagers getting ready for university abroad.
                  </p>
                  <p>
                    What drives me every day is the moment when a student
                    finally grasps a difficult concept or gains the confidence
                    to speak fluently in English.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Personal Values */}
            <motion.div variants={fadeInUp}>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                My Teaching Values
              </h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {personalValues.map((value, index) => (
                  <motion.div
                    key={value.title}
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ delay: 0.8 + index * 0.1 }}
                    className="floating-card bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-200/50 dark:border-gray-700/50"
                  >
                    <div className="flex items-center mb-3">
                      <div className="p-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-lg mr-3">
                        <value.icon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                      </div>
                      <h4 className="font-semibold text-gray-900 dark:text-white">
                        {value.title}
                      </h4>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-300">
                      {value.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Personal Interests */}
            <motion.div variants={fadeInUp}>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                When I'm Not Teaching
              </h3>
              <div className="flex flex-wrap gap-3">
                {interests.map((interest, index) => (
                  <motion.div
                    key={interest.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={
                      isInView
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0.8 }
                    }
                    transition={{ delay: 1 + index * 0.1 }}
                    className={cn(
                      "flex items-center gap-2 px-4 py-2 rounded-full text-white",
                      `bg-gradient-to-r ${interest.color}`,
                      "shadow-lg hover:shadow-xl transition-shadow duration-300"
                    )}
                  >
                    <interest.icon className="w-4 h-4" />
                    <span className="text-sm font-medium">{interest.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Achievements & Skills */}
          <motion.div
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            variants={staggerChildren}
            className="space-y-8"
          >
            {/* Achievements */}
            <motion.div variants={fadeInUp}>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Achievements & Qualifications
              </h3>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={
                      isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }
                    }
                    transition={{ delay: 0.6 + index * 0.1 }}
                    className="floating-card bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200/50 dark:border-gray-700/50"
                  >
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl">
                        <achievement.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 dark:text-white">
                          {achievement.title}
                        </h4>
                        <p className="text-blue-600 dark:text-blue-400 font-medium text-sm">
                          {achievement.subtitle}
                        </p>
                        <p className="text-gray-600 dark:text-gray-300 text-sm mt-1">
                          {achievement.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Skills */}
            <motion.div variants={fadeInUp}>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Teaching Expertise
              </h3>
              <div ref={skillsRef} className="space-y-6">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ delay: 0.8 + index * 0.1 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-gray-900 dark:text-white">
                        {skill.name}
                      </span>
                      <span className="text-sm text-gray-600 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div className="skill-bar h-full bg-gradient-to-r from-blue-500 to-purple-600 rounded-full origin-left transform scale-x-0" />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
