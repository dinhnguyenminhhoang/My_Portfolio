import { twMerge } from "tailwind-merge";
import { clsx, type ClassValue } from "clsx";

// Utility function for merging Tailwind classes
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Debounce function for performance optimization
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let timeoutId: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => func(...args), delay);
  };
}

// Throttle function for performance optimization
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

// Format date utilities
export const dateUtils = {
  format: (
    date: Date | string,
    format: "short" | "long" | "numeric" = "short"
  ): string => {
    const d = typeof date === "string" ? new Date(date) : date;

    const formats = {
      short: { month: "short", year: "numeric" } as const,
      long: { month: "long", day: "numeric", year: "numeric" } as const,
      numeric: { month: "2-digit", day: "2-digit", year: "numeric" } as const,
    };

    return d.toLocaleDateString("en-US", formats[format]);
  },

  timeAgo: (date: Date | string): string => {
    const d = typeof date === "string" ? new Date(date) : date;
    const now = new Date();
    const diffInSeconds = Math.floor((now.getTime() - d.getTime()) / 1000);

    const intervals = [
      { label: "year", seconds: 31536000 },
      { label: "month", seconds: 2592000 },
      { label: "week", seconds: 604800 },
      { label: "day", seconds: 86400 },
      { label: "hour", seconds: 3600 },
      { label: "minute", seconds: 60 },
      { label: "second", seconds: 1 },
    ];

    for (const interval of intervals) {
      const count = Math.floor(diffInSeconds / interval.seconds);
      if (count > 0) {
        return `${count} ${interval.label}${count !== 1 ? "s" : ""} ago`;
      }
    }

    return "just now";
  },

  isToday: (date: Date | string): boolean => {
    const d = typeof date === "string" ? new Date(date) : date;
    const today = new Date();
    return d.toDateString() === today.toDateString();
  },

  isThisWeek: (date: Date | string): boolean => {
    const d = typeof date === "string" ? new Date(date) : date;
    const today = new Date();
    const weekStart = new Date(today.setDate(today.getDate() - today.getDay()));
    const weekEnd = new Date(today.setDate(weekStart.getDate() + 6));
    return d >= weekStart && d <= weekEnd;
  },
};

// String utilities
export const stringUtils = {
  capitalize: (str: string): string => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  },

  titleCase: (str: string): string => {
    return str
      .toLowerCase()
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
      .join(" ");
  },

  truncate: (str: string, length: number, suffix: string = "..."): string => {
    if (str.length <= length) return str;
    return str.slice(0, length) + suffix;
  },

  slugify: (str: string): string => {
    return str
      .toLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/[\s_-]+/g, "-")
      .replace(/^-+|-+$/g, "");
  },

  removeHtml: (str: string): string => {
    return str.replace(/<[^>]*>/g, "");
  },

  extractInitials: (name: string): string => {
    return name
      .split(" ")
      .map((word) => word.charAt(0).toUpperCase())
      .join("")
      .slice(0, 2);
  },
};

// Number utilities
export const numberUtils = {
  format: (num: number, options?: Intl.NumberFormatOptions): string => {
    return new Intl.NumberFormat("en-US", options).format(num);
  },

  currency: (amount: number, currency: string = "USD"): string => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency,
    }).format(amount);
  },

  percentage: (value: number, total: number): string => {
    const percentage = (value / total) * 100;
    return `${percentage.toFixed(1)}%`;
  },

  compact: (num: number): string => {
    return new Intl.NumberFormat("en-US", {
      notation: "compact",
      maximumFractionDigits: 1,
    }).format(num);
  },

  ordinal: (num: number): string => {
    const suffixes = ["th", "st", "nd", "rd"];
    const v = num % 100;
    return num + (suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0]);
  },

  random: (min: number, max: number): number => {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  },

  clamp: (value: number, min: number, max: number): number => {
    return Math.min(Math.max(value, min), max);
  },
};

