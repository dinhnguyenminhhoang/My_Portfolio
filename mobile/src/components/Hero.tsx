"use client";

import { useEffect, useRef } from "react";
import { ChevronDown, Code, Smartphone, Rocket, Zap } from "lucide-react";

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Remove loading overlay after component mounts
    const loadingOverlay = document.getElementById("loading-overlay");
    if (loadingOverlay) {
      setTimeout(() => {
        loadingOverlay.style.opacity = "0";
        setTimeout(() => {
          loadingOverlay.style.display = "none";
        }, 1000);
      }, 2000);
    }

    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-slide-in-bottom");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleScrollToAbout = () => {
    const aboutSection = document.getElementById("about");
    aboutSection?.scrollIntoView({ behavior: "smooth" });
  };

  const techStack = [
    { name: "React Native", color: "from-blue-400 to-cyan-400" },
    { name: "Flutter", color: "from-blue-500 to-purple-500" },
    { name: "Swift", color: "from-orange-400 to-red-400" },
    { name: "Kotlin", color: "from-purple-400 to-pink-400" },
    { name: "TypeScript", color: "from-blue-600 to-blue-400" },
    { name: "Firebase", color: "from-yellow-400 to-orange-400" },
  ];

  return (
    <section
      id="home"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden mt-12"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Floating Icons */}
        <div className="absolute top-20 left-10 text-purple-400/20 animate-float">
          <Smartphone size={60} />
        </div>
        <div
          className="absolute top-40 right-20 text-pink-400/20 animate-float"
          style={{ animationDelay: "1s" }}
        >
          <Code size={50} />
        </div>
        <div
          className="absolute bottom-40 left-20 text-cyan-400/20 animate-float"
          style={{ animationDelay: "2s" }}
        >
          <Rocket size={45} />
        </div>
        <div
          className="absolute bottom-20 right-10 text-yellow-400/20 animate-float"
          style={{ animationDelay: "0.5s" }}
        >
          <Zap size={55} />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div ref={textRef} className="max-w-4xl mx-auto">
          {/* Greeting */}
          <div
            className="mb-6 opacity-0 animate-slide-in-bottom"
            style={{ animationDelay: "0.2s", animationFillMode: "forwards" }}
          >
            <span className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full border border-purple-500/30 text-purple-300 text-sm font-medium backdrop-blur-sm">
              👋 Welcome to my portfolio
            </span>
          </div>

          {/* Main Heading */}
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 opacity-0 animate-slide-in-bottom"
            style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
          >
            <span className="block text-white mb-2">Hi, I'm</span>
            <span className="block relative overflow-hidden">
              {/* Main Text with Enhanced Effects */}
              <span
                className="relative text-gradient-enhanced glow-text letter-reveal"
                style={{
                  animationDelay: "1s",
                  animationFillMode: "forwards",
                }}
              >
                Alex Chen
              </span>

              {/* Floating Particles */}
              <div
                className="absolute -top-4 -left-4 w-2 h-2 bg-purple-400 rounded-full animate-bounce opacity-60"
                style={{ animationDelay: "2s" }}
              ></div>
              <div
                className="absolute -top-2 right-8 w-1.5 h-1.5 bg-pink-400 rounded-full animate-bounce opacity-60"
                style={{ animationDelay: "2.3s" }}
              ></div>
              <div
                className="absolute -bottom-2 left-12 w-1 h-1 bg-cyan-400 rounded-full animate-bounce opacity-60"
                style={{ animationDelay: "2.6s" }}
              ></div>
            </span>
          </h1>

          {/* Subtitle */}
          <h2
            className="text-xl md:text-2xl lg:text-3xl text-gray-300 mb-8 opacity-0 animate-slide-in-bottom"
            style={{ animationDelay: "0.6s", animationFillMode: "forwards" }}
          >
            <span className="block mb-2">Mobile Developer & </span>
            <span className="text-gradient font-semibold">
              App Innovation Specialist
            </span>
          </h2>

          {/* Description */}
          <p
            className="text-lg md:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed opacity-0 animate-slide-in-bottom"
            style={{ animationDelay: "0.8s", animationFillMode: "forwards" }}
          >
            Crafting exceptional mobile experiences with cutting-edge
            technologies. Specialized in React Native, Flutter, and native
            iOS/Android development. Turning ideas into powerful, user-centric
            mobile applications.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center mb-16 opacity-0 animate-slide-in-bottom"
            style={{ animationDelay: "1s", animationFillMode: "forwards" }}
          >
            <button
              onClick={() =>
                document
                  .getElementById("projects")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-purple-500/25"
            >
              <span className="relative z-10 flex items-center justify-center space-x-2">
                <span>View My Work</span>
                <Rocket
                  size={18}
                  className="group-hover:translate-x-1 transition-transform duration-300"
                />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur-lg opacity-0 group-hover:opacity-50 transition-opacity duration-300"></div>
            </button>

            <button
              onClick={() =>
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" })
              }
              className="group px-8 py-4 border-2 border-purple-500 text-purple-300 font-semibold rounded-full transition-all duration-300 hover:bg-purple-500 hover:text-white hover:scale-105 backdrop-blur-sm"
            >
              <span className="flex items-center justify-center space-x-2">
                <span>Let's Connect</span>
                <Zap
                  size={18}
                  className="group-hover:rotate-12 transition-transform duration-300"
                />
              </span>
            </button>
          </div>

          {/* Tech Stack */}
          <div
            className="mb-16 opacity-0 animate-slide-in-bottom"
            style={{ animationDelay: "1.2s", animationFillMode: "forwards" }}
          >
            <p className="text-gray-400 mb-8 text-sm uppercase tracking-wider">
              Tech Stack & Expertise
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {techStack.map((tech, index) => (
                <div
                  key={tech.name}
                  className="group relative"
                  style={{ animationDelay: `${1.4 + index * 0.1}s` }}
                >
                  <div
                    className={`absolute -inset-1 bg-gradient-to-r ${tech.color} rounded-lg blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200`}
                  ></div>
                  <div className="relative px-4 py-2 bg-slate-800/80 rounded-lg backdrop-blur-sm border border-gray-700/50 transition-all duration-300 hover:scale-105">
                    <span className="text-gray-300 text-sm font-medium">
                      {tech.name}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Stats */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 opacity-0 animate-slide-in-bottom"
            style={{ animationDelay: "1.4s", animationFillMode: "forwards" }}
          >
            {[
              { number: "50+", label: "Projects Completed" },
              { number: "5+", label: "Years Experience" },
              { number: "100K+", label: "App Downloads" },
              { number: "98%", label: "Client Satisfaction" },
            ].map((stat, index) => (
              <div key={stat.label} className="text-center group">
                <div className="text-2xl md:text-3xl font-bold text-gradient mb-2 group-hover:scale-110 transition-transform duration-300">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 opacity-0 animate-slide-in-bottom"
        style={{ animationDelay: "1.6s", animationFillMode: "forwards" }}
      >
        <button
          onClick={handleScrollToAbout}
          className="group flex flex-col items-center space-y-2 text-gray-400 hover:text-purple-400 transition-colors duration-300"
          aria-label="Scroll to about section"
        >
          <span className="text-xs uppercase tracking-wider">Scroll Down</span>
          <div className="w-6 h-10 border-2 border-current rounded-full flex justify-center">
            <div className="w-1 h-3 bg-current rounded-full mt-2 animate-bounce"></div>
          </div>
          <ChevronDown
            size={20}
            className="group-hover:translate-y-1 transition-transform duration-300"
          />
        </button>
      </div>

      {/* Parallax Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
        <div
          className="absolute top-1/3 right-1/3 w-1 h-1 bg-pink-400 rounded-full animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
        <div
          className="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 bg-cyan-400 rounded-full animate-pulse"
          style={{ animationDelay: "2s" }}
        ></div>
        <div
          className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-yellow-400 rounded-full animate-pulse"
          style={{ animationDelay: "0.5s" }}
        ></div>
      </div>
    </section>
  );
};

export default Hero;
