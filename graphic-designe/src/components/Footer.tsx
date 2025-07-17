"use client";

import {
  cn,
  fadeInUp,
  scaleIn,
  scrollToSection,
  staggerContainer,
} from "@/lib/utils";
import { motion, useInView } from "framer-motion";
import { gsap } from "gsap";
import {
  ArrowUp,
  Award,
  BeakerIcon,
  Briefcase,
  CheckCircle,
  ChevronRight,
  Code,
  Coffee,
  Dribbble,
  Facebook,
  Globe,
  Heart,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  MessageCircle,
  Monitor,
  Palette,
  Phone,
  Send,
  Shield,
  Sparkles,
  Star,
  Users,
  Video,
  Youtube,
  Zap,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const quickLinks = [
  { name: "Trang chủ", href: "#hero", icon: Globe },
  { name: "Về tôi", href: "#about", icon: Users },
  { name: "Dự án", href: "#projects", icon: Briefcase },
  { name: "Liên hệ", href: "#contact", icon: Mail },
];

const services = [
  { name: "Branding & Identity", href: "#contact", icon: Palette },
  { name: "UI/UX Design", href: "#contact", icon: Monitor },
  { name: "Motion Graphics", href: "#contact", icon: Video },
  { name: "Social Media Design", href: "#contact", icon: Instagram },
  { name: "Logo Design", href: "#contact", icon: Star },
  { name: "Website Design", href: "#contact", icon: Globe },
];

const socialLinks = [
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://instagram.com/hoang.designer",
    color: "hover:text-pink-500",
    bgColor: "hover:bg-pink-50",
    followers: "25.8K",
    gradient: "from-pink-500 to-purple-500",
  },
  {
    name: "Behance",
    icon: BeakerIcon,
    url: "https://behance.net/hoang-designer",
    color: "hover:text-blue-500",
    bgColor: "hover:bg-blue-50",
    followers: "12.3K",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    name: "Dribbble",
    icon: Dribbble,
    url: "https://dribbble.com/hoang-designer",
    color: "hover:text-pink-500",
    bgColor: "hover:bg-pink-50",
    followers: "8.9K",
    gradient: "from-pink-500 to-red-500",
  },
  {
    name: "TikTok",
    icon: Facebook,
    url: "https://tiktok.com/@hoang.designer",
    color: "hover:text-gray-800",
    bgColor: "hover:bg-gray-50",
    followers: "18.2K",
    gradient: "from-gray-800 to-gray-600",
  },
  {
    name: "YouTube",
    icon: Youtube,
    url: "https://youtube.com/@hoang-designer",
    color: "hover:text-red-500",
    bgColor: "hover:bg-red-50",
    followers: "15.6K",
    gradient: "from-red-500 to-orange-500",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://linkedin.com/in/hoang-designer",
    color: "hover:text-blue-600",
    bgColor: "hover:bg-blue-50",
    followers: "5.2K",
    gradient: "from-blue-600 to-blue-500",
  },
];

const tools = [
  { name: "Photoshop", icon: "🎨" },
  { name: "Illustrator", icon: "✏️" },
  { name: "Figma", icon: "🔧" },
  { name: "After Effects", icon: "🎬" },
  { name: "Premiere Pro", icon: "🎥" },
  { name: "Canva", icon: "🎪" },
  { name: "CapCut", icon: "📱" },
  { name: "Procreate", icon: "🖌️" },
];

const achievements = [
  { number: "100+", label: "Dự án hoàn thành", icon: Briefcase },
  { number: "50+", label: "Khách hàng hài lòng", icon: Users },
  { number: "5+", label: "Năm kinh nghiệm", icon: Award },
  { number: "25K+", label: "Followers trên social", icon: Heart },
];

const NewsletterForm = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    setTimeout(() => {
      setIsSuccess(true);
      setIsSubmitting(false);
      setEmail("");

      // Reset success state after 3 seconds
      setTimeout(() => {
        setIsSuccess(false);
      }, 3000);
    }, 1500);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className="relative">
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Nhập email của bạn..."
          required
          className="w-full px-4 py-3 pr-12 bg-white/90 border border-purple-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
        />
        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg hover:from-purple-600 hover:to-pink-600 transition-all duration-300 disabled:opacity-50"
        >
          {isSubmitting ? (
            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
          ) : (
            <Send className="w-4 h-4" />
          )}
        </motion.button>
      </div>

      {isSuccess && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex items-center space-x-2 text-green-600 text-sm"
        >
          <CheckCircle className="w-4 h-4" />
          <span>Đăng ký thành công! Cảm ơn bạn đã theo dõi.</span>
        </motion.div>
      )}
    </form>
  );
};

const BackToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <motion.button
      onClick={scrollToTop}
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: isVisible ? 1 : 0,
        scale: isVisible ? 1 : 0,
      }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-8 right-8 z-50 w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300 flex items-center justify-center"
    >
      <ArrowUp className="w-5 h-5" />
    </motion.button>
  );
};

export default function Footer() {
  const footerRef = useRef<HTMLElement>(null);
  const isInView = useInView(footerRef, { once: true, amount: 0.3 });
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    if (footerRef.current && isInView) {
      gsap.from(footerRef.current.children, {
        duration: 0.8,
        y: 50,
        opacity: 0,
        stagger: 0.1,
        ease: "power2.out",
      });
    }
  }, [isInView]);

  const handleLinkClick = (href: string) => {
    if (href.startsWith("#")) {
      scrollToSection(href);
    } else {
      window.open(href, "_blank");
    }
  };

  return (
    <>
      <footer
        ref={footerRef}
        className="relative bg-gradient-to-br from-gray-900 via-purple-900/20 to-gray-900 text-white overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_white_1px,_transparent_0)] bg-[length:24px_24px]"></div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <motion.div
            className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-2xl"
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 180, 360],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.div
            className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full blur-2xl"
            animate={{
              scale: [1.2, 1, 1.2],
              rotate: [360, 180, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Main Footer Content */}
          <motion.div
            variants={staggerContainer}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            className="py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {/* Brand Section */}
            <motion.div variants={fadeInUp} className="lg:col-span-2">
              <div className="flex items-center mb-6">
                <div className="relative">
                  <div className="w-16 h-16 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500 rounded-full flex items-center justify-center">
                    <Palette className="w-8 h-8 text-white" />
                  </div>
                  <motion.div
                    className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full flex items-center justify-center"
                    animate={{
                      rotate: [0, 360],
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                  >
                    <Sparkles className="w-3 h-3 text-white" />
                  </motion.div>
                </div>
                <div className="ml-4">
                  <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
                    Hoàng
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Graphic Designer với chất riêng
                  </p>
                </div>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed max-w-md">
                Tạo ra những thiết kế độc đáo, sáng tạo và ấn tượng. Từ branding
                đến content visual, tôi biến ý tưởng thành hiện thực một cách
                "chipi" nhất!
              </p>

              {/* Newsletter */}
              <div className="mb-6">
                <h4 className="text-lg font-semibold mb-3 flex items-center">
                  <MessageCircle className="w-5 h-5 mr-2 text-purple-400" />
                  Nhận thông tin mới nhất
                </h4>
                <p className="text-gray-400 text-sm mb-4">
                  Đăng ký để nhận tips thiết kế và cập nhật dự án mới
                </p>
                <NewsletterForm />
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 gap-4">
                {achievements.slice(0, 2).map((achievement, index) => {
                  const Icon = achievement.icon;
                  return (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center space-x-3 p-3 bg-white/5 rounded-lg backdrop-blur-sm border border-white/10"
                    >
                      <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                        <Icon className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-white">
                          {achievement.number}
                        </div>
                        <div className="text-xs text-gray-400">
                          {achievement.label}
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div variants={fadeInUp}>
              <h4 className="text-lg font-semibold mb-6 flex items-center">
                <ChevronRight className="w-5 h-5 mr-2 text-purple-400" />
                Liên kết nhanh
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => {
                  const Icon = link.icon;
                  return (
                    <li key={index}>
                      <motion.button
                        onClick={() => handleLinkClick(link.href)}
                        whileHover={{ x: 5 }}
                        className="flex items-center text-gray-300 hover:text-white transition-colors duration-200 group"
                      >
                        <Icon className="w-4 h-4 mr-3 text-purple-400 group-hover:text-pink-400 transition-colors duration-200" />
                        <span>{link.name}</span>
                      </motion.button>
                    </li>
                  );
                })}
              </ul>

              {/* Contact Info */}
              <div className="mt-8 space-y-3">
                <h4 className="text-lg font-semibold mb-4 flex items-center">
                  <Phone className="w-5 h-5 mr-2 text-purple-400" />
                  Liên hệ
                </h4>
                <div className="space-y-2 text-sm">
                  <div className="flex items-center text-gray-300">
                    <Mail className="w-4 h-4 mr-2 text-purple-400" />
                    <span>hoang.designer@gmail.com</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <Phone className="w-4 h-4 mr-2 text-purple-400" />
                    <span>+84 123 456 789</span>
                  </div>
                  <div className="flex items-center text-gray-300">
                    <MapPin className="w-4 h-4 mr-2 text-purple-400" />
                    <span>TP. Hồ Chí Minh, Việt Nam</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Services */}
            <motion.div variants={fadeInUp}>
              <h4 className="text-lg font-semibold mb-6 flex items-center">
                <Briefcase className="w-5 h-5 mr-2 text-purple-400" />
                Dịch vụ
              </h4>
              <ul className="space-y-3">
                {services.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <li key={index}>
                      <motion.button
                        onClick={() => handleLinkClick(service.href)}
                        whileHover={{ x: 5 }}
                        className="flex items-center text-gray-300 hover:text-white transition-colors duration-200 group"
                      >
                        <Icon className="w-4 h-4 mr-3 text-purple-400 group-hover:text-pink-400 transition-colors duration-200" />
                        <span>{service.name}</span>
                      </motion.button>
                    </li>
                  );
                })}
              </ul>

              {/* Tools */}
              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4 flex items-center">
                  <Code className="w-5 h-5 mr-2 text-purple-400" />
                  Công cụ
                </h4>
                <div className="flex flex-wrap gap-2">
                  {tools.map((tool, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.1 }}
                      className="flex items-center space-x-1 px-3 py-1 bg-white/5 rounded-full text-xs text-gray-300 hover:text-white transition-colors duration-200"
                    >
                      <span>{tool.icon}</span>
                      <span>{tool.name}</span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Social Media Section */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            className="py-8 border-t border-gray-700"
          >
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">
                <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                  Theo dõi tôi
                </span>
              </h3>
              <p className="text-gray-400">
                Cập nhật inspiration và behind-the-scenes
              </p>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    variants={scaleIn}
                    custom={index}
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    className="group bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10 hover:border-white/20 transition-all duration-300 text-center"
                  >
                    <div
                      className={cn(
                        "w-12 h-12 mx-auto mb-3 rounded-full flex items-center justify-center bg-gradient-to-r",
                        social.gradient
                      )}
                    >
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-sm font-medium text-white group-hover:text-purple-400 transition-colors duration-200">
                      {social.name}
                    </div>
                    <div className="text-xs text-gray-400 mt-1">
                      {social.followers}
                    </div>
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Bottom Bar */}
          <motion.div
            variants={fadeInUp}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            className="py-6 border-t border-gray-700"
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
                <span>và nhiều</span>
                <motion.div
                  animate={{ rotate: [0, 15, -15, 0] }}
                  transition={{ duration: 2, repeat: Infinity }}
                  className="mx-1"
                >
                  <Coffee className="w-4 h-4 text-orange-500" />
                </motion.div>
              </div>

              <div className="flex items-center space-x-6">
                <div className="flex items-center space-x-4 text-xs text-gray-500">
                  <div className="flex items-center">
                    <Shield className="w-3 h-3 mr-1" />
                    <span>Chính sách bảo mật</span>
                  </div>
                  <div className="flex items-center">
                    <CheckCircle className="w-3 h-3 mr-1" />
                    <span>Điều khoản dịch vụ</span>
                  </div>
                </div>

                <div className="flex items-center space-x-2 text-xs text-gray-500">
                  <span>Được xây dựng với</span>
                  <div className="flex items-center space-x-1">
                    <Code className="w-3 h-3" />
                    <span>Next.js</span>
                  </div>
                  <span>&</span>
                  <div className="flex items-center space-x-1">
                    <Zap className="w-3 h-3" />
                    <span>Tailwind CSS</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Gradient Bottom Border */}
        <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-blue-500"></div>
      </footer>

      {/* Back to Top Button */}
      <BackToTopButton />
    </>
  );
}