// Array utilities
export const arrayUtils = {
  unique: <T>(arr: T[]): T[] => {
    return [...new Set(arr)];
  },

  uniqueBy: <T>(arr: T[], key: keyof T): T[] => {
    const seen = new Set();
    return arr.filter((item) => {
      const value = item[key];
      if (seen.has(value)) return false;
      seen.add(value);
      return true;
    });
  },

  groupBy: <T>(arr: T[], key: keyof T): Record<string, T[]> => {
    return arr.reduce((groups, item) => {
      const group = String(item[key]);
      groups[group] = groups[group] || [];
      groups[group].push(item);
      return groups;
    }, {} as Record<string, T[]>);
  },

  shuffle: <T>(arr: T[]): T[] => {
    const shuffled = [...arr];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  },

  chunk: <T>(arr: T[], size: number): T[][] => {
    const chunks: T[][] = [];
    for (let i = 0; i < arr.length; i += size) {
      chunks.push(arr.slice(i, i + size));
    }
    return chunks;
  },

  sortBy: <T>(
    arr: T[],
    key: keyof T,
    direction: "asc" | "desc" = "asc"
  ): T[] => {
    return [...arr].sort((a, b) => {
      const aVal = a[key];
      const bVal = b[key];

      if (aVal < bVal) return direction === "asc" ? -1 : 1;
      if (aVal > bVal) return direction === "asc" ? 1 : -1;
      return 0;
    });
  },
};

// Object utilities
export const objectUtils = {
  pick: <T extends Record<string, any>, K extends keyof T>(
    obj: T,
    keys: K[]
  ): Pick<T, K> => {
    const result = {} as Pick<T, K>;
    keys.forEach((key) => {
      if (key in obj) {
        result[key] = obj[key];
      }
    });
    return result;
  },

  omit: <T extends Record<string, any>, K extends keyof T>(
    obj: T,
    keys: K[]
  ): Omit<T, K> => {
    const result = { ...obj };
    keys.forEach((key) => {
      delete result[key];
    });
    return result;
  },

  isEmpty: (obj: any): boolean => {
    if (obj == null) return true;
    if (Array.isArray(obj) || typeof obj === "string") return obj.length === 0;
    if (obj instanceof Map || obj instanceof Set) return obj.size === 0;
    return Object.keys(obj).length === 0;
  },

  deepMerge: <T extends Record<string, any>>(
    target: T,
    source: Partial<T>
  ): T => {
    const result = { ...target };

    Object.keys(source).forEach((key) => {
      const sourceValue = source[key as keyof T];
      const targetValue = result[key as keyof T];

      if (
        sourceValue &&
        typeof sourceValue === "object" &&
        !Array.isArray(sourceValue) &&
        targetValue &&
        typeof targetValue === "object" &&
        !Array.isArray(targetValue)
      ) {
        result[key as keyof T] = objectUtils.deepMerge(
          targetValue,
          sourceValue
        );
      } else {
        result[key as keyof T] = sourceValue as T[keyof T];
      }
    });

    return result;
  },

  flattenKeys: (
    obj: Record<string, any>,
    prefix: string = ""
  ): Record<string, any> => {
    const result: Record<string, any> = {};

    Object.keys(obj).forEach((key) => {
      const value = obj[key];
      const newKey = prefix ? `${prefix}.${key}` : key;

      if (value && typeof value === "object" && !Array.isArray(value)) {
        Object.assign(result, objectUtils.flattenKeys(value, newKey));
      } else {
        result[newKey] = value;
      }
    });

    return result;
  },
};

// URL utilities
export const urlUtils = {
  getParams: (url?: string): Record<string, string> => {
    const searchParams = new URLSearchParams(url || window.location.search);
    const params: Record<string, string> = {};

    searchParams.forEach((value, key) => {
      params[key] = value;
    });

    return params;
  },

  setParam: (key: string, value: string, url?: string): string => {
    const currentUrl = new URL(url || window.location.href);
    currentUrl.searchParams.set(key, value);
    return currentUrl.toString();
  },

  removeParam: (key: string, url?: string): string => {
    const currentUrl = new URL(url || window.location.href);
    currentUrl.searchParams.delete(key);
    return currentUrl.toString();
  },

  isValidUrl: (str: string): boolean => {
    try {
      new URL(str);
      return true;
    } catch {
      return false;
    }
  },

  getDomain: (url: string): string => {
    try {
      return new URL(url).hostname;
    } catch {
      return "";
    }
  },
};

// Local storage utilities with error handling
export const storageUtils = {
  get: <T>(key: string, defaultValue?: T): T | null => {
    try {
      if (typeof window === "undefined") return defaultValue || null;

      const item = localStorage.getItem(key);
      if (!item) return defaultValue || null;

      return JSON.parse(item);
    } catch {
      return defaultValue || null;
    }
  },

  set: <T>(key: string, value: T): boolean => {
    try {
      if (typeof window === "undefined") return false;

      localStorage.setItem(key, JSON.stringify(value));
      return true;
    } catch {
      return false;
    }
  },

  remove: (key: string): boolean => {
    try {
      if (typeof window === "undefined") return false;

      localStorage.removeItem(key);
      return true;
    } catch {
      return false;
    }
  },

  clear: (): boolean => {
    try {
      if (typeof window === "undefined") return false;

      localStorage.clear();
      return true;
    } catch {
      return false;
    }
  },
};

