"use client";

import { useState, useRef, FormEvent } from "react";
import { motion, useInView } from "framer-motion";
import {
  Mail,
  MessageSquare,
  Send,
  User,
  Phone,
  MapPin,
  Clock,
  CheckCircle,
  AlertCircle,
  Loader2,
  Star,
} from "lucide-react";
import { cn } from "@/lib/utils";

interface FormData {
  name: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  phone?: string;
  subject?: string;
  message?: string;
}

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "hello@creator.com",
    description: "Phản hồi trong vòng 24h",
    color: "text-purple-400",
  },
  {
    icon: Phone,
    title: "Điện thoại",
    value: "+84 123 456 789",
    description: "Thứ 2 - Thứ 6, 9:00 - 18:00",
    color: "text-green-400",
  },
  {
    icon: MapPin,
    title: "Địa chỉ",
    value: "TP. Hồ Chí Minh, Việt Nam",
    description: "Có thể hẹn gặp trực tiếp",
    color: "text-blue-400",
  },
  {
    icon: Clock,
    title: "Thời gian làm việc",
    value: "24/7 Online",
    description: "Luôn sẵn sàng cho dự án mới",
    color: "text-yellow-400",
  },
];

const services = [
  "Video Production & Editing",
  "Content Strategy & Planning",
  "Social Media Management",
  "Brand Campaign Creation",
  "Photography & Photo Editing",
  "Live Streaming & Events",
];

