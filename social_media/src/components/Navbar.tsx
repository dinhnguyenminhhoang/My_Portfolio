"use client";

import { useState, useEffect, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
} from "framer-motion";
import {
  Menu,
  X,
  Instagram,
  Youtube,
  MessageCircle,
  Sparkles,
  Zap,
} from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const navRef = useRef(null);

  const { scrollY } = useScroll();
  const navOpacity = useTransform(scrollY, [0, 100], [0.95, 1]);
  const navBlur = useTransform(scrollY, [0, 100], [10, 20]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 50);

      // Update active section based on scroll position
      const sections = [
        "home",
        "about",
        "skills",
        "projects",
        "testimonials",
        "contact",
      ];

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    const handleMouseMove = (e: any) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const navItems = [
    {
      name: "Trang chủ",
      href: "#home",
      id: "home",
      icon: "🏠",
    },
    {
      name: "Về tôi",
      href: "#about",
      id: "about",
      icon: "👨‍💻",
    },
    {
      name: "Kỹ năng",
      href: "#skills",
      id: "skills",
      icon: "⚡",
    },
    {
      name: "Dự án",
      href: "#projects",
      id: "projects",
      icon: "🎬",
    },
    {
      name: "Đánh giá",
      href: "#testimonials",
      id: "testimonials",
      icon: "⭐",
    },
    {
      name: "Liên hệ",
      href: "#contact",
      id: "contact",
      icon: "📧",
    },
  ];

  const socialLinks = [
    {
      Icon: Instagram,
      href: "#",
      color: "hover:text-pink-500",
      label: "Instagram",
      followers: "50K+",
    },
    {
      Icon: Youtube,
      href: "#",
      color: "hover:text-red-500",
      label: "YouTube",
      followers: "25K+",
    },
    {
      Icon: MessageCircle,
      href: "#",
      color: "hover:text-green-500",
      label: "TikTok",
      followers: "100K+",
    },
  ];

  const scrollToSection = (href: any) => {
    const element = document.querySelector(href);
    if (element) {
      const headerHeight = 80;
      const targetPosition = element.offsetTop - headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  const MagneticButton = ({ children, className = "", onClick }: any) => {
    const buttonRef = useRef(null) as any;
    const [buttonPosition, setButtonPosition] = useState({ x: 0, y: 0 });

    const handleMouseMove = (e: any) => {
      if (!buttonRef.current) return;

      const rect = buttonRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = (e.clientX - centerX) * 0.15;
      const deltaY = (e.clientY - centerY) * 0.15;

      setButtonPosition({ x: deltaX, y: deltaY });
    };

    const handleMouseLeave = () => {
      setButtonPosition({ x: 0, y: 0 });
    };

    return (
      <motion.button
        ref={buttonRef}
        className={className}
        onClick={onClick}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        animate={{ x: buttonPosition.x, y: buttonPosition.y }}
        transition={{ type: "spring", stiffness: 400, damping: 30 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {children}
      </motion.button>
    );
  };

  const AnimatedLogo = () => {
    return (
      <motion.div
        className="relative"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <motion.div
          className="absolute -inset-2 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 rounded-full opacity-0 blur-lg"
          whileHover={{ opacity: 0.3 }}
          transition={{ duration: 0.3 }}
        />
        <motion.a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            scrollToSection("#home");
          }}
          className="relative flex items-center space-x-3 z-10"
        >
          <motion.div
            className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center shadow-lg"
            animate={{
              rotate: [0, 5, -5, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <motion.span
              className="text-white font-bold text-lg"
              animate={{
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              H
            </motion.span>
          </motion.div>
          <motion.div className="hidden sm:block">
            <span className="text-xl font-bold bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
              Hoàng
            </span>
            <motion.div
              className="text-xs text-gray-500 font-medium"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              Creator
            </motion.div>
          </motion.div>
        </motion.a>
      </motion.div>
    );
  };

  return (
    <>
      {/* Navbar */}
      <motion.nav
        ref={navRef}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.6, -0.05, 0.01, 0.99] }}
        style={{
          opacity: navOpacity,
          backdropFilter: `blur(${navBlur}px)`,
        }}
        className={`fixed top-0 !z-50 left-0 right-0 transition-all duration-500 ${
          isScrolled
            ? "bg-white/80 shadow-xl border-b border-gray-100/50"
            : "bg-white/10"
        }`}
      >
        {/* Ambient Background */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-pink-500/5 to-orange-500/5"
          animate={{
            backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
          style={{
            backgroundSize: "200% 100%",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <AnimatedLogo />

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center">
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm rounded-2xl p-2 border border-white/20">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    className="relative"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 + 0.3 }}
                  >
                    {activeSection === item.id && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl shadow-lg"
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 30,
                        }}
                      />
                    )}
                    <MagneticButton
                      onClick={() => scrollToSection(item.href)}
                      className={`relative px-4 py-3 rounded-xl font-medium text-sm transition-all duration-300 flex items-center space-x-2 group ${
                        activeSection === item.id
                          ? "text-white"
                          : isScrolled
                          ? "text-gray-700 hover:text-purple-600"
                          : "text-white/90 hover:text-white"
                      }`}
                    >
                      <span className="text-base group-hover:scale-110 transition-transform duration-200">
                        {item.icon}
                      </span>
                      <span>{item.name}</span>

                      {/* Hover effect */}
                      <motion.div
                        className="absolute -bottom-1 left-1/2 w-0 h-0.5 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"
                        whileHover={{ width: "80%", x: "-50%" }}
                        transition={{ duration: 0.3 }}
                      />
                    </MagneticButton>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Social & CTA */}
            <div className="hidden lg:flex items-center space-x-4">
              {/* Social Links */}
              <div className="flex items-center space-x-2">
                {socialLinks.map((social, index) => (
                  <motion.div
                    key={index}
                    className="relative group"
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 + 0.8 }}
                  >
                    <MagneticButton
                      onClick={() => window.open(social.href, "_blank")}
                      className={`p-3 rounded-xl transition-all duration-300 backdrop-blur-sm border border-white/20 ${
                        isScrolled
                          ? "bg-white/10 text-gray-600 hover:bg-white/20"
                          : "bg-white/10 text-white/80 hover:bg-white/20"
                      } ${social.color}`}
                    >
                      <social.Icon size={18} />
                    </MagneticButton>

                    {/* Tooltip */}
                    <motion.div
                      className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
                      initial={{ y: 10 }}
                      whileHover={{ y: 0 }}
                    >
                      <div className="bg-gray-900 text-white text-xs px-2 py-1 rounded-md whitespace-nowrap">
                        {social.label} • {social.followers}
                      </div>
                    </motion.div>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 1.2 }}
              >
                <MagneticButton
                  onClick={() => scrollToSection("#contact")}
                  className="relative px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold text-sm overflow-hidden group shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <motion.div className="absolute inset-0 bg-gradient-to-r from-pink-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <span className="relative flex items-center space-x-2">
                    <Sparkles className="w-4 h-4" />
                    <span>Hợp tác ngay</span>
                  </span>

                  {/* Animated border */}
                  <motion.div
                    className="absolute inset-0 border border-white/30 rounded-xl"
                    animate={{
                      borderColor: [
                        "rgba(255,255,255,0.3)",
                        "rgba(255,255,255,0.8)",
                        "rgba(255,255,255,0.3)",
                      ],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  />
                </MagneticButton>
              </motion.div>
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`lg:hidden p-3 rounded-xl transition-all duration-300 backdrop-blur-sm border border-white/20 ${
                isScrolled
                  ? "bg-white/10 text-gray-700"
                  : "bg-white/10 text-white"
              }`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {isMobileMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X size={24} />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu size={24} />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.6, -0.05, 0.01, 0.99] }}
            className="fixed top-20 left-4 right-4 z-40 lg:hidden"
          >
            <motion.div
              className="bg-white/90 backdrop-blur-xl rounded-3xl border border-gray-100/50 shadow-2xl overflow-hidden"
              initial={{ scale: 0.95 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.95 }}
            >
              {/* Ambient Background */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-pink-500/5 to-orange-500/5" />

              <div className="relative p-6 space-y-6">
                {/* Navigation Items */}
                <div className="space-y-2">
                  {navItems.map((item, index) => (
                    <motion.button
                      key={item.name}
                      onClick={() => scrollToSection(item.href)}
                      className={`w-full flex items-center space-x-4 p-4 rounded-2xl font-medium transition-all duration-300 group ${
                        activeSection === item.id
                          ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                          : "text-gray-700 hover:bg-gray-100"
                      }`}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <span className="text-xl group-hover:scale-110 transition-transform duration-200">
                        {item.icon}
                      </span>
                      <span className="flex-1 text-left">{item.name}</span>
                      {activeSection === item.id && (
                        <motion.div
                          initial={{ scale: 0 }}
                          animate={{ scale: 1 }}
                          transition={{
                            type: "spring",
                            stiffness: 400,
                            damping: 30,
                          }}
                        >
                          <Zap className="w-5 h-5" />
                        </motion.div>
                      )}
                    </motion.button>
                  ))}
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />

                {/* Social Links */}
                <div className="space-y-3">
                  <p className="text-sm font-medium text-gray-600">
                    Kết nối với tôi
                  </p>
                  <div className="grid grid-cols-3 gap-3">
                    {socialLinks.map((social, index) => (
                      <motion.button
                        key={index}
                        onClick={() => window.open(social.href, "_blank")}
                        className={`flex flex-col items-center p-4 rounded-xl transition-all duration-300 ${social.color} bg-gray-50 hover:bg-gray-100`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 + 0.6 }}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <social.Icon size={20} className="mb-1" />
                        <span className="text-xs font-medium">
                          {social.label}
                        </span>
                        <span className="text-xs text-gray-500">
                          {social.followers}
                        </span>
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <motion.button
                  onClick={() => scrollToSection("#contact")}
                  className="w-full p-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-2xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center space-x-2"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Sparkles className="w-5 h-5" />
                  <span>Bắt đầu hợp tác</span>
                </motion.button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Overlay for mobile menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 lg:hidden"
            onClick={() => setIsMobileMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
