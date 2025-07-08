"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";

const Loader = ({ onComplete }: { onComplete: () => void }) => {
  const loaderRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const progressFillRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);

  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState("Loading");

  const loadingTexts = [
    "Loading",
    "Initializing",
    "Preparing Experience",
    "Almost Ready",
    "Welcome",
  ];

  // Pre-defined particle positions to avoid hydration mismatch
  const particlePositions = [
    { left: 10, top: 20 },
    { left: 80, top: 15 },
    { left: 25, top: 70 },
    { left: 65, top: 85 },
    { left: 45, top: 30 },
    { left: 90, top: 60 },
    { left: 15, top: 50 },
    { left: 70, top: 25 },
    { left: 35, top: 80 },
    { left: 55, top: 10 },
    { left: 85, top: 45 },
    { left: 20, top: 90 },
    { left: 75, top: 65 },
    { left: 40, top: 40 },
    { left: 95, top: 30 },
    { left: 5, top: 75 },
    { left: 60, top: 55 },
    { left: 30, top: 95 },
    { left: 85, top: 20 },
    { left: 50, top: 75 },
  ];

  useEffect(() => {
    const tl = gsap.timeline();

    // Initial setup
    gsap.set([logoRef.current, progressRef.current, textRef.current], {
      opacity: 0,
      y: 50,
    });

    // Logo animation
    tl.to(logoRef.current, {
      opacity: 1,
      y: 0,
      duration: 1,
      ease: "power3.out",
    })
      // Progress bar animation
      .to(
        progressRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.5"
      )
      // Text animation
      .to(
        textRef.current,
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.5"
      );

    // Simulate loading progress
    const progressInterval = setInterval(() => {
      setProgress((prev) => {
        const newProgress = prev + Math.random() * 15;
        if (newProgress >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return newProgress;
      });
    }, 200);

    // Update loading text
    const textInterval = setInterval(() => {
      setLoadingText((prev) => {
        const currentIndex = loadingTexts.indexOf(prev);
        return loadingTexts[(currentIndex + 1) % loadingTexts.length];
      });
    }, 800);

    // Cleanup and complete loading
    const completeTimeout = setTimeout(() => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
      setProgress(100);
      setLoadingText("Welcome");

      // Exit animation
      const exitTl = gsap.timeline({
        onComplete: () => {
          onComplete();
        },
      });

      exitTl
        .to(progressRef.current, {
          scaleX: 0,
          duration: 0.5,
          ease: "power2.in",
        })
        .to(
          [logoRef.current, textRef.current],
          {
            y: -50,
            opacity: 0,
            duration: 0.8,
            ease: "power3.in",
          },
          "-=0.3"
        )
        .to(
          loaderRef.current,
          {
            y: "-100%",
            duration: 1,
            ease: "power3.inOut",
          },
          "-=0.5"
        );
    }, 4000);

    return () => {
      clearInterval(progressInterval);
      clearInterval(textInterval);
      clearTimeout(completeTimeout);
    };
  }, [onComplete]);

  // Update progress bar
  useEffect(() => {
    if (progressFillRef.current) {
      gsap.to(progressFillRef.current, {
        width: `${progress}%`,
        duration: 0.3,
        ease: "power2.out",
      });
    }
  }, [progress]);

  // Floating particles animation
  useEffect(() => {
    const particles = particlesRef.current?.children;
    if (particles) {
      Array.from(particles).forEach((particle, index) => {
        gsap.to(particle, {
          y: `random(-20, 20)`,
          x: `random(-10, 10)`,
          rotation: `random(-180, 180)`,
          duration: `random(2, 4)`,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: index * 0.1,
        });
      });
    }
  }, []);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 overflow-hidden"
    >
      {/* Background Animation */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-pulse" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" />
      </div>

      {/* Floating Particles */}
      <div ref={particlesRef} className="absolute inset-0 pointer-events-none">
        {particlePositions.map((position, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-cyan-400 rounded-full opacity-30"
            style={{
              left: `${position.left}%`,
              top: `${position.top}%`,
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-md mx-auto px-6">
        {/* Animated Logo */}
        <div ref={logoRef} className="mb-12">
          <div className="relative inline-block">
            <div className="w-24 h-24 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl flex items-center justify-center font-bold text-white text-3xl mx-auto mb-4 relative overflow-hidden">
              AC
              {/* Shimmer effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 animate-shimmer" />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-2xl blur-lg opacity-50 animate-pulse" />
          </div>
          <h1 className="text-2xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent mt-4">
            Alex Chen
          </h1>
          <p className="text-purple-300 text-sm font-medium">
            Full Stack Developer
          </p>
        </div>

        {/* Loading Text */}
        <div ref={textRef} className="mb-8">
          <p className="text-white text-lg font-medium">{loadingText}</p>
          <div className="flex justify-center mt-2">
            <div className="flex space-x-1">
              <div className="w-2 h-2 bg-purple-400 rounded-full animate-bounce" />
              <div
                className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"
                style={{ animationDelay: "0.1s" }}
              />
              <div
                className="w-2 h-2 bg-purple-400 rounded-full animate-bounce"
                style={{ animationDelay: "0.2s" }}
              />
            </div>
          </div>
        </div>

        {/* Progress Bar */}
        <div ref={progressRef} className="w-full">
          <div className="flex justify-between items-center mb-2">
            <span className="text-gray-400 text-sm">Progress</span>
            <span className="text-purple-400 text-sm font-medium">
              {Math.round(progress)}%
            </span>
          </div>
          <div className="w-full h-2 bg-gray-700/50 rounded-full overflow-hidden backdrop-blur-sm">
            <div
              ref={progressFillRef}
              className="h-full bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full relative overflow-hidden transition-all duration-300"
              style={{ width: "0%" }}
            >
              {/* Progress shimmer */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 animate-shimmer" />
            </div>
          </div>
        </div>

        {/* Additional Info */}
        <div className="mt-8">
          <p className="text-gray-400 text-xs">
            Crafting exceptional digital experiences...
          </p>
        </div>
      </div>

      {/* Loading Ring Animation */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <div
            className="w-96 h-96 border border-purple-500/20 rounded-full animate-spin"
            style={{ animationDuration: "20s" }}
          />
          <div
            className="absolute inset-4 border border-cyan-500/20 rounded-full animate-spin"
            style={{ animationDuration: "15s", animationDirection: "reverse" }}
          />
          <div
            className="absolute inset-8 border border-pink-500/20 rounded-full animate-spin"
            style={{ animationDuration: "10s" }}
          />
        </div>
      </div>

      {/* Custom CSS for shimmer effect */}
      <style jsx global>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%) skewX(-12deg);
          }
          100% {
            transform: translateX(200%) skewX(-12deg);
          }
        }

        .animate-shimmer {
          animation: shimmer 1.5s infinite;
        }
      `}</style>
    </div>
  );
};

export default Loader;
