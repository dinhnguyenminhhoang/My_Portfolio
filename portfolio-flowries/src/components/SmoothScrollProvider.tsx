"use client";

import { createContext, useContext, useEffect, useRef, ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Import Lenis
let Lenis: any;
if (typeof window !== "undefined") {
  import("lenis").then((module) => {
    Lenis = module.default;
  });
}

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface SmoothScrollContextType {
  lenis: any | null;
  scrollTo: (target: string | number, options?: any) => void;
}

const SmoothScrollContext = createContext<SmoothScrollContextType>({
  lenis: null,
  scrollTo: () => {},
});

export const useSmoothScroll = () => useContext(SmoothScrollContext);

interface SmoothScrollProviderProps {
  children: ReactNode;
}

export const SmoothScrollProvider: React.FC<SmoothScrollProviderProps> = ({
  children,
}) => {
  const lenisRef = useRef<any>(null);

  useEffect(() => {
    let lenis: any;

    const initSmoothScroll = async () => {
      if (!Lenis && typeof window !== "undefined") {
        const module = await import("lenis");
        Lenis = module.default;
      }

      if (Lenis) {
        lenis = new Lenis({
          duration: 0.8,
          easing: (t: number) => 1 - Math.pow(1 - t, 3),
          direction: "vertical" as const,
          gestureDirection: "vertical" as const,
          smooth: true,
          mouseMultiplier: 1.5,
          smoothTouch: false,
          touchMultiplier: 1.8,
          infinite: false,
          autoResize: true,
          normalizeWheel: true,
          syncTouch: false,
          touchInertiaMultiplier: 35,
          wheelMultiplier: 1.2,
        });

        lenisRef.current = lenis;

        // RAF loop
        function raf(time: number) {
          lenis.raf(time);
          requestAnimationFrame(raf);
        }
        requestAnimationFrame(raf);

        // Integrate with GSAP ScrollTrigger
        lenis.on("scroll", ScrollTrigger.update);

        gsap.ticker.add((time) => {
          lenis.raf(time * 1000);
        });

        gsap.ticker.lagSmoothing(0);

        // Update ScrollTrigger on window resize
        const handleResize = () => {
          ScrollTrigger.refresh();
        };

        window.addEventListener("resize", handleResize);

        return () => {
          window.removeEventListener("resize", handleResize);
          if (lenis) {
            lenis.destroy();
          }
          gsap.ticker.remove(() => {});
        };
      }
    };

    initSmoothScroll();

    return () => {
      if (lenisRef.current) {
        lenisRef.current.destroy();
      }
    };
  }, []);

  const scrollTo = (target: string | number, options: any = {}) => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(target, {
        duration: 0.8,
        easing: (t: number) => 1 - Math.pow(1 - t, 3),
        immediate: false,
        ...options,
      });
    }
  };

  return (
    <SmoothScrollContext.Provider
      value={{
        lenis: lenisRef.current,
        scrollTo,
      }}
    >
      {children}
    </SmoothScrollContext.Provider>
  );
};
