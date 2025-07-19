"use client";

import React, { useRef, useEffect, useState } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import {
  Quote,
  Star,
  Heart,
  ChevronLeft,
  ChevronRight,
  User,
  Building,
  Award,
  TrendingUp,
  Camera,
  Play,
  MessageCircle,
  ThumbsUp,
  Sparkles,
} from "lucide-react";

const Testimonials = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const controls = useAnimation();
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  useEffect(() => {
    if (!autoPlay) return;

    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [autoPlay]);

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

  const testimonials = [
    {
      id: 1,
      name: "Nguyễn Minh Châu",
      role: "CEO",
      company: "Fashion House Vietnam",
      avatar: "MC",
      content:
        "Hoàng đã giúp chúng tôi tạo ra campaign thời trang viral với hơn 2 triệu views. Khả năng hiểu insight khách hàng và chuyển thành content hấp dẫn của bạn ấy thực sự xuất sắc. Tôi đặc biệt ấn tượng với cách Hoàng kể câu chuyện thương hiệu một cách chân thực và cuốn hút.",
      rating: 5,
      project: "Fashion Week Campaign",
      results: "2.1M views, 150K likes",
      color: "from-pink-500 to-purple-500",
      featured: true,
    },
    {
      id: 2,
      name: "Trần Đức Anh",
      role: "Marketing Director",
      company: "TechStart Solutions",
      avatar: "TDA",
      content:
        "Làm việc với Hoàng là một trải nghiệm tuyệt vời. Bạn ấy không chỉ có eye cho visual mà còn hiểu sâu về strategy. Video series giới thiệu sản phẩm của chúng tôi đã đạt 500K views và conversion rate tăng 300%. Definitely sẽ hợp tác lại!",
      rating: 5,
      project: "Product Launch Video",
      results: "500K views, 300% conversion",
      color: "from-blue-500 to-cyan-500",
      featured: true,
    },
    {
      id: 3,
      name: "Lê Thị Hương",
      role: "Brand Manager",
      company: "Gourmet Kitchen",
      avatar: "LTH",
      content:
        "Recipe videos mà Hoàng tạo cho brand đã trở thành trending trên TikTok với 3.5M views. Điều tôi thích nhất là cách bạn ấy balance giữa entertainment và information. Khách hàng không chỉ xem mà còn thực sự engage và mua sản phẩm.",
      rating: 5,
      project: "Recipe Video Series",
      results: "3.5M views, 280K likes",
      color: "from-orange-500 to-red-500",
      featured: true,
    },
    {
      id: 4,
      name: "Phạm Văn Dương",
      role: "Creative Director",
      company: "Indie Music Label",
      avatar: "PVD",
      content:
        "Music video mà Hoàng direct và edit cho artist của chúng tôi đã nhận được nhiều khen ngợi về mặt nghệ thuật. Bạn ấy có aesthetic sense rất tốt và biết cách tạo ra những khung hình đẹp mắt. Một creative partner đáng tin cậy.",
      rating: 5,
      project: "Music Video Production",
      results: "1.2M views, 89K likes",
      color: "from-purple-500 to-pink-500",
      featured: false,
    },
    {
      id: 5,
      name: "Ngô Thị Mai",
      role: "Travel Blogger",
      company: "Wanderlust Vietnam",
      avatar: "NTM",
      content:
        "Content du lịch mà Hoàng tạo cho blog của tôi có chất lượng professional nhưng vẫn giữ được sự authentic. Engagement rate tăng 200% và có nhiều brand approach hợp tác hơn. Hoàng thực sự hiểu được cách kể câu chuyện qua hình ảnh.",
      rating: 5,
      project: "Travel Content Creation",
      results: "800K views, 200% engagement",
      color: "from-green-500 to-emerald-500",
      featured: false,
    },
    {
      id: 6,
      name: "Vũ Minh Quân",
      role: "HR Manager",
      company: "Corporate Solutions",
      avatar: "VMQ",
      content:
        "Video training mà Hoàng sản xuất cho công ty rất professional và dễ hiểu. Employees feedback rất tích cực về chất lượng content. Hoàng đã biến những nội dung khô khan thành videos engaging và educational.",
      rating: 5,
      project: "Corporate Training Videos",
      results: "200K views, 95% completion rate",
      color: "from-gray-500 to-blue-500",
      featured: false,
    },
  ];

  const stats = [
    {
      icon: Heart,
      number: "98%",
      label: "Khách hàng hài lòng",
      color: "from-pink-500 to-red-500",
    },
    {
      icon: TrendingUp,
      number: "250%",
      label: "Tăng trưởng engagement",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: Award,
      number: "20+",
      label: "Thương hiệu tin tưởng",
      color: "from-purple-500 to-pink-500",
    },
    {
      icon: Star,
      number: "5.0",
      label: "Đánh giá trung bình",
      color: "from-yellow-500 to-orange-500",
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    setAutoPlay(false);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
    setAutoPlay(false);
  };

  const goToTestimonial = (index: number) => {
    setCurrentTestimonial(index);
    setAutoPlay(false);
  };

  return (
    <section
      id="testimonials"
      className="py-20 lg:py-32 bg-gradient-to-br from-white via-purple-50 to-pink-50 relative overflow-hidden"
    >
      {/* Background Decorations */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/3 right-1/3 w-24 h-24 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-full blur-3xl animate-pulse" />
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
            className="inline-flex items-center space-x-2 bg-white/70 backdrop-blur-sm px-6 py-3 rounded-full border border-pink-200 shadow-lg mb-6"
          >
            <MessageCircle className="w-5 h-5 text-pink-500" />
            <span className="text-pink-600 font-medium">Testimonials</span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
          >
            <span className="bg-gradient-to-r from-pink-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent">
              Khách hàng
            </span>
            <br />
            <span className="text-gray-800">nói gì về tôi</span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Những phản hồi chân thực từ các đối tác và khách hàng đã tin tưởng
            hợp tác
          </motion.p>
        </motion.div>

        {/* Stats */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 lg:mb-24"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 text-center shadow-lg border border-purple-100"
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
            >
              <div
                className={`w-12 h-12 bg-gradient-to-r ${stat.color} rounded-full flex items-center justify-center mx-auto mb-4`}
              >
                <stat.icon className="w-6 h-6 text-white" />
              </div>
              <div className="text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Main Testimonial Carousel */}
        <motion.div
          className="relative mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <div className="bg-white/70 backdrop-blur-sm rounded-3xl p-8 md:p-12 shadow-2xl border border-purple-100 relative overflow-hidden">
            {/* Quote Icon */}
            <div className="absolute top-8 left-8 w-16 h-16 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full flex items-center justify-center opacity-20">
              <Quote className="w-8 h-8 text-white" />
            </div>

            {/* Testimonial Content */}
            <div className="relative z-10">
              <motion.div
                key={currentTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                {/* Avatar */}
                <div className="mb-6">
                  <div
                    className={`w-20 h-20 bg-gradient-to-r ${testimonials[currentTestimonial].color} rounded-full flex items-center justify-center mx-auto text-white text-2xl font-bold shadow-lg`}
                  >
                    {testimonials[currentTestimonial].avatar}
                  </div>
                </div>

                {/* Rating */}
                <div className="flex justify-center mb-6">
                  {[...Array(testimonials[currentTestimonial].rating)].map(
                    (_, i) => (
                      <Star
                        key={i}
                        className="w-6 h-6 text-yellow-400 fill-current"
                      />
                    )
                  )}
                </div>

                {/* Content */}
                <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 max-w-4xl mx-auto">
                  "{testimonials[currentTestimonial].content}"
                </blockquote>

                {/* Author Info */}
                <div className="space-y-2">
                  <div className="text-xl font-bold text-gray-800">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-gray-600">
                    {testimonials[currentTestimonial].role} tại{" "}
                    {testimonials[currentTestimonial].company}
                  </div>
                </div>

                {/* Project Info */}
                <div className="mt-6 inline-flex items-center space-x-4 bg-purple-50 px-6 py-3 rounded-full">
                  <div className="flex items-center space-x-2">
                    <Camera className="w-4 h-4 text-purple-600" />
                    <span className="text-purple-600 font-medium text-sm">
                      {testimonials[currentTestimonial].project}
                    </span>
                  </div>
                  <div className="text-gray-300">•</div>
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="w-4 h-4 text-green-600" />
                    <span className="text-green-600 font-medium text-sm">
                      {testimonials[currentTestimonial].results}
                    </span>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Navigation Buttons */}
            <motion.button
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-all duration-200 md:left-8"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronLeft className="w-6 h-6 text-gray-600" />
            </motion.button>

            <motion.button
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-sm p-3 rounded-full shadow-lg hover:bg-white transition-all duration-200 md:right-8"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <ChevronRight className="w-6 h-6 text-gray-600" />
            </motion.button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => goToTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentTestimonial
                    ? "bg-purple-600 scale-125"
                    : "bg-gray-300 hover:bg-purple-300"
                }`}
              />
            ))}
          </div>
        </motion.div>

        {/* Secondary Testimonials Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              className="bg-white/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-purple-100 hover:shadow-xl transition-all duration-300"
              variants={itemVariants}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              {/* Mini Avatar */}
              <div className="flex items-center mb-4">
                <div
                  className={`w-12 h-12 bg-gradient-to-r ${testimonial.color} rounded-full flex items-center justify-center text-white font-bold mr-4`}
                >
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-bold text-gray-800">
                    {testimonial.name}
                  </div>
                  <div className="text-sm text-gray-600">
                    {testimonial.role}
                  </div>
                </div>
              </div>

              {/* Rating */}
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              {/* Content */}
              <p className="text-gray-700 text-sm leading-relaxed mb-4 line-clamp-4">
                "{testimonial.content.substring(0, 120)}..."
              </p>

              {/* Project Badge */}
              <div className="inline-flex items-center space-x-2 bg-purple-50 px-3 py-1 rounded-full">
                <Play className="w-3 h-3 text-purple-600" />
                <span className="text-purple-600 font-medium text-xs">
                  {testimonial.project}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Trust Badges */}
        <motion.div
          className="text-center"
          variants={containerVariants}
          initial="hidden"
          animate={controls}
        >
          <motion.div
            variants={itemVariants}
            className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden"
          >
            <div className="absolute inset-0 bg-black/10" />
            <div className="relative z-10">
              <div className="flex items-center justify-center mb-6">
                <Sparkles className="w-8 h-8 mr-3" />
                <h3 className="text-2xl md:text-3xl font-bold">
                  Bạn muốn là khách hàng tiếp theo?
                </h3>
              </div>
              <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
                Tham gia cùng hơn 20+ thương hiệu đã tin tưởng và đạt được kết
                quả tuyệt vời với nội dung sáng tạo
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <motion.button
                  className="bg-white text-purple-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition-all duration-200 shadow-lg"
                  whileHover={{
                    scale: 1.05,
                    boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const element = document.querySelector("#contact");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  <Heart className="w-5 h-5 inline mr-2" />
                  Bắt đầu hợp tác
                </motion.button>

                <motion.button
                  className="bg-white/20 backdrop-blur-sm text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/30 transition-all duration-200 border border-white/30"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => {
                    const element = document.querySelector("#projects");
                    if (element) {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                >
                  <Camera className="w-5 h-5 inline mr-2" />
                  Xem portfolio
                </motion.button>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute top-4 right-4 w-12 h-12 bg-white/20 rounded-full" />
            <div className="absolute bottom-4 left-4 w-8 h-8 bg-white/20 rounded-full" />
            <div className="absolute top-1/2 right-8 w-6 h-6 bg-white/20 rounded-full" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
