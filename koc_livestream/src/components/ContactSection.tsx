"use client";

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  User,
  Building,
  MessageSquare,
  Calendar,
  Clock,
  Facebook,
  Instagram,
  Youtube,
  Linkedin,
  Twitter,
  Sparkles,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";

interface ContactInfo {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  color: string;
}

interface SocialLink {
  icon: React.ReactNode;
  name: string;
  href: string;
  color: string;
  followers: string;
}

interface FormData {
  name: string;
  email: string;
  company: string;
  project: string;
  budget: string;
  message: string;
}

const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    company: "",
    project: "",
    budget: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const contactInfo: ContactInfo[] = [
    {
      icon: <Mail className="w-6 h-6" />,
      label: "Email",
      value: "koc.livestream@gmail.com",
      href: "mailto:koc.livestream@gmail.com",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      label: "Phone",
      value: "+84 123 456 789",
      href: "tel:+84123456789",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: <MapPin className="w-6 h-6" />,
      label: "Location",
      value: "TP.HCM, Việt Nam",
      href: "#",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: <Clock className="w-6 h-6" />,
      label: "Working Hours",
      value: "Mon - Fri: 9AM - 6PM",
      href: "#",
      color: "from-yellow-500 to-orange-500",
    },
  ];

  const socialLinks: SocialLink[] = [
    {
      icon: <Facebook className="w-6 h-6" />,
      name: "Facebook",
      href: "https://facebook.com/koc.livestream",
      color: "from-blue-600 to-blue-500",
      followers: "50K",
    },
    {
      icon: <Instagram className="w-6 h-6" />,
      name: "Instagram",
      href: "https://instagram.com/koc.livestream",
      color: "from-pink-500 to-rose-500",
      followers: "75K",
    },
    {
      icon: <Youtube className="w-6 h-6" />,
      name: "YouTube",
      href: "https://youtube.com/koc.livestream",
      color: "from-red-500 to-red-600",
      followers: "25K",
    },
    {
      icon: <Linkedin className="w-6 h-6" />,
      name: "LinkedIn",
      href: "https://linkedin.com/in/koc.livestream",
      color: "from-blue-500 to-indigo-500",
      followers: "10K",
    },
    {
      icon: <Twitter className="w-6 h-6" />,
      name: "Twitter",
      href: "https://twitter.com/koc.livestream",
      color: "from-sky-500 to-blue-500",
      followers: "15K",
    },
  ];

  const projectTypes = [
    "Livestream Marketing",
    "Content Creation",
    "Brand Ambassador",
    "Social Media Campaign",
    "Product Launch",
    "Event Coverage",
    "Influencer Marketing",
    "Other",
  ];

  const budgetRanges = [
    "Under 10M VNĐ",
    "10M - 50M VNĐ",
    "50M - 100M VNĐ",
    "100M - 500M VNĐ",
    "Over 500M VNĐ",
    "Let's discuss",
  ];

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
    setTimeout(() => {
      setSubmitStatus("success");
      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        company: "",
        project: "",
        budget: "",
        message: "",
      });

      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus("idle"), 3000);
    }, 2000);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  } as any;

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-20 md:py-32 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-20 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <motion.div
        style={{ y }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-40 right-10 w-32 h-32 border border-purple-500/20 rounded-full animate-spin-slow" />
        <div className="absolute bottom-40 left-10 w-24 h-24 border border-pink-500/20 rounded-full animate-pulse" />
      </motion.div>

      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-7xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <div className="px-4 py-2 glass rounded-full border border-white/20">
                <span className="text-purple-400 font-medium flex items-center space-x-2">
                  <Send className="w-4 h-4" />
                  <span>Liên hệ</span>
                </span>
              </div>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Hãy <span className="gradient-text-purple">kết nối</span> với tôi
            </h2>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Sẵn sàng thảo luận về dự án tiếp theo? Liên hệ ngay để được tư vấn
              và báo giá chi tiết cho chiến dịch KOC marketing của bạn.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div className="glass p-8 rounded-2xl border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center space-x-3">
                  <MessageSquare className="w-6 h-6 text-purple-400" />
                  <span>Gửi tin nhắn</span>
                </h3>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Họ tên *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 glass rounded-lg border border-white/20 bg-white/5 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-colors"
                          placeholder="Nhập họ tên"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Email *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 glass rounded-lg border border-white/20 bg-white/5 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-colors"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Công ty/Thương hiệu
                    </label>
                    <div className="relative">
                      <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                      <input
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 glass rounded-lg border border-white/20 bg-white/5 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-colors"
                        placeholder="Tên công ty hoặc thương hiệu"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Loại dự án *
                      </label>
                      <select
                        name="project"
                        value={formData.project}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 glass rounded-lg border border-white/20 bg-white/5 text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-colors"
                      >
                        <option value="">Chọn loại dự án</option>
                        {projectTypes.map((type) => (
                          <option
                            key={type}
                            value={type}
                            className="bg-gray-800"
                          >
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Ngân sách
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 glass rounded-lg border border-white/20 bg-white/5 text-white focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-colors"
                      >
                        <option value="">Chọn ngân sách</option>
                        {budgetRanges.map((range) => (
                          <option
                            key={range}
                            value={range}
                            className="bg-gray-800"
                          >
                            {range}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">
                      Tin nhắn *
                    </label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={4}
                      className="w-full px-4 py-3 glass rounded-lg border border-white/20 bg-white/5 text-white placeholder-gray-400 focus:border-purple-500 focus:ring-2 focus:ring-purple-500/20 transition-colors resize-none"
                      placeholder="Mô tả chi tiết về dự án, mục tiêu, timeline và yêu cầu đặc biệt..."
                    />
                  </div>

                  {/* Submit Status */}
                  {submitStatus === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center space-x-2 text-green-400"
                    >
                      <CheckCircle className="w-5 h-5" />
                      <span>Tin nhắn đã được gửi thành công!</span>
                    </motion.div>
                  )}

                  {submitStatus === "error" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center space-x-2 text-red-400"
                    >
                      <AlertCircle className="w-5 h-5" />
                      <span>Có lỗi xảy ra. Vui lòng thử lại!</span>
                    </motion.div>
                  )}

                  <Button
                    type="submit"
                    variant="gradient"
                    size="lg"
                    fullWidth
                    loading={isSubmitting}
                    icon={<Send className="w-5 h-5" />}
                    glow
                  >
                    {isSubmitting ? "Đang gửi..." : "Gửi tin nhắn"}
                  </Button>
                </form>
              </div>
            </motion.div>

            {/* Contact Info & Social */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Contact Information */}
              <div className="glass p-8 rounded-2xl border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center space-x-3">
                  <Phone className="w-6 h-6 text-purple-400" />
                  <span>Thông tin liên hệ</span>
                </h3>

                <div className="space-y-4">
                  {contactInfo.map((info, index) => (
                    <motion.a
                      key={index}
                      href={info.href}
                      className="flex items-center space-x-4 p-4 rounded-xl glass border border-white/20 hover:bg-white/5 transition-colors group"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <div
                        className={cn(
                          "w-12 h-12 rounded-xl bg-gradient-to-r flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300",
                          info.color
                        )}
                      >
                        {info.icon}
                      </div>
                      <div>
                        <div className="text-sm text-gray-400">
                          {info.label}
                        </div>
                        <div className="text-white font-medium group-hover:text-purple-400 transition-colors">
                          {info.value}
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Social Media */}
              <div className="glass p-8 rounded-2xl border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center space-x-3">
                  <Sparkles className="w-6 h-6 text-purple-400" />
                  <span>Theo dõi tôi</span>
                </h3>

                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={index}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-3 p-4 rounded-xl glass border border-white/20 hover:bg-white/5 transition-colors group"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div
                        className={cn(
                          "w-10 h-10 rounded-lg bg-gradient-to-r flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300",
                          social.color
                        )}
                      >
                        {social.icon}
                      </div>
                      <div className="flex-1">
                        <div className="text-white font-medium text-sm group-hover:text-purple-400 transition-colors">
                          {social.name}
                        </div>
                        <div className="text-gray-400 text-xs">
                          {social.followers} followers
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Quick Response */}
              <div className="glass p-8 rounded-2xl border border-white/20">
                <h3 className="text-2xl font-bold text-white mb-4 flex items-center space-x-3">
                  <Clock className="w-6 h-6 text-purple-400" />
                  <span>Phản hồi nhanh</span>
                </h3>

                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                    <span className="text-gray-300">
                      Phản hồi email trong 2-4 giờ
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                    <span className="text-gray-300">
                      Tư vấn miễn phí 30 phút
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
                    <span className="text-gray-300">
                      Báo giá chi tiết trong 24h
                    </span>
                  </div>
                </div>

                <div className="mt-6 pt-6 border-t border-white/20">
                  <p className="text-gray-300 text-sm leading-relaxed">
                    Tôi luôn sẵn sàng lắng nghe và hỗ trợ bạn tạo ra những chiến
                    dịch KOC marketing thành công. Hãy liên hệ ngay!
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
