"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Facebook,
  Instagram,
  Youtube,
  Twitter,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  Heart,
  ArrowUp,
  ExternalLink,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface FooterLink {
  name: string;
  href: string;
  external?: boolean;
}

interface FooterSection {
  title: string;
  links: FooterLink[];
}

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerSections: FooterSection[] = [
    {
      title: "Services",
      links: [
        { name: "Livestream Marketing", href: "#services" },
        { name: "Content Creation", href: "#services" },
        { name: "Brand Ambassador", href: "#services" },
        { name: "Social Media Campaign", href: "#services" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About Me", href: "#about" },
        { name: "Portfolio", href: "#portfolio" },
        { name: "Skills", href: "#skills" },
        { name: "Testimonials", href: "#testimonials" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Blog", href: "#", external: true },
        { name: "Case Studies", href: "#portfolio" },
        { name: "Media Kit", href: "#", external: true },
        { name: "Brand Guidelines", href: "#", external: true },
      ],
    },
    {
      title: "Legal",
      links: [
        { name: "Privacy Policy", href: "#", external: true },
        { name: "Terms of Service", href: "#", external: true },
        { name: "Cookie Policy", href: "#", external: true },
        { name: "Disclaimer", href: "#", external: true },
      ],
    },
  ];

  const socialLinks = [
    {
      name: "Facebook",
      href: "https://facebook.com/koc.livestream",
      icon: <Facebook className="w-5 h-5" />,
      color: "hover:text-blue-400",
    },
    {
      name: "Instagram",
      href: "https://instagram.com/koc.livestream",
      icon: <Instagram className="w-5 h-5" />,
      color: "hover:text-pink-400",
    },
    {
      name: "YouTube",
      href: "https://youtube.com/koc.livestream",
      icon: <Youtube className="w-5 h-5" />,
      color: "hover:text-red-400",
    },
    {
      name: "Twitter",
      href: "https://twitter.com/koc.livestream",
      icon: <Twitter className="w-5 h-5" />,
      color: "hover:text-sky-400",
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/in/koc.livestream",
      icon: <Linkedin className="w-5 h-5" />,
      color: "hover:text-blue-500",
    },
  ];

  const contactInfo = [
    {
      icon: <Mail className="w-4 h-4" />,
      text: "koc.livestream@gmail.com",
      href: "mailto:koc.livestream@gmail.com",
    },
    {
      icon: <Phone className="w-4 h-4" />,
      text: "+84 123 456 789",
      href: "tel:+84123456789",
    },
    {
      icon: <MapPin className="w-4 h-4" />,
      text: "TP.HCM, Việt Nam",
      href: "#",
    },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
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
    <footer className="relative bg-slate-900/50 backdrop-blur-md border-t border-white/10">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-purple-500/50 to-transparent" />
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-pink-500/50 to-transparent" />
      </div>

      <div className="container mx-auto px-4 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-8"
        >
          {/* Brand Section */}
          <motion.div
            variants={itemVariants}
            className="lg:col-span-4 space-y-6"
          >
            <div className="flex items-center space-x-3">
              <div className="relative">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">K</span>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-pulse" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">KOC Livestream</h3>
                <p className="text-sm text-gray-400">
                  Professional Content Creator
                </p>
              </div>
            </div>

            <p className="text-gray-300 leading-relaxed">
              Tôi là một KOC chuyên nghiệp với 5+ năm kinh nghiệm, chuyên tạo
              nội dung chất lượng cao và kết nối thương hiệu với khách hàng một
              cách hiệu quả nhất.
            </p>

            {/* Contact Info */}
            <div className="space-y-3">
              {contactInfo.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  className="flex items-center space-x-3 text-gray-300 hover:text-purple-400 transition-colors group"
                  whileHover={{ x: 5 }}
                >
                  <div className="text-purple-400 group-hover:scale-110 transition-transform">
                    {item.icon}
                  </div>
                  <span className="text-sm">{item.text}</span>
                </motion.a>
              ))}
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    "w-10 h-10 glass rounded-lg border border-white/20 flex items-center justify-center text-gray-400 transition-all duration-300 hover:bg-white/10",
                    social.color
                  )}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Links Sections */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-4 gap-8">
            {footerSections.map((section, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="space-y-4"
              >
                <h4 className="text-lg font-semibold text-white">
                  {section.title}
                </h4>
                <ul className="space-y-2">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <motion.a
                        href={link.href}
                        target={link.external ? "_blank" : undefined}
                        rel={link.external ? "noopener noreferrer" : undefined}
                        className="text-gray-400 hover:text-white transition-colors text-sm flex items-center space-x-1 group"
                        whileHover={{ x: 5 }}
                      >
                        <span>{link.name}</span>
                        {link.external && (
                          <ExternalLink className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                        )}
                      </motion.a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Newsletter Section */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-white/10"
        >
          <div className="max-w-2xl mx-auto text-center">
            <h4 className="text-xl font-bold text-white mb-4">
              Đăng ký nhận tin tức mới nhất
            </h4>
            <p className="text-gray-300 mb-6">
              Nhận thông tin về các dự án mới, tips marketing và insights từ
              industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Nhập email của bạn"
                className="flex-1 px-4 py-3 glass rounded-lg border border-white/20 bg-white/5 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-colors"
              />
              <motion.button
                className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg font-medium hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Đăng ký
              </motion.button>
            </div>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          variants={itemVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="mt-12 pt-8 border-t border-white/10"
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>© {currentYear} KOC Livestream. All rights reserved.</span>
              <span>•</span>
              <span className="flex items-center space-x-1">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-red-500 animate-pulse" />
                <span>in Vietnam</span>
              </span>
            </div>

            <motion.button
              onClick={scrollToTop}
              className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors text-sm group"
              whileHover={{ y: -2 }}
            >
              <span>Back to top</span>
              <ArrowUp className="w-4 h-4 group-hover:animate-bounce" />
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-4 left-4 w-16 h-16 border border-purple-500/20 rounded-full animate-pulse" />
      <div className="absolute bottom-4 right-4 w-12 h-12 border border-pink-500/20 rounded-full animate-pulse delay-1000" />
    </footer>
  );
};

export default Footer;
