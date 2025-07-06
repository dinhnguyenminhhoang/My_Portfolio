"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import {
  ChevronDown,
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Facebook,
} from "lucide-react";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(TextPlugin);
}

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLHeadingElement>(null);
  const descriptionRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);
  const scrollIndicatorRef = useRef<HTMLDivElement>(null);

  const [isLoaded, setIsLoaded] = useState(false);

  const roles = [
    "Full Stack Developer",
    "React Specialist",
    "Node.js Expert",
    "Cloud Architect",
    "UI/UX Enthusiast",
  ];

  // Pre-defined particle positions to avoid hydration mismatch
  const particlePositions = [
    { left: 15, top: 25, delay: 0.5, duration: 3 },
    { left: 85, top: 35, delay: 1.2, duration: 4 },
    { left: 30, top: 70, delay: 0.8, duration: 3.5 },
    { left: 70, top: 15, delay: 1.5, duration: 2.8 },
    { left: 45, top: 85, delay: 0.3, duration: 4.2 },
    { left: 25, top: 50, delay: 1.8, duration: 3.2 },
    { left: 90, top: 65, delay: 0.7, duration: 3.8 },
    { left: 10, top: 80, delay: 1.3, duration: 2.5 },
    { left: 65, top: 40, delay: 0.9, duration: 3.7 },
    { left: 55, top: 10, delay: 1.7, duration: 3.3 },
    { left: 35, top: 95, delay: 0.4, duration: 4.1 },
    { left: 80, top: 75, delay: 1.1, duration: 2.9 },
    { left: 5, top: 45, delay: 1.6, duration: 3.6 },
    { left: 75, top: 20, delay: 0.6, duration: 4.3 },
    { left: 40, top: 60, delay: 1.4, duration: 2.7 },
    { left: 95, top: 30, delay: 0.2, duration: 3.9 },
    { left: 20, top: 90, delay: 1.9, duration: 3.1 },
    { left: 60, top: 55, delay: 0.1, duration: 4.4 },
    { left: 85, top: 5, delay: 1.0, duration: 2.6 },
    { left: 50, top: 75, delay: 0.8, duration: 3.4 },
  ];

  useEffect(() => {
    setIsLoaded(true);

    const tl = gsap.timeline({ delay: 0.5 });

    // Initial setup - hide all elements
    gsap.set(
      [
        titleRef.current,
        subtitleRef.current,
        descriptionRef.current,
        buttonsRef.current,
        socialRef.current,
      ],
      {
        opacity: 0,
        y: 50,
      }
    );

    // Animate title
    tl.to(titleRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
    })
      // Animate subtitle with typing effect
      .to(
        subtitleRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.3"
      )
      // Start typing animation
      .call(() => {
        let currentRole = 0;
        const typeRole = () => {
          if (subtitleRef.current) {
            gsap.to(subtitleRef.current, {
              text: roles[currentRole],
              duration: 2,
              ease: "none",
              onComplete: () => {
                setTimeout(() => {
                  currentRole = (currentRole + 1) % roles.length;
                  gsap.to(subtitleRef.current, {
                    text: "",
                    duration: 1,
                    ease: "none",
                    onComplete: typeRole,
                  });
                }, 2000);
              },
            });
          }
        };
        typeRole();
      })
      // Animate description
      .to(
        descriptionRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=1"
      )
      // Animate buttons
      .to(
        buttonsRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.5"
      )
      // Animate social links
      .to(
        socialRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.5"
      )
      // Animate scroll indicator
      .to(
        scrollIndicatorRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.3"
      );

    // Floating animation for scroll indicator
    gsap.to(scrollIndicatorRef.current, {
      y: 10,
      duration: 2,
      ease: "power2.inOut",
      repeat: -1,
      yoyo: true,
      delay: 3,
    });

    // Parallax effect on mouse move
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;

      const xPercent = (clientX / innerWidth - 0.5) * 20;
      const yPercent = (clientY / innerHeight - 0.5) * 20;

      gsap.to(heroRef.current, {
        rotationY: xPercent * 0.5,
        rotationX: -yPercent * 0.5,
        duration: 1,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Particles Background */}
      <div className="absolute inset-0 overflow-hidden">
        {particlePositions.map((particle, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white/20 rounded-full animate-pulse"
            style={{
              left: `${particle.left}%`,
              top: `${particle.top}%`,
              animationDelay: `${particle.delay}s`,
              animationDuration: `${particle.duration}s`,
            }}
          />
        ))}
      </div>

      <div
        ref={heroRef}
        className="relative z-10 text-center max-w-5xl mx-auto perspective-1000"
      >
        {/* Main Title */}
        <h1
          ref={titleRef}
          className="text-5xl md:text-7xl lg:text-8xl font-bold bg-gradient-to-r from-white via-purple-200 to-cyan-200 dark:from-white dark:via-purple-200 dark:to-cyan-200 light:from-slate-800 light:via-indigo-600 light:to-blue-600 bg-clip-text text-transparent mb-6 leading-tight transition-colors duration-500"
        >
          Hi, I'm{" "}
          <span className="bg-gradient-to-r from-purple-400 to-cyan-400 dark:from-purple-400 dark:to-cyan-400 light:from-indigo-500 light:to-blue-500 bg-clip-text text-transparent transition-colors duration-500">
            Alex Chen
          </span>
        </h1>

        {/* Animated Subtitle */}
        <h2
          ref={subtitleRef}
          className="text-2xl md:text-4xl lg:text-5xl font-semibold text-purple-300 dark:text-purple-300 light:text-indigo-600 mb-8 h-16 flex items-center justify-center transition-colors duration-500"
        >
          {/* Text will be animated by GSAP */}
        </h2>

        {/* Description */}
        <p
          ref={descriptionRef}
          className="text-lg md:text-xl text-gray-300 dark:text-gray-300 light:text-slate-600 mb-12 max-w-3xl mx-auto leading-relaxed transition-colors duration-500"
        >
          I craft exceptional digital experiences with modern technologies.
          Specializing in React, Node.js, and cloud solutions, I bring ideas to
          life through clean code and innovative design.
        </p>

        {/* Action Buttons */}
        <div
          ref={buttonsRef}
          className="flex flex-col sm:flex-row gap-6 justify-center mb-16"
        >
          <button
            onClick={() => scrollToSection("projects")}
            className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-full font-semibold text-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
          >
            <span className="relative z-10 flex items-center gap-2">
              View My Work
              <ExternalLink className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-700 to-cyan-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </button>

          <button
            onClick={() => scrollToSection("contact")}
            className="group px-8 py-4 border-2 border-purple-400 text-purple-400 rounded-full font-semibold text-lg hover:bg-purple-400 hover:text-white transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-400/25"
          >
            Get In Touch
          </button>
        </div>

        {/* Social Links */}
        <div ref={socialRef} className="flex justify-center gap-8 mb-16">
          {[
            { icon: Github, href: "https://github.com", label: "GitHub" },
            { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
            {
              icon: Mail,
              href: "mailto:your.email@example.com",
              label: "Email",
            },
            {
              icon: Facebook,
              href: "dinhnguyenminhhoang",
              label: "Facebook",
            },
          ].map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-4 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 hover:bg-white/10 hover:border-purple-400/50 transition-all duration-300 hover:scale-110"
              aria-label={label}
            >
              <Icon className="w-6 h-6 text-gray-400 group-hover:text-purple-400 transition-colors" />
            </a>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div
          ref={scrollIndicatorRef}
          className="absolute bottom-0 left-[46%] transform -translate-x-1/2 cursor-pointer"
          onClick={() => scrollToSection("about")}
        >
          <div className="flex flex-col items-center text-gray-400 hover:text-white transition-colors group">
            <span className="text-sm mb-2 font-medium">Scroll Down</span>
            <ChevronDown className="w-6 h-6 animate-bounce group-hover:text-purple-400" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
