"use client";

import { useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Instagram,
  Youtube,
  MessageCircle,
  Mail,
  Phone,
  MapPin,
  Heart,
  ArrowUp,
  Sparkles,
  Camera,
  Star,
  Palette,
  Video,
} from "lucide-react";
import { gsap } from "gsap";

const Footer = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, margin: "-100px" });

  // GSAP animations
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Floating elements animation
      gsap.to(".footer-float", {
        y: -15,
        rotation: 360,
        duration: 4,
        ease: "power2.inOut",
        stagger: 0.5,
        repeat: -1,
        yoyo: true,
      });

      gsap.to(".sparkle-animate", {
        scale: [1, 1.2, 1] as any,
        opacity: [0.5, 1, 0.5] as any,
        duration: 2,
        stagger: 0.3,
        repeat: -1,
        ease: "power2.inOut",
      });

      gsap.to(".logo-glow", {
        boxShadow: [
          "0 0 20px rgba(147, 51, 234, 0.3)",
          "0 0 40px rgba(236, 72, 153, 0.4)",
          "0 0 20px rgba(147, 51, 234, 0.3)",
        ] as any,
        duration: 3,
        repeat: -1,
        ease: "power2.inOut",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerLinks = {
    services: [
      "Fashion Photography",
      "Brand Storytelling",
      "Content Creation",
      "Social Media Strategy",
      "Creative Direction",
      "Video Production",
    ],
    quickLinks: [
      { name: "Home", href: "#home" },
      { name: "About", href: "#about" },
      { name: "Skills", href: "#skills" },
      { name: "Portfolio", href: "#portfolio" },
      { name: "Testimonials", href: "#testimonials" },
      { name: "Contact", href: "#contact" },
    ],
    contact: [
      {
        icon: Mail,
        text: "hello@hoangfashion.com",
        href: "mailto:hello@hoangfashion.com",
      },
      { icon: Phone, text: "+84 xxx xxx xxx", href: "tel:+84xxxxxxxxx" },
      { icon: MapPin, text: "TP. Hồ Chí Minh, Vietnam", href: "#" },
    ],
  };

  const socialLinks = [
    {
      icon: Instagram,
      name: "Instagram",
      href: "#",
      handle: "@hoang.fashion",
      color: "hover:text-pink-500",
      bgColor: "hover:bg-gradient-to-r hover:from-pink-500 hover:to-purple-500",
    },
    {
      icon: Youtube,
      name: "YouTube",
      href: "#",
      handle: "Hoàng Fashion",
      color: "hover:text-red-500",
      bgColor: "hover:bg-gradient-to-r hover:from-red-500 hover:to-pink-500",
    },
    {
      icon: MessageCircle,
      name: "TikTok",
      href: "#",
      handle: "@hoangchipi",
      color: "hover:text-purple-500",
      bgColor: "hover:bg-gradient-to-r hover:from-black hover:to-purple-500",
    },
  ];

  const achievements = [
    { icon: Star, count: "50+", label: "Projects Completed" },
    { icon: Heart, count: "100+", label: "Happy Clients" },
    { icon: Camera, count: "1M+", label: "Photo Shoots" },
    { icon: Video, count: "500+", label: "Video Content" },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  } as any;

  return (
    <footer
      ref={containerRef}
      className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-pink-900 text-white overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating decorative elements */}
        <div className="footer-float absolute top-20 left-20 w-6 h-6 text-purple-400 opacity-30">
          <Sparkles className="w-full h-full" />
        </div>
        <div className="footer-float absolute top-40 right-32 w-4 h-4 text-pink-400 opacity-40">
          <Heart className="w-full h-full fill-current" />
        </div>
        <div className="footer-float absolute bottom-40 left-40 w-5 h-5 text-blue-400 opacity-25">
          <Camera className="w-full h-full" />
        </div>
        <div className="footer-float absolute bottom-20 right-20 w-7 h-7 text-orange-400 opacity-30">
          <Star className="w-full h-full fill-current" />
        </div>

        {/* Background gradients */}
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-purple-600/20 to-pink-600/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-gradient-to-br from-blue-600/20 to-cyan-600/20 rounded-full blur-3xl" />

        {/* Sparkle elements */}
        <div className="sparkle-animate absolute top-32 left-1/3 w-2 h-2 bg-white rounded-full" />
        <div className="sparkle-animate absolute top-64 right-1/3 w-3 h-3 bg-yellow-300 rounded-full" />
        <div className="sparkle-animate absolute bottom-32 left-2/3 w-2 h-2 bg-pink-300 rounded-full" />
      </div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="space-y-16"
          >
            {/* Top Section - Logo & Description */}
            <motion.div
              variants={itemVariants}
              className="text-center space-y-8"
            >
              <div className="space-y-4">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  className="logo-glow inline-block"
                >
                  <h2 className="text-4xl lg:text-6xl font-bold">
                    <span className="bg-gradient-to-r from-white via-purple-200 to-pink-200 bg-clip-text text-transparent">
                      Hoàng
                    </span>
                  </h2>
                </motion.div>

                <p className="text-xl lg:text-2xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                  Creating stunning fashion content with a unique{" "}
                  <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent font-semibold">
                    "chipi"
                  </span>{" "}
                  style that captures hearts and inspires creativity
                </p>
              </div>

              {/* Achievement Stats */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 max-w-4xl mx-auto">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={
                      isInView
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0 }
                    }
                    transition={{
                      delay: 0.5 + index * 0.1,
                      duration: 0.5,
                      type: "spring",
                    }}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="text-center group"
                  >
                    <motion.div
                      className="w-16 h-16 mx-auto mb-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-purple-500/25"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <achievement.icon className="w-8 h-8 text-white" />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white group-hover:text-purple-300 transition-colors duration-300">
                      {achievement.count}
                    </h3>
                    <p className="text-gray-400 text-sm font-medium">
                      {achievement.label}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Middle Section - Links & Info */}
            <motion.div
              variants={itemVariants}
              className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12"
            >
              {/* Services */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-white flex items-center space-x-2">
                  <Palette className="w-5 h-5 text-purple-400" />
                  <span>Services</span>
                </h3>
                <ul className="space-y-3">
                  {footerLinks.services.map((service, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={
                        isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                      }
                      transition={{ delay: 0.7 + index * 0.1, duration: 0.4 }}
                      whileHover={{ x: 5 }}
                      className="text-gray-400 hover:text-purple-300 transition-all duration-300 cursor-pointer"
                    >
                      {service}
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Quick Links */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-white flex items-center space-x-2">
                  <Sparkles className="w-5 h-5 text-pink-400" />
                  <span>Quick Links</span>
                </h3>
                <ul className="space-y-3">
                  {footerLinks.quickLinks.map((link, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={
                        isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                      }
                      transition={{ delay: 0.8 + index * 0.1, duration: 0.4 }}
                    >
                      <motion.a
                        href={link.href}
                        whileHover={{ x: 5 }}
                        className="text-gray-400 hover:text-pink-300 transition-all duration-300 block"
                      >
                        {link.name}
                      </motion.a>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Contact Info */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-white flex items-center space-x-2">
                  <MessageCircle className="w-5 h-5 text-blue-400" />
                  <span>Contact</span>
                </h3>
                <ul className="space-y-4">
                  {footerLinks.contact.map((contact, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={
                        isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                      }
                      transition={{ delay: 0.9 + index * 0.1, duration: 0.4 }}
                    >
                      <motion.a
                        href={contact.href}
                        whileHover={{ x: 5 }}
                        className="flex items-center space-x-3 text-gray-400 hover:text-blue-300 transition-all duration-300"
                      >
                        <contact.icon className="w-4 h-4" />
                        <span className="text-sm">{contact.text}</span>
                      </motion.a>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Social Media */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-white flex items-center space-x-2">
                  <Heart className="w-5 h-5 text-red-400 fill-current" />
                  <span>Follow Me</span>
                </h3>
                <div className="space-y-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={
                        isInView
                          ? { opacity: 1, scale: 1 }
                          : { opacity: 0, scale: 0 }
                      }
                      transition={{
                        delay: 1 + index * 0.1,
                        duration: 0.4,
                        type: "spring",
                      }}
                      whileHover={{ scale: 1.05, y: -3 }}
                      className="group flex items-center space-x-3 bg-white/10 backdrop-blur-sm p-3 rounded-xl border border-white/20 hover:border-white/40 transition-all duration-300"
                    >
                      <motion.div
                        className={`w-10 h-10 rounded-lg flex items-center justify-center bg-gradient-to-r from-gray-600 to-gray-700 group-hover:from-purple-500 group-hover:to-pink-500 transition-all duration-300`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <social.icon className="w-5 h-5 text-white" />
                      </motion.div>
                      <div>
                        <p className="text-white font-semibold text-sm group-hover:text-purple-200 transition-colors duration-300">
                          {social.name}
                        </p>
                        <p className="text-gray-400 text-xs">{social.handle}</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Newsletter Subscription */}
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-r from-purple-800/50 to-pink-800/50 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-white/20"
            >
              <div className="text-center space-y-6">
                <div className="space-y-3">
                  <h3 className="text-2xl lg:text-3xl font-bold text-white">
                    Stay Updated with Latest Content
                  </h3>
                  <p className="text-gray-300 max-w-2xl mx-auto">
                    Đăng ký để nhận thông tin về những dự án mới nhất, tips thời
                    trang, và behind-the-scenes content độc quyền
                  </p>
                </div>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ delay: 1.2, duration: 0.5 }}
                  className="flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto"
                >
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full sm:flex-1 px-6 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300"
                  />
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full sm:w-auto px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl font-semibold text-white hover:shadow-lg hover:shadow-purple-500/25 transition-all duration-300"
                  >
                    Subscribe
                  </motion.button>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 bg-black/30 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 1.5, duration: 0.5 }}
              className="flex flex-col lg:flex-row items-center justify-between space-y-4 lg:space-y-0"
            >
              <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-gray-400 text-sm">
                <p>© 2024 Hoàng Fashion. All rights reserved.</p>
                <div className="flex space-x-4">
                  <motion.a
                    href="#"
                    whileHover={{ y: -2 }}
                    className="hover:text-purple-400 transition-colors duration-300"
                  >
                    Privacy Policy
                  </motion.a>
                  <motion.a
                    href="#"
                    whileHover={{ y: -2 }}
                    className="hover:text-purple-400 transition-colors duration-300"
                  >
                    Terms of Service
                  </motion.a>
                </div>
              </div>

              <motion.div
                className="flex items-center space-x-4"
                initial={{ opacity: 0, x: 20 }}
                animate={
                  isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }
                }
                transition={{ delay: 1.6, duration: 0.5 }}
              >
                <p className="text-gray-400 text-sm">Made with</p>
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <Heart className="w-4 h-4 text-red-400 fill-current" />
                </motion.div>
                <p className="text-gray-400 text-sm">in Vietnam</p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      <motion.button
        onClick={scrollToTop}
        initial={{ opacity: 0, scale: 0 }}
        animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
        whileHover={{ scale: 1.1, y: -5 }}
        whileTap={{ scale: 0.9 }}
        className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full shadow-lg hover:shadow-purple-500/25 flex items-center justify-center text-white transition-all duration-300 z-50"
      >
        <ArrowUp className="w-6 h-6" />
      </motion.button>
    </footer>
  );
};

export default Footer;
