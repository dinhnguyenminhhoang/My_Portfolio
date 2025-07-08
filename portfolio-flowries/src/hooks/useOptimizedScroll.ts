"use client";

import { useEffect, useRef, useCallback } from "react";
import { gsap } from "gsap";

export const useOptimizedScroll = () => {
  const scrollTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const isScrollingRef = useRef(false);
  const lastScrollTop = useRef(0);

  // Immediate scroll response for wheel events
  const handleWheelImmediate = useCallback((e: WheelEvent) => {
    // Clear any existing timeout
    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    // Prevent default smooth scroll behavior
    e.preventDefault();

    const delta = e.deltaY;
    const currentScrollTop =
      window.pageYOffset || document.documentElement.scrollTop;

    // Calculate immediate scroll distance
    let scrollDistance = delta * 1.2; // Adjust multiplier for speed

    // Apply bounds checking
    const maxScroll =
      document.documentElement.scrollHeight - window.innerHeight;
    const newScrollTop = Math.max(
      0,
      Math.min(maxScroll, currentScrollTop + scrollDistance)
    );

    // Use GSAP for smooth but responsive scrolling
    gsap.to(window, {
      scrollTo: { y: newScrollTop, autoKill: false },
      duration: 0.3, // Much faster than Lenis
      ease: "power2.out",
      overwrite: true,
    });

    // Mark as scrolling
    isScrollingRef.current = true;
    lastScrollTop.current = newScrollTop;

    // Clear scrolling state after animation
    scrollTimeoutRef.current = setTimeout(() => {
      isScrollingRef.current = false;
    }, 300);
  }, []);

  // Handle touch scrolling for mobile
  const handleTouchScroll = useCallback((e: TouchEvent) => {
    // Allow native touch scrolling - it's already smooth on mobile
    return;
  }, []);

  // Handle keyboard navigation
  const handleKeyScroll = useCallback((e: KeyboardEvent) => {
    if (
      [
        "ArrowUp",
        "ArrowDown",
        "PageUp",
        "PageDown",
        "Home",
        "End",
        " ",
      ].includes(e.key)
    ) {
      e.preventDefault();

      const currentScrollTop =
        window.pageYOffset || document.documentElement.scrollTop;
      const viewportHeight = window.innerHeight;
      const maxScroll = document.documentElement.scrollHeight - viewportHeight;

      let newScrollTop = currentScrollTop;

      switch (e.key) {
        case "ArrowUp":
          newScrollTop = Math.max(0, currentScrollTop - 60);
          break;
        case "ArrowDown":
          newScrollTop = Math.min(maxScroll, currentScrollTop + 60);
          break;
        case "PageUp":
          newScrollTop = Math.max(0, currentScrollTop - viewportHeight * 0.8);
          break;
        case "PageDown":
        case " ":
          newScrollTop = Math.min(
            maxScroll,
            currentScrollTop + viewportHeight * 0.8
          );
          break;
        case "Home":
          newScrollTop = 0;
          break;
        case "End":
          newScrollTop = maxScroll;
          break;
      }

      gsap.to(window, {
        scrollTo: { y: newScrollTop, autoKill: false },
        duration: 0.4,
        ease: "power2.out",
        overwrite: true,
      });
    }
  }, []);

  // Smooth scroll to specific element
  const scrollToElement = useCallback(
    (target: string | HTMLElement, options: any = {}) => {
      const element =
        typeof target === "string" ? document.querySelector(target) : target;

      if (element) {
        const rect = element.getBoundingClientRect();
        const currentScrollTop =
          window.pageYOffset || document.documentElement.scrollTop;
        const targetScrollTop =
          currentScrollTop + rect.top - (options.offset || 80);

        gsap.to(window, {
          scrollTo: { y: targetScrollTop, autoKill: false },
          duration: options.duration || 0.6,
          ease: options.ease || "power2.out",
          overwrite: true,
        });
      }
    },
    []
  );

  useEffect(() => {
    // Disable default smooth scroll
    document.documentElement.style.scrollBehavior = "auto";

    // Add optimized event listeners
    const wheelOptions = { passive: false };
    const touchOptions = { passive: true };

    window.addEventListener("wheel", handleWheelImmediate, wheelOptions);
    window.addEventListener("touchstart", handleTouchScroll, touchOptions);
    window.addEventListener("touchmove", handleTouchScroll, touchOptions);
    window.addEventListener("keydown", handleKeyScroll);

    // Optimize scroll performance
    let ticking = false;

    const optimizeScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          // Update scroll-related elements here if needed
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", optimizeScroll, { passive: true });

    return () => {
      // Cleanup
      window.removeEventListener("wheel", handleWheelImmediate);
      window.removeEventListener("touchstart", handleTouchScroll);
      window.removeEventListener("touchmove", handleTouchScroll);
      window.removeEventListener("keydown", handleKeyScroll);
      window.removeEventListener("scroll", optimizeScroll);

      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }

      // Restore default scroll behavior
      document.documentElement.style.scrollBehavior = "smooth";
    };
  }, [handleWheelImmediate, handleTouchScroll, handleKeyScroll]);

  return {
    scrollToElement,
    isScrolling: isScrollingRef.current,
  };
};
