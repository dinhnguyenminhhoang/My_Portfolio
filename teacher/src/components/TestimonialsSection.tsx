"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { gsap } from "gsap";
import {
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  Award,
  TrendingUp,
  Users,
  Heart,
  Play,
  MapPin,
  Calendar,
  Briefcase,
  GraduationCap,
  MessageCircle,
  Globe,
  Target,
  Sparkles,
  BookOpen,
} from "lucide-react";
import { cn, fadeInUp, staggerChildren } from "@/utils/cn";

const testimonials = [
  {
    id: 1,
    name: "Maria Chen",
    role: "Software Engineer",
    company: "Google",
    location: "Singapore",
    avatar: "/api/placeholder/80/80",
    rating: 5,
    course: "Business English Intensive",
    duration: "6 months",
    improvement: "IELTS: 6.0 → 8.5",
    quote:
      "Sarah transformed my English completely! In just 6 months, I went from struggling with presentations to confidently leading international meetings. Her teaching method is incredibly effective and personalized.",
    fullStory:
      "When I started with Sarah, I was nervous about speaking English in professional settings. She created a customized curriculum that focused on my specific needs in tech industry communication. Now I regularly present to global teams and even mentor junior developers in English!",
    beforeAfter: {
      before:
        "Struggled with technical presentations and felt anxious in English meetings",
      after:
        "Leading international projects and mentoring team members confidently",
    },
    tags: [
      "Technical Communication",
      "Presentation Skills",
      "Confidence Building",
    ],
    featured: true,
    video: true,
  },
  {
    id: 2,
    name: "Ahmed Hassan",
    role: "Marketing Director",
    company: "BMW",
    location: "Dubai, UAE",
    avatar: "/api/placeholder/80/80",
    rating: 5,
    course: "Executive Communication",
    duration: "4 months",
    improvement: "Fluency: Intermediate → Advanced",
    quote:
      "Working with Sarah was a game-changer for my career. Her business English program helped me secure a promotion to regional director. The lessons were practical and directly applicable to my work.",
    fullStory:
      "As a marketing professional working with international brands, I needed to elevate my English to executive level. Sarah's program was perfectly tailored to my industry needs, focusing on persuasive communication and cultural nuances in business contexts.",
    beforeAfter: {
      before:
        "Good English but lacking confidence in high-stakes business situations",
      after:
        "Promoted to Regional Director, leading campaigns across Middle East",
    },
    tags: ["Executive Communication", "Marketing", "Leadership Skills"],
    featured: true,
    video: false,
  },
  {
    id: 3,
    name: "Lisa Park",
    role: "University Student",
    company: "Oxford University",
    location: "Oxford, UK",
    avatar: "/api/placeholder/80/80",
    rating: 5,
    course: "IELTS Preparation",
    duration: "3 months",
    improvement: "IELTS: 5.5 → 7.5",
    quote:
      "I needed to improve my IELTS score quickly for university admission. Sarah's structured approach and constant feedback helped me achieve my target score in just 3 months. Couldn't be happier!",
    fullStory:
      "Coming from South Korea, academic English was my biggest challenge. Sarah's IELTS program wasn't just about test preparation - she taught me how to think and express complex ideas in English. This foundation has been invaluable throughout my studies at Oxford.",
    beforeAfter: {
      before: "Struggling with academic writing and complex English structures",
      after:
        "Excelling in university coursework and participating actively in seminars",
    },
    tags: ["IELTS Preparation", "Academic Writing", "University Success"],
    featured: true,
    video: false,
  },
  {
    id: 4,
    name: "Carlos Rodriguez",
    role: "Doctor",
    company: "NHS",
    location: "London, UK",
    avatar: "/api/placeholder/80/80",
    rating: 5,
    course: "Medical English",
    duration: "8 months",
    improvement: "OET: B → A grades",
    quote:
      "Sarah's medical English course was exactly what I needed to practice in the UK. She understood the specific challenges international doctors face and provided targeted training for patient communication.",
    fullStory:
      "Moving from Spain to work in the NHS required not just medical knowledge but also cultural understanding of patient communication. Sarah's course covered everything from technical medical terminology to empathetic patient interactions.",
    beforeAfter: {
      before:
        "Qualified doctor struggling with UK medical communication standards",
      after:
        "Confidently treating patients and collaborating with medical teams",
    },
    tags: [
      "Medical English",
      "Professional Registration",
      "Patient Communication",
    ],
    featured: false,
    video: true,
  },
  {
    id: 5,
    name: "Yuki Tanaka",
    role: "Product Manager",
    company: "Sony",
    location: "Tokyo, Japan",
    avatar: "/api/placeholder/80/80",
    rating: 5,
    course: "Conversational Fluency",
    duration: "12 months",
    improvement: "Speaking confidence: 40% → 95%",
    quote:
      "The conversational practice sessions were incredible. Sarah created such a comfortable environment that I forgot I was learning - it felt like chatting with a friend who happened to be an amazing teacher!",
    fullStory:
      "Despite studying English for years, I was terrified of actual conversations. Sarah's approach focused on natural communication rather than perfect grammar. Now I enjoy networking events and even give presentations in English!",
    beforeAfter: {
      before: "Could read and write well but avoided speaking opportunities",
      after:
        "Leading cross-cultural teams and presenting to international stakeholders",
    },
    tags: ["Conversation Skills", "Cultural Fluency", "Confidence Building"],
    featured: false,
    video: false,
  },
  {
    id: 6,
    name: "Elena Volkov",
    role: "Entrepreneur",
    company: "Tech Startup Founder",
    location: "Berlin, Germany",
    avatar: "/api/placeholder/80/80",
    rating: 5,
    course: "Startup English",
    duration: "5 months",
    improvement: "Pitch success rate: 20% → 80%",
    quote:
      "Sarah didn't just teach me English - she taught me how to tell my story compellingly in English. My pitch success rate increased dramatically, and I successfully raised $2M in funding!",
    fullStory:
      "As a non-native English speaker trying to raise funding in Silicon Valley, I needed more than just language skills - I needed to master the art of persuasive storytelling. Sarah's program was transformational.",
    beforeAfter: {
      before: "Struggling to communicate vision effectively to investors",
      after:
        "Successfully raised Series A funding with compelling presentations",
    },
    tags: ["Entrepreneurship", "Pitch Training", "Investor Communication"],
    featured: false,
    video: true,
  },
];

