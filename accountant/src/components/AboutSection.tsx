"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Users,
  Award,
  Target,
  TrendingUp,
  CheckCircle2,
  Star,
  Clock,
  Shield,
  Heart,
  Lightbulb,
  Zap,
  Globe,
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const AboutSection = () => {
  const aboutRef = useRef(null);
  const statsRef = useRef(null);
  const valuesRef = useRef(null);
  const teamRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Main content animation
      gsap.from(".about-content", {
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 70%",
          end: "top 30%",
          toggleActions: "play none none reverse",
        },
        x: -100,
        opacity: 0,
        duration: 1.2,
        ease: "power2.out",
      });

      gsap.from(".about-image", {
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 70%",
          end: "top 30%",
          toggleActions: "play none none reverse",
        },
        x: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power2.out",
      });

      // Stats animation
      gsap.from(".stat-item", {
        scrollTrigger: {
          trigger: statsRef.current,
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none reverse",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
      });

      // Values animation
      gsap.from(".value-card", {
        scrollTrigger: {
          trigger: valuesRef.current,
          start: "top 80%",
          end: "top 40%",
          toggleActions: "play none none reverse",
        },
        y: 80,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
      });

      // Team animation
      gsap.from(".team-member", {
        scrollTrigger: {
          trigger: teamRef.current,
          start: "top 80%",
          end: "top 40%",
          toggleActions: "play none none reverse",
        },
        scale: 0.8,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "back.out(1.7)",
      });

      // Floating elements
      gsap.to(".floating-circle-1", {
        y: -30,
        x: 20,
        duration: 6,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });

      gsap.to(".floating-circle-2", {
        y: 25,
        x: -15,
        duration: 8,
        ease: "sine.inOut",
        yoyo: true,
        repeat: -1,
      });

      // Counter animation
      const counters = document.querySelectorAll(".counter");
      counters.forEach((counter) => {
        const target = parseInt(counter.getAttribute("data-target") || "0");
        const obj = { value: 0 };

        gsap.to(obj, {
          scrollTrigger: {
            trigger: counter,
            start: "top 80%",
            toggleActions: "play none none none",
          },
          value: target,
          duration: 2,
          ease: "power2.out",
          onUpdate: () => {
            counter.textContent = Math.round(obj.value).toString();
          },
        });
      });
    }, aboutRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    {
      icon: Users,
      number: 500,
      suffix: "+",
      label: "Khách hàng tin tưởng",
      color: "from-blue-500 to-indigo-500",
    },
    {
      icon: Award,
      number: 15,
      suffix: "+",
      label: "Năm kinh nghiệm",
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: Target,
      number: 99,
      suffix: "%",
      label: "Độ hài lòng",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: TrendingUp,
      number: 24,
      suffix: "/7",
      label: "Hỗ trợ khách hàng",
      color: "from-orange-500 to-red-500",
    },
  ];

  const values = [
    {
      icon: Shield,
      title: "Chính Xác",
      description:
        "Đảm bảo tính chính xác tuyệt đối trong mọi báo cáo và giao dịch tài chính.",
      color: "from-blue-500 to-indigo-500",
    },
    {
      icon: Heart,
      title: "Tận Tâm",
      description:
        "Phục vụ khách hàng với tất cả sự tận tâm và nhiệt huyết trong công việc.",
      color: "from-rose-500 to-pink-500",
    },
    {
      icon: Lightbulb,
      title: "Sáng Tạo",
      description:
        "Luôn tìm kiếm những giải pháp sáng tạo và hiệu quả cho khách hàng.",
      color: "from-amber-500 to-orange-500",
    },
    {
      icon: Zap,
      title: "Hiệu Quả",
      description:
        "Tối ưu hóa quy trình làm việc để mang lại hiệu quả cao nhất.",
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: Globe,
      title: "Chuyên Nghiệp",
      description:
        "Áp dụng các chuẩn mực quốc tế trong mọi hoạt động kinh doanh.",
      color: "from-violet-500 to-purple-500",
    },
    {
      icon: Clock,
      title: "Đúng Hạn",
      description: "Cam kết hoàn thành công việc đúng thời gian đã cam kết.",
      color: "from-cyan-500 to-blue-500",
    },
  ];

  const teamMembers = [
    {
      name: "Nguyễn Văn An",
      position: "Giám đốc điều hành",
      experience: "15 năm kinh nghiệm",
      specialization: "Kế toán doanh nghiệp",
      image: "/api/placeholder/300/400",
    },
    {
      name: "Trần Thị Bình",
      position: "Trưởng phòng Kiểm toán",
      experience: "12 năm kinh nghiệm",
      specialization: "Kiểm toán và tư vấn",
      image: "/api/placeholder/300/400",
    },
    {
      name: "Lê Hoàng Cường",
      position: "Chuyên gia Thuế",
      experience: "10 năm kinh nghiệm",
      specialization: "Tư vấn thuế doanh nghiệp",
      image: "/api/placeholder/300/400",
    },
    {
      name: "Phạm Thị Dung",
      position: "Trưởng phòng Tài chính",
      experience: "8 năm kinh nghiệm",
      specialization: "Phân tích tài chính",
      image: "/api/placeholder/300/400",
    },
  ];

  return (
    <section
      id="about"
      ref={aboutRef}
      className="py-20 px-4 relative bg-gradient-to-b from-gray-50 to-white overflow-hidden"
    >
      {/* Background floating elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="floating-circle-1 absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-blue-200/20 to-indigo-300/20 rounded-full blur-3xl"></div>
        <div className="floating-circle-2 absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-emerald-200/20 to-teal-300/20 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Main About Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Content */}
          <div className="about-content">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
                Về chúng tôi
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
                Đối Tác{" "}
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                  Tin Cậy
                </span>
                <br />
                Của Bạn
              </h2>
            </div>

            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              Với hơn 15 năm kinh nghiệm trong lĩnh vực kế toán và tài chính,
              chúng tôi đã đồng hành cùng hàng trăm doanh nghiệp trên con đường
              phát triển và thành công.
            </p>

            <div className="space-y-4 mb-8">
              {[
                "Đội ngũ chuyên gia giàu kinh nghiệm",
                "Công nghệ hiện đại và bảo mật cao",
                "Dịch vụ tư vấn 24/7",
                "Cam kết chất lượng và đúng hạn",
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>

            <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1">
              Tìm hiểu thêm về chúng tôi
            </button>
          </div>

          {/* Visual Content */}
          <div className="about-image relative">
            <div className="relative bg-gradient-to-br from-blue-100 to-indigo-100 rounded-3xl p-8 overflow-hidden">
              {/* Main illustration area */}
              <div className="relative z-10 text-center">
                <div className="inline-flex items-center justify-center w-32 h-32 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl mb-8 shadow-2xl">
                  <Users className="w-16 h-16 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-gray-800 mb-4">
                  Đội ngũ chuyên nghiệp
                </h3>

                <p className="text-gray-600 mb-8">
                  Hơn 50 chuyên gia kế toán với bằng cấp quốc tế
                </p>

                {/* Mini stats */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-2xl p-4 shadow-md">
                    <div className="text-2xl font-bold text-blue-600">500+</div>
                    <div className="text-sm text-gray-600">
                      Dự án thành công
                    </div>
                  </div>
                  <div className="bg-white rounded-2xl p-4 shadow-md">
                    <div className="text-2xl font-bold text-emerald-600">
                      99%
                    </div>
                    <div className="text-sm text-gray-600">
                      Khách hàng hài lòng
                    </div>
                  </div>
                </div>
              </div>

              {/* Background decorations */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-white/30 rounded-full"></div>
              <div className="absolute bottom-4 left-4 w-16 h-16 bg-white/20 rounded-full"></div>
              <div className="absolute top-1/2 left-0 w-12 h-12 bg-indigo-300/40 rounded-full -translate-x-6"></div>
            </div>
          </div>
        </div>

        {/* Statistics Section */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <div key={index} className="stat-item text-center group">
              <div
                className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${stat.color} rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}
              >
                <stat.icon className="w-8 h-8 text-white" />
              </div>
              <div className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                <span className="counter" data-target={stat.number}>
                  0
                </span>
                <span>{stat.suffix}</span>
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Values Section */}
        <div ref={valuesRef} className="mb-20">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Giá Trị{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Cốt Lõi
              </span>
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Những giá trị định hướng mọi hoạt động của chúng tôi
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div
                key={index}
                className="value-card group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
              >
                <div
                  className={`w-14 h-14 bg-gradient-to-br ${value.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                >
                  <value.icon className="w-7 h-7 text-white" />
                </div>

                <h4 className="text-xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {value.title}
                </h4>

                <p className="text-gray-600 leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Team Section */}
        <div ref={teamRef}>
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Đội Ngũ{" "}
              <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Chuyên Gia
              </span>
            </h3>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Những chuyên gia hàng đầu trong lĩnh vực kế toán và tài chính
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="team-member group text-center">
                <div className="relative mb-6 overflow-hidden rounded-3xl">
                  {/* Placeholder for member photo */}
                  <div className="w-full h-80 bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center group-hover:scale-105 transition-transform duration-500">
                    <Users className="w-20 h-20 text-gray-400" />
                  </div>

                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-blue-600/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                    <div className="text-white">
                      <div className="text-sm font-medium">
                        {member.specialization}
                      </div>
                    </div>
                  </div>
                </div>

                <h4 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {member.name}
                </h4>

                <p className="text-blue-600 font-medium mb-2">
                  {member.position}
                </p>

                <p className="text-gray-600 text-sm">{member.experience}</p>

                {/* Rating stars */}
                <div className="flex justify-center mt-4 space-x-1">
                  {[...Array(5)].map((_, starIndex) => (
                    <Star
                      key={starIndex}
                      className="w-4 h-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Sẵn sàng bắt đầu hành trình cùng chúng tôi?
              </h3>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                Hãy để chúng tôi giúp bạn xây dựng nền tảng tài chính vững chắc
                cho sự phát triển bền vững của doanh nghiệp.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="px-8 py-4 bg-white text-gray-800 rounded-2xl font-semibold hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                  Liên hệ ngay
                </button>
                <button className="px-8 py-4 border-2 border-white text-white rounded-2xl font-semibold hover:bg-white hover:text-gray-800 transition-all duration-300">
                  Xem portfolio
                </button>
              </div>
            </div>

            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/5 rounded-full -translate-y-20 translate-x-20"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/5 rounded-full translate-y-16 -translate-x-16"></div>
            <div className="absolute top-1/2 left-1/2 w-24 h-24 bg-white/5 rounded-full -translate-x-12 -translate-y-12"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
