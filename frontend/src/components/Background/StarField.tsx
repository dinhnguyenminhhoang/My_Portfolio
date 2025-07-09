"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";

interface StarFieldProps {
  starCount?: number;
  className?: string;
}

export default function StarField({
  starCount = 150,
  className = "",
}: StarFieldProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [stars, setStars] = useState<
    Array<{
      left: string;
      top: string;
      starClass: string;
      filter: string;
    }>
  >([]);

  // Generate stars only on client side
  useEffect(() => {
    const generatedStars = [];
    for (let i = 0; i < starCount; i++) {
      const starType = Math.random();
      let starClass = "star absolute rounded-full ";

      if (starType < 0.7) {
        starClass += "w-0.5 h-0.5 bg-white";
      } else if (starType < 0.9) {
        starClass += "w-1 h-1 bg-blue-100";
      } else {
        starClass += "w-1.5 h-1.5 bg-purple-100";
      }

      generatedStars.push({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        starClass,
        filter: Math.random() > 0.8 ? "blur(0.5px)" : "none",
      });
    }
    setStars(generatedStars);
  }, [starCount]);

  useGSAP(
    () => {
      // Initialize stars with random positions and sizes
      gsap.set(".star", {
        scale: 0,
        opacity: 0,
      });

      // Animate stars appearing
      gsap.to(".star", {
        scale: "random(0.5, 1.5)",
        opacity: "random(0.3, 1)",
        duration: 0.5,
        stagger: {
          each: 0.02,
          from: "random",
        },
        ease: "back.out(1.7)",
      });

      // Continuous twinkling animation
      gsap.to(".star", {
        opacity: "random(0.2, 1)",
        duration: "random(1, 3)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: {
          each: 0.1,
          from: "random",
        },
      });

      // Subtle floating movement
      gsap.to(".star", {
        y: "random(-15, 15)",
        x: "random(-15, 15)",
        duration: "random(8, 15)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: {
          each: 0.2,
          from: "random",
        },
      });

      // Special effects for some stars
      gsap.to(".star:nth-child(3n)", {
        scale: "random(1, 2)",
        duration: "random(2, 4)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.5,
      });
    },
    { scope: containerRef }
  );

  // Generate stars with different sizes and colors
  const generateStars = () => {
    return stars.map((star, i) => (
      <div
        key={i}
        className={star.starClass}
        style={{
          left: star.left,
          top: star.top,
          filter: star.filter,
        }}
      />
    ));
  };

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}
    >
      {generateStars()}

      {/* Shooting stars */}
      <div className="absolute inset-0">
        {[...Array(3)].map((_, i) => (
          <div
            key={`shooting-${i}`}
            className="absolute w-1 h-1 bg-white rounded-full opacity-0"
            style={{
              left: `${10 + i * 30}%`,
              top: `${10 + i * 15}%`,
              animation: `shootingStar ${8 + i * 2}s linear infinite`,
              animationDelay: `${i * 2}s`,
            }}
          />
        ))}
      </div>

      <style jsx>{`
        @keyframes shootingStar {
          0% {
            opacity: 0;
            transform: translateX(-100px) translateY(-100px);
          }
          10% {
            opacity: 1;
          }
          90% {
            opacity: 1;
          }
          100% {
            opacity: 0;
            transform: translateX(100vw) translateY(100vh);
          }
        }
      `}</style>
    </div>
  );
}
