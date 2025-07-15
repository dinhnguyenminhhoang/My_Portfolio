"use client";

import React, { useRef, useState, useEffect } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useInView,
  AnimatePresence,
} from "framer-motion";
import {
  Quote,
  Star,
  ChevronLeft,
  ChevronRight,
  MessageCircle,
  User,
  Building,
  Heart,
  TrendingUp,
  Award,
  Sparkles,
  Play,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";

interface Testimonial {
  id: string;
  name: string;
  position: string;
  company: string;
  avatar: string;
  rating: number;
  content: string;
  project: string;
  result: string;
  date: string;
  featured?: boolean;
}

interface ClientStats {
  label: string;
  value: string;
  icon: React.ReactNode;
  color: string;
}

const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const testimonials: Testimonial[] = [
    {
      id: "1",
      name: "Nguyễn Thị Lan",
      position: "Marketing Manager",
      company: "Beauty Brand A",
      avatar: "/api/placeholder/100/100",
      rating: 5,
      content:
        "Anh đã giúp chúng tôi tăng 300% doanh số trong chiến dịch launch sản phẩm mới. Khả năng tương tác với khán giả và truyền tải thông điệp brand rất xuất sắc.",
      project: "Skincare Product Launch",
      result: "+300% sales increase",
      date: "2024-01-15",
      featured: true,
    },
    {
      id: "2",
      name: "Trần Văn Minh",
      position: "Brand Director",
      company: "Fashion Brand B",
      avatar: "/api/placeholder/100/100",
      rating: 5,
      content:
        "Làm việc với anh là một trải nghiệm tuyệt vời. Content quality cao, timeline đúng hạn, và kết quả vượt mong đợi. Chúng tôi sẽ tiếp tục hợp tác dài hạn.",
      project: "Fashion Collection Campaign",
      result: "+250% brand awareness",
      date: "2024-01-10",
      featured: false,
    },
    {
      id: "3",
      name: "Lê Thị Hương",
      position: "CEO",
      company: "Tech Startup C",
      avatar: "/api/placeholder/100/100",
      rating: 5,
      content:
        "Anh đã giúp chúng tôi tiếp cận được target audience một cách chính xác. ROI của chiến dịch đạt 400%, vượt xa kỳ vọng ban đầu.",
      project: "App Launch Campaign",
      result: "+400% ROI",
      date: "2024-01-08",
      featured: true,
    },
    {
      id: "4",
      name: "Phạm Đức Thành",
      position: "Marketing Lead",
      company: "Food Brand D",
      avatar: "/api/placeholder/100/100",
      rating: 5,
      content:
        "Khả năng storytelling của anh thật sự ấn tượng. Mỗi livestream đều thu hút hàng ngàn viewers và conversion rate luôn trên 8%.",
      project: "Food Product Reviews",
      result: "+8% conversion rate",
      date: "2024-01-05",
      featured: false,
    },
    {
      id: "5",
      name: "Vũ Thị Mai",
      position: "Brand Manager",
      company: "Lifestyle Brand E",
      avatar: "/api/placeholder/100/100",
      rating: 5,
      content:
        "Anh không chỉ là một KOC tài năng mà còn là một partner đáng tin cậy. Luôn đưa ra những insights valuable cho brand development.",
      project: "Brand Ambassador Program",
      result: "+180% engagement",
      date: "2024-01-03",
      featured: false,
    },
  ];

  const clientStats: ClientStats[] = [
    {
      label: "Clients hài lòng",
      value: "98%",
      icon: <Heart className="w-6 h-6" />,
      color: "from-red-500 to-pink-500",
    },
    {
      label: "Tỷ lệ tái hợp tác",
      value: "85%",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "from-green-500 to-emerald-500",
    },
    {
      label: "Dự án thành công",
      value: "500+",
      icon: <Award className="w-6 h-6" />,
      color: "from-purple-500 to-indigo-500",
    },
    {
      label: "Brands đã hợp tác",
      value: "100+",
      icon: <Building className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
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

  useEffect(() => {
    if (isAutoPlaying) {
      const interval = setInterval(nextTestimonial, 5000);
      return () => clearInterval(interval);
    }
  }, [isAutoPlaying, currentIndex]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 0.6,
        staggerChildren: 0.2,
      },
    },
  } as any;

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

  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={cn(
          "w-5 h-5",
          i < rating ? "text-yellow-500 fill-current" : "text-gray-400"
        )}
      />
    ));
  };

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="py-20 md:py-32 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <motion.div
        style={{ y }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-40 left-10 w-32 h-32 border border-purple-500/20 rounded-full animate-spin-slow" />
        <div className="absolute bottom-40 right-10 w-24 h-24 border border-pink-500/20 rounded-full animate-pulse" />
      </motion.div>

      <div className="container mx-auto px-4">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center mb-16">
            <div className="flex items-center justify-center mb-4">
              <div className="px-4 py-2 glass rounded-full border border-white/20">
                <span className="text-purple-400 font-medium flex items-center space-x-2">
                  <MessageCircle className="w-4 h-4" />
                  <span>Đánh giá</span>
                </span>
              </div>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Khách hàng nói về{" "}
              <span className="gradient-text-purple">tôi</span>
            </h2>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Những phản hồi chân thật từ các thương hiệu và doanh nghiệp đã hợp
              tác cùng tôi trong các dự án KOC marketing.
            </p>
          </motion.div>

          {/* Client Stats */}
          <motion.div
            variants={itemVariants}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
          >
            {clientStats.map((stat, index) => (
              <motion.div
                key={index}
                className="glass p-6 rounded-2xl border border-white/20 hover-lift group text-center"
                whileHover={{ scale: 1.05 }}
              >
                <div
                  className={cn(
                    "w-12 h-12 rounded-xl bg-gradient-to-r mb-4 flex items-center justify-center text-white mx-auto group-hover:scale-110 transition-transform duration-300",
                    stat.color
                  )}
                >
                  {stat.icon}
                </div>
                <div className="text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Main Testimonial Display */}
          <motion.div variants={itemVariants} className="relative">
            <div className="glass p-8 md:p-12 rounded-3xl border border-white/20 relative overflow-hidden">
              {/* Quote Icon */}
              <div className="absolute top-8 left-8 opacity-20">
                <Quote className="w-16 h-16 text-purple-500" />
              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 100 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -100 }}
                  transition={{ duration: 0.5 }}
                  className="relative z-10"
                >
                  {/* Rating */}
                  <div className="flex items-center justify-center mb-6">
                    <div className="flex space-x-1">
                      {renderStars(testimonials[currentIndex].rating)}
                    </div>
                  </div>

                  {/* Content */}
                  <blockquote className="text-xl md:text-2xl text-gray-300 text-center mb-8 leading-relaxed italic">
                    "{testimonials[currentIndex].content}"
                  </blockquote>

                  {/* Author Info */}
                  <div className="flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-6 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                      <span className="text-white font-bold text-xl">
                        {testimonials[currentIndex].name.charAt(0)}
                      </span>
                    </div>

                    <div className="text-center md:text-left">
                      <div className="text-white font-bold text-lg">
                        {testimonials[currentIndex].name}
                      </div>
                      <div className="text-purple-400 font-medium">
                        {testimonials[currentIndex].position}
                      </div>
                      <div className="text-gray-400 text-sm">
                        {testimonials[currentIndex].company}
                      </div>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="flex flex-col md:flex-row items-center justify-center space-y-2 md:space-y-0 md:space-x-8 text-sm">
                    <div className="flex items-center space-x-2">
                      <Play className="w-4 h-4 text-purple-400" />
                      <span className="text-gray-300">
                        Project: {testimonials[currentIndex].project}
                      </span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <TrendingUp className="w-4 h-4 text-green-400" />
                      <span className="text-gray-300">
                        Result: {testimonials[currentIndex].result}
                      </span>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>

              {/* Navigation */}
              <div className="flex items-center justify-between mt-8">
                <button
                  onClick={prevTestimonial}
                  className="w-12 h-12 glass rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                  onMouseEnter={() => setIsAutoPlaying(false)}
                  onMouseLeave={() => setIsAutoPlaying(true)}
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>

                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={cn(
                        "w-3 h-3 rounded-full transition-all duration-300",
                        index === currentIndex
                          ? "bg-purple-500 w-8"
                          : "bg-white/30 hover:bg-white/50"
                      )}
                    />
                  ))}
                </div>

                <button
                  onClick={nextTestimonial}
                  className="w-12 h-12 glass rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-colors"
                  onMouseEnter={() => setIsAutoPlaying(false)}
                  onMouseLeave={() => setIsAutoPlaying(true)}
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            </div>
          </motion.div>

          {/* Thumbnail Navigation */}
          <motion.div
            variants={itemVariants}
            className="mt-12 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4"
          >
            {testimonials.map((testimonial, index) => (
              <motion.button
                key={testimonial.id}
                onClick={() => setCurrentIndex(index)}
                className={cn(
                  "glass p-4 rounded-xl border border-white/20 transition-all duration-300 group",
                  index === currentIndex
                    ? "ring-2 ring-purple-500 bg-purple-500/10"
                    : "hover:bg-white/5"
                )}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-sm">
                      {testimonial.name.charAt(0)}
                    </span>
                  </div>
                  <div className="text-left flex-1 min-w-0">
                    <div className="text-white font-medium text-sm truncate group-hover:text-purple-400 transition-colors">
                      {testimonial.name}
                    </div>
                    <div className="text-gray-400 text-xs truncate">
                      {testimonial.company}
                    </div>
                  </div>
                </div>
              </motion.button>
            ))}
          </motion.div>

          {/* CTA */}
          <motion.div variants={itemVariants} className="text-center mt-16">
            <div className="glass p-8 rounded-2xl border border-white/20 max-w-2xl mx-auto">
              <div className="flex items-center justify-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                Trở thành khách hàng tiếp theo?
              </h3>

              <p className="text-gray-300 mb-6">
                Hãy để tôi giúp thương hiệu của bạn tạo ra những chiến dịch
                marketing hiệu quả và đạt được kết quả vượt mong đợi.
              </p>

              <Button
                variant="gradient"
                size="lg"
                icon={<MessageCircle className="w-5 h-5" />}
                glow
              >
                Bắt đầu hợp tác
              </Button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
