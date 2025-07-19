"use client";

import { motion } from "framer-motion";
import {
  Instagram,
  Youtube,
  MessageCircle,
  Mail,
  Phone,
  MapPin,
  ArrowUp,
  Heart,
  Zap,
  Star,
  TrendingUp,
  Award,
  Users,
} from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    services: [
      { name: "TikTok Content Creation", href: "#projects" },
      { name: "Instagram Campaign", href: "#projects" },
      { name: "YouTube Production", href: "#projects" },
      { name: "Brand Partnership", href: "#projects" },
      { name: "Social Media Strategy", href: "#contact" },
      { name: "Content Consultation", href: "#contact" },
    ],
    company: [
      { name: "Về tôi", href: "#about" },
      { name: "Portfolio", href: "#projects" },
      { name: "Kỹ năng", href: "#skills" },
      { name: "Đánh giá", href: "#testimonials" },
      { name: "Liên hệ", href: "#contact" },
      { name: "Blog", href: "#" },
    ],
    resources: [
      { name: "Content Guidelines", href: "#" },
      { name: "Social Media Tips", href: "#" },
      { name: "Trend Analysis", href: "#" },
      { name: "Creator Resources", href: "#" },
      { name: "Case Studies", href: "#projects" },
      { name: "FAQ", href: "#contact" },
    ],
  };

  const socialLinks = [
    {
      icon: Instagram,
      name: "Instagram",
      url: "#",
      handle: "@hoang.creator",
      followers: "50K+",
      color: "hover:text-pink-500",
      bgColor: "hover:bg-pink-500",
    },
    {
      icon: Youtube,
      name: "YouTube",
      url: "#",
      handle: "Hoàng Creator",
      followers: "25K+",
      color: "hover:text-red-500",
      bgColor: "hover:bg-red-500",
    },
    {
      icon: MessageCircle,
      name: "TikTok",
      url: "#",
      handle: "@hoang.viral",
      followers: "100K+",
      color: "hover:text-gray-800",
      bgColor: "hover:bg-gray-800",
    },
  ];

  const achievements = [
    { icon: TrendingUp, text: "2M+ Total Views" },
    { icon: Users, text: "175K+ Followers" },
    { icon: Award, text: "25+ Brand Partners" },
    { icon: Star, text: "98% Client Satisfaction" },
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 30,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              radial-gradient(circle at 25% 25%, rgba(168, 85, 247, 0.3) 0%, transparent 50%),
              radial-gradient(circle at 75% 75%, rgba(236, 72, 153, 0.3) 0%, transparent 50%)
            `,
            backgroundSize: "200% 200%",
          }}
        />
      </div>

      {/* Floating Icons */}
      <motion.div
        className="absolute top-20 right-20 w-16 h-16 border border-white/10 rounded-full"
        animate={{ rotate: 360, scale: [1, 1.2, 1] }}
        transition={{
          rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        }}
      />
      <motion.div
        className="absolute bottom-32 left-20 w-12 h-12 border border-purple-400/20 rounded-full"
        animate={{ rotate: -360, y: [0, -20, 0] }}
        transition={{
          rotate: { duration: 15, repeat: Infinity, ease: "linear" },
          y: { duration: 3, repeat: Infinity, ease: "easeInOut" },
        }}
      />

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-8">
          <div className="grid lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div className="lg:col-span-1 space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent mb-4">
                  Hoàng
                </h3>
                <p className="text-gray-300 leading-relaxed mb-6">
                  Creative Content Creator chuyên tạo ra những video viral và
                  chiến lược social media marketing hiệu quả cho brands trên
                  TikTok, Instagram và YouTube.
                </p>
              </motion.div>

              {/* Contact Info */}
              <div className="space-y-3">
                <motion.div
                  className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-200"
                  whileHover={{ x: 5 }}
                >
                  <Mail className="w-4 h-4 text-purple-400" />
                  <span className="text-sm">hoang.creator@gmail.com</span>
                </motion.div>
                <motion.div
                  className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-200"
                  whileHover={{ x: 5 }}
                >
                  <Phone className="w-4 h-4 text-purple-400" />
                  <span className="text-sm">+84 901 234 567</span>
                </motion.div>
                <motion.div
                  className="flex items-center space-x-3 text-gray-300 hover:text-white transition-colors duration-200"
                  whileHover={{ x: 5 }}
                >
                  <MapPin className="w-4 h-4 text-purple-400" />
                  <span className="text-sm">Quận 1, TP.HCM, Việt Nam</span>
                </motion.div>
              </div>

              {/* Achievements */}
              <div className="grid grid-cols-2 gap-3">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-2 text-xs text-gray-400"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <achievement.icon className="w-3 h-3 text-purple-400" />
                    <span>{achievement.text}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Services */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white">Dịch vụ</h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <motion.a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.href);
                      }}
                      className="text-gray-300 hover:text-purple-400 transition-colors duration-200 text-sm block"
                      whileHover={{ x: 3 }}
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Company */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white">Về tôi</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <motion.a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.href);
                      }}
                      className="text-gray-300 hover:text-purple-400 transition-colors duration-200 text-sm block"
                      whileHover={{ x: 3 }}
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Resources & Social */}
            <motion.div
              className="space-y-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <h4 className="text-lg font-semibold text-white">Tài nguyên</h4>
              <ul className="space-y-3 mb-8">
                {footerLinks.resources.map((link, index) => (
                  <li key={index}>
                    <motion.a
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        if (link.href.startsWith("#")) {
                          scrollToSection(link.href);
                        }
                      }}
                      className="text-gray-300 hover:text-purple-400 transition-colors duration-200 text-sm block"
                      whileHover={{ x: 3 }}
                    >
                      {link.name}
                    </motion.a>
                  </li>
                ))}
              </ul>

              {/* Social Media */}
              <div>
                <h5 className="text-white font-medium mb-4">Kết nối với tôi</h5>
                <div className="space-y-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      className="group flex items-center space-x-3 p-2 rounded-lg hover:bg-white/5 transition-all duration-200"
                      whileHover={{ scale: 1.05, x: 5 }}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div
                        className={`w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center group-${social.bgColor} transition-colors duration-200`}
                      >
                        <social.icon
                          className={`w-4 h-4 text-gray-300 group-${social.color} transition-colors duration-200`}
                        />
                      </div>
                      <div>
                        <p className="text-white text-sm font-medium">
                          {social.name}
                        </p>
                        <p className="text-gray-400 text-xs">
                          {social.handle} • {social.followers}
                        </p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>

          {/* Newsletter/CTA Section */}
          <motion.div
            className="mt-16 p-8 bg-gradient-to-r from-purple-800/30 to-pink-800/30 backdrop-blur-sm rounded-2xl border border-purple-500/20"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-4">
                Cập nhật trend mới nhất
              </h3>
              <p className="text-purple-100 mb-6 max-w-2xl mx-auto">
                Đăng ký để nhận insights về social media trends, tips tạo
                content viral và những case study mới nhất từ tôi.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Nhập email của bạn"
                  className="flex-1 px-4 py-3 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent"
                />
                <motion.button
                  className="px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-medium transition-all duration-300 hover:shadow-lg whitespace-nowrap"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Đăng ký
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Bottom Footer */}
          <div className="mt-12 pt-8 border-t border-white/10">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <motion.div
                className="flex items-center space-x-4 text-gray-400 text-sm"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <span>© {currentYear} Hoàng Creator.</span>
                <span className="flex items-center space-x-1">
                  <span>Made with</span>
                  <motion.div
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 1, repeat: Infinity }}
                  >
                    <Heart className="w-4 h-4 text-red-500 fill-current" />
                  </motion.div>
                  <span>in Vietnam</span>
                </span>
              </motion.div>

              <div className="flex items-center space-x-6">
                <motion.a
                  href="#"
                  className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                  whileHover={{ y: -2 }}
                >
                  Privacy Policy
                </motion.a>
                <motion.a
                  href="#"
                  className="text-gray-400 hover:text-white text-sm transition-colors duration-200"
                  whileHover={{ y: -2 }}
                >
                  Terms of Service
                </motion.a>

                {/* Back to Top */}
                <motion.button
                  onClick={scrollToTop}
                  className="p-2 bg-white/10 backdrop-blur-sm rounded-full text-white hover:bg-white/20 transition-all duration-200"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ArrowUp className="w-4 h-4" />
                </motion.button>
              </div>
            </div>
          </div>
        </div>

        {/* Floating CTA */}
        <motion.div
          className="fixed bottom-6 right-6 z-40"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2 }}
        >
          <motion.button
            onClick={() => scrollToSection("#contact")}
            className="group p-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            animate={{
              boxShadow: [
                "0 0 20px rgba(168, 85, 247, 0.3)",
                "0 0 40px rgba(236, 72, 153, 0.4)",
                "0 0 20px rgba(168, 85, 247, 0.3)",
              ],
            }}
            transition={{
              boxShadow: { duration: 2, repeat: Infinity, ease: "easeInOut" },
            }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Zap className="w-6 h-6" />
            </motion.div>
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
