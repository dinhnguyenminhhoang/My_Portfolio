"use client";

import { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

// Note: Move metadata to layout.tsx for proper SSR handling
export default function Home() {
  return (
    <main className="relative min-h-screen bg-white text-gray-900 overflow-x-hidden">
      {/* Global Background Effects */}
      <div className="fixed inset-0 -z-10">
        {/* Primary Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50/30 via-pink-50/20 to-blue-50/30"></div>

        {/* Animated Mesh Gradient */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-purple-400/30 to-transparent rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-gradient-to-bl from-pink-400/30 to-transparent rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-gradient-to-tr from-blue-400/30 to-transparent rounded-full blur-3xl animate-pulse delay-2000"></div>
        </div>

        {/* Floating Particles */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-purple-400 rounded-full opacity-40 animate-bounce"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-pink-400 rounded-full opacity-60 animate-bounce delay-500"></div>
          <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-blue-400 rounded-full opacity-50 animate-bounce delay-1000"></div>
          <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-cyan-400 rounded-full opacity-40 animate-bounce delay-1500"></div>
          <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-purple-300 rounded-full opacity-30 animate-bounce delay-2000"></div>
          <div className="absolute top-3/4 left-1/5 w-1.5 h-1.5 bg-pink-300 rounded-full opacity-50 animate-bounce delay-2500"></div>
          <div className="absolute top-1/5 right-1/5 w-1 h-1 bg-blue-300 rounded-full opacity-40 animate-bounce delay-3000"></div>
        </div>

        {/* Grid Pattern Overlay */}
        <div className="absolute inset-0 opacity-[0.02]">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_currentColor_1px,_transparent_0)] bg-[length:32px_32px] text-gray-900"></div>
        </div>

        {/* Gradient Noise */}
        <div className="absolute inset-0 opacity-[0.015]">
          <div className="absolute inset-0 bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 mix-blend-overlay"></div>
        </div>
      </div>

      {/* Page Content */}
      <div className="relative z-10">
        {/* Navigation */}
        <Navbar />

        {/* Page Sections */}
        <div id="main-content">
          <Hero />
          <About />
          <Projects />
          <Contact />
          <Footer />
        </div>
      </div>

      {/* Accessibility Improvements */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 z-50 px-4 py-2 bg-white text-gray-900 rounded-lg shadow-lg font-medium"
      >
        Bỏ qua để đến nội dung chính
      </a>

      {/* Screen Reader Announcements */}
      <div
        aria-live="polite"
        aria-atomic="true"
        className="sr-only"
        id="live-region"
      />

      {/* Error Boundary Fallback */}
      <noscript>
        <div className="fixed inset-0 bg-white z-50 flex items-center justify-center">
          <div className="text-center p-8">
            <h1 className="text-2xl font-bold text-gray-900 mb-4">
              JavaScript không khả dụng
            </h1>
            <p className="text-gray-600 mb-4">
              Trang web này cần JavaScript để hoạt động tốt nhất. Vui lòng bật
              JavaScript trong trình duyệt của bạn.
            </p>
            <p className="text-sm text-gray-500">
              Liên hệ: hoang.designer@gmail.com | +84 123 456 789
            </p>
          </div>
        </div>
      </noscript>
    </main>
  );
}
