"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "@studio-freight/lenis";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const lenisRef = useRef<Lenis | null>(null);

  useEffect(() => {
    // Initialize smooth scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      direction: "vertical",
      gestureDirection: "vertical",
      smooth: true,
      mouseMultiplier: 1,
      smoothTouch: false,
      touchMultiplier: 2,
      infinite: false,
    });

    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    // Connect Lenis with GSAP ScrollTrigger
    lenis.on("scroll", ScrollTrigger.update);

    gsap.ticker.add((time) => {
      lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    return () => {
      lenis.destroy();
      gsap.ticker.remove(() => {});
    };
  }, []);

  return (
    <div className="relative">
      {/* Cursor */}
      <div
        id="cursor"
        className="fixed top-0 left-0 w-6 h-6 rounded-full bg-rose-500 pointer-events-none z-50 mix-blend-difference opacity-0 transition-opacity duration-300"
      />

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-40 bg-white/80 backdrop-blur-lg border-b border-rose-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-rose-600">Flowries</div>
            <div className="hidden md:flex items-center space-x-8">
              <a
                href="#home"
                className="text-gray-700 hover:text-rose-600 transition-colors"
              >
                Home
              </a>
              <a
                href="#about"
                className="text-gray-700 hover:text-rose-600 transition-colors"
              >
                About
              </a>
              <a
                href="#portfolio"
                className="text-gray-700 hover:text-rose-600 transition-colors"
              >
                Portfolio
              </a>
              <a
                href="#services"
                className="text-gray-700 hover:text-rose-600 transition-colors"
              >
                Services
              </a>
              <a
                href="#contact"
                className="text-gray-700 hover:text-rose-600 transition-colors"
              >
                Contact
              </a>
            </div>
            <button className="md:hidden">
              <span className="sr-only">Menu</span>
              <div className="space-y-1">
                <div className="w-6 h-0.5 bg-gray-700"></div>
                <div className="w-6 h-0.5 bg-gray-700"></div>
                <div className="w-6 h-0.5 bg-gray-700"></div>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative">{children}</main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-2xl font-bold text-rose-400 mb-4">
                Flowries
              </h3>
              <p className="text-gray-300">
                Creating beautiful floral arrangements that capture the essence
                of nature beauty.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#about"
                    className="text-gray-300 hover:text-rose-400 transition-colors"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="#portfolio"
                    className="text-gray-300 hover:text-rose-400 transition-colors"
                  >
                    Portfolio
                  </a>
                </li>
                <li>
                  <a
                    href="#services"
                    className="text-gray-300 hover:text-rose-400 transition-colors"
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    href="#contact"
                    className="text-gray-300 hover:text-rose-400 transition-colors"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-300">
                <p>📧 hello@flowries.com</p>
                <p>📱 +1 (555) 123-4567</p>
                <p>📍 123 Flower Street, Garden City</p>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Flowries. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;
