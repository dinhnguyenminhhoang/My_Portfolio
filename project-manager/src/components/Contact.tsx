"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
  Linkedin,
  Twitter,
  Instagram,
  Github,
} from "lucide-react";
import {
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
} from "@/lib/utils";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "hoang.pm@example.com",
    link: "mailto:hoang.pm@example.com",
    gradient: "from-pink-500 to-purple-500",
  },
  {
    icon: Phone,
    title: "Điện thoại",
    value: "+84 123 456 789",
    link: "tel:+84123456789",
    gradient: "from-purple-500 to-cyan-500",
  },
  {
    icon: MapPin,
    title: "Địa chỉ",
    value: "TP. Hồ Chí Minh, Việt Nam",
    link: "#",
    gradient: "from-cyan-500 to-blue-500",
  },
];

const socialLinks = [
  {
    icon: Linkedin,
    name: "LinkedIn",
    url: "https://linkedin.com/in/hoang-pm",
    color: "hover:text-blue-400",
  },
  {
    icon: Twitter,
    name: "Twitter",
    url: "https://twitter.com/hoang_pm",
    color: "hover:text-sky-400",
  },
  {
    icon: Instagram,
    name: "Instagram",
    url: "https://instagram.com/hoang_pm",
    color: "hover:text-pink-400",
  },
  {
    icon: Github,
    name: "GitHub",
    url: "https://github.com/hoang-pm",
    color: "hover:text-gray-400",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
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

    // Simulate API call
    setTimeout(() => {
      setSubmitStatus("success");
      setIsSubmitting(false);
      setFormData({ name: "", email: "", subject: "", message: "" });

      // Reset success message after 3 seconds
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 3000);
    }, 2000);
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gradient-to-br from-black via-purple-900/10 to-black"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16"
        >
          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            <span className="bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 bg-clip-text text-transparent">
              Liên hệ với tôi
            </span>
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-300 max-w-3xl mx-auto"
          >
            Có dự án thú vị? Hãy cùng thảo luận và biến ý tưởng thành hiện thực!
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            variants={fadeInLeft}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.5 }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Thông tin liên hệ
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.a
                    key={index}
                    href={info.link}
                    whileHover={{ scale: 1.02, x: 10 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex items-center p-4 bg-gray-900/50 backdrop-blur-sm rounded-lg border border-gray-800 hover:border-gray-700 transition-all duration-300 group"
                  >
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${info.gradient} rounded-full flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <info.icon className="text-white" size={20} />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{info.title}</p>
                      <p className="text-white font-semibold">{info.value}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-2xl font-bold text-white mb-6">
                Kết nối với tôi
              </h3>
              <div className="flex space-x-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-12 h-12 bg-gray-900/50 backdrop-blur-sm rounded-full flex items-center justify-center border border-gray-800 hover:border-gray-700 transition-all duration-300 text-gray-400 ${social.color}`}
                  >
                    <social.icon size={20} />
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Quote */}
            <motion.div whileHover={{ scale: 1.02 }} className="relative mt-8">
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-lg blur opacity-25"></div>
              <div className="relative bg-gray-900/80 backdrop-blur-sm p-6 rounded-lg border border-gray-800">
                <p className="text-gray-300 italic text-center">
                  "Thành công không phải là chìa khóa của hạnh phúc. Hạnh phúc
                  là chìa khóa của thành công. Nếu bạn yêu thích công việc mình
                  đang làm, bạn sẽ thành công."
                </p>
                <p className="text-center text-purple-400 font-semibold mt-4">
                  - Albert Schweitzer
                </p>
              </div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            variants={fadeInRight}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true, amount: 0.5 }}
            className="relative"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 rounded-lg blur opacity-25"></div>
            <div className="relative bg-gray-900/80 backdrop-blur-sm p-8 rounded-lg border border-gray-800">
              <h3 className="text-2xl font-bold text-white mb-6">
                Gửi tin nhắn
              </h3>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Họ tên *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                      placeholder="Nhập họ tên của bạn"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-300 mb-2"
                    >
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Chủ đề
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    placeholder="Chủ đề tin nhắn"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-300 mb-2"
                  >
                    Tin nhắn *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-gray-800/50 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none"
                    placeholder="Nhập nội dung tin nhắn..."
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={`w-full py-4 rounded-lg font-semibold text-white transition-all duration-300 flex items-center justify-center space-x-2 ${
                    isSubmitting
                      ? "bg-gray-600 cursor-not-allowed"
                      : submitStatus === "success"
                      ? "bg-green-600 hover:bg-green-700"
                      : "bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 shadow-lg shadow-purple-500/25"
                  }`}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Đang gửi...</span>
                    </>
                  ) : submitStatus === "success" ? (
                    <>
                      <CheckCircle size={20} />
                      <span>Gửi thành công!</span>
                    </>
                  ) : (
                    <>
                      <Send size={20} />
                      <span>Gửi tin nhắn</span>
                    </>
                  )}
                </motion.button>
              </form>

              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-4 p-4 bg-green-500/20 border border-green-500/50 rounded-lg flex items-center space-x-2 text-green-400"
                >
                  <CheckCircle size={20} />
                  <span>Cảm ơn bạn! Tôi sẽ phản hồi trong vòng 24 giờ.</span>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
