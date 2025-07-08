"use client";

import { useEffect } from "react";

// Web Vitals tracking for performance monitoring
export function reportWebVitals(metric: any) {
  // Log to console in development
  if (process.env.NODE_ENV === "development") {
    console.log("Web Vital:", metric);
  }

  // Send to analytics in production
  if (typeof window !== "undefined" && process.env.NODE_ENV === "production") {
    // Google Analytics 4
    if ("gtag" in window) {
      (window as any).gtag("event", metric.name, {
        event_category: "Web Vitals",
        event_label: metric.id,
        value: Math.round(
          metric.name === "CLS" ? metric.value * 1000 : metric.value
        ),
        non_interaction: true,
        custom_parameter: {
          metric_id: metric.id,
          metric_value: metric.value,
          metric_delta: metric.delta,
        },
      });
    }

    // Send to Vercel Analytics
    if ("va" in window) {
      (window as any).va("track", metric.name, {
        value: metric.value,
        id: metric.id,
        delta: metric.delta,
      });
    }

    // Custom analytics endpoint
    fetch("/api/analytics/web-vitals", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: metric.name,
        value: metric.value,
        id: metric.id,
        delta: metric.delta,
        url: window.location.href,
        userAgent: navigator.userAgent,
        timestamp: Date.now(),
      }),
    }).catch((error) => {
      // Fail silently to avoid affecting user experience
      console.error("Failed to send web vitals:", error);
    });
  }
}

