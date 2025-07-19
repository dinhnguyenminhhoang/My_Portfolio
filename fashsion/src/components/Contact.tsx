"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Instagram,
  Youtube,
  MessageCircle,
  Heart,
  Sparkles,
  Clock,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { gsap } from "gsap";

const Contact = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const isInView = useInView(containerRef, { once: false, margin: "-100px" });

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    budget: "",
    timeline: "",
  });

  const [formStatus, setFormStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  // GSAP animations for floating elements
  useEffect(() => {
    const ctx = gsap.context(() => {
      // Floating icons animation
      gsap.to(".floating-contact-icon", {
        y: -20,
        rotation: 360,
        duration: 4,
        ease: "power2.inOut",
        stagger: 0.3,
        repeat: -1,
        yoyo: true,
      });

      // Form field focus animations
      const formFields = gsap.utils.toArray(".form-field");
      formFields.forEach((field: any) => {
        const input = field.querySelector("input, textarea, select");
        const label = field.querySelector("label");

        if (input && label) {
          input.addEventListener("focus", () => {
            gsap.to(label, {
              scale: 0.85,
              y: -25,
              color: "#9333ea",
              duration: 0.3,
              ease: "power2.out",
            });
          });

          input.addEventListener("blur", () => {
            if (!input.value) {
              gsap.to(label, {
                scale: 1,
                y: 0,
                color: "#6b7280",
                duration: 0.3,
                ease: "power2.out",
              });
            }
          });
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "hello@hoangfashion.com",
      description: "Gửi email để thảo luận dự án",
      color: "from-purple-500 to-pink-500",
      delay: 0.1,
    },
    {
      icon: Phone,
      title: "Điện thoại",
      value: "+84 xxx xxx xxx",
      description: "Gọi điện trực tiếp cho tôi",
      color: "from-blue-500 to-cyan-500",
      delay: 0.2,
    },
    {
      icon: MapPin,
      title: "Địa chỉ",
      value: "TP. Hồ Chí Minh",
      description: "Có thể gặp mặt trực tiếp",
      color: "from-green-500 to-emerald-500",
      delay: 0.3,
    },
    {
      icon: Clock,
      title: "Thời gian",
      value: "9:00 - 18:00",
      description: "Thứ 2 - Thứ 6 hằng tuần",
      color: "from-orange-500 to-red-500",
      delay: 0.4,
    },
  ];

  const socialLinks = [
    {
      icon: Instagram,
      name: "Instagram",
      handle: "@hoang.fashion",
      followers: "50K+",
      color: "from-pink-500 to-purple-500",
      href: "#",
    },
    {
      icon: Youtube,
      name: "YouTube",
      handle: "Hoàng Fashion",
      followers: "25K+",
      color: "from-red-500 to-pink-500",
      href: "#",
    },
    {
      icon: MessageCircle,
      name: "TikTok",
      handle: "@hoangchipi",
      followers: "100K+",
      color: "from-black to-purple-500",
      href: "#",
    },
  ];

  const budgetOptions = [
    "Dưới 5 triệu",
    "5 - 10 triệu",
    "10 - 20 triệu",
    "20 - 50 triệu",
    "Trên 50 triệu",
  ];

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = "Vui lòng nhập họ tên";
    if (!formData.email.trim()) {
      newErrors.email = "Vui lòng nhập email";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email không hợp lệ";
    }
    if (!formData.subject.trim()) newErrors.subject = "Vui lòng nhập chủ đề";
    if (!formData.message.trim()) newErrors.message = "Vui lòng nhập nội dung";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setFormStatus("loading");

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setFormStatus("success");
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
      budget: "",
      timeline: "",
    });

    // Reset status after 3 seconds
    setTimeout(() => setFormStatus("idle"), 3000);
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: "" }));
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  } as any;

  return (
    <section
      ref={containerRef}
      id="contact"
      className="relative py-20 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-purple-50/30 overflow-hidden"
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating contact icons */}
        <div className="floating-contact-icon absolute top-20 left-20 w-6 h-6 text-purple-400 opacity-20">
          <Mail className="w-full h-full" />
        </div>
        <div className="floating-contact-icon absolute top-40 right-32 w-5 h-5 text-pink-400 opacity-30">
          <Heart className="w-full h-full fill-current" />
        </div>
        <div className="floating-contact-icon absolute bottom-40 left-40 w-4 h-4 text-blue-400 opacity-25">
          <Phone className="w-full h-full" />
        </div>
        <div className="floating-contact-icon absolute bottom-20 right-20 w-7 h-7 text-orange-400 opacity-20">
          <Sparkles className="w-full h-full" />
        </div>

        {/* Background gradients */}
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-10 w-80 h-80 bg-gradient-to-br from-blue-200/20 to-cyan-200/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-16"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center space-y-6">
            <div className="flex items-center justify-center space-x-3">
              <motion.div
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.3 }}
              >
                <MessageCircle className="w-6 h-6 text-purple-600" />
              </motion.div>
              <span className="text-purple-600 font-semibold tracking-wider uppercase text-sm">
                Liên Hệ
              </span>
            </div>

            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Let's Create{" "}
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
                Something
              </span>
              <br />
              Amazing Together
            </h2>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Sẵn sàng biến ý tưởng thời trang của bạn thành hiện thực? Hãy liên
              hệ với tôi để thảo luận về dự án tiếp theo!
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Info & Social */}
            <motion.div variants={itemVariants} className="space-y-12">
              {/* Contact Cards */}
              <div className="grid sm:grid-cols-2 gap-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 30 }}
                    animate={
                      isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                    }
                    transition={{ delay: info.delay, duration: 0.6 }}
                    whileHover={{ scale: 1.02, y: -5 }}
                    className="group bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="space-y-4">
                      <motion.div
                        className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-xl flex items-center justify-center shadow-lg`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <info.icon className="w-6 h-6 text-white" />
                      </motion.div>

                      <div>
                        <h3 className="text-lg font-bold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                          {info.title}
                        </h3>
                        <p className="text-purple-600 font-semibold">
                          {info.value}
                        </p>
                        <p className="text-gray-500 text-sm mt-1">
                          {info.description}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Social Media Links */}
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-gray-900">
                  Kết nối trên Social Media
                </h3>

                <div className="space-y-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      initial={{ opacity: 0, x: -30 }}
                      animate={
                        isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }
                      }
                      transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                      whileHover={{ scale: 1.02, x: 10 }}
                      className="group flex items-center space-x-4 bg-white/70 backdrop-blur-sm p-4 rounded-xl shadow-lg border border-white/50 hover:shadow-xl transition-all duration-300"
                    >
                      <motion.div
                        className={`w-12 h-12 bg-gradient-to-r ${social.color} rounded-xl flex items-center justify-center shadow-lg`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <social.icon className="w-6 h-6 text-white" />
                      </motion.div>

                      <div className="flex-1">
                        <h4 className="font-bold text-gray-900 group-hover:text-purple-600 transition-colors duration-300">
                          {social.name}
                        </h4>
                        <p className="text-gray-600 text-sm">{social.handle}</p>
                      </div>

                      <div className="text-right">
                        <p className="text-purple-600 font-bold">
                          {social.followers}
                        </p>
                        <p className="text-gray-500 text-xs">followers</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="bg-white/80 backdrop-blur-sm p-8 lg:p-10 rounded-3xl shadow-2xl border border-white/50 space-y-6"
              >
                <div className="text-center mb-8">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Gửi tin nhắn cho tôi
                  </h3>
                  <p className="text-gray-600">
                    Tôi sẽ phản hồi trong vòng 24 giờ
                  </p>
                </div>

                {/* Form Fields */}
                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="form-field relative">
                    <input
                      type="text"
                      id="name"
                      value={formData.name}
                      onChange={(e) =>
                        handleInputChange("name", e.target.value)
                      }
                      className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                      placeholder=" "
                    />
                    <label
                      htmlFor="name"
                      className="absolute left-4 top-4 text-gray-500 pointer-events-none transition-all duration-300"
                    >
                      Họ và tên *
                    </label>
                    {errors.name && (
                      <p className="text-red-500 text-sm mt-1 flex items-center space-x-1">
                        <AlertCircle className="w-4 h-4" />
                        <span>{errors.name}</span>
                      </p>
                    )}
                  </div>

                  <div className="form-field relative">
                    <input
                      type="email"
                      id="email"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                      placeholder=" "
                    />
                    <label
                      htmlFor="email"
                      className="absolute left-4 top-4 text-gray-500 pointer-events-none transition-all duration-300"
                    >
                      Email *
                    </label>
                    {errors.email && (
                      <p className="text-red-500 text-sm mt-1 flex items-center space-x-1">
                        <AlertCircle className="w-4 h-4" />
                        <span>{errors.email}</span>
                      </p>
                    )}
                  </div>
                </div>

                <div className="form-field relative">
                  <input
                    type="text"
                    id="subject"
                    value={formData.subject}
                    onChange={(e) =>
                      handleInputChange("subject", e.target.value)
                    }
                    className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    placeholder=" "
                  />
                  <label
                    htmlFor="subject"
                    className="absolute left-4 top-4 text-gray-500 pointer-events-none transition-all duration-300"
                  >
                    Chủ đề dự án *
                  </label>
                  {errors.subject && (
                    <p className="text-red-500 text-sm mt-1 flex items-center space-x-1">
                      <AlertCircle className="w-4 h-4" />
                      <span>{errors.subject}</span>
                    </p>
                  )}
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div className="form-field relative">
                    <select
                      id="budget"
                      value={formData.budget}
                      onChange={(e) =>
                        handleInputChange("budget", e.target.value)
                      }
                      className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Chọn ngân sách</option>
                      {budgetOptions.map((option) => (
                        <option key={option} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="form-field relative">
                    <input
                      type="text"
                      id="timeline"
                      value={formData.timeline}
                      onChange={(e) =>
                        handleInputChange("timeline", e.target.value)
                      }
                      className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                      placeholder="VD: 2-3 tuần"
                    />
                    <label
                      htmlFor="timeline"
                      className="absolute left-4 top-4 text-gray-500 pointer-events-none transition-all duration-300"
                    >
                      Timeline mong muốn
                    </label>
                  </div>
                </div>

                <div className="form-field relative">
                  <textarea
                    id="message"
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      handleInputChange("message", e.target.value)
                    }
                    className="w-full px-4 py-4 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder=" "
                  />
                  <label
                    htmlFor="message"
                    className="absolute left-4 top-4 text-gray-500 pointer-events-none transition-all duration-300"
                  >
                    Mô tả chi tiết dự án *
                  </label>
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1 flex items-center space-x-1">
                      <AlertCircle className="w-4 h-4" />
                      <span>{errors.message}</span>
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={formStatus === "loading"}
                  whileHover={{ scale: formStatus === "loading" ? 1 : 1.02 }}
                  whileTap={{ scale: formStatus === "loading" ? 1 : 0.98 }}
                  className={`w-full py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center space-x-2 ${
                    formStatus === "success"
                      ? "bg-green-500 text-white"
                      : formStatus === "loading"
                      ? "bg-gray-400 text-white cursor-not-allowed"
                      : "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg"
                  }`}
                >
                  {formStatus === "loading" && (
                    <motion.div
                      animate={{ rotate: 360 }}
                      transition={{
                        duration: 1,
                        repeat: Infinity,
                        ease: "linear",
                      }}
                      className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                    />
                  )}
                  {formStatus === "success" && (
                    <CheckCircle className="w-5 h-5" />
                  )}
                  {formStatus === "idle" && <Send className="w-5 h-5" />}

                  <span>
                    {formStatus === "loading" && "Đang gửi..."}
                    {formStatus === "success" && "Đã gửi thành công!"}
                    {formStatus === "idle" && "Gửi tin nhắn"}
                  </span>
                </motion.button>
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
