"use client";

import { motion } from "framer-motion";
import {
  Heart,
  Mail,
  Phone,
  MapPin,
  ArrowUp,
  Sparkles,
  Instagram,
  Facebook,
  Youtube,
  Send,
  ExternalLink,
  Star,
} from "lucide-react";
import { useState, useEffect } from "react";
import Link from "next/link";

const Footer = () => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const socialLinks = [
    {
      name: "TikTok",
      icon: "🎵",
      href: "https://tiktok.com/@hoangwriter",
      color: "hover:text-pink-500",
      bgColor: "hover:bg-pink-50",
      followers: "50K",
    },
    {
      name: "Instagram",
      icon: Instagram,
      href: "https://instagram.com/hoangwriter",
      color: "hover:text-purple-500",
      bgColor: "hover:bg-purple-50",
      followers: "25K",
    },
    {
      name: "YouTube",
      icon: Youtube,
      href: "https://youtube.com/@hoangwriter",
      color: "hover:text-red-500",
      bgColor: "hover:bg-red-50",
      followers: "15K",
    },
    {
      name: "Facebook",
      icon: Facebook,
      href: "https://facebook.com/hoangwriter",
      color: "hover:text-blue-500",
      bgColor: "hover:bg-blue-50",
      followers: "30K",
    },
  ];

  const quickLinks = [
    { name: "Trang chủ", href: "#home" },
    { name: "Về tôi", href: "#about" },
    { name: "Dự án", href: "#projects" },
    { name: "Liên hệ", href: "#contact" },
  ];

  const services = [
    { name: "Copywriting", href: "#" },
    { name: "Video Script", href: "#" },
    { name: "Social Content", href: "#" },
    { name: "Brand Strategy", href: "#" },
  ];

  const contactInfo = [
    {
      icon: Mail,
      text: "hoang.writer@gmail.com",
      href: "mailto:hoang.writer@gmail.com",
    },
    { icon: Phone, text: "+84 123 456 789", href: "tel:+84123456789" },
    { icon: MapPin, text: "TP. Hồ Chí Minh, Việt Nam", href: "#" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.8,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  } as any;

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-blue-500 rounded-full blur-3xl"></div>
      </div>

      {/* Floating Stars */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute text-yellow-400 opacity-20"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -10, 0],
            opacity: [0.2, 0.5, 0.2],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Infinity,
            delay: Math.random() * 2,
          }}
        >
          <Star className="w-4 h-4" />
        </motion.div>
      ))}

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
          >
            {/* Brand Section */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="relative">
                    <Sparkles className="w-10 h-10 text-purple-400" />
                    <motion.div
                      className="absolute inset-0 w-10 h-10 rounded-full bg-purple-300/20"
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    />
                  </div>
                  <h3 className="text-2xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                    Hoàng Writer
                  </h3>
                </div>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  Tôi là một content creator chuyên tạo ra những nội dung{" "}
                  <span className="text-purple-400 font-semibold">chipi</span>{" "}
                  và{" "}
                  <span className="text-pink-400 font-semibold">ấn tượng</span>{" "}
                  cho các thương hiệu. Hãy cùng tôi biến ý tưởng thành câu
                  chuyện cuốn hút!
                </p>
              </div>

              {/* Social Media */}
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-white">
                  Theo dõi tôi
                </h4>
                <div className="flex flex-wrap gap-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`group flex items-center gap-3 bg-white/10 backdrop-blur-sm rounded-lg px-4 py-3 ${social.color} ${social.bgColor} transition-all duration-300 hover:scale-105 hover:shadow-lg`}
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {typeof social.icon === "string" ? (
                        <span className="text-xl">{social.icon}</span>
                      ) : (
                        <social.icon className="w-5 h-5" />
                      )}
                      <div className="text-sm">
                        <div className="font-medium">{social.name}</div>
                        <div className="text-xs text-gray-400">
                          {social.followers}
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-semibold text-white mb-6">
                Liên kết nhanh
              </h4>
              <div className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Link
                      href={link.href}
                      className="flex items-center gap-2 text-gray-300 hover:text-purple-400 transition-colors duration-200 group"
                    >
                      <div className="w-1 h-1 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Services */}
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-semibold text-white mb-6">Dịch vụ</h4>
              <div className="space-y-3">
                {services.map((service, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ x: 5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <Link
                      href={service.href}
                      className="flex items-center gap-2 text-gray-300 hover:text-pink-400 transition-colors duration-200 group"
                    >
                      <div className="w-1 h-1 bg-pink-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
                      {service.name}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            variants={itemVariants}
            className="mt-12 pt-8 border-t border-white/10"
          >
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {contactInfo.map((info, index) => (
                <motion.a
                  key={index}
                  href={info.href}
                  className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-200 group"
                  whileHover={{ scale: 1.05, y: -2 }}
                >
                  <div className="p-2 bg-white/10 rounded-lg group-hover:bg-white/20 transition-colors">
                    <info.icon className="w-5 h-5" />
                  </div>
                  <span>{info.text}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Newsletter */}
          <motion.div
            variants={itemVariants}
            className="mt-12 bg-white/10 backdrop-blur-sm rounded-2xl p-8"
          >
            <div className="text-center mb-6">
              <h4 className="text-xl font-semibold text-white mb-2">
                Đăng ký nhận tin tức mới nhất
              </h4>
              <p className="text-gray-300">
                Cập nhật về những content trends và tips sáng tạo mới nhất
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Nhập email của bạn"
                className="flex-1 px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300"
              />
              <motion.button
                className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-lg font-semibold flex items-center gap-2 hover:shadow-lg transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Send className="w-5 h-5" />
                <span>Đăng ký</span>
              </motion.button>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col md:flex-row items-center justify-between gap-4"
            >
              <motion.div
                variants={itemVariants}
                className="flex items-center gap-2 text-gray-300"
              >
                <span>© {currentYear} Hoàng Writer. Made with</span>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <Heart className="w-4 h-4 text-pink-400" />
                </motion.div>
                <span>in Vietnam</span>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="flex items-center gap-6"
              >
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Điều khoản
                </Link>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Bảo mật
                </Link>
                <Link
                  href="#"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Cookies
                </Link>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        className={`fixed bottom-8 right-8 p-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full shadow-lg z-50 transition-all duration-300 ${
          showScrollTop ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
        onClick={scrollToTop}
        whileHover={{ scale: 1.1, y: -2 }}
        whileTap={{ scale: 0.9 }}
        initial={{ opacity: 0, scale: 0 }}
        animate={{
          opacity: showScrollTop ? 1 : 0,
          scale: showScrollTop ? 1 : 0,
          rotate: showScrollTop ? 0 : 180,
        }}
        transition={{ duration: 0.3 }}
      >
        <ArrowUp className="w-6 h-6" />
      </motion.button>
    </footer>
  );
};

export default Footer;
