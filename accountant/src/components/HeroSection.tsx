"use client";

import {
  BarChart3,
  Calculator,
  ChevronDown,
  FileText,
  PieChart,
  TrendingUp,
  Sparkles,
  Target,
  Shield,
  Zap,
} from "lucide-react";
import { useEffect, useState, useRef } from "react";

const HeroSection = () => {
  const [mounted, setMounted] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLElement>(null);

  useEffect(() => {
    setMounted(true);

    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: ((e.clientX - rect.left) / rect.width) * 100,
          y: ((e.clientY - rect.top) / rect.height) * 100,
        });
      }
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener("mousemove", handleMouseMove);
      return () =>
        heroElement.removeEventListener("mousemove", handleMouseMove);
    }
  }, []);

  if (!mounted) {
    return (
      <section className="min-h-screen flex items-center justify-center px-4 bg-gradient-to-br from-slate-50 via-white to-blue-50">
        <div className="text-center">
          <div className="relative">
            <div className="w-20 h-20 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-2xl shadow-blue-500/25">
              <Calculator className="w-10 h-10 text-white" />
            </div>
            <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 to-purple-600 rounded-3xl blur opacity-20 animate-pulse"></div>
          </div>
          <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Đang tải...
          </div>
        </div>
      </section>
    );
  }

  const stats = [
    {
      number: "500+",
      label: "Doanh nghiệp tin tưởng",
      icon: Target,
      color: "from-blue-500 to-cyan-500",
    },
    {
      number: "15+",
      label: "Năm kinh nghiệm",
      icon: Shield,
      color: "from-emerald-500 to-teal-500",
    },
    {
      number: "99%",
      label: "Khách hàng hài lòng",
      icon: Sparkles,
      color: "from-purple-500 to-pink-500",
    },
    {
      number: "24/7",
      label: "Hỗ trợ tận tình",
      icon: Zap,
      color: "from-orange-500 to-red-500",
    },
  ];

  const floatingElements = [
    {
      icon: BarChart3,
      color: "from-blue-500/80 via-indigo-500/80 to-purple-500/80",
      position: "top-16 left-[8%]",
      size: "w-16 h-16",
      delay: "0s",
    },
    {
      icon: PieChart,
      color: "from-emerald-500/80 via-teal-500/80 to-cyan-500/80",
      position: "top-32 right-[12%]",
      size: "w-20 h-20",
      delay: "1s",
    },
    {
      icon: FileText,
      color: "from-purple-500/80 via-pink-500/80 to-rose-500/80",
      position: "bottom-32 left-[15%]",
      size: "w-14 h-14",
      delay: "2s",
    },
    {
      icon: TrendingUp,
      color: "from-orange-500/80 via-red-500/80 to-pink-500/80",
      position: "bottom-16 right-[8%]",
      size: "w-18 h-18",
      delay: "1.5s",
    },
  ];

  return (
    <section
      ref={heroRef}
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden py-8 pt-32"
      style={{
        background: `
          radial-gradient(circle at ${mousePosition.x}% ${mousePosition.y}%, 
            rgba(59, 130, 246, 0.15) 0%, 
            rgba(147, 51, 234, 0.1) 25%, 
            transparent 50%),
          linear-gradient(135deg, 
            #f8fafc 0%, 
            #ffffff 25%, 
            #f1f5f9 50%, 
            #e2e8f0 75%, 
            #cbd5e1 100%)
        `,
      }}
    >
      {/* Animated Background Layers */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Primary gradient orbs */}
        <div className="absolute -top-1/3 -left-1/3 w-2/3 h-2/3 bg-gradient-to-br from-blue-400/20 via-indigo-300/15 to-transparent rounded-full blur-3xl animate-float-slow"></div>
        <div className="absolute -bottom-1/3 -right-1/3 w-2/3 h-2/3 bg-gradient-to-tl from-purple-400/20 via-pink-300/15 to-transparent rounded-full blur-3xl animate-float-slower"></div>

        {/* Secondary accent orbs */}
        <div className="absolute top-1/4 left-1/4 w-1/3 h-1/3 bg-gradient-to-br from-emerald-400/15 via-teal-300/10 to-transparent rounded-full blur-2xl animate-float-reverse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-1/4 h-1/4 bg-gradient-to-tl from-orange-400/15 via-yellow-300/10 to-transparent rounded-full blur-2xl animate-pulse-slow"></div>

        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full animate-float-particle"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 4}s`,
                animationDuration: `${4 + Math.random() * 4}s`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Mesh Gradient Overlay */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fill-rule=\'evenodd\'%3E%3Cg fill=\'%236366f1\' fill-opacity=\'0.03\'%3E%3Ccircle cx=\'30\' cy=\'30\' r=\'1\'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')] opacity-40"></div>

      <div className="max-w-7xl mx-auto text-center relative z-20">
        {/* Logo/Icon */}
        <div className="mb-8 animate-scale-up">
          <div className="relative inline-block">
            <div className="w-24 h-24 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 rounded-3xl flex items-center justify-center mx-auto shadow-2xl shadow-blue-500/25 animate-glow">
              <Calculator className="w-12 h-12 text-white animate-bounce-subtle" />
            </div>
            <div className="absolute -inset-3 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-3xl blur-lg opacity-30 animate-pulse-glow"></div>
          </div>
        </div>

        {/* Main Title with Enhanced Typography */}
        <div className="mb-12 space-y-4">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black leading-none tracking-tight animate-slide-up-stagger">
            <div className="relative mb-4">
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent drop-shadow-lg animate-gradient-shift">
                Kế Toán
              </span>
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 via-indigo-600/20 to-purple-600/20 blur-lg -z-10 animate-pulse"></div>
            </div>
            <div className="relative">
              <span className="text-gray-800 drop-shadow-sm">
                Chuyên Nghiệp
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent animate-shimmer"></div>
            </div>
          </h1>

          {/* Enhanced Decorative Elements */}
          <div className="flex items-center justify-center mt-8 space-x-4 animate-fade-in-up">
            <div className="flex items-center space-x-2">
              <div className="h-0.5 w-16 bg-gradient-to-r from-transparent via-blue-600 to-indigo-600 rounded-full animate-expand"></div>
              <div className="w-3 h-3 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full animate-pulse-scale shadow-lg shadow-blue-500/50"></div>
              <div className="h-0.5 w-8 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full animate-expand-delayed"></div>
            </div>
            <Sparkles className="w-6 h-6 text-purple-600 animate-spin-slow" />
            <div className="flex items-center space-x-2">
              <div className="h-0.5 w-8 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full animate-expand"></div>
              <div className="w-3 h-3 bg-gradient-to-br from-purple-600 to-pink-600 rounded-full animate-pulse-scale shadow-lg shadow-purple-500/50"></div>
              <div className="h-0.5 w-16 bg-gradient-to-r from-pink-600 via-rose-600 to-transparent rounded-full animate-expand-delayed"></div>
            </div>
          </div>
        </div>

        {/* Enhanced Subtitle */}
        <div className="mb-16 animate-fade-in-up-delayed">
          <p className="text-2xl md:text-3xl lg:text-4xl text-gray-600 mb-6 max-w-5xl mx-auto leading-relaxed font-light">
            Giải pháp kế toán toàn diện cho doanh nghiệp hiện đại
          </p>
          <div className="flex flex-wrap justify-center items-center gap-6 text-lg md:text-xl">
            <span className="flex items-center space-x-2 text-blue-600 font-semibold">
              <Shield className="w-5 h-5" />
              <span>Chính xác</span>
            </span>
            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
            <span className="flex items-center space-x-2 text-emerald-600 font-semibold">
              <Target className="w-5 h-5" />
              <span>Minh bạch</span>
            </span>
            <div className="w-1 h-1 bg-gray-400 rounded-full"></div>
            <span className="flex items-center space-x-2 text-purple-600 font-semibold">
              <Zap className="w-5 h-5" />
              <span>Hiệu quả</span>
            </span>
          </div>
        </div>

        {/* Enhanced Stats with Icons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 max-w-6xl mx-auto animate-fade-in-scale">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group relative p-6 bg-white/60 backdrop-blur-sm rounded-3xl border border-white/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-105 animate-float-card"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/10 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative z-10">
                <div
                  className={`w-12 h-12 bg-gradient-to-br ${stat.color} rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  <stat.icon className="w-6 h-6 text-white" />
                </div>
                <div className="text-4xl md:text-5xl font-black text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                  {stat.number}
                </div>
                <div className="text-sm md:text-base text-gray-600 font-medium leading-tight">
                  {stat.label}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up-final">
          <button className="group relative px-10 py-5 bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white rounded-3xl font-bold text-lg hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-500 transform hover:-translate-y-2 hover:scale-105 overflow-hidden">
            <span className="relative z-10 flex items-center space-x-2">
              <span>Bắt đầu ngay</span>
              <Zap className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-red-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000"></div>
          </button>

          <button className="group relative px-10 py-5 bg-white/80 backdrop-blur-sm border-2 border-gray-300 text-gray-700 rounded-3xl font-bold text-lg hover:border-blue-600 hover:text-blue-600 hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1 overflow-hidden">
            <span className="relative z-10 flex items-center space-x-2">
              <span>Tìm hiểu thêm</span>
              <Target className="w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
            </span>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-50 via-indigo-50 to-purple-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        </div>
      </div>

      {/* Enhanced Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingElements.map((element, index) => (
          <div
            key={index}
            className={`absolute ${element.position} ${element.size} animate-float-element`}
            style={{ animationDelay: element.delay }}
          >
            <div
              className={`w-full h-full bg-gradient-to-br ${element.color} rounded-3xl shadow-2xl backdrop-blur-sm border border-white/30 flex items-center justify-center group-hover:scale-110 transition-transform duration-500`}
            >
              <element.icon className="text-white w-1/2 h-1/2" />
              <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent rounded-3xl"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Enhanced Scroll Indicator */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer group animate-bounce-soft"
        onClick={() => {
          document
            .getElementById("services")
            ?.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <div className="flex flex-col items-center space-y-3 text-gray-500 group-hover:text-blue-600 transition-all duration-300">
          <span className="text-sm font-semibold tracking-wide uppercase">
            Khám phá
          </span>
          <div className="relative">
            <div className="w-8 h-12 border-2 border-current rounded-full flex justify-center backdrop-blur-sm bg-white/50 group-hover:bg-blue-50 transition-all duration-300">
              <div className="w-1.5 h-4 bg-current rounded-full mt-2 animate-scroll-dot"></div>
            </div>
            <div className="absolute inset-0 border-2 border-blue-500 rounded-full opacity-0 group-hover:opacity-50 animate-ping"></div>
          </div>
          <ChevronDown className="w-6 h-6 animate-bounce-subtle" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
