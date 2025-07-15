"use client";

import React, { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  AnimatePresence,
} from "framer-motion";
import {
  Play,
  Eye,
  Heart,
  Share2,
  Calendar,
  Tag,
  ExternalLink,
  Filter,
  Grid3X3,
  List,
  Star,
  TrendingUp,
  Users,
  Award,
  Sparkles,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";

interface PortfolioItem {
  id: string;
  title: string;
  brand: string;
  category: string;
  type: "livestream" | "video" | "photo" | "campaign";
  description: string;
  image: string;
  stats: {
    views: number;
    likes: number;
    shares: number;
    engagement: number;
  };
  date: string;
  tags: string[];
  featured?: boolean;
  videoUrl?: string;
  liveUrl?: string;
}

const PortfolioSection: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState("all");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const portfolioItems: PortfolioItem[] = [
    {
      id: "1",
      title: "Livestream Skincare Routine",
      brand: "Beauty Brand A",
      category: "beauty",
      type: "livestream",
      description:
        "Livestream giới thiệu quy trình chăm sóc da hàng ngày với sản phẩm mới",
      image: "/api/placeholder/400/300",
      stats: {
        views: 125000,
        likes: 8500,
        shares: 1200,
        engagement: 12.5,
      },
      date: "2024-01-15",
      tags: ["skincare", "beauty", "routine"],
      featured: true,
      liveUrl: "#",
    },
    {
      id: "2",
      title: "Fashion Lookbook Video",
      brand: "Fashion Brand B",
      category: "fashion",
      type: "video",
      description:
        "Video review bộ sưu tập thời trang mùa xuân với nhiều outfit khác nhau",
      image: "/api/placeholder/400/300",
      stats: {
        views: 98000,
        likes: 7200,
        shares: 890,
        engagement: 9.8,
      },
      date: "2024-01-10",
      tags: ["fashion", "lookbook", "style"],
      videoUrl: "#",
    },
    {
      id: "3",
      title: "Food Photography Campaign",
      brand: "Food Brand C",
      category: "food",
      type: "photo",
      description:
        "Bộ ảnh giới thiệu menu mới với concept minimalist và màu sắc tươi sáng",
      image: "/api/placeholder/400/300",
      stats: {
        views: 65000,
        likes: 5800,
        shares: 450,
        engagement: 8.9,
      },
      date: "2024-01-05",
      tags: ["food", "photography", "minimalist"],
    },
    {
      id: "4",
      title: "Tech Product Launch",
      brand: "Tech Brand D",
      category: "tech",
      type: "campaign",
      description:
        "Chiến dịch launching sản phẩm công nghệ mới với unboxing và review chi tiết",
      image: "/api/placeholder/400/300",
      stats: {
        views: 156000,
        likes: 12000,
        shares: 2100,
        engagement: 15.2,
      },
      date: "2024-01-20",
      tags: ["tech", "unboxing", "review"],
      featured: true,
    },
    {
      id: "5",
      title: "Lifestyle Brand Story",
      brand: "Lifestyle Brand E",
      category: "lifestyle",
      type: "video",
      description:
        "Video storytelling về lifestyle brand với focus vào sustainable living",
      image: "/api/placeholder/400/300",
      stats: {
        views: 89000,
        likes: 6700,
        shares: 780,
        engagement: 8.4,
      },
      date: "2024-01-12",
      tags: ["lifestyle", "sustainable", "story"],
    },
    {
      id: "6",
      title: "Beauty Tutorial Series",
      brand: "Beauty Brand F",
      category: "beauty",
      type: "livestream",
      description:
        "Series livestream hướng dẫn makeup với các look từ natural đến glamorous",
      image: "/api/placeholder/400/300",
      stats: {
        views: 198000,
        likes: 15600,
        shares: 2800,
        engagement: 18.7,
      },
      date: "2024-01-25",
      tags: ["makeup", "tutorial", "beauty"],
      featured: true,
      liveUrl: "#",
    },
  ];

  const categories = [
    { id: "all", name: "Tất cả", icon: <Grid3X3 className="w-4 h-4" /> },
    { id: "beauty", name: "Beauty", icon: <Sparkles className="w-4 h-4" /> },
    { id: "fashion", name: "Fashion", icon: <Star className="w-4 h-4" /> },
    { id: "food", name: "Food", icon: <Heart className="w-4 h-4" /> },
    { id: "tech", name: "Tech", icon: <TrendingUp className="w-4 h-4" /> },
    { id: "lifestyle", name: "Lifestyle", icon: <Users className="w-4 h-4" /> },
  ];

  const filteredItems =
    activeFilter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  const formatNumber = (num: number) => {
    if (num >= 1000000) return `${(num / 1000000).toFixed(1)}M`;
    if (num >= 1000) return `${(num / 1000).toFixed(1)}K`;
    return num.toString();
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "livestream":
        return <Play className="w-4 h-4" />;
      case "video":
        return <Play className="w-4 h-4" />;
      case "photo":
        return <Eye className="w-4 h-4" />;
      case "campaign":
        return <Award className="w-4 h-4" />;
      default:
        return <Eye className="w-4 h-4" />;
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "livestream":
        return "from-red-500 to-pink-500";
      case "video":
        return "from-blue-500 to-purple-500";
      case "photo":
        return "from-green-500 to-teal-500";
      case "campaign":
        return "from-yellow-500 to-orange-500";
      default:
        return "from-gray-500 to-gray-600";
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  } as any;

  return (
    <section
      ref={sectionRef}
      id="portfolio"
      className="py-20 md:py-32 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <motion.div
        style={{ y }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-40 left-10 w-32 h-32 border border-purple-500/20 rounded-full animate-spin-slow" />
        <div className="absolute bottom-40 right-10 w-24 h-24 border border-pink-500/20 rounded-full animate-pulse" />
      </motion.div>

      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <div className="px-4 py-2 glass rounded-full border border-white/20">
                <span className="text-purple-400 font-medium flex items-center space-x-2">
                  <Award className="w-4 h-4" />
                  <span>Portfolio</span>
                </span>
              </div>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Dự án của <span className="gradient-text-purple">tôi</span>
            </h2>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Khám phá những dự án tiêu biểu mà tôi đã thực hiện cho các thương
              hiệu, từ livestream đến content creation và marketing campaigns.
            </p>
          </motion.div>

          {/* Filter Controls */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col lg:flex-row items-center justify-between gap-6 mb-12"
          >
            {/* Category Filters */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setActiveFilter(category.id)}
                  className={cn(
                    "flex items-center space-x-2 px-4 py-2 rounded-full transition-all duration-300",
                    activeFilter === category.id
                      ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25"
                      : "glass border border-white/20 text-gray-300 hover:text-white hover:bg-white/10"
                  )}
                >
                  {category.icon}
                  <span className="font-medium">{category.name}</span>
                </button>
              ))}
            </div>

            {/* View Mode Toggle */}
            <div className="flex items-center space-x-2">
              <div className="glass rounded-lg p-1 border border-white/20">
                <button
                  onClick={() => setViewMode("grid")}
                  className={cn(
                    "p-2 rounded-md transition-all duration-300",
                    viewMode === "grid"
                      ? "bg-purple-600 text-white"
                      : "text-gray-400 hover:text-white"
                  )}
                >
                  <Grid3X3 className="w-5 h-5" />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={cn(
                    "p-2 rounded-md transition-all duration-300",
                    viewMode === "list"
                      ? "bg-purple-600 text-white"
                      : "text-gray-400 hover:text-white"
                  )}
                >
                  <List className="w-5 h-5" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Portfolio Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className={cn(
                "grid gap-8",
                viewMode === "grid"
                  ? "md:grid-cols-2 lg:grid-cols-3"
                  : "grid-cols-1 max-w-4xl mx-auto"
              )}
            >
              {filteredItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={cn(
                    "group cursor-pointer",
                    viewMode === "list" && "flex gap-6 items-center"
                  )}
                  onClick={() => setSelectedItem(item)}
                >
                  <div
                    className={cn(
                      "relative overflow-hidden rounded-2xl",
                      viewMode === "grid"
                        ? "aspect-[4/3]"
                        : "w-64 h-48 flex-shrink-0"
                    )}
                  >
                    {/* Featured Badge */}
                    {item.featured && (
                      <div className="absolute top-4 left-4 z-10">
                        <div className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full text-white text-sm font-medium">
                          Featured
                        </div>
                      </div>
                    )}

                    {/* Type Badge */}
                    <div className="absolute top-4 right-4 z-10">
                      <div
                        className={cn(
                          "w-10 h-10 rounded-xl bg-gradient-to-r flex items-center justify-center text-white",
                          getTypeColor(item.type)
                        )}
                      >
                        {getTypeIcon(item.type)}
                      </div>
                    </div>

                    {/* Image */}
                    <div className="w-full h-full bg-gradient-to-br from-purple-900 to-pink-900 flex items-center justify-center relative group-hover:scale-105 transition-transform duration-300">
                      <div className="text-6xl font-bold text-white/20">
                        {item.brand.charAt(0)}
                      </div>

                      {/* Hover Overlay */}
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <div className="flex space-x-3">
                          <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                            <Eye className="w-6 h-6 text-white" />
                          </div>
                          {item.videoUrl && (
                            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                              <Play className="w-6 h-6 text-white" />
                            </div>
                          )}
                          {item.liveUrl && (
                            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                              <ExternalLink className="w-6 h-6 text-white" />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div
                    className={cn(
                      "space-y-4",
                      viewMode === "grid" ? "mt-6" : "flex-1"
                    )}
                  >
                    <div>
                      <div className="flex items-center justify-between mb-2">
                        <span className="text-sm text-purple-400 font-medium">
                          {item.brand}
                        </span>
                        <span className="text-sm text-gray-400">
                          {new Date(item.date).toLocaleDateString("vi-VN")}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                        {item.title}
                      </h3>

                      <p className="text-gray-300 text-sm leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    {/* Stats */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4 text-sm text-gray-400">
                        <div className="flex items-center space-x-1">
                          <Eye className="w-4 h-4" />
                          <span>{formatNumber(item.stats.views)}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Heart className="w-4 h-4" />
                          <span>{formatNumber(item.stats.likes)}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Share2 className="w-4 h-4" />
                          <span>{formatNumber(item.stats.shares)}</span>
                        </div>
                      </div>

                      <div className="text-sm">
                        <span className="text-purple-400 font-medium">
                          {item.stats.engagement}% engagement
                        </span>
                      </div>
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag, idx) => (
                        <span
                          key={idx}
                          className="px-2 py-1 bg-white/10 rounded-full text-xs text-gray-300"
                        >
                          #{tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Load More Button */}
          <motion.div variants={itemVariants} className="text-center mt-16">
            <Button
              variant="outline"
              size="lg"
              icon={<TrendingUp className="w-5 h-5" />}
            >
              Xem thêm dự án
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default PortfolioSection;
