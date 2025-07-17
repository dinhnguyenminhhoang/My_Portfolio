"use client";

import { motion } from "framer-motion";
import { Sparkles, Heart, Zap } from "lucide-react";

interface LoadingSpinnerProps {
  size?: "small" | "medium" | "large";
  fullScreen?: boolean;
  message?: string;
}

const LoadingSpinner = ({
  size = "medium",
  fullScreen = false,
  message = "Đang tải nội dung sáng tạo...",
}: LoadingSpinnerProps) => {
  const sizeClasses = {
    small: "w-8 h-8",
    medium: "w-12 h-12",
    large: "w-16 h-16",
  };

  const containerClasses = fullScreen
    ? "fixed inset-0 flex items-center justify-center bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 z-50"
    : "flex items-center justify-center py-8";

  return (
    <div className={containerClasses}>
      <div className="text-center">
        {/* Main Spinner */}
        <div className="relative mb-4">
          <motion.div
            className={`${sizeClasses[size]} mx-auto relative`}
            animate={{ rotate: 360 }}
            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          >
            <div className="absolute inset-0 rounded-full border-4 border-transparent border-t-purple-500 border-r-pink-500"></div>
            <div className="absolute inset-2 rounded-full border-4 border-transparent border-t-blue-500 border-l-purple-500"></div>
            <div className="absolute inset-4 rounded-full border-4 border-transparent border-b-pink-500 border-r-blue-500"></div>
          </motion.div>

          {/* Center Icon */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center"
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <Sparkles className="w-6 h-6 text-yellow-400" />
          </motion.div>
        </div>

        {/* Loading Message */}
        {message && (
          <motion.p
            className="text-gray-300 text-sm font-medium mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
          >
            {message}
          </motion.p>
        )}

        {/* Animated Dots */}
        <div className="flex justify-center space-x-1">
          {[0, 1, 2].map((index) => (
            <motion.div
              key={index}
              className="w-2 h-2 bg-purple-500 rounded-full"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.5, 1, 0.5],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                delay: index * 0.2,
              }}
            />
          ))}
        </div>

        {/* Floating Elements */}
        {fullScreen && (
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  y: [0, -30, 0],
                  opacity: [0.2, 0.8, 0.2],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 3 + Math.random() * 2,
                  repeat: Infinity,
                  delay: Math.random() * 2,
                }}
              >
                {i % 3 === 0 && <Heart className="w-4 h-4 text-pink-400" />}
                {i % 3 === 1 && <Zap className="w-4 h-4 text-blue-400" />}
                {i % 3 === 2 && (
                  <Sparkles className="w-4 h-4 text-yellow-400" />
                )}
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default LoadingSpinner;
