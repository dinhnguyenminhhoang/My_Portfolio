"use client";

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import {
  X,
  ChevronLeft,
  ChevronRight,
  ExternalLink,
  Heart,
  Eye,
  Download,
} from "lucide-react";
import { gsap } from "gsap";

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  client?: string;
  location?: string;
  year: string;
  likes: number;
  views: number;
}

const PortfolioGallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState<PortfolioItem | null>(
    null
  );
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const categories = [
    { id: "all", name: "All Work", count: 24 },
    { id: "portrait", name: "Portraits", count: 8 },
    { id: "landscape", name: "Landscapes", count: 6 },
    { id: "wedding", name: "Weddings", count: 5 },
    { id: "commercial", name: "Commercial", count: 3 },
    { id: "street", name: "Street", count: 2 },
  ];

  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: "Golden Hour Portrait",
      category: "portrait",
      image:
        "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&h=1000&fit=crop&crop=face",
      description:
        "Capturing the perfect golden hour lighting for this stunning portrait session.",
      client: "Sarah Johnson",
      location: "Central Park, NYC",
      year: "2024",
      likes: 342,
      views: 1250,
    },
    {
      id: 2,
      title: "Mountain Landscape",
      category: "landscape",
      image:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&h=1000&fit=crop",
      description:
        "Breathtaking sunrise view from the Rocky Mountains during a weekend expedition.",
      location: "Rocky Mountains, Colorado",
      year: "2024",
      likes: 567,
      views: 2100,
    },
    {
      id: 3,
      title: "Wedding Ceremony",
      category: "wedding",
      image:
        "https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=1000&fit=crop",
      description:
        "Intimate wedding ceremony captured in natural light with emotional depth.",
      client: "Emma & David",
      location: "Napa Valley, CA",
      year: "2024",
      likes: 890,
      views: 3200,
    },
    {
      id: 4,
      title: "Corporate Headshots",
      category: "commercial",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?w=800&h=1000&fit=crop&crop=face",
      description: "Professional headshots for a tech startup team.",
      client: "TechFlow Inc.",
      location: "San Francisco, CA",
      year: "2024",
      likes: 234,
      views: 890,
    },
    {
      id: 5,
      title: "Street Photography",
      category: "street",
      image:
        "https://images.unsplash.com/photo-1444927714506-8492d94b5ba0?w=800&h=1000&fit=crop",
      description:
        "Candid moments captured during the bustling streets of Manhattan.",
      location: "Manhattan, NYC",
      year: "2024",
      likes: 445,
      views: 1680,
    },
    {
      id: 6,
      title: "Fashion Portrait",
      category: "portrait",
      image:
        "https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=800&h=1000&fit=crop&crop=face",
      description: "High-fashion portrait with dramatic studio lighting.",
      client: "Model: Jessica Chen",
      location: "Studio NYC",
      year: "2024",
      likes: 678,
      views: 2340,
    },
    {
      id: 7,
      title: "Nature Landscape",
      category: "landscape",
      image:
        "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=800&h=1000&fit=crop",
      description: "Serene forest landscape during autumn season.",
      location: "Vermont Mountains",
      year: "2024",
      likes: 523,
      views: 1890,
    },
    {
      id: 8,
      title: "Couple Portrait",
      category: "portrait",
      image:
        "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&h=1000&fit=crop",
      description: "Romantic couple portrait session in urban setting.",
      client: "Mike & Lisa",
      location: "Brooklyn Bridge, NYC",
      year: "2024",
      likes: 445,
      views: 1567,
    },
    {
      id: 9,
      title: "Wedding Reception",
      category: "wedding",
      image:
        "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?w=800&h=1000&fit=crop",
      description: "Joyful moments from the wedding reception celebration.",
      client: "Anna & Tom",
      location: "Hamptons, NY",
      year: "2024",
      likes: 756,
      views: 2890,
    },
  ];

  const filteredItems =
    selectedCategory === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === selectedCategory);

  // GSAP Animation
  useEffect(() => {
    if (isInView && galleryRef.current) {
      gsap.fromTo(
        ".gallery-item",
        { y: 50, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
        }
      );
    }
  }, [isInView, selectedCategory]);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeydown = (e: KeyboardEvent) => {
      if (!selectedImage) return;

      if (e.key === "Escape") {
        setSelectedImage(null);
      } else if (e.key === "ArrowLeft") {
        navigateImage("prev");
      } else if (e.key === "ArrowRight") {
        navigateImage("next");
      }
    };

    window.addEventListener("keydown", handleKeydown);
    return () => window.removeEventListener("keydown", handleKeydown);
  }, [selectedImage, currentIndex]);

  const navigateImage = (direction: "prev" | "next") => {
    const newIndex =
      direction === "next"
        ? (currentIndex + 1) % filteredItems.length
        : (currentIndex - 1 + filteredItems.length) % filteredItems.length;

    setCurrentIndex(newIndex);
    setSelectedImage(filteredItems[newIndex]);
  };

  const openLightbox = (item: PortfolioItem) => {
    const index = filteredItems.findIndex((i) => i.id === item.id);
    setCurrentIndex(index);
    setSelectedImage(item);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  return (
    <section
      ref={sectionRef}
      id="portfolio"
      className="py-20 lg:py-32 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-950 via-black to-dark-900"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-accent-500 font-semibold text-lg">My Work</span>
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mt-2 mb-6">
            Portfolio <span className="text-gradient">Gallery</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            A curated collection of my finest work, showcasing diverse styles
            and stories captured through my lens across various photography
            genres.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <motion.button
              key={category.id}
              onClick={() => setSelectedCategory(category.id)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-6 py-3 rounded-lg font-semibold transition-all duration-300 ${
                selectedCategory === category.id
                  ? "bg-accent-500 text-white shadow-lg shadow-accent-500/25"
                  : "bg-dark-800/50 text-gray-300 hover:bg-dark-700 hover:text-white border border-white/10"
              }`}
            >
              {category.name}
              <span className="ml-2 text-sm opacity-70">
                ({category.count})
              </span>
            </motion.button>
          ))}
        </motion.div>

        {/* Gallery Grid */}
        <div
          ref={galleryRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          <AnimatePresence mode="wait">
            {filteredItems.map((item, index) => (
              <motion.div
                key={`${selectedCategory}-${item.id}`}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="gallery-item group cursor-pointer"
                onClick={() => openLightbox(item)}
              >
                <div className="relative overflow-hidden rounded-xl bg-dark-800 shadow-2xl">
                  {/* Image */}
                  <div className="aspect-[4/5] overflow-hidden">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-center justify-between mb-2">
                        <span className="px-2 py-1 bg-accent-500/80 text-white text-xs font-semibold rounded">
                          {item.category.toUpperCase()}
                        </span>
                        <div className="flex items-center space-x-3 text-white/80">
                          <div className="flex items-center space-x-1">
                            <Heart className="w-4 h-4" />
                            <span className="text-sm">{item.likes}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Eye className="w-4 h-4" />
                            <span className="text-sm">{item.views}</span>
                          </div>
                        </div>
                      </div>
                      <h3 className="text-white font-semibold text-lg mb-1">
                        {item.title}
                      </h3>
                      <p className="text-gray-300 text-sm">
                        {item.description}
                      </p>
                      {item.location && (
                        <p className="text-gray-400 text-xs mt-2">
                          {item.location}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Hover Icon */}
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <ExternalLink className="w-5 h-5 text-white" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Load More Button */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 1, duration: 0.8 }}
          className="text-center mt-12"
        >
          <button className="px-8 py-4 border-2 border-accent-500 text-accent-500 rounded-lg font-semibold hover:bg-accent-500 hover:text-white transition-all duration-300 hover-glow">
            Load More Projects
          </button>
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
            onClick={closeLightbox}
          >
            {/* Close Button */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-300 z-10"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Navigation Buttons */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateImage("prev");
              }}
              className="absolute left-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-300 z-10"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                navigateImage("next");
              }}
              className="absolute right-6 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-300 z-10"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Main Content */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="max-w-6xl w-full flex flex-col lg:flex-row gap-8 items-center"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Image */}
              <div className="flex-1 max-w-4xl">
                <img
                  src={selectedImage.image}
                  alt={selectedImage.title}
                  className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
                />
              </div>

              {/* Details */}
              <div className="w-full lg:w-80 bg-dark-800/50 backdrop-blur-xl border border-white/10 rounded-xl p-6 glass-effect">
                <div className="mb-4">
                  <span className="px-3 py-1 bg-accent-500 text-white text-xs font-semibold rounded-full">
                    {selectedImage.category.toUpperCase()}
                  </span>
                </div>

                <h3 className="text-2xl font-display font-bold text-white mb-3">
                  {selectedImage.title}
                </h3>

                <p className="text-gray-300 mb-6 leading-relaxed">
                  {selectedImage.description}
                </p>

                <div className="space-y-4 mb-6">
                  {selectedImage.client && (
                    <div>
                      <span className="text-gray-400 text-sm">Client:</span>
                      <p className="text-white font-medium">
                        {selectedImage.client}
                      </p>
                    </div>
                  )}
                  {selectedImage.location && (
                    <div>
                      <span className="text-gray-400 text-sm">Location:</span>
                      <p className="text-white font-medium">
                        {selectedImage.location}
                      </p>
                    </div>
                  )}
                  <div>
                    <span className="text-gray-400 text-sm">Year:</span>
                    <p className="text-white font-medium">
                      {selectedImage.year}
                    </p>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-6 p-4 bg-dark-700/50 rounded-lg">
                  <div className="flex items-center space-x-1 text-accent-400">
                    <Heart className="w-5 h-5" />
                    <span className="font-semibold">{selectedImage.likes}</span>
                    <span className="text-gray-400 text-sm">likes</span>
                  </div>
                  <div className="flex items-center space-x-1 text-blue-400">
                    <Eye className="w-5 h-5" />
                    <span className="font-semibold">{selectedImage.views}</span>
                    <span className="text-gray-400 text-sm">views</span>
                  </div>
                </div>

                <div className="flex space-x-3">
                  <button className="flex-1 px-4 py-3 bg-accent-500 text-white rounded-lg font-semibold hover:bg-accent-600 transition-colors duration-300 flex items-center justify-center space-x-2">
                    <Download className="w-4 h-4" />
                    <span>Download</span>
                  </button>
                  <button className="px-4 py-3 border border-white/20 text-white rounded-lg font-semibold hover:bg-white/10 transition-colors duration-300">
                    <Heart className="w-4 h-4" />
                  </button>
                </div>

                {/* Image Counter */}
                <div className="mt-6 text-center">
                  <span className="text-gray-400 text-sm">
                    {currentIndex + 1} of {filteredItems.length}
                  </span>
                </div>
              </div>
            </motion.div>

            {/* Keyboard Hints */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center space-x-6 text-white/60 text-sm">
              <div className="flex items-center space-x-2">
                <kbd className="px-2 py-1 bg-white/10 rounded text-xs">←</kbd>
                <span>Previous</span>
              </div>
              <div className="flex items-center space-x-2">
                <kbd className="px-2 py-1 bg-white/10 rounded text-xs">→</kbd>
                <span>Next</span>
              </div>
              <div className="flex items-center space-x-2">
                <kbd className="px-2 py-1 bg-white/10 rounded text-xs">ESC</kbd>
                <span>Close</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default PortfolioGallery;
