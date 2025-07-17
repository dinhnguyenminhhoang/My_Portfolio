"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  Instagram,
  Mail,
  Phone,
  MapPin,
  Youtube,
  Facebook,
  MessageCircle,
  Heart,
  ArrowUp,
  Sparkles,
  Star,
  Zap,
  Coffee,
  Camera,
  Play,
} from "lucide-react";
import { gsap } from "gsap";

const Footer = () => {
  const footerRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);

  const socialLinks = [
    {
      name: "TikTok",
      icon: Play,
      href: "https://tiktok.com/@hoangcreative",
      color: "hover:text-black",
      bgColor: "hover:bg-black",
      followers: "500K+",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://instagram.com/hoangcreative",
      color: "hover:text-pink-500",
      bgColor: "hover:bg-pink-500",
      followers: "250K+",
    },
    {
      name: "YouTube",
      icon: Youtube,
      href: "https://youtube.com/@hoangcreative",
      color: "hover:text-red-500",
      bgColor: "hover:bg-red-500",
      followers: "100K+",
    },
    {
      name: "Facebook",
      icon: Facebook,
      href: "https://facebook.com/hoangcreative",
      color: "hover:text-blue-500",
      bgColor: "hover:bg-blue-500",
      followers: "80K+",
    },
    {
      name: "Zalo",
      icon: MessageCircle,
      href: "https://zalo.me/hoangcreative",
      color: "hover:text-blue-400",
      bgColor: "hover:bg-blue-400",
      followers: "Chat",
    },
  ];

  const quickLinks = [
    { name: "Trang chủ", href: "#hero" },
    { name: "Về tôi", href: "#about" },
    { name: "Kỹ năng", href: "#skills" },
    { name: "Dự án", href: "#projects" },
    { name: "Liên hệ", href: "#contact" },
  ];

  const services = [
    { name: "Video Content Creation", href: "#" },
    { name: "Social Media Strategy", href: "#" },
    { name: "Brand Campaign", href: "#" },
    { name: "Creative Consultation", href: "#" },
    { name: "Content Planning", href: "#" },
  ];

  const achievements = [
    { icon: Star, text: "Top 10 Creative Directors VN 2023" },
    { icon: Zap, text: "15M+ Total Views" },
    { icon: Heart, text: "500K+ Followers" },
    { icon: Coffee, text: "50+ Happy Clients" },
  ];

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  // Smooth scroll for navigation
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    // Logo animation
    gsap.fromTo(
      logoRef.current,
      { scale: 0, rotation: -180 },
      {
        scale: 1,
        rotation: 0,
        duration: 1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Social icons animation
    gsap.fromTo(
      ".social-icon",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 85%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Floating animation for decorative elements
    gsap.to(".float-1", {
      y: -10,
      duration: 2,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
    });

    gsap.to(".float-2", {
      y: -15,
      duration: 2.5,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
      delay: 0.5,
    });

    gsap.to(".float-3", {
      y: -8,
      duration: 1.8,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
      delay: 1,
    });

    return () => {
      // Cleanup ScrollTrigger instances
      gsap.killTweensOf([".float-1", ".float-2", ".float-3"]);
    };
  }, []);

  return (
    <footer
      ref={footerRef}
      className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white overflow-hidden"
    >
      {/* Decorative Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="float-1 absolute top-20 left-1/4 w-20 h-20 bg-purple-500 rounded-full opacity-10 blur-xl"></div>
        <div className="float-2 absolute top-40 right-1/3 w-16 h-16 bg-pink-500 rounded-full opacity-10 blur-xl"></div>
        <div className="float-3 absolute bottom-32 left-1/2 w-24 h-24 bg-blue-500 rounded-full opacity-10 blur-xl"></div>

        {/* Sparkle elements */}
        <div className="absolute top-16 left-1/6">
          <Sparkles className="w-6 h-6 text-yellow-400 opacity-30 animate-pulse" />
        </div>
        <div className="absolute top-32 right-1/4">
          <Star className="w-4 h-4 text-purple-400 opacity-40 animate-pulse" />
        </div>
        <div className="absolute bottom-20 right-1/6">
          <Camera className="w-5 h-5 text-pink-400 opacity-30 animate-pulse" />
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div ref={logoRef} className="flex items-center space-x-3 mb-6">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <motion.div
                  className="absolute inset-0 bg-purple-400 rounded-full blur-sm opacity-50"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Hoàng Creative
                </h3>
                <p className="text-gray-400 text-sm">
                  Creative Director & Content Creator
                </p>
              </div>
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed">
              Chuyên tạo nội dung viral, campaigns sáng tạo và chiến lược thương
              hiệu cho Gen Z Việt Nam. Phong cách "chipi" nhưng hiệu quả thực
              tế! 🔥
            </p>

            {/* Achievements */}
            <div className="space-y-3">
              <h4 className="text-lg font-semibold text-white mb-4">
                Thành tích nổi bật
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center gap-3 text-gray-300"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <achievement.icon className="w-4 h-4 text-purple-400" />
                    <span className="text-sm">{achievement.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">
              Điều hướng
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-gray-300 hover:text-purple-400 transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-6">Dịch vụ</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <a
                    href={service.href}
                    className="text-gray-300 hover:text-purple-400 transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    {service.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex items-center gap-3 text-gray-300">
              <Mail className="w-5 h-5 text-purple-400" />
              <span>hoang.creative@gmail.com</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <Phone className="w-5 h-5 text-purple-400" />
              <span>+84 123 456 789</span>
            </div>
            <div className="flex items-center gap-3 text-gray-300">
              <MapPin className="w-5 h-5 text-purple-400" />
              <span>TP.HCM, Việt Nam</span>
            </div>
          </div>
        </div>

        {/* Social Media */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <h4 className="text-lg font-semibold text-white mb-6 text-center">
            Theo dõi tôi trên Social Media
          </h4>
          <div className="flex justify-center space-x-6">
            {socialLinks.map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className={`social-icon group relative p-4 bg-gray-800 rounded-full border border-gray-700 transition-all duration-300 ${social.bgColor}`}
                whileHover={{ scale: 1.1, y: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <social.icon
                  className={`w-6 h-6 text-gray-300 group-hover:text-white transition-colors ${social.color}`}
                />

                {/* Follower count tooltip */}
                <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-3 py-1 rounded-lg text-sm opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                  <span className="font-medium">{social.followers}</span>
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 border-4 border-transparent border-t-gray-800"></div>
                </div>

                {/* Hover effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full opacity-0 group-hover:opacity-20 transition-opacity"></div>
              </motion.a>
            ))}
          </div>
        </div>

        {/* Newsletter Signup */}
        <div className="mt-12 pt-8 border-t border-gray-700">
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="text-2xl font-bold text-white mb-4">
              Nhận tips sáng tạo mỗi tuần! 📧
            </h4>
            <p className="text-gray-300 mb-6">
              Subscribe để nhận những insight mới nhất về content creation và
              marketing trends
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Nhập email của bạn"
                className="flex-1 px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all"
              />
              <motion.button
                className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-lg font-medium hover:shadow-lg transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="relative z-10 border-t border-gray-700 bg-black/20 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-gray-400 text-sm mb-4 md:mb-0">
              © 2024 Hoàng Creative. Made with{" "}
              <Heart className="inline w-4 h-4 text-red-400 mx-1" />
              in Vietnam.
            </div>

            <div className="flex items-center gap-6">
              <a
                href="#"
                className="text-gray-400 hover:text-purple-400 text-sm transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-purple-400 text-sm transition-colors"
              >
                Terms of Service
              </a>

              {/* Back to Top Button */}
              <motion.button
                onClick={scrollToTop}
                className="p-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white hover:shadow-lg transition-all"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                title="Back to top"
              >
                <ArrowUp className="w-5 h-5" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Animated Background Lines */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient
              id="line-gradient"
              x1="0%"
              y1="0%"
              x2="100%"
              y2="100%"
            >
              <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.1" />
              <stop offset="100%" stopColor="#ec4899" stopOpacity="0.1" />
            </linearGradient>
          </defs>

          {/* Animated lines */}
          <motion.path
            d="M0,100 Q150,50 300,100 T600,100"
            stroke="url(#line-gradient)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />

          <motion.path
            d="M0,200 Q200,150 400,200 T800,200"
            stroke="url(#line-gradient)"
            strokeWidth="1"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 1,
            }}
          />
        </svg>
      </div>
    </footer>
  );
};

export default Footer;
