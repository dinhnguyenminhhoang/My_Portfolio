"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Heart,
  Star,
  Camera,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Youtube,
  Music,
  Facebook,
  Linkedin,
  Twitter,
  ArrowUp,
  Send,
  CheckCircle,
  Sparkles,
  Coffee,
  Zap,
  Award,
  TrendingUp,
  Play,
  User,
  Building,
  FileText,
  Calendar,
  Clock,
  Globe,
  Shield,
  Target,
} from "lucide-react";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isSubscribing, setIsSubscribing] = useState(false);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubscribing(true);

    // Simulate subscription
    await new Promise((resolve) => setTimeout(resolve, 1500));

    setIsSubscribing(false);
    setIsSubscribed(true);
    setEmail("");

    // Reset after success message
    setTimeout(() => {
      setIsSubscribed(false);
    }, 3000);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Trang chủ", href: "#home" },
    { name: "Về tôi", href: "#about" },
    { name: "Kỹ năng", href: "#skills" },
    { name: "Dự án", href: "#projects" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Liên hệ", href: "#contact" },
  ];

  const services = [
    { name: "Video Content Creation", icon: Play },
    { name: "Social Media Strategy", icon: TrendingUp },
    { name: "Brand Photography", icon: Camera },
    { name: "Creative Direction", icon: Target },
    { name: "Content Planning", icon: Calendar },
    { name: "Campaign Management", icon: Award },
  ];

  const socialLinks = [
    {
      icon: Instagram,
      name: "Instagram",
      url: "https://instagram.com/hoangstylelist",
      color: "hover:text-pink-500",
      followers: "25K",
    },
    {
      icon: Youtube,
      name: "YouTube",
      url: "https://youtube.com/hoangstylelist",
      color: "hover:text-red-500",
      followers: "12K",
    },
    {
      icon: Music,
      name: "TikTok",
      url: "https://tiktok.com/@hoangstylelist",
      color: "hover:text-black",
      followers: "50K",
    },
    {
      icon: Facebook,
      name: "Facebook",
      url: "https://facebook.com/hoangstylelist",
      color: "hover:text-blue-500",
      followers: "8K",
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "https://linkedin.com/in/hoangstylelist",
      color: "hover:text-blue-600",
      followers: "5K",
    },
    {
      icon: Twitter,
      name: "Twitter",
      url: "https://twitter.com/hoangstylelist",
      color: "hover:text-blue-400",
      followers: "3K",
    },
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hello@hoangstylelist.com",
      href: "mailto:hello@hoangstylelist.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+84 123 456 789",
      href: "tel:+84123456789",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "TP. Hồ Chí Minh, Việt Nam",
      href: "https://maps.google.com",
    },
  ];

  const achievements = [
    { number: "50+", label: "Dự án hoàn thành" },
    { number: "20+", label: "Khách hàng hài lòng" },
    { number: "5M+", label: "Tổng lượt xem" },
    { number: "98%", label: "Tỷ lệ hài lòng" },
  ];

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900 text-white overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 w-28 h-28 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full blur-3xl animate-pulse" />
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="py-16 lg:py-20">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                {/* Logo */}
                <div className="flex items-center space-x-3 mb-6">
                  <div className="relative">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
                      <Camera className="w-6 h-6 text-white" />
                    </div>
                    <motion.div
                      className="absolute -top-1 -right-1 w-5 h-5 bg-yellow-400 rounded-full flex items-center justify-center"
                      animate={{ rotate: [0, 360] }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                    >
                      <Star className="w-2.5 h-2.5 text-white" />
                    </motion.div>
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-400 to-purple-400 bg-clip-text text-transparent">
                      Hoàng Stylelist
                    </h3>
                    <p className="text-gray-300 text-sm">
                      Creative Content Creator
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed mb-6">
                  Tạo nên những câu chuyện thương hiệu sinh động và truyền cảm
                  hứng thông qua nội dung sáng tạo.
                </p>

                {/* Achievements */}
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {achievements.map((achievement, index) => (
                    <motion.div
                      key={index}
                      className="text-center p-3 bg-white/10 backdrop-blur-sm rounded-xl border border-white/20"
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="text-lg font-bold text-white">
                        {achievement.number}
                      </div>
                      <div className="text-xs text-gray-300">
                        {achievement.label}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Social Links */}
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`w-10 h-10 bg-white/10 backdrop-blur-sm rounded-lg flex items-center justify-center text-gray-300 ${social.color} transition-all duration-200 border border-white/20`}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.9 }}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <social.icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Quick Links */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <h4 className="text-xl font-bold mb-6 flex items-center">
                  <Globe className="w-5 h-5 mr-2 text-purple-400" />
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
                      <button
                        onClick={() => scrollToSection(link.href)}
                        className="text-gray-300 hover:text-purple-400 transition-colors duration-200 flex items-center group"
                      >
                        <span className="w-2 h-2 bg-purple-400 rounded-full mr-3 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                        {link.name}
                      </button>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Services */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <h4 className="text-xl font-bold mb-6 flex items-center">
                  <Zap className="w-5 h-5 mr-2 text-purple-400" />
                  Dịch vụ
                </h4>
                <ul className="space-y-3">
                  {services.map((service, index) => (
                    <motion.li
                      key={index}
                      className="flex items-center text-gray-300 hover:text-purple-400 transition-colors duration-200"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <service.icon className="w-4 h-4 mr-3 text-purple-400" />
                      {service.name}
                    </motion.li>
                  ))}
                </ul>
              </motion.div>
            </div>

            {/* Contact & Newsletter */}
            <div className="lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                viewport={{ once: true }}
              >
                <h4 className="text-xl font-bold mb-6 flex items-center">
                  <Coffee className="w-5 h-5 mr-2 text-purple-400" />
                  Liên hệ
                </h4>

                {/* Contact Info */}
                <div className="space-y-3 mb-8">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center space-x-3 text-gray-300"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <info.icon className="w-4 h-4 text-purple-400 flex-shrink-0" />
                      {info.href ? (
                        <a
                          href={info.href}
                          className="hover:text-purple-400 transition-colors duration-200 text-sm"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <span className="text-sm">{info.value}</span>
                      )}
                    </motion.div>
                  ))}
                </div>

                {/* Newsletter Subscription */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                  <h5 className="font-semibold mb-3 flex items-center">
                    <Sparkles className="w-4 h-4 mr-2 text-yellow-400" />
                    Nhận cập nhật
                  </h5>
                  <p className="text-sm text-gray-300 mb-4">
                    Đăng ký để nhận tips sáng tạo và cập nhật mới nhất
                  </p>

                  <form onSubmit={handleNewsletterSubmit} className="space-y-3">
                    <div className="relative">
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="your@email.com"
                        required
                        className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                      />
                    </div>
                    <motion.button
                      type="submit"
                      disabled={isSubscribing || isSubscribed}
                      className={`w-full py-3 px-4 rounded-lg font-medium transition-all duration-200 flex items-center justify-center space-x-2 ${
                        isSubscribed
                          ? "bg-green-500 text-white"
                          : "bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg"
                      }`}
                      whileHover={{ scale: isSubscribed ? 1 : 1.02 }}
                      whileTap={{ scale: isSubscribed ? 1 : 0.98 }}
                    >
                      {isSubscribing ? (
                        <>
                          <motion.div
                            className="w-4 h-4 border-2 border-white border-t-transparent rounded-full"
                            animate={{ rotate: 360 }}
                            transition={{
                              duration: 1,
                              repeat: Infinity,
                              ease: "linear",
                            }}
                          />
                          <span>Đang đăng ký...</span>
                        </>
                      ) : isSubscribed ? (
                        <>
                          <CheckCircle className="w-4 h-4" />
                          <span>Đã đăng ký!</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>Đăng ký</span>
                        </>
                      )}
                    </motion.button>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 py-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            {/* Copyright */}
            <motion.div
              className="text-center md:text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <p className="text-gray-300 text-sm">
                © {currentYear} Hoàng Stylelist. Made with{" "}
                <Heart className="w-4 h-4 inline text-pink-400 mx-1" />
                in Vietnam
              </p>
              <p className="text-gray-400 text-xs mt-1">
                All rights reserved. Design & Content by Hoàng Stylelist
              </p>
            </motion.div>

            {/* Legal Links */}
            <motion.div
              className="flex items-center space-x-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <button className="text-gray-300 hover:text-purple-400 transition-colors duration-200 text-sm flex items-center">
                <Shield className="w-4 h-4 mr-1" />
                Privacy Policy
              </button>
              <button className="text-gray-300 hover:text-purple-400 transition-colors duration-200 text-sm flex items-center">
                <FileText className="w-4 h-4 mr-1" />
                Terms of Service
              </button>
            </motion.div>

            {/* Back to Top */}
            <motion.button
              onClick={scrollToTop}
              className="bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-full hover:shadow-lg transition-all duration-200 group"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <ArrowUp className="w-5 h-5 text-white group-hover:translate-y-[-2px] transition-transform duration-200" />
            </motion.button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 8 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full opacity-30"
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.7, 0.3],
            }}
            transition={{
              duration: 4 + Math.random() * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>
    </footer>
  );
};

export default Footer;
