"use client";

import { useState, useEffect, useRef } from "react";
import { motion, useInView } from "framer-motion";
import { gsap } from "gsap";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  CheckCircle,
  AlertCircle,
  User,
  MessageSquare,
  Calendar,
  Clock,
  Star,
  Heart,
  Zap,
  Coffee,
  Palette,
  Instagram,
  Facebook,
  Twitter,
  Linkedin,
  Youtube,
  Dribbble,
  Github,
  Download,
  ExternalLink,
  Sparkles,
  ArrowRight,
  Globe,
  Headphones,
  Video,
  Camera,
  Beaker,
  HandMetal,
} from "lucide-react";
import {
  cn,
  fadeInUp,
  fadeInLeft,
  fadeInRight,
  staggerContainer,
  scaleIn,
  bounceIn,
  staggerDelay,
} from "@/lib/utils";

const contactInfo = [
  {
    icon: Mail,
    title: "Email",
    value: "hoang.designer@gmail.com",
    link: "mailto:hoang.designer@gmail.com",
    gradient: "from-pink-500 to-purple-500",
    description: "Gửi email để thảo luận dự án",
  },
  {
    icon: Phone,
    title: "Điện thoại",
    value: "+84 123 456 789",
    link: "tel:+84123456789",
    gradient: "from-blue-500 to-cyan-500",
    description: "Gọi trực tiếp để tư vấn nhanh",
  },
  {
    icon: MapPin,
    title: "Địa chỉ",
    value: "TP. Hồ Chí Minh, Việt Nam",
    link: "#",
    gradient: "from-green-500 to-teal-500",
    description: "Có thể gặp mặt trực tiếp",
  },
  {
    icon: Clock,
    title: "Giờ làm việc",
    value: "8:00 - 22:00 (T2-CN)",
    link: "#",
    gradient: "from-orange-500 to-red-500",
    description: "Luôn sẵn sàng hỗ trợ",
  },
];

const socialLinks = [
  {
    name: "Instagram",
    icon: Instagram,
    url: "https://instagram.com/hoang.designer",
    color: "hover:text-pink-500",
    bgColor: "hover:bg-pink-50",
    followers: "25.8K",
    description: "Daily design inspiration",
  },
  {
    name: "Behance",
    icon: Beaker,
    url: "https://behance.net/hoang-designer",
    color: "hover:text-blue-500",
    bgColor: "hover:bg-blue-50",
    followers: "12.3K",
    description: "Portfolio showcase",
  },
  {
    name: "Dribbble",
    icon: Dribbble,
    url: "https://dribbble.com/hoang-designer",
    color: "hover:text-pink-500",
    bgColor: "hover:bg-pink-50",
    followers: "8.9K",
    description: "Design shots & concepts",
  },
  {
    name: "TikTok",
    icon: HandMetal,
    url: "https://tiktok.com/@hoang.designer",
    color: "hover:text-gray-800",
    bgColor: "hover:bg-gray-50",
    followers: "18.2K",
    description: "Design process videos",
  },
  {
    name: "YouTube",
    icon: Youtube,
    url: "https://youtube.com/@hoang-designer",
    color: "hover:text-red-500",
    bgColor: "hover:bg-red-50",
    followers: "15.6K",
    description: "Tutorials & reviews",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    url: "https://linkedin.com/in/hoang-designer",
    color: "hover:text-blue-600",
    bgColor: "hover:bg-blue-50",
    followers: "5.2K",
    description: "Professional network",
  },
];

