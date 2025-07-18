"use client";

import {
  useEffect,
  useState,
  useCallback,
  useMemo,
  lazy,
  Suspense,
} from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sparkles, Heart, Star, ArrowUp, MessageCircle } from "lucide-react";
import { useInView } from "react-intersection-observer";

const Hero = lazy(() => import("@/components/Hero"));
const About = lazy(() => import("@/components/About"));
const Skills = lazy(() => import("@/components/Skills"));
const Projects = lazy(() => import("@/components/Projects"));
const Contact = lazy(() => import("@/components/Contact"));
const Footer = lazy(() => import("@/components/Footer"));

import Navbar from "@/components/Navbar";

const ComponentSkeleton = ({ height = "h-96" }: { height?: string }) => (
  <div
    className={`${height} bg-gradient-to-r from-purple-50 to-pink-50 animate-pulse rounded-3xl mb-8 flex items-center justify-center`}
  >
    <div className="flex items-center space-x-2 text-purple-400">
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      >
        <Sparkles className="w-8 h-8" />
      </motion.div>
      <span className="text-lg font-medium">Đang tải...</span>
    </div>
  </div>
);

// Enhanced Loading Screen with better UX
const LoadingScreen = ({ progress }: { progress: number }) => {
  const loadingTexts = [
    "Đang tải nội dung 'chipi'...",
    "Chuẩn bị animations...",
    "Tối ưu trải nghiệm...",
    "Sắp hoàn thành!",
  ];

  const currentText =
    loadingTexts[Math.floor((progress / 100) * loadingTexts.length)] ||
    loadingTexts[0];

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed inset-0 bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 z-50 flex items-center justify-center"
    >
      <div className="text-center text-white max-w-md mx-auto px-6">
        {/* Logo Animation */}
        <motion.div
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <div className="relative inline-block">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
              className="w-20 h-20 border-4 border-white/30 border-t-white rounded-full mx-auto mb-4"
            />
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <Sparkles className="w-8 h-8 text-white" />
            </motion.div>
          </div>
        </motion.div>

        {/* Brand */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mb-8"
        >
          <div className="flex items-center justify-center space-x-3 mb-4">
            <h1 className="text-3xl font-bold">Hoàng Creative</h1>
            <motion.div
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              <Heart className="w-8 h-8 text-red-300" />
            </motion.div>
          </div>
          <p className="text-xl opacity-90 mb-2">Content Creator Portfolio</p>
          <p className="text-sm opacity-75">Phong cách "chipi" độc đáo ✨</p>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="mb-6"
        >
          <div className="bg-white/20 rounded-full h-2 overflow-hidden mb-3">
            <motion.div
              className="h-full bg-gradient-to-r from-white to-yellow-200 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            />
          </div>
          <div className="flex justify-between text-sm opacity-75">
            <span>{progress}%</span>
            <span>Hoàn thành</span>
          </div>
        </motion.div>

        {/* Loading Text */}
        <motion.p
          key={currentText}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="text-lg font-medium mb-4"
        >
          {currentText}
        </motion.p>

        {/* Loading Dots */}
        <div className="flex items-center justify-center space-x-2">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              animate={{ scale: [1, 1.5, 1], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
              className="w-2 h-2 bg-white rounded-full"
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

// Optimized Scroll Progress with throttling
const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  const handleScroll = useCallback(() => {
    const totalHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    const progress = Math.min((window.scrollY / totalHeight) * 100, 100);
    setScrollProgress(progress);
  }, []);

  useEffect(() => {
    let ticking = false;

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [handleScroll]);

  return (
    <motion.div
      className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 z-50 origin-left"
      style={{ scaleX: scrollProgress / 100 }}
      initial={{ scaleX: 0 }}
      animate={{ scaleX: scrollProgress / 100 }}
      transition={{ duration: 0.1 }}
    />
  );
};

// Enhanced Floating Action Buttons with better UX
const FloatingActionButtons = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeButton, setActiveButton] = useState<string | null>(null);

  const { ref: triggerRef, inView } = useInView({
    threshold: 0,
    rootMargin: "-300px 0px",
  });

  useEffect(() => {
    setIsVisible(inView);
  }, [inView]);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setActiveButton("top");
    setTimeout(() => setActiveButton(null), 1000);
  }, []);

  const scrollToContact = useCallback(() => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setActiveButton("contact");
      setTimeout(() => setActiveButton(null), 1000);
    }
  }, []);

  const buttons = useMemo(
    () => [
      {
        id: "contact",
        icon: MessageCircle,
        onClick: scrollToContact,
        className: "bg-gradient-to-r from-purple-500 to-pink-500 text-white",
        hoverClassName: "from-purple-600 to-pink-600",
        tooltip: "Liên hệ ngay",
      },
      {
        id: "top",
        icon: ArrowUp,
        onClick: scrollToTop,
        className:
          "bg-white/90 backdrop-blur-sm text-purple-600 border border-purple-100",
        hoverClassName: "bg-white text-purple-700",
        tooltip: "Lên đầu trang",
      },
    ],
    [scrollToContact, scrollToTop]
  );

  return (
    <>
      <div ref={triggerRef} className="absolute top-0" />
      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.5, x: 100 }}
            animate={{ opacity: 1, scale: 1, x: 0 }}
            exit={{ opacity: 0, scale: 0.5, x: 100 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-6 right-6 z-40 space-y-3"
          >
            {buttons.map((button, index) => (
              <div key={button.id} className="relative group">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={button.onClick}
                  className={`
                    w-14 h-14 rounded-full shadow-lg hover:shadow-xl 
                    transition-all duration-300 flex items-center justify-center
                    ${button.className} hover:${button.hoverClassName}
                    ${
                      activeButton === button.id ? "ring-2 ring-yellow-400" : ""
                    }
                  `}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <motion.div
                    animate={
                      activeButton === button.id ? { scale: [1, 1.3, 1] } : {}
                    }
                    transition={{ duration: 0.3 }}
                  >
                    <button.icon className="w-6 h-6" />
                  </motion.div>
                </motion.button>

                {/* Tooltip */}
                <div className="absolute right-16 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                  <div className="bg-gray-900 text-white text-sm px-3 py-1 rounded-lg whitespace-nowrap">
                    {button.tooltip}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

// Enhanced Cursor Follower with better performance
const CursorFollower = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    let animationId: number;

    const handleMouseMove = (e: MouseEvent) => {
      animationId = requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      });
    };

    const handleMouseEnter = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
        target.tagName === "BUTTON" ||
        target.tagName === "A" ||
        target.classList.contains("cursor-pointer")
      ) {
        setIsHovering(true);
      }
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });
    document.addEventListener("mouseenter", handleMouseEnter, true);
    document.addEventListener("mouseleave", handleMouseLeave, true);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseenter", handleMouseEnter, true);
      document.removeEventListener("mouseleave", handleMouseLeave, true);
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  return (
    <motion.div
      className={`
        fixed pointer-events-none z-50 rounded-full mix-blend-difference hidden lg:block
        ${
          isHovering
            ? "w-12 h-12 bg-purple-400"
            : "w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500"
        }
      `}
      style={{
        left: mousePosition.x - (isHovering ? 24 : 12),
        top: mousePosition.y - (isHovering ? 24 : 12),
      }}
      animate={{
        scale: isHovering ? [1, 1.1, 1] : [1, 1.05, 1],
        rotate: isHovering ? [0, 90, 180, 270, 360] : [0, 180, 360],
      }}
      transition={{
        duration: isHovering ? 0.8 : 2,
        repeat: Infinity,
        ease: isHovering ? "easeInOut" : "linear",
      }}
    />
  );
};

