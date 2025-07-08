"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Camera, Award, Heart, Lightbulb, Target, Users } from "lucide-react";
import { gsap } from "gsap";

const AboutSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  // GSAP Animations
  useEffect(() => {
    if (
      isInView &&
      contentRef.current &&
      imageRef.current &&
      skillsRef.current
    ) {
      const tl = gsap.timeline();

      // Image animation
      tl.fromTo(
        imageRef.current,
        { x: -100, opacity: 0, scale: 0.8 },
        { x: 0, opacity: 1, scale: 1, duration: 1.2, ease: "power3.out" }
      )
        // Content animation
        .fromTo(
          ".about-title",
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
          "-=0.8"
        )
        .fromTo(
          ".about-text",
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power3.out" },
          "-=0.5"
        )
        // Skills animation
        .fromTo(
          ".skill-item",
          { x: 50, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: "power3.out" },
          "-=0.3"
        )
        // Values animation
        .fromTo(
          ".value-item",
          { y: 30, opacity: 0, scale: 0.9 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "back.out(1.7)",
          },
          "-=0.4"
        );
    }
  }, [isInView]);

  const skills = [
    { name: "Portrait Photography", level: 95 },
    { name: "Landscape Photography", level: 90 },
    { name: "Wedding Photography", level: 88 },
    { name: "Commercial Photography", level: 92 },
    { name: "Photo Editing", level: 94 },
    { name: "Studio Lighting", level: 89 },
  ];

  const values = [
    {
      icon: Heart,
      title: "Passion",
      description:
        "Every shot is taken with genuine love for the craft and dedication to excellence.",
    },
    {
      icon: Lightbulb,
      title: "Creativity",
      description:
        "Bringing unique perspectives and innovative approaches to every project.",
    },
    {
      icon: Target,
      title: "Precision",
      description:
        "Attention to detail and technical perfection in every capture.",
    },
    {
      icon: Users,
      title: "Connection",
      description:
        "Building meaningful relationships with clients to capture authentic moments.",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-20 lg:py-32 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-950 to-black"></div>
      <motion.div
        style={{ y, opacity }}
        className="absolute top-20 right-20 w-64 h-64 bg-accent-500/5 rounded-full blur-3xl"
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [-30, 30]) }}
        className="absolute bottom-20 left-20 w-48 h-48 bg-gold-500/5 rounded-full blur-2xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image Section */}
          <motion.div ref={imageRef} className="relative">
            <div className="relative">
              {/* Main Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                <img
                  src="/images/about-portrait.jpg"
                  alt="Alex Morgan - Professional Photographer"
                  className="w-full aspect-[4/5] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              </div>

              {/* Floating Stats Card */}
              <motion.div
                initial={{ scale: 0, rotate: -10 }}
                animate={isInView ? { scale: 1, rotate: 0 } : {}}
                transition={{ delay: 1, duration: 0.8, ease: "backOut" }}
                className="absolute -bottom-6 -right-6 bg-dark-800/90 backdrop-blur-xl border border-white/10 rounded-xl p-6 glass-effect"
              >
                <div className="flex items-center space-x-4">
                  <div className="bg-accent-500/20 p-3 rounded-lg">
                    <Award className="w-6 h-6 text-accent-500" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-white">8+</p>
                    <p className="text-sm text-gray-400">Years Experience</p>
                  </div>
                </div>
              </motion.div>

              {/* Decorative Elements */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute -top-4 -left-4 w-8 h-8 border-2 border-accent-500/30 rounded-full"
              />
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="absolute top-6 right-6 w-4 h-4 bg-gold-500/60 rounded-full blur-sm"
              />
            </div>
          </motion.div>

          {/* Content Section */}
          <div ref={contentRef} className="space-y-8">
            {/* Header */}
            <div className="space-y-4">
              <motion.div className="about-title">
                <span className="text-accent-500 font-semibold text-lg">
                  About Me
                </span>
                <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mt-2">
                  Crafting Visual
                  <span className="text-gradient block">
                    Stories Since 2016
                  </span>
                </h2>
              </motion.div>

              <div className="space-y-6 text-gray-300 leading-relaxed">
                <p className="about-text text-lg">
                  Hello! I'm Alex Morgan, a passionate photographer based in New
                  York with over 8 years of experience capturing life's most
                  precious moments. My journey began with a simple love for
                  storytelling through the lens.
                </p>
                <p className="about-text">
                  Specializing in portrait, landscape, and commercial
                  photography, I believe every image should evoke emotion and
                  tell a unique story. My approach combines technical expertise
                  with creative vision to deliver stunning results that exceed
                  expectations.
                </p>
                <p className="about-text">
                  When I'm not behind the camera, you'll find me exploring new
                  locations, studying light, and continuously learning new
                  techniques to enhance my craft.
                </p>
              </div>
            </div>

            {/* Skills Section */}
            <div ref={skillsRef} className="space-y-6">
              <h3 className="text-2xl font-display font-semibold text-white">
                Expertise
              </h3>
              <div className="space-y-4">
                {skills.map((skill, index) => (
                  <div key={skill.name} className="skill-item">
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-white font-medium">
                        {skill.name}
                      </span>
                      <span className="text-accent-400 font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-dark-700 rounded-full h-2 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{
                          delay: 1.5 + index * 0.1,
                          duration: 1,
                          ease: "easeOut",
                        }}
                        className="h-full bg-gradient-to-r from-accent-500 to-gold-500 rounded-full relative"
                      >
                        <div className="absolute inset-0 bg-white/20 animate-pulse rounded-full"></div>
                      </motion.div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Values Section */}
        <div className="mt-24 lg:mt-32">
          <div className="text-center mb-16">
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 2, duration: 0.8 }}
            >
              <span className="text-accent-500 font-semibold text-lg">
                My Values
              </span>
              <h3 className="text-3xl lg:text-4xl font-display font-bold text-white mt-2">
                What Drives My{" "}
                <span className="text-gradient">Photography</span>
              </h3>
            </motion.div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                className="value-item group text-center"
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="relative mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent-500/20 to-gold-500/20 rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300">
                    <value.icon className="w-8 h-8 text-accent-500 group-hover:text-gold-500 transition-colors duration-300" />
                  </div>
                  <div className="absolute inset-0 w-16 h-16 mx-auto bg-accent-500/10 rounded-2xl blur-xl group-hover:blur-2xl transition-all duration-300"></div>
                </div>
                <h4 className="text-xl font-display font-semibold text-white mb-3 group-hover:text-gradient transition-colors duration-300">
                  {value.title}
                </h4>
                <p className="text-gray-400 leading-relaxed group-hover:text-gray-300 transition-colors duration-300">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 2.5, duration: 0.8 }}
          className="mt-24 text-center"
        >
          <div className="bg-gradient-to-r from-dark-800/50 to-dark-700/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 lg:p-12 glass-effect">
            <h3 className="text-2xl lg:text-3xl font-display font-bold text-white mb-4">
              Ready to Create Something Amazing?
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's collaborate to bring your vision to life. Whether it's a
              portrait session, wedding, or commercial project, I'm here to
              capture your story.
            </p>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                const element = document.querySelector("#contact");
                if (element) element.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-8 py-4 bg-accent-500 text-white rounded-lg font-semibold text-lg hover-glow transition-all duration-300 group"
            >
              <span className="flex items-center">
                Let's Work Together
                <Camera className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
              </span>
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
