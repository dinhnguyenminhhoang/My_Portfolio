"use client";

import React, { useRef } from "react";
import { motion, useScroll, useTransform, useInView } from "framer-motion";
import {
  User,
  Calendar,
  MapPin,
  Heart,
  Star,
  Quote,
  CheckCircle,
  Sparkles,
  Play,
  Users,
} from "lucide-react";
import { cn } from "@/lib/utils";
import Button from "@/components/ui/Button";

const AboutSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.2 });

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);

  const highlights = [
    "5+ năm kinh nghiệm trong lĩnh vực KOC & Livestream",
    "Hợp tác với 100+ thương hiệu uy tín",
    "Tỷ lệ chuyển đổi cao trong các chiến dịch",
    "Chuyên gia về beauty, fashion & lifestyle",
    "Có khả năng tương tác đa nền tảng",
    "Xây dựng cộng đồng trung thành và active",
  ];

  const personalInfo = [
    {
      icon: <User className="w-5 h-5" />,
      label: "Tên",
      value: "Nguyễn Minh Anh",
    },
    {
      icon: <Calendar className="w-5 h-5" />,
      label: "Tuổi",
      value: "25 tuổi",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Địa điểm",
      value: "TP.HCM, Việt Nam",
    },
    {
      icon: <Heart className="w-5 h-5" />,
      label: "Sở thích",
      value: "Beauty, Fashion, Travel",
    },
  ];

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
      id="about"
      className="py-20 md:py-32 relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 right-20 w-72 h-72 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
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
                  <Sparkles className="w-4 h-4" />
                  <span>Giới thiệu</span>
                </span>
              </div>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Về <span className="gradient-text-purple">tôi</span>
            </h2>

            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Tôi là một KOC chuyên nghiệp, đam mê tạo ra những nội dung chất
              lượng và kết nối thương hiệu với khách hàng một cách hiệu quả
              nhất.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Column - Image & Personal Info */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Profile Image */}
              <div className="relative">
                <div className="relative w-80 h-80 mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl blur-xl opacity-30" />
                  <div className="relative w-full h-full bg-gradient-to-r from-purple-600 to-pink-600 rounded-3xl p-1">
                    <div className="w-full h-full bg-gray-800 rounded-3xl flex items-center justify-center overflow-hidden">
                      <div className="w-full h-full bg-gradient-to-br from-purple-900 to-pink-900 flex items-center justify-center">
                        <span className="text-8xl font-bold text-white">K</span>
                      </div>
                    </div>
                  </div>

                  {/* Floating Elements */}
                  <motion.div
                    className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-2xl flex items-center justify-center"
                    animate={{
                      y: [0, -10, 0],
                      rotate: [0, 5, -5, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <Star className="w-8 h-8 text-white" />
                  </motion.div>

                  <motion.div
                    className="absolute -bottom-4 -left-4 w-12 h-12 bg-gradient-to-r from-green-500 to-blue-500 rounded-xl flex items-center justify-center"
                    animate={{
                      y: [0, 10, 0],
                      rotate: [0, -5, 5, 0],
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1,
                    }}
                  >
                    <Heart className="w-6 h-6 text-white" />
                  </motion.div>
                </div>
              </div>

              {/* Personal Info Cards */}
              <div className="grid grid-cols-2 gap-4">
                {personalInfo.map((info, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    className="glass p-4 rounded-xl border border-white/20 hover-lift group"
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                        {info.icon}
                      </div>
                      <div>
                        <div className="text-sm text-gray-400">
                          {info.label}
                        </div>
                        <div className="text-white font-medium">
                          {info.value}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Right Column - About Content */}
            <motion.div variants={itemVariants} className="space-y-8">
              {/* Quote */}
              <div className="relative">
                <Quote className="w-12 h-12 text-purple-500/30 absolute -top-4 -left-4" />
                <div className="glass p-6 rounded-2xl border border-white/20">
                  <p className="text-lg text-gray-300 italic leading-relaxed">
                    "Tôi tin rằng mỗi sản phẩm đều có câu chuyện riêng và nhiệm
                    vụ của tôi là kể những câu chuyện đó một cách chân thật và
                    cuốn hút nhất đến với khách hàng."
                  </p>
                </div>
              </div>

              {/* Story */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white">
                  Câu chuyện của tôi
                </h3>
                <div className="space-y-4 text-gray-300 leading-relaxed">
                  <p>
                    Bắt đầu từ một cô gái trẻ đam mê beauty và thời trang, tôi
                    đã bước chân vào thế giới KOC với mong muốn chia sẻ những
                    sản phẩm tuyệt vời đến với mọi người.
                  </p>
                  <p>
                    Sau 5 năm làm việc không ngừng nghỉ, tôi đã xây dựng được
                    một cộng đồng 150K+ người theo dõi trung thành và hợp tác
                    thành công với hơn 100 thương hiệu.
                  </p>
                  <p>
                    Điều tôi tự hào nhất không phải là những con số, mà là niềm
                    tin mà khách hàng dành cho tôi và những giá trị thực sự mà
                    tôi mang lại cho cộng đồng.
                  </p>
                </div>
              </div>

              {/* Highlights */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-white">Điểm nổi bật</h3>
                <div className="grid gap-3">
                  {highlights.map((highlight, index) => (
                    <motion.div
                      key={index}
                      variants={itemVariants}
                      className="flex items-center space-x-3 group"
                      whileHover={{ x: 10 }}
                    >
                      <div className="w-6 h-6 bg-gradient-to-r from-green-500 to-blue-500 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <span className="text-gray-300 group-hover:text-white transition-colors">
                        {highlight}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button
                  variant="gradient"
                  size="lg"
                  icon={<Play className="w-5 h-5" />}
                  onClick={() => window.open("#portfolio", "_self")}
                >
                  Xem Portfolio
                </Button>

                <Button
                  variant="outline"
                  size="lg"
                  icon={<Users className="w-5 h-5" />}
                  onClick={() => window.open("#contact", "_self")}
                >
                  Liên hệ hợp tác
                </Button>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
