"use client";

import { gsap } from "gsap";
import {
  ArrowRight,
  Building2,
  Calendar,
  CheckCircle,
  Gift,
  Heart,
  Home,
  Palette,
  Sparkles,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface Service {
  id: number;
  icon: any;
  title: string;
  description: string;
  features: string[];
  price: string;
  popular: boolean;
  color: string;
  bgGradient: string;
}

const Services: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const processRef = useRef<HTMLDivElement>(null);
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  const services: Service[] = [
    {
      id: 1,
      icon: Heart,
      title: "Wedding Florals",
      description:
        "Complete wedding floral design from bridal bouquets to ceremony decorations",
      features: [
        "Bridal & Bridesmaid Bouquets",
        "Ceremony Arch & Aisle Decor",
        "Reception Centerpieces",
        "Boutonnières & Corsages",
        "Consultation & Design",
        "Day-of Delivery & Setup",
      ],
      price: "From $2,500",
      popular: true,
      color: "rose",
      bgGradient: "from-rose-500 to-pink-500",
    },
    {
      id: 2,
      icon: Building2,
      title: "Corporate Events",
      description:
        "Professional floral arrangements for corporate gatherings and events",
      features: [
        "Office Event Decorations",
        "Conference Table Arrangements",
        "Lobby & Reception Displays",
        "Corporate Party Florals",
        "Seasonal Office Decor",
        "Brand Color Coordination",
      ],
      price: "From $800",
      popular: false,
      color: "blue",
      bgGradient: "from-blue-500 to-indigo-500",
    },
    {
      id: 3,
      icon: Gift,
      title: "Special Occasions",
      description:
        "Beautiful arrangements for birthdays, anniversaries, and celebrations",
      features: [
        "Birthday Bouquets",
        "Anniversary Arrangements",
        "Graduation Florals",
        "Holiday Decorations",
        "Custom Celebrations",
        "Same-day Delivery",
      ],
      price: "From $150",
      popular: false,
      color: "purple",
      bgGradient: "from-purple-500 to-pink-500",
    },
    {
      id: 4,
      icon: Home,
      title: "Home Decor",
      description:
        "Transform your living space with beautiful seasonal arrangements",
      features: [
        "Seasonal Home Arrangements",
        "Weekly Fresh Flowers",
        "Custom Vase Designs",
        "Plant Care Consultation",
        "Interior Design Florals",
        "Maintenance Service",
      ],
      price: "From $200",
      popular: false,
      color: "green",
      bgGradient: "from-green-500 to-emerald-500",
    },
  ];

  const processSteps = [
    {
      step: "01",
      title: "Consultation",
      description:
        "We discuss your vision, style preferences, and budget to create the perfect floral plan.",
      icon: Calendar,
    },
    {
      step: "02",
      title: "Design",
      description:
        "I create custom designs and mood boards tailored to your specific event and aesthetic.",
      icon: Palette,
    },
    {
      step: "03",
      title: "Creation",
      description:
        "Using the finest fresh flowers, I craft each arrangement with meticulous attention to detail.",
      icon: Sparkles,
    },
    {
      step: "04",
      title: "Delivery",
      description:
        "Professional delivery and setup ensures your florals are perfectly placed and pristine.",
      icon: CheckCircle,
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        titleRef.current,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Services cards animation
      gsap.fromTo(
        servicesRef.current?.children,
        {
          y: 80,
          opacity: 0,
          rotationX: 15,
        },
        {
          y: 0,
          opacity: 1,
          rotationX: 0,
          duration: 1,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: servicesRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Process steps animation
      gsap.fromTo(
        processRef.current?.children,
        {
          x: -50,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: processRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            ref={titleRef}
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            My{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-500">
              Services
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From intimate celebrations to grand events, I provide comprehensive
            floral design services tailored to bring your vision to life with
            elegance and artistry.
          </p>
        </div>

        {/* Services Grid */}
        <div
          ref={servicesRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {services.map((service) => {
            const IconComponent = service.icon;
            return (
              <div
                key={service.id}
                className={`relative group bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 ${
                  service.popular ? "ring-2 ring-rose-500 ring-opacity-50" : ""
                }`}
                onMouseEnter={() => setHoveredService(service.id)}
                onMouseLeave={() => setHoveredService(null)}
              >
                {/* Popular Badge */}
                {service.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-gradient-to-r from-rose-500 to-pink-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                      Most Popular
                    </span>
                  </div>
                )}

                {/* Icon */}
                <div
                  className={`w-16 h-16 mx-auto mb-6 bg-gradient-to-r ${
                    service.bgGradient
                  } rounded-2xl flex items-center justify-center transform transition-transform duration-300 ${
                    hoveredService === service.id ? "scale-110 rotate-6" : ""
                  }`}
                >
                  <IconComponent size={28} className="text-white" />
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-xl font-bold text-gray-900 mb-3">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2 mb-6 text-left">
                    {service.features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-center gap-2 text-sm text-gray-600"
                      >
                        <CheckCircle
                          size={16}
                          className="text-green-500 flex-shrink-0"
                        />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>

                  {/* Price */}
                  <div className="text-2xl font-bold text-gray-900 mb-6">
                    {service.price}
                  </div>

                  {/* CTA Button */}
                  <button
                    className={`w-full py-3 bg-gradient-to-r ${service.bgGradient} text-white font-semibold rounded-xl hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2`}
                  >
                    Get Quote
                    <ArrowRight size={16} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Process Section */}
        <div className="bg-gradient-to-br from-gray-50 to-rose-50 rounded-3xl p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              My Creative{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-500">
                Process
              </span>
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From initial consultation to final delivery, every step is
              carefully planned to ensure your floral arrangements exceed
              expectations.
            </p>
          </div>

          <div
            ref={processRef}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {processSteps.map((step, index) => {
              const IconComponent = step.icon;
              return (
                <div key={index} className="relative">
                  {/* Connector Line */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-full w-full h-0.5 bg-gradient-to-r from-rose-300 to-pink-300 transform translate-x-4 z-0"></div>
                  )}

                  <div className="relative z-10 text-center">
                    {/* Step Number */}
                    <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-lg">
                        {step.step}
                      </span>
                    </div>

                    {/* Icon */}
                    <div className="w-12 h-12 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-md">
                      <IconComponent size={20} className="text-rose-500" />
                    </div>

                    {/* Content */}
                    <h4 className="text-xl font-bold text-gray-900 mb-3">
                      {step.title}
                    </h4>
                    <p className="text-gray-600 leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">
            Ready to bring your vision to life?
          </h3>
          <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
            Let's create something beautiful together. Contact me today for a
            personalized consultation.
          </p>
          <button className="px-8 py-4 bg-gradient-to-r from-rose-500 to-pink-500 text-white font-semibold rounded-full hover:from-rose-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
            Start Your Project
          </button>
        </div>
      </div>
    </section>
  );
};

export default Services;
