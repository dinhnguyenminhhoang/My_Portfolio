"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Calculator,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  ArrowUp,
  Heart,
  Star,
  Shield,
  Award,
  Users,
  Clock,
  ChevronRight,
  ExternalLink,
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Footer = () => {
  const footerRef = useRef(null);
  const backToTopRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Footer animation
      gsap.from(".footer-content", {
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 90%",
          end: "top 60%",
          toggleActions: "play none none reverse",
        },
        y: 100,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: "power2.out",
      });

      // Back to top button animation
      gsap.set(backToTopRef.current, { scale: 0 });

      ScrollTrigger.create({
        start: "top -100",
        end: "max",
        onUpdate: (self) => {
          if (self.direction === -1) {
            gsap.to(backToTopRef.current, { scale: 1, duration: 0.3 });
          } else {
            gsap.to(backToTopRef.current, { scale: 0, duration: 0.3 });
          }
        },
      });

      // Floating animation for social icons
      gsap.to(".social-icon", {
        y: -5,
        duration: 2,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.2,
      });
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const footerLinks = {
    services: [
      { name: "Kế toán doanh nghiệp", href: "#services" },
      { name: "Phân tích tài chính", href: "#services" },
      { name: "Kiểm toán nội bộ", href: "#services" },
      { name: "Tư vấn thuế", href: "#services" },
      { name: "Đào tạo kế toán", href: "#services" },
      { name: "Báo cáo tài chính", href: "#services" },
    ],
    company: [
      { name: "Về chúng tôi", href: "#about" },
      { name: "Đội ngũ chuyên gia", href: "#about" },
      { name: "Tuyển dụng", href: "#" },
      { name: "Tin tức", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Chứng nhận", href: "#" },
    ],
    support: [
      { name: "Liên hệ", href: "#contact" },
      { name: "Hỗ trợ", href: "#" },
      { name: "FAQ", href: "#" },
      { name: "Bảo mật", href: "#" },
      { name: "Điều khoản", href: "#" },
      { name: "Chính sách", href: "#" },
    ],
  };

  const socialLinks = [
    { icon: Facebook, href: "#", name: "Facebook", color: "hover:bg-blue-600" },
    { icon: Twitter, href: "#", name: "Twitter", color: "hover:bg-sky-500" },
    { icon: Linkedin, href: "#", name: "LinkedIn", color: "hover:bg-blue-700" },
    {
      icon: Instagram,
      href: "#",
      name: "Instagram",
      color: "hover:bg-pink-600",
    },
    { icon: Youtube, href: "#", name: "YouTube", color: "hover:bg-red-600" },
  ];

  const achievements = [
    { icon: Users, number: "500+", label: "Khách hàng" },
    { icon: Award, number: "15+", label: "Năm kinh nghiệm" },
    { icon: Star, number: "4.9/5", label: "Đánh giá" },
    { icon: Shield, number: "99%", label: "Độ tin cậy" },
  ];

  return (
    <footer
      ref={footerRef}
      className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-60 h-60 bg-indigo-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-purple-500/10 rounded-full blur-2xl"></div>
      </div>

      <div className="relative z-10">
        {/* Newsletter Section */}
        <div className="footer-content border-b border-gray-700">
          <div className="max-w-7xl mx-auto px-4 py-16">
            <div className="text-center">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">
                Đăng Ký{" "}
                <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                  Newsletter
                </span>
              </h3>
              <p className="text-gray-300 mb-8 max-w-2xl mx-auto text-lg">
                Nhận những thông tin mới nhất về luật thuế, xu hướng kế toán và
                các mẹo quản lý tài chính hiệu quả
              </p>

              <div className="max-w-md mx-auto flex gap-4">
                <div className="flex-1">
                  <input
                    type="email"
                    placeholder="Nhập email của bạn"
                    className="w-full px-6 py-4 bg-white/10 border border-gray-600 rounded-2xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                  />
                </div>
                <button className="px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-2xl font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1 flex items-center space-x-2">
                  <Mail className="w-5 h-5" />
                  <span className="hidden sm:inline">Đăng ký</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="footer-content max-w-7xl mx-auto px-4 py-16">
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-lg">
                    <Calculator className="w-7 h-7 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-full animate-pulse"></div>
                </div>
                <div>
                  <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                    AccountPro
                  </span>
                  <div className="text-sm text-gray-400">
                    Kế toán chuyên nghiệp
                  </div>
                </div>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                Chúng tôi cung cấp giải pháp kế toán toàn diện, giúp doanh
                nghiệp tối ưu hóa tài chính và phát triển bền vững trong thời
                đại số.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center space-x-3 text-gray-300">
                  <Phone className="w-5 h-5 text-blue-400" />
                  <span>+84 (28) 1234 5678</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <span>contact@accountpro.vn</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-blue-400" />
                  <span>123 Nguyễn Huệ, Q.1, TP.HCM</span>
                </div>
                <div className="flex items-center space-x-3 text-gray-300">
                  <Clock className="w-5 h-5 text-blue-400" />
                  <span>Thứ 2 - Thứ 6: 8:00 - 18:00</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    className={`social-icon w-12 h-12 bg-gray-700 ${social.color} rounded-xl flex items-center justify-center transition-all duration-300 transform hover:-translate-y-1 hover:shadow-lg group`}
                    title={social.name}
                  >
                    <social.icon className="w-5 h-5 text-gray-300 group-hover:text-white transition-colors duration-300" />
                  </a>
                ))}
              </div>
            </div>

            {/* Services Links */}
            <div className="footer-content">
              <h4 className="text-xl font-bold mb-6 text-white">Dịch Vụ</h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() =>
                        scrollToSection(link.href.replace("#", ""))
                      }
                      className="group flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300"
                    >
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      <span>{link.name}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company Links */}
            <div className="footer-content">
              <h4 className="text-xl font-bold mb-6 text-white">Công Ty</h4>
              <ul className="space-y-3">
                {footerLinks.company.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() =>
                        scrollToSection(link.href.replace("#", ""))
                      }
                      className="group flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300"
                    >
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      <span>{link.name}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div className="footer-content">
              <h4 className="text-xl font-bold mb-6 text-white">Hỗ Trợ</h4>
              <ul className="space-y-3 mb-8">
                {footerLinks.support.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() =>
                        scrollToSection(link.href.replace("#", ""))
                      }
                      className="group flex items-center space-x-2 text-gray-300 hover:text-white transition-colors duration-300"
                    >
                      <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      <span>{link.name}</span>
                    </button>
                  </li>
                ))}
              </ul>

              {/* Achievements */}
              <div className="bg-gray-800/50 rounded-2xl p-6 border border-gray-700">
                <h5 className="text-lg font-bold mb-4 text-white">Thành Tựu</h5>
                <div className="grid grid-cols-2 gap-4">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="text-center">
                      <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                        <achievement.icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="text-sm font-bold text-white">
                        {achievement.number}
                      </div>
                      <div className="text-xs text-gray-400">
                        {achievement.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="footer-content border-t border-gray-700">
          <div className="max-w-7xl mx-auto px-4 py-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="text-gray-400 text-center md:text-left">
                <p className="flex items-center justify-center md:justify-start space-x-2">
                  <span>© 2024 AccountPro. Được phát triển với</span>
                  <Heart className="w-4 h-4 text-red-500 animate-pulse" />
                  <span>tại Việt Nam</span>
                </p>
              </div>

              <div className="flex items-center space-x-6 text-sm text-gray-400">
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300 flex items-center space-x-1"
                >
                  <span>Chính sách bảo mật</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300 flex items-center space-x-1"
                >
                  <span>Điều khoản sử dụng</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
                <a
                  href="#"
                  className="hover:text-white transition-colors duration-300 flex items-center space-x-1"
                >
                  <span>Sitemap</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        ref={backToTopRef}
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 z-50 group"
        title="Về đầu trang"
      >
        <ArrowUp className="w-6 h-6 group-hover:scale-110 transition-transform duration-300" />
      </button>
    </footer>
  );
};

export default Footer;
