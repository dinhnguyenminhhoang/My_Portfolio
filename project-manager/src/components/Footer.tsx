"use client";

import { motion } from "framer-motion";
import {
  Heart,
  ArrowUp,
  Mail,
  Phone,
  Linkedin,
  Twitter,
  Instagram,
  Github,
  MapPin,
  Code,
  Coffee,
} from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/utils";

const quickLinks = [
  { name: "Giới thiệu", href: "#about" },
  { name: "Dự án", href: "#projects" },
  { name: "Liên hệ", href: "#contact" },
];

const services = [
  "Quản lý Dự án",
  "Tư vấn Quy trình",
  "Team Building",
  "Product Management",
  "Agile Coaching",
  "Digital Transformation",
];

const socialLinks = [
  {
    icon: Linkedin,
    name: "LinkedIn",
    url: "https://linkedin.com/in/hoang-pm",
    color: "hover:text-blue-400",
    hoverBg: "hover:bg-blue-400/10",
  },
  {
    icon: Twitter,
    name: "Twitter",
    url: "https://twitter.com/hoang_pm",
    color: "hover:text-sky-400",
    hoverBg: "hover:bg-sky-400/10",
  },
  {
    icon: Instagram,
    name: "Instagram",
    url: "https://instagram.com/hoang_pm",
    color: "hover:text-pink-400",
    hoverBg: "hover:bg-pink-400/10",
  },
  {
    icon: Github,
    name: "GitHub",
    url: "https://github.com/hoang-pm",
    color: "hover:text-gray-400",
    hoverBg: "hover:bg-gray-400/10",
  },
];

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

const scrollToSection = (href: string) => {
  const element = document.querySelector(href);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-black via-gray-900 to-black border-t border-gray-800">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_white_1px,_transparent_0)] bg-[length:24px_24px]"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          className="py-12 grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {/* Brand Section */}
          <motion.div variants={fadeInUp} className="lg:col-span-2">
            <div className="flex items-center mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-full flex items-center justify-center mr-4">
                <Code className="text-white" size={24} />
              </div>
              <div>
                <h3 className="text-2xl font-bold bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
                  Hoàng
                </h3>
                <p className="text-gray-400 text-sm">Project Manager</p>
              </div>
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
              Đam mê quản lý dự án và tạo ra những sản phẩm có tác động tích
              cực. Luôn tìm kiếm cơ hội hợp tác với những đội nhóm tài năng.
            </p>

            <div className="flex items-center space-x-6 text-sm text-gray-400">
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-2" />
                <span>TP. Hồ Chí Minh</span>
              </div>
              <div className="flex items-center">
                <Coffee className="w-4 h-4 mr-2" />
                <span>Luôn sẵn sàng</span>
              </div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeInUp}>
            <h4 className="text-lg font-semibold text-white mb-4">
              Liên kết nhanh
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <motion.button
                    onClick={() => scrollToSection(link.href)}
                    whileHover={{ x: 5 }}
                    className="text-gray-400 hover:text-white transition-colors duration-200 flex items-center"
                  >
                    <span className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-3"></span>
                    {link.name}
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div variants={fadeInUp}>
            <h4 className="text-lg font-semibold text-white mb-4">Dịch vụ</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="text-gray-400 flex items-center">
                  <span className="w-1.5 h-1.5 bg-cyan-500 rounded-full mr-3"></span>
                  {service}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Social Links & Contact */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          className="py-8 border-t border-gray-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
            {/* Social Links */}
            <motion.div
              variants={fadeInUp}
              className="flex items-center space-x-1"
            >
              <span className="text-gray-400 mr-4">Kết nối:</span>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center text-gray-400 transition-all duration-300 ${social.color} ${social.hoverBg} hover:border-gray-600`}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </motion.div>

            {/* Contact Info */}
            <motion.div
              variants={fadeInUp}
              className="flex items-center space-x-6 text-sm"
            >
              <a
                href="mailto:hoang.pm@example.com"
                className="flex items-center text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Mail className="w-4 h-4 mr-2" />
                hoang.pm@example.com
              </a>
              <a
                href="tel:+84123456789"
                className="flex items-center text-gray-400 hover:text-white transition-colors duration-200"
              >
                <Phone className="w-4 h-4 mr-2" />
                +84 123 456 789
              </a>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom Bar */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          className="py-6 border-t border-gray-800"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex items-center text-gray-400 text-sm">
              <span>© {currentYear} Hoàng. Được tạo với</span>
              <motion.div
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
                className="mx-2"
              >
                <Heart className="w-4 h-4 text-red-500" />
              </motion.div>
              <span>và nhiều ☕</span>
            </div>

            <div className="flex items-center space-x-6">
              <span className="text-gray-500 text-sm">
                Được xây dựng với Next.js & Tailwind CSS
              </span>

              <motion.button
                onClick={scrollToTop}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                className="w-10 h-10 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center text-white hover:from-pink-600 hover:to-purple-700 transition-all duration-300 shadow-lg shadow-purple-500/25"
              >
                <ArrowUp size={18} />
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500"></div>
    </footer>
  );
}
