"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  MessageCircle,
  Clock,
  Coffee,
  Zap,
  Heart,
  Star,
  Globe,
} from "lucide-react";
import { gsap } from "gsap";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
  budget: string;
  timeline: string;
}

interface FormErrors {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
}

const socialLinks = [
  {
    name: "Email",
    icon: <Mail className="w-5 h-5" />,
    url: "mailto:hoang@gamedesigner.vn",
    label: "hoang@gamedesigner.vn",
    color: "from-red-500 to-pink-600",
    description: "Gửi email trực tiếp",
  },
  {
    name: "LinkedIn",
    icon: <Linkedin className="w-5 h-5" />,
    url: "https://linkedin.com/in/hoang-gamedesigner",
    label: "/in/hoang-gamedesigner",
    color: "from-blue-600 to-blue-700",
    description: "Kết nối chuyên nghiệp",
  },
  {
    name: "GitHub",
    icon: <Github className="w-5 h-5" />,
    url: "https://github.com/hoang-gamedesigner",
    label: "@hoang-gamedesigner",
    color: "from-gray-700 to-gray-800",
    description: "Xem source code",
  },
  {
    name: "Instagram",
    icon: <Instagram className="w-5 h-5" />,
    url: "https://instagram.com/hoang.gamedesign",
    label: "@hoang.gamedesign",
    color: "from-pink-500 to-purple-600",
    description: "Behind the scenes",
  },
];

