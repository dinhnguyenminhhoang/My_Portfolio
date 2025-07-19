"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Heart,
  Coffee,
  Users,
  Trophy,
  Clock,
  Zap,
  Target,
  Lightbulb,
} from "lucide-react";
import { gsap } from "gsap";

interface PersonalityTrait {
  icon: React.ReactNode;
  title: string;
  description: string;
  color: string;
}

const personalityTraits: PersonalityTrait[] = [
  {
    icon: <Lightbulb className="w-6 h-6" />,
    title: "Sáng tạo vô hạn",
    description: "Luôn tìm kiếm những ý tưởng game độc đáo và đột phá",
    color: "from-yellow-400 to-orange-500",
  },
  {
    icon: <Target className="w-6 h-6" />,
    title: "Tập trung cao độ",
    description: "Chú trọng chi tiết để tạo ra trải nghiệm game hoàn hảo",
    color: "from-purple-400 to-pink-500",
  },
  {
    icon: <Users className="w-6 h-6" />,
    title: "Làm việc nhóm",
    description: "Hợp tác hiệu quả với developers, artists và stakeholders",
    color: "from-cyan-400 to-blue-500",
  },
  {
    icon: <Zap className="w-6 h-6" />,
    title: "Nhanh nhạy",
    description: "Thích ứng nhanh với xu hướng gaming và công nghệ mới",
    color: "from-green-400 to-emerald-500",
  },
];

