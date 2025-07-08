"use client";

import React, { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Calendar,
  Camera,
  Send,
  CheckCircle,
  AlertCircle,
  Instagram,
  Twitter,
  Linkedin,
} from "lucide-react";
import { gsap } from "gsap";

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  date: string;
  budget: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    budget: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const contactInfoRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  // GSAP Animations
  useEffect(() => {
    if (isInView && formRef.current && contactInfoRef.current) {
      const tl = gsap.timeline();

      tl.fromTo(
        contactInfoRef.current,
        { x: -50, opacity: 0 },
        { x: 0, opacity: 1, duration: 1, ease: "power3.out" }
      ).fromTo(
        ".form-field",
        { y: 30, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
        },
        "-=0.8"
      );
    }
  }, [isInView]);

  const services = [
    "Portrait Photography",
    "Wedding Photography",
    "Commercial Photography",
    "Landscape Photography",
    "Event Photography",
    "Product Photography",
    "Other (Please specify in message)",
  ];

  const budgetRanges = [
    "Under $500",
    "$500 - $1,000",
    "$1,000 - $2,500",
    "$2,500 - $5,000",
    "$5,000 - $10,000",
    "Over $10,000",
  ];

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "alex@alexmorgan.photography",
      link: "mailto:alex@alexmorgan.photography",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (555) 123-4567",
      link: "tel:+15551234567",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "New York, NY",
      link: "https://maps.google.com/?q=New+York,+NY",
    },
    {
      icon: Calendar,
      title: "Availability",
      value: "Mon - Sat, 9AM - 6PM",
      link: null,
    },
  ];

  const socialLinks = [
    {
      icon: Instagram,
      href: "https://instagram.com/alexmorgan_photo",
      label: "Instagram",
    },
    {
      icon: Twitter,
      href: "https://twitter.com/alexmorgan_photo",
      label: "Twitter",
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/alexmorgan-photo",
      label: "LinkedIn",
    },
  ];

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    if (!formData.service) {
      newErrors.service = "Please select a service";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Message must be at least 10 characters long";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    setIsSubmitting(true);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        date: "",
        budget: "",
        message: "",
      });

      setSubmitStatus("success");

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    } catch (error) {
      setSubmitStatus("error");
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-20 lg:py-32 relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-950 via-black to-dark-900"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <span className="text-accent-500 font-semibold text-lg">Contact</span>
          <h2 className="text-4xl lg:text-5xl font-display font-bold text-white mt-2 mb-6">
            Let's Create Something{" "}
            <span className="text-gradient">Amazing</span>
          </h2>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Ready to bring your vision to life? Get in touch and let's discuss
            your photography needs. I'd love to hear about your project and
            provide you with a personalized quote.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div ref={contactInfoRef} className="space-y-8">
            <div>
              <h3 className="text-2xl font-display font-bold text-white mb-6">
                Get In Touch
              </h3>
              <p className="text-gray-300 leading-relaxed mb-8">
                I'm always excited to work with new clients and bring creative
                visions to life. Whether you're planning a wedding, need
                professional headshots, or have a commercial project in mind,
                let's discuss how we can create something extraordinary
                together.
              </p>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ x: -30, opacity: 0 }}
                  animate={isInView ? { x: 0, opacity: 1 } : {}}
                  transition={{ delay: 0.3 + index * 0.1, duration: 0.6 }}
                  className="group"
                >
                  {info.link ? (
                    <a
                      href={info.link}
                      target={
                        info.link.startsWith("http") ? "_blank" : undefined
                      }
                      rel={
                        info.link.startsWith("http")
                          ? "noopener noreferrer"
                          : undefined
                      }
                      className="flex items-center space-x-4 p-4 bg-dark-800/30 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-dark-700/50 hover:border-accent-500/30 transition-all duration-300 group-hover:scale-105"
                    >
                      <div className="w-12 h-12 bg-gradient-to-br from-accent-500/20 to-gold-500/20 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <info.icon className="w-6 h-6 text-accent-500" />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm font-medium">
                          {info.title}
                        </p>
                        <p className="text-white font-semibold group-hover:text-accent-400 transition-colors duration-300">
                          {info.value}
                        </p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-center space-x-4 p-4 bg-dark-800/30 backdrop-blur-sm border border-white/10 rounded-xl">
                      <div className="w-12 h-12 bg-gradient-to-br from-accent-500/20 to-gold-500/20 rounded-lg flex items-center justify-center">
                        <info.icon className="w-6 h-6 text-accent-500" />
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm font-medium">
                          {info.title}
                        </p>
                        <p className="text-white font-semibold">{info.value}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Social Links */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 0.8, duration: 0.6 }}
              className="pt-8 border-t border-white/10"
            >
              <h4 className="text-lg font-semibold text-white mb-4">
                Follow My Work
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-12 h-12 bg-dark-800/50 backdrop-blur-sm border border-white/10 rounded-lg flex items-center justify-center text-gray-400 hover:text-accent-400 hover:border-accent-500/30 hover:bg-accent-500/10 transition-all duration-300"
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Response Time Notice */}
            <motion.div
              initial={{ y: 30, opacity: 0 }}
              animate={isInView ? { y: 0, opacity: 1 } : {}}
              transition={{ delay: 1, duration: 0.6 }}
              className="bg-gradient-to-r from-accent-500/10 to-gold-500/10 border border-accent-500/20 rounded-xl p-6"
            >
              <div className="flex items-start space-x-3">
                <Camera className="w-6 h-6 text-accent-500 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-white font-semibold mb-2">
                    Quick Response Guarantee
                  </h4>
                  <p className="text-gray-300 text-sm leading-relaxed">
                    I typically respond to all inquiries within 24 hours. For
                    urgent requests, feel free to call directly at +1 (555)
                    123-4567.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Contact Form */}
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={isInView ? { x: 0, opacity: 1 } : {}}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="bg-dark-800/30 backdrop-blur-xl border border-white/10 rounded-2xl p-8 glass-effect"
          >
            <h3 className="text-2xl font-display font-bold text-white mb-6">
              Send Me a Message
            </h3>

            {/* Success/Error Messages */}
            <AnimatePresence>
              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mb-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg flex items-center space-x-3"
                >
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <p className="text-green-400 font-medium">
                    Thank you! Your message has been sent successfully. I'll get
                    back to you soon.
                  </p>
                </motion.div>
              )}

              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mb-6 p-4 bg-red-500/10 border border-red-500/30 rounded-lg flex items-center space-x-3"
                >
                  <AlertCircle className="w-5 h-5 text-red-500" />
                  <p className="text-red-400 font-medium">
                    Oops! Something went wrong. Please try again or contact me
                    directly.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              {/* Name and Email Row */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="form-field">
                  <label
                    htmlFor="name"
                    className="block text-white font-medium mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-dark-700/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all duration-300 ${
                      errors.name ? "border-red-500" : "border-white/20"
                    }`}
                    placeholder="Enter your full name"
                  />
                  {errors.name && (
                    <p className="mt-2 text-red-400 text-sm">{errors.name}</p>
                  )}
                </div>

                <div className="form-field">
                  <label
                    htmlFor="email"
                    className="block text-white font-medium mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-dark-700/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all duration-300 ${
                      errors.email ? "border-red-500" : "border-white/20"
                    }`}
                    placeholder="your@email.com"
                  />
                  {errors.email && (
                    <p className="mt-2 text-red-400 text-sm">{errors.email}</p>
                  )}
                </div>
              </div>

              {/* Phone and Service Row */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="form-field">
                  <label
                    htmlFor="phone"
                    className="block text-white font-medium mb-2"
                  >
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-dark-700/50 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all duration-300"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div className="form-field">
                  <label
                    htmlFor="service"
                    className="block text-white font-medium mb-2"
                  >
                    Service Type *
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className={`w-full px-4 py-3 bg-dark-700/50 border rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all duration-300 ${
                      errors.service ? "border-red-500" : "border-white/20"
                    }`}
                  >
                    <option value="">Select a service</option>
                    {services.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                  {errors.service && (
                    <p className="mt-2 text-red-400 text-sm">
                      {errors.service}
                    </p>
                  )}
                </div>
              </div>

              {/* Date and Budget Row */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="form-field">
                  <label
                    htmlFor="date"
                    className="block text-white font-medium mb-2"
                  >
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleInputChange}
                    min={new Date().toISOString().split("T")[0]}
                    className="w-full px-4 py-3 bg-dark-700/50 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all duration-300"
                  />
                </div>

                <div className="form-field">
                  <label
                    htmlFor="budget"
                    className="block text-white font-medium mb-2"
                  >
                    Budget Range
                  </label>
                  <select
                    id="budget"
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-dark-700/50 border border-white/20 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all duration-300"
                  >
                    <option value="">Select budget range</option>
                    {budgetRanges.map((range) => (
                      <option key={range} value={range}>
                        {range}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="form-field">
                <label
                  htmlFor="message"
                  className="block text-white font-medium mb-2"
                >
                  Project Details *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className={`w-full px-4 py-3 bg-dark-700/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent-500 focus:border-transparent transition-all duration-300 resize-none ${
                    errors.message ? "border-red-500" : "border-white/20"
                  }`}
                  placeholder="Tell me about your project, vision, and any specific requirements..."
                />
                {errors.message && (
                  <p className="mt-2 text-red-400 text-sm">{errors.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                whileHover={!isSubmitting ? { scale: 1.02, y: -2 } : {}}
                whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                className={`w-full px-8 py-4 rounded-lg font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-2 ${
                  isSubmitting
                    ? "bg-gray-600 text-gray-300 cursor-not-allowed"
                    : "bg-accent-500 text-white hover:bg-accent-600 hover-glow"
                }`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-gray-300 border-t-transparent rounded-full animate-spin"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>Send Message</span>
                  </>
                )}
              </motion.button>
            </form>

            {/* Form Footer */}
            <div className="mt-6 pt-6 border-t border-white/10 text-center">
              <p className="text-gray-400 text-sm">
                By submitting this form, you agree to our{" "}
                <a
                  href="#"
                  className="text-accent-400 hover:text-accent-300 transition-colors duration-300"
                >
                  privacy policy
                </a>{" "}
                and{" "}
                <a
                  href="#"
                  className="text-accent-400 hover:text-accent-300 transition-colors duration-300"
                >
                  terms of service
                </a>
                .
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
