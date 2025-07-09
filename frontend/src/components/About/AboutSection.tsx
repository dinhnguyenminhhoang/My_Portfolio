"use client";

import { useRef, useState, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  User,
  Code,
  Coffee,
  Award,
  Calendar,
  MapPin,
  Heart,
  Lightbulb,
  Rocket,
  Star,
  Zap,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface AboutSectionProps {
  className?: string;
}

const stats = [
  { icon: Code, value: "50+", label: "Projects Completed" },
  { icon: Coffee, value: "1000+", label: "Cups of Coffee" },
  { icon: Award, value: "15+", label: "Awards Won" },
  { icon: Calendar, value: "3+", label: "Years Experience" },
];

const interests = [
  {
    icon: Code,
    title: "Clean Code",
    description: "Writing maintainable and scalable code",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description: "Exploring new technologies and solutions",
  },
  {
    icon: Heart,
    title: "User Experience",
    description: "Creating delightful user interactions",
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Optimizing for speed and efficiency",
  },
];

export default function AboutSection({ className = "" }: AboutSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const interestsRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const [sparkles, setSparkles] = useState<
    Array<{ left: string; top: string; delay: string }>
  >([]);

  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // Generate sparkles only on client side
  useEffect(() => {
    const generatedSparkles = [...Array(8)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 2}s`,
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

      // Content animation
      tl.fromTo(
        contentRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" },
        "-=0.5"
      );

      // Image animation
      tl.fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.8, rotateY: 45 },
        { opacity: 1, scale: 1, rotateY: 0, duration: 1, ease: "power2.out" },
        "-=0.8"
      );

      // Stats animation
      tl.fromTo(
        ".stat-item",
        { opacity: 0, y: 20, scale: 0.8 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: "back.out(1.7)",
          stagger: 0.1,
        },
        "-=0.4"
      );

      // Interests animation
      tl.fromTo(
        ".interest-item",
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.1,
        },
        "-=0.3"
      );

      // Floating animation for profile image
      gsap.to(imageRef.current, {
        y: -10,
        duration: 3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Sparkle animation
      gsap.to(".about-sparkle", {
        scale: "random(0.5, 1.5)",
        opacity: "random(0.3, 1)",
        rotation: "random(-180, 180)",
        duration: "random(2, 4)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.3,
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="about"
      ref={sectionRef}
      className={`relative py-20 lg:py-32 overflow-hidden ${className}`}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        {sparkles.map((sparkle, i) => (
          <div
            key={i}
            className="about-sparkle absolute"
            style={{
              left: sparkle.left,
              top: sparkle.top,
              animationDelay: sparkle.delay,
            }}
          >
            <Star className="w-3 h-3 text-purple-400/30" />
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.div
            ref={titleRef}
            className="inline-flex items-center space-x-2 px-4 py-2 bg-purple-500/10 backdrop-blur-sm rounded-full border border-purple-500/20 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <User className="w-5 h-5 text-purple-400" />
            <span className="text-purple-300 font-medium">About Me</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
              Passionate Developer
            </span>
          </h2>

          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Building tomorrow's digital experiences with cutting-edge
            technologies
          </p>
        </div>

        <div ref={ref} className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div ref={contentRef} className="space-y-8">
            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-white mb-4">
                Hello! I'm John Doe
              </h3>

              <div className="space-y-4 text-white/80 leading-relaxed">
                <p>
                  I'm a passionate frontend developer with over 3 years of
                  experience creating exceptional digital experiences. My
                  journey started with a curiosity about how websites work, and
                  it has evolved into a deep passion for crafting user-centric
                  applications.
                </p>

                <p>
                  I specialize in modern JavaScript frameworks, with expertise
                  in React, Next.js, and TypeScript. I believe in writing clean,
                  maintainable code and following best practices to deliver
                  high-quality solutions.
                </p>

                <p>
                  When I'm not coding, you can find me exploring new
                  technologies, contributing to open-source projects, or sharing
                  knowledge with the developer community through blog posts and
                  tutorials.
                </p>
              </div>

              <div className="flex items-center space-x-6 text-white/60">
                <div className="flex items-center space-x-2">
                  <MapPin className="w-4 h-4" />
                  <span>San Francisco, CA</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Zap className="w-4 h-4" />
                  <span>Available for work</span>
                </div>
              </div>
            </div>

            {/* Stats */}
            <div ref={statsRef} className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="stat-item group p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-purple-500/30 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="flex items-center space-x-3 mb-2">
                    <div className="p-2 bg-purple-500/20 rounded-lg">
                      <stat.icon className="w-5 h-5 text-purple-400" />
                    </div>
                    <div className="text-2xl font-bold text-white">
                      {stat.value}
                    </div>
                  </div>
                  <div className="text-white/70 font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Profile Image & Interests */}
          <div className="space-y-8">
            {/* Profile Image */}
            <div className="relative mx-auto lg:mx-0 w-80 h-80">
              <div
                ref={imageRef}
                className="relative w-full h-full rounded-2xl overflow-hidden border-2 border-purple-500/20"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-blue-500/20" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-48 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                    <User className="w-24 h-24 text-white" />
                  </div>
                </div>

                {/* Floating elements */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-purple-500/30 rounded-full animate-pulse" />
                <div
                  className="absolute bottom-4 left-4 w-6 h-6 bg-blue-500/30 rounded-full animate-pulse"
                  style={{ animationDelay: "0.5s" }}
                />
                <div
                  className="absolute top-1/2 left-2 w-4 h-4 bg-cyan-500/30 rounded-full animate-pulse"
                  style={{ animationDelay: "1s" }}
                />
              </div>

              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10 rounded-2xl blur-xl" />
            </div>

            {/* Interests */}
            <div ref={interestsRef} className="space-y-4">
              <h4 className="text-xl font-bold text-white mb-4">What I Love</h4>
              {interests.map((interest, index) => (
                <motion.div
                  key={interest.title}
                  className="interest-item group flex items-start space-x-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-purple-500/30 transition-all duration-300"
                  whileHover={{ scale: 1.02 }}
                >
                  <div className="p-2 bg-purple-500/20 rounded-lg group-hover:bg-purple-500/30 transition-colors">
                    <interest.icon className="w-5 h-5 text-purple-400" />
                  </div>
                  <div>
                    <h5 className="font-semibold text-white group-hover:text-purple-300 transition-colors">
                      {interest.title}
                    </h5>
                    <p className="text-white/70 text-sm">
                      {interest.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
