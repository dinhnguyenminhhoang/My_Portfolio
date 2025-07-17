"use client";

import { useState, useEffect } from "react";

export function useScrollProgress() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      if (typeof window !== "undefined") {
        const scrollHeight =
          document.documentElement.scrollHeight - window.innerHeight;
        const scrollTop = window.scrollY;
        const progress =
          scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
        setScrollProgress(Math.min(progress, 100));
      }
    };

    // Initial calculation
    updateScrollProgress();

    // Add scroll event listener
    window.addEventListener("scroll", updateScrollProgress, { passive: true });

    // Cleanup
    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
    };
  }, []);

  return scrollProgress;
}
