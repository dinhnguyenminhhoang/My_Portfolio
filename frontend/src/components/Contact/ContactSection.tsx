"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  MessageCircle,
  Clock,
  Globe,
  Zap,
  Check,
  ArrowRight,
  Star,
  Calendar,
  User,
  FileText,
  Heart,
} from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

interface ContactSectionProps {
  className?: string;
}

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "john.doe@example.com",
    href: "mailto:john.doe@example.com",
    color: "from-blue-500 to-purple-500",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "+1 (555) 123-4567",
    href: "tel:+15551234567",
    color: "from-green-500 to-blue-500",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "San Francisco, CA",
    href: "https://maps.google.com",
    color: "from-purple-500 to-pink-500",
  },
  {
    icon: Globe,
    label: "Website",
    value: "www.johndoe.dev",
    href: "https://johndoe.dev",
    color: "from-orange-500 to-red-500",
  },
];

const socialLinks = [
  {
    icon: Github,
    name: "GitHub",
    href: "https://github.com/johndoe",
    color: "hover:text-gray-300",
  },
  {
    icon: Linkedin,
    name: "LinkedIn",
    href: "https://linkedin.com/in/johndoe",
    color: "hover:text-blue-400",
  },
  {
    icon: Twitter,
    name: "Twitter",
    href: "https://twitter.com/johndoe",
    color: "hover:text-blue-400",
  },
  {
    icon: Instagram,
    name: "Instagram",
    href: "https://instagram.com/johndoe",
    color: "hover:text-pink-400",
  },
];

const availability = [
  { day: "Monday - Friday", time: "9:00 AM - 6:00 PM PST" },
  { day: "Saturday", time: "10:00 AM - 4:00 PM PST" },
  { day: "Sunday", time: "Emergency only" },
];

