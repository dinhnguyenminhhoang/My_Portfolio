"use client";

import { gsap } from "gsap";
import { Heart, Leaf, Sparkles } from "lucide-react";
import { useEffect, useRef } from "react";

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const subtitleRef = useRef<HTMLParagraphElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const floatingElementsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Initial animation timeline
      const tl = gsap.timeline();

      // Title animation
      tl.from(titleRef.current, {
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      })
        // Subtitle animation
        .from(
          subtitleRef.current,
          {
            y: 50,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
          },
          "-=0.8"
        )
        // CTA buttons animation
        .from(
          ctaRef?.current?.children,
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out",
          },
          "-=0.6"
        )
        // Image container animation
        .from(
          imageRef.current,
          {
            scale: 0.8,
            opacity: 0,
            duration: 1.5,
            ease: "power3.out",
          },
          "-=1.2"
        );

      // Floating elements animation
      floatingElementsRef.current.forEach((el, index) => {
        if (el) {
          gsap.to(el, {
            y: "-20px",
            rotation: 10,
            duration: 2 + index * 0.5,
            ease: "power2.inOut",
            repeat: -1,
            yoyo: true,
            delay: index * 0.3,
          });
        }
      });

      // Parallax effect on scroll
      gsap.to(heroRef.current, {
        yPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: heroRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  const addToFloatingRefs = (el: HTMLDivElement | null, index: number) => {
    if (el) {
      floatingElementsRef.current[index] = el;
    }
  };

  return (
    <section
      ref={heroRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-rose-50 via-pink-50 to-orange-50"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-rose-300 rounded-full blur-3xl"></div>
        <div className="absolute top-40 right-20 w-48 h-48 bg-pink-300 rounded-full blur-3xl"></div>
        <div className="absolute bottom-32 left-1/4 w-40 h-40 bg-orange-300 rounded-full blur-3xl"></div>
      </div>

      {/* Floating Elements */}
      <div
        ref={(el) => addToFloatingRefs(el, 0)}
        className="absolute top-32 left-20 text-rose-400 opacity-60"
      >
        <Leaf size={32} />
      </div>
      <div
        ref={(el) => addToFloatingRefs(el, 1)}
        className="absolute top-64 right-32 text-pink-400 opacity-60"
      >
        <Heart size={28} />
      </div>
      <div
        ref={(el) => addToFloatingRefs(el, 2)}
        className="absolute bottom-40 left-32 text-orange-400 opacity-60"
      >
        <Sparkles size={30} />
      </div>
      <div
        ref={(el) => addToFloatingRefs(el, 3)}
        className="absolute top-80 left-1/2 text-rose-300 opacity-60"
      >
        <Leaf size={24} />
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 items-center gap-12 pt-20">
        {/* Content */}
        <div className="text-center lg:text-left">
          <h1
            ref={titleRef}
            className="text-5xl lg:text-7xl font-bold text-gray-900 mb-6 leading-tight"
          >
            Artistry in{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-500">
              Every Bloom
            </span>
          </h1>

          <p
            ref={subtitleRef}
            className="text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed max-w-2xl"
          >
            Where nature meets creativity. I craft stunning floral arrangements
            that tell your story through the timeless beauty of flowers.
          </p>

          <div
            ref={ctaRef}
            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
          >
            <button className="px-8 py-4 bg-gradient-to-r from-rose-500 to-pink-500 text-white font-semibold rounded-full hover:from-rose-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
              View My Work
            </button>
            <button className="px-8 py-4 border-2 border-rose-500 text-rose-500 font-semibold rounded-full hover:bg-rose-500 hover:text-white transition-all duration-300 transform hover:scale-105">
              Get In Touch
            </button>
          </div>
        </div>

        {/* Image/Visual */}
        <div ref={imageRef} className="relative">
          <div className="relative w-full h-96 lg:h-[500px] rounded-3xl overflow-hidden shadow-2xl">
            {/* Placeholder for main hero image */}
            <div className="w-full h-full bg-gradient-to-br from-rose-200 via-pink-200 to-orange-200 flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-lg">
                  <Heart size={48} className="text-rose-500" />
                </div>
                <p className="text-gray-600 font-medium">
                  Beautiful Floral Hero Image
                </p>
              </div>
            </div>

            {/* Overlay decoration */}
            <div className="absolute -top-6 -right-6 w-24 h-24 bg-rose-400 rounded-full opacity-80"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-pink-400 rounded-full opacity-60"></div>
          </div>

          {/* Stats Cards */}
          <div className="absolute -bottom-8 left-4 bg-white rounded-2xl shadow-xl p-4 border border-rose-100">
            <div className="text-center">
              <div className="text-2xl font-bold text-rose-600">500+</div>
              <div className="text-sm text-gray-600">Happy Clients</div>
            </div>
          </div>

          <div className="absolute -top-8 -left-8 bg-white rounded-2xl shadow-xl p-4 border border-pink-100">
            <div className="text-center">
              <div className="text-2xl font-bold text-pink-600">5 Years</div>
              <div className="text-sm text-gray-600">Experience</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <div className="w-6 h-10 border-2 border-rose-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-rose-400 rounded-full mt-2 animate-bounce"></div>
        </div>
        <p className="text-sm text-gray-500 mt-2 text-center">
          Scroll to explore
        </p>
      </div>
    </section>
  );
};

export default Hero;
