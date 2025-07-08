"use client";

import { useEffect, useRef, useState, createContext, useContext } from "react";
import { createPortal } from "react-dom";
import { gsap } from "gsap";
import {
  CheckCircle,
  XCircle,
  AlertCircle,
  Info,
  X,
  Heart,
  Sparkles,
} from "lucide-react";

// Toast types
export type ToastType = "success" | "error" | "warning" | "info" | "flowries";

export interface Toast {
  id: string;
  type: ToastType;
  title?: string;
  message: string;
  duration?: number;
  action?: {
    label: string;
    onClick: () => void;
  };
  persistent?: boolean;
}

// Toast context
interface ToastContextType {
  toasts: Toast[];
  addToast: (toast: Omit<Toast, "id">) => void;
  removeToast: (id: string) => void;
  clearAll: () => void;
}

const ToastContext = createContext<ToastContextType | undefined>(undefined);

export const useToast = () => {
  const context = useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};

// Toast provider
interface ToastProviderProps {
  children: React.ReactNode;
  maxToasts?: number;
  position?:
    | "top-right"
    | "top-left"
    | "bottom-right"
    | "bottom-left"
    | "top-center"
    | "bottom-center";
}

export const ToastProvider: React.FC<ToastProviderProps> = ({
  children,
  maxToasts = 5,
  position = "top-right",
}) => {
  const [toasts, setToasts] = useState<Toast[]>([]);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const addToast = (toast: Omit<Toast, "id">) => {
    const id = Math.random().toString(36).substr(2, 9);
    const newToast: Toast = {
      ...toast,
      id,
      duration: toast.duration ?? 5000,
    };

    setToasts((prev) => {
      const updated = [newToast, ...prev];
      return updated.slice(0, maxToasts);
    });

    // Auto remove toast
    if (!toast.persistent && newToast.duration! > 0) {
      setTimeout(() => {
        removeToast(id);
      }, newToast.duration);
    }
  };

  const removeToast = (id: string) => {
    setToasts((prev) => prev.filter((toast) => toast.id !== id));
  };

  const clearAll = () => {
    setToasts([]);
  };

  const positionClasses = {
    "top-right": "top-4 right-4",
    "top-left": "top-4 left-4",
    "bottom-right": "bottom-4 right-4",
    "bottom-left": "bottom-4 left-4",
    "top-center": "top-4 left-1/2 transform -translate-x-1/2",
    "bottom-center": "bottom-4 left-1/2 transform -translate-x-1/2",
  };

  return (
    <ToastContext.Provider value={{ toasts, addToast, removeToast, clearAll }}>
      {children}
      {isMounted &&
        createPortal(
          <div
            className={`fixed ${positionClasses[position]} z-50 space-y-2 max-w-sm w-full`}
          >
            {toasts.map((toast) => (
              <ToastItem key={toast.id} toast={toast} onRemove={removeToast} />
            ))}
          </div>,
          document.body
        )}
    </ToastContext.Provider>
  );
};

// Individual toast item
interface ToastItemProps {
  toast: Toast;
  onRemove: (id: string) => void;
}