export default function ContactSection({
  className = "",
}: ContactSectionProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [sparkles, setSparkles] = useState<
    Array<{ id: number; left: number; top: number; animationDelay: number }>
  >([]);

  // Generate sparkles only on client side
  useEffect(() => {
    const generatedSparkles = [...Array(20)].map((_, i) => ({
      id: i,
      left: Math.random() * 100,
      top: Math.random() * 100,
      animationDelay: Math.random() * 2,
    }));
    setSparkles(generatedSparkles);
  }, []);
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  // GSAP Animations
  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      });

      // Title animation
      tl.fromTo(
        titleRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power2.out" }
      );

      // Contact info animation
      tl.fromTo(
        ".contact-info-item",
        { opacity: 0, x: -30 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.1,
        },
        "-=0.5"
      );

      // Form animation
      tl.fromTo(
        ".form-field",
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          ease: "power2.out",
          stagger: 0.1,
        },
        "-=0.4"
      );

      // Social links animation
      tl.fromTo(
        ".social-link",
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: "back.out(1.7)",
          stagger: 0.1,
        },
        "-=0.3"
      );

      // Floating particles animation
      gsap.to(".contact-particle", {
        y: "random(-20, 20)",
        x: "random(-20, 20)",
        rotation: "random(-180, 180)",
        duration: "random(4, 8)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        stagger: 0.3,
      });
    },
    { scope: sectionRef }
  );

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!formData.subject.trim()) newErrors.subject = "Subject is required";
    if (!formData.message.trim()) newErrors.message = "Message is required";

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (formData.email && !emailRegex.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Reset success message after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    }, 2000);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className={`relative py-20 lg:py-32 overflow-hidden ${className}`}
    >
      {/* Background particles */}
      <div className="absolute inset-0 pointer-events-none">
        {sparkles.map((sparkle, i) => (
          <div
            key={i}
            className="contact-particle absolute"
            style={{
              left: `${sparkle.left}%`,
              top: `${sparkle.top}%`,
              animationDelay: `${sparkle.animationDelay}s`,
            }}
          >
            <MessageCircle className="w-2 h-2 text-purple-400/10" />
          </div>
        ))}
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="text-center mb-16">
          <motion.div
            ref={titleRef}
            className="inline-flex items-center space-x-2 px-4 py-2 bg-purple-500/10 backdrop-blur-sm rounded-full border border-purple-500/20 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <MessageCircle className="w-5 h-5 text-purple-400" />
            <span className="text-purple-300 font-medium">Get In Touch</span>
          </motion.div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
            <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 bg-clip-text text-transparent">
              Let's Work Together
            </span>
          </h2>

          <p className="text-xl text-white/70 max-w-3xl mx-auto">
            Have a project in mind? I'd love to hear about it. Let's discuss how
            we can bring your ideas to life.
          </p>
        </div>

        <div ref={ref} className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-8">
            {/* Contact Info Cards */}
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center space-x-2">
                <Phone className="w-6 h-6 text-purple-400" />
                <span>Contact Information</span>
              </h3>

              {contactInfo.map((info, index) => (
                <motion.a
                  key={info.label}
                  href={info.href}
                  className="contact-info-item group block p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 hover:border-purple-500/30 transition-all duration-300"
                  whileHover={{ scale: 1.02, x: 10 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <div className="flex items-center space-x-4">
                    <div
                      className={`p-3 bg-gradient-to-r ${info.color} rounded-lg`}
                    >
                      <info.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-white group-hover:text-purple-300 transition-colors">
                        {info.label}
                      </h4>
                      <p className="text-white/70 group-hover:text-white/90 transition-colors">
                        {info.value}
                      </p>
                    </div>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Availability */}
            <div className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
              <h4 className="text-xl font-bold text-white mb-4 flex items-center space-x-2">
                <Clock className="w-5 h-5 text-green-400" />
                <span>Availability</span>
              </h4>
              <div className="space-y-3">
                {availability.map((schedule, index) => (
                  <div
                    key={index}
                    className="flex items-center justify-between"
                  >
                    <span className="text-white/70">{schedule.day}</span>
                    <span className="text-white font-medium">
                      {schedule.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div className="space-y-4">
              <h4 className="text-xl font-bold text-white flex items-center space-x-2">
                <Star className="w-5 h-5 text-yellow-400" />
                <span>Follow Me</span>
              </h4>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`social-link p-3 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10 text-white/70 ${social.color} transition-all duration-300 hover:bg-white/10 hover:border-white/20`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="space-y-8">
            <div className="p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
              <h3 className="text-2xl font-bold text-white mb-6 flex items-center space-x-2">
                <Send className="w-6 h-6 text-blue-400" />
                <span>Send Message</span>
              </h3>

              {isSubmitted && (
                <motion.div
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-6 p-4 bg-green-500/20 border border-green-500/30 rounded-xl flex items-center space-x-2"
                >
                  <Check className="w-5 h-5 text-green-400" />
                  <span className="text-green-300">
                    Message sent successfully! I'll get back to you soon.
                  </span>
                </motion.div>
              )}

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <div className="form-field">
                  <label className="block text-white/80 font-medium mb-2">
                    <User className="w-4 h-4 inline mr-2" />
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all duration-300"
                    placeholder="Your full name"
                  />
                  {errors.name && (
                    <p className="mt-1 text-sm text-red-400">{errors.name}</p>
                  )}
                </div>

                {/* Email Field */}
                <div className="form-field">
                  <label className="block text-white/80 font-medium mb-2">
                    <Mail className="w-4 h-4 inline mr-2" />
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all duration-300"
                    placeholder="your.email@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-sm text-red-400">{errors.email}</p>
                  )}
                </div>

                {/* Subject Field */}
                <div className="form-field">
                  <label className="block text-white/80 font-medium mb-2">
                    <FileText className="w-4 h-4 inline mr-2" />
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all duration-300"
                    placeholder="What's this about?"
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-red-400">
                      {errors.subject}
                    </p>
                  )}
                </div>

                {/* Message Field */}
                <div className="form-field">
                  <label className="block text-white/80 font-medium mb-2">
                    <MessageCircle className="w-4 h-4 inline mr-2" />
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/50 focus:outline-none focus:border-purple-500/50 focus:bg-white/10 transition-all duration-300 resize-none"
                    placeholder="Tell me about your project..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-400">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-4 bg-gradient-to-r from-purple-600 to-blue-600 rounded-xl font-medium text-white transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="flex items-center justify-center space-x-2">
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                        <ArrowRight className="w-4 h-4" />
                      </>
                    )}
                  </span>
                </motion.button>
              </form>
            </div>

            {/* Quick Response */}
            <div className="p-6 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-xl border border-purple-500/20">
              <div className="flex items-center space-x-3 mb-3">
                <Zap className="w-5 h-5 text-yellow-400" />
                <h4 className="text-lg font-bold text-white">Quick Response</h4>
              </div>
              <p className="text-white/70 text-sm">
                I typically respond to messages within 24 hours. For urgent
                matters, feel free to reach out directly via phone or email.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center">
          <motion.div
            className="inline-flex items-center space-x-2 px-6 py-3 bg-white/5 backdrop-blur-sm rounded-full border border-white/10"
            whileHover={{ scale: 1.05 }}
          >
            <Heart className="w-5 h-5 text-red-400" />
            <span className="text-white font-medium">
              Made with passion in San Francisco
            </span>
            <Calendar className="w-4 h-4 text-purple-400" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
