"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { gsap } from "gsap";
import {
  BookOpen,
  Mail,
  Phone,
  MapPin,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Youtube,
  ArrowUp,
  Heart,
  Star,
  Globe,
  Award,
  Users,
  MessageCircle,
  ExternalLink,
  Sparkles,
} from "lucide-react";
import { cn, fadeInUp, staggerChildren, scrollToSection } from "@/utils/cn";

const footerLinks = {
  services: [
    { name: "Conversational English", href: "#services" },
    { name: "Business English", href: "#services" },
    { name: "IELTS Preparation", href: "#services" },
    { name: "Academic English", href: "#services" },
    { name: "Group Classes", href: "#services" },
    { name: "Intensive Courses", href: "#services" },
  ],
  resources: [
    { name: "Free Learning Materials", href: "#" },
    { name: "English Grammar Guide", href: "#" },
    { name: "Pronunciation Tips", href: "#" },
    { name: "IELTS Practice Tests", href: "#" },
    { name: "Business Vocabulary", href: "#" },
    { name: "Study Schedule Template", href: "#" },
  ],
  about: [
    { name: "My Teaching Philosophy", href: "#about" },
    { name: "Qualifications & Experience", href: "#experience" },
    { name: "Student Success Stories", href: "#testimonials" },
    { name: "Teaching Methodology", href: "#about" },
    { name: "Why Choose Me", href: "#about" },
    { name: "Schedule a Consultation", href: "#contact" },
  ],
  legal: [
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Refund Policy", href: "#" },
    { name: "Cookie Policy", href: "#" },
    { name: "Accessibility", href: "#" },
    { name: "Student Rights", href: "#" },
  ],
};

const socialLinks = [
  {
    name: "Facebook",
    icon: Facebook,
    href: "https://facebook.com/englishwithsarah",
    color: "hover:text-blue-600",
    followers: "2.5K",
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://instagram.com/englishwithsarah",
    color: "hover:text-pink-600",
    followers: "5.2K",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/in/sarahjohnsonenglish",
    color: "hover:text-blue-700",
    followers: "3.1K",
  },
  {
    name: "YouTube",
    icon: Youtube,
    href: "https://youtube.com/englishwithsarah",
    color: "hover:text-red-600",
    followers: "8.7K",
  },
  {
    name: "Twitter",
    icon: Twitter,
    href: "https://twitter.com/englishwsarah",
    color: "hover:text-blue-500",
    followers: "1.8K",
  },
];

const achievements = [
  { icon: Users, value: "500+", label: "Students Taught" },
  { icon: Star, value: "4.9/5", label: "Average Rating" },
  { icon: Award, value: "15+", label: "Certifications" },
  { icon: Globe, value: "25+", label: "Countries" },
];

