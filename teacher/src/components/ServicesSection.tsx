"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  BookOpen,
  Users,
  Briefcase,
  Globe,
  Star,
  Clock,
  Target,
  Trophy,
  CheckCircle,
  ArrowRight,
  Zap,
  Heart,
  Award,
  TrendingUp,
  MessageCircle,
  Calendar,
  Download,
  Play,
  Sparkles,
} from "lucide-react";
import { cn, fadeInUp, staggerChildren } from "@/utils/cn";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const services = [
  {
    id: 1,
    icon: BookOpen,
    title: "IELTS Preparation",
    subtitle: "Achieve Your Target Score",
    description:
      "Comprehensive IELTS training with proven strategies, mock tests, and personalized feedback to help you achieve your target band score.",
    features: [
      "Speaking practice sessions",
      "Writing task correction",
      "Mock tests & feedback",
      "Flexible scheduling",
      "Proven track record",
    ],
    price: 80,
    duration: "per session",
    popular: true,
    color: "from-blue-500 to-blue-600",
    bgColor: "from-blue-50 to-blue-100",
    stats: { students: 200, rating: 4.9, success: 95 },
  },
  {
    id: 2,
    icon: Briefcase,
    title: "Business English",
    subtitle: "Professional Communication",
    description:
      "Master business communication, presentations, and professional vocabulary to advance your career in international environments.",
    features: [
      "Presentation skills",
      "Business vocabulary",
      "Email writing",
      "Meeting participation",
      "Industry-specific terms",
    ],
    price: 75,
    duration: "per session",
    popular: false,
    color: "from-purple-500 to-purple-600",
    bgColor: "from-purple-50 to-purple-100",
    stats: { students: 150, rating: 4.8, success: 92 },
  },
  {
    id: 3,
    icon: MessageCircle,
    title: "Conversational English",
    subtitle: "Speak with Confidence",
    description:
      "Build fluency and confidence in everyday conversations through interactive speaking practice and real-world scenarios.",
    features: [
      "Daily conversation topics",
      "Pronunciation improvement",
      "Cultural understanding",
      "Confidence building",
      "Real-world scenarios",
    ],
    price: 65,
    duration: "per session",
    popular: false,
    color: "from-green-500 to-green-600",
    bgColor: "from-green-50 to-green-100",
    stats: { students: 180, rating: 4.9, success: 88 },
  },
];

const achievements = [
  {
    icon: Users,
    value: "500+",
    label: "Students Taught",
    description: "Across 25+ countries",
  },
  {
    icon: Star,
    value: "4.9/5",
    label: "Average Rating",
    description: "Student satisfaction",
  },
  {
    icon: Trophy,
    value: "98%",
    label: "Success Rate",
    description: "Goal achievement",
  },
  {
    icon: Award,
    value: "8+",
    label: "Years Experience",
    description: "Teaching excellence",
  },
];

const testimonialQuotes = [
  "Sarah's IELTS course helped me achieve band 8.5!",
  "Perfect business English training for my career.",
  "Gained confidence in speaking within 3 months.",
  "Excellent teaching methods and materials.",
];

