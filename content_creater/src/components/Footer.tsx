"use client";

import { motion } from "framer-motion";
import {
  Sparkles,
  Youtube,
  Instagram,
  Twitter,
  Facebook,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Heart,
  ArrowUp,
  ExternalLink,
} from "lucide-react";
import { smoothScrollTo } from "@/lib/utils";

const socialLinks = [
  {
    name: "YouTube",
    icon: Youtube,
    url: "https://youtube.com/@creator",
    color: "hover:text-red-400 hover:bg-red-400/10",
    followers: "250K",
  },
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://instagram.com/creator",
    color: "hover:text-pink-400 hover:bg-pink-400/10",
    followers: "180K",
  },
  {
    name: "Twitter",
    icon: Twitter,
    url: "https://twitter.com/creator",
    color: "hover:text-blue-400 hover:bg-blue-400/10",
    followers: "95K",
  },
  {
    name: "Facebook",
    icon: Facebook,
    url: "https://facebook.com/creator",
    color: "hover:text-blue-500 hover:bg-blue-500/10",
    followers: "120K",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://linkedin.com/in/creator",
    color: "hover:text-blue-600 hover:bg-blue-600/10",
    followers: "45K",
  },
];

const quickLinks = [
  { name: "Giới thiệu", href: "about" },
  { name: "Dự án", href: "projects" },
  { name: "Liên hệ", href: "contact" },
  { name: "Blog", href: "#" },
  { name: "Dịch vụ", href: "#" },
];

const services = [
  { name: "Video Production", href: "#" },
  { name: "Content Strategy", href: "#" },
  { name: "Brand Campaign", href: "#" },
  { name: "Photography", href: "#" },
  { name: "Social Media", href: "#" },
];

const contactInfo = [
  {
    icon: Mail,
    text: "hello@creator.com",
    href: "mailto:hello@creator.com",
  },
  {
    icon: Phone,
    text: "+84 123 456 789",
    href: "tel:+84123456789",
  },
  {
    icon: MapPin,
    text: "TP. Hồ Chí Minh, Việt Nam",
    href: "#",
  },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleQuickLinkClick = (href: string) => {
    if (href.startsWith("#")) {
      window.open(href, "_blank");
    } else {
      smoothScrollTo(href);
    }
  };

  return (
    <footer className="relative bg-gray-900/50 backdrop-blur-sm border-t border-gray-800/50">
      {/* Main Footer Content */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand & Description */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <div className="flex items-center space-x-2 mb-4">
                <div className="relative">
                  <Sparkles className="w-8 h-8 text-purple-400" />
                  <motion.div
                    className="absolute inset-0 bg-purple-400 rounded-full blur-lg opacity-50"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.5, 0.8, 0.5],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </div>
                <span className="text-xl font-bold font-poppins bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Creator
                </span>
              </div>

              <p className="text-gray-300 leading-relaxed mb-6">
                Tạo nên những câu chuyện độc đáo, truyền cảm hứng và kết nối
                cộng đồng qua nội dung sáng tạo đầy màu sắc.
              </p>

              {/* Newsletter Signup */}
              <div className="mb-6">
                <h4 className="text-white font-semibold mb-3">
                  Theo dõi updates
                </h4>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Email của bạn"
                    className="flex-1 px-4 py-2 bg-gray-800/50 border border-gray-700 rounded-l-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-500"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="px-4 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-r-lg text-white hover:shadow-lg transition-all duration-300"
                  >
                    <Mail className="w-5 h-5" />
                  </motion.button>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white font-semibold mb-6">Liên kết nhanh</h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <button
                      onClick={() => handleQuickLinkClick(link.href)}
                      className="text-gray-300 hover:text-purple-400 transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span className="w-2 h-2 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white font-semibold mb-6">Dịch vụ</h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <motion.li
                    key={service.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <a
                      href={service.href}
                      className="text-gray-300 hover:text-purple-400 transition-colors duration-300 flex items-center gap-2 group"
                    >
                      <span className="w-2 h-2 bg-purple-400 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      {service.name}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-white font-semibold mb-6">Liên hệ</h4>
              <div className="space-y-4">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.text}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <a
                      href={info.href}
                      className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition-colors duration-300 group"
                    >
                      <info.icon className="w-5 h-5 group-hover:scale-110 transition-transform duration-300" />
                      <span className="text-sm">{info.text}</span>
                    </a>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Social Media Links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-gray-800/50"
        >
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <h4 className="text-white font-semibold mb-4 text-center md:text-left">
                Theo dõi trên mạng xã hội
              </h4>
              <div className="flex justify-center md:justify-start gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className={`group relative p-3 rounded-xl bg-gray-800/50 border border-gray-700/50 transition-all duration-300 ${social.color}`}
                  >
                    <social.icon className="w-6 h-6 transition-transform duration-300 group-hover:scale-110" />

                    {/* Tooltip */}
                    <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-gray-900 text-white text-xs rounded-lg px-3 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
                      {social.name}
                      <div className="absolute top-full left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45" />
                    </div>

                    {/* Follower count */}
                    <div className="absolute -bottom-2 -right-2 bg-purple-500 text-white text-xs rounded-full px-2 py-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {social.followers}
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
              className="text-center md:text-right"
            >
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="bg-gray-800/50 rounded-lg p-3">
                  <div className="text-lg font-bold text-purple-400">690K+</div>
                  <div className="text-xs text-gray-400">Total Followers</div>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-3">
                  <div className="text-lg font-bold text-pink-400">50M+</div>
                  <div className="text-xs text-gray-400">Total Views</div>
                </div>
                <div className="bg-gray-800/50 rounded-lg p-3">
                  <div className="text-lg font-bold text-blue-400">500+</div>
                  <div className="text-xs text-gray-400">Projects</div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800/50 bg-gray-900/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-gray-400 text-sm"
            >
              <span>&copy; 2024 Creator Portfolio.</span>
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-400 animate-pulse" />
              <span>in Vietnam</span>
            </motion.div>

            <div className="flex items-center gap-6">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="flex items-center gap-4 text-sm text-gray-400"
              >
                <a
                  href="#"
                  className="hover:text-purple-400 transition-colors duration-300"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="hover:text-purple-400 transition-colors duration-300"
                >
                  Terms of Service
                </a>
                <a
                  href="#"
                  className="hover:text-purple-400 transition-colors duration-300 flex items-center gap-1"
                >
                  Sitemap
                  <ExternalLink className="w-3 h-3" />
                </a>
              </motion.div>

              {/* Back to Top Button */}
              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white shadow-lg hover:shadow-purple-500/30 transition-all duration-300 group"
              >
                <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform duration-300" />
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-2 h-2 bg-purple-400 rounded-full opacity-30" />
        <div className="absolute bottom-1/4 right-10 w-3 h-3 bg-pink-400 rounded-full opacity-20" />
        <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-blue-400 rounded-full opacity-25" />
      </div>
    </footer>
  );
}
