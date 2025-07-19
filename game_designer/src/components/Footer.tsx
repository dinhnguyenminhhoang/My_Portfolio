"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Heart,
  Mail,
  Phone,
  MapPin,
  Github,
  Linkedin,
  Instagram,
  Twitter,
  Youtube,
  ArrowUp,
  Gamepad2,
  Code,
  Palette,
  Users,
  Star,
  Zap,
  Coffee,
  Globe,
} from "lucide-react";
import { gsap } from "gsap";

const Footer = () => {
  const footerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(footerRef, { once: true, margin: "-100px" });

  // Footer floating animation
  useEffect(() => {
    const icons = document.querySelectorAll(".footer-icon");
    icons.forEach((icon, index) => {
      gsap.to(icon, {
        y: "-=5",
        duration: 2 + index * 0.3,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: index * 0.2,
      });
    });
  }, []);

  const socialLinks = [
    {
      name: "GitHub",
      icon: <Github className="w-5 h-5" />,
      url: "https://github.com/hoang-gamedesigner",
      color: "hover:text-gray-300",
    },
    {
      name: "LinkedIn",
      icon: <Linkedin className="w-5 h-5" />,
      url: "https://linkedin.com/in/hoang-gamedesigner",
      color: "hover:text-blue-400",
    },
    {
      name: "Instagram",
      icon: <Instagram className="w-5 h-5" />,
      url: "https://instagram.com/hoang.gamedesign",
      color: "hover:text-pink-400",
    },
    {
      name: "Twitter",
      icon: <Twitter className="w-5 h-5" />,
      url: "https://twitter.com/hoang_gamedev",
      color: "hover:text-blue-400",
    },
    {
      name: "YouTube",
      icon: <Youtube className="w-5 h-5" />,
      url: "https://youtube.com/@hoanggamedesign",
      color: "hover:text-red-400",
    },
  ];

  const quickLinks = [
    { name: "Về tôi", href: "#about" },
    { name: "Kỹ năng", href: "#skills" },
    { name: "Dự án", href: "#projects" },
    { name: "Liên hệ", href: "#contact" },
  ];

  const services = [
    { name: "Game Design", icon: <Gamepad2 className="w-4 h-4" /> },
    { name: "Level Design", icon: <Palette className="w-4 h-4" /> },
    { name: "Game Programming", icon: <Code className="w-4 h-4" /> },
    { name: "Team Leadership", icon: <Users className="w-4 h-4" /> },
  ];

  const stats = [
    { number: "50+", label: "Games Created" },
    { number: "3+", label: "Years Experience" },
    { number: "100%", label: "Success Rate" },
    { number: "24/7", label: "Passionate" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleQuickLinkClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  } as any;

  return (
    <footer ref={footerRef} className="relative mt-20 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950/30 to-slate-950" />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 12 }).map((_, i) => (
          <div
            key={i}
            className="footer-icon absolute opacity-20"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
            }}
          >
            {i % 4 === 0 ? (
              <Gamepad2 className="w-8 h-8 text-purple-400" />
            ) : i % 4 === 1 ? (
              <Code className="w-6 h-6 text-cyan-400" />
            ) : i % 4 === 2 ? (
              <Palette className="w-7 h-7 text-pink-400" />
            ) : (
              <Star className="w-5 h-5 text-yellow-400" />
            )}
          </div>
        ))}
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Main Footer Content */}
          <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 pt-16 pb-12">
            {/* Brand Section */}
            <motion.div variants={itemVariants} className="lg:col-span-1">
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center">
                  <Gamepad2 className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">Hoàng</h3>
                  <p className="text-sm text-purple-300">Game Designer</p>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed mb-6">
                Tạo ra những trải nghiệm game độc đáo và đầy cảm hứng. Mỗi dự án
                đều mang trong mình sự sáng tạo và đam mê không giới hạn.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="w-4 h-4 text-purple-400" />
                  <span className="text-sm">Hồ Chí Minh, Việt Nam</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-4 h-4 text-purple-400" />
                  <span className="text-sm">hoang@gamedesigner.vn</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-4 h-4 text-purple-400" />
                  <span className="text-sm">+84 (0)xx xxxx xxx</span>
                </div>
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-semibold text-white mb-6 flex items-center">
                <Zap className="w-5 h-5 text-purple-400 mr-2" />
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link) => (
                  <li key={link.name}>
                    <button
                      onClick={() => handleQuickLinkClick(link.href)}
                      className="text-gray-300 hover:text-white transition-colors duration-300 text-sm flex items-center group"
                    >
                      <ArrowUp className="w-3 h-3 mr-2 rotate-45 opacity-0 group-hover:opacity-100 transition-opacity" />
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>

              {/* Newsletter */}
              <div className="mt-8 p-4 glass-effect rounded-xl border border-white/10">
                <h5 className="text-white font-medium mb-2">
                  Game Dev Updates
                </h5>
                <p className="text-xs text-gray-400 mb-3">
                  Nhận tin tức mới nhất về game design
                </p>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Your email"
                    className="flex-1 px-3 py-2 bg-white/5 border border-white/20 rounded-l-lg text-white text-sm focus:outline-none focus:border-purple-400"
                  />
                  <button className="px-4 py-2 bg-gradient-primary rounded-r-lg hover:scale-105 transition-transform">
                    <Mail className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Services */}
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-semibold text-white mb-6 flex items-center">
                <Star className="w-5 h-5 text-purple-400 mr-2" />
                Services
              </h4>
              <ul className="space-y-3">
                {services.map((service) => (
                  <li
                    key={service.name}
                    className="flex items-center space-x-3 text-gray-300"
                  >
                    <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                      {service.icon}
                    </div>
                    <span className="text-sm">{service.name}</span>
                  </li>
                ))}
              </ul>

              {/* Stats */}
              <div className="mt-8 grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    variants={itemVariants}
                    className="text-center p-3 glass-effect rounded-xl border border-white/10"
                  >
                    <div className="text-lg font-bold text-gradient">
                      {stat.number}
                    </div>
                    <div className="text-xs text-gray-400">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Social & Connect */}
            <motion.div variants={itemVariants}>
              <h4 className="text-lg font-semibold text-white mb-6 flex items-center">
                <Heart className="w-5 h-5 text-purple-400 mr-2" />
                Let's Connect
              </h4>

              <p className="text-gray-300 text-sm mb-6 leading-relaxed">
                Theo dõi journey game design của tôi và kết nối để cùng nhau tạo
                ra những trải nghiệm game tuyệt vời!
              </p>

              {/* Social Links */}
              <div className="flex flex-wrap gap-3 mb-6">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-10 h-10 glass-effect border border-white/20 rounded-xl flex items-center justify-center text-gray-400 transition-all duration-300 ${social.color} hover:border-purple-400/50`}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>

              {/* Status */}
              <div className="glass-effect rounded-xl p-4 border border-white/10">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                  <span className="text-white font-medium text-sm">
                    Available for projects
                  </span>
                </div>
                <p className="text-xs text-gray-400">
                  Currently accepting new game design projects
                </p>
              </div>
            </motion.div>
          </div>

          {/* Bottom Bar */}
          <motion.div
            variants={itemVariants}
            className="border-t border-white/10 pt-8 pb-6"
          >
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="flex items-center space-x-4 text-sm text-gray-400">
                <span>© 2024 Hoàng Game Designer</span>
                <span className="hidden md:inline">•</span>
                <span className="hidden md:inline">Made with</span>
                <Heart className="w-4 h-4 text-red-400 hidden md:inline" />
                <span className="hidden md:inline">in Vietnam</span>
              </div>

              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-4 text-xs text-gray-400">
                  <button className="hover:text-white transition-colors">
                    Privacy
                  </button>
                  <button className="hover:text-white transition-colors">
                    Terms
                  </button>
                  <button className="hover:text-white transition-colors">
                    Sitemap
                  </button>
                </div>

                <button
                  onClick={scrollToTop}
                  className="flex items-center space-x-2 px-4 py-2 glass-effect border border-white/20 rounded-lg text-sm text-gray-300 hover:text-white hover:border-purple-400/50 transition-all duration-300 group"
                >
                  <span>Back to top</span>
                  <ArrowUp className="w-4 h-4 transition-transform group-hover:-translate-y-1" />
                </button>
              </div>
            </div>

            {/* Tech Stack */}
            <div className="mt-6 pt-6 border-t border-white/5">
              <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-gray-500">
                <span>Built with:</span>
                <div className="flex items-center space-x-1">
                  <Globe className="w-3 h-3" />
                  <span>Next.js</span>
                </div>
                <span>•</span>
                <div className="flex items-center space-x-1">
                  <Palette className="w-3 h-3" />
                  <span>Tailwind CSS</span>
                </div>
                <span>•</span>
                <div className="flex items-center space-x-1">
                  <Zap className="w-3 h-3" />
                  <span>Framer Motion</span>
                </div>
                <span>•</span>
                <div className="flex items-center space-x-1">
                  <Coffee className="w-3 h-3" />
                  <span>GSAP</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll to top floating button */}
      <motion.button
        initial={{ opacity: 0, scale: 0 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-primary rounded-full flex items-center justify-center shadow-lg hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-110 z-30"
      >
        <ArrowUp className="w-6 h-6 text-white" />
      </motion.button>
    </footer>
  );
};

export default Footer;
