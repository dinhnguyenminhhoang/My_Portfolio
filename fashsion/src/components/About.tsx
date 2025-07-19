"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Sparkles, Award, Users, Calendar, Heart, Star } from "lucide-react";
import { gsap } from "gsap";

const About = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(containerRef, { once: false, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  // GSAP animations for image hover effects
  useEffect(() => {
    const ctx = gsap.context(() => {
      const imageElement = imageRef.current;

      if (imageElement) {
        // Tilt effect on hover
        imageElement.addEventListener("mouseenter", () => {
          gsap.to(imageElement, {
            rotationY: 5,
            rotationX: 5,
            scale: 1.05,
            duration: 0.5,
            ease: "power2.out",
          });
        });

        imageElement.addEventListener("mouseleave", () => {
          gsap.to(imageElement, {
            rotationY: 0,
            rotationX: 0,
            scale: 1,
            duration: 0.5,
            ease: "power2.out",
          });
        });
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const stats = [
    {
      icon: Calendar,
      number: "3+",
      label: "Năm Kinh Nghiệm",
      color: "text-purple-600",
    },
    {
      icon: Award,
      number: "50+",
      label: "Dự Án Hoàn Thành",
      color: "text-pink-600",
    },
    {
      icon: Users,
      number: "100+",
      label: "Khách Hàng Hài Lòng",
      color: "text-orange-500",
    },
    {
      icon: Heart,
      number: "1M+",
      label: "Lượt Tương Tác",
      color: "text-red-500",
    },
  ];

  const skills = [
    "Fashion Photography",
    "Brand Storytelling",
    "Creative Direction",
    "Content Strategy",
    "Social Media",
    "Video Production",
  ];

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

  return (
    <section
      ref={containerRef}
      id="about"
      className="relative py-20 lg:py-32 bg-gradient-to-br from-white via-purple-50/30 to-pink-50/30 overflow-hidden"
    >
      {/* Background decorative elements */}
      <motion.div
        style={{ y, opacity }}
        className="absolute inset-0 pointer-events-none"
      >
        <div className="absolute top-20 right-10 w-64 h-64 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-80 h-80 bg-gradient-to-br from-orange-200/20 to-yellow-200/20 rounded-full blur-3xl" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Text Content */}
          <div className="space-y-8">
            {/* Section Header */}
            <motion.div variants={itemVariants} className="space-y-4">
              <div className="flex items-center space-x-3">
                <motion.div
                  whileHover={{ rotate: 180 }}
                  transition={{ duration: 0.3 }}
                >
                  <Sparkles className="w-6 h-6 text-purple-600" />
                </motion.div>
                <span className="text-purple-600 font-semibold tracking-wider uppercase text-sm">
                  Về Tôi
                </span>
              </div>

              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Passion for{" "}
                <span className="relative">
                  <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
                    Fashion
                  </span>
                  <motion.div
                    initial={{ scaleX: 0 }}
                    animate={isInView ? { scaleX: 1 } : { scaleX: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-pink-600 origin-left rounded-full"
                  />
                </span>
                <br />& Creativity
              </h2>
            </motion.div>

            {/* Description */}
            <motion.div variants={itemVariants} className="space-y-6">
              <p className="text-lg text-gray-600 leading-relaxed">
                Tôi là một fashion model với đam mê sáng tạo những câu chuyện
                thời trang đầy cảm hứng. Với phong cách{" "}
                <span className="font-semibold text-purple-600">"chipi"</span>-
                trẻ trung, năng động và đầy cá tính, tôi luôn tìm cách mang đến
                những trải nghiệm thời trang độc đáo.
              </p>

              <p className="text-lg text-gray-600 leading-relaxed">
                Từ những buổi chụp hình thời trang đến việc xây dựng thương hiệu
                cá nhân, tôi tin rằng mỗi khoảnh khắc đều có thể trở thành một
                tác phẩm nghệ thuật khi được thể hiện với{" "}
                <span className="font-semibold text-pink-600">chất riêng</span>.
              </p>
            </motion.div>

            {/* Skills Tags */}
            <motion.div variants={itemVariants} className="space-y-4">
              <h3 className="text-xl font-semibold text-gray-900">
                Chuyên môn:
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={
                      isInView
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0 }
                    }
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.4 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    className="px-4 py-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 rounded-full text-sm font-medium border border-purple-200/50 hover:shadow-lg transition-all duration-300"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div variants={itemVariants}>
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 10px 30px rgba(147, 51, 234, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-full overflow-hidden shadow-xl"
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <span>Tìm hiểu thêm</span>
                  <Star className="w-4 h-4 group-hover:rotate-12 transition-transform duration-300" />
                </span>
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-pink-600 to-orange-500"
                  initial={{ x: "-100%" }}
                  whileHover={{ x: 0 }}
                  transition={{ duration: 0.3 }}
                />
              </motion.button>
            </motion.div>
          </div>

          {/* Image + Stats */}
          <div className="space-y-8">
            {/* Profile Image */}
            <motion.div variants={itemVariants} className="relative">
              <div
                ref={imageRef}
                className="relative group cursor-pointer perspective-1000"
              >
                {/* Image placeholder with gradient */}
                <div className="relative w-full h-96 lg:h-[500px] bg-gradient-to-br from-purple-200 via-pink-200 to-orange-200 rounded-3xl overflow-hidden shadow-2xl">
                  {/* Overlay pattern */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />

                  {/* Placeholder content */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-white/80">
                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 8,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="w-20 h-20 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm"
                      >
                        <Sparkles className="w-8 h-8" />
                      </motion.div>
                      <p className="text-lg font-semibold">Your Photo Here</p>
                      <p className="text-sm opacity-75">
                        Professional Fashion Portrait
                      </p>
                    </div>
                  </div>

                  {/* Decorative elements */}
                  <motion.div
                    className="absolute top-4 right-4 w-4 h-4 bg-white/30 rounded-full"
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <motion.div
                    className="absolute bottom-6 left-6 w-3 h-3 bg-white/40 rounded-full"
                    animate={{ scale: [1.2, 1, 1.2] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                </div>

                {/* Floating badge */}
                <motion.div
                  initial={{ scale: 0, rotate: -180 }}
                  animate={
                    isInView
                      ? { scale: 1, rotate: 0 }
                      : { scale: 0, rotate: -180 }
                  }
                  transition={{ delay: 1, duration: 0.6, type: "spring" }}
                  className="absolute -top-4 -right-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg"
                >
                  ✨ Top Model
                </motion.div>
              </div>
            </motion.div>

            {/* Stats Grid */}
            <motion.div
              variants={containerVariants}
              className="grid grid-cols-2 gap-4"
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="bg-white/70 backdrop-blur-sm p-6 rounded-2xl shadow-lg border border-white/50 text-center group"
                >
                  <motion.div
                    className={`w-12 h-12 mx-auto mb-3 rounded-full bg-gradient-to-r from-purple-100 to-pink-100 flex items-center justify-center ${stat.color}`}
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <stat.icon className="w-6 h-6" />
                  </motion.div>
                  <motion.h3
                    className="text-2xl font-bold text-gray-900 mb-1"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.1 }}
                  >
                    {stat.number}
                  </motion.h3>
                  <p className="text-sm text-gray-600 font-medium">
                    {stat.label}
                  </p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
