"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronDown, Sparkles, Heart, Flower2 } from "lucide-react";
import { useOptimizedScroll } from "@/hooks/useOptimizedScroll";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);
  const floatingElementsRef = useRef<HTMLDivElement>(null);

  const [typedText, setTypedText] = useState("");
  const { scrollToElement } = useOptimizedScroll();

  const fullText = "Nghệ nhân cắm hoa chuyên nghiệp";
  const phrases = [
    "Tạo nên vẻ đẹp từ thiên nhiên",
    "Nghệ thuật cắm hoa tinh tế",
    "Mang hạnh phúc qua từng bông hoa",
  ];

  useEffect(() => {
    // Typing animation
    let index = 0;
    let phraseIndex = 0;
    let isDeleting = false;
    let currentPhrase = phrases[phraseIndex];

    const typeWriter = () => {
      if (isDeleting) {
        setTypedText(currentPhrase.substring(0, index - 1));
        index--;
        if (index === 0) {
          isDeleting = false;
          phraseIndex = (phraseIndex + 1) % phrases.length;
          currentPhrase = phrases[phraseIndex];
          setTimeout(typeWriter, 500);
          return;
        }
      } else {
        setTypedText(currentPhrase.substring(0, index + 1));
        index++;
        if (index === currentPhrase.length) {
          isDeleting = true;
          setTimeout(typeWriter, 2000);
          return;
        }
      }
      setTimeout(typeWriter, isDeleting ? 50 : 100);
    };

    const timer = setTimeout(typeWriter, 1000);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Background animation
      gsap.fromTo(
        backgroundRef.current,
        { scale: 1.1, opacity: 0 },
        { scale: 1, opacity: 1, duration: 2, ease: "power2.out" }
      );

      // Title animation
      gsap.fromTo(
        titleRef.current,
        { y: 100, opacity: 0, rotationX: 45 },
        {
          y: 0,
          opacity: 1,
          rotationX: 0,
          duration: 1.2,
          ease: "power3.out",
          delay: 0.5,
        }
      );

      // Subtitle animation
      gsap.fromTo(
        subtitleRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power2.out",
          delay: 0.8,
        }
      );

      // CTA animation
      gsap.fromTo(
        ctaRef.current,
        { y: 30, opacity: 0, scale: 0.8 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
          delay: 1.2,
        }
      );

      // Floating particles
      gsap.to(".particle", {
        y: "random(-100, 100)",
        x: "random(-50, 50)",
        rotation: "random(-180, 180)",
        duration: "random(8, 12)",
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: {
          amount: 2,
          from: "random",
        },
      });

      // Floating elements animation
      gsap.to(".floating-element", {
        y: "random(-20, 20)",
        x: "random(-10, 10)",
        rotation: "random(-15, 15)",
        duration: "random(4, 6)",
        ease: "sine.inOut",
        repeat: -1,
        yoyo: true,
        stagger: 0.2,
      });

      // Parallax effect
      gsap.to(backgroundRef.current, {
        yPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: true,
        },
      });

      // Text reveal on scroll
      gsap.fromTo(
        ".reveal-text",
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.1,
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const handleScrollToAbout = () => {
    scrollToElement("#about", { duration: 0.8, offset: 80 });
  };

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div
        ref={backgroundRef}
        className="absolute inset-0 bg-gradient-to-br from-rose-50 via-pink-50 to-purple-50"
      >
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%23f43f5e%22 fill-opacity=%220.03%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%224%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-30"></div>
      </div>

      {/* Floating Particles */}
      <div
        ref={particlesRef}
        className="absolute inset-0 overflow-hidden pointer-events-none"
      >
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle absolute w-2 h-2 bg-rose-300 rounded-full opacity-60"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 8}s`,
            }}
          />
        ))}
      </div>

      {/* Floating Elements */}
      <div
        ref={floatingElementsRef}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="floating-element absolute top-20 left-10">
          <Flower2 className="w-8 h-8 text-rose-400 opacity-30" />
        </div>
        <div className="floating-element absolute top-32 right-16">
          <Heart className="w-6 h-6 text-pink-400 opacity-40" />
        </div>
        <div className="floating-element absolute bottom-32 left-20">
          <Sparkles className="w-10 h-10 text-purple-400 opacity-25" />
        </div>
        <div className="floating-element absolute top-1/2 right-10">
          <Flower2 className="w-12 h-12 text-rose-300 opacity-20" />
        </div>
        <div className="floating-element absolute bottom-20 right-32">
          <Heart className="w-8 h-8 text-pink-300 opacity-35" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6">
        {/* Logo/Brand */}
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full shadow-lg mb-4 hover-float">
            <Flower2 className="w-10 h-10 text-white" />
          </div>
        </div>

        {/* Main Title */}
        <h1
          ref={titleRef}
          className="text-6xl md:text-8xl font-playfair font-bold text-transparent bg-clip-text bg-gradient-to-r from-rose-600 via-pink-600 to-purple-600 mb-6 leading-tight"
        >
          Flowries
        </h1>

        {/* Animated Subtitle */}
        <p
          ref={subtitleRef}
          className="text-2xl md:text-3xl text-gray-700 mb-4 font-light"
        >
          {fullText}
        </p>

        {/* Typing Animation */}
        <div className="h-16 mb-8">
          <p className="text-xl md:text-2xl text-rose-600 font-medium">
            {typedText}
            <span className="animate-pulse">|</span>
          </p>
        </div>

        {/* Call-to-Action */}
        <div ref={ctaRef} className="space-y-6">
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button
              onClick={handleScrollToAbout}
              className="group px-8 py-4 bg-gradient-to-r from-rose-500 to-pink-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
            >
              <span className="flex items-center gap-2">
                Khám phá Portfolio
                <Sparkles className="w-5 h-5 group-hover:rotate-12 transition-transform" />
              </span>
            </button>

            <button
              onClick={() => scrollToElement("#contact", { duration: 0.8 })}
              className="px-8 py-4 border-2 border-rose-500 text-rose-600 font-semibold rounded-full hover:bg-rose-500 hover:text-white transition-all duration-300 transform hover:scale-105"
            >
              Liên hệ ngay
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-lg mx-auto mt-12">
            <div className="text-center reveal-text">
              <div className="text-3xl font-bold text-rose-600">500+</div>
              <div className="text-sm text-gray-600">Tác phẩm</div>
            </div>
            <div className="text-center reveal-text">
              <div className="text-3xl font-bold text-pink-600">50+</div>
              <div className="text-sm text-gray-600">Sự kiện</div>
            </div>
            <div className="text-center reveal-text">
              <div className="text-3xl font-bold text-purple-600">5+</div>
              <div className="text-sm text-gray-600">Năm kinh nghiệm</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <button
          onClick={handleScrollToAbout}
          className="flex flex-col items-center text-gray-600 hover:text-rose-600 transition-colors"
        >
          <span className="text-sm mb-2">Cuộn xuống</span>
          <ChevronDown className="w-6 h-6" />
        </button>
      </div>

      {/* Decorative Border */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-rose-400 via-pink-400 to-purple-400"></div>
    </section>
  );
};

export default Hero;
