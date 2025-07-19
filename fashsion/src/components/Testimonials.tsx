"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Star,
  Quote,
  ChevronLeft,
  ChevronRight,
  Heart,
  Sparkles,
  Instagram,
  Youtube,
  Camera,
} from "lucide-react";
import { gsap } from "gsap";

const Testimonials = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // GSAP floating animation for stars
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.to(".floating-star", {
        y: -15,
        rotation: 360,
        duration: 3,
        ease: "power2.inOut",
        stagger: 0.2,
        repeat: -1,
        yoyo: true,
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const testimonials = [
    {
      id: 1,
      name: "Minh Châu",
      role: "Fashion Brand Director",
      company: "Elegant Fashion House",
      avatar: "from-pink-400 to-purple-500",
      rating: 5,
      content:
        "Hoàng có một tài năng đặc biệt trong việc tạo ra những hình ảnh thời trang đầy cảm hứng. Phong cách 'chipi' của cô ấy thật sự độc đáo và khiến thương hiệu chúng tôi trở nên nổi bật hơn bao giờ hết.",
      project: "Bohemian Summer Collection",
      platform: Instagram,
      platformColor: "text-pink-500",
      date: "Tháng 12, 2024",
    },
    {
      id: 2,
      name: "David Park",
      role: "Creative Director",
      company: "Lifestyle Media Co.",
      avatar: "from-blue-400 to-cyan-500",
      rating: 5,
      content:
        "Collaboration với Hoàng là một trải nghiệm tuyệt vời! Cô ấy không chỉ có kỹ năng chụp ảnh xuất sắc mà còn có khả năng storytelling qua hình ảnh rất ấn tượng. Highly recommended!",
      project: "Urban Street Style Campaign",
      platform: Youtube,
      platformColor: "text-red-500",
      date: "Tháng 11, 2024",
    },
    {
      id: 3,
      name: "Thảo Linh",
      role: "Marketing Manager",
      company: "Trendy Fashion Co.",
      avatar: "from-green-400 to-emerald-500",
      rating: 5,
      content:
        "Content mà Hoàng tạo ra luôn viral và engagement cực cao! Cô ấy hiểu rất rõ xu hướng gen Z và biết cách tạo ra những nội dung vừa trendy vừa có chất lượng cao.",
      project: "TikTok Viral Series",
      platform: Camera,
      platformColor: "text-purple-500",
      date: "Tháng 10, 2024",
    },
    {
      id: 4,
      name: "James Wilson",
      role: "Brand Manager",
      company: "Luxury Fashion Group",
      avatar: "from-orange-400 to-red-500",
      rating: 5,
      content:
        "Working with Hoàng was absolutely amazing! Her creative vision and attention to detail brought our brand story to life in ways we never imagined. Professional, talented, and a joy to work with.",
      project: "Luxury Brand Identity",
      platform: Instagram,
      platformColor: "text-pink-500",
      date: "Tháng 9, 2024",
    },
    {
      id: 5,
      name: "Ngọc Anh",
      role: "Founder",
      company: "Sustainable Fashion VN",
      avatar: "from-purple-400 to-indigo-500",
      rating: 5,
      content:
        "Hoàng đã giúp chúng tôi truyền tải thông điệp về thời trang bền vững một cách rất sáng tạo và có tác động mạnh. Cô ấy thực sự là một nghệ sĩ tài năng với tầm nhìn rộng lớn.",
      project: "Sustainable Fashion Campaign",
      platform: Youtube,
      platformColor: "text-red-500",
      date: "Tháng 8, 2024",
    },
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
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
        ease: [0.25, 0.4, 0.25, 1],
      },
    },
  } as any;

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0,
    }),
  } as any;

  return (
    <section
      ref={containerRef}
      id="testimonials"
      className="relative py-20 lg:py-32 bg-gradient-to-br from-purple-50 via-pink-50 to-orange-50 overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="floating-star absolute top-20 left-20 w-4 h-4 text-yellow-400">
          <Star className="w-full h-full fill-current" />
        </div>
        <div className="floating-star absolute top-40 right-32 w-5 h-5 text-pink-400">
          <Heart className="w-full h-full fill-current" />
        </div>
        <div className="floating-star absolute bottom-40 left-40 w-4 h-4 text-purple-400">
          <Sparkles className="w-full h-full" />
        </div>
        <div className="floating-star absolute bottom-20 right-20 w-3 h-3 text-orange-400">
          <Star className="w-full h-full fill-current" />
        </div>

        {/* Background gradients */}
        <div className="absolute top-1/4 right-10 w-96 h-96 bg-gradient-to-br from-purple-200/30 to-pink-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-10 w-80 h-80 bg-gradient-to-br from-orange-200/30 to-yellow-200/30 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-12"
        >
          {/* Header */}
          <motion.div variants={itemVariants} className="text-center space-y-6">
            <div className="flex items-center justify-center space-x-3">
              <motion.div
                whileHover={{ rotate: 180 }}
                transition={{ duration: 0.3 }}
              >
                <Heart className="w-6 h-6 text-pink-600 fill-current" />
              </motion.div>
              <span className="text-pink-600 font-semibold tracking-wider uppercase text-sm">
                Testimonials
              </span>
            </div>

            <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 leading-tight">
              What{" "}
              <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
                Clients
              </span>
              <br />
              Say About Me
            </h2>

            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Những phản hồi chân thực từ khách hàng và đối tác đã làm việc cùng
              tôi
            </p>
          </motion.div>

          {/* Main Testimonial Carousel */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative max-w-4xl mx-auto">
              <AnimatePresence mode="wait" custom={currentIndex}>
                <motion.div
                  key={currentIndex}
                  custom={currentIndex}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 },
                  }}
                  className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 lg:p-12 shadow-2xl border border-white/50"
                >
                  <div className="text-center space-y-8">
                    {/* Quote Icon */}
                    <motion.div
                      initial={{ scale: 0, rotate: -180 }}
                      animate={{ scale: 1, rotate: 0 }}
                      transition={{ delay: 0.2, type: "spring" }}
                      className="flex justify-center"
                    >
                      <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-lg">
                        <Quote className="w-8 h-8 text-white" />
                      </div>
                    </motion.div>

                    {/* Stars Rating */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="flex justify-center space-x-1"
                    >
                      {[...Array(testimonials[currentIndex].rating)].map(
                        (_, i) => (
                          <motion.div
                            key={i}
                            initial={{ scale: 0 }}
                            animate={{ scale: 1 }}
                            transition={{
                              delay: 0.4 + i * 0.1,
                              type: "spring",
                            }}
                          >
                            <Star className="w-6 h-6 text-yellow-400 fill-current" />
                          </motion.div>
                        )
                      )}
                    </motion.div>

                    {/* Testimonial Content */}
                    <motion.blockquote
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="text-xl lg:text-2xl text-gray-700 leading-relaxed font-medium italic"
                    >
                      "{testimonials[currentIndex].content}"
                    </motion.blockquote>

                    {/* Client Info */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      className="flex flex-col lg:flex-row items-center justify-center space-y-4 lg:space-y-0 lg:space-x-6"
                    >
                      {/* Avatar */}
                      <div
                        className={`w-16 h-16 bg-gradient-to-r ${testimonials[currentIndex].avatar} rounded-full flex items-center justify-center shadow-lg`}
                      >
                        <span className="text-white font-bold text-xl">
                          {testimonials[currentIndex].name.charAt(0)}
                        </span>
                      </div>

                      {/* Client Details */}
                      <div className="text-center lg:text-left">
                        <h4 className="text-lg font-bold text-gray-900">
                          {testimonials[currentIndex].name}
                        </h4>
                        <p className="text-purple-600 font-semibold">
                          {testimonials[currentIndex].role}
                        </p>
                        <p className="text-gray-500 text-sm">
                          {testimonials[currentIndex].company}
                        </p>
                      </div>

                      {/* Platform & Project */}
                      {(() => {
                        const Icon = testimonials[currentIndex].platform;
                        return (
                          <Icon
                            className={`w-6 h-6 ${testimonials[currentIndex].platformColor}`}
                          />
                        );
                      })()}
                    </motion.div>

                    {/* Date */}
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.7 }}
                      className="text-sm text-gray-400"
                    >
                      {testimonials[currentIndex].date}
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation Buttons */}
              <motion.button
                onClick={prevTestimonial}
                whileHover={{ scale: 1.1, x: -5 }}
                whileTap={{ scale: 0.9 }}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-white/50 flex items-center justify-center text-gray-600 hover:text-purple-600 transition-colors duration-300"
              >
                <ChevronLeft className="w-6 h-6" />
              </motion.button>

              <motion.button
                onClick={nextTestimonial}
                whileHover={{ scale: 1.1, x: 5 }}
                whileTap={{ scale: 0.9 }}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 backdrop-blur-sm rounded-full shadow-lg border border-white/50 flex items-center justify-center text-gray-600 hover:text-purple-600 transition-colors duration-300"
              >
                <ChevronRight className="w-6 h-6" />
              </motion.button>
            </div>
          </motion.div>

          {/* Pagination Dots */}
          <motion.div
            variants={itemVariants}
            className="flex justify-center space-x-3"
          >
            {testimonials.map((_, index) => (
              <motion.button
                key={index}
                onClick={() => setCurrentIndex(index)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.8 }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-gradient-to-r from-purple-600 to-pink-600 w-8"
                    : "bg-gray-300 hover:bg-gray-400"
                }`}
              />
            ))}
          </motion.div>

          {/* Small Testimonials Grid */}
          <motion.div
            variants={itemVariants}
            className="grid md:grid-cols-3 gap-6 pt-12"
          >
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <motion.div
                key={testimonial.id}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ delay: 0.8 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/50 group cursor-pointer"
                onClick={() => setCurrentIndex(index)}
              >
                <div className="space-y-4">
                  {/* Mini Rating */}
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-4 h-4 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>

                  {/* Mini Quote */}
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">
                    "{testimonial.content.substring(0, 100)}..."
                  </p>

                  {/* Mini Client Info */}
                  <div className="flex items-center space-x-3">
                    <div
                      className={`w-10 h-10 bg-gradient-to-r ${testimonial.avatar} rounded-full flex items-center justify-center`}
                    >
                      <span className="text-white font-bold text-sm">
                        {testimonial.name.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900 text-sm">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div variants={itemVariants} className="text-center pt-12">
            <motion.button
              whileHover={{
                scale: 1.05,
                boxShadow: "0 20px 40px rgba(147, 51, 234, 0.3)",
              }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full overflow-hidden shadow-2xl"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <span>Hợp tác cùng tôi</span>
                <Heart className="w-4 h-4 group-hover:scale-110 transition-transform duration-300 fill-current" />
              </span>
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-pink-600 to-orange-500"
                initial={{ x: "-100%" }}
                whileHover={{ x: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
