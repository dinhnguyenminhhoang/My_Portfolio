"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { ChevronDown, Play, Sparkles, Zap, Heart } from "lucide-react";
import { gsap } from "gsap";
import { cn, smoothScrollTo } from "@/lib/utils";

const socialLinks = [
  { name: "YouTube", icon: Play, url: "#", color: "text-red-400" },
  { name: "TikTok", icon: Zap, url: "#", color: "text-purple-400" },
  { name: "Instagram", icon: Heart, url: "#", color: "text-pink-400" },
];

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const floatingRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const title = titleRef.current;
    const subtitle = subtitleRef.current;
    const cta = ctaRef.current;
    const floating = floatingRef.current;

    if (!container || !title || !subtitle || !cta || !floating) return;

    // Create GSAP timeline
    const tl = gsap.timeline({ delay: 0.5 });

    // Title animation with split text effect
    const titleText = title.textContent || "";
    title.innerHTML = titleText
      .split("")
      .map(
        (char, index) =>
          `<span class="inline-block" style="animation-delay: ${
            index * 0.1
          }s">${char === " " ? "&nbsp;" : char}</span>`
      )
      .join("");

    tl.fromTo(
      title.children,
      {
        y: 100,
        opacity: 0,
        rotateX: 90,
      },
      {
        y: 0,
        opacity: 1,
        rotateX: 0,
        duration: 0.8,
        stagger: 0.05,
        ease: "back.out(1.7)",
      }
    )
      .fromTo(
        subtitle,
        {
          y: 50,
          opacity: 0,
          scale: 0.8,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "power3.out",
        },
        "-=0.5"
      )
      .fromTo(
        cta,
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.3"
      );

    // Floating animation for decorative elements
    gsap.to(floating.children, {
      y: -20,
      duration: 2,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
      stagger: 0.2,
    });

    // Mouse move parallax effect
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      const xPos = (clientX / innerWidth - 0.5) * 20;
      const yPos = (clientY / innerHeight - 0.5) * 20;

      gsap.to(floating, {
        x: xPos,
        y: yPos,
        duration: 0.3,
        ease: "power1.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      tl.kill();
    };
  }, []);

  const scrollToNext = () => {
    smoothScrollTo("about");
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      <div
        ref={containerRef}
        className="container mx-auto px-4 text-center relative z-10"
      >
        {/* Floating decorative elements */}
        <div ref={floatingRef} className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-400 rounded-full opacity-60" />
          <div className="absolute top-1/3 right-1/3 w-3 h-3 bg-pink-400 rounded-full opacity-40" />
          <div className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-blue-400 rounded-full opacity-50" />
          <div className="absolute bottom-1/4 right-1/4 w-4 h-4 bg-purple-400 rounded-full opacity-30" />
        </div>

        {/* Main content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="max-w-4xl mx-auto"
        >
          {/* Greeting */}
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6, ease: "backOut" }}
            className="mb-6"
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full border border-purple-500/30 text-purple-300 text-sm font-medium">
              <Sparkles className="w-4 h-4" />
              Chào mừng đến với thế giới sáng tạo
            </span>
          </motion.div>

          {/* Main title */}
          <h1
            ref={titleRef}
            className="text-4xl md:text-6xl lg:text-7xl font-bold font-poppins mb-6 leading-tight"
          >
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Content Creator
            </span>
          </h1>

          {/* Subtitle */}
          <p
            ref={subtitleRef}
            className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed"
          >
            Tạo nên những câu chuyện độc đáo, truyền cảm hứng và kết nối cộng
            đồng qua nội dung sáng tạo đầy màu sắc
          </p>

          {/* CTA Buttons */}
          <div
            ref={ctaRef}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(139, 92, 246, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              onClick={() => smoothScrollTo("projects")}
              className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold text-lg shadow-lg hover:shadow-purple-500/30 transition-all duration-300"
            >
              Xem dự án
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => smoothScrollTo("contact")}
              className="px-8 py-4 border-2 border-purple-400 rounded-full text-purple-400 font-semibold text-lg hover:bg-purple-400/10 transition-all duration-300"
            >
              Liên hệ ngay
            </motion.button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-6 mb-12">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.2, y: -5 }}
                whileTap={{ scale: 0.9 }}
                className={cn(
                  "p-3 rounded-full bg-gray-800/50 border border-gray-700/50 backdrop-blur-sm transition-all duration-300",
                  social.color,
                  "hover:bg-gray-700/50 hover:border-current/50"
                )}
              >
                <social.icon className="w-6 h-6" />
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2 text-gray-400 hover:text-white transition-colors duration-300"
      >
        <span className="text-sm font-medium">Cuộn xuống</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.button>

      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-pink-500/20 rounded-full blur-3xl" />
      </div>
    </section>
  );
}
