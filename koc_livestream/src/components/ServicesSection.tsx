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
  Users,
  Megaphone,
  Camera,
  Heart,
  TrendingUp,
  Star,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Zap,
  Target,
  Award,
  MessageCircle,
  Palette,
  BarChart3,
  ShoppingBag,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";

interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
  color: string;
  features: string[];
  price: string;
  popular?: boolean;
}

interface ServiceCategory {
  id: string;
  name: string;
  icon: React.ReactNode;
  services: Service[];
}

const ServicesSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("livestream");
  const [hoveredService, setHoveredService] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const serviceCategories: ServiceCategory[] = [
    {
      id: "livestream",
      name: "Livestream",
      icon: <Play className="w-6 h-6" />,
      services: [
        {
          id: "livestream-basic",
          title: "Livestream Cơ bản",
          description: "Livestream giới thiệu sản phẩm với tương tác trực tiếp",
          icon: <Play className="w-8 h-8" />,
          color: "from-purple-500 to-pink-500",
          features: [
            "Livestream 1-2 giờ",
            "Giới thiệu 5-10 sản phẩm",
            "Tương tác trực tiếp với khán giả",
            "Report chi tiết sau livestream",
          ],
          price: "Từ 5.000.000 VNĐ",
        },
        {
          id: "livestream-premium",
          title: "Livestream Premium",
          description: "Livestream chuyên nghiệp với setup cao cấp",
          icon: <Star className="w-8 h-8" />,
          color: "from-yellow-500 to-orange-500",
          features: [
            "Livestream 2-3 giờ",
            "Setup chuyên nghiệp",
            "Đa nền tảng (Facebook, TikTok, Instagram)",
            "Kịch bản được chuẩn bị kỹ lưỡng",
            "Quà tặng và game tương tác",
          ],
          price: "Từ 10.000.000 VNĐ",
          popular: true,
        },
        {
          id: "livestream-series",
          title: "Livestream Series",
          description: "Chuỗi livestream dài hạn cho chiến dịch",
          icon: <TrendingUp className="w-8 h-8" />,
          color: "from-blue-500 to-cyan-500",
          features: [
            "Chuỗi 5-10 livestream",
            "Chiến lược nội dung dài hạn",
            "Xây dựng cộng đồng khách hàng",
            "Theo dõi và tối ưu hóa liên tục",
          ],
          price: "Liên hệ để báo giá",
        },
      ],
    },
    {
      id: "content",
      name: "Nội dung",
      icon: <Camera className="w-6 h-6" />,
      services: [
        {
          id: "content-video",
          title: "Video Content",
          description: "Tạo video review và unboxing chuyên nghiệp",
          icon: <Camera className="w-8 h-8" />,
          color: "from-green-500 to-emerald-500",
          features: [
            "Video review chi tiết",
            "Unboxing experience",
            "Chất lượng 4K",
            "Editing chuyên nghiệp",
          ],
          price: "Từ 3.000.000 VNĐ",
        },
        {
          id: "content-photo",
          title: "Photo Content",
          description: "Bộ ảnh sản phẩm và lifestyle đẹp mắt",
          icon: <Palette className="w-8 h-8" />,
          color: "from-pink-500 to-rose-500",
          features: [
            "20-30 ảnh chất lượng cao",
            "Nhiều concept khác nhau",
            "Retouch chuyên nghiệp",
            "Bản quyền sử dụng",
          ],
          price: "Từ 2.000.000 VNĐ",
        },
        {
          id: "content-story",
          title: "Story Content",
          description: "Nội dung story hàng ngày cho social media",
          icon: <MessageCircle className="w-8 h-8" />,
          color: "from-indigo-500 to-purple-500",
          features: [
            "5-10 story posts/ngày",
            "Nội dung đa dạng",
            "Tương tác cao",
            "Tracking hiệu quả",
          ],
          price: "Từ 1.000.000 VNĐ/tháng",
        },
      ],
    },
    {
      id: "marketing",
      name: "Marketing",
      icon: <Megaphone className="w-6 h-6" />,
      services: [
        {
          id: "marketing-campaign",
          title: "Campaign Marketing",
          description: "Thiết kế và thực hiện chiến dịch marketing tổng thể",
          icon: <Target className="w-8 h-8" />,
          color: "from-red-500 to-pink-500",
          features: [
            "Chiến lược marketing tổng thể",
            "Đa kênh truyền thông",
            "Theo dõi ROI chi tiết",
            "Báo cáo và tối ưu hóa",
          ],
          price: "Từ 15.000.000 VNĐ",
        },
        {
          id: "marketing-brand",
          title: "Brand Ambassador",
          description: "Đại diện thương hiệu dài hạn",
          icon: <Award className="w-8 h-8" />,
          color: "from-yellow-500 to-orange-500",
          features: [
            "Hợp tác dài hạn 6-12 tháng",
            "Xuất hiện tại sự kiện",
            "Nội dung thường xuyên",
            "Xây dựng brand awareness",
          ],
          price: "Liên hệ để báo giá",
          popular: true,
        },
        {
          id: "marketing-analytics",
          title: "Analytics & Insights",
          description: "Phân tích dữ liệu và đưa ra insights chiến lược",
          icon: <BarChart3 className="w-8 h-8" />,
          color: "from-blue-500 to-indigo-500",
          features: [
            "Phân tích dữ liệu chi tiết",
            "Insight về target audience",
            "Báo cáo hiệu quả chiến dịch",
            "Đề xuất tối ưu hóa",
          ],
          price: "Từ 5.000.000 VNĐ",
        },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
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

  const activeServices =
    serviceCategories.find((cat) => cat.id === activeCategory)?.services || [];

  return (
    <section
      ref={sectionRef}
      id="services"
      className="py-20 md:py-32 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <motion.div
        style={{ y }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-40 right-10 w-32 h-32 border border-purple-500/20 rounded-full animate-spin-slow" />
        <div className="absolute bottom-40 left-10 w-24 h-24 border border-pink-500/20 rounded-full animate-pulse" />
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
                  <Sparkles className="w-4 h-4" />
                  <span>Dịch vụ</span>
                </span>
              </div>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Dịch vụ của <span className="gradient-text-purple">tôi</span>
            </h2>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tôi cung cấp đa dạng các dịch vụ KOC chuyên nghiệp, từ livestream
              đến tạo nội dung và marketing tổng thể.
            </p>
          </motion.div>

          {/* Category Tabs */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {serviceCategories.map((category) => (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={cn(
                  "flex items-center space-x-3 px-6 py-3 rounded-full transition-all duration-300",
                  activeCategory === category.id
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg shadow-purple-500/25"
                    : "glass border border-white/20 text-gray-300 hover:text-white hover:bg-white/10"
                )}
              >
                <div
                  className={cn(
                    "transition-transform duration-300",
                    activeCategory === category.id ? "scale-110" : "scale-100"
                  )}
                >
                  {category.icon}
                </div>
                <span className="font-medium">{category.name}</span>
              </button>
            ))}
          </motion.div>

          {/* Services Grid */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {activeServices.map((service, index) => (
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 60 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative group"
                  onHoverStart={() => setHoveredService(service.id)}
                  onHoverEnd={() => setHoveredService(null)}
                >
                  <div
                    className={cn(
                      "relative glass p-8 rounded-2xl border border-white/20 transition-all duration-300 hover-lift h-full",
                      service.popular && "ring-2 ring-purple-500/50"
                    )}
                  >
                    {/* Popular Badge */}
                    {service.popular && (
                      <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                        <div className="px-3 py-1 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full text-white text-sm font-medium">
                          Phổ biến
                        </div>
                      </div>
                    )}

                    {/* Service Icon */}
                    <div
                      className={cn(
                        "w-16 h-16 rounded-2xl bg-gradient-to-r mb-6 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300",
                        service.color
                      )}
                    >
                      {service.icon}
                    </div>

                    {/* Service Info */}
                    <div className="mb-6">
                      <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-gray-300 leading-relaxed">
                        {service.description}
                      </p>
                    </div>

                    {/* Features */}
                    <div className="space-y-3 mb-6">
                      {service.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-3">
                          <div className="w-5 h-5 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                            <CheckCircle className="w-3 h-3 text-white" />
                          </div>
                          <span className="text-gray-300 text-sm">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>

                    {/* Price */}
                    <div className="mb-6">
                      <div className="text-2xl font-bold text-white">
                        {service.price}
                      </div>
                    </div>

                    {/* CTA Button */}
                    <Button
                      variant={service.popular ? "gradient" : "outline"}
                      size="md"
                      fullWidth
                      icon={<ArrowRight className="w-4 h-4" />}
                      iconPosition="right"
                    >
                      Tìm hiểu thêm
                    </Button>

                    {/* Hover Effect */}
                    <div
                      className={cn(
                        "absolute inset-0 rounded-2xl transition-opacity duration-300 pointer-events-none",
                        `bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-5`
                      )}
                    />
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Call to Action */}
          <motion.div variants={itemVariants} className="text-center mt-16">
            <div className="glass p-8 rounded-2xl border border-white/20 max-w-2xl mx-auto">
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                  <Zap className="w-8 h-8 text-white" />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                Sẵn sàng bắt đầu dự án?
              </h3>

              <p className="text-gray-300 mb-6">
                Liên hệ với tôi ngay để trao đổi về dự án và nhận báo giá chi
                tiết. Tôi sẽ tư vấn giải pháp phù hợp nhất cho thương hiệu của
                bạn.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  variant="gradient"
                  size="lg"
                  icon={<MessageCircle className="w-5 h-5" />}
                  glow
                >
                  Tư vấn miễn phí
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  icon={<ShoppingBag className="w-5 h-5" />}
                >
                  Xem bảng giá
                </Button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
