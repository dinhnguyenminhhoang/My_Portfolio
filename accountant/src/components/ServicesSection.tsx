"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Calculator,
  TrendingUp,
  Shield,
  Users,
  Award,
  FileText,
  PieChart,
  BarChart3,
  Briefcase,
  CheckCircle,
  ArrowRight,
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const ServicesSection = () => {
  const servicesRef = useRef(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section title animation
      gsap.from(".services-title", {
        scrollTrigger: {
          trigger: servicesRef.current,
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none reverse",
        },
        y: 80,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      });

      gsap.from(".services-subtitle", {
        scrollTrigger: {
          trigger: servicesRef.current,
          start: "top 75%",
          end: "top 45%",
          toggleActions: "play none none reverse",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        delay: 0.2,
        ease: "power2.out",
      });

      // Service cards animation
      gsap.from(".service-card", {
        scrollTrigger: {
          trigger: ".services-grid",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
        y: 100,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
      });

      // Floating icons animation
      gsap.from(".service-icon", {
        scrollTrigger: {
          trigger: ".services-grid",
          start: "top 70%",
          end: "bottom 30%",
          toggleActions: "play none none reverse",
        },
        scale: 0,
        rotation: 180,
        duration: 0.6,
        stagger: 0.1,
        ease: "back.out(1.7)",
        delay: 0.3,
      });

      // Continuous hover animations for cards
      cardRefs.current.forEach((card) => {
        if (card) {
          const icon = card.querySelector(".service-icon");
          const gradient = card.querySelector(".card-gradient");

          card.addEventListener("mouseenter", () => {
            gsap.to(icon, {
              scale: 1.1,
              rotation: 10,
              duration: 0.3,
              ease: "power2.out",
            });
            gsap.to(gradient, {
              opacity: 0.1,
              duration: 0.3,
              ease: "power2.out",
            });
          });

          card.addEventListener("mouseleave", () => {
            gsap.to(icon, {
              scale: 1,
              rotation: 0,
              duration: 0.3,
              ease: "power2.out",
            });
            gsap.to(gradient, {
              opacity: 0,
              duration: 0.3,
              ease: "power2.out",
            });
          });
        }
      });
    }, servicesRef);

    return () => ctx.revert();
  }, []);

  const addToCardRefs = (el: HTMLDivElement | null) => {
    if (el && !cardRefs.current.includes(el)) {
      cardRefs.current.push(el);
    }
  };

  const services = [
    {
      icon: Calculator,
      title: "Kế Toán Doanh Nghiệp",
      description:
        "Quản lý sổ sách kế toán chuyên nghiệp, chính xác và tuân thủ pháp luật. Đảm bảo tính minh bạch trong mọi giao dịch tài chính.",
      color: "from-blue-500 to-indigo-500",
      bgColor: "from-blue-500/10 to-indigo-500/10",
      features: ["Sổ sách kế toán", "Báo cáo tài chính", "Quản lý chi phí"],
      price: "Từ 2.5 triệu/tháng",
    },
    {
      icon: TrendingUp,
      title: "Phân Tích Tài Chính",
      description:
        "Phân tích hiệu quả kinh doanh và đưa ra những báo cáo chi tiết giúp doanh nghiệp đưa ra quyết định đúng đắn.",
      color: "from-emerald-500 to-teal-500",
      bgColor: "from-emerald-500/10 to-teal-500/10",
      features: ["Phân tích KPI", "Dự báo tài chính", "Tối ưu lợi nhuận"],
      price: "Từ 3.5 triệu/tháng",
    },
    {
      icon: Shield,
      title: "Kiểm Toán Nội Bộ",
      description:
        "Đảm bảo tính minh bạch và tuân thủ trong mọi hoạt động tài chính. Phát hiện và ngăn ngừa rủi ro tài chính.",
      color: "from-purple-500 to-pink-500",
      bgColor: "from-purple-500/10 to-pink-500/10",
      features: [
        "Kiểm toán quy trình",
        "Đánh giá rủi ro",
        "Tuân thủ pháp luật",
      ],
      price: "Từ 5.0 triệu/lần",
    },
    {
      icon: Users,
      title: "Tư Vấn Thuế",
      description:
        "Hỗ trợ tối ưu hóa thuế và tuân thủ các quy định pháp luật về thuế. Giảm thiểu chi phí thuế hợp pháp.",
      color: "from-orange-500 to-red-500",
      bgColor: "from-orange-500/10 to-red-500/10",
      features: ["Tối ưu thuế", "Khai báo thuế", "Tư vấn pháp lý"],
      price: "Từ 1.8 triệu/tháng",
    },
    {
      icon: Award,
      title: "Đào Tạo Kế Toán",
      description:
        "Chương trình đào tạo chuyên nghiệp cho đội ngũ kế toán doanh nghiệp. Nâng cao kỹ năng và kiến thức chuyên môn.",
      color: "from-cyan-500 to-blue-500",
      bgColor: "from-cyan-500/10 to-blue-500/10",
      features: [
        "Khóa học cơ bản",
        "Đào tạo nâng cao",
        "Chứng chỉ nghề nghiệp",
      ],
      price: "Từ 8.0 triệu/khóa",
    },
    {
      icon: FileText,
      title: "Báo Cáo Tài Chính",
      description:
        "Lập báo cáo tài chính chuẩn xác và đúng hạn theo quy định. Đảm bảo tính chính xác và tuân thủ chuẩn mực.",
      color: "from-violet-500 to-purple-500",
      bgColor: "from-violet-500/10 to-purple-500/10",
      features: ["Báo cáo định kỳ", "Báo cáo chuyên biệt", "Phân tích chỉ số"],
      price: "Từ 2.2 triệu/tháng",
    },
    {
      icon: PieChart,
      title: "Quản Lý Ngân Sách",
      description:
        "Lập kế hoạch và quản lý ngân sách hiệu quả. Theo dõi và kiểm soát chi tiêu theo từng bộ phận.",
      color: "from-rose-500 to-pink-500",
      bgColor: "from-rose-500/10 to-pink-500/10",
      features: ["Lập ngân sách", "Theo dõi chi tiêu", "Báo cáo ngân sách"],
      price: "Từ 2.8 triệu/tháng",
    },
    {
      icon: Briefcase,
      title: "Tư Vấn Đầu Tư",
      description:
        "Đánh giá và tư vấn các cơ hội đầu tư. Phân tích khả năng sinh lời và rủi ro của các dự án đầu tư.",
      color: "from-amber-500 to-orange-500",
      bgColor: "from-amber-500/10 to-orange-500/10",
      features: ["Phân tích đầu tư", "Đánh giá rủi ro", "Kế hoạch tài chính"],
      price: "Từ 4.5 triệu/dự án",
    },
    {
      icon: BarChart3,
      title: "Quản Lý Dòng Tiền",
      description:
        "Theo dõi và dự báo dòng tiền. Đảm bảo thanh khoản và tối ưu hóa việc sử dụng vốn.",
      color: "from-green-500 to-emerald-500",
      bgColor: "from-green-500/10 to-emerald-500/10",
      features: ["Dự báo dòng tiền", "Quản lý thanh khoản", "Tối ưu vốn"],
      price: "Từ 3.2 triệu/tháng",
    },
  ];

  return (
    <section
      id="services"
      ref={servicesRef}
      className="py-20 px-4 relative bg-gradient-to-b from-white to-gray-50"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='0.4'%3E%3Ccircle cx='7' cy='7' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="services-title">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
              Dịch Vụ{" "}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Chuyên Nghiệp
              </span>
            </h2>

            {/* Decorative elements */}
            <div className="flex items-center justify-center mt-4 mb-6">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full"></div>
                <div className="w-3 h-3 bg-blue-600 rounded-full"></div>
                <div className="w-12 h-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full"></div>
                <div className="w-3 h-3 bg-purple-600 rounded-full"></div>
                <div className="w-8 h-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full"></div>
              </div>
            </div>
          </div>

          <p className="services-subtitle text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Chúng tôi cung cấp đầy đủ các dịch vụ kế toán từ cơ bản đến nâng
            cao, giúp doanh nghiệp vận hành hiệu quả và phát triển bền vững.
          </p>
        </div>

        {/* Services Grid */}
        <div className="services-grid grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              ref={addToCardRefs}
              className="service-card group relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 overflow-hidden"
            >
              {/* Card gradient overlay */}
              <div
                className={`card-gradient absolute inset-0 bg-gradient-to-br ${service.bgColor} opacity-0 transition-opacity duration-300`}
              ></div>

              {/* Service Icon */}
              <div className="relative z-10">
                <div
                  className={`service-icon w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                >
                  <service.icon className="w-8 h-8 text-white" />
                </div>

                {/* Service Title */}
                <h3 className="text-xl md:text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {service.title}
                </h3>

                {/* Service Description */}
                <p className="text-gray-600 leading-relaxed mb-6 text-sm md:text-base">
                  {service.description}
                </p>

                {/* Features List */}
                <div className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <div
                      key={featureIndex}
                      className="flex items-center space-x-2 text-sm text-gray-600"
                    >
                      <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Price */}
                <div className="flex items-center justify-between">
                  <div className="text-lg font-bold text-gray-800">
                    {service.price}
                  </div>
                  <button className="group/btn flex items-center space-x-2 text-blue-600 font-medium hover:text-blue-700 transition-colors duration-200">
                    <span>Chi tiết</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform duration-200" />
                  </button>
                </div>
              </div>

              {/* Hover effect border */}
              <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10 blur-xl"></div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-indigo-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Bạn cần tư vấn dịch vụ phù hợp?
              </h3>
              <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
                Đội ngũ chuyên gia của chúng tôi sẵn sàng tư vấn miễn phí để
                giúp bạn lựa chọn gói dịch vụ phù hợp nhất với nhu cầu doanh
                nghiệp.
              </p>
              <button className="px-8 py-4 bg-white text-blue-600 rounded-2xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                Tư vấn miễn phí ngay
              </button>
            </div>

            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
            <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
