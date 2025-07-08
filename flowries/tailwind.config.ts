import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      // Custom colors for Flowries brand
      colors: {
        rose: {
          50: "#fff1f2",
          100: "#ffe4e6",
          200: "#fecdd3",
          300: "#fda4af",
          400: "#fb7185",
          500: "#f43f5e",
          600: "#e11d48",
          700: "#be123c",
          800: "#9f1239",
          900: "#881337",
        },
        pink: {
          50: "#fdf2f8",
          100: "#fce7f3",
          200: "#fbcfe8",
          300: "#f9a8d4",
          400: "#f472b6",
          500: "#ec4899",
          600: "#db2777",
          700: "#be185d",
          800: "#9d174d",
          900: "#831843",
        },
        // Custom brand colors
        flowries: {
          primary: "#f43f5e",
          secondary: "#ec4899",
          accent: "#fb7185",
          light: "#fff1f2",
          dark: "#881337",
        },
      },

      // Extended font families
      fontFamily: {
        sans: [
          "Geist",
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "sans-serif",
        ],
        mono: ["Geist Mono", "Menlo", "Monaco", "monospace"],
        display: ["Playfair Display", "Georgia", "serif"],
        script: ["Dancing Script", "cursive"],
      },

      // Extended font sizes
      fontSize: {
        xs: ["0.75rem", { lineHeight: "1rem" }],
        sm: ["0.875rem", { lineHeight: "1.25rem" }],
        base: ["1rem", { lineHeight: "1.5rem" }],
        lg: ["1.125rem", { lineHeight: "1.75rem" }],
        xl: ["1.25rem", { lineHeight: "1.75rem" }],
        "2xl": ["1.5rem", { lineHeight: "2rem" }],
        "3xl": ["1.875rem", { lineHeight: "2.25rem" }],
        "4xl": ["2.25rem", { lineHeight: "2.5rem" }],
        "5xl": ["3rem", { lineHeight: "1" }],
        "6xl": ["3.75rem", { lineHeight: "1" }],
        "7xl": ["4.5rem", { lineHeight: "1" }],
        "8xl": ["6rem", { lineHeight: "1" }],
        "9xl": ["8rem", { lineHeight: "1" }],
        display: ["4.5rem", { lineHeight: "1.1", letterSpacing: "-0.02em" }],
      },

      // Extended spacing
      spacing: {
        18: "4.5rem",
        88: "22rem",
        128: "32rem",
        144: "36rem",
      },

      // Extended border radius
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
        "6xl": "3rem",
      },

      // Custom shadows
      boxShadow: {
        "inner-lg": "inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)",
        glass: "0 8px 32px 0 rgba(31, 38, 135, 0.37)",
        glow: "0 0 20px rgba(244, 63, 94, 0.6)",
        "glow-lg": "0 0 40px rgba(244, 63, 94, 0.6)",
        rose: "0 10px 25px -5px rgba(244, 63, 94, 0.4), 0 10px 10px -5px rgba(244, 63, 94, 0.04)",
        pink: "0 10px 25px -5px rgba(236, 72, 153, 0.4), 0 10px 10px -5px rgba(236, 72, 153, 0.04)",
      },

      // Extended gradients
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "gradient-rose": "linear-gradient(135deg, #f43f5e 0%, #ec4899 100%)",
        "gradient-flower":
          "linear-gradient(135deg, #fff1f2 0%, #fce7f3 50%, #fdf2f8 100%)",
        "gradient-sunset":
          "linear-gradient(135deg, #fb7185 0%, #f43f5e 50%, #ec4899 100%)",
      },

      // Animation configurations
      animation: {
        "fade-in": "fadeIn 0.5s ease-in-out",
        "fade-in-up": "fadeInUp 0.5s ease-out",
        "fade-in-down": "fadeInDown 0.5s ease-out",
        "slide-in-left": "slideInLeft 0.5s ease-out",
        "slide-in-right": "slideInRight 0.5s ease-out",
        "scale-in": "scaleIn 0.3s ease-out",
        "bounce-gentle": "bounceGentle 2s infinite",
        float: "float 3s ease-in-out infinite",
        glow: "glow 2s ease-in-out infinite alternate",
        shimmer: "shimmer 2s linear infinite",
        "pulse-soft": "pulseSoft 2s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      },

      // Custom keyframes
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        fadeInUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        fadeInDown: {
          "0%": { opacity: "0", transform: "translateY(-30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        slideInLeft: {
          "0%": { opacity: "0", transform: "translateX(-30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        slideInRight: {
          "0%": { opacity: "0", transform: "translateX(30px)" },
          "100%": { opacity: "1", transform: "translateX(0)" },
        },
        scaleIn: {
          "0%": { opacity: "0", transform: "scale(0.9)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        bounceGentle: {
          "0%, 100%": { transform: "translateY(-5%)" },
          "50%": { transform: "translateY(0)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        glow: {
          "0%": { boxShadow: "0 0 20px rgba(244, 63, 94, 0.6)" },
          "100%": { boxShadow: "0 0 40px rgba(244, 63, 94, 0.8)" },
        },
        shimmer: {
          "0%": { transform: "translateX(-100%)" },
          "100%": { transform: "translateX(100%)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: "1" },
          "50%": { opacity: ".8" },
        },
      },

      // Extended backdrop blur
      backdropBlur: {
        xs: "2px",
        "4xl": "72px",
      },

      // Extended z-index
      zIndex: {
        60: "60",
        70: "70",
        80: "80",
        90: "90",
        100: "100",
      },

      // Custom aspect ratios
      aspectRatio: {
        "4/3": "4 / 3",
        "3/2": "3 / 2",
        "2/3": "2 / 3",
        "9/16": "9 / 16",
      },

      // Extended line heights
      lineHeight: {
        12: "3rem",
        16: "4rem",
        20: "5rem",
      },

      // Extended letter spacing
      letterSpacing: {
        widest: "0.25em",
      },

      // Custom transitions
      transitionTimingFunction: {
        "bounce-soft": "cubic-bezier(0.68, -0.55, 0.265, 1.55)",
        "ease-smooth": "cubic-bezier(0.25, 0.1, 0.25, 1)",
      },

      // Extended transition durations
      transitionDuration: {
        400: "400ms",
        600: "600ms",
        800: "800ms",
        1200: "1200ms",
        2000: "2000ms",
      },

      // Custom blur values
      blur: {
        "4xl": "72px",
        "5xl": "96px",
      },

      // Custom container configurations
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
    },
  },
  plugins: [
    // Custom utilities plugin
    function ({ addUtilities, theme }: any) {
      const newUtilities = {
        // Glass morphism effect
        ".glass": {
          background: "rgba(255, 255, 255, 0.25)",
          backdropFilter: "blur(4px)",
          border: "1px solid rgba(255, 255, 255, 0.18)",
        },
        ".glass-dark": {
          background: "rgba(0, 0, 0, 0.25)",
          backdropFilter: "blur(4px)",
          border: "1px solid rgba(255, 255, 255, 0.18)",
        },
        // Text gradients
        ".text-gradient": {
          background: "linear-gradient(135deg, #f43f5e 0%, #ec4899 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        },
        ".text-gradient-sunset": {
          background:
            "linear-gradient(135deg, #fb7185 0%, #f43f5e 50%, #ec4899 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
        },
        // Scrollbar styles
        ".scrollbar-hide": {
          "-ms-overflow-style": "none",
          "scrollbar-width": "none",
          "&::-webkit-scrollbar": {
            display: "none",
          },
        },
        ".scrollbar-thin": {
          "&::-webkit-scrollbar": {
            width: "6px",
          },
          "&::-webkit-scrollbar-track": {
            background: "#f1f1f1",
            borderRadius: "10px",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "linear-gradient(45deg, #f43f5e, #ec4899)",
            borderRadius: "10px",
          },
          "&::-webkit-scrollbar-thumb:hover": {
            background: "linear-gradient(45deg, #e11d48, #db2777)",
          },
        },
        // Custom shadows
        ".shadow-glow": {
          boxShadow: "0 0 20px rgba(244, 63, 94, 0.6)",
        },
        ".shadow-glow-lg": {
          boxShadow: "0 0 40px rgba(244, 63, 94, 0.6)",
        },
      };

      addUtilities(newUtilities);
    },
  ],
  darkMode: "class",
};

export default config;
