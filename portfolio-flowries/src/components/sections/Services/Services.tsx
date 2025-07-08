"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Heart,
  Star,
  Crown,
  Flower2,
  Gift,
  Calendar,
  Clock,
  CheckCircle,
  Sparkles,
  Users,
  MapPin,
  Phone,
  ArrowRight,
  Award,
  Palette,
  Camera,
  Truck,
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface Service {
  id: number;
  name: string;
  description: string;
  price: string;
  duration: string;
  icon: any;
  features: string[];
  popular: boolean;
  color: string;
  image: string;
}

interface Process {
  step: number;
  title: string;
  description: string;
  icon: any;
  color: string;
}

const Services = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const servicesGridRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const services: Service[] = [
    {
      id: 1,
      name: "Đám cưới cổ điển",
      description:
        "Trang trí đám cưới với phong cách cổ điển, lãng mạn sử dụng hoa hồng và màu sắc pastel nhẹ nhàng.",
      price: "15.000.000 - 30.000.000 VNĐ",
      duration: "8-12 giờ",
      icon: Heart,
      features: [
        "Tư vấn concept và màu sắc",
        "Hoa cưới cô dâu + 6 phù dâu",
        "Trang trí sân khấu chính",
        "Centerpiece cho 10-15 bàn",
        "Backdrop chụp ảnh",
        "Setup và dọn dẹp",
      ],
      popular: true,
      color: "rose",
      image: "/api/placeholder/400/300",
    },
    {
      id: 2,
      name: "Sự kiện doanh nghiệp",
      description:
        "Trang trí các sự kiện corporate với thiết kế hiện đại, chuyên nghiệp và ấn tượng.",
      price: "8.000.000 - 20.000.000 VNĐ",
      duration: "4-8 giờ",
      icon: Star,
      features: [
        "Thiết kế theo thương hiệu",
        "Trang trí khu vực đón khách",
        "Backdrop sân khấu",
        "Hoa bàn VIP",
        "Cổng hoa chào mừng",
        "Hỗ trợ kỹ thuật",
      ],
      popular: false,
      color: "blue",
      image: "/api/placeholder/400/300",
    },
    {
      id: 3,
      name: "Sinh nhật VIP",
      description:
        "Trang trí sinh nhật đặc biệt với concept độc đáo, phù hợp cho mọi lứa tuổi từ trẻ em đến người lớn.",
      price: "3.000.000 - 10.000.000 VNĐ",
      duration: "3-5 giờ",
      icon: Gift,
      features: [
        "Concept theo sở thích",
        "Backdrop sinh nhật",
        "Hoa bàn tiệc",
        "Trang trí khu vực quà",
        "Photo booth setup",
        "Balloon arrangement",
      ],
      popular: false,
      color: "purple",
      image: "/api/placeholder/400/300",
    },
    {
      id: 4,
      name: "Hoa cầm tay cô dâu",
      description:
        "Thiết kế hoa cầm tay theo yêu cầu với các loại hoa cao cấp và phụ kiện sang trọng.",
      price: "1.500.000 - 5.000.000 VNĐ",
      duration: "2-3 giờ",
      icon: Flower2,
      features: [
        "Tư vấn thiết kế",
        "Hoa tươi cao cấp",
        "Ribbon lụa imported",
        "Bảo quản 24h",
        "Giao hàng tận nơi",
        "Backup bouquet",
      ],
      popular: false,
      color: "pink",
      image: "/api/placeholder/300/400",
    },
    {
      id: 5,
      name: "Trang trí luxury",
      description:
        "Dịch vụ cao cấp với hoa nhập khẩu, thiết kế độc quyền cho các sự kiện đẳng cấp.",
      price: "50.000.000+ VNĐ",
      duration: "12-24 giờ",
      icon: Crown,
      features: [
        "Hoa nhập khẩu độc quyền",
        "Thiết kế 3D concept",
        "Team 10+ florist",
        "Lighting system",
        "Premium accessories",
        "24/7 support",
      ],
      popular: false,
      color: "gold",
      image: "/api/placeholder/500/400",
    },
    {
      id: 6,
      name: "Workshop cắm hoa",
      description:
        "Khóa học cắm hoa cơ bản đến nâng cao, phù hợp cho người mới bắt đầu và chuyên nghiệp.",
      price: "500.000 - 2.000.000 VNĐ",
      duration: "2-4 giờ",
      icon: Award,
      features: [
        "Giáo trình chuyên nghiệp",
        "Dụng cụ cắm hoa",
        "Hoa tươi thực hành",
        "Certificate hoàn thành",
        "Tài liệu take-home",
        "Follow-up support",
      ],
      popular: false,
      color: "green",
      image: "/api/placeholder/400/300",
    },
  ];

  const processSteps: Process[] = [
    {
      step: 1,
      title: "Tư vấn & Lên concept",
      description:
        "Gặp gỡ trao đổi ý tưởng, hiểu nhu cầu và lên concept chi tiết cho sự kiện của bạn.",
      icon: Users,
      color: "rose",
    },
    {
      step: 2,
      title: "Thiết kế 3D & Báo giá",
      description:
        "Tạo mô hình 3D trực quan và báo giá chi tiết, minh bạch cho từng hạng mục.",
      icon: Palette,
      color: "blue",
    },
    {
      step: 3,
      title: "Chuẩn bị & Sản xuất",
      description:
        "Đặt hàng hoa tươi, chuẩn bị vật liệu và sản xuất các elements theo thiết kế.",
      icon: Flower2,
      color: "green",
    },
    {
      step: 4,
      title: "Setup & Hoàn thiện",
      description:
        "Thi công setup tại địa điểm, hoàn thiện các chi tiết và kiểm tra chất lượng.",
      icon: Award,
      color: "purple",
    },
    {
      step: 5,
      title: "Bàn giao & Hỗ trợ",
      description:
        "Bàn giao công trình, hướng dẫn bảo quản và hỗ trợ trong suốt sự kiện.",
      icon: CheckCircle,
      color: "emerald",
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header animation
      gsap.fromTo(
        ".services-header",
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

      // Services cards animation
      gsap.fromTo(
        ".service-card",
        { y: 100, opacity: 0, scale: 0.8 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: servicesGridRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Process steps animation
      gsap.fromTo(
        ".process-step",
        { x: -80, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: processRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Process line animation
      gsap.fromTo(
        ".process-line",
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: processRef.current,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const getColorClasses = (color: string) => {
    const colorMap = {
      rose: {
        bg: "from-rose-400 to-rose-600",
        text: "text-rose-600",
        border: "border-rose-200",
        light: "bg-rose-50",
        hover: "hover:bg-rose-50",
      },
      blue: {
        bg: "from-blue-400 to-blue-600",
        text: "text-blue-600",
        border: "border-blue-200",
        light: "bg-blue-50",
        hover: "hover:bg-blue-50",
      },
      purple: {
        bg: "from-purple-400 to-purple-600",
        text: "text-purple-600",
        border: "border-purple-200",
        light: "bg-purple-50",
        hover: "hover:bg-purple-50",
      },
      pink: {
        bg: "from-pink-400 to-pink-600",
        text: "text-pink-600",
        border: "border-pink-200",
        light: "bg-pink-50",
        hover: "hover:bg-pink-50",
      },
      gold: {
        bg: "from-yellow-400 to-orange-500",
        text: "text-yellow-600",
        border: "border-yellow-200",
        light: "bg-yellow-50",
        hover: "hover:bg-yellow-50",
      },
      green: {
        bg: "from-green-400 to-green-600",
        text: "text-green-600",
        border: "border-green-200",
        light: "bg-green-50",
        hover: "hover:bg-green-50",
      },
      emerald: {
        bg: "from-emerald-400 to-emerald-600",
        text: "text-emerald-600",
        border: "border-emerald-200",
        light: "bg-emerald-50",
        hover: "hover:bg-emerald-50",
      },
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.rose;
  };

  return (
    <section
      id="services"
      ref={containerRef}
      className="py-20 bg-gradient-to-br from-white via-gray-50 to-rose-50/30 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%22120%22%20height%3D%22120%22%20viewBox%3D%220%200%20120%20120%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cpath%20d%3D%22M60%2030l30%2030-30%2030-30-30z%22%20fill%3D%22%23f43f5e%22%20fill-opacity%3D%220.1%22/%3E%3C/svg%3E')]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="services-header text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Sparkles className="w-4 h-4" />
            Dịch vụ
          </div>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-6">
            Dịch vụ chuyên nghiệp
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Từ đám cưới lãng mạn đến sự kiện doanh nghiệp, chúng tôi mang đến
            những dịch vụ trang trí hoa tươi đẳng cấp
          </p>
        </div>

        {/* Services Grid */}
        <div
          ref={servicesGridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20"
        >
          {services.map((service, index) => {
            const Icon = service.icon;
            const colors = getColorClasses(service.color);

            return (
              <div
                key={service.id}
                className="service-card group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden cursor-pointer transform hover:-translate-y-2"
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
              >
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute top-4 right-4 z-10 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center gap-1">
                    <Crown className="w-3 h-3" />
                    Phổ biến
                  </div>
                )}

                {/* Image */}
                <div className="h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center relative overflow-hidden">
                  <div className="text-center">
                    <Icon className={`w-12 h-12 ${colors.text} mx-auto mb-2`} />
                    <p className={`${colors.text} text-sm font-medium`}>
                      {service.name}
                    </p>
                  </div>

                  {/* Hover Overlay */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${colors.bg} opacity-0 group-hover:opacity-90 transition-opacity duration-300 flex items-center justify-center`}
                  >
                    <div className="text-white text-center">
                      <Icon className="w-16 h-16 mx-auto mb-3" />
                      <p className="font-semibold">Xem chi tiết</p>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-xl font-bold text-gray-900">
                      {service.name}
                    </h3>
                    <div
                      className={`w-10 h-10 rounded-full bg-gradient-to-br ${colors.bg} flex items-center justify-center`}
                    >
                      <Icon className="w-5 h-5 text-white" />
                    </div>
                  </div>

                  <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                    {service.description}
                  </p>

                  {/* Price & Duration */}
                  <div className="flex items-center justify-between mb-4 text-sm">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-gray-400" />
                      <span className="text-gray-600">{service.duration}</span>
                    </div>
                    <div className={`${colors.text} font-bold text-lg`}>
                      {service.price.split(" ")[0]}
                    </div>
                  </div>

                  {/* Features */}
                  <div className="space-y-2 mb-6">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-sm"
                      >
                        <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                        <span className="text-gray-600">{feature}</span>
                      </div>
                    ))}
                    {service.features.length > 3 && (
                      <div className="text-sm text-gray-500">
                        +{service.features.length - 3} tính năng khác
                      </div>
                    )}
                  </div>

                  {/* CTA Button */}
                  <button
                    className={`w-full py-3 bg-gradient-to-r ${colors.bg} text-white font-semibold rounded-xl transition-all duration-300 transform group-hover:scale-105 flex items-center justify-center gap-2`}
                  >
                    Đặt dịch vụ
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Process Section */}
        <div ref={processRef} className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-playfair font-bold text-gray-900 mb-4">
              Quy trình làm việc
            </h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Chúng tôi có quy trình làm việc chuyên nghiệp, đảm bảo chất lượng
              và tiến độ cho mọi dự án
            </p>
          </div>

          <div className="relative">
            {/* Process Line */}
            <div className="absolute left-8 top-16 bottom-16 w-0.5 bg-gradient-to-b from-rose-400 to-pink-500 process-line origin-top"></div>

            <div className="space-y-8">
              {processSteps.map((step, index) => {
                const Icon = step.icon;
                const colors = getColorClasses(step.color);

                return (
                  <div
                    key={step.step}
                    className="process-step relative flex items-start gap-6"
                  >
                    {/* Step Icon */}
                    <div
                      className={`relative z-10 w-16 h-16 bg-gradient-to-br ${colors.bg} rounded-full flex items-center justify-center text-white shadow-lg`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>

                    {/* Step Content */}
                    <div className="flex-1 bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                      <div className="flex items-center gap-4 mb-3">
                        <span className={`text-2xl font-bold ${colors.text}`}>
                          0{step.step}
                        </span>
                        <h4 className="text-xl font-semibold text-gray-900">
                          {step.title}
                        </h4>
                      </div>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Contact CTA */}
        <div className="text-center bg-gradient-to-r from-rose-500 to-pink-500 rounded-3xl p-12 text-white">
          <h3 className="text-3xl font-playfair font-bold mb-4">
            Sẵn sàng tạo nên khoảnh khắc đặc biệt?
          </h3>
          <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
            Liên hệ với chúng tôi ngay hôm nay để được tư vấn miễn phí và nhận
            báo giá chi tiết
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-white text-rose-600 font-semibold rounded-full hover:bg-gray-50 transition-colors flex items-center gap-2 justify-center">
              <Phone className="w-5 h-5" />
              Gọi ngay: 0123.456.789
            </button>
            <button className="px-8 py-4 border-2 border-white text-white font-semibold rounded-full hover:bg-white hover:text-rose-600 transition-colors flex items-center gap-2 justify-center">
              <Calendar className="w-5 h-5" />
              Đặt lịch tư vấn
            </button>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 opacity-10">
        <Flower2 className="w-32 h-32 text-rose-400 animate-pulse" />
      </div>
      <div className="absolute bottom-20 left-10 opacity-10">
        <Gift className="w-24 h-24 text-pink-400 animate-bounce" />
      </div>
    </section>
  );
};

export default Services;