// Color utilities
export const colorUtils = {
  hexToRgb: (hex: string): { r: number; g: number; b: number } | null => {
    const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
    return result
      ? {
          r: parseInt(result[1], 16),
          g: parseInt(result[2], 16),
          b: parseInt(result[3], 16),
        }
      : null;
  },

  rgbToHex: (r: number, g: number, b: number): string => {
    return "#" + [r, g, b].map((x) => x.toString(16).padStart(2, "0")).join("");
  },

  generatePalette: (baseColor: string, count: number = 5): string[] => {
    const rgb = colorUtils.hexToRgb(baseColor);
    if (!rgb) return [baseColor];

    const palette: string[] = [];
    for (let i = 0; i < count; i++) {
      const factor = (i + 1) / (count + 1);
      const r = Math.round(rgb.r + (255 - rgb.r) * factor);
      const g = Math.round(rgb.g + (255 - rgb.g) * factor);
      const b = Math.round(rgb.b + (255 - rgb.b) * factor);
      palette.push(colorUtils.rgbToHex(r, g, b));
    }

    return palette;
  },

  getContrast: (color: string): "light" | "dark" => {
    const rgb = colorUtils.hexToRgb(color);
    if (!rgb) return "dark";

    const brightness = (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
    return brightness > 128 ? "dark" : "light";
  },
};

// Device detection utilities
export const deviceUtils = {
  isMobile: (): boolean => {
    if (typeof window === "undefined") return false;
    return window.innerWidth < 768;
  },

  isTablet: (): boolean => {
    if (typeof window === "undefined") return false;
    return window.innerWidth >= 768 && window.innerWidth < 1024;
  },

  isDesktop: (): boolean => {
    if (typeof window === "undefined") return false;
    return window.innerWidth >= 1024;
  },

  isTouchDevice: (): boolean => {
    if (typeof window === "undefined") return false;
    return "ontouchstart" in window || navigator.maxTouchPoints > 0;
  },

  getViewportSize: (): { width: number; height: number } => {
    if (typeof window === "undefined") return { width: 0, height: 0 };
    return {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  },
};

// Performance utilities
export const performanceUtils = {
  measureExecutionTime: <T>(fn: () => T): { result: T; time: number } => {
    const start = performance.now();
    const result = fn();
    const end = performance.now();
    return { result, time: end - start };
  },

  memoize: <T extends (...args: any[]) => any>(fn: T): T => {
    const cache = new Map();

    return ((...args: Parameters<T>) => {
      const key = JSON.stringify(args);

      if (cache.has(key)) {
        return cache.get(key);
      }

      const result = fn(...args);
      cache.set(key, result);
      return result;
    }) as T;
  },

  createPerformanceObserver: (
    callback: (entries: PerformanceEntry[]) => void
  ) => {
    if (typeof window === "undefined" || !("PerformanceObserver" in window)) {
      return null;
    }

    const observer = new PerformanceObserver((list) => {
      callback(list.getEntries());
    });

    observer.observe({ entryTypes: ["measure", "navigation", "paint"] });
    return observer;
  },
};

// Validation utilities
export const validationUtils = {
  email: (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  },

  phone: (phone: string): boolean => {
    const phoneRegex = /^[\+]?[\d\s\-\(\)]{10,}$/;
    return phoneRegex.test(phone.replace(/\s/g, ""));
  },

  url: (url: string): boolean => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  },

  password: (password: string): { isValid: boolean; errors: string[] } => {
    const errors: string[] = [];

    if (password.length < 8) {
      errors.push("Password must be at least 8 characters long");
    }

    if (!/[a-z]/.test(password)) {
      errors.push("Password must contain at least one lowercase letter");
    }

    if (!/[A-Z]/.test(password)) {
      errors.push("Password must contain at least one uppercase letter");
    }

    if (!/\d/.test(password)) {
      errors.push("Password must contain at least one number");
    }

    if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
      errors.push("Password must contain at least one special character");
    }

    return {
      isValid: errors.length === 0,
      errors,
    };
  },

  creditCard: (cardNumber: string): boolean => {
    // Luhn algorithm
    const num = cardNumber.replace(/\D/g, "");
    let sum = 0;
    let alternate = false;

    for (let i = num.length - 1; i >= 0; i--) {
      let n = parseInt(num.charAt(i), 10);

      if (alternate) {
        n *= 2;
        if (n > 9) {
          n = (n % 10) + 1;
        }
      }

      sum += n;
      alternate = !alternate;
    }

    return sum % 10 === 0;
  },

  required: (value: any): boolean => {
    if (typeof value === "string") return value.trim().length > 0;
    if (Array.isArray(value)) return value.length > 0;
    return value != null && value !== undefined;
  },

  minLength: (value: string, min: number): boolean => {
    return value.length >= min;
  },

  maxLength: (value: string, max: number): boolean => {
    return value.length <= max;
  },

  range: (value: number, min: number, max: number): boolean => {
    return value >= min && value <= max;
  },
};

