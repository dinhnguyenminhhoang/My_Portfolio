"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import {
  MessageCircle,
  Briefcase,
  GraduationCap,
  BookOpen,
  Users,
  Clock,
  Star,
  ArrowRight,
  CheckCircle,
  Video,
  Calendar,
  Globe,
  Award,
  Zap,
  Shield,
  HeartHandshake,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { cn, fadeInUp, staggerChildren, scrollToSection } from "@/utils/cn";

const services = [
  {
    id: "conversation",
    icon: MessageCircle,
    title: "Conversational English",
    subtitle: "Speak with Confidence",
    description:
      "Master natural conversation through immersive practice sessions and real-world scenarios.",
    features: [
      "Daily conversation practice",
      "Accent reduction training",
      "Idioms & expressions mastery",
      "Cultural communication insights",
      "Fluency building exercises",
    ],
    duration: "60 min",
    price: "$45",
    originalPrice: "$55",
    sessions: "1-on-1",
    level: "All Levels",
    popular: false,
    color: "from-blue-500 via-cyan-500 to-teal-500",
    bgPattern: "conversation",
  },
  {
    id: "business",
    icon: Briefcase,
    title: "Business English",
    subtitle: "Professional Excellence",
    description:
      "Elevate your career with advanced business communication skills for the global workplace.",
    features: [
      "Executive presentation skills",
      "Negotiation & persuasion",
      "Cross-cultural business etiquette",
      "Industry-specific vocabulary",
      "Leadership communication",
    ],
    duration: "75 min",
    price: "$65",
    originalPrice: "$80",
    sessions: "1-on-1",
    level: "Intermediate+",
    popular: true,
    color: "from-purple-600 via-blue-600 to-indigo-600",
    bgPattern: "business",
  },
  {
    id: "ielts",
    icon: GraduationCap,
    title: "IELTS Mastery",
    subtitle: "Score 7+ Guaranteed",
    description:
      "Comprehensive IELTS preparation with proven strategies and personalized feedback.",
    features: [
      "Band 7+ achievement strategies",
      "Full mock tests with analysis",
      "Writing task optimization",
      "Speaking confidence building",
      "Time management mastery",
    ],
    duration: "90 min",
    price: "$75",
    originalPrice: "$90",
    sessions: "1-on-1",
    level: "Intermediate+",
    popular: false,
    color: "from-emerald-500 via-green-500 to-teal-500",
    bgPattern: "academic",
  },
];

const premiumFeatures = [
  {
    icon: Video,
    title: "HD Video Lessons",
    description: "Crystal clear video quality with interactive whiteboards",
  },
  {
    icon: Calendar,
    title: "24/7 Scheduling",
    description: "Book lessons anytime with our flexible scheduling system",
  },
  {
    icon: Globe,
    title: "Global Accessibility",
    description: "Available worldwide with timezone optimization",
  },
  {
    icon: Shield,
    title: "Progress Guarantee",
    description: "See improvement in 30 days or get your money back",
  },
  {
    icon: Award,
    title: "Certified Materials",
    description: "Premium learning resources from top publishers",
  },
  {
    icon: HeartHandshake,
    title: "Lifetime Support",
    description: "Ongoing support even after course completion",
  },
];

const testimonialHighlights = [
  {
    name: "Maria Chen",
    role: "Software Engineer",
    rating: 5,
    quote: "Improved my IELTS score from 6.0 to 8.5 in just 3 months!",
  },
  {
    name: "Ahmed Hassan",
    role: "Business Manager",
    rating: 5,
    quote:
      "My presentation skills improved dramatically for international meetings.",
  },
  {
    name: "Lisa Park",
    role: "University Student",
    rating: 5,
    quote: "Finally feel confident speaking English in any situation.",
  },
];

