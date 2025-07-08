import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

// Register plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

// Animation configurations
export const animationConfig = {
  duration: {
    fast: 0.3,
    normal: 0.6,
    slow: 1.2,
    verySlow: 2,
  },
  ease: {
    power1: "power1.out",
    power2: "power2.out",
    power3: "power3.out",
    back: "back.out(1.7)",
    elastic: "elastic.out(1, 0.3)",
    bounce: "bounce.out",
  },
  stagger: {
    fast: 0.1,
    normal: 0.2,
    slow: 0.3,
  },
};

// Reusable animation functions
export const animations = {
  // Fade in animations
  fadeIn: (element: gsap.TweenTarget, options: any = {}) => {
    return gsap.fromTo(
      element,
      {
        opacity: 0,
        y: options.y || 30,
        x: options.x || 0,
        scale: options.scale || 1,
        rotation: options.rotation || 0,
      },
      {
        opacity: 1,
        y: 0,
        x: 0,
        scale: 1,
        rotation: 0,
        duration: options.duration || animationConfig.duration.normal,
        ease: options.ease || animationConfig.ease.power2,
        delay: options.delay || 0,
        stagger: options.stagger || 0,
      }
    );
  },

  // Slide in animations
  slideIn: (
    element: gsap.TweenTarget,
    direction: "left" | "right" | "up" | "down" = "up",
    options: any = {}
  ) => {
    const directions = {
      left: { x: -100, y: 0 },
      right: { x: 100, y: 0 },
      up: { x: 0, y: 100 },
      down: { x: 0, y: -100 },
    };

    return gsap.fromTo(
      element,
      {
        opacity: 0,
        ...directions[direction],
      },
      {
        opacity: 1,
        x: 0,
        y: 0,
        duration: options.duration || animationConfig.duration.normal,
        ease: options.ease || animationConfig.ease.power3,
        delay: options.delay || 0,
        stagger: options.stagger || 0,
      }
    );
  },

  // Scale animations
  scaleIn: (element: gsap.TweenTarget, options: any = {}) => {
    return gsap.fromTo(
      element,
      {
        opacity: 0,
        scale: options.from || 0.8,
        rotation: options.rotation || 0,
      },
      {
        opacity: 1,
        scale: 1,
        rotation: 0,
        duration: options.duration || animationConfig.duration.normal,
        ease: options.ease || animationConfig.ease.back,
        delay: options.delay || 0,
        stagger: options.stagger || 0,
      }
    );
  },

  // Flip animations
  flipIn: (
    element: gsap.TweenTarget,
    axis: "x" | "y" = "y",
    options: any = {}
  ) => {
    const rotation = axis === "x" ? { rotationX: -90 } : { rotationY: -90 };

    return gsap.fromTo(
      element,
      {
        opacity: 0,
        ...rotation,
      },
      {
        opacity: 1,
        rotationX: 0,
        rotationY: 0,
        duration: options.duration || animationConfig.duration.normal,
        ease: options.ease || animationConfig.ease.power3,
        delay: options.delay || 0,
        stagger: options.stagger || 0,
      }
    );
  },

  // Hover effects
  hoverLift: (element: gsap.TweenTarget, options: any = {}) => {
    const tl = gsap.timeline({ paused: true });

    tl.to(element, {
      y: options.y || -10,
      scale: options.scale || 1.05,
      boxShadow: options.shadow || "0 20px 40px rgba(0,0,0,0.1)",
      duration: options.duration || animationConfig.duration.fast,
      ease: options.ease || animationConfig.ease.power2,
    });

    return tl;
  },

  // Floating animation
  float: (element: gsap.TweenTarget, options: any = {}) => {
    return gsap.to(element, {
      y: options.distance || -20,
      duration: options.duration || 2,
      ease: "power2.inOut",
      repeat: -1,
      yoyo: true,
      delay: options.delay || 0,
    });
  },

  // Rotation animation
  rotate: (element: gsap.TweenTarget, options: any = {}) => {
    return gsap.to(element, {
      rotation: options.degrees || 360,
      duration: options.duration || 2,
      ease: options.ease || "none",
      repeat: options.repeat || -1,
      delay: options.delay || 0,
    });
  },

  // Parallax effect
  parallax: (element: gsap.TweenTarget, options: any = {}) => {
    return gsap.to(element, {
      yPercent: options.distance || -50,
      ease: "none",
      scrollTrigger: {
        trigger: options.trigger || element,
        start: options.start || "top bottom",
        end: options.end || "bottom top",
        scrub: options.scrub || true,
      },
    });
  },

  // Counter animation
  counter: (element: gsap.TweenTarget, endValue: number, options: any = {}) => {
    const obj = { count: 0 };

    return gsap.to(obj, {
      count: endValue,
      duration: options.duration || 2,
      ease: options.ease || animationConfig.ease.power2,
      onUpdate: () => {
        if (element instanceof Element) {
          element.textContent = Math.round(obj.count).toString();
        }
      },
      delay: options.delay || 0,
    });
  },

  // Progress bar animation
  progressBar: (
    element: gsap.TweenTarget,
    percentage: number,
    options: any = {}
  ) => {
    return gsap.fromTo(
      element,
      { width: "0%" },
      {
        width: `${percentage}%`,
        duration: options.duration || 1.5,
        ease: options.ease || animationConfig.ease.power3,
        delay: options.delay || 0,
      }
    );
  },

  // Text reveal animation
  textReveal: (element: gsap.TweenTarget, options: any = {}) => {
    const chars =
      element instanceof Element ? element.textContent?.split("") : [];

    if (!chars) return;

    const charElements = chars.map((char) => {
      const span = document.createElement("span");
      span.textContent = char === " " ? "\u00A0" : char;
      span.style.display = "inline-block";
      return span;
    });

    if (element instanceof Element) {
      element.innerHTML = "";
      charElements.forEach((span) => element.appendChild(span));
    }

    return gsap.fromTo(
      charElements,
      {
        opacity: 0,
        y: 50,
        rotationX: -90,
      },
      {
        opacity: 1,
        y: 0,
        rotationX: 0,
        duration: options.duration || 0.6,
        ease: options.ease || animationConfig.ease.back,
        stagger: options.stagger || 0.02,
        delay: options.delay || 0,
      }
    );
  },

  // Magnetic effect
  magnetic: (element: gsap.TweenTarget, options: any = {}) => {
    const strength = options.strength || 0.3;

    if (!(element instanceof Element)) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const deltaX = (e.clientX - centerX) * strength;
      const deltaY = (e.clientY - centerY) * strength;

      gsap.to(element, {
        x: deltaX,
        y: deltaY,
        duration: 0.3,
        ease: animationConfig.ease.power2,
      });
    };

    const handleMouseLeave = () => {
      gsap.to(element, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: animationConfig.ease.elastic,
      });
    };

    element.addEventListener("mousemove", handleMouseMove);
    element.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      element.removeEventListener("mousemove", handleMouseMove);
      element.removeEventListener("mouseleave", handleMouseLeave);
    };
  },
};

