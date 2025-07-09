"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";
import {
  Code2,
  Heart,
  Coffee,
  Github,
  Linkedin,
  Twitter,
  Mail,
  Phone,
  MapPin,
  ArrowUp,
  ExternalLink,
  Zap,
  Star,
  Rocket,
  Globe,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface FooterProps {
  className?: string;
}

const socialLinks = [
  {
    name: "GitHub",
    href: "https://github.com/johndoe",
    icon: Github,
    color: "hover:text-gray-300",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/in/johndoe",
    icon: Linkedin,
    color: "hover:text-blue-400",
  },
  {
    name: "Twitter",
    href: "https://twitter.com/johndoe",
    icon: Twitter,
    color: "hover:text-blue-400",
  },
  {
    name: "Email",
    href: "mailto:john.doe@example.com",
    icon: Mail,
    color: "hover:text-purple-400",
  },
];

const quickLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const services = [
  "Frontend Development",
  "UI/UX Design",
  "Web Applications",
  "Mobile Development",
  "Performance Optimization",
  "Consulting",
];

const techStack = [
  "React",
  "Next.js",
  "TypeScript",
  "Tailwind CSS",
  "Node.js",
  "MongoDB",
  "PostgreSQL",
  "AWS",
];

export default function Footer({ className = "" }: FooterProps) {
  const footerRef = useRef<HTMLDivElement>(null);
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
          trigger: footerRef.current,
          start: "top 90%",
          end: "bottom 10%",
          toggleActions: "play none none reverse",
        },
      });

      // Footer content animation
      tl.fromTo(
        ".footer-content",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.1,
        }
      );

      // Social links animation
      tl.fromTo(
        ".footer-social",
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: "back.out(1.7)",
          stagger: 0.05,
        },
        "-=0.4"
      );

      // Floating animation for decorative elements
      gsap.to(".footer-particle", {
        y: "random(-10, 10)",
        x: "random(-10, 10)",
        rotation: "random(-180, 180)",
        duration: "random(3, 6)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.2,
      });
    },
    { scope: footerRef }
  );

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      ref={footerRef}
      className={`relative bg-gradient-to-b from-black/50 to-black border-t border-white/10 ${className}`}
    >
      {/* Background particles */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {sparkles.map((sparkle, i) => (
          <div
            key={i}
            className="footer-particle absolute"
            style={{
              left: `${sparkle.left}%`,
              top: `${sparkle.top}%`,
              animationDelay: `${sparkle.animationDelay}s`,
            }}
          >
            <Star className="w-2 h-2 text-purple-400/20" />
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
            {/* Brand & Description */}
            <div className="footer-content lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl flex items-center justify-center">
                    <Code2 className="w-7 h-7 text-white" />
                  </div>
                  <div className="absolute -inset-1 bg-gradient-to-br from-purple-500 to-blue-500 rounded-xl blur opacity-30 animate-pulse" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                    John Doe
                  </h3>
                  <p className="text-white/60 text-sm">Frontend Developer</p>
                </div>
              </div>

              <p className="text-white/70 mb-6 max-w-md">
                Passionate frontend developer crafting exceptional digital
                experiences with modern technologies. Let's build something
                amazing together.
              </p>

              {/* Contact Info */}
              <div className="space-y-2 mb-6">
                <div className="flex items-center space-x-3 text-white/60">
                  <MapPin className="w-4 h-4 text-purple-400" />
                  <span>San Francisco, CA</span>
                </div>
                <div className="flex items-center space-x-3 text-white/60">
                  <Phone className="w-4 h-4 text-blue-400" />
                  <span>+1 (555) 123-4567</span>
                </div>
                <div className="flex items-center space-x-3 text-white/60">
                  <Mail className="w-4 h-4 text-green-400" />
                  <span>john.doe@example.com</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`footer-social p-3 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 text-white/70 ${social.color} transition-all duration-300 hover:bg-white/10 hover:border-white/20`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-content">
              <h4 className="text-lg font-semibold text-white mb-6 flex items-center space-x-2">
                <Rocket className="w-5 h-5 text-purple-400" />
                <span>Quick Links</span>
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => scrollToSection(link.href)}
                      className="text-white/70 hover:text-white transition-colors duration-300 flex items-center space-x-2 group"
                    >
                      <span className="w-1 h-1 bg-purple-400 rounded-full group-hover:bg-white transition-colors" />
                      <span>{link.name}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="footer-content">
              <h4 className="text-lg font-semibold text-white mb-6 flex items-center space-x-2">
                <Zap className="w-5 h-5 text-blue-400" />
                <span>Services</span>
              </h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li key={service}>
                    <span className="text-white/70 flex items-center space-x-2">
                      <span className="w-1 h-1 bg-blue-400 rounded-full" />
                      <span>{service}</span>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="footer-content mt-12 pt-8 border-t border-white/10">
            <h4 className="text-lg font-semibold text-white mb-6 flex items-center space-x-2">
              <Globe className="w-5 h-5 text-green-400" />
              <span>Tech Stack</span>
            </h4>
            <div className="flex flex-wrap gap-3">
              {techStack.map((tech) => (
                <motion.span
                  key={tech}
                  className="px-3 py-1 bg-white/5 backdrop-blur-sm rounded-full text-sm text-white/70 border border-white/10 hover:border-purple-500/30 hover:text-white transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer-content py-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-white/60">
              <span>© 2024 John Doe. Made with</span>
              <Heart className="w-4 h-4 text-red-400 animate-pulse" />
              <span>and</span>
              <Coffee className="w-4 h-4 text-yellow-400" />
              <span>in San Francisco</span>
            </div>

            {/* Back to Top */}
            <motion.button
              onClick={scrollToTop}
              className="flex items-center space-x-2 px-4 py-2 bg-white/5 backdrop-blur-sm rounded-lg border border-white/10 text-white/70 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <ArrowUp className="w-4 h-4" />
              <span>Back to Top</span>
            </motion.button>
          </div>
        </div>

        {/* Additional Links */}
        <div className="footer-content pb-8">
          <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 text-white/50 text-sm">
            <motion.a
              href="/privacy"
              className="hover:text-white transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
            >
              Privacy Policy
            </motion.a>
            <motion.a
              href="/terms"
              className="hover:text-white transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
            >
              Terms of Service
            </motion.a>
            <motion.a
              href="/sitemap"
              className="hover:text-white transition-colors duration-300 flex items-center space-x-1"
              whileHover={{ scale: 1.05 }}
            >
              <span>Sitemap</span>
              <ExternalLink className="w-3 h-3" />
            </motion.a>
          </div>
        </div>
      </div>

      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent pointer-events-none" />
    </footer>
  );
}
