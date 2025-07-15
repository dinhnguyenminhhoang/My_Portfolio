"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  Home,
  User,
  Briefcase,
  Star,
  MessageCircle,
  Phone,
  ChevronDown,
} from "lucide-react";
import { cn, scrollToSection } from "@/lib/utils";
import Button from "@/components/ui/Button";

interface NavItem {
  id: string;
  label: string;
  icon: React.ReactNode;
  href: string;
  subItems?: NavItem[];
}

const Navigation: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const navRef = useRef<any>(null);

  const navItems: NavItem[] = [
    {
      id: "home",
      label: "Trang chủ",
      icon: <Home className="w-5 h-5" />,
      href: "#home",
    },
    {
      id: "about",
      label: "Giới thiệu",
      icon: <User className="w-5 h-5" />,
      href: "#about",
    },
    {
      id: "services",
      label: "Dịch vụ",
      icon: <Briefcase className="w-5 h-5" />,
      href: "#services",
      subItems: [
        {
          id: "livestream",
          label: "Livestream",
          icon: <></>,
          href: "#livestream",
        },
        { id: "content", label: "Nội dung", icon: <></>, href: "#content" },
        { id: "brand", label: "Thương hiệu", icon: <></>, href: "#brand" },
      ],
    },
    {
      id: "portfolio",
      label: "Portfolio",
      icon: <Star className="w-5 h-5" />,
      href: "#portfolio",
    },
    {
      id: "testimonials",
      label: "Đánh giá",
      icon: <MessageCircle className="w-5 h-5" />,
      href: "#testimonials",
    },
    {
      id: "contact",
      label: "Liên hệ",
      icon: <Phone className="w-5 h-5" />,
      href: "#contact",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 50);

      // Update active section based on scroll position
      const sections = navItems.map((item) => item.id);
      const currentSection = sections.find((section) => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    const sectionId = href.replace("#", "");
    scrollToSection(sectionId);
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navVariants = {
    hidden: { opacity: 0, y: -100 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3 },
    },
  };

  const mobileMenuVariants = {
    hidden: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.3,
      },
    },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const mobileItemVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.3 },
    },
  };

  return (
    <>
      <motion.nav
        ref={navRef}
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isScrolled ? "glass backdrop-blur-md shadow-lg" : "bg-transparent"
        )}
        variants={navVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <motion.div
              className="flex items-center space-x-3"
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
            >
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                  <span className="text-white font-bold text-xl">K</span>
                </div>
                <div className="absolute -top-1 -right-1 w-4 h-4 bg-green-500 rounded-full animate-pulse" />
              </div>
              <div className="hidden sm:block">
                <h1 className="text-xl font-bold gradient-text-purple">
                  KOC Livestream
                </h1>
                <p className="text-xs text-gray-400">Content Creator</p>
              </div>
            </motion.div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <motion.div
                  key={item.id}
                  className="relative"
                  variants={itemVariants}
                  onHoverStart={() => setHoveredItem(item.id)}
                  onHoverEnd={() => setHoveredItem(null)}
                >
                  <button
                    onClick={() => handleNavClick(item.href)}
                    className={cn(
                      "flex items-center space-x-2 px-4 py-2 rounded-lg transition-all duration-300 relative group",
                      activeSection === item.id
                        ? "text-purple-400 bg-purple-500/20"
                        : "text-gray-300 hover:text-white hover:bg-white/10"
                    )}
                  >
                    {item.icon}
                    <span className="font-medium">{item.label}</span>
                    {item.subItems && (
                      <ChevronDown className="w-4 h-4 transition-transform duration-300 group-hover:rotate-180" />
                    )}
                  </button>

                  {/* Dropdown for sub-items */}
                  <AnimatePresence>
                    {item.subItems && hoveredItem === item.id && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute top-full left-0 mt-2 w-48 glass rounded-lg shadow-xl border border-white/20 overflow-hidden"
                      >
                        {item.subItems.map((subItem) => (
                          <button
                            key={subItem.id}
                            onClick={() => handleNavClick(subItem.href)}
                            className="w-full px-4 py-3 text-left text-gray-300 hover:text-white hover:bg-white/10 transition-colors duration-200"
                          >
                            {subItem.label}
                          </button>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Active indicator */}
                  {activeSection === item.id && (
                    <motion.div
                      layoutId="activeIndicator"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-purple-500 to-pink-500"
                      initial={false}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                    />
                  )}
                </motion.div>
              ))}
            </div>

            {/* CTA Button */}
            <motion.div className="hidden lg:block" variants={itemVariants}>
              <Button
                variant="gradient"
                size="md"
                glow
                onClick={() => handleNavClick("#contact")}
              >
                Liên hệ ngay
              </Button>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              className="lg:hidden p-2 rounded-lg glass"
              onClick={toggleMenu}
              variants={itemVariants}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <AnimatePresence mode="wait">
                {isOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <X className="w-6 h-6 text-white" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Menu className="w-6 h-6 text-white" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
              onClick={toggleMenu}
            />

            {/* Mobile Menu Panel */}
            <motion.div
              className="fixed top-0 right-0 h-full w-80 max-w-[90vw] glass backdrop-blur-md shadow-2xl z-50 lg:hidden"
              variants={mobileMenuVariants}
              initial="hidden"
              animate="visible"
              exit="hidden"
            >
              <div className="p-6 h-full flex flex-col">
                {/* Mobile Menu Header */}
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg flex items-center justify-center">
                      <span className="text-white font-bold text-sm">K</span>
                    </div>
                    <span className="text-lg font-bold text-white">
                      KOC Livestream
                    </span>
                  </div>
                  <button
                    onClick={toggleMenu}
                    className="p-2 rounded-lg hover:bg-white/10 transition-colors"
                  >
                    <X className="w-6 h-6 text-white" />
                  </button>
                </div>

                {/* Mobile Navigation Items */}
                <div className="flex-1 space-y-2">
                  {navItems.map((item) => (
                    <motion.div key={item.id} variants={mobileItemVariants}>
                      <button
                        onClick={() => handleNavClick(item.href)}
                        className={cn(
                          "w-full flex items-center space-x-4 px-4 py-4 rounded-lg transition-all duration-300 text-left group",
                          activeSection === item.id
                            ? "text-purple-400 bg-purple-500/20"
                            : "text-gray-300 hover:text-white hover:bg-white/10"
                        )}
                      >
                        <div className="text-purple-400 group-hover:scale-110 transition-transform duration-300">
                          {item.icon}
                        </div>
                        <span className="font-medium text-lg">
                          {item.label}
                        </span>
                        {activeSection === item.id && (
                          <div className="ml-auto w-2 h-2 bg-purple-500 rounded-full animate-pulse" />
                        )}
                      </button>
                    </motion.div>
                  ))}
                </div>

                {/* Mobile CTA */}
                <motion.div
                  variants={mobileItemVariants}
                  className="mt-6 pt-6 border-t border-white/20"
                >
                  <Button
                    variant="gradient"
                    size="lg"
                    fullWidth
                    glow
                    onClick={() => handleNavClick("#contact")}
                  >
                    Liên hệ ngay
                  </Button>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navigation;