export default function ServicesSection() {
  const [activeService, setActiveService] = useState("business");
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  useEffect(() => {
    if (!isInView) return;

    const ctx = gsap.context(() => {
      // Staggered card animation
      const cards = cardsRef.current?.children;
      if (cards) {
        gsap.fromTo(
          cards,
          {
            opacity: 0,
            y: 100,
            rotationX: 15,
            scale: 0.8,
          },
          {
            opacity: 1,
            y: 0,
            rotationX: 0,
            scale: 1,
            duration: 1,
            ease: "power3.out",
            stagger: 0.2,
          }
        );
      }

      // Floating animations
      gsap.to(".floating-service-card", {
        y: -8,
        rotation: 1,
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

      // Premium features reveal
      gsap.fromTo(
        ".premium-feature",
        { opacity: 0, y: 30, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: "back.out(1.7)",
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".premium-features-container",
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [isInView]);

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-gray-50/50 to-white dark:from-gray-900/50 dark:to-gray-800"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient Orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 rounded-full bg-gradient-to-r from-purple-400/20 to-blue-400/20 blur-3xl animate-pulse" />
        <div className="absolute bottom-40 right-20 w-80 h-80 rounded-full bg-gradient-to-r from-blue-400/20 to-cyan-400/20 blur-3xl animate-pulse" />

        {/* Floating Particles */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="particle absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-blue-400 rounded-full opacity-20"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 4}s`,
            }}
          />
        ))}

        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Section Header */}
        <motion.div
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={staggerChildren}
          className="text-center mb-20"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 text-purple-600 dark:text-purple-400 text-sm font-semibold mb-8 shadow-lg"
          >
            <Sparkles className="w-4 h-4 mr-2 animate-pulse" />
            Premium English Coaching
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="text-5xl lg:text-7xl font-black text-gray-900 dark:text-white mb-8 leading-tight"
          >
            <span className="block">Transform Your</span>
            <span className="block bg-gradient-to-r from-purple-600 via-blue-600 to-cyan-600 bg-clip-text text-transparent">
              English Journey
            </span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed"
          >
            Experience world-class English coaching with personalized attention,
            cutting-edge methodology, and guaranteed results that will
            accelerate your success.
          </motion.p>
        </motion.div>

        {/* Enhanced Services Cards */}
        <div ref={cardsRef} className="grid lg:grid-cols-3 gap-8 mb-20">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              className={cn(
                "floating-service-card group relative cursor-pointer transition-all duration-700 transform-gpu",
                activeService === service.id
                  ? "scale-105 z-10"
                  : "hover:scale-102"
              )}
              onHoverStart={() => setActiveService(service.id)}
              onClick={() => setActiveService(service.id)}
            >
              {/* Popular Badge */}
              {service.popular && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{
                    delay: index * 0.2 + 0.5,
                    type: "spring",
                    bounce: 0.5,
                  }}
                  className="absolute -top-4 -right-4 z-20"
                >
                  <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 text-white px-4 py-2 rounded-full text-xs font-bold shadow-xl flex items-center gap-1">
                    <Star className="w-3 h-3 fill-current" />
                    Most Popular
                  </div>
                </motion.div>
              )}

              <div
                className={cn(
                  "relative h-full backdrop-blur-xl rounded-3xl p-8 shadow-2xl border transition-all duration-700 overflow-hidden",
                  "bg-gradient-to-br from-white/80 via-white/60 to-white/40",
                  "dark:from-gray-800/80 dark:via-gray-800/60 dark:to-gray-800/40",
                  activeService === service.id
                    ? "border-purple-300 dark:border-purple-500 shadow-purple-500/30"
                    : "border-white/50 dark:border-gray-700/50 hover:border-purple-200 dark:hover:border-purple-600"
                )}
              >
                {/* Animated Background Pattern */}
                <div
                  className={cn(
                    "absolute inset-0 opacity-5 bg-gradient-to-br transition-opacity duration-700",
                    service.color,
                    activeService === service.id ? "opacity-10" : ""
                  )}
                />

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
                    <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-2">
                      {service.title}
                    </h3>
                    <p className="text-purple-600 dark:text-purple-400 font-bold mb-3 text-lg">
                      {service.subtitle}
                    </p>
                    <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                  {/* Enhanced Pricing */}
                  <div className="bg-gradient-to-r from-gray-50 to-purple-50 dark:from-gray-800 dark:to-purple-900/20 rounded-2xl p-6 mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <div className="flex items-baseline gap-2">
                          <span className="text-3xl font-black text-gray-900 dark:text-white">
                            {service.price}
                          </span>
                          <span className="text-lg text-gray-500 line-through">
                            {service.originalPrice}
                          </span>
                        </div>
                        <p className="text-sm text-gray-500">
                          per {service.duration} lesson
                        </p>
                      </div>
                      <div className="text-right">
                        <div className="text-sm font-semibold text-purple-600 dark:text-purple-400">
                          {service.sessions}
                        </div>
                        <div className="text-xs text-gray-500">
                          {service.level}
                        </div>
                      </div>
                    </div>

                    {/* Savings Badge */}
                    <div className="inline-flex items-center px-3 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 rounded-full text-xs font-bold">
                      <TrendingUp className="w-3 h-3 mr-1" />
                      Save $
                      {parseInt(service.originalPrice.slice(1)) -
                        parseInt(service.price.slice(1))}
                    </div>
                  </div>

                  {/* Enhanced Features */}
                  <div className="mb-8">
                    <h4 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                      <Zap className="w-4 h-4 text-yellow-500" />
                      What You'll Master
                    </h4>
                    <ul className="space-y-3">
                      {service.features.map((feature, idx) => (
                        <motion.li
                          key={idx}
                          className="flex items-start text-sm text-gray-600 dark:text-gray-300"
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                        >
                          <CheckCircle className="w-4 h-4 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                          <span>{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Enhanced CTA */}
                  <motion.button
                    onClick={() => scrollToSection("contact")}
                    className={cn(
                      "w-full py-4 px-6 rounded-2xl font-bold text-lg transition-all duration-500",
                      "flex items-center justify-center gap-2 group relative overflow-hidden",
                      activeService === service.id
                        ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white shadow-2xl shadow-purple-500/40"
                        : "bg-gradient-to-r from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-600 text-gray-700 dark:text-gray-300 hover:from-purple-100 hover:to-blue-100 dark:hover:from-purple-900/30 dark:hover:to-blue-900/30"
                    )}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="relative z-10">Start Learning Today</span>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform relative z-10" />

                    {/* Button shine effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Testimonial Highlights */}
        <motion.div
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={staggerChildren}
          className="mb-20"
        >
          <motion.h3
            variants={fadeInUp}
            className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12"
          >
            Success Stories from My Students
          </motion.h3>

          <div className="grid md:grid-cols-3 gap-6">
            {testimonialHighlights.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                variants={fadeInUp}
                className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200/50 dark:border-gray-700/50"
              >
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-500 fill-current"
                    />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4 italic">
                  "{testimonial.quote}"
                </p>
                <div>
                  <div className="font-semibold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {testimonial.role}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Enhanced Premium Features */}
        <motion.div
          className="premium-features-container bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 rounded-3xl p-8 lg:p-12 text-white relative overflow-hidden"
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={staggerChildren}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px]" />

          <motion.div variants={fadeInUp} className="relative z-10">
            <div className="text-center mb-12">
              <h3 className="text-4xl font-bold mb-4">
                Premium Learning Experience
              </h3>
              <p className="text-xl text-purple-200 max-w-3xl mx-auto">
                Every lesson includes these premium features to ensure your
                success
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {premiumFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="premium-feature text-center group"
                  onHoverStart={() => setHoveredFeature(index)}
                  onHoverEnd={() => setHoveredFeature(null)}
                >
                  <motion.div
                    className="inline-flex p-4 bg-white/10 backdrop-blur-sm rounded-2xl mb-4 group-hover:bg-white/20 transition-all duration-300"
                    animate={
                      hoveredFeature === index
                        ? { scale: 1.1, rotate: 5 }
                        : { scale: 1, rotate: 0 }
                    }
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </motion.div>
                  <h4 className="font-bold text-lg mb-2">{feature.title}</h4>
                  <p className="text-purple-200 text-sm">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Enhanced CTA Section */}
        <motion.div
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={staggerChildren}
          className="text-center mt-20"
        >
          <motion.div variants={fadeInUp} className="mb-8">
            <h3 className="text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              Ready to{" "}
              <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Master English?
              </span>
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
              Join hundreds of successful students who have transformed their
              English skills. Book your free consultation and get a personalized
              learning plan.
            </p>
          </motion.div>

          <motion.div
            variants={fadeInUp}
            className="flex flex-col sm:flex-row gap-6 justify-center"
          >
            <motion.button
              onClick={() => scrollToSection("contact")}
              className="px-10 py-5 bg-gradient-to-r from-purple-600 via-blue-600 to-purple-600 text-white rounded-2xl font-bold text-xl shadow-2xl hover:shadow-purple-500/40 transition-all duration-500 flex items-center justify-center gap-3 relative overflow-hidden group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Calendar className="w-6 h-6" />
              <span>Book Free Consultation</span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
            </motion.button>

            <motion.button
              className="px-10 py-5 border-2 border-purple-500 text-purple-500 rounded-2xl font-bold text-xl hover:bg-purple-500 hover:text-white transition-all duration-300 flex items-center justify-center gap-3"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Star className="w-6 h-6" />
              View Success Stories
            </motion.button>
          </motion.div>

          {/* Trust Indicators */}
          <motion.div
            variants={fadeInUp}
            className="mt-12 flex flex-wrap justify-center items-center gap-8 text-sm text-gray-500 dark:text-gray-400"
          >
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-green-500" />
              <span>30-Day Money Back Guarantee</span>
            </div>
            <div className="flex items-center gap-2">
              <Award className="w-4 h-4 text-blue-500" />
              <span>TESOL Certified Instructor</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-4 h-4 text-yellow-500" />
              <span>4.9/5 Average Rating</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
