"use client";

import React, { forwardRef, useEffect, useRef } from "react";
import { motion, AnimatePresence, HTMLMotionProps } from "framer-motion";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

interface ButtonProps extends Omit<HTMLMotionProps<"button">, "children"> {
  variant?:
    | "primary"
    | "secondary"
    | "outline"
    | "ghost"
    | "gradient"
    | "glass"
    | "neon";
  size?: "sm" | "md" | "lg" | "xl";
  loading?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
  fullWidth?: boolean;
  rounded?: boolean;
  glow?: boolean;
  ripple?: boolean;
  children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      className,
      variant = "primary",
      size = "md",
      loading = false,
      icon,
      iconPosition = "left",
      fullWidth = false,
      rounded = false,
      glow = false,
      ripple = true,
      children,
      disabled,
      onClick,
      ...props
    },
    ref
  ) => {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const rippleRef = useRef<HTMLSpanElement>(null);

    const variants = {
      primary:
        "bg-gradient-to-r from-purple-600 to-blue-600 text-white hover:from-purple-700 hover:to-blue-700 focus:ring-purple-500",
      secondary:
        "bg-slate-600 text-white hover:bg-slate-700 focus:ring-slate-500",
      outline:
        "border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white focus:ring-purple-500",
      ghost:
        "text-purple-600 hover:bg-purple-100 dark:hover:bg-purple-900/20 focus:ring-purple-500",
      gradient:
        "bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 text-white hover:from-pink-600 hover:via-purple-600 hover:to-indigo-600 focus:ring-purple-500",
      glass:
        "glass text-white hover:bg-white/20 focus:ring-white/50 border border-white/20",
      neon: "bg-transparent border-2 border-purple-500 text-purple-500 hover:bg-purple-500 hover:text-white focus:ring-purple-500 shadow-[0_0_15px_rgba(139,92,246,0.5)] hover:shadow-[0_0_25px_rgba(139,92,246,0.8)]",
    };

    const sizes = {
      sm: "px-3 py-1.5 text-sm",
      md: "px-4 py-2 text-base",
      lg: "px-6 py-3 text-lg",
      xl: "px-8 py-4 text-xl",
    };

    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (ripple && !disabled && !loading) {
        createRipple(e);
      }
      onClick?.(e);
    };

    const createRipple = (e: React.MouseEvent<HTMLButtonElement>) => {
      const button = buttonRef.current;
      if (!button) return;

      const rect = button.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      const ripple = document.createElement("span");
      ripple.className =
        "absolute bg-white/30 rounded-full animate-ping pointer-events-none";
      ripple.style.cssText = `
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        animation: ripple 0.6s ease-out;
      `;

      button.appendChild(ripple);
      setTimeout(() => {
        ripple.remove();
      }, 600);
    };

    useEffect(() => {
      // Add ripple animation styles
      const style = document.createElement("style");
      style.textContent = `
        @keyframes ripple {
          0% {
            transform: scale(0);
            opacity: 0.7;
          }
          70% {
            transform: scale(4);
            opacity: 0.3;
          }
          100% {
            transform: scale(4);
            opacity: 0;
          }
        }
      `;
      document.head.appendChild(style);

      return () => {
        document.head.removeChild(style);
      };
    }, []);

    const buttonClasses = cn(
      "relative inline-flex items-center justify-center font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-transparent overflow-hidden",
      variants[variant],
      sizes[size],
      fullWidth && "w-full",
      rounded && "rounded-full",
      !rounded && "rounded-lg",
      glow && "animate-pulse-glow",
      disabled && "opacity-50 cursor-not-allowed",
      loading && "cursor-wait",
      "hover:scale-105 active:scale-95",
      "transform-gpu",
      className
    );

    const iconClasses = cn(
      "flex-shrink-0",
      size === "sm" && "w-4 h-4",
      size === "md" && "w-5 h-5",
      size === "lg" && "w-6 h-6",
      size === "xl" && "w-7 h-7"
    );

    const loadingIconClasses = cn(
      "animate-spin flex-shrink-0",
      size === "sm" && "w-4 h-4",
      size === "md" && "w-5 h-5",
      size === "lg" && "w-6 h-6",
      size === "xl" && "w-7 h-7"
    );

    return (
      <motion.button
        ref={ref || buttonRef}
        className={buttonClasses}
        disabled={disabled || loading}
        onClick={handleClick}
        whileHover={{ scale: disabled || loading ? 1 : 1.05 }}
        whileTap={{ scale: disabled || loading ? 1 : 0.95 }}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        {...props}
      >
        {/* Background gradient animation */}
        {variant === "gradient" && (
          <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-purple-500 to-indigo-500 animate-gradient-xy opacity-80" />
        )}

        {/* Shimmer effect */}
        {variant === "primary" && (
          <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent hover:translate-x-full transition-transform duration-1000" />
        )}

        {/* Content */}
        <div className="relative flex items-center justify-center space-x-2">
          <AnimatePresence mode="wait">
            {loading ? (
              <motion.div
                key="loading"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.2 }}
              >
                <Loader2 className={loadingIconClasses} />
              </motion.div>
            ) : (
              <>
                {icon && iconPosition === "left" && (
                  <motion.div
                    key="icon-left"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className={iconClasses}
                  >
                    {icon}
                  </motion.div>
                )}

                <motion.span
                  key="text"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3, delay: 0.1 }}
                  className="whitespace-nowrap"
                >
                  {children}
                </motion.span>

                {icon && iconPosition === "right" && (
                  <motion.div
                    key="icon-right"
                    initial={{ opacity: 0, x: 10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                    className={iconClasses}
                  >
                    {icon}
                  </motion.div>
                )}
              </>
            )}
          </AnimatePresence>
        </div>

        {/* Ripple container */}
        <span
          ref={rippleRef}
          className="absolute inset-0 pointer-events-none"
        />
      </motion.button>
    );
  }
);

Button.displayName = "Button";

export default Button;
