"use client";

import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

interface GradientOrbsProps {
  className?: string;
}

export default function GradientOrbs({ className = "" }: GradientOrbsProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Main orb animations
      gsap.set(".orb", {
        scale: 0,
        opacity: 0,
      });

      // Animate orbs appearing
      gsap.to(".orb", {
        scale: 1,
        opacity: 1,
        duration: 2,
        stagger: 0.3,
        ease: "power2.out",
      });

      // Continuous floating animation for orbs
      gsap.to(".orb-1", {
        x: 100,
        y: -50,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".orb-2", {
        x: -80,
        y: 60,
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".orb-3", {
        x: 60,
        y: 40,
        duration: 12,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      gsap.to(".orb-4", {
        x: -40,
        y: -30,
        duration: 9,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });

      // Pulsing effect
      gsap.to(".orb", {
        scale: "random(0.8, 1.2)",
        duration: "random(3, 6)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.5,
      });

      // Rotation animation
      gsap.to(".orb", {
        rotation: 360,
        duration: "random(20, 40)",
        repeat: -1,
        ease: "none",
        stagger: 2,
      });
    },
    { scope: containerRef }
  );

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    >
      {/* Large Purple Orb */}
      <div className="orb orb-1 absolute -top-48 -left-48 w-96 h-96 bg-gradient-to-br from-purple-500/30 to-blue-600/20 rounded-full blur-3xl" />

      {/* Medium Blue Orb */}
      <div className="orb orb-2 absolute top-1/3 -right-32 w-64 h-64 bg-gradient-to-br from-blue-500/25 to-cyan-400/15 rounded-full blur-2xl" />

      {/* Small Pink Orb */}
      <div className="orb orb-3 absolute bottom-1/4 left-1/4 w-48 h-48 bg-gradient-to-br from-pink-500/20 to-purple-400/10 rounded-full blur-2xl" />

      {/* Medium Cyan Orb */}
      <div className="orb orb-4 absolute bottom-0 right-1/3 w-56 h-56 bg-gradient-to-br from-cyan-400/20 to-blue-500/15 rounded-full blur-2xl" />

      {/* Additional smaller orbs */}
      <div className="orb absolute top-1/4 left-1/2 w-32 h-32 bg-gradient-to-br from-indigo-500/15 to-purple-400/10 rounded-full blur-xl" />

      <div className="orb absolute bottom-1/3 left-1/6 w-24 h-24 bg-gradient-to-br from-violet-500/20 to-pink-400/10 rounded-full blur-xl" />

      {/* Nebula-like effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/5 via-transparent to-blue-900/5" />
      <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-purple-500/5 to-transparent" />

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
          `,
          backgroundSize: "50px 50px",
        }}
      />
    </div>
  );
}
