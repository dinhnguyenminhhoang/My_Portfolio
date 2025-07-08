"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Sun, Moon, Palette } from "lucide-react";
import { useTheme } from "./ThemeProvider";

const ThemeToggle = () => {
  const { theme, toggleTheme, isDark, isLoaded } = useTheme();
  const buttonRef = useRef<HTMLButtonElement>(null);
  const iconRef = useRef<HTMLDivElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Only run animations if theme is loaded
    if (!isLoaded) return;

    // Animate icon change
    if (iconRef.current) {
      gsap
        .timeline()
        .to(iconRef.current, {
          scale: 0,
          rotation: 180,
          duration: 0.3,
          ease: "power2.inOut",
        })
        .set(iconRef.current, {
          rotation: -180,
        })
        .to(iconRef.current, {
          scale: 1,
          rotation: 0,
          duration: 0.3,
          ease: "power2.out",
        });
    }

    // Animate glow effect
    if (glowRef.current) {
      gsap.to(glowRef.current, {
        scale: 1.2,
        opacity: isDark ? 0.8 : 0.6,
        duration: 0.5,
        ease: "power2.out",
      });
    }
  }, [theme, isDark, isLoaded]);

  const handleToggle = () => {
    // Only allow toggle if loaded
    if (!isLoaded) return;

    // Button click animation
    if (buttonRef.current) {
      gsap
        .timeline()
        .to(buttonRef.current, {
          scale: 0.95,
          duration: 0.1,
          ease: "power2.out",
        })
        .to(buttonRef.current, {
          scale: 1,
          duration: 0.2,
          ease: "power2.out",
        });
    }

    // Create ripple effect
    if (buttonRef.current) {
      const ripple = document.createElement("div");
      ripple.className = `absolute inset-0 rounded-full ${
        isDark
          ? "bg-gradient-to-r from-orange-400 to-yellow-400"
          : "bg-gradient-to-r from-purple-400 to-blue-400"
      } opacity-30`;

      buttonRef.current.appendChild(ripple);

      gsap
        .timeline({
          onComplete: () => {
            ripple.remove();
          },
        })
        .set(ripple, { scale: 0 })
        .to(ripple, {
          scale: 2,
          opacity: 0,
          duration: 0.6,
          ease: "power2.out",
        });
    }

    toggleTheme();
  };

  // Render loading skeleton if not loaded
  if (!isLoaded) {
    return (
      <div className="fixed top-6 right-6 z-50">
        <div className="p-4 bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 w-14 h-14" />
      </div>
    );
  }

  return (
    <div className="fixed top-6 right-6 z-50">
      <button
        ref={buttonRef}
        onClick={handleToggle}
        className="group relative p-4 bg-white/10 dark:bg-white/10 backdrop-blur-md rounded-2xl border border-white/20 dark:border-white/20 hover:bg-white/20 dark:hover:bg-white/20 transition-all duration-300 overflow-hidden"
        aria-label={`Switch to ${isDark ? "light" : "dark"} theme`}
      >
        {/* Background glow */}
        <div
          ref={glowRef}
          className={`absolute inset-0 rounded-2xl blur-xl transition-all duration-500 ${
            isDark
              ? "bg-gradient-to-r from-orange-500/20 to-yellow-500/20"
              : "bg-gradient-to-r from-purple-500/20 to-blue-500/20"
          }`}
        />

        {/* Icon container */}
        <div
          ref={iconRef}
          className="relative z-10 w-6 h-6 flex items-center justify-center"
        >
          {isDark ? (
            <Sun className="w-6 h-6 text-orange-400 group-hover:text-orange-300 transition-colors" />
          ) : (
            <Moon className="w-6 h-6 text-purple-400 group-hover:text-purple-300 transition-colors" />
          )}
        </div>

        {/* Hover effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/5 to-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />

        {/* Active indicator */}
        <div
          className={`absolute -top-1 -right-1 w-3 h-3 rounded-full transition-all duration-300 ${
            isDark
              ? "bg-gradient-to-r from-orange-400 to-yellow-400 shadow-lg shadow-orange-400/50"
              : "bg-gradient-to-r from-purple-400 to-blue-400 shadow-lg shadow-purple-400/50"
          }`}
        />
      </button>

      {/* Theme info tooltip */}
      <div className="absolute top-full right-0 mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="bg-black/80 text-white text-sm px-3 py-2 rounded-lg backdrop-blur-sm border border-white/10">
          {isDark ? "Switch to light mode" : "Switch to dark mode"}
        </div>
      </div>
    </div>
  );
};

export default ThemeToggle;
