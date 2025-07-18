"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { gsap } from "gsap";
import {
  Heart,
  Sparkles,
  Star,
  Coffee,
  MapPin,
  Mail,
  Phone,
  Instagram,
  Youtube,
  Music,
  Camera,
  ArrowUp,
  Zap,
  Send,
  Globe,
  MessageCircle,
} from "lucide-react";

const Footer = () => {
  const footerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(footerRef, { once: true });

  useEffect(() => {
    if (isInView) {
      const ctx = gsap.context(() => {
        // Floating animation for footer elements
        gsap.to(".footer-float", {
          y: -10,
          duration: 2,
          ease: "power2.inOut",
          stagger: 0.1,
          repeat: -1,
          yoyo: true,
        });

        // Sparkle rotation
        gsap.to(".footer-sparkle", {
          rotation: 360,
          duration: 4,
          ease: "none",
          repeat: -1,
        });

        // Pulse animation for heart
        gsap.to(".footer-heart", {
          scale: 1.2,
          duration: 1,
          ease: "power2.inOut",
          repeat: -1,
          yoyo: true,
        });

        // Stagger animation for footer sections
        gsap.fromTo(
          ".footer-section",
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "back.out(1.7)",
          }
        );
      }, footerRef);

      return () => ctx.revert();
    }
  }, [isInView]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Trang chủ", href: "#home", icon: "🏠" },
    { name: "Về tôi", href: "#about", icon: "✨" },
    { name: "Kỹ năng", href: "#skills", icon: "🚀" },
    { name: "Dự án", href: "#projects", icon: "💎" },
    { name: "Liên hệ", href: "#contact", icon: "💌" },
  ];

  const socialLinks = [
    {
      name: "Instagram",
      icon: <Instagram className="w-5 h-5" />,
      url: "#",
      color: "bg-pink-500 hover:bg-pink-600",
      followers: "45K",
      description: "Daily lifestyle & BTS",
    },
    {
      name: "TikTok",
      icon: <Music className="w-5 h-5" />,
      url: "#",
      color: "bg-black hover:bg-gray-800",
      followers: "120K",
      description: "Viral content & trends",
    },
    {
      name: "YouTube",
      icon: <Youtube className="w-5 h-5" />,
      url: "#",
      color: "bg-red-500 hover:bg-red-600",
      followers: "28K",
      description: "Long-form content",
    },
    {
      name: "Portfolio",
      icon: <Camera className="w-5 h-5" />,
      url: "#",
      color: "bg-purple-500 hover:bg-purple-600",
      followers: "View",
      description: "Complete showcase",
    },
  ];

  const services = [
    {
      name: "Content Creation",
      icon: "🎬",
      description: "Video & Photo content",
    },
    { name: "Script Writing", icon: "📝", description: "Engaging storylines" },
    {
      name: "Brand Collaboration",
      icon: "🤝",
      description: "Partnership campaigns",
    },
    { name: "Social Strategy", icon: "📊", description: "Growth & engagement" },
  ];

  const contactInfo = [
    { icon: <Mail className="w-4 h-4" />, text: "hoang.creative@gmail.com" },
    { icon: <Phone className="w-4 h-4" />, text: "+84 123 456 789" },
    { icon: <MapPin className="w-4 h-4" />, text: "TP. Hồ Chí Minh, Việt Nam" },
    { icon: <Globe className="w-4 h-4" />, text: "Available worldwide" },
  ];

  return (
    <footer
      ref={footerRef}
      className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900 text-white overflow-hidden"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 footer-float">
          <div className="w-32 h-32 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-xl"></div>
        </div>
        <div className="absolute top-40 right-20 footer-float">
          <div className="w-24 h-24 bg-gradient-to-r from-pink-500/20 to-orange-500/20 rounded-full blur-xl"></div>
        </div>
        <div className="absolute bottom-40 left-20 footer-float">
          <div className="w-28 h-28 bg-gradient-to-r from-orange-500/20 to-yellow-500/20 rounded-full blur-xl"></div>
        </div>
        <div className="absolute bottom-20 right-10 footer-float">
          <div className="w-20 h-20 bg-gradient-to-r from-blue-500/20 to-purple-500/20 rounded-full blur-xl"></div>
        </div>
      </div>

      {/* Floating Icons */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-32 left-1/4 footer-sparkle">
          <Sparkles className="w-6 h-6 text-purple-400/50" />
        </div>
        <div className="absolute top-48 right-1/3 footer-heart">
          <Heart className="w-5 h-5 text-pink-400/50" />
        </div>
        <div className="absolute bottom-1/3 left-1/6 footer-sparkle">
          <Star className="w-7 h-7 text-orange-400/50" />
        </div>
        <div className="absolute bottom-48 right-1/4 footer-float">
          <Zap className="w-6 h-6 text-yellow-400/50" />
        </div>
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Brand Section */}
            <div className="footer-section lg:col-span-1">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                {/* Logo */}
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-white footer-sparkle" />
                    </div>
                    <div className="absolute -top-1 -right-1 w-4 h-4 bg-yellow-400 rounded-full flex items-center justify-center">
                      <Heart className="w-2 h-2 text-red-500 footer-heart" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold">Hoàng Creative</h3>
                    <p className="text-sm text-gray-300">
                      Chipi Style Creator ✨
                    </p>
                  </div>
                </div>

                {/* Description */}
                <p className="text-gray-300 leading-relaxed">
                  Tạo ra những nội dung viral với chất riêng, kết nối và truyền
                  cảm hứng cho hàng triệu người trẻ Việt Nam qua các nền tảng
                  social media.
                </p>

                {/* Stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-purple-300">
                      2M+
                    </div>
                    <div className="text-xs text-gray-300">Total Views</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 text-center">
                    <div className="text-2xl font-bold text-pink-300">50K+</div>
                    <div className="text-xs text-gray-300">Followers</div>
                  </div>
                </div>

                {/* Quote */}
                <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm rounded-xl p-4 border border-purple-500/20">
                  <div className="flex items-center space-x-2 mb-2">
                    <Coffee className="w-4 h-4 text-orange-400" />
                    <span className="text-sm font-medium">Daily Motto</span>
                  </div>
                  <p className="text-sm italic text-gray-200">
                    "Mỗi ngày tạo ra một nụ cười!"
                  </p>
                </div>
              </motion.div>
            </div>

            {/* Quick Links */}
            <div className="footer-section">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-6"
              >
                <h4 className="text-lg font-bold flex items-center">
                  <Zap className="w-5 h-5 text-yellow-400 mr-2" />
                  Khám phá
                </h4>

                <ul className="space-y-3">
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <motion.button
                        whileHover={{ scale: 1.05, x: 5 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => scrollToSection(link.href)}
                        className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-200 group"
                      >
                        <span className="text-lg">{link.icon}</span>
                        <span className="group-hover:text-purple-300">
                          {link.name}
                        </span>
                      </motion.button>
                    </li>
                  ))}
                </ul>

                {/* Newsletter */}
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-purple-500/20">
                  <div className="flex items-center space-x-2 mb-3">
                    <Send className="w-4 h-4 text-purple-400" />
                    <span className="text-sm font-medium">Newsletter</span>
                  </div>
                  <p className="text-xs text-gray-300 mb-3">
                    Nhận tips viral mỗi tuần!
                  </p>
                  <div className="flex space-x-2">
                    <input
                      type="email"
                      placeholder="your@email.com"
                      className="flex-1 px-3 py-2 bg-white/10 border border-white/20 rounded-lg text-sm text-white placeholder-gray-400 focus:outline-none focus:border-purple-400"
                    />
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="px-3 py-2 bg-purple-500 hover:bg-purple-600 rounded-lg"
                    >
                      <Send className="w-4 h-4" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Services */}
            <div className="footer-section">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="space-y-6"
              >
                <h4 className="text-lg font-bold flex items-center">
                  <Star className="w-5 h-5 text-orange-400 mr-2" />
                  Dịch vụ
                </h4>

                <ul className="space-y-4">
                  {services.map((service, index) => (
                    <li key={index}>
                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="flex items-start space-x-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-colors duration-200"
                      >
                        <span className="text-xl">{service.icon}</span>
                        <div>
                          <h5 className="font-medium text-white">
                            {service.name}
                          </h5>
                          <p className="text-xs text-gray-300">
                            {service.description}
                          </p>
                        </div>
                      </motion.div>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => scrollToSection("#contact")}
                  className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white font-medium py-3 px-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                >
                  <span className="flex items-center justify-center space-x-2">
                    <MessageCircle className="w-4 h-4" />
                    <span>Bắt đầu hợp tác</span>
                  </span>
                </motion.button>
              </motion.div>
            </div>

            {/* Contact & Social */}
            <div className="footer-section">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="space-y-6"
              >
                <h4 className="text-lg font-bold flex items-center">
                  <Heart className="w-5 h-5 text-pink-400 mr-2" />
                  Kết nối
                </h4>

                {/* Contact Info */}
                <ul className="space-y-3">
                  {contactInfo.map((contact, index) => (
                    <li key={index}>
                      <div className="flex items-center space-x-3 text-gray-300">
                        <div className="text-purple-400">{contact.icon}</div>
                        <span className="text-sm">{contact.text}</span>
                      </div>
                    </li>
                  ))}
                </ul>

                {/* Social Links */}
                <div className="space-y-3">
                  <h5 className="font-medium text-white">Theo dõi tôi:</h5>
                  <div className="grid grid-cols-2 gap-3">
                    {socialLinks.map((social, index) => (
                      <motion.a
                        key={index}
                        href={social.url}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group"
                      >
                        <div className="bg-white/10 backdrop-blur-sm rounded-xl p-3 hover:bg-white/20 transition-all duration-300 border border-white/10 hover:border-purple-400/50">
                          <div className="flex items-center space-x-2 mb-1">
                            <div
                              className={`w-6 h-6 ${
                                social.color.split(" ")[0]
                              } rounded-lg flex items-center justify-center text-white text-xs`}
                            >
                              {social.icon}
                            </div>
                            <span className="text-sm font-medium">
                              {social.name}
                            </span>
                          </div>
                          <div className="text-xs text-gray-300">
                            {social.followers}
                          </div>
                        </div>
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* Fun Stats */}
                <div className="bg-gradient-to-r from-pink-500/20 to-orange-500/20 backdrop-blur-sm rounded-xl p-4 border border-pink-500/20">
                  <div className="flex items-center space-x-2 mb-3">
                    <Coffee className="w-4 h-4 text-orange-400" />
                    <span className="text-sm font-medium">Fun Facts</span>
                  </div>
                  <div className="space-y-2 text-xs text-gray-200">
                    <div>☕ 1,095 cups of coffee this year</div>
                    <div>🎬 500+ videos created</div>
                    <div>🌙 Night owl working 11PM-3AM</div>
                    <div>🎵 Currently listening to Vpop</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 bg-black/20 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              {/* Copyright */}
              <div className="flex items-center space-x-4 text-sm text-gray-400">
                <span>© {currentYear} Hoàng Creative. Made with</span>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                  className="text-red-400"
                >
                  <Heart className="w-4 h-4" />
                </motion.div>
                <span>in Vietnam</span>
              </div>

              {/* Back to Top */}
              <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={scrollToTop}
                className="flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white text-sm font-medium px-4 py-2 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl"
              >
                <ArrowUp className="w-4 h-4" />
                <span>Back to Top</span>
              </motion.button>

              {/* Links */}
              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="hover:text-purple-400 transition-colors"
                >
                  Privacy Policy
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="hover:text-purple-400 transition-colors"
                >
                  Terms of Service
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  className="hover:text-purple-400 transition-colors"
                >
                  Support
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
