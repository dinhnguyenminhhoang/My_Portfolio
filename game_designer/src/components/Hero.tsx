"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Download,
  Play,
  Sparkles,
  Gamepad2,
  Code,
  Palette,
} from "lucide-react";
import { gsap } from "gsap";

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const avatarRef = useRef<HTMLDivElement>(null);
  const floatingElementsRef = useRef<HTMLDivElement[]>([]);

  // GSAP Timeline Animation
  useEffect(() => {
    const tl = gsap.timeline({ delay: 0.5 });

    // Hero entrance animation
    tl.fromTo(
      titleRef.current,
      {
        opacity: 0,
        y: 100,
        scale: 0.8,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 1.2,
        ease: "power3.out",
      }
    )
      .fromTo(
        subtitleRef.current,
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
        },
        "-=0.6"
      )
      .fromTo(
        ctaRef.current,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.4"
      )
      .fromTo(
        avatarRef.current,
        {
          opacity: 0,
          scale: 0.5,
          rotation: -10,
        },
        {
          opacity: 1,
          scale: 1,
          rotation: 0,
          duration: 1,
          ease: "elastic.out(1, 0.5)",
        },
        "-=1"
      );

    // Floating elements animation
    floatingElementsRef.current.forEach((el, index) => {
      if (el) {
        gsap.fromTo(
          el,
          {
            opacity: 0,
            y: 50,
            scale: 0,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            delay: 1.5 + index * 0.2,
            ease: "back.out(1.7)",
          }
        );

        // Continuous floating animation
        gsap.to(el, {
          y: "-=20",
          duration: 2 + index * 0.5,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
          delay: index * 0.3,
        });
      }
    });

    // Text gradient animation
    gsap.to(".text-gradient", {
      backgroundPosition: "200% center",
      duration: 3,
      repeat: -1,
      ease: "none",
    });
  }, []);

  const scrollToProjects = () => {
    const element = document.querySelector("#projects");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  const scrollToContact = () => {
    const element = document.querySelector("#contact");
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Animated Icons */}
        <div
          ref={(el) => el && ((floatingElementsRef.current[0] = el) as any)}
          className="absolute top-20 left-10 lg:top-32 lg:left-20"
        >
          <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center opacity-80 animate-float">
            <Gamepad2 className="w-8 h-8 text-white" />
          </div>
        </div>

        <div
          ref={(el) => el && ((floatingElementsRef.current[1] = el) as any)}
          className="absolute top-40 right-10 lg:top-48 lg:right-32"
        >
          <div className="w-12 h-12 bg-gradient-secondary rounded-xl flex items-center justify-center opacity-70 animate-float delay-1000">
            <Code className="w-6 h-6 text-white" />
          </div>
        </div>

        <div
          ref={(el) => el && ((floatingElementsRef.current[2] = el) as any)}
          className="absolute bottom-32 left-1/4 lg:bottom-40 lg:left-1/3"
        >
          <div className="w-14 h-14 bg-purple-500/20 backdrop-blur-sm rounded-2xl flex items-center justify-center border border-purple-400/30 animate-float delay-2000">
            <Palette className="w-7 h-7 text-purple-300" />
          </div>
        </div>

        {/* Sparkle Effects */}
        {Array.from({ length: 6 }).map((_, i) => (
          <div
            key={i}
            ref={(el) =>
              el && ((floatingElementsRef.current[i + 3] = el) as any)
            }
            className={`absolute ${
              i % 2 === 0 ? "animate-pulse" : "animate-ping"
            } delay-${i * 500}`}
            style={{
              top: `${20 + Math.random() * 60}%`,
              left: `${10 + Math.random() * 80}%`,
            }}
          >
            <Sparkles className="w-4 h-4 text-purple-400 opacity-60" />
          </div>
        ))}
      </div>

      <div className="container-custom relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="inline-flex items-center space-x-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-300 text-sm font-medium mb-6 backdrop-blur-sm"
            >
              <Sparkles className="w-4 h-4" />
              <span>Creative Game Designer</span>
            </motion.div>

            {/* Main Title */}
            <h1
              ref={titleRef}
              className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight"
            >
              Tôi là <span className="text-gradient text-display">Hoàng</span>
              <br />
              <span className="text-2xl md:text-3xl lg:text-4xl text-gray-300 font-normal">
                Game Designer với{" "}
                <span className="text-gradient font-bold">chất riêng</span>
              </span>
            </h1>

            {/* Subtitle */}
            <p
              ref={subtitleRef}
              className="text-lg md:text-xl text-gray-300 mb-8 max-w-2xl leading-relaxed"
            >
              Tạo nên những trải nghiệm game độc đáo và đầy cảm hứng. Kết hợp
              sáng tạo với công nghệ để mang đến những sản phẩm game
              <span className="text-gradient font-semibold">
                {" "}
                không thể quên
              </span>
              .
            </p>

            {/* CTA Buttons */}
            <div
              ref={ctaRef}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
            >
              <button onClick={scrollToProjects} className="btn-primary group">
                <span>Xem Portfolio</span>
                <ArrowRight className="w-5 h-5 ml-2 transition-transform group-hover:translate-x-1" />
              </button>

              <button onClick={scrollToContact} className="btn-secondary group">
                <Play className="w-5 h-5 mr-2 transition-transform group-hover:scale-110" />
                <span>Liên hệ ngay</span>
              </button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/10">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2, duration: 0.6 }}
                className="text-center lg:text-left"
              >
                <div className="text-2xl lg:text-3xl font-bold text-gradient">
                  50+
                </div>
                <div className="text-sm text-gray-400">Dự án hoàn thành</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.2, duration: 0.6 }}
                className="text-center lg:text-left"
              >
                <div className="text-2xl lg:text-3xl font-bold text-gradient">
                  3+
                </div>
                <div className="text-sm text-gray-400">Năm kinh nghiệm</div>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 2.4, duration: 0.6 }}
                className="text-center lg:text-left"
              >
                <div className="text-2xl lg:text-3xl font-bold text-gradient">
                  100%
                </div>
                <div className="text-sm text-gray-400">Sự hài lòng</div>
              </motion.div>
            </div>
          </div>

          {/* Right Content - Avatar/Visual */}
          <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
            <div ref={avatarRef} className="relative">
              {/* Main Avatar Circle */}
              <div className="relative w-80 h-80 lg:w-96 lg:h-96">
                {/* Rotating Border */}
                <div
                  className="absolute inset-0 rounded-full bg-gradient-primary p-1 animate-spin"
                  style={{ animation: "spin 8s linear infinite" }}
                >
                  <div className="w-full h-full rounded-full bg-slate-950" />
                </div>

                {/* Avatar Content */}
                <div className="absolute inset-4 rounded-full bg-gradient-to-br from-purple-900/50 to-cyan-900/50 backdrop-blur-sm border border-white/10 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-4 bg-gradient-primary rounded-full flex items-center justify-center">
                      <Gamepad2 className="w-16 h-16 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">
                      Game Designer
                    </h3>
                    <p className="text-purple-300 text-sm">
                      Creative & Innovative
                    </p>
                  </div>
                </div>

                {/* Floating Orbs */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-secondary rounded-full animate-bounce" />
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-purple-400 rounded-full animate-pulse" />
                <div className="absolute top-1/2 -right-8 w-4 h-4 bg-cyan-400 rounded-full animate-ping" />
              </div>

              {/* Download CV Button */}
              <motion.button
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 2.5, duration: 0.5 }}
                className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 flex items-center space-x-2 px-6 py-3 glass-effect border border-white/20 rounded-full text-sm font-medium hover:scale-105 transition-all duration-300 group"
              >
                <Download className="w-4 h-4 group-hover:animate-bounce" />
                <span>Tải CV</span>
              </motion.button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 3, duration: 1 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-center"
      >
        <div className="w-6 h-10 border-2 border-purple-400/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-purple-400 rounded-full mt-2 animate-bounce" />
        </div>
        <p className="text-xs text-gray-400 mt-2">Cuộn xuống</p>
      </motion.div>
    </section>
  );
};

export default Hero;
