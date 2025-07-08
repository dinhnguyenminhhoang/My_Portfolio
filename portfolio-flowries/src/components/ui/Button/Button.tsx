"use client";

import { forwardRef, useRef, useEffect } from "react";
import { gsap } from "gsap";
import { Loader2 } from "lucide-react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?:
    | "primary"
    | "secondary"
    | "outline"
    | "ghost"
    | "gradient"
    | "glass";
  size?: "sm" | "md" | "lg" | "xl";
  shape?: "rounded" | "pill" | "square";
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  ripple?: boolean;
  magnetic?: boolean;
  glow?: boolean;
  children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "md",
      shape = "rounded",
      loading = false,
      leftIcon,
      rightIcon,
      ripple = true,
      magnetic = false,
      glow = false,
      className = "",
      disabled,
      onClick,
      children,
      ...props
    },
    ref
  ) => {
    const buttonRef = useRef<HTMLButtonElement>(null);
    const rippleRef = useRef<HTMLDivElement>(null);

    // Merge refs
    const mergedRef = (node: HTMLButtonElement) => {
      buttonRef.current = node;
      if (typeof ref === "function") {
        ref(node);
      } else if (ref) {
        ref.current = node;
      }
    };

    // Variant styles
    const variants = {
      primary:
        "bg-rose-500 hover:bg-rose-600 text-white shadow-lg hover:shadow-xl border-transparent",
      secondary:
        "bg-gray-100 hover:bg-gray-200 text-gray-900 shadow-md hover:shadow-lg border-transparent",
      outline:
        "bg-transparent hover:bg-rose-50 text-rose-500 border-2 border-rose-500 hover:border-rose-600",
      ghost: "bg-transparent hover:bg-rose-50 text-rose-500 border-transparent",
      gradient:
        "bg-gradient-to-r from-rose-500 to-pink-500 hover:from-rose-600 hover:to-pink-600 text-white shadow-lg hover:shadow-xl border-transparent",
      glass:
        "bg-white/20 backdrop-blur-md hover:bg-white/30 text-white border border-white/30 shadow-lg hover:shadow-xl",
    };

    // Size styles
    const sizes = {
      sm: "px-3 py-1.5 text-sm",
      md: "px-4 py-2 text-base",
      lg: "px-6 py-3 text-lg",
      xl: "px-8 py-4 text-xl",
    };

    // Shape styles
    const shapes = {
      rounded: "rounded-lg",
      pill: "rounded-full",
      square: "rounded-none",
    };

    // Glow effect styles
    const glowStyles = glow
      ? {
          primary: "shadow-rose-500/50",
          secondary: "shadow-gray-500/50",
          outline: "shadow-rose-500/50",
          ghost: "shadow-rose-500/50",
          gradient: "shadow-rose-500/50",
          glass: "shadow-white/50",
        }
      : {};

    const baseClasses = `
      relative inline-flex items-center justify-center font-semibold
      transition-all duration-300 transform
      hover:scale-105 active:scale-95
      focus:outline-none focus:ring-2 focus:ring-rose-500 focus:ring-offset-2
      disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100
      overflow-hidden group
      ${variants[variant]}
      ${sizes[size]}
      ${shapes[shape]}
      ${glow ? `hover:shadow-2xl ${glowStyles[variant]}` : ""}
      ${className}
    `;

    // Magnetic effect
    useEffect(() => {
      if (!magnetic || !buttonRef.current) return;

      const button = buttonRef.current;
      const strength = 0.3;

      const handleMouseMove = (e: MouseEvent) => {
        const rect = button.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;

        const deltaX = (e.clientX - centerX) * strength;
        const deltaY = (e.clientY - centerY) * strength;

        gsap.to(button, {
          x: deltaX,
          y: deltaY,
          duration: 0.3,
          ease: "power2.out",
        });
      };

      const handleMouseLeave = () => {
        gsap.to(button, {
          x: 0,
          y: 0,
          duration: 0.5,
          ease: "elastic.out(1, 0.3)",
        });
      };

      button.addEventListener("mousemove", handleMouseMove);
      button.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        button.removeEventListener("mousemove", handleMouseMove);
        button.removeEventListener("mouseleave", handleMouseLeave);
      };
    }, [magnetic]);

    // Ripple effect
    const handleRipple = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (!ripple || !rippleRef.current || disabled || loading) return;

      const button = e.currentTarget;
      const rect = button.getBoundingClientRect();
      const size = Math.max(rect.width, rect.height);
      const x = e.clientX - rect.left - size / 2;
      const y = e.clientY - rect.top - size / 2;

      const rippleElement = rippleRef.current;

      gsap.set(rippleElement, {
        width: size,
        height: size,
        left: x,
        top: y,
        scale: 0,
        opacity: 0.6,
      });

      gsap.to(rippleElement, {
        scale: 1,
        opacity: 0,
        duration: 0.6,
        ease: "power2.out",
      });
    };

    // Handle click with animations
    const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
      if (disabled || loading) return;

      handleRipple(e);

      // Button press animation
      gsap.to(buttonRef.current, {
        scale: 0.95,
        duration: 0.1,
        ease: "power2.out",
        onComplete: () => {
          gsap.to(buttonRef.current, {
            scale: 1,
            duration: 0.1,
            ease: "power2.out",
          });
        },
      });

      if (onClick) {
        onClick(e);
      }
    };

    // Loading animation
    useEffect(() => {
      if (loading && buttonRef.current) {
        const loadingSpinner =
          buttonRef.current.querySelector(".loading-spinner");
        if (loadingSpinner) {
          gsap.to(loadingSpinner, {
            rotation: 360,
            duration: 1,
            ease: "none",
            repeat: -1,
          });
        }
      }
    }, [loading]);

    return (
      <button
        ref={mergedRef}
        className={baseClasses}
        disabled={disabled || loading}
        onClick={handleClick}
        {...props}
      >
        {/* Ripple effect */}
        {ripple && (
          <div
            ref={rippleRef}
            className="absolute rounded-full bg-white pointer-events-none"
            style={{ transform: "scale(0)" }}
          />
        )}

        {/* Background gradient overlay for hover effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/10 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700 ease-in-out" />

        {/* Content */}
        <div className="relative flex items-center justify-center gap-2">
          {loading ? (
            <>
              <Loader2 className="loading-spinner w-4 h-4 animate-spin" />
              <span>Loading...</span>
            </>
          ) : (
            <>
              {leftIcon && (
                <span className="flex-shrink-0 transition-transform duration-300 group-hover:scale-110">
                  {leftIcon}
                </span>
              )}
              <span className="transition-all duration-300">{children}</span>
              {rightIcon && (
                <span className="flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:translate-x-1">
                  {rightIcon}
                </span>
              )}
            </>
          )}
        </div>

        {/* Glow effect */}
        {glow && (
          <div className="absolute inset-0 rounded-inherit bg-current opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-xl" />
        )}
      </button>
    );
  }
);

