"use client";

import { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Navigation from "@/components/Navigation";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import AboutSection from "@/components/AboutSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  const [isClient, setIsClient] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsClient(true);

    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  // Don't render anything until client-side
  if (!isClient) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 flex items-center justify-center">
        <div className="text-center">
          <div className="w-20 h-20 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl flex items-center justify-center mx-auto mb-4 shadow-2xl">
            <svg
              className="w-12 h-12 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">AccountPro</h2>
          <p className="text-gray-600">Đang tải...</p>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Preloader */}
      {isLoading && (
        <div className="fixed inset-0 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 z-50 flex items-center justify-center">
          <div className="text-center">
            <div className="preloader-logo mb-8">
              <div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center mx-auto shadow-2xl animate-pulse">
                <svg
                  className="w-12 h-12 text-blue-600"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2V7h2v10zm4 0h-2v-4h2v4z" />
                </svg>
              </div>
            </div>

            <div className="preloader-text">
              <h2 className="text-3xl font-bold text-white mb-2">AccountPro</h2>
              <p className="text-blue-100 mb-8">Đang tải...</p>

              <div className="w-64 h-2 bg-white/20 rounded-full mx-auto overflow-hidden">
                <div className="h-full bg-white rounded-full animate-pulse"></div>
              </div>
            </div>
          </div>
        </div>
      )}

      {!isLoading && (
        <div>
          <Navigation />
          <main>
            {/* Hero Section */}
            <HeroSection />

            {/* Services Section */}
            <ServicesSection />

            {/* About Section */}
            <AboutSection />

            {/* Contact Section */}
            <ContactSection />
          </main>

          {/* Footer */}
          <Footer />
        </div>
      )}
    </>
  );
}
