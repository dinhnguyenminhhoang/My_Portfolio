"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Filter,
  Heart,
  Star,
  Eye,
  ExternalLink,
  Calendar,
  MapPin,
  Award,
  Flower2,
  Sparkles,
  Users,
  Camera,
  X,
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface PortfolioItem {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  client: string;
  date: string;
  location: string;
  tags: string[];
  featured: boolean;
}

const Portfolio = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState("all");
  const [selectedItem, setSelectedItem] = useState<PortfolioItem | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const categories = [
    { id: "all", label: "Tất cả", icon: Flower2 },
    { id: "wedding", label: "Đám cưới", icon: Heart },
    { id: "event", label: "Sự kiện", icon: Star },
    { id: "decoration", label: "Trang trí", icon: Sparkles },
    { id: "bouquet", label: "Hoa cầm tay", icon: Award },
  ];

  const portfolioItems: PortfolioItem[] = [
    {
      id: 1,
      title: "Đám cưới mùa xuân",
      category: "wedding",
      image: "/api/placeholder/400/500",
      description:
        "Trang trí đám cưới với chủ đề hoa anh đào và màu hồng pastel, tạo nên không gian lãng mạn và ấm áp cho ngày trọng đại.",
      client: "Cô dâu An & chú rể Minh",
      date: "15/03/2024",
      location: "Khách sạn Park Hyatt, TP.HCM",
      tags: ["Romantic", "Pastel", "Spring"],
      featured: true,
    },
    {
      id: 2,
      title: "Hoa cầm tay cô dâu",
      category: "bouquet",
      image: "/api/placeholder/400/600",
      description:
        "Hoa cầm tay được thiết kế với hoa hồng đỏ và hoa baby, kết hợp với ribbon lụa cao cấp.",
      client: "Cô dâu Linh",
      date: "22/02/2024",
      location: "Studio Flowries",
      tags: ["Elegant", "Classic", "Red Roses"],
      featured: false,
    },
    {
      id: 3,
      title: "Sự kiện khai trương",
      category: "event",
      image: "/api/placeholder/500/400",
      description:
        "Trang trí khai trương showroom với concept hiện đại, sử dụng hoa lan và cây xanh.",
      client: "Công ty ABC Fashion",
      date: "10/01/2024",
      location: "Quận 1, TP.HCM",
      tags: ["Modern", "Corporate", "Orchids"],
      featured: true,
    },
    {
      id: 4,
      title: "Trang trí tiệc sinh nhật",
      category: "decoration",
      image: "/api/placeholder/600/400",
      description:
        "Không gian sinh nhật với chủ đề vườn hoa cổ tích, phù hợp cho bé gái 5 tuổi.",
      client: "Gia đình chị Mai",
      date: "05/12/2023",
      location: "Nhà riêng, Quận 7",
      tags: ["Fantasy", "Kids", "Colorful"],
      featured: false,
    },
    {
      id: 5,
      title: "Đám cưới bãi biển",
      category: "wedding",
      image: "/api/placeholder/400/500",
      description:
        "Trang trí đám cưới ngoài trời với hoa hướng dương và màu vàng tươi sáng.",
      client: "Cô dâu Thu & chú rể Nam",
      date: "28/11/2023",
      location: "Resort Mũi Né",
      tags: ["Beach", "Sunflowers", "Outdoor"],
      featured: true,
    },
    {
      id: 6,
      title: "Hoa bàn tiệc",
      category: "decoration",
      image: "/api/placeholder/500/300",
      description:
        "Centerpiece cho tiệc tối với hoa mẫu đơn và nến thơm, tạo không gian ấm cúng.",
      client: "Nhà hàng Le Bernardin",
      date: "15/10/2023",
      location: "Quận 3, TP.HCM",
      tags: ["Luxury", "Centerpiece", "Peonies"],
      featured: false,
    },
  ];

  const filteredItems =
    activeFilter === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeFilter);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        ".portfolio-header",
        { y: -50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Filter buttons animation
      gsap.fromTo(
        ".filter-btn",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".filter-container",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Portfolio items animation
      gsap.fromTo(
        ".portfolio-item",
        { y: 80, opacity: 0, scale: 0.8 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    // Re-animate items when filter changes
    if (gridRef.current) {
      gsap.fromTo(
        ".portfolio-item",
        { y: 30, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.5,
          stagger: 0.1,
          ease: "power2.out",
        }
      );
    }
  }, [activeFilter]);

  const handleFilterChange = (filterId: string) => {
    setActiveFilter(filterId);
  };

  const openModal = (item: PortfolioItem) => {
    setSelectedItem(item);
    setIsModalOpen(true);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedItem(null);
    document.body.style.overflow = "unset";
  };

  const getGridClass = (index: number) => {
    // Create masonry-like layout
    const layouts = [
      "md:col-span-2 md:row-span-2", // Large
      "md:col-span-1 md:row-span-1", // Small
      "md:col-span-1 md:row-span-2", // Tall
      "md:col-span-2 md:row-span-1", // Wide
      "md:col-span-1 md:row-span-1", // Small
      "md:col-span-1 md:row-span-1", // Small
    ];
    return layouts[index % layouts.length];
  };

  return (
    <section
      id="portfolio"
      ref={containerRef}
      className="py-20 bg-gradient-to-br from-gray-50 via-rose-50/30 to-pink-50/30 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2280%22%20height%3D%2280%22%20viewBox%3D%220%200%2080%2080%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23f43f5e%22%20fill-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22M40%2020c11.046%200%2020%208.954%2020%2020s-8.954%2020-20%2020-20-8.954-20-20%208.954-20%2020-20z%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="portfolio-header text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Camera className="w-4 h-4" />
            Portfolio
          </div>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-6">
            Tác phẩm của chúng tôi
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Khám phá những tác phẩm nghệ thuật hoa tươi đã được tạo ra với tình
            yêu và sự tỉ mỉ
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="filter-container flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => handleFilterChange(category.id)}
                className={`filter-btn flex items-center gap-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                  activeFilter === category.id
                    ? "bg-gradient-to-r from-rose-500 to-pink-500 text-white shadow-lg scale-105"
                    : "bg-white text-gray-600 hover:bg-rose-50 hover:text-rose-600 shadow-md hover:shadow-lg"
                }`}
              >
                <Icon className="w-4 h-4" />
                {category.label}
              </button>
            );
          })}
        </div>

        {/* Portfolio Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[200px] mb-12"
        >
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              className={`portfolio-item group relative overflow-hidden rounded-2xl cursor-pointer ${getGridClass(
                index
              )}`}
              onClick={() => openModal(item)}
            >
              {/* Image Container */}
              <div className="w-full h-full bg-gradient-to-br from-rose-100 to-pink-200 relative">
                {/* Placeholder for image */}
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <Flower2 className="w-12 h-12 text-rose-400 mx-auto mb-2" />
                    <p className="text-rose-600 text-sm font-medium">
                      {item.title}
                    </p>
                  </div>
                </div>

                {/* Featured Badge */}
                {item.featured && (
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                    <Star className="w-3 h-3" />
                    Featured
                  </div>
                )}

                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                    <p className="text-sm text-gray-200 mb-3 line-clamp-2">
                      {item.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2 text-xs">
                        <Calendar className="w-3 h-3" />
                        {item.date}
                      </div>
                      <div className="flex items-center gap-2">
                        <Eye className="w-4 h-4" />
                        <span className="text-sm">Xem chi tiết</span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Category Tag */}
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
                  {categories.find((cat) => cat.id === item.category)?.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="text-center">
          <button className="group px-8 py-4 bg-gradient-to-r from-rose-500 to-pink-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105">
            <span className="flex items-center gap-2">
              Xem thêm tác phẩm
              <ExternalLink className="w-4 h-4 group-hover:rotate-12 transition-transform" />
            </span>
          </button>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative max-w-4xl w-full max-h-[90vh] overflow-auto bg-white rounded-3xl shadow-2xl">
            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 z-10 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-gray-600 hover:text-gray-900 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Content */}
            <div className="grid md:grid-cols-2 gap-0">
              {/* Image */}
              <div className="aspect-[4/5] md:aspect-auto bg-gradient-to-br from-rose-100 to-pink-200 flex items-center justify-center">
                <div className="text-center">
                  <Flower2 className="w-24 h-24 text-rose-400 mx-auto mb-4" />
                  <p className="text-rose-600 font-medium text-lg">
                    {selectedItem.title}
                  </p>
                </div>
              </div>

              {/* Details */}
              <div className="p-8">
                <div className="mb-6">
                  <div className="flex items-center gap-2 text-rose-600 mb-2">
                    <Flower2 className="w-5 h-5" />
                    <span className="text-sm font-medium uppercase tracking-wide">
                      {
                        categories.find(
                          (cat) => cat.id === selectedItem.category
                        )?.label
                      }
                    </span>
                  </div>
                  <h2 className="text-3xl font-playfair font-bold text-gray-900 mb-4">
                    {selectedItem.title}
                  </h2>
                  <p className="text-gray-600 text-lg leading-relaxed">
                    {selectedItem.description}
                  </p>
                </div>

                {/* Project Details */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <Users className="w-5 h-5 text-gray-400" />
                    <div>
                      <span className="text-sm text-gray-500">Khách hàng:</span>
                      <span className="ml-2 font-medium text-gray-900">
                        {selectedItem.client}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-gray-400" />
                    <div>
                      <span className="text-sm text-gray-500">
                        Ngày thực hiện:
                      </span>
                      <span className="ml-2 font-medium text-gray-900">
                        {selectedItem.date}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-gray-400" />
                    <div>
                      <span className="text-sm text-gray-500">Địa điểm:</span>
                      <span className="ml-2 font-medium text-gray-900">
                        {selectedItem.location}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="mb-8">
                  <h4 className="text-sm font-medium text-gray-500 mb-3">
                    Tags:
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {selectedItem.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-rose-50 text-rose-600 text-sm rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* CTA */}
                <button className="w-full py-4 bg-gradient-to-r from-rose-500 to-pink-500 text-white font-semibold rounded-xl hover:shadow-lg transition-shadow">
                  Đặt dịch vụ tương tự
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 opacity-10">
        <Sparkles className="w-20 h-20 text-rose-400 animate-pulse" />
      </div>
      <div className="absolute bottom-10 right-10 opacity-10">
        <Heart className="w-16 h-16 text-pink-400 animate-bounce" />
      </div>
    </section>
  );
};

export default Portfolio;
