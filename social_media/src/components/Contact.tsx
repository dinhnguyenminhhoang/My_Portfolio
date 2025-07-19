"use client";

import { FormEvent, useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
  Calendar,
  Clock,
  MessageSquare,
  Instagram,
  Youtube,
  MessageCircle,
  Zap,
  Heart,
  Star,
} from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const controls = useAnimation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    projectType: "",
    budget: "",
    message: "",
    timeline: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<string | null>(null);
  const [errors, setErrors] = useState<any>({});

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  } as any;

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      content: "hoang.creator@gmail.com",
      description: "Phản hồi trong vòng 24h",
      action: "mailto:hoang.creator@gmail.com",
      color: "from-blue-500 to-indigo-500",
    },
    {
      icon: Phone,
      title: "Hotline",
      content: "+84 901 234 567",
      description: "Sẵn sàng tư vấn 24/7",
      action: "tel:+84901234567",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: MapPin,
      title: "Địa chỉ",
      content: "Quận 1, TP.HCM",
      description: "Có thể meet offline",
      action: "https://maps.google.com",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: Calendar,
      title: "Lịch hẹn",
      content: "Book Meeting",
      description: "Đặt lịch tư vấn miễn phí",
      action: "#booking",
      color: "from-purple-500 to-pink-500",
    },
  ];

  const projectTypes = [
    "TikTok Content Creation",
    "Instagram Campaign",
    "YouTube Video Production",
    "Brand Partnership",
    "Social Media Strategy",
    "Content Consultation",
    "Full Campaign Management",
    "Khác",
  ];

  const budgetRanges = [
    "Dưới 10 triệu",
    "10-30 triệu",
    "30-50 triệu",
    "50-100 triệu",
    "Trên 100 triệu",
    "Cần tư vấn",
  ];

  const socialLinks = [
    {
      icon: Instagram,
      name: "Instagram",
      handle: "@hoang.creator",
      followers: "50K+",
      color: "from-pink-500 to-rose-500",
      url: "#",
    },
    {
      icon: Youtube,
      name: "YouTube",
      handle: "Hoàng Creator",
      followers: "25K+",
      color: "from-red-500 to-red-600",
      url: "#",
    },
    {
      icon: MessageCircle,
      name: "TikTok",
      handle: "@hoang.viral",
      followers: "100K+",
      color: "from-gray-800 to-gray-900",
      url: "#",
    },
  ];

  const validateForm = () => {
    const newErrors = {} as any;

    if (!formData.name.trim()) newErrors.name = "Vui lòng nhập họ tên";
    if (!formData.email.trim()) {
      newErrors.email = "Vui lòng nhập email";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email không hợp lệ";
    }
    if (!formData.phone.trim()) {
      newErrors.phone = "Vui lòng nhập số điện thoại";
    } else if (!/^[0-9+\-\s()]+$/.test(formData.phone)) {
      newErrors.phone = "Số điện thoại không hợp lệ";
    }
    if (!formData.projectType)
      newErrors.projectType = "Vui lòng chọn loại dự án";
    if (!formData.message.trim()) newErrors.message = "Vui lòng nhập nội dung";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000));

      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        company: "",
        projectType: "",
        budget: "",
        message: "",
        timeline: "",
      });
      setErrors({});
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInputChange = (field: any, value: any) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev: any) => ({ ...prev, [field]: "" }));
    }
  };

  return (
    <section
      id="contact"
      ref={ref}
      className="relative py-20 lg:py-32 bg-gradient-to-b from-gray-50 to-white overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{
            rotate: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute top-1/4 -right-32 w-64 h-64 bg-gradient-to-r from-purple-200/30 to-pink-200/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            rotate: [360, 0],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear",
          }}
          className="absolute bottom-1/4 -left-32 w-48 h-48 bg-gradient-to-r from-blue-200/30 to-indigo-200/30 rounded-full blur-3xl"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <motion.div
              className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-purple-600 font-medium text-sm">
                Liên hệ & Hợp tác
              </span>
            </motion.div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900">
              Sẵn sàng tạo nên{" "}
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                Viral Content
              </span>
              ?
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Hãy cùng tôi biến ý tưởng của bạn thành những campaign viral và
              chiến lược content marketing bùng nổ. Liên hệ ngay để bắt đầu
              collaboration!
            </p>
          </motion.div>

          {/* Contact Info Grid */}
          <motion.div
            variants={itemVariants}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {contactInfo.map((info, index) => (
              <motion.a
                key={index}
                href={info.action}
                className="group bg-white rounded-2xl p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 text-center"
                whileHover={{ y: -5, scale: 1.02 }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.5 }}
              >
                <div
                  className={`w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-r ${info.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                >
                  <info.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {info.title}
                </h3>
                <p className="text-purple-600 font-medium mb-1">
                  {info.content}
                </p>
                <p className="text-gray-500 text-sm">{info.description}</p>
              </motion.a>
            ))}
          </motion.div>

          {/* Main Contact Section */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Gửi yêu cầu hợp tác
                </h3>
                <p className="text-gray-600">
                  Điền thông tin chi tiết để tôi có thể tư vấn phù hợp nhất cho
                  dự án của bạn.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Họ và tên *
                    </label>
                    <input
                      type="text"
                      value={formData.name}
                      onChange={(e) =>
                        handleInputChange("name", e.target.value)
                      }
                      className={`w-full px-4 py-3 rounded-xl border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                        errors.name
                          ? "border-red-500"
                          : "border-gray-300 focus:border-purple-500"
                      }`}
                      placeholder="Nguyễn Văn A"
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-red-500">{errors.name}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Công ty/Tổ chức
                    </label>
                    <input
                      type="text"
                      value={formData.company}
                      onChange={(e) =>
                        handleInputChange("company", e.target.value)
                      }
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors duration-200"
                      placeholder="ABC Company"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) =>
                        handleInputChange("email", e.target.value)
                      }
                      className={`w-full px-4 py-3 rounded-xl border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                        errors.email
                          ? "border-red-500"
                          : "border-gray-300 focus:border-purple-500"
                      }`}
                      placeholder="email@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.email}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Số điện thoại *
                    </label>
                    <input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        handleInputChange("phone", e.target.value)
                      }
                      className={`w-full px-4 py-3 rounded-xl border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                        errors.phone
                          ? "border-red-500"
                          : "border-gray-300 focus:border-purple-500"
                      }`}
                      placeholder="0901 234 567"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.phone}
                      </p>
                    )}
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Loại dự án *
                    </label>
                    <select
                      value={formData.projectType}
                      onChange={(e) =>
                        handleInputChange("projectType", e.target.value)
                      }
                      className={`w-full px-4 py-3 rounded-xl border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 ${
                        errors.projectType
                          ? "border-red-500"
                          : "border-gray-300 focus:border-purple-500"
                      }`}
                    >
                      <option value="">Chọn loại dự án</option>
                      {projectTypes.map((type, index) => (
                        <option key={index} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                    {errors.projectType && (
                      <p className="mt-1 text-sm text-red-500">
                        {errors.projectType}
                      </p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Ngân sách dự kiến
                    </label>
                    <select
                      value={formData.budget}
                      onChange={(e) =>
                        handleInputChange("budget", e.target.value)
                      }
                      className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors duration-200"
                    >
                      <option value="">Chọn mức ngân sách</option>
                      {budgetRanges.map((range, index) => (
                        <option key={index} value={range}>
                          {range}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Timeline mong muốn
                  </label>
                  <input
                    type="text"
                    value={formData.timeline}
                    onChange={(e) =>
                      handleInputChange("timeline", e.target.value)
                    }
                    className="w-full px-4 py-3 rounded-xl border border-gray-300 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500 transition-colors duration-200"
                    placeholder="VD: Trong 2 tuần, Cuối tháng này..."
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Mô tả chi tiết dự án *
                  </label>
                  <textarea
                    rows={5}
                    value={formData.message}
                    onChange={(e) =>
                      handleInputChange("message", e.target.value)
                    }
                    className={`w-full px-4 py-3 rounded-xl border transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-purple-500 resize-none ${
                      errors.message
                        ? "border-red-500"
                        : "border-gray-300 focus:border-purple-500"
                    }`}
                    placeholder="Hãy mô tả chi tiết về dự án, mục tiêu, target audience, và những yêu cầu đặc biệt..."
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-red-500">
                      {errors.message}
                    </p>
                  )}
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-2 ${
                    isSubmitting
                      ? "bg-gray-400 cursor-not-allowed"
                      : "bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:shadow-lg hover:shadow-purple-500/25"
                  }`}
                  whileHover={!isSubmitting ? { scale: 1.02, y: -2 } : {}}
                  whileTap={!isSubmitting ? { scale: 0.98 } : {}}
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                      />
                      <span>Đang gửi...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Gửi yêu cầu hợp tác</span>
                    </>
                  )}
                </motion.button>

                {/* Submit Status */}
                {submitStatus && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`p-4 rounded-xl flex items-center space-x-3 ${
                      submitStatus === "success"
                        ? "bg-green-50 text-green-700 border border-green-200"
                        : "bg-red-50 text-red-700 border border-red-200"
                    }`}
                  >
                    {submitStatus === "success" ? (
                      <CheckCircle className="w-5 h-5" />
                    ) : (
                      <AlertCircle className="w-5 h-5" />
                    )}
                    <span>
                      {submitStatus === "success"
                        ? "Gửi thành công! Tôi sẽ liên hệ với bạn trong 24h."
                        : "Có lỗi xảy ra. Vui lòng thử lại hoặc liên hệ trực tiếp."}
                    </span>
                  </motion.div>
                )}
              </form>
            </motion.div>

            {/* Social & Additional Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Social Media */}
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">
                  Kết nối social media
                </h3>
                <div className="space-y-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.url}
                      className="group flex items-center p-4 bg-white rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300"
                      whileHover={{ x: 5, scale: 1.02 }}
                      initial={{ opacity: 0, x: 30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 + 0.8 }}
                    >
                      <div
                        className={`w-12 h-12 rounded-xl bg-gradient-to-r ${social.color} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                      >
                        <social.icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="ml-4 flex-1">
                        <h4 className="font-semibold text-gray-900">
                          {social.name}
                        </h4>
                        <p className="text-purple-600 text-sm">
                          {social.handle}
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-gray-900">
                          {social.followers}
                        </p>
                        <p className="text-gray-500 text-sm">followers</p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Quick Info */}
              <div className="bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-100">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Thông tin nhanh
                </h4>
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-gray-600">
                    <Clock className="w-5 h-5 text-purple-500" />
                    <span>Phản hồi trong vòng 24h</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-600">
                    <MessageSquare className="w-5 h-5 text-purple-500" />
                    <span>Tư vấn miễn phí consultation call</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-600">
                    <Zap className="w-5 h-5 text-purple-500" />
                    <span>Có thể bắt đầu ngay trong tuần</span>
                  </div>
                  <div className="flex items-center space-x-3 text-gray-600">
                    <Heart className="w-5 h-5 text-purple-500" />
                    <span>Cam kết chất lượng 100%</span>
                  </div>
                </div>
              </div>

              {/* FAQ */}
              <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                <h4 className="text-lg font-semibold text-gray-900 mb-4">
                  Câu hỏi thường gặp
                </h4>
                <div className="space-y-4">
                  <div>
                    <h5 className="font-medium text-gray-900 mb-1">
                      Thời gian thực hiện dự án?
                    </h5>
                    <p className="text-gray-600 text-sm">
                      Tùy thuộc vào quy mô, thường từ 1-4 tuần cho một campaign
                      hoàn chỉnh.
                    </p>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-900 mb-1">
                      Chi phí như thế nào?
                    </h5>
                    <p className="text-gray-600 text-sm">
                      Linh hoạt theo ngân sách, từ gói cơ bản đến premium. Liên
                      hệ để báo giá chi tiết.
                    </p>
                  </div>
                  <div>
                    <h5 className="font-medium text-gray-900 mb-1">
                      Có đảm bảo kết quả không?
                    </h5>
                    <p className="text-gray-600 text-sm">
                      Cam kết chất lượng content và strategy, với track record
                      98% client satisfaction.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
