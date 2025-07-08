"use client";

import { gsap } from "gsap";
import { Calendar, ExternalLink, Eye, Heart, MapPin, Star } from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  description: string;
  location: string;
  date: string;
  rating: number;
  image: string;
  tags: string[];
}

const Portfolio: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const filterRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState("all");
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: "Romantic Garden Wedding",
      category: "wedding",
      description:
        "A dreamy outdoor wedding featuring cascading roses and eucalyptus arrangements",
      location: "Napa Valley, CA",
      date: "June 2024",
      rating: 5,
      image: "/images/portfolio/wedding-1.jpg",
      tags: ["roses", "eucalyptus", "outdoor", "romantic"],
    },
    {
      id: 2,
      title: "Corporate Event Centerpieces",
      category: "corporate",
      description:
        "Modern minimalist arrangements for a tech company annual gala",
      location: "San Francisco, CA",
      date: "May 2024",
      rating: 5,
      image: "/images/portfolio/corporate-1.jpg",
      tags: ["modern", "minimalist", "white", "elegant"],
    },
    {
      id: 3,
      title: "Birthday Celebration Bouquet",
      category: "personal",
      description:
        "Vibrant mixed flower bouquet celebrating a milestone birthday",
      location: "Los Angeles, CA",
      date: "April 2024",
      rating: 5,
      image: "/images/portfolio/personal-1.jpg",
      tags: ["colorful", "mixed", "celebration", "vibrant"],
    },
    {
      id: 4,
      title: "Bohemian Wedding Arch",
      category: "wedding",
      description: "Rustic ceremony arch with dried flowers and pampas grass",
      location: "Big Sur, CA",
      date: "March 2024",
      rating: 5,
      image: "/images/portfolio/wedding-2.jpg",
      tags: ["bohemian", "dried flowers", "pampas", "rustic"],
    },
    {
      id: 5,
      title: "Holiday Office Decorations",
      category: "corporate",
      description: "Festive holiday arrangements for corporate headquarters",
      location: "New York, NY",
      date: "December 2023",
      rating: 4,
      image: "/images/portfolio/corporate-2.jpg",
      tags: ["holiday", "festive", "corporate", "seasonal"],
    },
    {
      id: 6,
      title: "Anniversary Surprise",
      category: "personal",
      description: "Elegant rose arrangement for a 25th wedding anniversary",
      location: "Beverly Hills, CA",
      date: "February 2024",
      rating: 5,
      image: "/images/portfolio/personal-2.jpg",
      tags: ["roses", "anniversary", "elegant", "romantic"],
    },
  ];

  const categories = [
    { id: "all", name: "All Work" },
    { id: "wedding", name: "Weddings" },
    { id: "corporate", name: "Corporate" },
    { id: "personal", name: "Personal" },
  ];

  const filteredItems =
    activeFilter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        titleRef.current,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Filter buttons animation
      gsap.fromTo(
        filterRef.current?.children,
        {
          y: 30,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: filterRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Grid items animation
      gsap.fromTo(
        gridRef.current?.children,
        {
          y: 60,
          opacity: 0,
          scale: 0.9,
        },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const handleFilterChange = (filterId: string) => {
    setActiveFilter(filterId);

    // Animate grid items when filter changes
    gsap.fromTo(
      gridRef.current?.children,
      {
        y: 20,
        opacity: 0,
        scale: 0.95,
      },
      {
        y: 0,
        opacity: 1,
        scale: 1,
        duration: 0.6,
        stagger: 0.1,
        ease: "power3.out",
      }
    );
  };

  return (
    <section
      ref={sectionRef}
      id="portfolio"
      className="py-20 bg-gradient-to-br from-gray-50 to-rose-50"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            ref={titleRef}
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-500">
              Portfolio
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Discover a collection of my finest floral arrangements, each one
            crafted with love, attention to detail, and a deep understanding of
            my clients visions.
          </p>
        </div>

        {/* Filter Buttons */}
        <div
          ref={filterRef}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => handleFilterChange(category.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                activeFilter === category.id
                  ? "bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-lg"
                  : "bg-white text-gray-700 hover:bg-rose-50 hover:text-rose-600 border border-gray-200"
              }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Portfolio Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2"
              onMouseEnter={() => setHoveredItem(item.id)}
              onMouseLeave={() => setHoveredItem(null)}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                {/* Placeholder for portfolio image */}
                <div className="w-full h-full bg-gradient-to-br from-rose-200 to-pink-200 flex items-center justify-center">
                  <div className="text-center">
                    <Heart size={32} className="text-rose-500 mx-auto mb-2" />
                    <p className="text-gray-600 text-sm font-medium">
                      {item.title}
                    </p>
                  </div>
                </div>

                {/* Overlay */}
                <div
                  className={`absolute inset-0 bg-black/60 flex items-center justify-center transition-opacity duration-300 ${
                    hoveredItem === item.id ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <div className="flex gap-4">
                    <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-rose-500 hover:bg-rose-500 hover:text-white transition-colors duration-300">
                      <Eye size={20} />
                    </button>
                    <button className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-rose-500 hover:bg-rose-500 hover:text-white transition-colors duration-300">
                      <ExternalLink size={20} />
                    </button>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-white/90 backdrop-blur text-rose-600 text-sm font-semibold rounded-full">
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
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {item.description}
                </p>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <MapPin size={14} />
                    <span>{item.location}</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Calendar size={14} />
                    <span>{item.date}</span>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {item.tags.slice(0, 3).map((tag, index) => (
                    <span
                      key={index}
                      className="px-2 py-1 bg-rose-50 text-rose-600 text-xs rounded-full"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="px-8 py-4 bg-gradient-to-r from-rose-500 to-pink-500 text-white font-semibold rounded-full hover:from-rose-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            View Complete Portfolio
          </button>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