// Optimized Main Page Component
export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  // Simulate realistic loading progress
  useEffect(() => {
    const duration = 2500; // 2.5 seconds
    const interval = 50; // Update every 50ms
    const steps = duration / interval;
    let currentStep = 0;

    const timer = setInterval(() => {
      currentStep++;
      const progress = Math.min((currentStep / steps) * 100, 100);
      setLoadingProgress(progress);

      if (progress >= 100) {
        clearInterval(timer);
        setTimeout(() => setIsLoading(false), 300);
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  // Preload critical resources
  useEffect(() => {
    const preloadResources = () => {
      // Preload fonts
      const fonts = [
        "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap",
        "https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&display=swap",
      ];

      fonts.forEach((font) => {
        const link = document.createElement("link");
        link.rel = "preload";
        link.as = "style";
        link.href = font;
        document.head.appendChild(link);
      });
    };

    preloadResources();
  }, []);

  // Enhanced smooth scrolling with offset for fixed navbar
  useEffect(() => {
    const handleAnchorClick = (e: Event) => {
      const target = e.target as HTMLElement;
      const href = target.getAttribute("href");

      if (href?.startsWith("#")) {
        e.preventDefault();
        const id = href.slice(1);
        const element = document.getElementById(id);

        if (element) {
          const offset = 80; // Account for fixed navbar
          const elementPosition = element.offsetTop - offset;

          window.scrollTo({
            top: elementPosition,
            behavior: "smooth",
          });
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);
    return () => document.removeEventListener("click", handleAnchorClick);
  }, []);

  // Memoized layout to prevent unnecessary re-renders
  const pageLayout = useMemo(
    () => (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-white"
      >
        <ScrollProgress />
        <CursorFollower />
        <Navbar />

        <Suspense fallback={<ComponentSkeleton height="h-screen" />}>
          <Hero />
        </Suspense>

        <Suspense fallback={<ComponentSkeleton height="h-96" />}>
          <About />
        </Suspense>

        <Suspense fallback={<ComponentSkeleton height="h-96" />}>
          <Skills />
        </Suspense>

        <Suspense fallback={<ComponentSkeleton height="h-96" />}>
          <Projects />
        </Suspense>

        <Suspense fallback={<ComponentSkeleton height="h-96" />}>
          <Contact />
        </Suspense>

        <Suspense fallback={<ComponentSkeleton height="h-64" />}>
          <Footer />
        </Suspense>

        <FloatingActionButtons />
      </motion.div>
    ),
    []
  );

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading ? (
          <LoadingScreen key="loading" progress={loadingProgress} />
        ) : (
          <motion.div key="content">{pageLayout}</motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
