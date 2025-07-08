"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Layout from "@/components/layout/Layout";
import Hero from "@/components/sections/Hero/Hero";
import About from "@/components/sections/About/About";
import Portfolio from "@/components/sections/Portfolio/Portfolio";
import Services from "@/components/sections/Services/Services";
import Contact from "@/components/sections/Contact/Contact";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  useEffect(() => {
    // Custom cursor functionality
    const cursor = document.getElementById("cursor");

    const moveCursor = (e: MouseEvent) => {
      if (cursor) {
        gsap.to(cursor, {
          x: e.clientX,
          y: e.clientY,
          duration: 0.1,
          ease: "power2.out",
        });
      }
    };

    const showCursor = () => {
      if (cursor) {
        gsap.to(cursor, { opacity: 1, duration: 0.3 });
      }
    };

    const hideCursor = () => {
      if (cursor) {
        gsap.to(cursor, { opacity: 0, duration: 0.3 });
      }
    };

    const scaleCursor = () => {
      if (cursor) {
        gsap.to(cursor, { scale: 1.5, duration: 0.3 });
      }
    };

    const resetCursor = () => {
      if (cursor) {
        gsap.to(cursor, { scale: 1, duration: 0.3 });
      }
    };

    // Add event listeners
    document.addEventListener("mousemove", moveCursor);
    document.addEventListener("mouseenter", showCursor);
    document.addEventListener("mouseleave", hideCursor);

    // Add hover effects for interactive elements
    const interactiveElements = document.querySelectorAll(
      "button, a, .hover-scale"
    );
    interactiveElements.forEach((el) => {
      el.addEventListener("mouseenter", scaleCursor);
      el.addEventListener("mouseleave", resetCursor);
    });

    // Cleanup
    return () => {
      document.removeEventListener("mousemove", moveCursor);
      document.removeEventListener("mouseenter", showCursor);
      document.removeEventListener("mouseleave", hideCursor);
      interactiveElements.forEach((el) => {
        el.removeEventListener("mouseenter", scaleCursor);
        el.removeEventListener("mouseleave", resetCursor);
      });
    };
  }, []);

  useEffect(() => {
    // Page load animation
    const tl = gsap.timeline();

    tl.set("body", { overflow: "hidden" }).to(".loading-screen", {
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      onComplete: () => {
        gsap.set("body", { overflow: "auto" });
        gsap.set(".loading-screen", { display: "none" });
      },
    });

    // Refresh ScrollTrigger after page load
    ScrollTrigger.refresh();
  }, []);

  return (
    <>
      {/* Loading Screen */}
      <div className="loading-screen fixed inset-0 bg-gradient-to-br from-rose-50 to-pink-50 z-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full flex items-center justify-center animate-pulse">
            <span className="text-white font-bold text-xl">F</span>
          </div>
          <h1 className="text-2xl font-bold text-gray-900 mb-2">Flowries</h1>
          <div className="w-32 h-1 bg-gray-200 rounded-full mx-auto overflow-hidden">
            <div className="w-full h-full bg-gradient-to-r from-rose-500 to-pink-500 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <Layout>
        <Hero />
        <About />
        <Portfolio />
        <Services />
        <Contact />
      </Layout>

      {/* Back to Top Button */}
      <button
        id="back-to-top"
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });
        }}
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-rose-500 to-pink-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 z-40 opacity-0 pointer-events-none flex items-center justify-center"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 11l5-5m0 0l5 5m-5-5v12"
          />
        </svg>
      </button>

      {/* Global Styles for smooth animations */}
      <style jsx global>{`
        html {
          scroll-behavior: smooth;
        }

        * {
          cursor: none !important;
        }

        .hover-scale {
          transition: transform 0.3s ease;
        }

        .hover-scale:hover {
          transform: scale(1.05);
        }

        /* Custom scrollbar */
        ::-webkit-scrollbar {
          width: 6px;
        }

        ::-webkit-scrollbar-track {
          background: #f1f1f1;
        }

        ::-webkit-scrollbar-thumb {
          background: linear-gradient(45deg, #f43f5e, #ec4899);
          border-radius: 10px;
        }

        ::-webkit-scrollbar-thumb:hover {
          background: linear-gradient(45deg, #e11d48, #db2777);
        }

        /* Smooth text rendering */
        body {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }

        /* Selection styles */
        ::selection {
          background: rgba(244, 63, 94, 0.2);
          color: #1f2937;
        }

        ::-moz-selection {
          background: rgba(244, 63, 94, 0.2);
          color: #1f2937;
        }
      `}</style>

      <script
        dangerouslySetInnerHTML={{
          __html: `
            // Back to top button functionality
            window.addEventListener('scroll', function() {
              const backToTop = document.getElementById('back-to-top');
              if (window.scrollY > 300) {
                backToTop.style.opacity = '1';
                backToTop.style.pointerEvents = 'all';
              } else {
                backToTop.style.opacity = '0';
                backToTop.style.pointerEvents = 'none';
              }
            });
          `,
        }}
      />
    </>
  );
}