Button.displayName = "Button";

// Button group component
interface ButtonGroupProps {
  children: React.ReactNode;
  orientation?: "horizontal" | "vertical";
  spacing?: "none" | "sm" | "md" | "lg";
  className?: string;
}

export const ButtonGroup: React.FC<ButtonGroupProps> = ({
  children,
  orientation = "horizontal",
  spacing = "md",
  className = "",
}) => {
  const spacingClasses = {
    none: "gap-0",
    sm: "gap-1",
    md: "gap-2",
    lg: "gap-4",
  };

  const orientationClasses = {
    horizontal: "flex-row",
    vertical: "flex-col",
  };

  return (
    <div
      className={`flex ${orientationClasses[orientation]} ${spacingClasses[spacing]} ${className}`}
    >
      {children}
    </div>
  );
};

// Icon button component
interface IconButtonProps extends Omit<ButtonProps, "children"> {
  icon: React.ReactNode;
  "aria-label": string;
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ icon, size = "md", shape = "rounded", ...props }, ref) => {
    const iconSizes = {
      sm: "w-8 h-8",
      md: "w-10 h-10",
      lg: "w-12 h-12",
      xl: "w-14 h-14",
    };

    return (
      <Button
        ref={ref}
        size={size}
        shape={shape}
        className={`${iconSizes[size]} p-0 ${props.className || ""}`}
        {...props}
      >
        {icon}
      </Button>
    );
  }
);

IconButton.displayName = "IconButton";

// Floating Action Button
interface FABProps extends ButtonProps {
  position?: "bottom-right" | "bottom-left" | "top-right" | "top-left";
}

export const FAB: React.FC<FABProps> = ({
  position = "bottom-right",
  size = "lg",
  shape = "pill",
  variant = "gradient",
  glow = true,
  className = "",
  ...props
}) => {
  const positions = {
    "bottom-right": "fixed bottom-6 right-6",
    "bottom-left": "fixed bottom-6 left-6",
    "top-right": "fixed top-6 right-6",
    "top-left": "fixed top-6 left-6",
  };

  return (
    <Button
      variant={variant}
      size={size}
      shape={shape}
      glow={glow}
      magnetic
      className={`${positions[position]} z-50 shadow-2xl ${className}`}
      {...props}
    />
  );
};

export default Button;
