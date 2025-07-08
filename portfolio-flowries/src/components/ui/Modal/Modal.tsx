"use client";

import { gsap } from "gsap";
import { Calendar, Heart, MapPin, Star, Tag, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children?: React.ReactNode;
  title?: string;
  size?: "sm" | "md" | "lg" | "xl" | "full";
  className?: string;
}

interface PortfolioModalProps {
  isOpen: boolean;
  onClose: () => void;
  item: {
    id: number;
    title: string;
    category: string;
    description: string;
    fullDescription?: string;
    location: string;
    date: string;
    rating: number;
    images?: string[];
    tags: string[];
    client?: string;
    challenge?: string;
    solution?: string;
    result?: string;
  };
}

// Base Modal Component
export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  title,
  size = "md",
  className = "",
}) => {
  const overlayRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);
  const [isMounted, setIsMounted] = useState(false);

  const sizeClasses = {
    sm: "max-w-md",
    md: "max-w-2xl",
    lg: "max-w-4xl",
    xl: "max-w-6xl",
    full: "max-w-full mx-4",
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isMounted) return;

    if (isOpen) {
      // Prevent body scroll
      document.body.style.overflow = "hidden";

      // Open animation
      gsap.set(overlayRef.current, { opacity: 0 });
      gsap.set(modalRef.current, { opacity: 0, scale: 0.9, y: 50 });

      const tl = gsap.timeline();
      tl.to(overlayRef.current, {
        opacity: 1,
        duration: 0.3,
        ease: "power2.out",
      }).to(
        modalRef.current,
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.4,
          ease: "back.out(1.7)",
        },
        "-=0.2"
      );
    } else {
      // Close animation
      const tl = gsap.timeline({
        onComplete: () => {
          document.body.style.overflow = "auto";
        },
      });

      tl.to(modalRef.current, {
        opacity: 0,
        scale: 0.9,
        y: 50,
        duration: 0.3,
        ease: "power2.in",
      }).to(
        overlayRef.current,
        {
          opacity: 0,
          duration: 0.2,
          ease: "power2.in",
        },
        "-=0.1"
      );
    }
  }, [isOpen, isMounted]);

  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleKeyDown = (e: KeyboardEvent) => {
    if (e.key === "Escape") {
      onClose();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }
  }, [isOpen]);

  if (!isMounted || !isOpen) return null;

  return createPortal(
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
      onClick={handleOverlayClick}
    >
      <div
        ref={modalRef}
        className={`relative w-full ${sizeClasses[size]} max-h-[90vh] bg-white rounded-3xl shadow-2xl overflow-hidden ${className}`}
      >
        {/* Header */}
        {title && (
          <div className="flex items-center justify-between p-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-900">{title}</h2>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors duration-200"
            >
              <X size={20} className="text-gray-500" />
            </button>
          </div>
        )}

        {/* Content */}
        <div className="overflow-y-auto max-h-full">{children}</div>

        {/* Close button if no title */}
        {!title && (
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-white/80 backdrop-blur hover:bg-white rounded-full transition-colors duration-200 z-10"
          >
            <X size={20} className="text-gray-700" />
          </button>
        )}
      </div>
    </div>,
    document.body
  );
};

// Portfolio Item Modal
export const PortfolioModal: React.FC<PortfolioModalProps> = ({
  isOpen,
  onClose,
  item,
}) => {
  const imageGalleryRef = useRef<HTMLDivElement>(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const images = item.images || [
    `/images/portfolio/${item.category}-${item.id}-1.jpg`,
    `/images/portfolio/${item.category}-${item.id}-2.jpg`,
    `/images/portfolio/${item.category}-${item.id}-3.jpg`,
  ];

  useEffect(() => {
    if (isOpen && imageGalleryRef.current) {
      gsap.fromTo(
        imageGalleryRef.current.children,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          delay: 0.3,
        }
      );
    }
  }, [isOpen]);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <div className="p-0">
        {/* Image Gallery */}
        <div className="relative h-96 bg-gradient-to-br from-rose-100 to-pink-100 overflow-hidden">
          {/* Main Image */}
          <div className="w-full h-full flex items-center justify-center">
            <div className="text-center">
              <Heart size={48} className="text-rose-500 mx-auto mb-4" />
              <p className="text-gray-600 font-medium">{item.title}</p>
              <p className="text-sm text-gray-500">
                Image {currentImageIndex + 1} of {images.length}
              </p>
            </div>
          </div>

          {/* Navigation Arrows */}
          {images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200"
              >
                <svg
                  className="w-5 h-5 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>
              <button
                onClick={nextImage}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white/80 backdrop-blur rounded-full flex items-center justify-center hover:bg-white transition-colors duration-200"
              >
                <svg
                  className="w-5 h-5 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </>
          )}

          {/* Image Indicators */}
          {images.length > 1 && (
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                    index === currentImageIndex ? "bg-white" : "bg-white/50"
                  }`}
                />
              ))}
            </div>
          )}

          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="px-3 py-1 bg-white/90 backdrop-blur text-rose-600 text-sm font-semibold rounded-full capitalize">
              {item.category}
            </span>
          </div>

          {/* Rating */}
          <div className="absolute top-4 right-4 flex items-center gap-1">
            {[...Array(item.rating)].map((_, i) => (
              <Star
                key={i}
                size={14}
                className="text-yellow-400 fill-current"
              />
            ))}
          </div>
        </div>

        {/* Content */}
        <div ref={imageGalleryRef} className="p-8">
          {/* Header Info */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">
              {item.title}
            </h1>
            <div className="flex flex-wrap gap-6 text-sm text-gray-600 mb-6">
              <div className="flex items-center gap-2">
                <MapPin size={16} className="text-rose-500" />
                <span>{item.location}</span>
              </div>
              <div className="flex items-center gap-2">
                <Calendar size={16} className="text-rose-500" />
                <span>{item.date}</span>
              </div>
              {item.client && (
                <div className="flex items-center gap-2">
                  <Heart size={16} className="text-rose-500" />
                  <span>{item.client}</span>
                </div>
              )}
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-6">
              {item.tags.map((tag, index) => (
                <span
                  key={index}
                  className="flex items-center gap-1 px-3 py-1 bg-rose-50 text-rose-600 text-sm rounded-full"
                >
                  <Tag size={12} />
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Description */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">
                Project Overview
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {item.fullDescription || item.description}
              </p>

              {item.challenge && (
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Challenge
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {item.challenge}
                  </p>
                </div>
              )}
            </div>

            <div>
              {item.solution && (
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Solution
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {item.solution}
                  </p>
                </div>
              )}

              {item.result && (
                <div className="mb-6">
                  <h4 className="text-lg font-semibold text-gray-900 mb-2">
                    Result
                  </h4>
                  <p className="text-gray-600 leading-relaxed">{item.result}</p>
                </div>
              )}
            </div>
          </div>

          {/* CTA */}
          <div className="mt-8 pt-8 border-t border-gray-200 text-center">
            <h4 className="text-xl font-bold text-gray-900 mb-4">
              Love this style?
            </h4>
            <p className="text-gray-600 mb-6">
              Let create something beautiful for your special occasion.
            </p>
            <button
              onClick={() => {
                onClose();
                document
                  .getElementById("contact")
                  ?.scrollIntoView({ behavior: "smooth" });
              }}
              className="px-8 py-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white font-semibold rounded-full hover:from-rose-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Get a Quote
            </button>
          </div>
        </div>
      </div>
    </Modal>
  );
};

export default Modal;
