"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  Camera,
  Mail,
  Phone,
  MapPin,
  Instagram,
  Twitter,
  Linkedin,
  Heart,
  ExternalLink,
  Calendar,
} from "lucide-react";
import Link from "next/link";

const Footer = () => {
  const footerRef = useRef<HTMLElement>(null);
  const isInView = useInView(footerRef, { once: true, margin: "-100px" });

  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Services", href: "#services" },
    { name: "Contact", href: "#contact" },
  ];

  const services = [
    { name: "Portrait Photography", href: "#services" },
    { name: "Wedding Photography", href: "#services" },
    { name: "Commercial Photography", href: "#services" },
    { name: "Landscape Photography", href: "#services" },
    { name: "Event Photography", href: "#services" },
  ];

  const socialLinks = [
    {
      icon: Instagram,
      href: "https://instagram.com/alexmorgan_photo",
      label: "Instagram",
      followers: "12.5K",
    },
    {
      icon: Twitter,
      href: "https://twitter.com/alexmorgan_photo",
      label: "Twitter",
      followers: "3.2K",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/alexmorgan-photo",
      label: "LinkedIn",
      followers: "1.8K",
    },
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "alex@alexmorgan.photography",
      href: "mailto:alex@alexmorgan.photography",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+1 (555) 123-4567",
      href: "tel:+15551234567",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "New York, NY",
      href: "https://maps.google.com/?q=New+York,+NY",
    },
  ];

  const awards = [
    "Wedding Photographer of the Year 2024",
    "Best Portrait Series - Photography Awards 2023",
    "Commercial Photography Excellence 2023",
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer
      ref={footerRef}
      className="relative bg-dark-950 border-t border-white/10"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-dark-950 to-dark-900"></div>
      <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.02] mix-blend-soft-light"></div>

      <div className="relative z-10">
        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Brand Section */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ duration: 0.8 }}
              className="lg:col-span-1"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <Camera className="w-8 h-8 text-accent-500" />
                  <div className="absolute inset-0 w-8 h-8 bg-accent-500/20 rounded-full blur-lg"></div>
                </div>
                <div>
                  <h3 className="text-2xl font-display font-bold text-white">
                    Alex Morgan
                  </h3>
                  <p className="text-gray-400 text-sm -mt-1">Photography</p>
                </div>
              </div>

              <p className="text-gray-300 leading-relaxed mb-6">
                Capturing life's precious moments through artistic photography.
                Specializing in portraits, weddings, and commercial work with
                over 8 years of professional experience.
              </p>

              {/* Awards */}
              <div className="space-y-2">
                <h4 className="text-white font-semibold text-sm mb-3">
                  Recent Awards
                </h4>
                {awards.map((award, index) => (
                  <motion.div
                    key={award}
                    initial={{ x: -20, opacity: 0 }}
                    animate={isInView ? { x: 0, opacity: 1 } : {}}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                    className="flex items-center space-x-2 text-sm text-gray-400"
                  >
                    <div className="w-1 h-1 bg-accent-500 rounded-full"></div>
                    <span>{award}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <h4 className="text-white font-semibold text-lg mb-6">
                Quick Links
              </h4>
              <ul className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.li
                    key={link.name}
                    initial={{ x: -20, opacity: 0 }}
                    animate={isInView ? { x: 0, opacity: 1 } : {}}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                  >
                    <Link
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(link.href);
                      }}
                      className="text-gray-300 hover:text-accent-400 transition-colors duration-300 flex items-center space-x-2 group"
                    >
                      <span className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-accent-500 transition-colors duration-300"></span>
                      <span>{link.name}</span>
                    </Link>
                  </motion.li>
                ))}
              </ul>

              {/* Newsletter Signup */}
              <div className="mt-8 p-4 bg-dark-800/30 backdrop-blur-sm border border-white/10 rounded-lg">
                <h5 className="text-white font-medium mb-2">Stay Updated</h5>
                <p className="text-gray-400 text-sm mb-3">
                  Get my latest work and photography tips
                </p>
                <div className="flex">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="flex-1 px-3 py-2 bg-dark-700/50 border border-white/20 rounded-l-lg text-white text-sm placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-accent-500"
                  />
                  <button className="px-3 py-2 bg-accent-500 text-white rounded-r-lg text-sm hover:bg-accent-600 transition-colors duration-300">
                    Subscribe
                  </button>
                </div>
              </div>
            </motion.div>

            {/* Services */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <h4 className="text-white font-semibold text-lg mb-6">
                Services
              </h4>
              <ul className="space-y-3">
                {services.map((service, index) => (
                  <motion.li
                    key={service.name}
                    initial={{ x: -20, opacity: 0 }}
                    animate={isInView ? { x: 0, opacity: 1 } : {}}
                    transition={{ delay: 0.6 + index * 0.1, duration: 0.6 }}
                  >
                    <Link
                      href={service.href}
                      onClick={(e) => {
                        e.preventDefault();
                        scrollToSection(service.href);
                      }}
                      className="text-gray-300 hover:text-accent-400 transition-colors duration-300 flex items-center space-x-2 group"
                    >
                      <span className="w-1 h-1 bg-gray-600 rounded-full group-hover:bg-accent-500 transition-colors duration-300"></span>
                      <span>{service.name}</span>
                    </Link>
                  </motion.li>
                ))}
              </ul>

              {/* Availability Status */}
              <div className="mt-8 p-4 bg-green-500/10 border border-green-500/20 rounded-lg">
                <div className="flex items-center space-x-2 mb-2">
                  <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                  <span className="text-green-400 font-medium text-sm">
                    Available for Bookings
                  </span>
                </div>
                <p className="text-gray-300 text-sm">
                  Currently accepting new projects for 2024
                </p>
                <button
                  onClick={() => scrollToSection("#contact")}
                  className="mt-3 text-green-400 text-sm hover:text-green-300 transition-colors duration-300 flex items-center space-x-1"
                >
                  <Calendar className="w-4 h-4" />
                  <span>Book Now</span>
                </button>
              </div>
            </motion.div>

            {/* Contact & Social */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              <h4 className="text-white font-semibold text-lg mb-6">
                Get In Touch
              </h4>

              {/* Contact Information */}
              <div className="space-y-4 mb-8">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={info.label}
                    href={info.href}
                    target={info.href.startsWith("http") ? "_blank" : undefined}
                    rel={
                      info.href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                    initial={{ x: -20, opacity: 0 }}
                    animate={isInView ? { x: 0, opacity: 1 } : {}}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                    className="flex items-center space-x-3 text-gray-300 hover:text-accent-400 transition-colors duration-300 group"
                  >
                    <div className="w-8 h-8 bg-dark-800/50 border border-white/10 rounded-lg flex items-center justify-center group-hover:border-accent-500/30 group-hover:bg-accent-500/10 transition-all duration-300">
                      <info.icon className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase tracking-wide">
                        {info.label}
                      </p>
                      <p className="text-sm font-medium">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>

              {/* Social Media */}
              <div>
                <h5 className="text-white font-medium mb-4">Follow My Work</h5>
                <div className="grid grid-cols-1 gap-3">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      initial={{ x: -20, opacity: 0 }}
                      animate={isInView ? { x: 0, opacity: 1 } : {}}
                      transition={{ delay: 1 + index * 0.1, duration: 0.6 }}
                      whileHover={{ x: 5 }}
                      className="flex items-center justify-between p-3 bg-dark-800/30 backdrop-blur-sm border border-white/10 rounded-lg hover:border-accent-500/30 hover:bg-accent-500/5 transition-all duration-300 group"
                    >
                      <div className="flex items-center space-x-3">
                        <social.icon className="w-5 h-5 text-gray-400 group-hover:text-accent-400 transition-colors duration-300" />
                        <span className="text-gray-300 group-hover:text-white transition-colors duration-300">
                          {social.label}
                        </span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <span className="text-xs text-gray-500">
                          {social.followers}
                        </span>
                        <ExternalLink className="w-4 h-4 text-gray-500 group-hover:text-accent-400 transition-colors duration-300" />
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ delay: 1.2, duration: 0.8 }}
          className="border-t border-white/10 bg-dark-950/50 backdrop-blur-sm"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
            <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
              <div className="flex items-center space-x-4 text-gray-400 text-sm">
                <span>
                  © {currentYear} Alex Morgan Photography. All rights reserved.
                </span>
              </div>

              <div className="flex items-center space-x-6 text-gray-400 text-sm">
                <Link
                  href="#"
                  className="hover:text-accent-400 transition-colors duration-300"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="#"
                  className="hover:text-accent-400 transition-colors duration-300"
                >
                  Terms of Service
                </Link>
                <Link
                  href="#"
                  className="hover:text-accent-400 transition-colors duration-300"
                >
                  Cookie Policy
                </Link>
              </div>

              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <span>Made with</span>
                <Heart className="w-4 h-4 text-accent-500 animate-pulse" />
                <span>in New York</span>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
