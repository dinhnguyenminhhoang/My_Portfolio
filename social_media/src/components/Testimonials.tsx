"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import {
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  Play,
  TrendingUp,
  Users,
  Award,
  Heart,
} from "lucide-react";

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const controls = useAnimation();
  const [activeSlide, setActiveSlide] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  useEffect(() => {
    if (autoPlay) {
      const interval = setInterval(() => {
        setActiveSlide((prev) => (prev + 1) % testimonials.length);
      }, 5000);
      return () => clearInterval(interval);
    }
  }, [autoPlay]);

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

  const testimonials = [
    {
      id: 1,
      name: "Nguyễn Minh Anh",
      role: "Marketing Director",
      company: "Fashion Brand X",
      avatar: "/api/placeholder/80/80",
      rating: 5,
      content:
        "Hoàng đã tạo ra những video TikTok cực kỳ viral cho brand chúng tôi. Trong vòng 1 tuần, campaign đã đạt 2.5M views và tăng 350% engagement rate. Phong cách sáng tạo và hiểu biết sâu về trend đã giúp brand chúng tôi breakthrough trong thị trường GenZ.",
      project: "Fashion TikTok Campaign",
      results: [
        "2.5M+ views trong 1 tuần",
        "Tăng 350% engagement rate",
        "50K+ followers mới",
      ],
      video: true,
    },
    {
      id: 2,
      name: "Trần Thanh Tùng",
      role: "CEO & Founder",
      company: "Food Startup Hub",
      avatar: "/api/placeholder/80/80",
      rating: 5,
      content:
        'Collaboration với Hoàng là một turning point cho startup F&B của chúng tôi. Content về street food Sài Gòn không chỉ viral mà còn tạo ra whole movement "Sài Gòn Food Hunt". Sales tăng 200% và chúng tôi được feature trên nhiều platform lớn.',
      project: "Food & Beverage Series",
      results: [
        "Viral trend với 500+ copies",
        "Tăng 200% doanh số",
        "Feature trên major platforms",
      ],
      video: false,
    },
    {
      id: 3,
      name: "Lê Thị Hương",
      role: "Brand Manager",
      company: "Beauty Co. Vietnam",
      avatar: "/api/placeholder/80/80",
      rating: 5,
      content:
        'Hoàng có unique perspective trong beauty content. Thay vì theo trend thông thường, anh ấy tạo ra format "makeup cho working women" rất practical và relatable. Product sold out trong 24h sau khi video release. Đây là lần đầu chúng tôi có campaign thành công đến vậy.',
      project: "Beauty Brand Collaboration",
      results: [
        "Product sold out trong 24h",
        "Brand awareness tăng 400%",
        "Long-term partnership",
      ],
      video: true,
    },
    {
      id: 4,
      name: "Phạm Quang Minh",
      role: "Digital Marketing Manager",
      company: "Tech Innovation Co.",
      avatar: "/api/placeholder/80/80",
      rating: 5,
      content:
        "Tech content thường rất dry và boring, nhưng Hoàng đã biến những sản phẩm tech phức tạp thành những video review thú vị và dễ hiểu. Engagement rate của tech category tăng highest ever và brand renewal partnership ngay lập tức.",
      project: "Tech Product Campaign",
      results: [
        "Highest engagement in tech",
        "Brand partnership renewal",
        "Official channel feature",
      ],
      video: false,
    },
    {
      id: 5,
      name: "Vũ Thị Mai",
      role: "Content Strategy Lead",
      company: "Travel Agency Plus",
      avatar: "/api/placeholder/80/80",
      rating: 5,
      content:
        'Post-COVID travel content cần approach hoàn toàn mới và Hoàng đã nail it perfectly. Series "Du lịch bụi Việt Nam" không chỉ viral mà còn thực sự boost tourism cho những địa điểm local. Chúng tôi đã có partnership deal và content được feature trên travel magazines.',
      project: "Travel Content Series",
      results: [
        "Tourism boost cho destinations",
        "Partnership với agencies",
        "Feature trên magazines",
      ],
      video: true,
    },
  ];

  const stats = [
    {
      icon: TrendingUp,
      number: "98%",
      label: "Client Satisfaction",
      color: "from-green-500 to-emerald-500",
    },
    {
      icon: Users,
      number: "25+",
      label: "Brand Partners",
      color: "from-blue-500 to-indigo-500",
    },
    {
      icon: Award,
      number: "50+",
      label: "Viral Videos",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Heart,
      number: "10M+",
      label: "Total Engagement",
      color: "from-red-500 to-rose-500",
    },
  ];

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setActiveSlide(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const goToSlide = (index: number) => {
    setActiveSlide(index);
  };

  return (
    <section
      id="testimonials"
      ref={ref}
      className="relative py-20 lg:py-32 bg-gradient-to-br from-gray-900 via-purple-900 to-indigo-900 text-white overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 50%, rgba(168, 85, 247, 0.4) 0%, transparent 50%),
              radial-gradient(circle at 80% 20%, rgba(236, 72, 153, 0.4) 0%, transparent 50%),
              radial-gradient(circle at 40% 80%, rgba(59, 130, 246, 0.4) 0%, transparent 50%)
            `,
            backgroundSize: "200% 200%",
          }}
        />
      </div>

      {/* Floating Elements */}
      <motion.div
        className="absolute top-1/4 right-10 w-32 h-32 border border-white/10 rounded-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute bottom-1/4 left-10 w-24 h-24 border border-purple-400/20 rounded-full"
        animate={{ rotate: -360, scale: [1, 1.2, 1] }}
        transition={{
          rotate: { duration: 15, repeat: Infinity, ease: "linear" },
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" },
        }}
      />

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
              className="inline-flex items-center px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20"
              whileHover={{ scale: 1.05 }}
            >
              <span className="text-purple-300 font-medium text-sm">
                Client Testimonials
              </span>
            </motion.div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold">
              Khách hàng nói gì về{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Collaboration
              </span>
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Những phản hồi thực tế từ các brand partners và clients đã hợp tác
              cùng tôi trong các campaign viral và chiến lược content marketing.
            </p>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-white/10"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 + 0.5 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <motion.div
                  className={`w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-r ${stat.color} flex items-center justify-center`}
                  animate={{
                    rotate: [0, 5, -5, 0],
                  }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                >
                  <stat.icon className="w-6 h-6 text-white" />
                </motion.div>
                <div className="text-2xl lg:text-3xl font-bold text-white mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Testimonials Carousel */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative bg-white/5 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-white/10 overflow-hidden">
              {/* Navigation Buttons */}
              <div className="absolute top-1/2 -translate-y-1/2 left-4 lg:-left-6 z-20">
                <motion.button
                  onClick={prevSlide}
                  className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronLeft className="w-6 h-6" />
                </motion.button>
              </div>
              <div className="absolute top-1/2 -translate-y-1/2 right-4 lg:-right-6 z-20">
                <motion.button
                  onClick={nextSlide}
                  className="w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center text-white hover:bg-white/20 transition-colors duration-200"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <ChevronRight className="w-6 h-6" />
                </motion.button>
              </div>

              {/* Testimonial Content */}
              <motion.div
                key={activeSlide}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="max-w-4xl mx-auto"
                onMouseEnter={() => setAutoPlay(false)}
                onMouseLeave={() => setAutoPlay(true)}
              >
                <div className="text-center mb-8">
                  <Quote className="w-12 h-12 text-purple-400 mx-auto mb-6" />
                  <blockquote className="text-lg lg:text-xl text-gray-200 leading-relaxed mb-8">
                    "{testimonials[activeSlide].content}"
                  </blockquote>
                </div>

                <div className="flex flex-col lg:flex-row items-center justify-between space-y-6 lg:space-y-0">
                  {/* Client Info */}
                  <div className="flex items-center space-x-4">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center text-white text-xl font-bold">
                      {testimonials[activeSlide].name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-xl font-semibold text-white">
                        {testimonials[activeSlide].name}
                      </h4>
                      <p className="text-purple-300">
                        {testimonials[activeSlide].role}
                      </p>
                      <p className="text-gray-400 text-sm">
                        {testimonials[activeSlide].company}
                      </p>
                    </div>
                  </div>

                  {/* Project Results */}
                  <div className="text-center lg:text-right">
                    <div className="text-sm text-purple-300 font-medium mb-2">
                      {testimonials[activeSlide].project}
                    </div>
                    <div className="space-y-1">
                      {testimonials[activeSlide].results.map(
                        (result, index) => (
                          <div key={index} className="text-xs text-gray-400">
                            ✓ {result}
                          </div>
                        )
                      )}
                    </div>
                  </div>

                  {/* Video Badge */}
                  {testimonials[activeSlide].video && (
                    <motion.div
                      className="flex items-center space-x-2 text-purple-300"
                      animate={{ scale: [1, 1.05, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                    >
                      <Play className="w-4 h-4" />
                      <span className="text-sm">Video Testimonial</span>
                    </motion.div>
                  )}
                </div>

                {/* Rating */}
                <div className="flex justify-center mt-6">
                  <div className="flex space-x-1">
                    {[...Array(testimonials[activeSlide].rating)].map(
                      (_, i) => (
                        <motion.div
                          key={i}
                          initial={{ opacity: 0, scale: 0 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: i * 0.1 }}
                        >
                          <Star className="w-5 h-5 text-yellow-400 fill-current" />
                        </motion.div>
                      )
                    )}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Slide Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors duration-200 ${
                    index === activeSlide
                      ? "bg-purple-400"
                      : "bg-white/30 hover:bg-white/50"
                  }`}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                />
              ))}
            </div>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="text-center bg-gradient-to-r from-purple-800/50 to-pink-800/50 backdrop-blur-sm rounded-3xl p-8 lg:p-12 border border-purple-500/30"
          >
            <h3 className="text-2xl lg:text-3xl font-bold mb-4">
              Bạn muốn được review tương tự?
            </h3>
            <p className="text-purple-100 mb-8 max-w-2xl mx-auto">
              Hãy cùng tôi tạo nên những campaign viral và kết quả ấn tượng cho
              brand của bạn. Liên hệ ngay để bắt đầu collaboration đầu tiên!
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <motion.button
                onClick={() => {
                  const contactSection = document.querySelector("#contact");
                  contactSection?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-xl font-semibold text-lg transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/25"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="flex items-center">
                  Bắt đầu hợp tác
                  <motion.div
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    className="ml-2"
                  >
                    →
                  </motion.div>
                </span>
              </motion.button>

              <motion.button
                onClick={() => {
                  const projectsSection = document.querySelector("#projects");
                  projectsSection?.scrollIntoView({ behavior: "smooth" });
                }}
                className="px-8 py-4 border-2 border-purple-400/50 text-purple-300 rounded-xl font-semibold text-lg backdrop-blur-sm transition-all duration-300 hover:bg-purple-500/10 hover:border-purple-400"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Xem Portfolio
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
