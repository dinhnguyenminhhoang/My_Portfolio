"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Import components
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  useEffect(() => {
    // Global scroll animations
    const sections = gsap.utils.toArray(".section");

    sections.forEach((section: any, index) => {
      // Section reveal animation
      gsap.fromTo(
        section,
        {
          opacity: 0,
          y: 100,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Parallax effect for sections
      gsap.to(section, {
        yPercent: -10,
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });
    });

    // Smooth scroll for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    anchorLinks.forEach((link) => {
      link.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = link.getAttribute("href")?.substring(1);
        const targetElement = document.getElementById(targetId || "");

        if (targetElement) {
          gsap.to(window, {
            duration: 1.5,
            scrollTo: {
              y: targetElement,
              offsetY: 80,
            },
            ease: "power2.inOut",
          });
        }
      });
    });

    // Mouse follower effect
    const cursor = document.createElement("div");
    cursor.className =
      "fixed w-6 h-6 pointer-events-none z-50 mix-blend-difference";
    cursor.innerHTML =
      '<div class="w-full h-full bg-white rounded-full opacity-50"></div>';
    document.body.appendChild(cursor);

    const moveCursor = (e: MouseEvent) => {
      gsap.to(cursor, {
        x: e.clientX - 12,
        y: e.clientY - 12,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", moveCursor);

    // Cleanup
    return () => {
      window.removeEventListener("mousemove", moveCursor);
      cursor.remove();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <main className="relative min-h-screen">
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <section className="section">
        <Hero />
      </section>

      {/* About Section */}
      <section className="section">
        <About />
      </section>

      {/* Skills Section */}
      <section className="section">
        <Skills />
      </section>

      {/* Projects Section */}
      <section className="section">
        <Projects />
      </section>

      {/* Contact Section */}
      <section className="section">
        <Contact />
      </section>

      {/* Footer */}
      <Footer />

      {/* Back to Top Button */}
      <BackToTopButton />

      {/* Loading Screen */}
      <LoadingScreen />
    </main>
  );
}

// Back to Top Button Component
const BackToTopButton = () => {
  useEffect(() => {
    const button = document.getElementById("back-to-top");
    if (!button) return;

    const showButton = () => {
      if (window.scrollY > 500) {
        gsap.to(button, { opacity: 1, scale: 1, duration: 0.3 });
      } else {
        gsap.to(button, { opacity: 0, scale: 0.8, duration: 0.3 });
      }
    };

    window.addEventListener("scroll", showButton);
    return () => window.removeEventListener("scroll", showButton);
  }, []);

  const scrollToTop = () => {
    gsap.to(window, {
      duration: 1.5,
      scrollTo: { y: 0 },
      ease: "power2.inOut",
    });
  };

  return (
    <button
      id="back-to-top"
      onClick={scrollToTop}
      className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-primary rounded-full flex items-center justify-center opacity-0 scale-75 transition-all duration-300 hover:scale-110 z-40 shadow-lg hover:shadow-xl hover:shadow-purple-500/25"
      style={{ opacity: 0 }}
    >
      <svg
        className="w-6 h-6 text-white"
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
  );
};

// Loading Screen Component
const LoadingScreen = () => {
  useEffect(() => {
    const loadingScreen = document.getElementById("loading-screen");
    if (!loadingScreen) return;

    // Hide loading screen after page load
    const hideLoading = () => {
      gsap.to(loadingScreen, {
        opacity: 0,
        duration: 0.8,
        ease: "power2.inOut",
        onComplete: () => {
          loadingScreen.style.display = "none";
        },
      });
    };

    // Show loading animation
    const tl = gsap.timeline();
    tl.fromTo(
      ".loading-text",
      { opacity: 0, y: 30 },
      { opacity: 1, y: 0, duration: 0.8, ease: "power2.out" }
    )
      .fromTo(
        ".loading-progress",
        { width: "0%" },
        { width: "100%", duration: 2, ease: "power2.inOut" }
      )
      .call(hideLoading, [], "+=0.5");

    // Animate loading dots
    gsap.to(".loading-dot", {
      opacity: 0.3,
      duration: 0.6,
      repeat: -1,
      yoyo: true,
      stagger: 0.2,
    });
  }, []);

  return (
    <div
      id="loading-screen"
      className="fixed inset-0 bg-slate-950 z-50 flex items-center justify-center"
    >
      <div className="text-center">
        {/* Logo */}
        <div className="w-20 h-20 mx-auto mb-8 bg-gradient-primary rounded-2xl flex items-center justify-center">
          <svg
            className="w-10 h-10 text-white"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
          </svg>
        </div>

        {/* Loading Text */}
        <h2 className="loading-text text-2xl font-bold text-white mb-4">
          Hoàng Game Designer
        </h2>
        <p className="loading-text text-gray-400 mb-8">
          Đang tải portfolio tuyệt vời
          <span className="loading-dot">.</span>
          <span className="loading-dot">.</span>
          <span className="loading-dot">.</span>
        </p>

        {/* Progress Bar */}
        <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden">
          <div className="loading-progress h-full bg-gradient-primary rounded-full"></div>
        </div>
      </div>
    </div>
  );
};