// Scroll-triggered animations
export const scrollAnimations = {
  // Fade in on scroll
  fadeInOnScroll: (element: gsap.TweenTarget, options: any = {}) => {
    return gsap.fromTo(
      element,
      {
        opacity: 0,
        y: options.y || 50,
      },
      {
        opacity: 1,
        y: 0,
        duration: options.duration || animationConfig.duration.normal,
        ease: options.ease || animationConfig.ease.power3,
        scrollTrigger: {
          trigger: options.trigger || element,
          start: options.start || "top 80%",
          end: options.end || "bottom 20%",
          toggleActions: options.toggleActions || "play none none reverse",
          markers: options.markers || false,
        },
      }
    );
  },

  // Stagger animation on scroll
  staggerOnScroll: (elements: gsap.TweenTarget, options: any = {}) => {
    return gsap.fromTo(
      elements,
      {
        opacity: 0,
        y: options.y || 50,
        scale: options.scale || 0.9,
      },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: options.duration || animationConfig.duration.normal,
        ease: options.ease || animationConfig.ease.power3,
        stagger: options.stagger || animationConfig.stagger.normal,
        scrollTrigger: {
          trigger: options.trigger || elements,
          start: options.start || "top 80%",
          end: options.end || "bottom 20%",
          toggleActions: options.toggleActions || "play none none reverse",
        },
      }
    );
  },

  // Pin and scale on scroll
  pinAndScale: (element: gsap.TweenTarget, options: any = {}) => {
    return gsap.to(element, {
      scale: options.scale || 1.1,
      scrollTrigger: {
        trigger: options.trigger || element,
        start: options.start || "top top",
        end: options.end || "bottom top",
        scrub: options.scrub || true,
        pin: options.pin || true,
      },
    });
  },
};

// Timeline utilities
export const timelineUtils = {
  // Create a master timeline
  createMasterTimeline: (options: any = {}) => {
    return gsap.timeline({
      paused: options.paused || false,
      repeat: options.repeat || 0,
      yoyo: options.yoyo || false,
      onComplete: options.onComplete,
      onUpdate: options.onUpdate,
    });
  },

  // Page transition timeline
  pageTransition: (options: any = {}) => {
    const tl = gsap.timeline();

    tl.to(options.exitElement || ".page-content", {
      opacity: 0,
      y: -50,
      duration: options.exitDuration || 0.5,
      ease: animationConfig.ease.power2,
    })
      .set(options.enterElement || ".page-content", {
        y: 50,
        opacity: 0,
      })
      .to(options.enterElement || ".page-content", {
        opacity: 1,
        y: 0,
        duration: options.enterDuration || 0.5,
        ease: animationConfig.ease.power2,
      });

    return tl;
  },

  // Loading animation timeline
  loadingAnimation: (options: any = {}) => {
    const tl = gsap.timeline({ repeat: -1 });

    tl.to(options.element || ".loading-spinner", {
      rotation: 360,
      duration: options.duration || 1,
      ease: "none",
    });

    return tl;
  },
};

// Utility functions
export const animationUtils = {
  // Kill all animations on element
  killAnimations: (element: gsap.TweenTarget) => {
    gsap.killTweensOf(element);
  },

  // Refresh ScrollTrigger
  refreshScrollTrigger: () => {
    ScrollTrigger.refresh();
  },

  // Set initial state
  setInitialState: (element: gsap.TweenTarget, properties: any) => {
    gsap.set(element, properties);
  },

  // Batch animations
  batch: (elements: gsap.TweenTarget, animation: any, options: any = {}) => {
    return ScrollTrigger.batch(elements, {
      onEnter: (elements) => animation(elements, options),
      onLeave: options.onLeave,
      onEnterBack: options.onEnterBack,
      onLeaveBack: options.onLeaveBack,
      start: options.start || "top 80%",
      end: options.end || "bottom 20%",
    });
  },
};

export default animations;
