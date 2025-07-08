"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Heart,
  Award,
  Users,
  Clock,
  Flower2,
  Sparkles,
  Quote,
  CheckCircle,
  Star,
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  const [hoveredSkill, setHoveredSkill] = useState<number | null>(null);

  const skills = [
    { name: "Cắm hoa cưới", level: 95, icon: Heart, color: "rose" },
    { name: "Trang trí sự kiện", level: 90, icon: Sparkles, color: "pink" },
    { name: "Hoa nghệ thuật", level: 88, icon: Award, color: "purple" },
    { name: "Thiết kế không gian", level: 85, icon: Users, color: "indigo" },
  ];

  const timeline = [
    {
      year: "2019",
      title: "Bắt đầu hành trình",
      description: "Khởi đầu với niềm đam mê về hoa và nghệ thuật",
      icon: Heart,
    },
    {
      year: "2020",
      title: "Học tập chuyên sâu",
      description: "Hoàn thành khóa học cắm hoa chuyên nghiệp",
      icon: Award,
    },
    {
      year: "2021",
      title: "Dự án đầu tiên",
      description: "Thực hiện trang trí đám cưới đầu tiên",
      icon: Sparkles,
    },
    {
      year: "2022",
      title: "Mở rộng dịch vụ",
      description: "Phát triển các dịch vụ trang trí sự kiện",
      icon: Users,
    },
    {
      year: "2023",
      title: "Thành lập thương hiệu",
      description: "Ra mắt thương hiệu Flowries chuyên nghiệp",
      icon: Star,
    },
  ];

  const achievements = [
    { number: "500+", label: "Tác phẩm hoàn thành", icon: Flower2 },
    { number: "50+", label: "Sự kiện trang trí", icon: Sparkles },
    { number: "100%", label: "Khách hàng hài lòng", icon: Heart },
    { number: "5+", label: "Năm kinh nghiệm", icon: Clock },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image animation
      gsap.fromTo(
        imageRef.current,
        { x: -100, opacity: 0, rotationY: -15 },
        {
          x: 0,
          opacity: 1,
          rotationY: 0,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Content animation
      gsap.fromTo(
        contentRef.current,
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
            end: "bottom 30%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Skills animation
      gsap.fromTo(
        ".skill-item",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: skillsRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Timeline animation
      gsap.fromTo(
        ".timeline-item",
        { x: -50, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Achievement counters
      gsap.fromTo(
        ".achievement-number",
        { scale: 0, rotation: -180 },
        {
          scale: 1,
          rotation: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ".achievements-grid",
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Skill bar animations
      skills.forEach((_, index) => {
        gsap.fromTo(
          `.skill-bar-${index}`,
          { width: "0%" },
          {
            width: `${skills[index].level}%`,
            duration: 1.5,
            ease: "power2.out",
            delay: index * 0.2,
            scrollTrigger: {
              trigger: skillsRef.current,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const getColorClasses = (color: string) => {
    const colors = {
      rose: "from-rose-400 to-rose-600 text-rose-600 bg-rose-50",
      pink: "from-pink-400 to-pink-600 text-pink-600 bg-pink-50",
      purple: "from-purple-400 to-purple-600 text-purple-600 bg-purple-50",
      indigo: "from-indigo-400 to-indigo-600 text-indigo-600 bg-indigo-50",
    };
    return colors[color as keyof typeof colors] || colors.rose;
  };

  return (
    <section
      id="about"
      ref={containerRef}
      className="py-20 bg-gradient-to-br from-white via-rose-50/30 to-pink-50/30 relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%22100%22 height=%22100%22 viewBox=%220 0 100 100%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cpath d=%22M50 20a30 30 0 0 1 0 60 30 30 0 0 1 0-60%22 fill=%22%23f43f5e%22 fill-opacity=%220.1%22/%3E%3C/svg%3E')]"></div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-rose-100 text-rose-600 px-4 py-2 rounded-full text-sm font-medium mb-4">
            <Heart className="w-4 h-4" />
            Về Flowries
          </div>
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-gray-900 mb-6">
            Câu chuyện của chúng tôi
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Từ niềm đam mê với hoa và nghệ thuật, chúng tôi đã tạo nên những tác
            phẩm đầy ý nghĩa
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Image Section */}
          <div ref={imageRef} className="relative">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <div className="aspect-[4/5] bg-gradient-to-br from-rose-100 to-pink-200 flex items-center justify-center">
                <div className="text-center">
                  <Flower2 className="w-24 h-24 text-rose-400 mx-auto mb-4" />
                  <p className="text-rose-600 font-medium">
                    Ảnh nghệ nhân cắm hoa
                  </p>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-pink-400 rounded-full opacity-60"></div>
              <div className="absolute -bottom-6 -left-6 w-12 h-12 bg-rose-400 rounded-full opacity-40"></div>
            </div>

            {/* Quote Card */}
            <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-xl max-w-xs">
              <Quote className="w-8 h-8 text-rose-400 mb-3" />
              <p className="text-gray-700 italic text-sm">
                "Mỗi bông hoa đều có một câu chuyện riêng, và tôi là người kể
                những câu chuyện đó"
              </p>
            </div>
          </div>

          {/* Content Section */}
          <div ref={contentRef} className="space-y-8">
            <div>
              <h3 className="text-3xl font-playfair font-bold text-gray-900 mb-6">
                Nghệ thuật từ trái tim
              </h3>
              <p className="text-gray-600 text-lg leading-relaxed mb-6">
                Với hơn 5 năm kinh nghiệm trong lĩnh vực cắm hoa và trang trí,
                tôi đã dành trọn tình yêu của mình để tạo nên những tác phẩm
                nghệ thuật từ những bông hoa tươi thắm.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Mỗi tác phẩm không chỉ là sự kết hợp tinh tế giữa màu sắc và
                hình dáng, mà còn là câu chuyện về tình yêu, hạnh phúc và những
                khoảnh khắc đáng nhớ trong cuộc sống.
              </p>
            </div>

            {/* Key Points */}
            <div className="space-y-4">
              {[
                "Sử dụng 100% hoa tươi chất lượng cao",
                "Thiết kế độc đáo theo yêu cầu riêng",
                "Tư vấn chuyên nghiệp về màu sắc và phong cách",
                "Giao hàng và setup tại địa điểm sự kiện",
              ].map((point, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span className="text-gray-700">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Achievements Grid */}
        <div className="achievements-grid grid grid-cols-2 md:grid-cols-4 gap-8 mb-20">
          {achievements.map((achievement, index) => (
            <div key={index} className="text-center group">
              <div className="achievement-number w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full flex items-center justify-center text-white shadow-lg group-hover:shadow-xl transition-shadow">
                <achievement.icon className="w-8 h-8" />
              </div>
              <div className="text-3xl font-bold text-gray-900 mb-2">
                {achievement.number}
              </div>
              <div className="text-gray-600 text-sm">{achievement.label}</div>
            </div>
          ))}
        </div>

        {/* Skills Section */}
        <div ref={skillsRef} className="mb-20">
          <h3 className="text-3xl font-playfair font-bold text-center text-gray-900 mb-12">
            Chuyên môn & Kỹ năng
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => {
              const colorClasses = getColorClasses(skill.color);
              const Icon = skill.icon;

              return (
                <div
                  key={index}
                  className="skill-item group cursor-pointer"
                  onMouseEnter={() => setHoveredSkill(index)}
                  onMouseLeave={() => setHoveredSkill(null)}
                >
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-lg bg-gradient-to-br ${
                          colorClasses.split(" ")[0]
                        } ${
                          colorClasses.split(" ")[1]
                        } flex items-center justify-center text-white`}
                      >
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-semibold text-gray-900">
                        {skill.name}
                      </span>
                    </div>
                    <span className="text-sm font-medium text-gray-500">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-3 overflow-hidden">
                    <div
                      className={`skill-bar-${index} h-full bg-gradient-to-r ${
                        colorClasses.split(" ")[0]
                      } ${
                        colorClasses.split(" ")[1]
                      } rounded-full transition-all duration-300 ${
                        hoveredSkill === index ? "shadow-lg" : ""
                      }`}
                      style={{ width: "0%" }}
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Timeline */}
        <div ref={timelineRef}>
          <h3 className="text-3xl font-playfair font-bold text-center text-gray-900 mb-12">
            Hành trình phát triển
          </h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-rose-400 to-pink-500"></div>

            <div className="space-y-12">
              {timeline.map((item, index) => {
                const Icon = item.icon;
                return (
                  <div
                    key={index}
                    className="timeline-item relative flex items-start gap-6"
                  >
                    <div className="relative z-10 w-16 h-16 bg-gradient-to-br from-rose-400 to-pink-500 rounded-full flex items-center justify-center text-white shadow-lg">
                      <Icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1 bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
                      <div className="flex items-center gap-4 mb-3">
                        <span className="text-2xl font-bold text-rose-600">
                          {item.year}
                        </span>
                        <h4 className="text-xl font-semibold text-gray-900">
                          {item.title}
                        </h4>
                      </div>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 opacity-20">
        <Flower2 className="w-32 h-32 text-rose-300 animate-pulse" />
      </div>
      <div className="absolute bottom-20 left-10 opacity-15">
        <Sparkles className="w-24 h-24 text-pink-300 animate-bounce" />
      </div>
    </section>
  );
};

export default About;