const achievements = [
  { number: "50+", label: "Game đã thiết kế", delay: 0 },
  { number: "3+", label: "Năm kinh nghiệm", delay: 0.2 },
  { number: "100%", label: "Dự án thành công", delay: 0.4 },
  { number: "∞", label: "Đam mê sáng tạo", delay: 0.6 },
];

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const particlesRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [hoveredTrait, setHoveredTrait] = useState<number | null>(null);

  // Particle animation
  useEffect(() => {
    if (!particlesRef.current) return;

    // Create floating particles
    const particles = Array.from({ length: 15 }, (_, i) => {
      const particle = document.createElement("div");
      particle.className = "absolute w-2 h-2 bg-purple-400/30 rounded-full";
      particle.style.left = Math.random() * 100 + "%";
      particle.style.top = Math.random() * 100 + "%";
      particlesRef.current?.appendChild(particle);

      // Animate particles
      gsap.to(particle, {
        x: "random(-100, 100)",
        y: "random(-100, 100)",
        duration: "random(3, 6)",
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
        delay: i * 0.2,
      });

      return particle;
    });

    return () => {
      particles.forEach((particle) => particle.remove());
    };
  }, []);

  // Image hover animation
  useEffect(() => {
    if (!imageRef.current) return;

    const image = imageRef.current;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = image.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) / rect.width;
      const y = (e.clientY - rect.top - rect.height / 2) / rect.height;

      gsap.to(image, {
        rotationX: y * 10,
        rotationY: x * 10,
        duration: 0.3,
        ease: "power2.out",
      });
    };

    const handleMouseLeave = () => {
      gsap.to(image, {
        rotationX: 0,
        rotationY: 0,
        duration: 0.5,
        ease: "power2.out",
      });
    };

    image.addEventListener("mousemove", handleMouseMove);
    image.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      image.removeEventListener("mousemove", handleMouseMove);
      image.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

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
      id="about"
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
    >
      {/* Background Particles */}
      <div
        ref={particlesRef}
        className="absolute inset-0 pointer-events-none opacity-40"
      />

      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-900/10 via-transparent to-cyan-900/10" />

      <div className="container-custom relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center"
        >
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <motion.div variants={itemVariants}>
              <div className="inline-flex items-center space-x-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-300 text-sm font-medium mb-6">
                <Heart className="w-4 h-4" />
                <span>Câu chuyện của tôi</span>
              </div>
            </motion.div>

            <motion.h2
              variants={itemVariants}
              className="text-3xl lg:text-5xl font-bold mb-6 text-gradient text-display"
            >
              Game Designer với
              <br />
              <span className="text-white">đam mê sáng tạo</span>
            </motion.h2>

            <motion.div
              variants={itemVariants}
              className="space-y-6 text-gray-300 leading-relaxed"
            >
              <p className="text-lg">
                Chào bạn! Tôi là{" "}
                <span className="text-gradient font-semibold">Hoàng</span>, một
                Game Designer với hơn 3 năm kinh nghiệm trong việc tạo ra những
                trải nghiệm game độc đáo và đầy cảm hứng.
              </p>

              <p>
                Từ nhỏ, tôi đã bị mê hoặc bởi thế giới game - không chỉ là chơi,
                mà là{" "}
                <span className="text-purple-300 font-medium">
                  hiểu được cách chúng hoạt động
                </span>
                và tại sao chúng lại cuốn hút đến vậy. Điều này đã dẫn tôi đến
                con đường Game Design, nơi tôi có thể kết hợp sự sáng tạo với
                logic để tạo ra những sản phẩm
                <span className="text-cyan-300 font-medium">
                  {" "}
                  không thể quên
                </span>
                .
              </p>

              <p>
                Tôi tin rằng game không chỉ là giải trí, mà còn là
                <span className="text-gradient font-medium">
                  {" "}
                  nghệ thuật kể chuyện tương tác
                </span>
                . Mỗi game tôi thiết kế đều mang trong mình một thông điệp, một
                cảm xúc và một trải nghiệm riêng biệt.
              </p>
            </motion.div>

            {/* Personality Traits */}
            <motion.div variants={itemVariants} className="mt-8">
              <h3 className="text-xl font-semibold mb-6 text-white">
                Điều đặc biệt ở tôi
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {personalityTraits.map((trait, index) => (
                  <motion.div
                    key={trait.title}
                    variants={itemVariants}
                    onMouseEnter={() => setHoveredTrait(index)}
                    onMouseLeave={() => setHoveredTrait(null)}
                    className={`p-4 rounded-xl border transition-all duration-300 cursor-pointer ${
                      hoveredTrait === index
                        ? "bg-white/5 border-purple-400/50 scale-105"
                        : "bg-white/[0.02] border-white/10 hover:border-white/20"
                    }`}
                  >
                    <div
                      className={`w-12 h-12 rounded-lg bg-gradient-to-r ${
                        trait.color
                      } flex items-center justify-center mb-3 transition-transform ${
                        hoveredTrait === index ? "scale-110" : ""
                      }`}
                    >
                      {trait.icon}
                    </div>
                    <h4 className="font-semibold text-white mb-2">
                      {trait.title}
                    </h4>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {trait.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Fun Facts */}
            <motion.div
              variants={itemVariants}
              className="mt-8 p-6 glass-effect rounded-2xl border border-white/10"
            >
              <div className="flex items-center space-x-2 mb-4">
                <Coffee className="w-5 h-5 text-purple-400" />
                <h3 className="text-lg font-semibold text-white">Fun Facts</h3>
              </div>
              <div className="grid grid-cols-2 gap-4 text-sm">
                <div className="flex items-center space-x-2">
                  <Clock className="w-4 h-4 text-cyan-400" />
                  <span className="text-gray-300">3000+ giờ chơi game</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Trophy className="w-4 h-4 text-yellow-400" />
                  <span className="text-gray-300">15+ game awards</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Right Visual */}
          <div className="order-1 lg:order-2 flex justify-center">
            <motion.div variants={itemVariants} className="relative">
              <div
                ref={imageRef}
                className="relative w-80 h-80 lg:w-96 lg:h-96 perspective-1000"
                style={{ transformStyle: "preserve-3d" }}
              >
                {/* Main Profile Card */}
                <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-cyan-600/20 backdrop-blur-sm rounded-3xl border border-white/20 p-8 flex flex-col items-center justify-center text-center">
                  {/* Profile Image Placeholder */}
                  <div className="w-32 h-32 mb-6 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <div className="w-28 h-28 bg-slate-800 rounded-full flex items-center justify-center">
                      <span className="text-4xl font-bold text-gradient">
                        H
                      </span>
                    </div>
                  </div>

                  <h3 className="text-2xl font-bold text-white mb-2">
                    Hoàng Nguyễn
                  </h3>
                  <p className="text-purple-300 font-medium mb-4">
                    Game Designer
                  </p>

                  {/* Mini Skills */}
                  <div className="flex flex-wrap gap-2 justify-center">
                    {["Unity", "Unreal", "Figma", "C#"].map((skill) => (
                      <span
                        key={skill}
                        className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300 border border-white/20"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Floating Achievements */}
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.label}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={
                      isInView
                        ? { opacity: 1, scale: 1 }
                        : { opacity: 0, scale: 0 }
                    }
                    transition={{ delay: achievement.delay + 1, duration: 0.5 }}
                    className={`absolute bg-gradient-to-r from-purple-500/90 to-cyan-500/90 backdrop-blur-sm rounded-xl p-3 text-center border border-white/20 ${
                      index === 0
                        ? "-top-4 -left-4"
                        : index === 1
                        ? "-top-4 -right-4"
                        : index === 2
                        ? "-bottom-4 -left-4"
                        : "-bottom-4 -right-4"
                    }`}
                  >
                    <div className="text-xl font-bold text-white">
                      {achievement.number}
                    </div>
                    <div className="text-xs text-purple-100 whitespace-nowrap">
                      {achievement.label}
                    </div>
                  </motion.div>
                ))}

                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-purple-500/20 to-cyan-500/20 blur-xl -z-10 animate-pulse" />
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="text-center mt-16 lg:mt-24"
        >
          <p className="text-gray-400 mb-6">
            Sẵn sàng cùng nhau tạo ra game tuyệt vời?
          </p>
          <button className="btn-primary">Hợp tác với tôi</button>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
