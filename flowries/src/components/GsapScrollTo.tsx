"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

export default function GsapScrollTo() {
  useEffect(() => {
    const handleAnchorClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.tagName === "A") {
        const href = target.getAttribute("href");
        if (href && href.startsWith("#")) {
          const element = document.querySelector(href);
          if (element) {
            e.preventDefault();
            gsap.to(window, {
              duration: 1,
              scrollTo: {
                y: element,
                offsetY: 50,
              },
              ease: "power2.out",
            });
          }
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);
    return () => document.removeEventListener("click", handleAnchorClick);
  }, []);

  return null;
}