const ToastItem: React.FC<ToastItemProps> = ({ toast, onRemove }) => {
  const toastRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  const icons = {
    success: CheckCircle,
    error: XCircle,
    warning: AlertCircle,
    info: Info,
    flowries: Heart,
  };

  const colors = {
    success: {
      bg: "bg-green-50 border-green-200",
      icon: "text-green-500",
      progress: "bg-green-500",
    },
    error: {
      bg: "bg-red-50 border-red-200",
      icon: "text-red-500",
      progress: "bg-red-500",
    },
    warning: {
      bg: "bg-yellow-50 border-yellow-200",
      icon: "text-yellow-500",
      progress: "bg-yellow-500",
    },
    info: {
      bg: "bg-blue-50 border-blue-200",
      icon: "text-blue-500",
      progress: "bg-blue-500",
    },
    flowries: {
      bg: "bg-rose-50 border-rose-200",
      icon: "text-rose-500",
      progress: "bg-gradient-to-r from-rose-500 to-pink-500",
    },
  };

  const IconComponent = icons[toast.type];
  const colorScheme = colors[toast.type];

  useEffect(() => {
    if (!toastRef.current) return;

    // Entry animation
    gsap.fromTo(
      toastRef.current,
      {
        x: 300,
        opacity: 0,
        scale: 0.8,
      },
      {
        x: 0,
        opacity: 1,
        scale: 1,
        duration: 0.5,
        ease: "back.out(1.7)",
      }
    );

    // Progress bar animation
    if (
      progressRef.current &&
      toast.duration &&
      toast.duration > 0 &&
      !toast.persistent
    ) {
      gsap.fromTo(
        progressRef.current,
        { width: "100%" },
        {
          width: "0%",
          duration: toast.duration / 1000,
          ease: "none",
          paused: isHovered,
        }
      );
    }

    // Sparkles animation for flowries type
    if (toast.type === "flowries" && toastRef.current) {
      const sparkles = toastRef.current.querySelectorAll(".sparkle");
      sparkles.forEach((sparkle, index) => {
        gsap.to(sparkle, {
          scale: 1.2,
          opacity: 0.8,
          duration: 1,
          ease: "power2.inOut",
          repeat: -1,
          yoyo: true,
          delay: index * 0.2,
        });
      });
    }
  }, [toast.duration, toast.persistent, isHovered]);

  const handleRemove = () => {
    if (!toastRef.current) return;

    gsap.to(toastRef.current, {
      x: 300,
      opacity: 0,
      scale: 0.8,
      duration: 0.3,
      ease: "power2.in",
      onComplete: () => onRemove(toast.id),
    });
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    if (progressRef.current) {
      gsap.to(progressRef.current, { animationPlayState: "paused" });
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (progressRef.current) {
      gsap.to(progressRef.current, { animationPlayState: "running" });
    }
  };

  return (
    <div
      ref={toastRef}
      className={`relative overflow-hidden rounded-2xl border shadow-lg backdrop-blur-sm transition-all duration-300 hover:shadow-xl ${colorScheme.bg}`}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Progress bar */}
      {toast.duration && toast.duration > 0 && !toast.persistent && (
        <div className="absolute bottom-0 left-0 h-1 bg-gray-200 w-full">
          <div
            ref={progressRef}
            className={`h-full ${colorScheme.progress} transition-all duration-300`}
          />
        </div>
      )}

      <div className="p-4">
        <div className="flex items-start gap-3">
          {/* Icon */}
          <div className="flex-shrink-0 relative">
            <IconComponent size={20} className={colorScheme.icon} />
            {toast.type === "flowries" && (
              <>
                <Sparkles
                  size={8}
                  className="sparkle absolute -top-1 -right-1 text-rose-400 opacity-60"
                />
                <Sparkles
                  size={6}
                  className="sparkle absolute -bottom-1 -left-1 text-pink-400 opacity-60"
                />
              </>
            )}
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            {toast.title && (
              <h4 className="text-sm font-semibold text-gray-900 mb-1">
                {toast.title}
              </h4>
            )}
            <p className="text-sm text-gray-700 leading-relaxed">
              {toast.message}
            </p>

            {/* Action button */}
            {toast.action && (
              <button
                onClick={toast.action.onClick}
                className={`mt-3 text-sm font-medium ${colorScheme.icon} hover:underline`}
              >
                {toast.action.label}
              </button>
            )}
          </div>

          {/* Close button */}
          <button
            onClick={handleRemove}
            className="flex-shrink-0 p-1 rounded-full hover:bg-gray-200 transition-colors duration-200"
          >
            <X size={16} className="text-gray-500" />
          </button>
        </div>
      </div>

      {/* Decorative elements for flowries type */}
      {toast.type === "flowries" && (
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-2 right-2 w-16 h-16 bg-rose-200 rounded-full opacity-20 blur-xl" />
          <div className="absolute bottom-2 left-2 w-12 h-12 bg-pink-200 rounded-full opacity-20 blur-lg" />
        </div>
      )}
    </div>
  );
};

// Helper functions for common toast types
export const toast = {
  success: (message: string, options?: Partial<Toast>) => {
    const { addToast } = useToast();
    addToast({ type: "success", message, ...options });
  },

  error: (message: string, options?: Partial<Toast>) => {
    const { addToast } = useToast();
    addToast({ type: "error", message, ...options });
  },

  warning: (message: string, options?: Partial<Toast>) => {
    const { addToast } = useToast();
    addToast({ type: "warning", message, ...options });
  },

  info: (message: string, options?: Partial<Toast>) => {
    const { addToast } = useToast();
    addToast({ type: "info", message, ...options });
  },

  flowries: (message: string, options?: Partial<Toast>) => {
    const { addToast } = useToast();
    addToast({ type: "flowries", message, ...options });
  },
};

// Hook for easy toast usage
export const useToastActions = () => {
  const { addToast, removeToast, clearAll } = useToast();

  return {
    success: (message: string, options?: Partial<Toast>) =>
      addToast({ type: "success", message, ...options }),

    error: (message: string, options?: Partial<Toast>) =>
      addToast({ type: "error", message, ...options }),

    warning: (message: string, options?: Partial<Toast>) =>
      addToast({ type: "warning", message, ...options }),

    info: (message: string, options?: Partial<Toast>) =>
      addToast({ type: "info", message, ...options }),

    flowries: (message: string, options?: Partial<Toast>) =>
      addToast({ type: "flowries", message, ...options }),

    remove: removeToast,
    clearAll,
  };
};

export default ToastProvider;
