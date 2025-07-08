"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Flower2,
  Heart,
  Mail,
  Phone,
  MapPin,
  Facebook,
  Instagram,
  Youtube,
  Send,
  ArrowUp,
  Star,
  Award,
  Users,
  Clock,
  CheckCircle,
  Sparkles,
  Gift,
  Calendar,
} from "lucide-react";
import { useOptimizedScroll } from "@/hooks/useOptimizedScroll";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const Footer = () => {
  const footerRef = useRef<HTMLDivElement>(null);
  const newsletterRef = useRef<HTMLDivElement>(null);
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { scrollToElement } = useOptimizedScroll();

  const quickLinks = [
    { name: "Trang chủ", href: "#home" },
    { name: "Về chúng tôi", href: "#about" },
    { name: "Dịch vụ", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Liên hệ", href: "#contact" },
  ];

  const services = [
    { name: "Đám cưới cổ điển", href: "#services" },
    { name: "Sự kiện doanh nghiệp", href: "#services" },
    { name: "Sinh nhật VIP", href: "#services" },
    { name: "Hoa cầm tay", href: "#services" },
    { name: "Workshop cắm hoa", href: "#services" },
  ];

  const contactInfo = [
    { icon: Phone, text: "0123.456.789", href: "tel:0123456789" },
    { icon: Mail, text: "hello@flowries.vn", href: "mailto:hello@flowries.vn" },
    { icon: MapPin, text: "123 Nguyễn Huệ, Q1, TP.HCM", href: "#contact" },
  ];

  const socialLinks = [
    {
      icon: Facebook,
      href: "#",
      color: "hover:text-blue-600",
      bg: "hover:bg-blue-50",
    },
    {
      icon: Instagram,
      href: "#",
      color: "hover:text-pink-600",
      bg: "hover:bg-pink-50",
    },
    {
      icon: Youtube,
      href: "#",
      color: "hover:text-red-600",
      bg: "hover:bg-red-50",
    },
  ];

  const achievements = [
    { icon: Star, number: "500+", text: "Tác phẩm" },
    { icon: Users, number: "200+", text: "Khách hàng" },
    { icon: Award, number: "50+", text: "Sự kiện" },
    { icon: Heart, number: "100%", text: "Hài lòng" },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Footer animation
      gsap.fromTo(
        ".footer-section",
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: footerRef.current,
            start: "top 90%",
            end: "bottom 10%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Newsletter animation
      gsap.fromTo(
        newsletterRef.current,
        { scale: 0.9, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: newsletterRef.current,
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Achievement counters
      gsap.fromTo(
        ".achievement-item",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: ".achievements-section",
            start: "top 85%",
            end: "bottom 15%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, footerRef);

    return () => ctx.revert();
  }, []);

  const handleNewsletterSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim() || !/\S+@\S+\.\S+/.test(email)) return;

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setIsSubscribed(true);
      setEmail("");

      // Success animation
      gsap.fromTo(
        ".success-newsletter",
        { scale: 0, opacity: 0 },
        { scale: 1, opacity: 1, duration: 0.8, ease: "back.out(1.7)" }
      );

      // Reset after 3 seconds
      setTimeout(() => setIsSubscribed(false), 3000);
    } catch (error) {
      console.error("Newsletter subscription error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const scrollToTop = () => {
    scrollToElement("#home", { duration: 1, offset: 0 });
  };

  const handleLinkClick = (href: string) => {
    if (href.startsWith("#")) {
      scrollToElement(href, { duration: 0.8, offset: 80 });
    }
  };

  return (
    <footer
      ref={footerRef}
      className="relative bg-gradient-to-br from-gray-900 via-gray-800 to-rose-900 text-white overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%23ffffff%22%20fill-opacity%3D%220.1%22%3E%3Cpath%20d%3D%22M30%2030m-20%200a20%2020%200%201%201%2040%200a20%2020%200%201%201-40%200%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-10 right-10 opacity-20">
        <Flower2 className="w-32 h-32 text-rose-300 animate-pulse" />
      </div>
      <div className="absolute bottom-10 left-10 opacity-15">
        <Sparkles className="w-24 h-24 text-pink-300 animate-bounce" />
      </div>

      {/* Newsletter Section */}
      <div
        ref={newsletterRef}
        className="relative z-10 py-16 border-b border-gray-700"
      >
        <div className="max-w-7xl mx-auto px-6">
          <div className="bg-gradient-to-r from-rose-600 to-pink-600 rounded-3xl p-8 md:p-12 relative overflow-hidden">
            {/* Background decoration */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-20 translate-x-20"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-16 -translate-x-16"></div>

            <div className="relative z-10 text-center">
              <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Mail className="w-4 h-4" />
                Newsletter
              </div>

              <h3 className="text-3xl md:text-4xl font-playfair font-bold mb-4">
                Nhận tin tức mới nhất
              </h3>
              <p className="text-xl opacity-90 mb-8 max-w-2xl mx-auto">
                Đăng ký để nhận những xu hướng cắm hoa mới nhất, tips và ưu đãi
                đặc biệt
              </p>

              {/* Newsletter Form */}
              {isSubscribed ? (
                <div className="success-newsletter flex items-center justify-center gap-3 bg-white/20 backdrop-blur-sm rounded-2xl p-4 max-w-md mx-auto">
                  <CheckCircle className="w-6 h-6 text-green-300" />
                  <span className="text-green-100 font-medium">
                    Đăng ký thành công!
                  </span>
                </div>
              ) : (
                <form
                  onSubmit={handleNewsletterSubmit}
                  className="flex flex-col sm:flex-row gap-4 max-w-lg mx-auto"
                >
                  <div className="flex-1 relative">
                    <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Nhập email của bạn"
                      className="w-full pl-12 pr-4 py-4 bg-white/20 backdrop-blur-sm border border-white/30 rounded-2xl text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                      required
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-8 py-4 bg-white text-rose-600 font-semibold rounded-2xl hover:bg-gray-100 transition-colors disabled:opacity-50 flex items-center gap-2 justify-center min-w-[140px]"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-rose-600 border-t-transparent rounded-full animate-spin"></div>
                        Đang gửi...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Đăng ký
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="relative z-10 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-12">
            {/* Brand Section */}
            <div className="footer-section lg:col-span-1">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-pink-500 rounded-2xl flex items-center justify-center">
                  <Flower2 className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-2xl font-playfair font-bold">Flowries</h3>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                Nghệ thuật cắm hoa chuyên nghiệp, mang đến vẻ đẹp và hạnh phúc
                cho mọi khoảnh khắc đặc biệt trong cuộc sống của bạn.
              </p>

              {/* Achievements */}
              <div className="achievements-section grid grid-cols-2 gap-4">
                {achievements.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="achievement-item text-center">
                      <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-2">
                        <Icon className="w-5 h-5 text-white" />
                      </div>
                      <div className="text-lg font-bold text-white">
                        {item.number}
                      </div>
                      <div className="text-xs text-gray-400">{item.text}</div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer-section">
              <h4 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Star className="w-5 h-5 text-rose-400" />
                Liên kết nhanh
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() => handleLinkClick(link.href)}
                      className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 bg-rose-400 rounded-full group-hover:w-2 transition-all"></span>
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="footer-section">
              <h4 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Gift className="w-5 h-5 text-rose-400" />
                Dịch vụ
              </h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <li key={index}>
                    <button
                      onClick={() => handleLinkClick(service.href)}
                      className="text-gray-300 hover:text-white transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 bg-pink-400 rounded-full group-hover:w-2 transition-all"></span>
                      {service.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer-section">
              <h4 className="text-xl font-semibold mb-6 flex items-center gap-2">
                <Phone className="w-5 h-5 text-rose-400" />
                Liên hệ
              </h4>

              <div className="space-y-4 mb-6">
                {contactInfo.map((contact, index) => {
                  const Icon = contact.icon;
                  return (
                    <a
                      key={index}
                      href={contact.href}
                      onClick={(e) => {
                        if (contact.href.startsWith("#")) {
                          e.preventDefault();
                          handleLinkClick(contact.href);
                        }
                      }}
                      className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors group"
                    >
                      <div className="w-10 h-10 bg-gray-700 group-hover:bg-rose-600 rounded-lg flex items-center justify-center transition-colors">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="text-sm">{contact.text}</span>
                    </a>
                  );
                })}
              </div>

              {/* Business Hours */}
              <div className="bg-gray-800 rounded-xl p-4 mb-6">
                <div className="flex items-center gap-2 mb-3">
                  <Clock className="w-5 h-5 text-rose-400" />
                  <span className="font-medium">Giờ làm việc</span>
                </div>
                <div className="text-sm text-gray-300 space-y-1">
                  <div className="flex justify-between">
                    <span>Thứ 2 - Thứ 6:</span>
                    <span>8:00 - 20:00</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Thứ 7 - CN:</span>
                    <span>9:00 - 18:00</span>
                  </div>
                </div>
              </div>

              {/* Social Media */}
              <div>
                <p className="text-sm font-medium mb-3">Theo dõi chúng tôi</p>
                <div className="flex gap-3">
                  {socialLinks.map((social, index) => {
                    const Icon = social.icon;
                    return (
                      <a
                        key={index}
                        href={social.href}
                        className={`w-10 h-10 bg-gray-700 rounded-lg flex items-center justify-center text-gray-300 transition-all ${social.color} ${social.bg} hover:scale-110`}
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="relative z-10 border-t border-gray-700 py-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="text-center md:text-left">
              <p className="text-gray-400 text-sm">
                © 2024 Flowries. All rights reserved.
              </p>
              <p className="text-gray-500 text-xs mt-1">
                Designed with ❤️ using Next.js & Tailwind CSS
              </p>
            </div>

            <div className="flex items-center gap-6">
              <div className="hidden md:flex items-center gap-4 text-xs text-gray-500">
                <button className="hover:text-gray-300 transition-colors">
                  Privacy Policy
                </button>
                <span>•</span>
                <button className="hover:text-gray-300 transition-colors">
                  Terms of Service
                </button>
                <span>•</span>
                <button className="hover:text-gray-300 transition-colors">
                  Sitemap
                </button>
              </div>

              {/* Back to Top */}
              <button
                onClick={scrollToTop}
                className="w-10 h-10 bg-gradient-to-br from-rose-500 to-pink-500 rounded-lg flex items-center justify-center text-white hover:scale-110 transition-transform group"
                aria-label="Back to top"
              >
                <ArrowUp className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
