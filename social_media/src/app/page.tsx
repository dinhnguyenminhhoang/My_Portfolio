"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Loader2 } from "lucide-react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";
import Contact from "@/components/Contact";

// Loading Screen Component
const LoadingScreen = () => {
  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-purple-900 via-indigo-900 to-gray-900"
    >
      <div className="text-center space-y-6">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 mx-auto"
        >
          <Loader2 className="w-full h-full text-purple-400" />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="space-y-2"
        >
          <h2 className="text-2xl font-bold text-white">Hoàng Creator</h2>
          <p className="text-purple-300">Đang tải portfolio...</p>
        </motion.div>

        {/* Loading Progress */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 2, ease: "easeInOut" }}
          className="w-48 h-1 bg-purple-600 rounded-full mx-auto"
        />
      </div>
    </motion.div>
  );
};

// Scroll Progress Indicator
const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const currentProgress = window.scrollY;
      const scrollHeight = document.body.scrollHeight - window.innerHeight;

      if (scrollHeight) {
        setScrollProgress((currentProgress / scrollHeight) * 100);
      }
    };

    window.addEventListener("scroll", updateScrollProgress);
    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-pink-600 z-50 origin-left"
      style={{ scaleX: scrollProgress / 100 }}
    />
  );
};

// Page Transition Wrapper
const PageTransition = ({ children }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

// Main Portfolio Page Component
export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    // Preload critical resources
    const preloadImages = () => {
      const imageUrls = ["/api/placeholder/400/300", "/api/placeholder/80/80"];

      imageUrls.forEach((url) => {
        const img = new Image();
        img.src = url;
      });
    };

    preloadImages();

    return () => clearTimeout(timer);
  }, []);

  // Smooth scroll utility
  useEffect(() => {
    if (!mounted) return;

    // Enhance smooth scrolling
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const href = link.getAttribute("href") as any;
        const target = document.querySelector(href);

        if (target) {
          const headerHeight = 80; // Navbar height
          const targetPosition = target.offsetTop - headerHeight;

          window.scrollTo({
            top: targetPosition,
            behavior: "smooth",
          });
        }
      });
    });
  }, [mounted]);

  // Performance optimization
  useEffect(() => {
    if (!mounted) return;

    // Optimize images loading
    const images = document.querySelectorAll("img[data-src]");

    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const img = entry.target as any;
          img.src = img.dataset.src;
          img.classList.remove("lazy");
          observer.unobserve(img);
        }
      });
    });

    images.forEach((img) => imageObserver.observe(img));

    return () => {
      images.forEach((img) => imageObserver.unobserve(img));
    };
  }, [mounted]);

  if (!mounted) {
    return null; // Prevent hydration mismatch
  }

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen key="loading" />}
      </AnimatePresence>

      <AnimatePresence mode="wait">
        {!isLoading && (
          <PageTransition key="main">
            <div className="relative">
              {/* Scroll Progress Indicator */}
              <ScrollProgress />

              {/* Main Content */}
              <main className="overflow-x-hidden">
                {/* Navigation */}
                <Navbar />

                {/* Hero Section */}
                <section id="hero">
                  <Hero />
                </section>

                {/* About Section */}
                <section id="about">
                  <About />
                </section>

                {/* Skills Section */}
                <section id="skills">
                  <Skills />
                </section>

                {/* Projects Section */}
                <section id="projects">
                  <Projects />
                </section>

                {/* Testimonials Section */}
                <section id="testimonials">
                  <Testimonials />
                </section>

                {/* Contact Section */}
                <section id="contact">
                  <Contact />
                </section>

                {/* Footer */}
                <Footer />
              </main>
            </div>
          </PageTransition>
        )}
      </AnimatePresence>

      {/* Global Styles & Optimizations */}
      <style jsx global>{`
        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* Improve text rendering */
        body {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          text-rendering: optimizeLegibility;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(45deg, #8b5cf6, #ec4899);
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(45deg, #7c3aed, #db2777);
        }

        /* Focus styles for accessibility */
        *:focus {
          outline: 2px solid #8b5cf6;
          outline-offset: 2px;
        }

        /* Lazy loading images */
        img.lazy {
          opacity: 0;
          transition: opacity 0.3s;
        }

        img.lazy.loaded {
          opacity: 1;
        }

        /* Performance optimizations */
        * {
          -webkit-backface-visibility: hidden;
          -moz-backface-visibility: hidden;
          -webkit-transform: translate3d(0, 0, 0);
          -moz-transform: translate3d(0, 0, 0);
        }

        /* Text selection */
        ::selection {
          background: rgba(139, 92, 246, 0.3);
          color: inherit;
        }

        ::-moz-selection {
          background: rgba(139, 92, 246, 0.3);
          color: inherit;
        }
      `}</style>
    </>
  );
}
