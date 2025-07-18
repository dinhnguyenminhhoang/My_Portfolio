"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useForm } from "react-hook-form";
import {
  Send,
  Mail,
  Phone,
  MapPin,
  MessageCircle,
  Heart,
  Star,
  Sparkles,
  Instagram,
  Youtube,
  Music,
  Camera,
  Zap,
  Coffee,
  Clock,
  CheckCircle,
  AlertCircle,
  User,
  Building,
  FileText,
} from "lucide-react";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface FormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  projectType: string;
  budget: string;
  message: string;
}

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [focusedField, setFocusedField] = useState<string | null>(null);

  const controls = useAnimation();
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm<FormData>();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Floating animation for contact cards
      gsap.to(".contact-card", {
        y: -10,
        duration: 2,
        ease: "power2.inOut",
        stagger: 0.2,
        repeat: -1,
        yoyo: true,
      });

      // Form fields animation
      gsap.fromTo(
        ".form-field",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.1,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Social links floating
      gsap.to(".social-link", {
        y: -5,
        rotation: 3,
        duration: 2,
        ease: "power2.inOut",
        stagger: 0.1,
        repeat: -1,
        yoyo: true,
      });

      // Background floating elements
      gsap.to(".floating-bg", {
        y: -20,
        rotation: 5,
        duration: 3,
        ease: "power2.inOut",
        stagger: 0.3,
        repeat: -1,
        yoyo: true,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // In real app, you would send to your backend
      console.log("Form data:", data);

      setSubmitStatus("success");
      reset();

      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus("idle"), 3000);
    } catch (error) {
      setSubmitStatus("error");
      setTimeout(() => setSubmitStatus("idle"), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12,
      },
    },
  } as any;

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6" />,
      title: "Email",
      content: "hoang.creative@gmail.com",
      description: "Phản hồi trong 24h",
      color: "from-purple-500 to-purple-600",
      bgColor: "bg-purple-50",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      title: "Hotline",
      content: "+84 123 456 789",
      description: "Sẵn sàng tư vấn",
      color: "from-pink-500 to-pink-600",
      bgColor: "bg-pink-50",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      title: "Địa chỉ",
      content: "TP. Hồ Chí Minh",
      description: "Có thể gặp trực tiếp",
      color: "from-orange-500 to-orange-600",
      bgColor: "bg-orange-50",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      title: "Giờ làm việc",
      content: "9:00 - 18:00",
      description: "Thứ 2 - Thứ 6",
      color: "from-green-500 to-green-600",
      bgColor: "bg-green-50",
    },
  ];

  const socialLinks = [
    {
      icon: <Instagram className="w-5 h-5" />,
      name: "Instagram",
      url: "#",
      followers: "45K",
      color: "bg-pink-500",
    },
    {
      icon: <Music className="w-5 h-5" />,
      name: "TikTok",
      url: "#",
      followers: "120K",
      color: "bg-black",
    },
    {
      icon: <Youtube className="w-5 h-5" />,
      name: "YouTube",
      url: "#",
      followers: "28K",
      color: "bg-red-500",
    },
    {
      icon: <Camera className="w-5 h-5" />,
      name: "Portfolio",
      url: "#",
      followers: "View",
      color: "bg-purple-500",
    },
  ];

  const projectTypes = [
    { value: "tiktok-video", label: "TikTok Video", icon: "🎵" },
    { value: "instagram-content", label: "Instagram Content", icon: "📸" },
    { value: "youtube-video", label: "YouTube Video", icon: "📹" },
    { value: "brand-campaign", label: "Brand Campaign", icon: "🎯" },
    { value: "consultation", label: "Consultation", icon: "💡" },
  ];

  const budgetRanges = [
    { value: "5-10m", label: "5-10 triệu" },
    { value: "10-25m", label: "10-25 triệu" },
    { value: "25-50m", label: "25-50 triệu" },
    { value: "50m+", label: "Trên 50 triệu" },
    { value: "discuss", label: "Trao đổi" },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-20 lg:py-32 bg-gradient-to-br from-purple-50 via-white to-pink-50 overflow-hidden"
    >
      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 floating-bg">
          <div className="w-32 h-32 bg-gradient-to-r from-purple-200 to-pink-200 rounded-full opacity-20 blur-xl"></div>
        </div>
        <div className="absolute top-40 right-20 floating-bg">
          <div className="w-24 h-24 bg-gradient-to-r from-pink-200 to-orange-200 rounded-full opacity-20 blur-xl"></div>
        </div>
        <div className="absolute bottom-40 left-20 floating-bg">
          <div className="w-28 h-28 bg-gradient-to-r from-orange-200 to-yellow-200 rounded-full opacity-20 blur-xl"></div>
        </div>
        <div className="absolute bottom-20 right-10 floating-bg">
          <div className="w-20 h-20 bg-gradient-to-r from-green-200 to-blue-200 rounded-full opacity-20 blur-xl"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-20">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full px-6 py-3 mb-6">
              <MessageCircle className="w-5 h-5 text-purple-500" />
              <span className="text-sm font-semibold text-purple-700">
                Liên hệ
              </span>
            </div>

            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              Hãy tạo nội dung{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                viral
              </span>{" "}
              cùng nhau!
            </h2>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Có ý tưởng thú vị? Muốn tạo ra campaign viral? Hay chỉ đơn giản
              muốn chat? Tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Contact Info & Social */}
            <motion.div
              variants={itemVariants}
              className="lg:col-span-1 space-y-8"
            >
              {/* Contact Cards */}
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.02 }}
                    className={`contact-card ${info.bgColor} rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50`}
                  >
                    <div className="flex items-start space-x-4">
                      <div
                        className={`flex-shrink-0 w-12 h-12 bg-gradient-to-r ${info.color} rounded-xl flex items-center justify-center text-white`}
                      >
                        {info.icon}
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 mb-1">
                          {info.title}
                        </h3>
                        <p className="text-gray-700 font-medium mb-1">
                          {info.content}
                        </p>
                        <p className="text-sm text-gray-600">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Links */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-gray-900 flex items-center">
                  <Star className="w-5 h-5 text-yellow-500 mr-2" />
                  Kết nối với tôi
                </h3>

                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="social-link group"
                    >
                      <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg hover:shadow-xl transition-all duration-300 border border-white/50 group-hover:border-purple-200">
                        <div className="flex items-center space-x-3">
                          <div
                            className={`w-10 h-10 ${social.color} rounded-xl flex items-center justify-center text-white`}
                          >
                            {social.icon}
                          </div>
                          <div>
                            <h4 className="font-semibold text-gray-900 text-sm">
                              {social.name}
                            </h4>
                            <p className="text-xs text-gray-600">
                              {social.followers}
                            </p>
                          </div>
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Fun Quote */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-6 text-white text-center"
              >
                <Coffee className="w-8 h-8 mx-auto mb-4" />
                <p className="text-lg font-medium mb-2">
                  "Cà phê + Ý tưởng = Viral content"
                </p>
                <p className="text-sm opacity-90">- Hoàng Creative</p>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants} className="lg:col-span-2">
              <form
                ref={formRef}
                onSubmit={handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl border border-white/50">
                  <div className="flex items-center space-x-2 mb-8">
                    <Sparkles className="w-6 h-6 text-purple-500" />
                    <h3 className="text-2xl font-bold text-gray-900">
                      Gửi tin nhắn cho tôi
                    </h3>
                  </div>

                  <div className="space-y-6">
                    {/* Name & Email Row */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="form-field">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          <User className="w-4 h-4 inline mr-2" />
                          Tên của bạn *
                        </label>
                        <input
                          type="text"
                          {...register("name", {
                            required: "Vui lòng nhập tên",
                          })}
                          onFocus={() => setFocusedField("name")}
                          onBlur={() => setFocusedField(null)}
                          className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 ${
                            focusedField === "name"
                              ? "border-purple-500 bg-purple-50"
                              : "border-gray-200 hover:border-gray-300"
                          } ${errors.name ? "border-red-500" : ""}`}
                          placeholder="Nhập tên của bạn"
                        />
                        {errors.name && (
                          <p className="mt-1 text-sm text-red-500 flex items-center">
                            <AlertCircle className="w-4 h-4 mr-1" />
                            {errors.name.message}
                          </p>
                        )}
                      </div>

                      <div className="form-field">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          <Mail className="w-4 h-4 inline mr-2" />
                          Email *
                        </label>
                        <input
                          type="email"
                          {...register("email", {
                            required: "Vui lòng nhập email",
                            pattern: {
                              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                              message: "Email không hợp lệ",
                            },
                          })}
                          onFocus={() => setFocusedField("email")}
                          onBlur={() => setFocusedField(null)}
                          className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 ${
                            focusedField === "email"
                              ? "border-purple-500 bg-purple-50"
                              : "border-gray-200 hover:border-gray-300"
                          } ${errors.email ? "border-red-500" : ""}`}
                          placeholder="your@email.com"
                        />
                        {errors.email && (
                          <p className="mt-1 text-sm text-red-500 flex items-center">
                            <AlertCircle className="w-4 h-4 mr-1" />
                            {errors.email.message}
                          </p>
                        )}
                      </div>
                    </div>

                    {/* Phone & Company Row */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="form-field">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          <Phone className="w-4 h-4 inline mr-2" />
                          Số điện thoại
                        </label>
                        <input
                          type="tel"
                          {...register("phone")}
                          onFocus={() => setFocusedField("phone")}
                          onBlur={() => setFocusedField(null)}
                          className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 ${
                            focusedField === "phone"
                              ? "border-purple-500 bg-purple-50"
                              : "border-gray-200 hover:border-gray-300"
                          }`}
                          placeholder="0123 456 789"
                        />
                      </div>

                      <div className="form-field">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          <Building className="w-4 h-4 inline mr-2" />
                          Công ty / Brand
                        </label>
                        <input
                          type="text"
                          {...register("company")}
                          onFocus={() => setFocusedField("company")}
                          onBlur={() => setFocusedField(null)}
                          className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 ${
                            focusedField === "company"
                              ? "border-purple-500 bg-purple-50"
                              : "border-gray-200 hover:border-gray-300"
                          }`}
                          placeholder="Tên công ty hoặc brand"
                        />
                      </div>
                    </div>

                    {/* Project Type */}
                    <div className="form-field">
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        <Camera className="w-4 h-4 inline mr-2" />
                        Loại dự án *
                      </label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {projectTypes.map((type) => (
                          <label key={type.value} className="cursor-pointer">
                            <input
                              type="radio"
                              value={type.value}
                              {...register("projectType", {
                                required: "Vui lòng chọn loại dự án",
                              })}
                              className="sr-only"
                            />
                            <div
                              className={`p-4 rounded-xl border-2 transition-all duration-300 text-center ${
                                watch("projectType") === type.value
                                  ? "border-purple-500 bg-purple-50"
                                  : "border-gray-200 hover:border-gray-300"
                              }`}
                            >
                              <div className="text-2xl mb-2">{type.icon}</div>
                              <div className="text-sm font-medium text-gray-700">
                                {type.label}
                              </div>
                            </div>
                          </label>
                        ))}
                      </div>
                      {errors.projectType && (
                        <p className="mt-2 text-sm text-red-500 flex items-center">
                          <AlertCircle className="w-4 h-4 mr-1" />
                          {errors.projectType.message}
                        </p>
                      )}
                    </div>

                    {/* Budget */}
                    <div className="form-field">
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        <Zap className="w-4 h-4 inline mr-2" />
                        Ngân sách dự kiến *
                      </label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {budgetRanges.map((budget) => (
                          <label key={budget.value} className="cursor-pointer">
                            <input
                              type="radio"
                              value={budget.value}
                              {...register("budget", {
                                required: "Vui lòng chọn ngân sách",
                              })}
                              className="sr-only"
                            />
                            <div
                              className={`p-3 rounded-xl border-2 transition-all duration-300 text-center ${
                                watch("budget") === budget.value
                                  ? "border-purple-500 bg-purple-50"
                                  : "border-gray-200 hover:border-gray-300"
                              }`}
                            >
                              <div className="text-sm font-medium text-gray-700">
                                {budget.label}
                              </div>
                            </div>
                          </label>
                        ))}
                      </div>
                      {errors.budget && (
                        <p className="mt-2 text-sm text-red-500 flex items-center">
                          <AlertCircle className="w-4 h-4 mr-1" />
                          {errors.budget.message}
                        </p>
                      )}
                    </div>

                    {/* Message */}
                    <div className="form-field">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        <FileText className="w-4 h-4 inline mr-2" />
                        Tin nhắn *
                      </label>
                      <textarea
                        rows={5}
                        {...register("message", {
                          required: "Vui lòng nhập tin nhắn",
                        })}
                        onFocus={() => setFocusedField("message")}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full px-4 py-3 rounded-xl border-2 transition-all duration-300 resize-none ${
                          focusedField === "message"
                            ? "border-purple-500 bg-purple-50"
                            : "border-gray-200 hover:border-gray-300"
                        } ${errors.message ? "border-red-500" : ""}`}
                        placeholder="Chia sẻ ý tưởng, mong muốn, hoặc bất kỳ điều gì bạn muốn tôi biết..."
                      />
                      {errors.message && (
                        <p className="mt-1 text-sm text-red-500 flex items-center">
                          <AlertCircle className="w-4 h-4 mr-1" />
                          {errors.message.message}
                        </p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className={`w-full py-4 rounded-xl font-semibold text-white transition-all duration-300 ${
                        isSubmitting
                          ? "bg-gray-400 cursor-not-allowed"
                          : submitStatus === "success"
                          ? "bg-green-500 hover:bg-green-600"
                          : submitStatus === "error"
                          ? "bg-red-500 hover:bg-red-600"
                          : "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 shadow-lg hover:shadow-xl"
                      }`}
                    >
                      <span className="flex items-center justify-center space-x-2">
                        {isSubmitting ? (
                          <>
                            <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                            <span>Đang gửi...</span>
                          </>
                        ) : submitStatus === "success" ? (
                          <>
                            <CheckCircle className="w-5 h-5" />
                            <span>Gửi thành công!</span>
                          </>
                        ) : submitStatus === "error" ? (
                          <>
                            <AlertCircle className="w-5 h-5" />
                            <span>Có lỗi xảy ra, thử lại</span>
                          </>
                        ) : (
                          <>
                            <Send className="w-5 h-5" />
                            <span>Gửi tin nhắn</span>
                            <motion.div
                              animate={{ x: [0, 3, 0] }}
                              transition={{ duration: 1.5, repeat: Infinity }}
                            >
                              <Heart className="w-5 h-5" />
                            </motion.div>
                          </>
                        )}
                      </span>
                    </motion.button>
                  </div>
                </div>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
