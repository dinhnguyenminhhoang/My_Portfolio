"use client";

import React, { useEffect, useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import {
  Camera,
  Users,
  Heart,
  Briefcase,
  Mountain,
  Calendar,
  Clock,
  DollarSign,
  Star,
  Check,
} from "lucide-react";
import { gsap } from "gsap";

const ServicesSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const pricingRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.5, 1], [0, 1, 0]);

  // GSAP Animations
  useEffect(() => {
    if (isInView && servicesRef.current && pricingRef.current) {
      const tl = gsap.timeline();

      // Services animation
      tl.fromTo(
        ".service-card",
        { y: 50, opacity: 0, scale: 0.9 },
        {
          y: 0,
          opacity: 1,
          scale: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
        }
      )
        // Pricing cards animation
        .fromTo(
          ".pricing-card",
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out",
          },
          "-=0.4"
        );
    }
  }, [isInView]);

  const services = [
    {
      icon: Users,
      title: "Portrait Photography",
      description:
        "Professional portraits that capture your unique personality and style.",
      features: [
        "Individual portraits",
        "Family sessions",
        "Professional headshots",
        "Creative concepts",
      ],
      price: "Starting at $299",
      duration: "1-2 hours",
      deliverables: "20-30 edited photos",
      popular: false,
    },
    {
      icon: Heart,
      title: "Wedding Photography",
      description:
        "Complete wedding coverage to preserve your most precious moments.",
      features: [
        "Full day coverage",
        "Engagement session",
        "Online gallery",
        "Print release",
      ],
      price: "Starting at $2,499",
      duration: "8-10 hours",
      deliverables: "500+ edited photos",
      popular: true,
    },
    {
      icon: Briefcase,
      title: "Commercial Photography",
      description:
        "Professional imagery for brands, products, and corporate needs.",
      features: [
        "Product photography",
        "Corporate events",
        "Brand imagery",
        "Marketing materials",
      ],
      price: "Starting at $599",
      duration: "2-4 hours",
      deliverables: "50+ edited photos",
      popular: false,
    },
    {
      icon: Mountain,
      title: "Landscape Photography",
      description:
        "Breathtaking nature and architectural photography for art collectors.",
      features: [
        "Fine art prints",
        "Location scouting",
        "Golden hour sessions",
        "Custom framing",
      ],
      price: "Starting at $399",
      duration: "3-6 hours",
      deliverables: "15-25 edited photos",
      popular: false,
    },
  ];

  const pricingPlans = [
    {
      name: "Essential",
      price: "$299",
      period: "per session",
      description: "Perfect for individual portraits and small sessions",
      features: [
        "1-2 hour session",
        "20-30 edited photos",
        "Online gallery",
        "High-resolution downloads",
        "Print release",
        "2 weeks delivery",
      ],
      buttonText: "Book Essential",
      popular: false,
    },
    {
      name: "Professional",
      price: "$599",
      period: "per session",
      description: "Ideal for commercial and extended portrait sessions",
      features: [
        "2-4 hour session",
        "50+ edited photos",
        "Online gallery",
        "High-resolution downloads",
        "Print release",
        "1 week delivery",
        "Location scouting",
        "Multiple outfit changes",
      ],
      buttonText: "Book Professional",
      popular: true,
    },
    {
      name: "Premium",
      price: "$1,299",
      period: "per session",
      description: "Comprehensive package for special events and campaigns",
      features: [
        "4-8 hour session",
        "100+ edited photos",
        "Online gallery",
        "High-resolution downloads",
        "Print release",
        "3 days delivery",
        "Multiple locations",
        "Creative direction",
        "Rush delivery available",
      ],
      buttonText: "Book Premium",
      popular: false,
    },
  ];

  const stats = [
    { number: "500+", label: "Projects Completed", icon: Camera },
    { number: "200+", label: "Happy Clients", icon: Users },
    { number: "15+", label: "Awards Won", icon: Star },
    { number: "8+", label: "Years Experience", icon: Calendar },
  ];

  return (
    <section
      ref={sectionRef}
      id="services"
      className="py-20 lg:py-32 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-900 via-dark-950 to-black"></div>
      <motion.div
        style={{ y, opacity }}
        className="absolute top-20 left-20 w-64 h-64 bg-accent-500/5 rounded-full blur-3xl"
      />
      <motion.div
        style={{ y: useTransform(scrollYProgress, [0, 1], [-30, 30]) }}
        className="absolute bottom-20 right-20 w-48 h-48 bg-gold-500/5 rounded-full blur-2xl"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-accent-500 font-semibold text-lg">
            Services
          </span>
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mt-2 mb-6">
            Photography <span className="text-gradient">Services</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            From intimate portraits to grand celebrations, I offer comprehensive
            photography services tailored to capture your unique story with
            artistic excellence.
          </p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              whileHover={{ y: -5, scale: 1.02 }}
              className="text-center group"
            >
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-br from-accent-500/20 to-gold-500/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <stat.icon className="w-8 h-8 text-accent-500 group-hover:text-gold-500 transition-colors duration-300" />
                </div>
              </div>
              <motion.h3
                className="text-3xl lg:text-4xl font-bold text-white mb-2"
                initial={{ scale: 0.8 }}
                animate={isInView ? { scale: 1 } : {}}
                transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
              >
                {stat.number}
              </motion.h3>
              <p className="text-gray-400 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>

        {/* Services Grid */}
        <div ref={servicesRef} className="grid lg:grid-cols-2 gap-8 mb-24">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              whileHover={{ y: -10, scale: 1.02 }}
              className="service-card relative group"
            >
              <div className="bg-dark-800/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 glass-effect h-full">
                {service.popular && (
                  <div className="absolute -top-3 left-6">
                    <span className="px-4 py-1 bg-accent-500 text-white text-sm font-semibold rounded-full">
                      Most Popular
                    </span>
                  </div>
                )}

                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-accent-500/20 to-gold-500/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-accent-500 group-hover:text-gold-500 transition-colors duration-300" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-2xl font-display font-bold text-white mb-2 group-hover:text-gradient transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {service.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  {service.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-accent-500 flex-shrink-0" />
                      <span className="text-gray-300">{feature}</span>
                    </div>
                  ))}
                </div>

                <div className="border-t border-white/10 pt-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <DollarSign className="w-5 h-5 text-gold-500" />
                      <span className="text-white font-semibold">
                        {service.price}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-5 h-5 text-blue-400" />
                      <span className="text-gray-300 text-sm">
                        {service.duration}
                      </span>
                    </div>
                  </div>
                  <div className="text-gray-400 text-sm">
                    📸 {service.deliverables}
                  </div>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-full mt-6 px-6 py-3 bg-accent-500/10 border border-accent-500 text-accent-500 rounded-lg font-semibold hover:bg-accent-500 hover:text-white transition-all duration-300"
                >
                  Learn More
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Pricing Section */}
        <div className="mb-16">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ delay: 1, duration: 0.8 }}
            className="text-center mb-12"
          >
            <h3 className="text-3xl lg:text-4xl font-display font-bold text-white mb-4">
              Choose Your <span className="text-gradient">Package</span>
            </h3>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Flexible pricing options designed to meet your photography needs
              and budget.
            </p>
          </motion.div>

          <div ref={pricingRef} className="grid lg:grid-cols-3 gap-8">
            {pricingPlans.map((plan, index) => (
              <motion.div
                key={plan.name}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`pricing-card relative ${
                  plan.popular ? "lg:scale-105 lg:-mt-4" : ""
                }`}
              >
                <div
                  className={`bg-dark-800/50 backdrop-blur-xl border rounded-2xl p-8 glass-effect h-full ${
                    plan.popular
                      ? "border-accent-500 shadow-lg shadow-accent-500/25"
                      : "border-white/10"
                  }`}
                >
                  {plan.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <span className="px-4 py-1 bg-accent-500 text-white text-sm font-semibold rounded-full">
                        Recommended
                      </span>
                    </div>
                  )}

                  <div className="text-center mb-8">
                    <h4 className="text-2xl font-display font-bold text-white mb-2">
                      {plan.name}
                    </h4>
                    <div className="mb-4">
                      <span className="text-4xl font-bold text-gradient">
                        {plan.price}
                      </span>
                      <span className="text-gray-400 ml-2">{plan.period}</span>
                    </div>
                    <p className="text-gray-300">{plan.description}</p>
                  </div>

                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-3">
                        <Check className="w-5 h-5 text-accent-500 flex-shrink-0" />
                        <span className="text-gray-300">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-full px-6 py-4 rounded-lg font-semibold transition-all duration-300 ${
                      plan.popular
                        ? "bg-accent-500 text-white hover:bg-accent-600 shadow-lg hover-glow"
                        : "bg-dark-700 text-white hover:bg-accent-500 border border-white/10"
                    }`}
                  >
                    {plan.buttonText}
                  </motion.button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ y: 50, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 1.5, duration: 0.8 }}
          className="text-center"
        >
          <div className="bg-gradient-to-r from-dark-800/50 to-dark-700/50 backdrop-blur-xl border border-white/10 rounded-2xl p-8 lg:p-12 glass-effect">
            <h3 className="text-2xl lg:text-3xl font-display font-bold text-white mb-4">
              Ready to Book Your Session?
            </h3>
            <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
              Let's discuss your vision and create something beautiful together.
              Contact me today for a personalized quote and consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const element = document.querySelector("#contact");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-8 py-4 bg-accent-500 text-white rounded-lg font-semibold text-lg hover-glow transition-all duration-300 group"
              >
                <span className="flex items-center justify-center">
                  Get Free Quote
                  <Camera className="ml-2 w-5 h-5 group-hover:rotate-12 transition-transform duration-300" />
                </span>
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border-2 border-white/30 text-white rounded-lg font-semibold text-lg hover:border-accent-500 hover:bg-accent-500/10 transition-all duration-300"
              >
                View Portfolio
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
