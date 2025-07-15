"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  User,
  Building,
  MessageSquare,
  CheckCircle,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Calendar,
  Headphones,
  Globe,
  ArrowRight,
} from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const ContactSection = () => {
  const contactRef = useRef(null);
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    service: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.from(".contact-title", {
        scrollTrigger: {
          trigger: contactRef.current,
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none reverse",
        },
        y: 100,
        opacity: 0,
        duration: 1.2,
        ease: "power3.out",
      });

      // Contact info animation
      gsap.from(".contact-info", {
        scrollTrigger: {
          trigger: contactRef.current,
          start: "top 70%",
          end: "top 40%",
          toggleActions: "play none none reverse",
        },
        x: -100,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      });

      // Form animation
      gsap.from(".contact-form", {
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none reverse",
        },
        x: 100,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      });

      // Form fields animation
      gsap.from(".form-field", {
        scrollTrigger: {
          trigger: formRef.current,
          start: "top 70%",
          end: "top 40%",
          toggleActions: "play none none reverse",
        },
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out",
        delay: 0.3,
      });

      // Contact cards animation
      gsap.from(".contact-card", {
        scrollTrigger: {
          trigger: ".contact-cards",
          start: "top 80%",
          end: "top 50%",
          toggleActions: "play none none reverse",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
      });

      // Map animation
      gsap.from(".contact-map", {
        scrollTrigger: {
          trigger: ".contact-map",
          start: "top 90%",
          end: "top 60%",
          toggleActions: "play none none reverse",
        },
        scale: 0.9,
        opacity: 0,
        duration: 1,
        ease: "power2.out",
      });
    }, contactRef);

    return () => ctx.revert();
  }, []);

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

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        company: "",
        phone: "",
        service: "",
        message: "",
      });
    }, 3000);
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Điện thoại",
      content: "+84 (28) 1234 5678",
      subContent: "Thứ 2 - Thứ 6, 8:00 - 18:00",
      color: "from-blue-500 to-indigo-500",
    },
    {
      icon: Mail,
      title: "Email",
      content: "contact@accountpro.vn",
      subContent: "Phản hồi trong vòng 2 giờ",
      color: "from-emerald-500 to-teal-500",
    },
    {
      icon: MapPin,
      title: "Địa chỉ",
      content: "123 Nguyễn Huệ, Q.1, TP.HCM",
      subContent: "Lầu 10, Tòa nhà ABC",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Clock,
      title: "Giờ làm việc",
      content: "Thứ 2 - Thứ 6: 8:00 - 18:00",
      subContent: "Thứ 7: 8:00 - 12:00",
      color: "from-orange-500 to-red-500",
    },
  ];

  const services = [
    "Kế toán doanh nghiệp",
    "Phân tích tài chính",
    "Kiểm toán nội bộ",
    "Tư vấn thuế",
    "Đào tạo kế toán",
    "Báo cáo tài chính",
    "Quản lý ngân sách",
    "Tư vấn đầu tư",
    "Khác",
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", color: "hover:text-blue-600" },
    { icon: Twitter, href: "#", color: "hover:text-sky-500" },
    { icon: Linkedin, href: "#", color: "hover:text-blue-700" },
    { icon: Instagram, href: "#", color: "hover:text-pink-600" },
  ];

  return (
    <section
      id="contact"
      ref={contactRef}
      className="py-20 px-4 relative bg-gradient-to-b from-white to-gray-50 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='40' height='40' viewBox='0 0 40 40' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='%23000000' fill-opacity='0.05'%3E%3Cpath d='m0 40l40-40h-40v40zm40 0v-40h-40l40 40z'/%3E%3C/g%3E%3C/svg%3E")`,
          }}
        ></div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20">
          <div className="contact-title">
            <span className="inline-block px-4 py-2 bg-blue-100 text-blue-600 rounded-full text-sm font-medium mb-4">
              Liên hệ với chúng tôi
            </span>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mb-6">
              Bắt Đầu{" "}
              <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
                Hành Trình
              </span>
              <br />
              Cùng Chúng Tôi
            </h2>

            <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Sẵn sàng tư vấn miễn phí và đồng hành cùng bạn xây dựng nền tảng
              tài chính vững chắc
            </p>
          </div>
        </div>

        {/* Contact Cards */}
        <div className="contact-cards grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {contactInfo.map((info, index) => (
            <div
              key={index}
              className="contact-card group bg-white rounded-3xl p-6 shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100"
            >
              <div
                className={`w-14 h-14 bg-gradient-to-br ${info.color} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}
              >
                <info.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="text-lg font-bold text-gray-800 mb-2 group-hover:text-blue-600 transition-colors duration-300">
                {info.title}
              </h3>

              <p className="text-gray-700 font-medium mb-1">{info.content}</p>

              <p className="text-sm text-gray-500">{info.subContent}</p>
            </div>
          ))}
        </div>

        {/* Main Contact Content */}
        <div className="grid lg:grid-cols-2 gap-16 mb-20">
          {/* Contact Information */}
          <div className="contact-info">
            <div className="bg-gradient-to-br from-blue-600 to-indigo-600 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl md:text-3xl font-bold mb-6">
                  Hãy để chúng tôi giúp bạn!
                </h3>

                <p className="text-blue-100 mb-8 text-lg leading-relaxed">
                  Chúng tôi luôn sẵn sàng lắng nghe và tư vấn những giải pháp
                  tốt nhất cho doanh nghiệp của bạn. Liên hệ ngay để được hỗ
                  trợ!
                </p>

                {/* Quick Contact Options */}
                <div className="space-y-4 mb-8">
                  <div className="flex items-center space-x-3">
                    <Headphones className="w-5 h-5 text-blue-200" />
                    <span className="text-blue-100">
                      Tư vấn trực tuyến 24/7
                    </span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-blue-200" />
                    <span className="text-blue-100">Đặt lịch hẹn miễn phí</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Globe className="w-5 h-5 text-blue-200" />
                    <span className="text-blue-100">Hỗ trợ toàn quốc</span>
                  </div>
                </div>

                {/* Social Links */}
                <div className="flex space-x-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center hover:bg-white/30 transition-all duration-300 transform hover:-translate-y-1"
                    >
                      <social.icon className="w-6 h-6 text-white" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Background decorations */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -translate-y-16 translate-x-16"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full translate-y-12 -translate-x-12"></div>
              <div className="absolute top-1/2 right-8 w-16 h-16 bg-white/5 rounded-full"></div>
            </div>
          </div>

          {/* Contact Form */}
          <div ref={formRef} className="contact-form">
            <div className="bg-white rounded-3xl p-8 md:p-12 shadow-lg border border-gray-100">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-10 h-10 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Cảm ơn bạn đã liên hệ!
                  </h3>
                  <p className="text-gray-600">
                    Chúng tôi sẽ phản hồi trong vòng 2 giờ làm việc.
                  </p>
                </div>
              ) : (
                <>
                  <h3 className="text-2xl font-bold text-gray-800 mb-8">
                    Gửi tin nhắn cho chúng tôi
                  </h3>

                  <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Name and Email */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="form-field">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Họ và tên *
                        </label>
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="text"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                            placeholder="Nhập họ và tên"
                          />
                        </div>
                      </div>

                      <div className="form-field">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
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
                            className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                            placeholder="Nhập địa chỉ email"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Company and Phone */}
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="form-field">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Công ty
                        </label>
                        <div className="relative">
                          <Building className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="text"
                            name="company"
                            value={formData.company}
                            onChange={handleInputChange}
                            className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                            placeholder="Tên công ty"
                          />
                        </div>
                      </div>

                      <div className="form-field">
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Số điện thoại
                        </label>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
                          <input
                            type="tel"
                            name="phone"
                            value={formData.phone}
                            onChange={handleInputChange}
                            className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                            placeholder="Số điện thoại"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Service Selection */}
                    <div className="form-field">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Dịch vụ quan tâm
                      </label>
                      <select
                        name="service"
                        value={formData.service}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                      >
                        <option value="">Chọn dịch vụ</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>
                            {service}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Message */}
                    <div className="form-field">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Tin nhắn *
                      </label>
                      <div className="relative">
                        <MessageSquare className="absolute left-3 top-3 w-5 h-5 text-gray-400" />
                        <textarea
                          name="message"
                          value={formData.message}
                          onChange={handleInputChange}
                          required
                          rows={4}
                          className="w-full pl-12 pr-4 py-3 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                          placeholder="Mô tả chi tiết nhu cầu của bạn..."
                        />
                      </div>
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:-translate-y-1 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>Đang gửi...</span>
                        </>
                      ) : (
                        <>
                          <Send className="w-5 h-5" />
                          <span>Gửi tin nhắn</span>
                          <ArrowRight className="w-5 h-5" />
                        </>
                      )}
                    </button>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>

        {/* Map Section */}
        <div className="contact-map">
          <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Vị trí văn phòng
            </h3>

            {/* Placeholder for map */}
            <div className="w-full h-96 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-2xl flex items-center justify-center relative overflow-hidden">
              <div className="text-center">
                <MapPin className="w-16 h-16 text-blue-600 mx-auto mb-4" />
                <h4 className="text-xl font-bold text-gray-800 mb-2">
                  123 Nguyễn Huệ, Quận 1, TP.HCM
                </h4>
                <p className="text-gray-600">Lầu 10, Tòa nhà ABC</p>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-4 left-4 w-12 h-12 bg-blue-200/50 rounded-full"></div>
              <div className="absolute bottom-4 right-4 w-8 h-8 bg-indigo-200/50 rounded-full"></div>
              <div className="absolute top-1/2 right-8 w-6 h-6 bg-blue-300/50 rounded-full"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
