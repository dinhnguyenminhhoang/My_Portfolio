"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

// Background Components
import StarField from "@/components/Background/StarField";
import GradientOrbs from "@/components/Background/GradientOrbs";

// Navigation
import Navbar from "@/components/Navigation/Navbar";

// Main Sections
import HeroSection from "@/components/Hero/HeroSection";
import AboutSection from "@/components/About/AboutSection";
import SkillsSection from "@/components/Skills/SkillsSection";
import ProjectsSection from "@/components/Projects/ProjectsSection";
import ContactSection from "@/components/Contact/ContactSection";

// Footer
import Footer from "@/components/Footer/Footer";
import useLenis from "@/hooks/useLenis";

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

export default function Home() {
  const mainRef = useRef<HTMLDivElement>(null);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  useLenis();
  // Handle scroll progress and back to top button
  useEffect(() => {
    const handleScroll = () => {
      if (typeof window !== "undefined") {
        const scrollY = window.scrollY;
        const documentHeight = document.documentElement.scrollHeight;
        const windowHeight = window.innerHeight;

        // Calculate scroll progress
        const progress = (scrollY / (documentHeight - windowHeight)) * 100;
        setScrollProgress(Math.min(progress, 100));

        // Show/hide back to top button
        setShowBackToTop(scrollY > 500);

        // Update active section
        const sections = ["home", "about", "skills", "projects", "contact"];
        sections.forEach((section) => {
          const element = document.getElementById(section);
          if (element) {
            const { offsetTop, offsetHeight } = element;
            if (
              scrollY >= offsetTop - 100 &&
              scrollY < offsetTop + offsetHeight - 100
            ) {
              const event = new CustomEvent("activeSection", {
                detail: section,
              });
              window.dispatchEvent(event);
            }
          }
        });
      }
    };

    // Initial call
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Handle loading screen
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  // Initialize GSAP and ScrollTrigger
  useGSAP(
    () => {
      // Smooth scrolling setup
      gsap.registerPlugin(ScrollTrigger);

      // Parallax effect for background elements
      gsap.to(".parallax-slow", {
        yPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: mainRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(".parallax-medium", {
        yPercent: -30,
        ease: "none",
        scrollTrigger: {
          trigger: mainRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(".parallax-fast", {
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: mainRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // Section reveal animations
      gsap.utils.toArray(".section-reveal").forEach((section: any) => {
        gsap.fromTo(
          section,
          {
            opacity: 0,
            y: 50,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1.5,
            ease: "power2.out",
            scrollTrigger: {
              trigger: section,
              start: "top 85%",
              end: "bottom 15%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Cursor follower effect (only on client)
      if (typeof window !== "undefined") {
        let cursor = document.querySelector(".cursor-follower");
        if (!cursor) {
          cursor = document.createElement("div");
          cursor.className =
            "cursor-follower fixed pointer-events-none z-50 w-6 h-6 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full opacity-30 blur-sm transition-all duration-300";
          document.body.appendChild(cursor);
        }

        const moveCursor = (e: MouseEvent) => {
          gsap.to(cursor, {
            x: e.clientX - 12,
            y: e.clientY - 12,
            duration: 0.3,
            ease: "power2.out",
          });
        };

        const handleMouseMove = (e: MouseEvent) => moveCursor(e);
        window.addEventListener("mousemove", handleMouseMove);

        // Cleanup
        return () => {
          window.removeEventListener("mousemove", handleMouseMove);
          if (cursor && cursor.parentNode) {
            cursor.parentNode.removeChild(cursor);
          }
        };
      }
    },
    { scope: mainRef }
  );

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Handle scroll events for active section tracking
  useEffect(() => {
    // This effect is now handled in the scroll handler above
  }, []);

  return (
    <div
      ref={mainRef}
      className="min-h-screen bg-black text-white relative overflow-x-hidden"
    >
      {/* Background Elements */}
      <div className="fixed inset-0 z-0">
        <div className="parallax-slow">
          <StarField starCount={200} />
        </div>
        <div className="parallax-medium">
          <GradientOrbs />
        </div>
      </div>

      {/* Navigation */}
      <Navbar />

      {/* Main Content */}
      <main className="relative z-10">
        {/* Hero Section */}
        <div className="section-reveal">
          <HeroSection />
        </div>

        {/* About Section */}
        <div className="section-reveal">
          <AboutSection className="bg-gradient-to-b from-transparent via-purple-900/5 to-transparent" />
        </div>

        {/* Skills Section */}
        <div className="section-reveal">
          <SkillsSection className="bg-gradient-to-b from-transparent via-blue-900/5 to-transparent" />
        </div>

        {/* Projects Section */}
        <div className="section-reveal">
          <ProjectsSection className="bg-gradient-to-b from-transparent via-purple-900/5 to-transparent" />
        </div>

        {/* Contact Section */}
        <div className="section-reveal">
          <ContactSection className="bg-gradient-to-b from-transparent via-blue-900/5 to-black/20" />
        </div>
      </main>

      {/* Footer */}
      <Footer />

      {/* Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 w-full h-1 bg-white/10 z-50">
        <div
          className="h-full bg-gradient-to-r from-purple-500 to-blue-500 transition-all duration-300"
          style={{
            width: `${scrollProgress}%`,
          }}
        />
      </div>

      {/* Back to Top Button */}
      <button
        onClick={() => scrollToSection("home")}
        className={`fixed bottom-8 right-8 p-3 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full text-white shadow-lg hover:shadow-purple-500/25 transition-all duration-300 z-40 hover:scale-110 ${
          showBackToTop ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <svg
          className="w-6 h-6"
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
      </button>

      {/* Loading Screen */}
      {isLoading && (
        <div className="fixed inset-0 bg-black z-50 flex items-center justify-center">
          <div className="text-center">
            <div className="w-16 h-16 border-4 border-purple-500/30 border-t-purple-500 rounded-full animate-spin mb-4" />
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .section-reveal {
          animation: fadeIn 0.6s ease-out;
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 8px;
        }

        ::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(to bottom, #8b5cf6, #3b82f6);
          border-radius: 4px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(to bottom, #7c3aed, #2563eb);
        }

        /* Smooth scrolling */
        html {
          scroll-behavior: smooth;
        }

        /* Back to top button visibility */
        .back-to-top {
          transition: all 0.3s ease;
        }

        /* Performance optimizations */
        * {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        .parallax-slow,
        .parallax-medium,
        .parallax-fast {
          will-change: transform;
          transform: translate3d(0, 0, 0);
        }
      `}</style>

      <script
        dangerouslySetInnerHTML={{
          __html: `
              // Disable cursor on touch devices
              if (typeof window !== 'undefined' && 'ontouchstart' in window) {
                document.documentElement.style.setProperty('cursor', 'auto', 'important');
                const cursorFollower = document.querySelector('.cursor-follower');
                if (cursorFollower) {
                  cursorFollower.style.display = 'none';
                }
              }
            `,
        }}
      />
    </div>
  );
}
