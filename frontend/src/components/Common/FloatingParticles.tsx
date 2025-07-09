"use client";

import { useMemo } from "react";
import { LucideIcon } from "lucide-react";

interface FloatingParticlesProps {
  count: number;
  icon: LucideIcon;
  className?: string;
  particleClassName?: string;
  minDelay?: number;
  maxDelay?: number;
}

interface ParticleData {
  id: number;
  left: string;
  top: string;
  animationDelay: string;
}

export default function FloatingParticles({
  count,
  icon: Icon,
  className = "",
  particleClassName = "",
  minDelay = 0,
  maxDelay = 2,
}: FloatingParticlesProps) {
  // Memoize particle positions to prevent re-renders
  const particles = useMemo<ParticleData[]>(() => {
    return Array.from({ length: count }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      animationDelay: `${minDelay + Math.random() * (maxDelay - minDelay)}s`,
    }));
  }, [count, minDelay, maxDelay]);

  return (
    <div className={`absolute inset-0 pointer-events-none ${className}`}>
      {particles.map((particle) => (
        <div
          key={particle.id}
          className={`${particleClassName} absolute`}
          style={{
            left: particle.left,
            top: particle.top,
            animationDelay: particle.animationDelay,
          }}
        >
          <Icon className="w-3 h-3 text-purple-400/20" />
        </div>
      ))}
    </div>
  );
}
