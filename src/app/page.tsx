"use client";

import { useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Loader from "@/components/Loader";
import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const handleLoadingComplete = () => {
    setIsLoading(false);
  };

  useEffect(() => {
    if (!isLoading) {
      // Custom cursor effect
      const cursor = document.getElementById("custom-cursor");

      const handleMouseMove = (e: MouseEvent) => {
        if (cursor) {
          gsap.to(cursor, {
            x: e.clientX,
            y: e.clientY,
            duration: 0.1,
            ease: "power2.out",
          });
        }
      };

      const handleMouseEnter = () => {
        if (cursor) {
          gsap.to(cursor.children[0], {
            scale: 1,
            duration: 0.3,
            ease: "power2.out",
          });
        }
      };

      const handleMouseLeave = () => {
        if (cursor) {
          gsap.to(cursor.children[0], {
            scale: 0,
            duration: 0.3,
            ease: "power2.out",
          });
        }
      };

      // Add cursor events to interactive elements
      const interactiveElements = document.querySelectorAll(
        'a, button, [role="button"]'
      );

      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseenter", handleMouseEnter);
      document.addEventListener("mouseleave", handleMouseLeave);

      interactiveElements.forEach((el) => {
        el.addEventListener("mouseenter", () => {
          if (cursor) {
            gsap.to(cursor.children[0], {
              scale: 2,
              duration: 0.3,
              ease: "power2.out",
            });
          }
        });

        el.addEventListener("mouseleave", () => {
          if (cursor) {
            gsap.to(cursor.children[0], {
              scale: 1,
              duration: 0.3,
              ease: "power2.out",
            });
          }
        });
      });

      // Smooth scroll behavior
      const handleSmoothScroll = () => {
        gsap.to(window, {
          scrollTo: { y: 0, autoKill: false },
          duration: 0.8,
          ease: "power2.inOut",
        });
      };

      // Page load animation
      gsap.fromTo(
        document.body,
        { opacity: 0 },
        { opacity: 1, duration: 0.5, ease: "power2.out" }
      );

      // Cleanup
      return () => {
        document.removeEventListener("mousemove", handleMouseMove);
        document.removeEventListener("mouseenter", handleMouseEnter);
        document.removeEventListener("mouseleave", handleMouseLeave);
      };
    }
  }, [isLoading]);

  return (
    <>
      {/* Show loader first */}
      {isLoading && <Loader onComplete={handleLoadingComplete} />}

      {/* Main content */}
      <main
        className={`relative ${
          isLoading ? "opacity-0" : "opacity-100"
        } transition-opacity duration-1000`}
      >
        {/* Navigation */}
        <Navigation />

        {/* Hero Section */}
        <section id="home">
          <Hero />
        </section>

        {/* About Section */}
        <About />

        {/* Skills Section */}
        <Skills />

        {/* Projects Section */}
        <Projects />

        {/* Projects Section */}
        <Blog />

        {/* Contact Section */}
        <Contact />

        {/* Temporary placeholder removed */}

        {/* Footer */}
        <footer className="relative py-12 px-4 sm:px-6 lg:px-8 border-t border-white/10">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
              {/* Brand */}
              <div className="lg:col-span-2">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-lg flex items-center justify-center font-bold text-white text-xl">
                    AC
                  </div>
                  <span className="ml-3 text-xl font-bold text-white">
                    Alex Chen
                  </span>
                </div>
                <p className="text-gray-300 max-w-md">
                  Full Stack Developer passionate about creating exceptional
                  digital experiences with modern technologies and clean code.
                </p>
              </div>

              {/* Quick Links */}
              <div>
                <h4 className="text-lg font-semibold text-white dark:text-white light:text-slate-900 mb-4 transition-colors duration-500">
                  Quick Links
                </h4>
                <ul className="space-y-2">
                  {[
                    "Home",
                    "About",
                    "Skills",
                    "Projects",
                    "Blog",
                    "Contact",
                  ].map((link) => (
                    <li key={link}>
                      <button
                        onClick={() =>
                          document
                            .getElementById(link.toLowerCase())
                            ?.scrollIntoView({ behavior: "smooth" })
                        }
                        className="text-gray-300 dark:text-gray-300 light:text-slate-600 hover:text-purple-400 dark:hover:text-purple-400 light:hover:text-purple-600 transition-colors duration-300"
                      >
                        {link}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Social Links */}
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">
                  Connect
                </h4>
                <ul className="space-y-2">
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-purple-400 transition-colors"
                    >
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-purple-400 transition-colors"
                    >
                      LinkedIn
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-purple-400 transition-colors"
                    >
                      Twitter
                    </a>
                  </li>
                  <li>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-purple-400 transition-colors"
                    >
                      Email
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Bottom Bar */}
            <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
              <p className="text-gray-400 text-sm">
                © 2024 Alex Chen. All rights reserved.
              </p>
              <div className="flex items-center space-x-6 mt-4 md:mt-0">
                <span className="text-gray-400 text-sm">
                  Built with ❤️ using
                </span>
                <div className="flex items-center space-x-2">
                  <span className="text-purple-400 text-sm font-medium">
                    Next.js
                  </span>
                  <span className="text-gray-400">•</span>
                  <span className="text-cyan-400 text-sm font-medium">
                    Tailwind CSS
                  </span>
                  <span className="text-gray-400">•</span>
                  <span className="text-pink-400 text-sm font-medium">
                    GSAP
                  </span>
                </div>
              </div>
            </div>
          </div>
        </footer>

        {/* Back to Top Button */}
        <button
          onClick={() =>
            document
              .getElementById("home")
              ?.scrollIntoView({ behavior: "smooth" })
          }
          className="fixed bottom-8 right-8 p-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full shadow-lg hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 hover:scale-110 z-40 group"
          aria-label="Back to top"
        >
          <span className="block w-6 h-6 text-white group-hover:-translate-y-1 transition-transform">
            ↑
          </span>
        </button>
      </main>
    </>
  );
}
