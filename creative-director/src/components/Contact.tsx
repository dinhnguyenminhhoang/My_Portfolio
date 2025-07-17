"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Send,
  Mail,
  Phone,
  MapPin,
  Calendar,
  CheckCircle,
  AlertCircle,
  MessageCircle,
  Clock,
  Star,
  Zap,
  Coffee,
  Heart,
} from "lucide-react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import SectionWrapper from "./SectionWrapper";

gsap.registerPlugin(ScrollTrigger);

interface FormData {
  name: string;
  email: string;
  phone: string;
  projectType: string;
  budget: string;
  timeline: string;
  message: string;
}

interface FormErrors {
  [key: string]: string;
}

const Contact = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    projectType: "",
    budget: "",
    timeline: "",
    message: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const formRef = useRef<HTMLFormElement>(null);
  const sectionRef = useRef<HTMLDivElement>(null);

  const projectTypes = [
    { id: "viral-video", label: "Viral Video Content", icon: "🎬" },
    { id: "brand-campaign", label: "Brand Campaign", icon: "🚀" },
    { id: "social-media", label: "Social Media Strategy", icon: "📱" },
    { id: "content-series", label: "Content Series", icon: "📺" },
    { id: "consultation", label: "Creative Consultation", icon: "💡" },
    { id: "other", label: "Khác", icon: "🎯" },
  ];

  const budgetRanges = [
    { id: "under-50m", label: "Dưới 50 triệu", value: "<50M" },
    { id: "50-100m", label: "50 - 100 triệu", value: "50-100M" },
    { id: "100-500m", label: "100 - 500 triệu", value: "100-500M" },
    { id: "above-500m", label: "Trên 500 triệu", value: ">500M" },
    { id: "discuss", label: "Thảo luận", value: "discuss" },
  ];

  const timelineOptions = [
    { id: "urgent", label: "Gấp (1-2 tuần)", value: "1-2 weeks" },
    { id: "normal", label: "Bình thường (1 tháng)", value: "1 month" },
    { id: "flexible", label: "Linh hoạt (2-3 tháng)", value: "2-3 months" },
    { id: "long-term", label: "Dài hạn (3+ tháng)", value: "3+ months" },
  ];

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hoang.creative@gmail.com",
      description: "Response trong 24h",
      color: "text-blue-500",
    },
    {
      icon: Phone,
      label: "Điện thoại",
      value: "+84 123 456 789",
      description: "Hotline 24/7",
      color: "text-green-500",
    },
    {
      icon: MapPin,
      label: "Địa chỉ",
      value: "TP.HCM, Việt Nam",
      description: "Có thể làm việc remote",
      color: "text-purple-500",
    },
    {
      icon: Calendar,
      label: "Meeting",
      value: "Đặt lịch hẹn",
      description: "Free consultation 30 phút",
      color: "text-pink-500",
    },
  ];

  // Validation
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Vui lòng nhập tên của bạn";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Vui lòng nhập email";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email không hợp lệ";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Vui lòng nhập số điện thoại";
    } else if (!/^[0-9+\-\s]+$/.test(formData.phone)) {
      newErrors.phone = "Số điện thoại không hợp lệ";
    }

    if (!formData.projectType) {
      newErrors.projectType = "Vui lòng chọn loại dự án";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Vui lòng mô tả dự án của bạn";
    } else if (formData.message.length < 20) {
      newErrors.message = "Mô tả dự án cần ít nhất 20 ký tự";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        projectType: "",
        budget: "",
        timeline: "",
        message: "",
      });

      // Reset form after 3 seconds
      setTimeout(() => setSubmitStatus("idle"), 3000);
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Input change handler
  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));

    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  useEffect(() => {
    // Animate contact cards
    gsap.fromTo(
      ".contact-card",
      { y: 50, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 0.6,
        stagger: 0.1,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );

    // Animate form fields
    gsap.fromTo(
      ".form-field",
      { x: 50, opacity: 0 },
      {
        x: 0,
        opacity: 1,
        duration: 0.5,
        stagger: 0.05,
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <SectionWrapper
      id="contact"
      className="py-20 bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900"
    >
      <div ref={sectionRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16">
          <motion.h2
            className="text-4xl lg:text-5xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Bắt đầu
            <span className="block text-transparent bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text">
              hợp tác ngay
            </span>
          </motion.h2>

          <motion.p
            className="text-lg text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Có ý tưởng sáng tạo? Muốn tạo ra content viral? Hãy liên hệ để tôi
            biến vision của bạn thành hiện thực! 🚀
          </motion.p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="space-y-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="contact-card bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6 text-white hover:bg-white/20 transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="flex items-start gap-4">
                    <div className={`p-3 rounded-xl bg-white/20 ${info.color}`}>
                      <info.icon className="w-6 h-6" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-white mb-1">
                        {info.label}
                      </h3>
                      <p className="text-white/90 mb-1">{info.value}</p>
                      <p className="text-white/60 text-sm">
                        {info.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Benefits */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-6">
              <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
                <Star className="w-5 h-5 text-yellow-400" />
                Tại sao chọn tôi?
              </h3>
              <div className="space-y-3">
                {[
                  { icon: Zap, text: "Response nhanh trong 24h" },
                  { icon: Coffee, text: "Free consultation 30 phút" },
                  { icon: Heart, text: "Dedicated support 24/7" },
                  { icon: Star, text: "Đảm bảo chất lượng và deadline" },
                ].map((benefit, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 text-white/90"
                  >
                    <benefit.icon className="w-5 h-5 text-purple-400" />
                    <span>{benefit.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              {/* Name & Email */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="form-field">
                  <label className="block text-white mb-2 font-medium">
                    Họ tên *
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => handleInputChange("name", e.target.value)}
                    onFocus={() => setFocusedField("name")}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-4 py-3 bg-white/20 border rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all ${
                      errors.name ? "border-red-400" : "border-white/30"
                    }`}
                    placeholder="Nhập tên của bạn"
                  />
                  {errors.name && (
                    <p className="mt-1 text-red-400 text-sm flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.name}
                    </p>
                  )}
                </div>

                <div className="form-field">
                  <label className="block text-white mb-2 font-medium">
                    Email *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange("email", e.target.value)}
                    onFocus={() => setFocusedField("email")}
                    onBlur={() => setFocusedField(null)}
                    className={`w-full px-4 py-3 bg-white/20 border rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all ${
                      errors.email ? "border-red-400" : "border-white/30"
                    }`}
                    placeholder="email@example.com"
                  />
                  {errors.email && (
                    <p className="mt-1 text-red-400 text-sm flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Phone */}
              <div className="form-field">
                <label className="block text-white mb-2 font-medium">
                  Số điện thoại *
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange("phone", e.target.value)}
                  onFocus={() => setFocusedField("phone")}
                  onBlur={() => setFocusedField(null)}
                  className={`w-full px-4 py-3 bg-white/20 border rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all ${
                    errors.phone ? "border-red-400" : "border-white/30"
                  }`}
                  placeholder="+84 123 456 789"
                />
                {errors.phone && (
                  <p className="mt-1 text-red-400 text-sm flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.phone}
                  </p>
                )}
              </div>

              {/* Project Type */}
              <div className="form-field">
                <label className="block text-white mb-2 font-medium">
                  Loại dự án *
                </label>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                  {projectTypes.map((type) => (
                    <motion.button
                      key={type.id}
                      type="button"
                      onClick={() => handleInputChange("projectType", type.id)}
                      className={`p-3 rounded-lg border transition-all text-left ${
                        formData.projectType === type.id
                          ? "bg-purple-600 border-purple-500 text-white"
                          : "bg-white/20 border-white/30 text-white hover:bg-white/30"
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div className="text-lg mb-1">{type.icon}</div>
                      <div className="text-sm font-medium">{type.label}</div>
                    </motion.button>
                  ))}
                </div>
                {errors.projectType && (
                  <p className="mt-1 text-red-400 text-sm flex items-center gap-1">
                    <AlertCircle className="w-4 h-4" />
                    {errors.projectType}
                  </p>
                )}
              </div>

              {/* Budget & Timeline */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="form-field">
                  <label className="block text-white mb-2 font-medium">
                    Ngân sách dự kiến
                  </label>
                  <select
                    value={formData.budget}
                    onChange={(e) =>
                      handleInputChange("budget", e.target.value)
                    }
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all"
                  >
                    <option value="">Chọn ngân sách</option>
                    {budgetRanges.map((range) => (
                      <option
                        key={range.id}
                        value={range.value}
                        className="text-gray-900"
                      >
                        {range.label}
                      </option>
                    ))}
                  </select>
                </div>

                <div className="form-field">
                  <label className="block text-white mb-2 font-medium">
                    Timeline
                  </label>
                  <select
                    value={formData.timeline}
                    onChange={(e) =>
                      handleInputChange("timeline", e.target.value)
                    }
                    className="w-full px-4 py-3 bg-white/20 border border-white/30 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all"
                  >
                    <option value="">Chọn timeline</option>
                    {timelineOptions.map((option) => (
                      <option
                        key={option.id}
                        value={option.value}
                        className="text-gray-900"
                      >
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Message */}
              <div className="form-field">
                <label className="block text-white mb-2 font-medium">
                  Mô tả dự án *
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => handleInputChange("message", e.target.value)}
                  onFocus={() => setFocusedField("message")}
                  onBlur={() => setFocusedField(null)}
                  rows={4}
                  className={`w-full px-4 py-3 bg-white/20 border rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-400 transition-all resize-none ${
                    errors.message ? "border-red-400" : "border-white/30"
                  }`}
                  placeholder="Mô tả chi tiết về dự án, mục tiêu, target audience..."
                />
                <div className="flex justify-between items-center mt-2">
                  {errors.message && (
                    <p className="text-red-400 text-sm flex items-center gap-1">
                      <AlertCircle className="w-4 h-4" />
                      {errors.message}
                    </p>
                  )}
                  <div className="text-right text-white/60 text-sm">
                    {formData.message.length}/500
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <motion.button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-4 px-8 rounded-lg font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-3"
                whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                    Đang gửi...
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Gửi yêu cầu hợp tác
                  </>
                )}
              </motion.button>
            </form>

            {/* Success/Error Messages */}
            <AnimatePresence>
              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="mt-6 p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400 flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5" />
                  <div>
                    <p className="font-medium">Gửi thành công!</p>
                    <p className="text-sm">
                      Tôi sẽ liên hệ lại với bạn trong vòng 24h.
                    </p>
                  </div>
                </motion.div>
              )}

              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  className="mt-6 p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400 flex items-center gap-3"
                >
                  <AlertCircle className="w-5 h-5" />
                  <div>
                    <p className="font-medium">Có lỗi xảy ra!</p>
                    <p className="text-sm">
                      Vui lòng thử lại hoặc liên hệ trực tiếp.
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Contact;