// Performance observer for additional metrics
const PerformanceMonitor = () => {
  useEffect(() => {
    // Only run in browser
    if (typeof window === "undefined") return;

    // Track custom performance metrics
    const trackCustomMetrics = () => {
      // Time to Interactive (TTI) approximation
      if ("PerformanceObserver" in window) {
        try {
          // Long Task tracking
          const longTaskObserver = new PerformanceObserver((list) => {
            list.getEntries().forEach((entry) => {
              if (entry.duration > 50) {
                console.log("Long task detected:", entry.duration);

                // Send to analytics
                if (process.env.NODE_ENV === "production" && "gtag" in window) {
                  (window as any).gtag("event", "long_task", {
                    event_category: "Performance",
                    value: Math.round(entry.duration),
                    custom_parameter: {
                      task_duration: entry.duration,
                      task_start: entry.startTime,
                    },
                  });
                }
              }
            });
          });

          longTaskObserver.observe({ entryTypes: ["longtask"] });

          // Navigation timing
          const navigationObserver = new PerformanceObserver((list) => {
            list.getEntries().forEach((entry) => {
              const navigation = entry as PerformanceNavigationTiming;

              const metrics = {
                dns_time:
                  navigation.domainLookupEnd - navigation.domainLookupStart,
                connection_time:
                  navigation.connectEnd - navigation.connectStart,
                response_time:
                  navigation.responseEnd - navigation.responseStart,
                dom_parse_time:
                  navigation.domContentLoadedEventEnd - navigation.responseEnd,
                load_complete_time:
                  navigation.loadEventEnd - navigation.startTime,
              };

              console.log("Navigation metrics:", metrics);

              // Send to analytics
              if (process.env.NODE_ENV === "production" && "gtag" in window) {
                Object.entries(metrics).forEach(([key, value]) => {
                  if (value > 0) {
                    (window as any).gtag("event", key, {
                      event_category: "Navigation Timing",
                      value: Math.round(value),
                    });
                  }
                });
              }
            });
          });

          navigationObserver.observe({ entryTypes: ["navigation"] });

          // Resource timing for critical assets
          const resourceObserver = new PerformanceObserver((list) => {
            list.getEntries().forEach((entry) => {
              const resource = entry as PerformanceResourceTiming;

              // Track critical resources (fonts, main JS/CSS)
              if (
                resource.name.includes("font") ||
                resource.name.includes("main") ||
                resource.name.includes("chunk")
              ) {
                const loadTime = resource.responseEnd - resource.startTime;

                console.log(`Resource ${resource.name}: ${loadTime}ms`);

                if (process.env.NODE_ENV === "production" && "gtag" in window) {
                  (window as any).gtag("event", "resource_timing", {
                    event_category: "Resource Performance",
                    event_label: resource.name,
                    value: Math.round(loadTime),
                  });
                }
              }
            });
          });

          resourceObserver.observe({ entryTypes: ["resource"] });

          // Memory usage (if available)
          if ("memory" in performance) {
            const memory = (performance as any).memory;
            console.log("Memory usage:", {
              used: memory.usedJSHeapSize,
              total: memory.totalJSHeapSize,
              limit: memory.jsHeapSizeLimit,
            });

            if (process.env.NODE_ENV === "production" && "gtag" in window) {
              (window as any).gtag("event", "memory_usage", {
                event_category: "Performance",
                custom_parameter: {
                  used_heap: memory.usedJSHeapSize,
                  total_heap: memory.totalJSHeapSize,
                  heap_limit: memory.jsHeapSizeLimit,
                },
              });
            }
          }
        } catch (error) {
          console.error("Performance monitoring error:", error);
        }
      }
    };

    // Track user interactions
    const trackUserInteractions = () => {
      // Track GSAP animation performance
      const animationStartTimes = new Map();

      const trackAnimationPerformance = (animationName: string) => {
        animationStartTimes.set(animationName, performance.now());
      };

      const trackAnimationComplete = (animationName: string) => {
        const startTime = animationStartTimes.get(animationName);
        if (startTime) {
          const duration = performance.now() - startTime;
          console.log(`Animation ${animationName}: ${duration}ms`);

          if (process.env.NODE_ENV === "production" && duration > 16.67) {
            // > 1 frame at 60fps
            if ("gtag" in window) {
              (window as any).gtag("event", "slow_animation", {
                event_category: "Animation Performance",
                event_label: animationName,
                value: Math.round(duration),
              });
            }
          }

          animationStartTimes.delete(animationName);
        }
      };

      // Expose to window for GSAP callbacks
      (window as any).trackAnimationPerformance = trackAnimationPerformance;
      (window as any).trackAnimationComplete = trackAnimationComplete;

      // Track scroll performance
      let scrollStartTime = 0;
      let isScrolling = false;

      const handleScrollStart = () => {
        if (!isScrolling) {
          scrollStartTime = performance.now();
          isScrolling = true;
        }
      };

      const handleScrollEnd = () => {
        if (isScrolling) {
          const scrollDuration = performance.now() - scrollStartTime;
          if (scrollDuration > 100) {
            // Longer than 100ms might feel janky
            console.log(`Long scroll detected: ${scrollDuration}ms`);

            if (process.env.NODE_ENV === "production" && "gtag" in window) {
              (window as any).gtag("event", "slow_scroll", {
                event_category: "Scroll Performance",
                value: Math.round(scrollDuration),
              });
            }
          }
          isScrolling = false;
        }
      };

      let scrollTimeout: NodeJS.Timeout;
      window.addEventListener("scroll", () => {
        handleScrollStart();
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(handleScrollEnd, 150);
      });

      // Track theme switch performance
      const trackThemeSwitch = () => {
        const themeStartTime = performance.now();

        const observer = new MutationObserver((mutations) => {
          mutations.forEach((mutation) => {
            if (
              mutation.type === "attributes" &&
              mutation.attributeName === "class" &&
              (mutation.target as Element).classList.contains("dark")
            ) {
              const themeDuration = performance.now() - themeStartTime;
              console.log(`Theme switch: ${themeDuration}ms`);

              if (process.env.NODE_ENV === "production" && "gtag" in window) {
                (window as any).gtag("event", "theme_switch", {
                  event_category: "User Interaction",
                  value: Math.round(themeDuration),
                });
              }

              observer.disconnect();
            }
          });
        });

        observer.observe(document.documentElement, {
          attributes: true,
          attributeFilter: ["class"],
        });
      };

      // Expose theme tracking
      (window as any).trackThemeSwitch = trackThemeSwitch;
    };

    // Error tracking
    const trackErrors = () => {
      // JavaScript errors
      window.addEventListener("error", (event) => {
        console.error("JavaScript error:", event.error);

        if (process.env.NODE_ENV === "production" && "gtag" in window) {
          (window as any).gtag("event", "exception", {
            description: `${event.error?.message || "Unknown error"} at ${
              event.filename
            }:${event.lineno}`,
            fatal: false,
          });
        }
      });

      // Promise rejections
      window.addEventListener("unhandledrejection", (event) => {
        console.error("Unhandled promise rejection:", event.reason);

        if (process.env.NODE_ENV === "production" && "gtag" in window) {
          (window as any).gtag("event", "exception", {
            description: `Unhandled promise rejection: ${event.reason}`,
            fatal: false,
          });
        }
      });

      // GSAP errors
      if (typeof window !== "undefined" && "gsap" in window) {
        const originalConsoleError = console.error;
        console.error = (...args) => {
          if (
            args.some((arg) => typeof arg === "string" && arg.includes("gsap"))
          ) {
            if (process.env.NODE_ENV === "production" && "gtag" in window) {
              (window as any).gtag("event", "exception", {
                description: `GSAP error: ${args.join(" ")}`,
                fatal: false,
              });
            }
          }
          originalConsoleError.apply(console, args);
        };
      }
    };

    // Initialize all tracking
    trackCustomMetrics();
    trackUserInteractions();
    trackErrors();

    // Track page visibility changes
    document.addEventListener("visibilitychange", () => {
      if (document.visibilityState === "hidden") {
        // User switched tabs/minimized - good time to send any pending analytics
        if (process.env.NODE_ENV === "production" && "gtag" in window) {
          (window as any).gtag("event", "page_view_end", {
            event_category: "User Behavior",
            value: Math.round(performance.now()),
          });
        }
      }
    });

    // Cleanup function
    return () => {
      // Clear any observers or listeners if needed
    };
  }, []);

  return null; // This component doesn't render anything
};

// Utility function to track custom events
export const trackEvent = (
  eventName: string,
  parameters?: Record<string, any>
) => {
  if (process.env.NODE_ENV === "production" && typeof window !== "undefined") {
    if ("gtag" in window) {
      (window as any).gtag("event", eventName, {
        event_category: "Custom",
        ...parameters,
      });
    }
  }
};

// Utility function to track page views
export const trackPageView = (url: string, title: string) => {
  if (process.env.NODE_ENV === "production" && typeof window !== "undefined") {
    if ("gtag" in window) {
      (window as any).gtag("config", process.env.NEXT_PUBLIC_GA_ID, {
        page_title: title,
        page_location: url,
      });
    }
  }
};

export default PerformanceMonitor;