// Format utilities for common data types
export const formatUtils = {
  fileSize: (bytes: number, decimals: number = 2): string => {
    if (bytes === 0) return "0 Bytes";

    const k = 1024;
    const sizes = ["Bytes", "KB", "MB", "GB", "TB"];
    const i = Math.floor(Math.log(bytes) / Math.log(k));

    return (
      parseFloat((bytes / Math.pow(k, i)).toFixed(decimals)) + " " + sizes[i]
    );
  },

  duration: (seconds: number): string => {
    const hours = Math.floor(seconds / 3600);
    const minutes = Math.floor((seconds % 3600) / 60);
    const secs = seconds % 60;

    if (hours > 0) {
      return `${hours}:${minutes.toString().padStart(2, "0")}:${secs
        .toString()
        .padStart(2, "0")}`;
    }

    return `${minutes}:${secs.toString().padStart(2, "0")}`;
  },

  distance: (
    meters: number,
    unit: "metric" | "imperial" = "metric"
  ): string => {
    if (unit === "imperial") {
      const feet = meters * 3.28084;
      if (feet < 5280) {
        return `${Math.round(feet)} ft`;
      }
      const miles = feet / 5280;
      return `${miles.toFixed(1)} mi`;
    }

    if (meters < 1000) {
      return `${Math.round(meters)} m`;
    }

    const kilometers = meters / 1000;
    return `${kilometers.toFixed(1)} km`;
  },

  temperature: (
    celsius: number,
    unit: "celsius" | "fahrenheit" = "celsius"
  ): string => {
    if (unit === "fahrenheit") {
      const fahrenheit = (celsius * 9) / 5 + 32;
      return `${Math.round(fahrenheit)}°F`;
    }

    return `${Math.round(celsius)}°C`;
  },

  socialCount: (count: number): string => {
    if (count < 1000) return count.toString();
    if (count < 1000000) return `${(count / 1000).toFixed(1)}K`;
    if (count < 1000000000) return `${(count / 1000000).toFixed(1)}M`;
    return `${(count / 1000000000).toFixed(1)}B`;
  },
};

// Animation easing functions
export const easingUtils = {
  linear: (t: number): number => t,

  easeInQuad: (t: number): number => t * t,
  easeOutQuad: (t: number): number => t * (2 - t),
  easeInOutQuad: (t: number): number =>
    t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t,

  easeInCubic: (t: number): number => t * t * t,
  easeOutCubic: (t: number): number => --t * t * t + 1,
  easeInOutCubic: (t: number): number =>
    t < 0.5 ? 4 * t * t * t : (t - 1) * (2 * t - 2) * (2 * t - 2) + 1,

  easeInQuart: (t: number): number => t * t * t * t,
  easeOutQuart: (t: number): number => 1 - --t * t * t * t,
  easeInOutQuart: (t: number): number =>
    t < 0.5 ? 8 * t * t * t * t : 1 - 8 * --t * t * t * t,

  easeInQuint: (t: number): number => t * t * t * t * t,
  easeOutQuint: (t: number): number => 1 + --t * t * t * t * t,
  easeInOutQuint: (t: number): number =>
    t < 0.5 ? 16 * t * t * t * t * t : 1 + 16 * --t * t * t * t * t,

  easeInSine: (t: number): number => 1 - Math.cos((t * Math.PI) / 2),
  easeOutSine: (t: number): number => Math.sin((t * Math.PI) / 2),
  easeInOutSine: (t: number): number => (1 - Math.cos(Math.PI * t)) / 2,

  easeInExpo: (t: number): number => (t === 0 ? 0 : Math.pow(2, 10 * (t - 1))),
  easeOutExpo: (t: number): number => (t === 1 ? 1 : 1 - Math.pow(2, -10 * t)),
  easeInOutExpo: (t: number): number => {
    if (t === 0) return 0;
    if (t === 1) return 1;
    if (t < 0.5) return Math.pow(2, 20 * t - 10) / 2;
    return (2 - Math.pow(2, -20 * t + 10)) / 2;
  },

  easeInCirc: (t: number): number => 1 - Math.sqrt(1 - t * t),
  easeOutCirc: (t: number): number => Math.sqrt(1 - --t * t),
  easeInOutCirc: (t: number): number => {
    if (t < 0.5) return (1 - Math.sqrt(1 - 4 * t * t)) / 2;
    return (Math.sqrt(1 - (-2 * t + 2) * (-2 * t + 2)) + 1) / 2;
  },

  easeInBack: (t: number): number => {
    const c1 = 1.70158;
    const c3 = c1 + 1;
    return c3 * t * t * t - c1 * t * t;
  },

  easeOutBack: (t: number): number => {
    const c1 = 1.70158;
    const c3 = c1 + 1;
    return 1 + c3 * Math.pow(t - 1, 3) + c1 * Math.pow(t - 1, 2);
  },

  easeInOutBack: (t: number): number => {
    const c1 = 1.70158;
    const c2 = c1 * 1.525;

    if (t < 0.5) {
      return (Math.pow(2 * t, 2) * ((c2 + 1) * 2 * t - c2)) / 2;
    }

    return (Math.pow(2 * t - 2, 2) * ((c2 + 1) * (t * 2 - 2) + c2) + 2) / 2;
  },
};