export default function Contact() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Vui lòng nhập họ tên";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Vui lòng nhập email";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email không hợp lệ";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Vui lòng nhập số điện thoại";
    } else if (!/^[0-9+\-\s()]+$/.test(formData.phone)) {
      newErrors.phone = "Số điện thoại không hợp lệ";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Vui lòng nhập tiêu đề";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Vui lòng nhập nội dung tin nhắn";
    } else if (formData.message.length < 10) {
      newErrors.message = "Tin nhắn phải có ít nhất 10 ký tự";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      // Reset form on success
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setSubmitStatus("success");

      // Reset success message after 5 seconds
      setTimeout(() => setSubmitStatus("idle"), 5000);
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));

    // Clear error when user starts typing
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: undefined }));
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
    hidden: { y: 60, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  } as any;

  return (
    <section id="contact" className="py-20 md:py-32 relative">
      <div className="container mx-auto px-4">
        <motion.div
          ref={sectionRef}
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <motion.span
              initial={{ scale: 0, opacity: 0 }}
              animate={
                isInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }
              }
              transition={{ delay: 0.5, duration: 0.6, ease: "backOut" }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full border border-purple-500/30 text-purple-300 text-sm font-medium mb-6"
            >
              <MessageSquare className="w-4 h-4" />
              Liên hệ
            </motion.span>

            <h2 className="text-3xl md:text-5xl font-bold font-poppins mb-6">
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Let's Create Together
              </span>
            </h2>

            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Có ý tưởng dự án thú vị? Hãy cùng tôi biến nó thành hiện thực! Từ
              concept đến execution, chúng ta sẽ tạo nên những nội dung đáng
              nhớ.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  Thông tin liên hệ
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={info.title}
                      initial={{ x: -60, opacity: 0 }}
                      animate={
                        isInView ? { x: 0, opacity: 1 } : { x: -60, opacity: 0 }
                      }
                      transition={{ delay: 0.8 + index * 0.1, duration: 0.6 }}
                      whileHover={{ scale: 1.05, y: -5 }}
                      className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300"
                    >
                      <div className={cn("mb-4", info.color)}>
                        <info.icon className="w-8 h-8" />
                      </div>
                      <h4 className="font-semibold text-white mb-2">
                        {info.title}
                      </h4>
                      <p className="text-gray-300 font-medium mb-1">
                        {info.value}
                      </p>
                      <p className="text-sm text-gray-400">
                        {info.description}
                      </p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Services */}
              <motion.div
                initial={{ x: -60, opacity: 0 }}
                animate={
                  isInView ? { x: 0, opacity: 1 } : { x: -60, opacity: 0 }
                }
                transition={{ delay: 1.2, duration: 0.6 }}
              >
                <h3 className="text-2xl font-bold text-white mb-6">
                  Dịch vụ chuyên nghiệp
                </h3>
                <div className="space-y-3">
                  {services.map((service, index) => (
                    <motion.div
                      key={service}
                      initial={{ opacity: 0, x: -20 }}
                      animate={
                        isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
                      }
                      transition={{ delay: 1.4 + index * 0.1, duration: 0.5 }}
                      className="flex items-center gap-3 text-gray-300"
                    >
                      <Star className="w-5 h-5 text-yellow-400" />
                      <span>{service}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50">
                <h3 className="text-2xl font-bold text-white mb-6">
                  Gửi tin nhắn
                </h3>

                {/* Success/Error Messages */}
                {submitStatus === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-green-500/20 border border-green-500/50 rounded-lg flex items-center gap-3 text-green-400"
                  >
                    <CheckCircle className="w-5 h-5" />
                    <span>
                      Tin nhắn đã được gửi thành công! Tôi sẽ phản hồi sớm nhất.
                    </span>
                  </motion.div>
                )}

                {submitStatus === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-6 p-4 bg-red-500/20 border border-red-500/50 rounded-lg flex items-center gap-3 text-red-400"
                  >
                    <AlertCircle className="w-5 h-5" />
                    <span>Có lỗi xảy ra. Vui lòng thử lại sau.</span>
                  </motion.div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Họ tên *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          id="name"
                          value={formData.name}
                          onChange={(e) =>
                            handleInputChange("name", e.target.value)
                          }
                          className={cn(
                            "w-full pl-10 pr-4 py-3 bg-gray-700/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300",
                            errors.name ? "border-red-500" : "border-gray-600"
                          )}
                          placeholder="Nhập họ tên của bạn"
                        />
                      </div>
                      {errors.name && (
                        <p className="mt-1 text-sm text-red-400">
                          {errors.name}
                        </p>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Email *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="email"
                          id="email"
                          value={formData.email}
                          onChange={(e) =>
                            handleInputChange("email", e.target.value)
                          }
                          className={cn(
                            "w-full pl-10 pr-4 py-3 bg-gray-700/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300",
                            errors.email ? "border-red-500" : "border-gray-600"
                          )}
                          placeholder="your@email.com"
                        />
                      </div>
                      {errors.email && (
                        <p className="mt-1 text-sm text-red-400">
                          {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {/* Phone */}
                    <div>
                      <label
                        htmlFor="phone"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Số điện thoại *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="tel"
                          id="phone"
                          value={formData.phone}
                          onChange={(e) =>
                            handleInputChange("phone", e.target.value)
                          }
                          className={cn(
                            "w-full pl-10 pr-4 py-3 bg-gray-700/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300",
                            errors.phone ? "border-red-500" : "border-gray-600"
                          )}
                          placeholder="+84 123 456 789"
                        />
                      </div>
                      {errors.phone && (
                        <p className="mt-1 text-sm text-red-400">
                          {errors.phone}
                        </p>
                      )}
                    </div>

                    {/* Subject */}
                    <div>
                      <label
                        htmlFor="subject"
                        className="block text-sm font-medium text-gray-300 mb-2"
                      >
                        Tiêu đề *
                      </label>
                      <input
                        type="text"
                        id="subject"
                        value={formData.subject}
                        onChange={(e) =>
                          handleInputChange("subject", e.target.value)
                        }
                        className={cn(
                          "w-full px-4 py-3 bg-gray-700/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300",
                          errors.subject ? "border-red-500" : "border-gray-600"
                        )}
                        placeholder="Chủ đề tin nhắn"
                      />
                      {errors.subject && (
                        <p className="mt-1 text-sm text-red-400">
                          {errors.subject}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Nội dung tin nhắn *
                    </label>
                    <textarea
                      id="message"
                      rows={6}
                      value={formData.message}
                      onChange={(e) =>
                        handleInputChange("message", e.target.value)
                      }
                      className={cn(
                        "w-full px-4 py-3 bg-gray-700/50 border rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-all duration-300 resize-none",
                        errors.message ? "border-red-500" : "border-gray-600"
                      )}
                      placeholder="Mô tả chi tiết về dự án hoặc yêu cầu của bạn..."
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
                    whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                    whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                    className={cn(
                      "w-full py-4 px-6 rounded-lg font-semibold text-white transition-all duration-300 flex items-center justify-center gap-3",
                      isSubmitting
                        ? "bg-gray-600 cursor-not-allowed"
                        : "bg-gradient-to-r from-purple-600 to-pink-600 hover:shadow-lg hover:shadow-purple-500/30"
                    )}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Đang gửi...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Gửi tin nhắn
                      </>
                    )}
                  </motion.button>
                </form>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-10 w-2 h-2 bg-purple-400 rounded-full opacity-60" />
        <div className="absolute bottom-1/4 right-10 w-3 h-3 bg-pink-400 rounded-full opacity-40" />
        <div className="absolute top-2/3 right-1/3 w-2 h-2 bg-blue-400 rounded-full opacity-50" />
      </div>
    </section>
  );
}
