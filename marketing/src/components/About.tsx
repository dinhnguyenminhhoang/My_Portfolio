"use client";

import { useEffect, useRef } from "react";
import { motion, useInView, useAnimation } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Heart,
  Coffee,
  Camera,
  Lightbulb,
  Sparkles,
  Star,
  Zap,
  Music,
} from "lucide-react";

// Register ScrollTrigger plugin
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  const controls = useAnimation();
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Parallax effect for image
      gsap.to(".about-image", {
        y: -50,
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      // Stagger animation for timeline items
      gsap.fromTo(
        ".timeline-item",
        { opacity: 0, x: -50 },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Floating icons animation
      gsap.to(".floating-icon", {
        y: -10,
        rotation: 5,
        duration: 2,
        ease: "power2.inOut",
        stagger: 0.3,
        repeat: -1,
        yoyo: true,
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

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
    hidden: { y: 50, opacity: 0 },
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

  const timelineItems = [
    {
      year: "2021",
      title: "Bắt đầu hành trình",
      description: "Khám phá đam mê với những video đầu tiên trên TikTok",
      icon: <Camera className="w-5 h-5" />,
      color: "from-purple-500 to-pink-500",
    },
    {
      year: "2022",
      title: "Viral đầu tiên",
      description: "Video đạt 500K views - moment thay đổi cuộc đời",
      icon: <Zap className="w-5 h-5" />,
      color: "from-pink-500 to-orange-500",
    },
    {
      year: "2023",
      title: "Phát triển thương hiệu",
      description: "Mở rộng sang Instagram & YouTube, xây dựng community",
      icon: <Star className="w-5 h-5" />,
      color: "from-orange-500 to-yellow-500",
    },
    {
      year: "2024",
      title: "Creative Director",
      description: "Hợp tác với các brand lớn, tạo ra chiến dịch viral",
      icon: <Lightbulb className="w-5 h-5" />,
      color: "from-yellow-500 to-purple-500",
    },
  ];

  const personalTraits = [
    {
      icon: <Coffee className="w-6 h-6" />,
      text: "Nghiện cà phê",
      color: "text-amber-500",
    },
    {
      icon: <Music className="w-6 h-6" />,
      text: "Mê nhạc Vpop",
      color: "text-pink-500",
    },
    {
      icon: <Camera className="w-6 h-6" />,
      text: "Cuồng nhiếp ảnh",
      color: "text-blue-500",
    },
    {
      icon: <Heart className="w-6 h-6" />,
      text: "Yêu động vật",
      color: "text-red-500",
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-20 lg:py-32 bg-gradient-to-br from-purple-50 via-white to-pink-50 overflow-hidden"
    >
      {/* Floating Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 floating-icon">
          <Sparkles className="w-8 h-8 text-purple-300 opacity-30" />
        </div>
        <div className="absolute top-40 right-20 floating-icon">
          <Heart className="w-6 h-6 text-pink-300 opacity-30" />
        </div>
        <div className="absolute bottom-40 left-20 floating-icon">
          <Star className="w-7 h-7 text-orange-300 opacity-30" />
        </div>
        <div className="absolute bottom-20 right-10 floating-icon">
          <Zap className="w-5 h-5 text-yellow-300 opacity-30" />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center"
        >
          {/* Left Column - Image & Personal Info */}
          <motion.div variants={itemVariants} className="relative">
            <div className="relative max-w-lg mx-auto lg:mx-0">
              {/* Main Image Container */}
              <div className="about-image relative">
                <div className="aspect-square rounded-3xl bg-gradient-to-br from-purple-200 via-pink-200 to-orange-200 p-1 shadow-2xl">
                  <div className="w-full h-full rounded-3xl bg-gradient-to-br from-purple-100 via-pink-100 to-orange-100 flex items-center justify-center overflow-hidden">
                    {/* Placeholder for actual image */}
                    <div className="w-full h-full bg-gradient-to-br from-purple-400 via-pink-400 to-orange-400 rounded-3xl flex items-center justify-center">
                      <div className="text-white text-6xl font-bold">H</div>
                    </div>
                  </div>
                </div>

                {/* Floating Badges */}
                <motion.div
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3, repeat: Infinity }}
                  className="absolute -top-6 -right-6 bg-white rounded-full px-4 py-2 shadow-lg border border-purple-100"
                >
                  <div className="flex items-center space-x-2">
                    <Camera className="w-4 h-4 text-purple-500" />
                    <span className="text-sm font-medium text-gray-700">
                      Content Creator
                    </span>
                  </div>
                </motion.div>

                <motion.div
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2.5, repeat: Infinity, delay: 1 }}
                  className="absolute -bottom-6 -left-6 bg-white rounded-full px-4 py-2 shadow-lg border border-pink-100"
                >
                  <div className="flex items-center space-x-2">
                    <Heart className="w-4 h-4 text-pink-500" />
                    <span className="text-sm font-medium text-gray-700">
                      Chipi Style
                    </span>
                  </div>
                </motion.div>
              </div>

              {/* Personal Traits */}
              <motion.div
                variants={itemVariants}
                className="mt-8 grid grid-cols-2 gap-4"
              >
                {personalTraits.map((trait, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05 }}
                    className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 shadow-lg border border-gray-100 hover:border-purple-200 transition-all duration-300"
                  >
                    <div className="flex items-center space-x-3">
                      <div className={trait.color}>{trait.icon}</div>
                      <span className="text-sm font-medium text-gray-700">
                        {trait.text}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column - Content */}
          <motion.div variants={itemVariants} className="space-y-8">
            {/* Section Header */}
            <div className="space-y-4">
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-100 to-pink-100 rounded-full px-6 py-3"
              >
                <Sparkles className="w-5 h-5 text-purple-500" />
                <span className="text-sm font-semibold text-purple-700">
                  Về tôi
                </span>
              </motion.div>

              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900">
                Câu chuyện của một{" "}
                <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Gen Z "chipi"
                </span>
              </h2>
            </div>

            {/* Main Content */}
            <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
              <p>
                Xin chào! Tôi là{" "}
                <strong className="text-purple-600">Hoàng</strong>, một Content
                Creator với tâm hồn "chipi" và đam mê tạo ra những nội dung
                viral có tính lan tỏa cao. Hành trình của tôi bắt đầu từ một
                video TikTok ngẫu nhiên và giờ đây đã trở thành một thương hiệu
                cá nhân với hàng trăm nghìn followers.
              </p>

              <p>
                Tôi tin rằng nội dung không chỉ là giải trí mà còn là cách để{" "}
                <strong className="text-pink-600">kết nối</strong> và{" "}
                <strong className="text-orange-600">truyền cảm hứng</strong>.
                Mỗi video tôi tạo ra đều mang một thông điệp tích cực, từ những
                trend vui nhộn cho đến những câu chuyện đầy ý nghĩa.
              </p>

              <p>
                Phong cách "chipi" của tôi không chỉ là về sự dễ thương mà còn
                là về{" "}
                <strong className="text-purple-600">sự chính thống</strong> và{" "}
                <strong className="text-pink-600">cá tính riêng biệt</strong>.
                Tôi luôn tìm cách làm khác biệt trong từng nội dung, tạo ra
                những trải nghiệm mới mẻ cho khán giả.
              </p>
            </div>

            {/* Fun Facts */}
            <motion.div
              variants={itemVariants}
              className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-100"
            >
              <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                <Heart className="w-5 h-5 text-pink-500 mr-2" />
                Fun Facts về tôi
              </h3>
              <div className="grid sm:grid-cols-2 gap-4 text-sm text-gray-700">
                <div>🎬 Đã tạo ra 500+ videos</div>
                <div>☕ Uống 3 cốc cà phê/ngày</div>
                <div>🌙 Là một night owl chính hiệu</div>
                <div>🎵 Playlist có 1000+ bài hát</div>
                <div>📱 Luôn update trend mới nhất</div>
                <div>🍕 Pizza là động lực sống</div>
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div variants={itemVariants}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => {
                  const element = document.querySelector("#projects");
                  if (element) element.scrollIntoView({ behavior: "smooth" });
                }}
                className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold px-8 py-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <span>Xem các dự án của tôi</span>
                <motion.div
                  animate={{ x: [0, 3, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <Sparkles className="w-5 h-5" />
                </motion.div>
              </motion.button>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Timeline Section */}
        <motion.div
          ref={timelineRef}
          variants={containerVariants}
          initial="hidden"
          animate={controls}
          className="mt-20 lg:mt-32"
        >
          <div className="text-center mb-16">
            <h3 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
              Hành trình phát triển
            </h3>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Từ những bước chân đầu tiên đến thành công ngày hôm nay
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {timelineItems.map((item, index) => (
              <div key={index} className="timeline-item">
                <div className="relative">
                  <div
                    className={`w-full h-64 bg-gradient-to-br ${item.color} rounded-3xl p-6 text-white shadow-xl hover:shadow-2xl transition-all duration-300 group hover:scale-105`}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-2xl font-bold">{item.year}</span>
                      <div className="p-2 bg-white/20 rounded-full">
                        {item.icon}
                      </div>
                    </div>
                    <h4 className="text-lg font-bold mb-3">{item.title}</h4>
                    <p className="text-sm opacity-90 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
