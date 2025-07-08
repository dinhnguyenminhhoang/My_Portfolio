"use client";
import { Flower2, Phone } from "lucide-react";
import React, { useEffect } from "react";

const Header = () => {
  useEffect(() => {
    // Simple scroll to function
    const scrollTo = (target: string) => {
      const element = document.querySelector(target);
      if (element) {
        const offsetTop =
          element.getBoundingClientRect().top + window.pageYOffset - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    };

    // Add click listeners for navigation
    const handleNavClick = (e: Event) => {
      const target = e.target as HTMLElement;
      if (target && target.getAttribute) {
        const href =
          target.getAttribute("href") || target.getAttribute("data-scroll-to");
        if (href && href.startsWith("#")) {
          e.preventDefault();
          scrollTo(href);
        }
      }
    };

    document.addEventListener("click", handleNavClick);

    // Simple animations on scroll
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fadeInUp");
        }
      });
    }, observerOptions);

    // Observe all sections
    const sections = document.querySelectorAll("section");
    sections.forEach((section) => observer.observe(section));

    return () => {
      document.removeEventListener("click", handleNavClick);
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop =
        element.getBoundingClientRect().top + window.pageYOffset - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };
  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-lg border-b border-rose-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6">
          <nav className="flex items-center justify-between py-4">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-rose-500 to-pink-500 rounded-xl flex items-center justify-center shadow-lg">
                <Flower2 className="w-7 h-7 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold font-playfair text-rose-600">
                  Flowries
                </span>
                <p className="text-xs text-gray-500 -mt-1">Floral Artist</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center space-x-8">
              <button
                onClick={() => scrollToSection("home")}
                className="relative text-gray-700 hover:text-rose-600 transition-colors font-medium group"
              >
                Trang chủ
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-rose-500 group-hover:w-full transition-all duration-300"></span>
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="relative text-gray-700 hover:text-rose-600 transition-colors font-medium group"
              >
                Về chúng tôi
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-rose-500 group-hover:w-full transition-all duration-300"></span>
              </button>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="relative text-gray-700 hover:text-rose-600 transition-colors font-medium group"
              >
                Portfolio
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-rose-500 group-hover:w-full transition-all duration-300"></span>
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="relative text-gray-700 hover:text-rose-600 transition-colors font-medium group"
              >
                Dịch vụ
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-rose-500 group-hover:w-full transition-all duration-300"></span>
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="relative text-gray-700 hover:text-rose-600 transition-colors font-medium group"
              >
                Liên hệ
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-rose-500 group-hover:w-full transition-all duration-300"></span>
              </button>
            </div>

            {/* CTA Button & Mobile Menu */}
            <div className="flex items-center gap-4">
              {/* CTA Button */}
              <button
                onClick={() => scrollToSection("contact")}
                className="hidden md:flex items-center gap-2 px-6 py-2.5 bg-gradient-to-r from-rose-500 to-pink-500 text-white font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                <Phone className="w-4 h-4" />
                Tư vấn ngay
              </button>

              {/* Mobile Menu Button */}
              <button
                id="mobile-menu-btn"
                className="lg:hidden w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center hover:bg-gray-200 transition-colors"
                onClick={() => {
                  const menu = document.getElementById("mobile-menu");
                  if (menu) {
                    menu.classList.toggle("hidden");
                  }
                }}
              >
                <svg
                  className="w-5 h-5 text-gray-700"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </nav>

          {/* Mobile Menu */}
          <div
            id="mobile-menu"
            className="hidden lg:hidden bg-white border-t border-rose-100 py-4"
          >
            <div className="space-y-3">
              {[
                { name: "Trang chủ", id: "home" },
                { name: "Về chúng tôi", id: "about" },
                { name: "Portfolio", id: "portfolio" },
                { name: "Dịch vụ", id: "services" },
                { name: "Liên hệ", id: "contact" },
              ].map((item, index) => (
                <button
                  key={index}
                  onClick={() => {
                    scrollToSection(item.id);
                    document
                      .getElementById("mobile-menu")
                      ?.classList.add("hidden");
                  }}
                  className="block w-full text-left px-4 py-3 text-gray-700 hover:text-rose-600 hover:bg-rose-50 transition-colors rounded-lg font-medium"
                >
                  {item.name}
                </button>
              ))}

              {/* Mobile CTA */}
              <div className="pt-3 border-t border-gray-100">
                <button
                  onClick={() => {
                    scrollToSection("contact");
                    document
                      .getElementById("mobile-menu")
                      ?.classList.add("hidden");
                  }}
                  className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-gradient-to-r from-rose-500 to-pink-500 text-white font-semibold rounded-lg shadow-lg"
                >
                  <Phone className="w-4 h-4" />
                  Tư vấn ngay
                </button>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
