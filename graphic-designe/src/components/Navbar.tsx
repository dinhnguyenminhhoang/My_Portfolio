"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { gsap } from "gsap";
import {
  Menu,
  X,
  Palette,
  Sparkles,
  Home,
  User,
  FolderOpen,
  Mail,
} from "lucide-react";
import {
  cn,
  scrollToSection,
  slideInFromTop,
  fadeInRight,
  staggerContainer,
} from "@/lib/utils";

const navItems = [
  {
    name: "Trang chủ",
    href: "#hero",
    icon: Home,
    color: "text-pink-500",
  },
  {
    name: "Về tôi",
    href: "#about",
    icon: User,
    color: "text-purple-500",
  },
  {
    name: "Dự án",
    href: "#projects",
    icon: FolderOpen,
    color: "text-blue-500",
  },
  {
    name: "Liên hệ",
    href: "#contact",
    icon: Mail,
    color: "text-orange-500",
  },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [scrollProgress, setScrollProgress] = useState(0);
  const navRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll();

  // Update scroll progress
  useEffect(() => {
    const updateScrollProgress = () => {
      if (typeof window !== "undefined") {
        const scrollHeight =
          document.documentElement.scrollHeight - window.innerHeight;
        const scrollTop = window.scrollY;
        const progress =
          scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
        setScrollProgress(Math.min(progress, 100));
      }
    };

    updateScrollProgress();
    window.addEventListener("scroll", updateScrollProgress, { passive: true });
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  // Animate navbar on scroll
  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  // Logo animation on mount
  useEffect(() => {
    if (logoRef.current) {
      gsap.from(logoRef.current, {
        duration: 1,
        scale: 0,
        rotation: -360,
        ease: "back.out(1.7)",
        delay: 0.2,
      });
    }
  }, []);

  // Active section tracking
  useEffect(() => {
    const sections = navItems.map((item) => item.href.substring(1));
    const observerOptions = {
      threshold: 0.3,
      rootMargin: "-20% 0px -35% 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    }, observerOptions);

    sections.forEach((section) => {
      const element = document.getElementById(section);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = (href: string) => {
    scrollToSection(href);
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <motion.nav
      ref={navRef}
      variants={slideInFromTop}
      initial="initial"
      animate="animate"
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500",
        isScrolled
          ? "bg-white/80 backdrop-blur-lg shadow-lg shadow-purple-500/10 border-b border-purple-100"
          : "bg-transparent"
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            ref={logoRef}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex-shrink-0 cursor-pointer"
            onClick={() => handleNavClick("#hero")}
          >
            <div className="flex items-center space-x-2">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                  <Palette className="w-5 h-5 text-white" />
                </div>
                <motion.div
                  className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-orange-400 to-pink-500 rounded-full flex items-center justify-center"
                  animate={{
                    rotate: [0, 360],
                    scale: [1, 1.2, 1],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                >
                  <Sparkles className="w-2 h-2 text-white" />
                </motion.div>
              </div>
              <div className="hidden sm:block">
                <div className="text-xl font-bold bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 bg-clip-text text-transparent">
                  Hoàng
                </div>
                <div className="text-xs text-gray-600 -mt-1">
                  Graphic Designer
                </div>
              </div>
            </div>
          </motion.div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <motion.div
              variants={staggerContainer}
              initial="initial"
              animate="animate"
              className="ml-10 flex items-center space-x-1"
            >
              {navItems.map((item, index) => {
                const Icon = item.icon;
                const isActive = activeSection === item.href.substring(1);

                return (
                  <motion.button
                    key={item.name}
                    variants={fadeInRight}
                    custom={index}
                    onClick={() => handleNavClick(item.href)}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className={cn(
                      "relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center space-x-2",
                      isActive
                        ? "text-white bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 shadow-lg shadow-purple-500/30"
                        : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                    )}
                  >
                    <Icon
                      className={cn(
                        "w-4 h-4",
                        isActive ? "text-white" : item.color
                      )}
                    />
                    <span>{item.name}</span>

                    {/* Active indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="activeIndicator"
                        className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 rounded-full"
                        style={{ zIndex: -1 }}
                        transition={{
                          type: "spring",
                          bounce: 0.2,
                          duration: 0.6,
                        }}
                      />
                    )}
                  </motion.button>
                );
              })}
            </motion.div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              onClick={toggleMobileMenu}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative inline-flex items-center justify-center p-2 rounded-full text-gray-700 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500 transition-all duration-200"
            >
              <motion.div
                animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{
            opacity: isMobileMenuOpen ? 1 : 0,
            height: isMobileMenuOpen ? "auto" : 0,
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="md:hidden overflow-hidden"
        >
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white/90 backdrop-blur-lg rounded-lg mt-2 shadow-lg shadow-purple-500/10">
            {navItems.map((item, index) => {
              const Icon = item.icon;
              const isActive = activeSection === item.href.substring(1);

              return (
                <motion.button
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{
                    opacity: isMobileMenuOpen ? 1 : 0,
                    x: isMobileMenuOpen ? 0 : -20,
                  }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.1,
                  }}
                  onClick={() => handleNavClick(item.href)}
                  whileHover={{ scale: 1.02, x: 5 }}
                  whileTap={{ scale: 0.98 }}
                  className={cn(
                    "w-full text-left px-4 py-3 rounded-lg text-base font-medium transition-all duration-200 flex items-center space-x-3",
                    isActive
                      ? "text-white bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 shadow-lg shadow-purple-500/30"
                      : "text-gray-700 hover:text-gray-900 hover:bg-gray-100"
                  )}
                >
                  <Icon
                    className={cn(
                      "w-5 h-5",
                      isActive ? "text-white" : item.color
                    )}
                  />
                  <span>{item.name}</span>
                </motion.button>
              );
            })}
          </div>
        </motion.div>
      </div>

      {/* Progress Bar */}
      <motion.div
        className="absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 origin-left transition-all duration-300"
        style={{
          width: `${scrollProgress}%`,
        }}
      />
    </motion.nav>
  );
}
