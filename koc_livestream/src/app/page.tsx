"use client";

import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import PortfolioSection from "@/components/PortfolioSection";
import SkillsSection from "@/components/SkillsSection";
import Testimonial from "@/components/Testimonial";
import ContactSection from "@/components/ContactSection";
import { cn } from "@/lib/utils";
import Footer from "@/components/FooterSection";

const HomePage: React.FC = () => {
  const cursorRef = useRef<HTMLDivElement>(null);
  const cursorFollowerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorFollower = cursorFollowerRef.current;

    if (!cursor || !cursorFollower) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;

      // Main cursor
      cursor.style.left = clientX + "px";
      cursor.style.top = clientY + "px";

      // Follower cursor with delay
      setTimeout(() => {
        cursorFollower.style.left = clientX + "px";
        cursorFollower.style.top = clientY + "px";
      }, 100);
    };

    const handleMouseEnter = () => {
      cursor.style.opacity = "1";
      cursorFollower.style.opacity = "0.5";
    };

    const handleMouseLeave = () => {
      cursor.style.opacity = "0";
      cursorFollower.style.opacity = "0";
    };

    const handleMouseDown = () => {
      cursor.style.transform = "scale(0.8)";
      cursorFollower.style.transform = "scale(0.8)";
    };

    const handleMouseUp = () => {
      cursor.style.transform = "scale(1)";
      cursorFollower.style.transform = "scale(1)";
    };

    // Add event listeners
    document.addEventListener("mousemove", handleMouseMove);
    document.addEventListener("mouseenter", handleMouseEnter);
    document.addEventListener("mouseleave", handleMouseLeave);
    document.addEventListener("mousedown", handleMouseDown);
    document.addEventListener("mouseup", handleMouseUp);

    // Cleanup
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter);
      document.removeEventListener("mouseleave", handleMouseLeave);
      document.removeEventListener("mousedown", handleMouseDown);
      document.removeEventListener("mouseup", handleMouseUp);
    };
  }, []);

  useEffect(() => {
    // Smooth scrolling polyfill for older browsers
    if (typeof window !== "undefined") {
      const smoothScrollTo = (target: HTMLElement) => {
        target.scrollIntoView({ behavior: "smooth" });
      };

      // Add click handlers for anchor links
      const handleAnchorClick = (e: Event) => {
        const target = e.target as HTMLAnchorElement;
        if (
          target.tagName === "A" &&
          target.getAttribute("href")?.startsWith("#")
        ) {
          e.preventDefault();
          const targetId = target.getAttribute("href")?.substring(1);
          const targetElement = document.getElementById(targetId || "");
          if (targetElement) {
            smoothScrollTo(targetElement);
          }
        }
      };

      document.addEventListener("click", handleAnchorClick);
      return () => document.removeEventListener("click", handleAnchorClick);
    }
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800">
      {/* Custom Cursors */}
      <div
        ref={cursorRef}
        className="fixed w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full pointer-events-none z-50 opacity-0 transition-all duration-150 ease-out mix-blend-difference"
        style={{ transform: "translate(-50%, -50%)" }}
      />
      <div
        ref={cursorFollowerRef}
        className="fixed w-8 h-8 border-2 border-purple-400 rounded-full pointer-events-none z-50 opacity-0 transition-all duration-300 ease-out"
        style={{ transform: "translate(-50%, -50%)" }}
      />

      {/* Page Loading Animation */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="fixed inset-0 bg-slate-900 z-50 flex items-center justify-center pointer-events-none"
      >
        <div className="flex items-center space-x-4">
          <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl flex items-center justify-center animate-pulse">
            <span className="text-white font-bold text-2xl">K</span>
          </div>
          <div className="flex flex-col">
            <span className="text-white font-bold text-xl">KOC Livestream</span>
            <span className="text-purple-400 text-sm">Loading...</span>
          </div>
        </div>
      </motion.div>

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="relative">
        {/* Hero Section */}
        <HeroSection />

        {/* About Section */}
        <AboutSection />

        {/* Services Section */}
        <ServicesSection />

        {/* Portfolio Section */}
        <PortfolioSection />

        {/* Skills Section */}
        <SkillsSection />

        {/* Testimonials Section */}
        <Testimonial />

        {/* Contact Section */}
        <ContactSection />

        <Footer />
      </main>

      {/* Footer */}
      <footer className="relative py-12 border-t border-white/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-3 mb-4 md:mb-0">
              <div className="w-10 h-10 bg-gradient-to-r from-purple-600 to-pink-600 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">K</span>
              </div>
              <div>
                <h3 className="text-white font-bold">KOC Livestream</h3>
                <p className="text-gray-400 text-sm">
                  Professional Content Creator
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-6 text-gray-400 text-sm">
              <span>© 2024 KOC Livestream. All rights reserved.</span>
              <span>•</span>
              <span>Made with ❤️ in Vietnam</span>
            </div>
          </div>
        </div>
      </footer>

      {/* Scroll to Top Button */}
      <motion.button
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-shadow z-40 group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <svg
          className="w-6 h-6 group-hover:animate-bounce"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 10l7-7m0 0l7 7m-7-7v18"
          />
        </svg>
      </motion.button>

      {/* Background Effects */}
      <div className="fixed inset-0 pointer-events-none">
        {/* Animated particles */}
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -100, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 5,
            }}
          />
        ))}
      </div>

      {/* Performance Monitoring */}
      <div className="fixed bottom-4 left-4 glass p-2 rounded-lg border border-white/20 text-xs text-gray-400 opacity-20 hover:opacity-100 transition-opacity pointer-events-none">
        <div>FPS: 60</div>
        <div>Load: Complete</div>
      </div>
    </div>
  );
};

export default HomePage;