const testimonialQuotes = [
  "Sarah transformed my English in just 3 months!",
  "The best English teacher I've ever had.",
  "Finally confident speaking in meetings!",
  "My IELTS score improved from 6.0 to 8.5!",
];

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const isInView = useInView(footerRef, { once: true, amount: 0.3 });

  useEffect(() => {
    if (!isInView) return;

    const ctx = gsap.context(() => {
      // Footer sections animation
      gsap.fromTo(
        ".footer-section",
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.1,
        }
      );

      // Social icons animation
      gsap.fromTo(
        ".social-icon",
        { scale: 0, rotation: -180 },
        {
          scale: 1,
          rotation: 0,
          duration: 0.6,
          ease: "back.out(1.7)",
          stagger: 0.1,
          delay: 0.5,
        }
      );

      // Achievement counters
      gsap.fromTo(
        ".achievement-counter",
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          ease: "back.out(1.7)",
          stagger: 0.1,
          delay: 0.3,
        }
      );

      // Floating testimonials
      gsap.to(".floating-testimonial", {
        y: -5,
        duration: 2,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.3,
      });

      // Sparkle animation
      gsap.to(".sparkle", {
        scale: [1, 1.3, 1],
        opacity: [0.7, 1, 0.7],
        duration: 2,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.2,
      });
    }, footerRef);

    return () => ctx.revert();
  }, [isInView]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      ref={footerRef}
      className="relative bg-gradient-to-b from-gray-900 via-blue-900 to-purple-900 text-white overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient orbs */}
        <div className="absolute top-20 left-20 w-96 h-96 rounded-full bg-gradient-to-r from-blue-400/10 to-purple-400/10 blur-3xl" />
        <div className="absolute bottom-40 right-20 w-80 h-80 rounded-full bg-gradient-to-r from-purple-400/10 to-pink-400/10 blur-3xl" />

        {/* Floating sparkles */}
        {[...Array(12)].map((_, i) => (
          <div
            key={i}
            className="sparkle absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 20 + 10}px`,
            }}
          >
            <Sparkles className="text-yellow-300/30" />
          </div>
        ))}

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
          {/* Top Section */}
          <motion.div
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            variants={staggerChildren}
            className="grid lg:grid-cols-4 gap-12 mb-16"
          >
            {/* Brand Section */}
            <motion.div
              variants={fadeInUp}
              className="footer-section lg:col-span-1"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Sarah Johnson</h3>
                  <p className="text-blue-300">English Teacher & Coach</p>
                </div>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                Transforming lives through personalized English education. Join
                hundreds of successful students who achieved their dreams.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-gray-300">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <span>sarah@englishwithsarah.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <span>+44 20 7946 0958</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <span>London, UK (Available Worldwide)</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Clock className="w-5 h-5 text-blue-400" />
                  <span>Mon-Fri: 9AM-6PM GMT</span>
                </div>
              </div>
            </motion.div>

            {/* Services */}
            <motion.div variants={fadeInUp} className="footer-section">
              <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
                <MessageCircle className="w-5 h-5 text-blue-400" />
                My Services
              </h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() =>
                        scrollToSection(link.href.replace("#", ""))
                      }
                      className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 bg-blue-400 rounded-full group-hover:w-2 transition-all duration-300" />
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Resources */}
            <motion.div variants={fadeInUp} className="footer-section">
              <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
                <BookOpen className="w-5 h-5 text-blue-400" />
                Free Resources
              </h4>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 bg-blue-400 rounded-full group-hover:w-2 transition-all duration-300" />
                      {link.name}
                      <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* About & Legal */}
            <motion.div variants={fadeInUp} className="footer-section">
              <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Heart className="w-5 h-5 text-blue-400" />
                About & Support
              </h4>
              <ul className="space-y-3 mb-6">
                {footerLinks.about.slice(0, 4).map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() =>
                        scrollToSection(link.href.replace("#", ""))
                      }
                      className="text-gray-300 hover:text-white hover:translate-x-1 transition-all duration-300 flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 bg-blue-400 rounded-full group-hover:w-2 transition-all duration-300" />
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>

              <h5 className="font-semibold mb-3 text-gray-200">Legal</h5>
              <ul className="space-y-2">
                {footerLinks.legal.slice(0, 3).map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-400 hover:text-gray-300 transition-colors duration-300"
                    >
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </motion.div>

          {/* Achievement Stats */}
          <motion.div
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            variants={staggerChildren}
            className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16 p-8 bg-white/5 backdrop-blur-sm rounded-3xl border border-white/10"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.label}
                variants={fadeInUp}
                className="achievement-counter text-center group"
              >
                <div className="inline-flex p-4 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-2xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  <achievement.icon className="w-8 h-8 text-blue-400" />
                </div>
                <div className="text-3xl font-bold text-white mb-1">
                  {achievement.value}
                </div>
                <div className="text-gray-300 text-sm">{achievement.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Testimonial Carousel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.6 }}
            className="mb-16"
          >
            <h4 className="text-2xl font-bold text-center mb-8">
              What Students Say About Me
            </h4>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {testimonialQuotes.map((quote, index) => (
                <motion.div
                  key={index}
                  className="floating-testimonial bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 text-center"
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={
                    isInView
                      ? { opacity: 1, scale: 1 }
                      : { opacity: 0, scale: 0.9 }
                  }
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <div className="flex justify-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                  <p className="text-gray-300 text-sm italic">"{quote}"</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Social Media & Newsletter */}
          <motion.div
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            variants={staggerChildren}
            className="flex flex-col lg:flex-row items-center justify-between gap-8 mb-12 p-8 bg-gradient-to-r from-blue-600/20 to-purple-600/20 backdrop-blur-sm rounded-3xl border border-white/10"
          >
            <motion.div
              variants={fadeInUp}
              className="text-center lg:text-left"
            >
              <h4 className="text-2xl font-bold mb-2">Stay Connected</h4>
              <p className="text-gray-300">
                Follow me for daily English tips, lessons, and motivation!
              </p>
            </motion.div>

            <motion.div variants={fadeInUp} className="flex items-center gap-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "social-icon group relative p-4 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/20 transition-all duration-300",
                    social.color
                  )}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <social.icon className="w-6 h-6" />

                  {/* Tooltip */}
                  <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    {social.followers} followers
                  </div>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Newsletter Signup */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.8 }}
            className="bg-gradient-to-r from-purple-600 to-blue-600 rounded-3xl p-8 text-center mb-12"
          >
            <h4 className="text-3xl font-bold mb-4">
              Get Free English Learning Tips
            </h4>
            <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
              Join 10,000+ students receiving weekly English lessons, tips, and
              exclusive content straight to your inbox.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-6 py-3 rounded-xl bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
              />
              <motion.button
                className="px-8 py-3 bg-white text-purple-600 rounded-xl font-semibold hover:bg-gray-100 transition-colors duration-300 flex items-center justify-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
                <Mail className="w-5 h-5" />
              </motion.button>
            </div>

            <p className="text-purple-200 text-sm mt-4">
              No spam, unsubscribe anytime. Your email is safe with us.
            </p>
          </motion.div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-white/10 bg-black/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
            <div className="flex flex-col lg:flex-row items-center justify-between gap-4">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                }
                transition={{ delay: 1 }}
                className="text-gray-400 text-sm"
              >
                © 2024 Sarah Johnson English Coaching. All rights reserved.
                <span className="hidden sm:inline"> | Crafted with </span>
                <Heart className="inline w-4 h-4 text-red-400 mx-1" />
                <span className="hidden sm:inline">
                  {" "}
                  for English learners worldwide.
                </span>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                }
                transition={{ delay: 1.2 }}
                className="flex items-center gap-6 text-sm text-gray-400"
              >
                <span>TESOL Certified</span>
                <span>•</span>
                <span>500+ Success Stories</span>
                <span>•</span>
                <span>Available Worldwide</span>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Scroll to Top Button */}
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 z-50 group"
          initial={{ opacity: 0, scale: 0 }}
          animate={
            isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }
          }
          transition={{ delay: 1.5 }}
          whileHover={{ scale: 1.1, y: -2 }}
          whileTap={{ scale: 0.9 }}
        >
          <ArrowUp className="w-6 h-6 group-hover:-translate-y-1 transition-transform duration-300" />
        </motion.button>
      </div>
    </footer>
  );
}