const services = [
  {
    title: "Branding & Identity",
    description: "Logo, brand guidelines, visual identity",
    icon: Palette,
    price: "Từ 5,000,000₫",
    duration: "2-4 tuần",
    color: "from-pink-500 to-purple-500",
  },
  {
    title: "UI/UX Design",
    description: "App & web interface design",
    icon: Globe,
    price: "Từ 8,000,000₫",
    duration: "3-6 tuần",
    color: "from-blue-500 to-cyan-500",
  },
  {
    title: "Motion Graphics",
    description: "Video ads, animations, social content",
    icon: Video,
    price: "Từ 3,000,000₫",
    duration: "1-3 tuần",
    color: "from-green-500 to-teal-500",
  },
  {
    title: "Social Media Design",
    description: "Posts, stories, templates",
    icon: Instagram,
    price: "Từ 2,000,000₫",
    duration: "1-2 tuần",
    color: "from-orange-500 to-red-500",
  },
];

const testimonials = [
  {
    name: "Nguyễn Minh Anh",
    role: "CEO, Bubble Tea Co.",
    content:
      "Hoàng đã tạo ra một bộ nhận diện thương hiệu tuyệt vời cho chuỗi trà sữa của tôi. Phong cách thiết kế vừa trẻ trung, vừa chuyên nghiệp.",
    avatar: "/api/placeholder/60/60",
    rating: 5,
    project: "Branding",
  },
  {
    name: "Trần Văn Đức",
    role: "Founder, FitLife App",
    content:
      "UI/UX design cho app fitness của chúng tôi rất ấn tượng. User experience tuyệt vời, tăng retention rate đáng kể.",
    avatar: "/api/placeholder/60/60",
    rating: 5,
    project: "UI/UX Design",
  },
  {
    name: "Lê Thị Hương",
    role: "Marketing Manager",
    content:
      "Content visual và motion graphics do Hoàng thực hiện luôn viral trên social media. Chất lượng và tốc độ làm việc rất tốt.",
    avatar: "/api/placeholder/60/60",
    rating: 5,
    project: "Motion Graphics",
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    budget: "",
    timeline: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const sectionRef = useRef<HTMLDivElement>(null);
  const formRef = useRef<HTMLFormElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  // Form animation
  useEffect(() => {
    if (formRef.current && isInView) {
      gsap.from(formRef.current.children, {
        duration: 0.8,
        y: 50,
        opacity: 0,
        stagger: 0.1,
        ease: "power2.out",
        delay: 0.5,
      });
    }
  }, [isInView]);

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

    // Simulate API call
    setTimeout(() => {
      setSubmitStatus("success");
      setIsSubmitting(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        budget: "",
        timeline: "",
        message: "",
      });

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitStatus("idle");
      }, 5000);
    }, 2000);
  };

  const scrollToServices = () => {
    const servicesSection = document.getElementById("services");
    if (servicesSection) {
      servicesSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="py-20 bg-gradient-to-br from-white via-purple-50/50 to-pink-50/50"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="text-center mb-16"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-full border border-purple-200/50 mb-6"
          >
            <Mail className="w-4 h-4 text-purple-500 mr-2" />
            <span className="text-sm font-medium text-purple-700">Liên hệ</span>
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="text-4xl md:text-5xl font-bold mb-6"
          >
            <span className="text-gray-900">Hãy cùng tạo ra</span>
            <br />
            <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 bg-clip-text text-transparent">
              điều tuyệt vời
            </span>
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Có ý tưởng thiết kế thú vị? Cần hỗ trợ cho dự án của bạn? Hãy liên
            hệ ngay để được tư vấn miễn phí!
          </motion.p>
        </motion.div>

        {/* Contact Info Cards */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {contactInfo.map((info, index) => {
            const Icon = info.icon;
            return (
              <motion.a
                key={index}
                href={info.link}
                variants={scaleIn}
                custom={index}
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="group bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-purple-100 shadow-lg hover:shadow-xl transition-all duration-300 text-center"
              >
                <div
                  className={cn(
                    "w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center bg-gradient-to-r",
                    info.gradient
                  )}
                >
                  <Icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {info.title}
                </h3>
                <p className="text-gray-900 font-medium mb-2">{info.value}</p>
                <p className="text-sm text-gray-600">{info.description}</p>
              </motion.a>
            );
          })}
        </motion.div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Contact Form */}
          <motion.div
            variants={fadeInLeft}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/10 to-pink-500/10 rounded-2xl blur-xl"></div>
            <div className="relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-purple-100 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4">
                  <Send className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Gửi tin nhắn
                  </h3>
                  <p className="text-gray-600">
                    Điền thông tin để được tư vấn chi tiết
                  </p>
                </div>
              </div>

              <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Họ tên *
                    </label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 bg-white/70 border border-purple-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                        placeholder="Nhập họ tên của bạn"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="email"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Email *
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="w-full pl-10 pr-4 py-3 bg-white/70 border border-purple-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                        placeholder="your@email.com"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Số điện thoại
                    </label>
                    <div className="relative">
                      <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full pl-10 pr-4 py-3 bg-white/70 border border-purple-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                        placeholder="+84 123 456 789"
                      />
                    </div>
                  </div>

                  <div>
                    <label
                      htmlFor="service"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Dịch vụ quan tâm
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/70 border border-purple-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Chọn dịch vụ</option>
                      <option value="branding">Branding & Identity</option>
                      <option value="ui-ux">UI/UX Design</option>
                      <option value="motion">Motion Graphics</option>
                      <option value="social">Social Media Design</option>
                      <option value="other">Khác</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label
                      htmlFor="budget"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Ngân sách dự kiến
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/70 border border-purple-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Chọn ngân sách</option>
                      <option value="under-5m">Dưới 5 triệu</option>
                      <option value="5m-10m">5-10 triệu</option>
                      <option value="10m-20m">10-20 triệu</option>
                      <option value="20m-50m">20-50 triệu</option>
                      <option value="over-50m">Trên 50 triệu</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="timeline"
                      className="block text-sm font-medium text-gray-700 mb-2"
                    >
                      Thời gian hoàn thành
                    </label>
                    <select
                      id="timeline"
                      name="timeline"
                      value={formData.timeline}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/70 border border-purple-200 rounded-xl text-gray-900 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300"
                    >
                      <option value="">Chọn thời gian</option>
                      <option value="urgent">Gấp (1-2 tuần)</option>
                      <option value="normal">Bình thường (3-4 tuần)</option>
                      <option value="flexible">Linh hoạt (1-2 tháng)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 mb-2"
                  >
                    Mô tả dự án *
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full pl-10 pr-4 py-3 bg-white/70 border border-purple-200 rounded-xl text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Mô tả chi tiết về dự án, yêu cầu thiết kế, phong cách mong muốn..."
                    />
                  </div>
                </div>

                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className={cn(
                    "w-full py-4 rounded-xl font-semibold text-white transition-all duration-300 flex items-center justify-center space-x-2",
                    isSubmitting
                      ? "bg-gray-400 cursor-not-allowed"
                      : submitStatus === "success"
                      ? "bg-green-500 hover:bg-green-600"
                      : "bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 shadow-lg shadow-purple-500/25"
                  )}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Đang gửi...</span>
                    </>
                  ) : submitStatus === "success" ? (
                    <>
                      <CheckCircle className="w-5 h-5" />
                      <span>Gửi thành công!</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>Gửi tin nhắn</span>
                    </>
                  )}
                </motion.button>
              </form>

              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center space-x-3"
                >
                  <CheckCircle className="w-5 h-5 text-green-500" />
                  <div>
                    <p className="text-green-800 font-medium">
                      Cảm ơn bạn đã liên hệ!
                    </p>
                    <p className="text-green-700 text-sm">
                      Tôi sẽ phản hồi trong vòng 24 giờ. Hãy kiểm tra email nhé!
                    </p>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>

          {/* Right Column - Additional Info */}
          <motion.div
            variants={fadeInRight}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            className="space-y-8"
          >
            {/* Services Overview */}
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-purple-100 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mr-4">
                  <Palette className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Dịch vụ & Giá cả
                  </h3>
                  <p className="text-gray-600">
                    Tư vấn miễn phí, báo giá chi tiết
                  </p>
                </div>
              </div>

              <div className="space-y-4">
                {services.map((service, index) => {
                  const Icon = service.icon;
                  return (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.02, x: 5 }}
                      className="flex items-center p-4 bg-white/60 rounded-xl border border-purple-100 hover:border-purple-200 transition-all duration-300"
                    >
                      <div
                        className={cn(
                          "w-12 h-12 rounded-full flex items-center justify-center mr-4 bg-gradient-to-r",
                          service.color
                        )}
                      >
                        <Icon className="w-6 h-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-1">
                          {service.title}
                        </h4>
                        <p className="text-sm text-gray-600 mb-2">
                          {service.description}
                        </p>
                        <div className="flex items-center justify-between text-sm">
                          <span className="text-purple-600 font-medium">
                            {service.price}
                          </span>
                          <span className="text-gray-500">
                            {service.duration}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-purple-100 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                  <Instagram className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Theo dõi tôi
                  </h3>
                  <p className="text-gray-600">Cập nhật dự án mới nhất</p>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      className={cn(
                        "flex items-center p-4 bg-white/60 rounded-xl border border-purple-100 hover:border-purple-200 transition-all duration-300",
                        social.bgColor
                      )}
                    >
                      <Icon
                        className={cn(
                          "w-6 h-6 text-gray-600 mr-3",
                          social.color
                        )}
                      />
                      <div>
                        <div className="font-medium text-gray-900">
                          {social.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {social.followers}
                        </div>
                      </div>
                    </motion.a>
                  );
                })}
              </div>
            </div>

            {/* Testimonials */}
            <div className="bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-purple-100 shadow-lg">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mr-4">
                  <Star className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-900">
                    Khách hàng nói gì
                  </h3>
                  <p className="text-gray-600">Phản hồi từ các dự án</p>
                </div>
              </div>

              <div className="relative">
                <motion.div
                  key={activeTestimonial}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  className="space-y-4"
                >
                  <div className="flex items-center space-x-1 mb-3">
                    {[...Array(testimonials[activeTestimonial].rating)].map(
                      (_, i) => (
                        <Star
                          key={i}
                          className="w-4 h-4 text-yellow-500 fill-current"
                        />
                      )
                    )}
                  </div>
                  <p className="text-gray-700 italic mb-4">
                    "{testimonials[activeTestimonial].content}"
                  </p>
                  <div className="flex items-center space-x-3">
                    <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center">
                      <User className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">
                        {testimonials[activeTestimonial].name}
                      </div>
                      <div className="text-sm text-gray-600">
                        {testimonials[activeTestimonial].role}
                      </div>
                    </div>
                    <div className="ml-auto">
                      <div className="px-3 py-1 bg-gradient-to-r from-purple-500/10 to-pink-500/10 text-purple-700 text-xs rounded-full border border-purple-200/50">
                        {testimonials[activeTestimonial].project}
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Testimonial Navigation */}
                <div className="flex items-center justify-center space-x-2 mt-6">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTestimonial(index)}
                      className={cn(
                        "w-2 h-2 rounded-full transition-all duration-300",
                        index === activeTestimonial
                          ? "bg-gradient-to-r from-purple-500 to-pink-500 w-8"
                          : "bg-gray-300 hover:bg-gray-400"
                      )}
                    />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* FAQ Section */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="mt-16 bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-purple-100 shadow-lg"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-2">
              Câu hỏi thường gặp
            </h3>
            <p className="text-gray-600">
              Những thắc mắc phổ biến từ khách hàng
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="p-4 bg-white/60 rounded-xl border border-purple-100">
                <h4 className="font-semibold text-gray-900 mb-2">
                  Thời gian hoàn thành dự án như thế nào?
                </h4>
                <p className="text-sm text-gray-600">
                  Tùy thuộc vào độ phức tạp: Branding (2-4 tuần), UI/UX (3-6
                  tuần), Motion Graphics (1-3 tuần), Social Media (1-2 tuần).
                </p>
              </div>

              <div className="p-4 bg-white/60 rounded-xl border border-purple-100">
                <h4 className="font-semibold text-gray-900 mb-2">
                  Có được chỉnh sửa sau khi hoàn thành?
                </h4>
                <p className="text-sm text-gray-600">
                  Có, mỗi dự án bao gồm 2-3 lần chỉnh sửa miễn phí. Chỉnh sửa
                  lớn sẽ được báo giá thêm.
                </p>
              </div>

              <div className="p-4 bg-white/60 rounded-xl border border-purple-100">
                <h4 className="font-semibold text-gray-900 mb-2">
                  Hình thức thanh toán như thế nào?
                </h4>
                <p className="text-sm text-gray-600">
                  Đặt cọc 50% khi bắt đầu, 50% khi hoàn thành. Hỗ trợ chuyển
                  khoản, ví điện tử.
                </p>
              </div>
            </div>

            <div className="space-y-4">
              <div className="p-4 bg-white/60 rounded-xl border border-purple-100">
                <h4 className="font-semibold text-gray-900 mb-2">
                  File giao nào sẽ được nhận?
                </h4>
                <p className="text-sm text-gray-600">
                  File nguồn (AI, PSD, AE), file xuất (PNG, JPG, PDF, MP4) và
                  hướng dẫn sử dụng chi tiết.
                </p>
              </div>

              <div className="p-4 bg-white/60 rounded-xl border border-purple-100">
                <h4 className="font-semibold text-gray-900 mb-2">
                  Có hỗ trợ sau khi bàn giao?
                </h4>
                <p className="text-sm text-gray-600">
                  Có, hỗ trợ kỹ thuật và tư vấn sử dụng trong 30 ngày sau khi
                  bàn giao dự án.
                </p>
              </div>

              <div className="p-4 bg-white/60 rounded-xl border border-purple-100">
                <h4 className="font-semibold text-gray-900 mb-2">
                  Làm việc từ xa có được không?
                </h4>
                <p className="text-sm text-gray-600">
                  Có, 90% dự án được thực hiện online. Gặp mặt trực tiếp tại
                  TP.HCM khi cần thiết.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Call to Action */}
        <motion.div
          variants={fadeInUp}
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          className="mt-16 text-center"
        >
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl"></div>
            <div className="relative bg-white/90 backdrop-blur-sm p-8 rounded-2xl border border-purple-100 shadow-lg">
              <div className="flex items-center justify-center mb-6">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                  <Zap className="w-8 h-8 text-white" />
                </div>
              </div>

              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                Sẵn sàng bắt đầu dự án?
              </h3>

              <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                Hãy cùng tôi biến ý tưởng của bạn thành hiện thực với những
                thiết kế đầy cảm hứng và chuyên nghiệp!
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold rounded-full shadow-lg shadow-purple-500/25 hover:shadow-xl hover:shadow-purple-500/30 transition-all duration-300"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  <span>Đặt lịch tư vấn</span>
                </motion.button>

                <motion.button
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="inline-flex items-center px-8 py-4 bg-white text-purple-600 font-semibold rounded-full border-2 border-purple-200 hover:border-purple-300 hover:bg-purple-50 transition-all duration-300"
                >
                  <Download className="w-5 h-5 mr-2" />
                  <span>Tải portfolio</span>
                </motion.button>
              </div>

              <div className="mt-8 flex items-center justify-center space-x-8 text-sm text-gray-500">
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-1 text-green-500" />
                  <span>Tư vấn miễn phí</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-1 text-green-500" />
                  <span>Phản hồi trong 24h</span>
                </div>
                <div className="flex items-center">
                  <CheckCircle className="w-4 h-4 mr-1 text-green-500" />
                  <span>Bảo mật thông tin</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