export default function ServicesSection() {
  const [activeService, setActiveService] = useState(1);
  const [isMounted, setIsMounted] = useState(false);

  const sectionRef = useRef<HTMLElement>(null);
  const headerRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const achievementsRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // Fixed positions for particles to avoid hydration mismatch
  const particlePositions = [
    { left: 15, top: 20 },
    { left: 85, top: 25 },
    { left: 30, top: 70 },
    { left: 70, top: 15 },
    { left: 45, top: 85 },
    { left: 90, top: 55 },
    { left: 10, top: 60 },
    { left: 60, top: 35 },
    { left: 25, top: 45 },
    { left: 80, top: 75 },
    { left: 5, top: 30 },
    { left: 95, top: 80 },
  ];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isInView || !isMounted) return;

    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        headerRef.current,
        {
          opacity: 0,
          y: 80,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: headerRef.current,
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Service cards stagger animation
      const serviceCards = cardsRef.current?.querySelectorAll(".service-card");
      if (serviceCards) {
        gsap.fromTo(
          serviceCards,
          {
            opacity: 0,
            y: 100,
            scale: 0.9,
            rotateX: -15,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            rotateX: 0,
            duration: 1,
            ease: "power3.out",
            stagger: 0.2,
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Achievement cards animation
      const achievementCards =
        achievementsRef.current?.querySelectorAll(".achievement-card");
      if (achievementCards) {
        gsap.fromTo(
          achievementCards,
          {
            opacity: 0,
            y: 60,
            scale: 0.8,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "back.out(1.7)",
            stagger: 0.15,
            scrollTrigger: {
              trigger: achievementsRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Floating animation for service cards
      gsap.to(".floating-service-card", {
        y: -10,
        duration: 3,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.5,
      });

      // Background particle effect
      gsap.to(".particle", {
        y: -20,
        x: 10,
        opacity: 0.8,
        duration: 4,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.3,
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
    }, sectionRef);

    return () => ctx.revert();
  }, [isInView, isMounted]);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <div className="parallax-bg absolute top-20 left-10 w-96 h-96 rounded-full bg-gradient-to-r from-purple-400/20 to-blue-400/20 blur-3xl" />
        <div className="parallax-bg absolute bottom-40 right-20 w-80 h-80 rounded-full bg-gradient-to-r from-blue-400/20 to-cyan-400/20 blur-3xl" />

        {/* Floating Particles */}
        {isMounted &&
          particlePositions.map((position, i) => (
            <div
              key={i}
              className="particle absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-20"
              style={{
                left: `${position.left}%`,
                top: `${position.top}%`,
                animationDelay: `${i * 0.4}s`,
              }}
            />
          ))}

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
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
            <Sparkles className="w-5 h-5 mr-2" />
            My Services
            <Zap className="w-4 h-4 ml-2" />
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6"
          >
            Transform Your{" "}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              English Skills
            </span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed"
          >
            Choose from my specialized programs designed to help you achieve
            your English learning goals with personalized attention and proven
            methodologies.
          </motion.p>
        </motion.div>

        {/* Services Cards */}
        <div ref={cardsRef} className="grid lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <div
              key={service.id}
              className={cn(
                "service-card floating-service-card group relative cursor-pointer transition-all duration-700 transform-gpu magnetic-element",
                activeService === service.id
                  ? "scale-105 z-10"
                  : "hover:scale-102"
              )}
              onMouseEnter={() => setActiveService(service.id)}
            >
              {/* Popular Badge */}
              {service.popular && (
                <div className="absolute -top-4 -right-4 z-20">
                  <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-xs font-bold shadow-xl flex items-center gap-1">
                    <Star className="w-3 h-3 fill-current" />
                    Most Popular
                  </div>
                </div>
              )}

              <div
                className={cn(
                  "relative h-full backdrop-blur-xl rounded-3xl p-8 shadow-2xl border transition-all duration-700 overflow-hidden",
                  "bg-gradient-to-br from-white/90 via-white/70 to-white/50",
                  activeService === service.id
                    ? "border-purple-300 shadow-purple-500/30"
                    : "border-white/50 hover:border-purple-200"
                )}
              >
                {/* Service Header */}
                <div className="relative z-10">
                  <div
                    className={cn(
                      "inline-flex p-4 rounded-2xl mb-6 bg-gradient-to-r shadow-lg transform transition-all duration-500",
                      service.color,
                      "group-hover:scale-110 group-hover:rotate-3"
                    )}
                  >
                    <service.icon className="w-8 h-8 text-white" />
                  </div>

                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {service.title}
                    </h3>
                    <p className="text-purple-600 font-semibold mb-3 text-lg">
                      {service.subtitle}
                    </p>
                    <p className="text-gray-600 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Pricing */}
                  <div
                    className={cn(
                      "bg-gradient-to-r rounded-2xl p-6 mb-6",
                      service.bgColor
                    )}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="flex items-baseline gap-2">
                          <span className="text-3xl font-bold text-gray-900">
                            ${service.price}
                          </span>
                          <span className="text-gray-600 text-sm">
                            {service.duration}
                          </span>
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-sm text-gray-600 mb-1">
                          Success Rate
                        </div>
                        <div className="text-xl font-bold text-green-600">
                          {service.stats.success}%
                        </div>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 text-center">
                      <div>
                        <div className="text-lg font-bold text-gray-900">
                          {service.stats.students}+
                        </div>
                        <div className="text-xs text-gray-600">Students</div>
                      </div>
                      <div>
                        <div className="text-lg font-bold text-gray-900">
                          {service.stats.rating}
                        </div>
                        <div className="text-xs text-gray-600">Rating</div>
                      </div>
                      <div>
                        <div className="flex justify-center">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-3 h-3 text-yellow-400 fill-current"
                            />
                          ))}
                        </div>
                        <div className="text-xs text-gray-600 mt-1">
                          Reviews
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-3 mb-8">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-3">
                        <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>

                  {/* CTA Buttons */}
                  <div className="space-y-3">
                    <button
                      className={cn(
                        "w-full py-4 px-6 rounded-2xl font-bold text-white shadow-lg transition-all duration-300",
                        "bg-gradient-to-r hover:shadow-xl transform hover:scale-105",
                        service.color
                      )}
                    >
                      <span className="flex items-center justify-center gap-2">
                        <Calendar className="w-5 h-5" />
                        Book Free Trial
                        <ArrowRight className="w-5 h-5" />
                      </span>
                    </button>

                    <button className="w-full py-3 px-6 rounded-2xl font-semibold text-gray-700 bg-gray-100 hover:bg-gray-200 transition-all duration-300 flex items-center justify-center gap-2">
                      <Play className="w-4 h-4" />
                      Watch Demo
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Achievements Section */}
        <div
          ref={achievementsRef}
          className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-xl border border-white/20 mb-16"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4 flex items-center justify-center">
              <Trophy className="w-8 h-8 mr-3 text-yellow-500" />
              Proven Results
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Numbers that speak for themselves - real results from real
              students
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div
                key={achievement.label}
                className="achievement-card text-center magnetic-element group hover:shadow-lg transition-all duration-300 p-6 rounded-2xl"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                  <achievement.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  {achievement.value}
                </div>
                <div className="text-sm font-semibold text-gray-600 mb-1">
                  {achievement.label}
                </div>
                <div className="text-xs text-gray-500">
                  {achievement.description}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Testimonial Quotes Slider */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-blue-500 via-purple-600 to-pink-600 rounded-3xl p-12 text-white shadow-2xl">
            <Heart className="w-16 h-16 mx-auto mb-6 text-pink-200" />
            <h3 className="text-3xl font-bold mb-8">What My Students Say</h3>
            <div className="grid md:grid-cols-2 gap-8">
              {testimonialQuotes.map((quote, index) => (
                <div
                  key={index}
                  className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 magnetic-element"
                >
                  <p className="text-lg italic mb-4">"{quote}"</p>
                  <div className="flex justify-center">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 text-yellow-300 fill-current"
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <button className="magnetic-element px-8 py-4 bg-white text-blue-600 rounded-full font-bold hover:shadow-xl transition-all duration-300 flex items-center justify-center mx-auto">
                <MessageCircle className="w-5 h-5 mr-2" />
                Read All Reviews
                <ArrowRight className="w-5 h-5 ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
