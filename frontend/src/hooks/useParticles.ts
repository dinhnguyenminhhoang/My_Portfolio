import { useState, useEffect } from "react";

interface Particle {
  left: string;
  top: string;
  delay: string;
}

export function useParticles(count: number) {
  const [particles, setParticles] = useState<Particle[]>([]);

  useEffect(() => {
    const generatedParticles = [...Array(count)].map(() => ({
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      delay: `${Math.random() * 2}s`,
    }));

    setParticles(generatedParticles);
  }, [count]);

  return particles;
}