const contactInfo = [
  {
    icon: <MapPin className="w-6 h-6" />,
    title: "Địa chỉ",
    content: "Hồ Chí Minh, Việt Nam",
    subtext: "Sẵn sàng làm việc remote",
  },
  {
    icon: <Clock className="w-6 h-6" />,
    title: "Thời gian làm việc",
    content: "9:00 - 18:00",
    subtext: "Thứ 2 - Thứ 6 (GMT+7)",
  },
  {
    icon: <Coffee className="w-6 h-6" />,
    title: "Response time",
    content: "< 24 giờ",
    subtext: "Thường phản hồi trong vài giờ",
  },
];

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    subject: "",
    message: "",
    budget: "",
    timeline: "",
  });

  const [errors, setErrors] = useState<FormErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  // Floating animation for contact cards
  useEffect(() => {
    const cards = document.querySelectorAll(".contact-card");
    cards.forEach((card, index) => {
      gsap.to(card, {
        y: "-=10",
        duration: 2 + index * 0.5,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: index * 0.3,
      });
    });
  }, []);

  // Form validation
  const validateForm = (): boolean => {
    const newErrors: FormErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Tên là bắt buộc";
    } else if (formData.name.trim().length < 2) {
      newErrors.name = "Tên phải có ít nhất 2 ký tự";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email là bắt buộc";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Email không hợp lệ";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Chủ đề là bắt buộc";
    }

    if (!formData.message.trim()) {
      newErrors.message = "Nội dung là bắt buộc";
    } else if (formData.message.trim().length < 10) {
      newErrors.message = "Nội dung phải có ít nhất 10 ký tự";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
        budget: "",
        timeline: "",
      });
    }, 3000);
  };

  // Handle input changes
  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" },
    },
  } as any;

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-950" />

      {/* Animated Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 20 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/30 rounded-full animate-pulse"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>

      <div className="container-custom relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-300 text-sm font-medium mb-6">
              <MessageCircle className="w-4 h-4" />
              <span>Liên hệ hợp tác</span>
            </div>

            <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-gradient text-display">
              Bắt đầu dự án mới
            </h2>

            <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
              Có ý tưởng game tuyệt vời? Hãy cùng nhau biến nó thành hiện thực!
              Tôi luôn sẵn sàng lắng nghe và hợp tác để tạo ra những trải nghiệm
              game đặc biệt.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-16 items-start">
            {/* Contact Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6">
                  Thông tin liên hệ
                </h3>

                <div className="space-y-6">
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={info.title}
                      variants={itemVariants}
                      className="contact-card flex items-start space-x-4 p-4 glass-effect rounded-2xl border border-white/10 hover:border-purple-400/30 transition-all duration-300"
                    >
                      <div className="w-12 h-12 bg-gradient-primary rounded-xl flex items-center justify-center flex-shrink-0">
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-1">
                          {info.title}
                        </h4>
                        <p className="text-purple-300 font-medium">
                          {info.content}
                        </p>
                        <p className="text-sm text-gray-400">{info.subtext}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Social Links */}
              <div>
                <h3 className="text-xl font-bold text-white mb-6">
                  Kết nối với tôi
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <motion.a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      variants={itemVariants}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="contact-card flex items-center space-x-3 p-4 glass-effect rounded-xl border border-white/10 hover:border-purple-400/30 transition-all duration-300 group"
                    >
                      <div
                        className={`w-10 h-10 bg-gradient-to-r ${social.color} rounded-lg flex items-center justify-center transition-transform group-hover:scale-110`}
                      >
                        {social.icon}
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="text-white font-medium">
                          {social.name}
                        </h4>
                        <p className="text-sm text-gray-400 truncate">
                          {social.label}
                        </p>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* Fun Stats */}
              <motion.div
                variants={itemVariants}
                className="glass-effect rounded-2xl p-6 border border-white/10"
              >
                <h3 className="text-lg font-bold text-white mb-4 flex items-center">
                  <Star className="w-5 h-5 text-yellow-400 mr-2" />
                  Quick Facts
                </h3>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gradient">24h</div>
                    <div className="text-gray-400">Response time</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gradient">100%</div>
                    <div className="text-gray-400">Project success</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gradient">50+</div>
                    <div className="text-gray-400">Happy clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-gradient">∞</div>
                    <div className="text-gray-400">Creative ideas</div>
                  </div>
                </div>
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div variants={itemVariants}>
              <div className="glass-effect rounded-3xl p-8 border border-white/10">
                <h3 className="text-2xl font-bold text-white mb-6 flex items-center">
                  <Zap className="w-6 h-6 text-purple-400 mr-2" />
                  Gửi tin nhắn
                </h3>

                {isSubmitted ? (
                  <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    className="text-center py-12"
                  >
                    <CheckCircle className="w-16 h-16 text-green-400 mx-auto mb-4" />
                    <h4 className="text-xl font-bold text-white mb-2">
                      Cảm ơn bạn!
                    </h4>
                    <p className="text-gray-300">
                      Tin nhắn đã được gửi thành công. Tôi sẽ phản hồi sớm nhất
                      có thể!
                    </p>
                  </motion.div>
                ) : (
                  <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    className="space-y-6"
                  >
                    {/* Name & Email */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-300">
                          Họ tên <span className="text-red-400">*</span>
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            onFocus={() => setFocusedField("name")}
                            onBlur={() => setFocusedField(null)}
                            className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white placeholder-gray-400 transition-all duration-300 focus:outline-none focus:ring-2 ${
                              errors.name
                                ? "border-red-400 focus:ring-red-400/50"
                                : focusedField === "name"
                                ? "border-purple-400 focus:ring-purple-400/50"
                                : "border-white/20 focus:border-purple-400"
                            }`}
                            placeholder="Tên của bạn"
                          />
                          {focusedField === "name" && (
                            <motion.div
                              initial={{ scaleX: 0 }}
                              animate={{ scaleX: 1 }}
                              className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-primary origin-left"
                            />
                          )}
                        </div>
                        {errors.name && (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-sm text-red-400 flex items-center"
                          >
                            <AlertCircle className="w-4 h-4 mr-1" />
                            {errors.name}
                          </motion.p>
                        )}
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-300">
                          Email <span className="text-red-400">*</span>
                        </label>
                        <div className="relative">
                          <input
                            type="email"
                            name="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            onFocus={() => setFocusedField("email")}
                            onBlur={() => setFocusedField(null)}
                            className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white placeholder-gray-400 transition-all duration-300 focus:outline-none focus:ring-2 ${
                              errors.email
                                ? "border-red-400 focus:ring-red-400/50"
                                : focusedField === "email"
                                ? "border-purple-400 focus:ring-purple-400/50"
                                : "border-white/20 focus:border-purple-400"
                            }`}
                            placeholder="email@example.com"
                          />
                          {focusedField === "email" && (
                            <motion.div
                              initial={{ scaleX: 0 }}
                              animate={{ scaleX: 1 }}
                              className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-primary origin-left"
                            />
                          )}
                        </div>
                        {errors.email && (
                          <motion.p
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-sm text-red-400 flex items-center"
                          >
                            <AlertCircle className="w-4 h-4 mr-1" />
                            {errors.email}
                          </motion.p>
                        )}
                      </div>
                    </div>

                    {/* Subject */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">
                        Chủ đề <span className="text-red-400">*</span>
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          name="subject"
                          value={formData.subject}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField("subject")}
                          onBlur={() => setFocusedField(null)}
                          className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white placeholder-gray-400 transition-all duration-300 focus:outline-none focus:ring-2 ${
                            errors.subject
                              ? "border-red-400 focus:ring-red-400/50"
                              : focusedField === "subject"
                              ? "border-purple-400 focus:ring-purple-400/50"
                              : "border-white/20 focus:border-purple-400"
                          }`}
                          placeholder="Thiết kế game mobile RPG"
                        />
                        {focusedField === "subject" && (
                          <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-primary origin-left"
                          />
                        )}
                      </div>
                      {errors.subject && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-sm text-red-400 flex items-center"
                        >
                          <AlertCircle className="w-4 h-4 mr-1" />
                          {errors.subject}
                        </motion.p>
                      )}
                    </div>

                    {/* Budget & Timeline */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-300">
                          Ngân sách
                        </label>
                        <select
                          name="budget"
                          value={formData.budget}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-400/50 focus:border-purple-400 transition-all duration-300"
                        >
                          <option value="" className="bg-slate-800">
                            Chọn ngân sách
                          </option>
                          <option value="under-50m" className="bg-slate-800">
                            Dưới 50 triệu
                          </option>
                          <option value="50m-100m" className="bg-slate-800">
                            50-100 triệu
                          </option>
                          <option value="100m-200m" className="bg-slate-800">
                            100-200 triệu
                          </option>
                          <option value="over-200m" className="bg-slate-800">
                            Trên 200 triệu
                          </option>
                        </select>
                      </div>

                      <div className="space-y-2">
                        <label className="text-sm font-medium text-gray-300">
                          Timeline
                        </label>
                        <select
                          name="timeline"
                          value={formData.timeline}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white focus:outline-none focus:ring-2 focus:ring-purple-400/50 focus:border-purple-400 transition-all duration-300"
                        >
                          <option value="" className="bg-slate-800">
                            Chọn timeline
                          </option>
                          <option value="1-3m" className="bg-slate-800">
                            1-3 tháng
                          </option>
                          <option value="3-6m" className="bg-slate-800">
                            3-6 tháng
                          </option>
                          <option value="6-12m" className="bg-slate-800">
                            6-12 tháng
                          </option>
                          <option value="over-12m" className="bg-slate-800">
                            Trên 12 tháng
                          </option>
                        </select>
                      </div>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <label className="text-sm font-medium text-gray-300">
                        Nội dung <span className="text-red-400">*</span>
                      </label>
                      <div className="relative">
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          onFocus={() => setFocusedField("message")}
                          onBlur={() => setFocusedField(null)}
                          rows={5}
                          className={`w-full px-4 py-3 bg-white/5 border rounded-xl text-white placeholder-gray-400 transition-all duration-300 focus:outline-none focus:ring-2 resize-none ${
                            errors.message
                              ? "border-red-400 focus:ring-red-400/50"
                              : focusedField === "message"
                              ? "border-purple-400 focus:ring-purple-400/50"
                              : "border-white/20 focus:border-purple-400"
                          }`}
                          placeholder="Mô tả chi tiết về dự án game của bạn, thể loại, target audience, features mong muốn..."
                        />
                        {focusedField === "message" && (
                          <motion.div
                            initial={{ scaleX: 0 }}
                            animate={{ scaleX: 1 }}
                            className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-primary origin-left"
                          />
                        )}
                      </div>
                      {errors.message && (
                        <motion.p
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="text-sm text-red-400 flex items-center"
                        >
                          <AlertCircle className="w-4 h-4 mr-1" />
                          {errors.message}
                        </motion.p>
                      )}
                    </div>

                    {/* Submit Button */}
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
                      whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
                      className={`w-full flex items-center justify-center space-x-2 py-4 px-6 rounded-xl font-semibold transition-all duration-300 ${
                        isSubmitting
                          ? "bg-gray-600 cursor-not-allowed"
                          : "btn-primary hover:shadow-lg hover:shadow-purple-500/25"
                      }`}
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Đang gửi...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          <span>Gửi tin nhắn</span>
                        </>
                      )}
                    </motion.button>

                    <p className="text-xs text-gray-400 text-center">
                      Bằng cách gửi tin nhắn, bạn đồng ý với việc tôi liên hệ
                      lại để thảo luận về dự án.
                    </p>
                  </form>
                )}
              </div>
            </motion.div>
          </div>

          {/* Bottom CTA */}
          <motion.div variants={itemVariants} className="text-center mt-16">
            <div className="glass-effect rounded-3xl p-8 border border-white/10 max-w-3xl mx-auto">
              <Heart className="w-12 h-12 text-red-400 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-4">
                Cùng nhau tạo ra game tuyệt vời! 🎮
              </h3>
              <p className="text-gray-300 leading-relaxed">
                Mỗi dự án là một cơ hội để tôi thể hiện sự sáng tạo và đam mê.
                Hãy liên hệ ngay để bắt đầu cuộc hành trình tạo ra trải nghiệm
                game độc đáo của bạn!
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