const achievements = [
  {
    icon: Users,
    value: "500+",
    label: "Success Stories",
    description: "Students achieved their goals",
  },
  {
    icon: Award,
    value: "98%",
    label: "Success Rate",
    description: "Goal achievement rate",
  },
  {
    icon: TrendingUp,
    value: "2.5x",
    label: "Average Improvement",
    description: "In speaking confidence",
  },
  {
    icon: Globe,
    value: "25+",
    label: "Countries",
    description: "Students from worldwide",
  },
];

export default function TestimonialsSection() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("all");
  const sectionRef = useRef<HTMLElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  const categories = [
    "all",
    "Business English",
    "IELTS Preparation",
    "Conversational Fluency",
  ];

  const filteredTestimonials =
    selectedCategory === "all"
      ? testimonials
      : testimonials.filter((t) =>
          t.course.includes(
            selectedCategory.replace(" Preparation", "").replace(" Fluency", "")
          )
        );

  useEffect(() => {
    if (!isInView) return;

    const ctx = gsap.context(() => {
      // Testimonial cards entrance animation
      gsap.fromTo(
        ".testimonial-card",
        {
          opacity: 0,
          y: 80,
          rotationY: 15,
          scale: 0.9,
        },
        {
          opacity: 1,
          y: 0,
          rotationY: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
          stagger: 0.15,
        }
      );

      // Quote animation
      gsap.fromTo(
        ".quote-animation",
        { scale: 0, rotation: -180 },
        {
          scale: 1,
          rotation: 0,
          duration: 0.8,
          ease: "back.out(1.7)",
          delay: 0.5,
        }
      );

      // Stars animation
      gsap.fromTo(
        ".star-rating",
        { scale: 0, rotation: -360 },
        {
          scale: 1,
          rotation: 0,
          duration: 0.6,
          ease: "back.out(1.7)",
          stagger: 0.1,
          delay: 0.8,
        }
      );

      // Achievement counters
      const achievements = document.querySelectorAll(".achievement-value");
      achievements.forEach((achievement) => {
        const finalValue = achievement.textContent || "0";
        const numericValue = parseFloat(finalValue.replace(/[^0-9.]/g, ""));

        gsap.fromTo(
          achievement,
          { textContent: 0 },
          {
            textContent: numericValue,
            duration: 2,
            ease: "power2.out",
            snap: { textContent: 0.1 },
            scrollTrigger: {
              trigger: achievement,
              start: "top 85%",
            },
            onUpdate: function () {
              const current = parseFloat(
                gsap.getProperty(this.targets()[0], "textContent") as string
              );
              if (finalValue.includes("+")) {
                achievement.textContent = Math.round(current) + "+";
              } else if (finalValue.includes("%")) {
                achievement.textContent = Math.round(current) + "%";
              } else if (finalValue.includes("x")) {
                achievement.textContent = current.toFixed(1) + "x";
              } else {
                achievement.textContent = Math.round(current).toString();
              }
            },
          }
        );
      });

      // Floating animation for featured testimonials
      gsap.to(".featured-testimonial", {
        y: -8,
        duration: 3,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.5,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, [isInView, selectedCategory]);

  // Auto-rotate testimonials
  useEffect(() => {
    if (!isPlaying) return;

    const interval = setInterval(() => {
      setCurrentTestimonial((prev) =>
        prev === filteredTestimonials.length - 1 ? 0 : prev + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, [isPlaying, filteredTestimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === filteredTestimonials.length - 1 ? 0 : prev + 1
    );
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) =>
      prev === 0 ? filteredTestimonials.length - 1 : prev - 1
    );
  };

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-gray-800"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-40 left-10 w-96 h-96 rounded-full bg-gradient-to-r from-purple-400/10 to-pink-400/10 blur-3xl" />
        <div className="absolute bottom-20 right-20 w-80 h-80 rounded-full bg-gradient-to-r from-blue-400/10 to-cyan-400/10 blur-3xl" />

        {/* Floating quote marks */}
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute text-6xl text-purple-200/20 dark:text-purple-800/20 font-serif"
            style={{
              left: `${10 + i * 12}%`,
              top: `${20 + i * 8}%`,
              transform: `rotate(${-20 + i * 10}deg)`,
            }}
            animate={{
              y: [-10, 10, -10],
              rotate: [-20 + i * 10, -15 + i * 10, -20 + i * 10],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            "
          </motion.div>
        ))}
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
            className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 dark:from-purple-900/30 dark:to-pink-900/30 text-purple-600 dark:text-purple-400 text-sm font-semibold mb-8"
          >
            <Heart className="w-4 h-4 mr-2" />
            Student Success Stories
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="text-5xl lg:text-7xl font-black text-gray-900 dark:text-white mb-8"
          >
            Transforming{" "}
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Lives & Careers
            </span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Real stories from students who achieved their English learning goals
            and transformed their personal and professional lives.
          </motion.p>
        </motion.div>

        {/* Achievement Stats */}
        <motion.div
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={staggerChildren}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {achievements.map((achievement, index) => (
            <motion.div
              key={achievement.label}
              variants={fadeInUp}
              className="text-center group"
            >
              <div className="inline-flex p-4 bg-white dark:bg-gray-800 rounded-2xl shadow-lg mb-4 group-hover:scale-110 transition-transform duration-300">
                <achievement.icon className="w-8 h-8 text-purple-600 dark:text-purple-400" />
              </div>
              <div className="achievement-value text-4xl font-black text-gray-900 dark:text-white mb-2">
                {achievement.value}
              </div>
              <div className="font-semibold text-gray-900 dark:text-white mb-1">
                {achievement.label}
              </div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {achievement.description}
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          className="flex flex-wrap justify-center gap-4 mb-16"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={cn(
                "px-6 py-3 rounded-full font-semibold transition-all duration-300",
                selectedCategory === category
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                  : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700"
              )}
            >
              {category === "all" ? "All Stories" : category}
            </button>
          ))}
        </motion.div>

        {/* Featured Testimonial Carousel */}
        <div className="mb-20">
          <div className="relative max-w-4xl mx-auto">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.5 }}
                className="testimonial-card featured-testimonial bg-gradient-to-br from-white via-purple-50/50 to-pink-50/50 dark:from-gray-800 dark:via-purple-900/20 dark:to-pink-900/20 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-2xl border border-purple-200/50 dark:border-purple-700/50"
              >
                {/* Quote Icon */}
                <div className="quote-animation flex justify-center mb-8">
                  <div className="p-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full">
                    <Quote className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Main Quote */}
                <blockquote className="text-2xl lg:text-3xl font-light text-gray-900 dark:text-white text-center mb-8 leading-relaxed">
                  "{filteredTestimonials[currentTestimonial]?.quote}"
                </blockquote>

                {/* Rating */}
                <div className="flex justify-center gap-1 mb-8">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className="star-rating w-6 h-6 text-yellow-500 fill-current"
                    />
                  ))}
                </div>

                {/* Student Info */}
                <div className="flex flex-col lg:flex-row items-center justify-center gap-6 mb-8">
                  <div className="w-20 h-20 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">
                      {filteredTestimonials[currentTestimonial]?.name.charAt(0)}
                    </span>
                  </div>

                  <div className="text-center lg:text-left">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white">
                      {filteredTestimonials[currentTestimonial]?.name}
                    </h4>
                    <p className="text-purple-600 dark:text-purple-400 font-semibold">
                      {filteredTestimonials[currentTestimonial]?.role}
                    </p>
                    <p className="text-gray-500 dark:text-gray-400">
                      {filteredTestimonials[currentTestimonial]?.company}
                    </p>
                  </div>
                </div>

                {/* Course Info */}
                <div className="grid md:grid-cols-3 gap-4 mb-8">
                  <div className="text-center p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl">
                    <BookOpen className="w-5 h-5 text-purple-600 dark:text-purple-400 mx-auto mb-2" />
                    <div className="text-sm font-semibold text-gray-900 dark:text-white">
                      {filteredTestimonials[currentTestimonial]?.course}
                    </div>
                  </div>
                  <div className="text-center p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl">
                    <Calendar className="w-5 h-5 text-purple-600 dark:text-purple-400 mx-auto mb-2" />
                    <div className="text-sm font-semibold text-gray-900 dark:text-white">
                      {filteredTestimonials[currentTestimonial]?.duration}
                    </div>
                  </div>
                  <div className="text-center p-4 bg-white/50 dark:bg-gray-800/50 rounded-xl">
                    <TrendingUp className="w-5 h-5 text-purple-600 dark:text-purple-400 mx-auto mb-2" />
                    <div className="text-sm font-semibold text-gray-900 dark:text-white">
                      {filteredTestimonials[currentTestimonial]?.improvement}
                    </div>
                  </div>
                </div>

                {/* Video Play Button */}
                {filteredTestimonials[currentTestimonial]?.video && (
                  <div className="text-center">
                    <button className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full font-semibold hover:shadow-lg transition-all duration-300">
                      <Play className="w-5 h-5" />
                      Watch Video Story
                    </button>
                  </div>
                )}
              </motion.div>
            </AnimatePresence>

            {/* Navigation Arrows */}
            <button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <ChevronLeft className="w-6 h-6 text-gray-600 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400" />
            </button>

            <button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <ChevronRight className="w-6 h-6 text-gray-600 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400" />
            </button>

            {/* Dots Indicator */}
            <div className="flex justify-center gap-2 mt-8">
              {filteredTestimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={cn(
                    "w-3 h-3 rounded-full transition-all duration-300",
                    index === currentTestimonial
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 w-8"
                      : "bg-gray-300 dark:bg-gray-600 hover:bg-gray-400 dark:hover:bg-gray-500"
                  )}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Grid of All Testimonials */}
        <div className="grid lg:grid-cols-3 gap-8">
          {filteredTestimonials.slice(0, 6).map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className={cn(
                "testimonial-card bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-gray-200/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300 group cursor-pointer",
                testimonial.featured && "featured-testimonial"
              )}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
            >
              {/* Header */}
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
                  <span className="text-lg font-bold text-white">
                    {testimonial.name.charAt(0)}
                  </span>
                </div>

                <div className="flex-1">
                  <h4 className="font-bold text-gray-900 dark:text-white">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-purple-600 dark:text-purple-400">
                    {testimonial.role}
                  </p>
                </div>

                {testimonial.video && (
                  <div className="p-2 bg-red-100 dark:bg-red-900/30 rounded-full">
                    <Play className="w-4 h-4 text-red-600 dark:text-red-400" />
                  </div>
                )}
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-yellow-500 fill-current"
                  />
                ))}
              </div>

              {/* Quote */}
              <p className="text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                "{testimonial.quote}"
              </p>

              {/* Course & Improvement */}
              <div className="flex justify-between items-center text-sm">
                <span className="text-purple-600 dark:text-purple-400 font-medium">
                  {testimonial.course}
                </span>
                <span className="text-green-600 dark:text-green-400 font-medium">
                  {testimonial.improvement}
                </span>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-1 mt-4">
                {testimonial.tags.slice(0, 2).map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-1 bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400 rounded text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={staggerChildren}
          className="text-center mt-20"
        >
          <motion.div variants={fadeInUp}>
            <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Ready to Write Your{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Success Story?
              </span>
            </h3>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto">
              Join hundreds of successful students who transformed their English
              skills and achieved their dreams.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Sparkles className="w-5 h-5" />
                Start Your Journey
              </motion.button>

              <motion.button
                className="px-8 py-4 border-2 border-purple-500 text-purple-500 rounded-2xl font-semibold text-lg hover:bg-purple-500 hover:text-white transition-all duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Read More Stories
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
