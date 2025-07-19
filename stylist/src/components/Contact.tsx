"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Heart,
  MessageCircle,
  User,
  Building,
  FileText,
  Calendar,
  CheckCircle,
  Clock,
  Star,
  Sparkles,
  Instagram,
  Youtube,
  Music,
  Facebook,
  Linkedin,
  Twitter,
  Coffee,
  Camera,
  Zap,
} from "lucide-react";

const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    project: "",
    budget: "",
    timeline: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
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

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after success
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        project: "",
        budget: "",
        timeline: "",
        message: "",
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hello@hoangstylelist.com",
      href: "mailto:hello@hoangstylelist.com",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Phone,
      label: "Điện thoại",
      value: "+84 123 456 789",
      href: "tel:+84123456789",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: MapPin,
      label: "Địa chỉ",
      value: "TP. Hồ Chí Minh, Việt Nam",
      href: "https://maps.google.com",
      color: "from-red-500 to-pink-500",
    },
    {
      icon: Clock,
      label: "Giờ làm việc",
      value: "T2 - T6: 9:00 - 18:00",
      href: null,
      color: "from-purple-500 to-indigo-500",
    },
  ];

  const socialLinks = [
    {
      icon: Instagram,
      name: "Instagram",
      url: "https://instagram.com/hoangstylelist",
      color: "from-pink-500 to-purple-500",
      followers: "25K",
    },
    {
      icon: Youtube,
      name: "YouTube",
      url: "https://youtube.com/hoangstylelist",
      color: "from-red-500 to-pink-500",
      followers: "12K",
    },
    {
      icon: Music,
      name: "TikTok",
      url: "https://tiktok.com/@hoangstylelist",
      color: "from-black to-red-500",
      followers: "50K",
    },
    {
      icon: Facebook,
      name: "Facebook",
      url: "https://facebook.com/hoangstylelist",
      color: "from-blue-600 to-blue-500",
      followers: "8K",
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      url: "https://linkedin.com/in/hoangstylelist",
      color: "from-blue-700 to-blue-600",
      followers: "5K",
    },
    {
      icon: Twitter,
      name: "Twitter",
      url: "https://twitter.com/hoangstylelist",
      color: "from-blue-400 to-blue-500",
      followers: "3K",
    },
  ];

  const projectTypes = [
    "Video Content Creation",
    "Social Media Strategy",
    "Brand Campaign",
    "Product Photography",
    "Event Coverage",
    "Music Video",
    "Corporate Video",
    "Influencer Collaboration",
    "Content Planning",
    "Creative Direction",
  ];

  const budgetRanges = [
    "< 10 triệu VND",
    "10 - 30 triệu VND",
    "30 - 50 triệu VND",
    "50 - 100 triệu VND",
    "> 100 triệu VND",
  ];

  const timelineOptions = [
    "Càng sớm càng tốt",
    "Trong 1 tuần",
    "Trong 1 tháng",
    "Trong 2-3 tháng",
    "Linh hoạt theo lịch",
  ];

  return (
    <section
      id="contact"
      className="py-20 lg:py-32 bg-gradient-to-br from-gray-50 via-white to-purple-50 relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/3 w-24 h-24 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full blur-3xl animate-pulse" />
      </div>

      <div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        ref={ref}
      >
        {/* Section Header */}
        <motion.div
          className="text-center mb-16 lg:mb-24"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center space-x-2 bg-white/70 backdrop-blur-sm px-6 py-3 rounded-full border border-purple-200 shadow-lg mb-6"
          >
            <MessageCircle className="w-5 h-5 text-purple-500" />
            <span className="text-purple-600 font-medium">Liên hệ</span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-indigo-600 bg-clip-text text-transparent">
              Hãy cùng tạo ra
            </span>
            <br />
            <span className="text-gray-800">điều tuyệt vời</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Sẵn sàng biến ý tưởng của bạn thành hiện thực? Hãy kể cho tôi nghe
            về dự án của bạn!
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Form */}
          <motion.div
            className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-2xl border border-purple-100"
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            <motion.div variants={itemVariants} className="mb-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-4 flex items-center">
                <Sparkles className="w-6 h-6 text-purple-500 mr-3" />
                Bắt đầu dự án mới
              </h3>
              <p className="text-gray-600">
                Điền thông tin dưới đây và tôi sẽ phản hồi trong vòng 24 giờ
              </p>
            </motion.div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div variants={itemVariants}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Họ và tên *
                  </label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-white/80 border border-purple-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                      placeholder="Nhập họ tên của bạn"
                    />
                  </div>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full pl-10 pr-4 py-3 bg-white/80 border border-purple-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                      placeholder="your@email.com"
                    />
                  </div>
                </motion.div>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <motion.div variants={itemVariants}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Công ty/Tổ chức
                  </label>
                  <div className="relative">
                    <Building className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 bg-white/80 border border-purple-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                      placeholder="Tên công ty (tuỳ chọn)"
                    />
                  </div>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Số điện thoại
                  </label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 bg-white/80 border border-purple-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                      placeholder="+84 123 456 789"
                    />
                  </div>
                </motion.div>
              </div>

              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Loại dự án *
                </label>
                <div className="relative">
                  <Camera className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <select
                    name="project"
                    value={formData.project}
                    onChange={handleInputChange}
                    required
                    className="w-full pl-10 pr-4 py-3 bg-white/80 border border-purple-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 appearance-none"
                  >
                    <option value="">Chọn loại dự án</option>
                    {projectTypes.map((type, index) => (
                      <option key={index} value={type}>
                        {type}
                      </option>
                    ))}
                  </select>
                </div>
              </motion.div>

              <div className="grid md:grid-cols-2 gap-6">
                <motion.div variants={itemVariants}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Ngân sách dự kiến
                  </label>
                  <select
                    name="budget"
                    value={formData.budget}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/80 border border-purple-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 appearance-none"
                  >
                    <option value="">Chọn ngân sách</option>
                    {budgetRanges.map((range, index) => (
                      <option key={index} value={range}>
                        {range}
                      </option>
                    ))}
                  </select>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Thời gian thực hiện
                  </label>
                  <div className="relative">
                    <Calendar className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                    <select
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full pl-10 pr-4 py-3 bg-white/80 border border-purple-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 appearance-none"
                    >
                      <option value="">Chọn thời gian</option>
                      {timelineOptions.map((option, index) => (
                        <option key={index} value={option}>
                          {option}
                        </option>
                      ))}
                    </select>
                  </div>
                </motion.div>
              </div>

              <motion.div variants={itemVariants}>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Mô tả chi tiết dự án *
                </label>
                <div className="relative">
                  <FileText className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full pl-10 pr-4 py-3 bg-white/80 border border-purple-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Hãy chia sẻ chi tiết về dự án, mục tiêu, đối tượng khách hàng và những yêu cầu đặc biệt..."
                  />
                </div>
              </motion.div>

              <motion.div variants={itemVariants}>
                <motion.button
                  type="submit"
                  disabled={isSubmitting || isSubmitted}
                  className={`w-full py-4 px-6 rounded-xl font-semibold text-lg transition-all duration-200 flex items-center justify-center space-x-2 ${
                    isSubmitted
                      ? "bg-green-500 text-white"
                      : "bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg"
                  }`}
                  whileHover={{ scale: isSubmitted ? 1 : 1.02 }}
                  whileTap={{ scale: isSubmitted ? 1 : 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <motion.div
                        className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                      />
                      <span>Đang gửi...</span>
                    </>
                  ) : isSubmitted ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      <span>Đã gửi thành công!</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Gửi thông tin</span>
                    </>
                  )}
                </motion.button>
              </motion.div>
            </form>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            {/* Contact Details */}
            <motion.div
              variants={itemVariants}
              className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-purple-100"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <Coffee className="w-6 h-6 text-purple-500 mr-3" />
                Thông tin liên hệ
              </h3>

              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-4 p-4 bg-white/60 rounded-xl hover:bg-white/80 transition-all duration-200"
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-xl flex items-center justify-center`}
                    >
                      <info.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-sm text-gray-600">{info.label}</div>
                      {info.href ? (
                        <a
                          href={info.href}
                          className="text-gray-800 font-medium hover:text-purple-600 transition-colors"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <div className="text-gray-800 font-medium">
                          {info.value}
                        </div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Social Media */}
            <motion.div
              variants={itemVariants}
              className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 shadow-lg border border-purple-100"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center">
                <Zap className="w-6 h-6 text-purple-500 mr-3" />
                Kết nối với tôi
              </h3>

              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-3 p-4 bg-white/60 rounded-xl hover:bg-white/80 transition-all duration-200"
                    whileHover={{ scale: 1.02, y: -2 }}
                  >
                    <div
                      className={`w-10 h-10 bg-gradient-to-r ${social.color} rounded-lg flex items-center justify-center`}
                    >
                      <social.icon className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <div className="text-gray-800 font-medium">
                        {social.name}
                      </div>
                      <div className="text-sm text-gray-600">
                        {social.followers}
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Response Promise */}
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl p-8 text-white relative overflow-hidden"
            >
              <div className="absolute inset-0 bg-black/10" />
              <div className="relative z-10">
                <div className="flex items-center mb-4">
                  <Star className="w-6 h-6 mr-3" />
                  <h3 className="text-xl font-bold">Cam kết của tôi</h3>
                </div>
                <ul className="space-y-2 text-white/90">
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 opacity-80" />
                    Phản hồi trong 24 giờ
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 opacity-80" />
                    Tư vấn miễn phí
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 opacity-80" />
                    Báo giá chi tiết và minh bạch
                  </li>
                  <li className="flex items-center">
                    <CheckCircle className="w-4 h-4 mr-2 opacity-80" />
                    Hỗ trợ 24/7 trong dự án
                  </li>
                </ul>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
