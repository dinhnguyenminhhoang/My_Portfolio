"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TextPlugin } from "gsap/TextPlugin";

// Import all components
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ServicesSection from "@/components/ServicesSection";
import ExperienceSection from "@/components/ExperienceSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, TextPlugin);
}

export default function Home() {
  const pageRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Initialize GSAP animations
    const ctx = gsap.context(() => {
      // Page load animation
      gsap.from(".page-section", {
        opacity: 0,
        y: 50,
        duration: 1,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: pageRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });

      // Smooth scroll progress indicator
      if (progressRef.current) {
        gsap.to(progressRef.current, {
          scaleX: 1,
          ease: "none",
          scrollTrigger: {
            trigger: document.body,
            start: "top top",
            end: "bottom bottom",
            scrub: true,
          },
        });
      }

      // Parallax effect for hero section
      gsap.to(".hero-bg", {
        yPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: ".hero-section",
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // Floating elements animation
      gsap.to(".floating-element", {
        y: -20,
        duration: 3,
        ease: "power2.inOut",
        repeat: -1,
        yoyo: true,
        stagger: 0.5,
      });

      // Section reveal animations
      gsap.utils
        .toArray<HTMLElement>(".section-reveal")
        .forEach((section, index) => {
          gsap.fromTo(
            section,
            {
              opacity: 0,
              y: 100,
              scale: 0.95,
            },
            {
              opacity: 1,
              y: 0,
              scale: 1,
              duration: 1.2,
              ease: "power3.out",
              scrollTrigger: {
                trigger: section,
                start: "top 85%",
                end: "top 20%",
                toggleActions: "play none none reverse",
              },
            }
          );
        });

      // Stagger animations for cards
      gsap.utils.toArray<HTMLElement>(".card-stagger").forEach((container) => {
        const cards = container.querySelectorAll<HTMLElement>(".card-item");
        gsap.fromTo(
          cards,
          {
            opacity: 0,
            y: 60,
            scale: 0.9,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "power2.out",
            stagger: 0.1,
            scrollTrigger: {
              trigger: container,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Text reveal animations
      gsap.utils.toArray<HTMLElement>(".text-reveal").forEach((text) => {
        gsap.fromTo(
          text,
          {
            opacity: 0,
            y: 30,
          },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: text,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });

      // Smooth magnetic effect for interactive elements
      gsap.utils
        .toArray<HTMLElement>(".magnetic-element")
        .forEach((element) => {
          const magnetic = element;
          const magneticText =
            magnetic.querySelector<HTMLElement>(".magnetic-text");

          magnetic.addEventListener("mouseenter", () => {
            gsap.to(magnetic, {
              scale: 1.05,
              duration: 0.3,
              ease: "power2.out",
            });
            if (magneticText) {
              gsap.to(magneticText, {
                scale: 1.1,
                duration: 0.3,
                ease: "power2.out",
              });
            }
          });

          magnetic.addEventListener("mouseleave", () => {
            gsap.to(magnetic, {
              scale: 1,
              duration: 0.3,
              ease: "power2.out",
            });
            if (magneticText) {
              gsap.to(magneticText, {
                scale: 1,
                duration: 0.3,
                ease: "power2.out",
              });
            }
          });

          magnetic.addEventListener("mousemove", (e: MouseEvent) => {
            const rect = magnetic.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            gsap.to(magnetic, {
              x: x * 0.2,
              y: y * 0.2,
              duration: 0.3,
              ease: "power2.out",
            });
          });
        });

      // Background particles animation
      const particles = gsap.utils.toArray<HTMLElement>(".particle");
      particles.forEach((particle, index) => {
        gsap.set(particle, {
          x: Math.random() * window.innerWidth,
          y: Math.random() * window.innerHeight,
          scale: Math.random() * 0.5 + 0.5,
          opacity: Math.random() * 0.5 + 0.3,
        });

        gsap.to(particle, {
          x: `+=${Math.random() * 200 - 100}`,
          y: `+=${Math.random() * 200 - 100}`,
          duration: Math.random() * 10 + 5,
          repeat: -1,
          yoyo: true,
          ease: "none",
          delay: index * 0.1,
        });
      });

      // Section transitions
      gsap.utils
        .toArray<HTMLElement>(".section-transition")
        .forEach((section, index) => {
          ScrollTrigger.create({
            trigger: section,
            start: "top center",
            end: "bottom center",
            onEnter: () => {
              gsap.to(section, {
                backgroundColor: index % 2 === 0 ? "#ffffff" : "#f8fafc",
                duration: 0.5,
              });
            },
            onLeave: () => {
              gsap.to(section, {
                backgroundColor: "#ffffff",
                duration: 0.5,
              });
            },
          });
        });

      // Smooth cursor following effect
      const cursor = document.querySelector<HTMLElement>(".custom-cursor");
      if (cursor) {
        gsap.set(cursor, { xPercent: -50, yPercent: -50 });

        const pos = { x: window.innerWidth / 2, y: window.innerHeight / 2 };
        const mouse = { x: pos.x, y: pos.y };
        const speed = 0.2;

        const xSet = gsap.quickSetter(cursor, "x", "px");
        const ySet = gsap.quickSetter(cursor, "y", "px");

        window.addEventListener("mousemove", (e: MouseEvent) => {
          mouse.x = e.x;
          mouse.y = e.y;
        });

        gsap.ticker.add(() => {
          const dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());
          pos.x += (mouse.x - pos.x) * dt;
          pos.y += (mouse.y - pos.y) * dt;
          xSet(pos.x);
          ySet(pos.y);
        });
      }
    }, pageRef);

    return () => {
      ctx.revert();
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div ref={pageRef} className="min-h-screen bg-white overflow-x-hidden">
      {/* Scroll Progress Indicator */}
      <div
        ref={progressRef}
        className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 to-purple-600 z-50 origin-left scale-x-0"
      />

      {/* Custom Cursor */}
      <div className="custom-cursor fixed w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full pointer-events-none z-50 mix-blend-difference hidden lg:block" />

      {/* Background Particles */}
      <div className="fixed inset-0 pointer-events-none z-0">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle absolute w-2 h-2 bg-gradient-to-r from-blue-400/20 to-purple-400/20 rounded-full"
          />
        ))}
      </div>

      {/* Floating Elements */}
      <div className="fixed top-20 left-10 w-20 h-20 bg-gradient-to-br from-blue-400/10 to-purple-400/10 rounded-full floating-element pointer-events-none z-10" />
      <div className="fixed top-40 right-20 w-32 h-32 bg-gradient-to-br from-purple-400/10 to-pink-400/10 rounded-full floating-element pointer-events-none z-10" />
      <div className="fixed bottom-20 left-20 w-16 h-16 bg-gradient-to-br from-cyan-400/10 to-blue-400/10 rounded-full floating-element pointer-events-none z-10" />

      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="relative z-20">
        {/* Hero Section */}
        <section className="page-section section-reveal hero-section relative">
          <div className="hero-bg absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50" />
          <HeroSection />
        </section>

        {/* About Section */}
        <section className="page-section section-reveal section-transition">
          <AboutSection />
        </section>

        {/* Services Section */}
        <section className="page-section section-reveal section-transition">
          <ServicesSection />
        </section>

        {/* Experience Section */}
        <section className="page-section section-reveal section-transition">
          <ExperienceSection />
        </section>

        {/* Testimonials Section */}
        <section className="page-section section-reveal section-transition">
          <TestimonialsSection />
        </section>

        {/* Contact Section */}
        <section className="page-section section-reveal section-transition">
          <ContactSection />
        </section>
      </main>

      {/* Footer */}
      <Footer />

      {/* Back to Top Button */}
      <button
        className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 magnetic-element z-50"
        onClick={scrollToTop}
        aria-label="Scroll to top"
      >
        <svg
          className="w-6 h-6 mx-auto"
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
    </div>
  );
}