// Image utilities
export const imageUtils = {
  preload: (src: string): Promise<void> => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () => resolve();
      img.onerror = reject;
      img.src = src;
    });
  },

  preloadMultiple: (srcs: string[]): Promise<void[]> => {
    return Promise.all(srcs.map((src) => imageUtils.preload(src)));
  },

  getDataUrl: (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => resolve(e.target?.result as string);
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  },

  compress: (
    file: File,
    quality: number = 0.8,
    maxWidth: number = 1920
  ): Promise<Blob> => {
    return new Promise((resolve, reject) => {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");
      const img = new Image();

      img.onload = () => {
        const { width, height } = img;
        const ratio = Math.min(maxWidth / width, maxWidth / height);

        canvas.width = width * ratio;
        canvas.height = height * ratio;

        ctx?.drawImage(img, 0, 0, canvas.width, canvas.height);

        canvas.toBlob(
          (blob) =>
            blob ? resolve(blob) : reject(new Error("Compression failed")),
          "image/jpeg",
          quality
        );
      };

      img.onerror = reject;
      img.src = URL.createObjectURL(file);
    });
  },

  getDimensions: (src: string): Promise<{ width: number; height: number }> => {
    return new Promise((resolve, reject) => {
      const img = new Image();
      img.onload = () =>
        resolve({ width: img.naturalWidth, height: img.naturalHeight });
      img.onerror = reject;
      img.src = src;
    });
  },
};

// Async utilities
export const asyncUtils = {
  sleep: (ms: number): Promise<void> => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  },

  timeout: <T>(promise: Promise<T>, ms: number): Promise<T> => {
    return Promise.race([
      promise,
      new Promise<never>((_, reject) => {
        setTimeout(() => reject(new Error("Timeout")), ms);
      }),
    ]);
  },

  retry: async <T>(
    fn: () => Promise<T>,
    retries: number = 3,
    delay: number = 1000
  ): Promise<T> => {
    try {
      return await fn();
    } catch (error) {
      if (retries > 0) {
        await asyncUtils.sleep(delay);
        return asyncUtils.retry(fn, retries - 1, delay);
      }
      throw error;
    }
  },

  queue: <T>(
    tasks: (() => Promise<T>)[],
    concurrency: number = 1
  ): Promise<T[]> => {
    return new Promise((resolve, reject) => {
      const results: T[] = [];
      let index = 0;
      let running = 0;
      let completed = 0;

      const runNext = () => {
        if (index >= tasks.length) return;

        const taskIndex = index++;
        const task = tasks[taskIndex];
        running++;

        task()
          .then((result) => {
            results[taskIndex] = result;
            completed++;
            running--;

            if (completed === tasks.length) {
              resolve(results);
            } else {
              runNext();
            }
          })
          .catch(reject);
      };

      for (let i = 0; i < Math.min(concurrency, tasks.length); i++) {
        runNext();
      }
    });
  },
};

// Export all utilities
export default {
  cn,
  debounce,
  throttle,
  date: dateUtils,
  string: stringUtils,
  number: numberUtils,
  array: arrayUtils,
  object: objectUtils,
  url: urlUtils,
  storage: storageUtils,
  color: colorUtils,
  device: deviceUtils,
  performance: performanceUtils,
  validation: validationUtils,
  format: formatUtils,
  easing: easingUtils,
  image: imageUtils,
  async: asyncUtils,
};
