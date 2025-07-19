"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import {
  Code,
  Palette,
  Gamepad2,
  Users,
  Lightbulb,
  Target,
  Layers,
  Cpu,
  Database,
  Zap,
  Award,
  Star,
} from "lucide-react";
import { gsap } from "gsap";

interface Skill {
  name: string;
  level: number;
  icon: React.ReactNode;
  category: "design" | "technical" | "soft";
  color: string;
  description: string;
}

interface Tool {
  name: string;
  icon: string;
  proficiency: number;
  category: string;
}

const skills: Skill[] = [
  {
    name: "Game Design",
    level: 95,
    icon: <Gamepad2 className="w-6 h-6" />,
    category: "design",
    color: "from-purple-500 to-violet-600",
    description: "Thiết kế gameplay, mechanics và user experience",
  },
  {
    name: "Level Design",
    level: 90,
    icon: <Layers className="w-6 h-6" />,
    category: "design",
    color: "from-cyan-500 to-blue-600",
    description: "Tạo ra các level thú vị và cân bằng",
  },
  {
    name: "UI/UX Design",
    level: 85,
    icon: <Palette className="w-6 h-6" />,
    category: "design",
    color: "from-pink-500 to-red-600",
    description: "Thiết kế giao diện người dùng trực quan",
  },
  {
    name: "C# Programming",
    level: 80,
    icon: <Code className="w-6 h-6" />,
    category: "technical",
    color: "from-green-500 to-emerald-600",
    description: "Lập trình game logic và systems",
  },
  {
    name: "Database Design",
    level: 75,
    icon: <Database className="w-6 h-6" />,
    category: "technical",
    color: "from-orange-500 to-amber-600",
    description: "Thiết kế cơ sở dữ liệu game",
  },
  {
    name: "Performance Optimization",
    level: 78,
    icon: <Cpu className="w-6 h-6" />,
    category: "technical",
    color: "from-indigo-500 to-purple-600",
    description: "Tối ưu hóa hiệu suất game",
  },
  {
    name: "Creative Thinking",
    level: 98,
    icon: <Lightbulb className="w-6 h-6" />,
    category: "soft",
    color: "from-yellow-500 to-orange-600",
    description: "Tư duy sáng tạo và đổi mới",
  },
  {
    name: "Team Leadership",
    level: 88,
    icon: <Users className="w-6 h-6" />,
    category: "soft",
    color: "from-teal-500 to-cyan-600",
    description: "Lãnh đạo và quản lý team",
  },
  {
    name: "Problem Solving",
    level: 92,
    icon: <Target className="w-6 h-6" />,
    category: "soft",
    color: "from-red-500 to-pink-600",
    description: "Giải quyết vấn đề hiệu quả",
  },
];

const tools: Tool[] = [
  { name: "Unity", icon: "🎮", proficiency: 95, category: "Game Engine" },
  {
    name: "Unreal Engine",
    icon: "🚀",
    proficiency: 85,
    category: "Game Engine",
  },
  { name: "Figma", icon: "🎨", proficiency: 90, category: "Design" },
  { name: "Photoshop", icon: "📷", proficiency: 80, category: "Design" },
  { name: "Blender", icon: "🎭", proficiency: 75, category: "3D" },
  {
    name: "Visual Studio",
    icon: "💻",
    proficiency: 88,
    category: "Development",
  },
  { name: "Git", icon: "🔄", proficiency: 85, category: "Version Control" },
  { name: "Jira", icon: "📋", proficiency: 90, category: "Project Management" },
];

const SkillCard = ({ skill, index }: { skill: Skill; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(cardRef, { once: true, margin: "-50px" });
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (isInView && progressRef.current) {
      gsap.to(progressRef.current, {
        width: `${skill.level}%`,
        duration: 1.5,
        delay: index * 0.1,
        ease: "power2.out",
      });
    }
  }, [isInView, skill.level, index]);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ delay: index * 0.1, duration: 0.6 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`p-6 glass-effect rounded-2xl border border-white/10 transition-all duration-300 cursor-pointer group ${
        isHovered ? "scale-105 border-purple-400/30" : ""
      }`}
    >
      <div className="flex items-start justify-between mb-4">
        <div
          className={`w-12 h-12 rounded-xl bg-gradient-to-r ${skill.color} flex items-center justify-center transition-transform group-hover:scale-110`}
        >
          {skill.icon}
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-white">{skill.level}%</div>
          <div
            className={`text-xs px-2 py-1 rounded-full ${
              skill.category === "design"
                ? "bg-purple-500/20 text-purple-300"
                : skill.category === "technical"
                ? "bg-cyan-500/20 text-cyan-300"
                : "bg-pink-500/20 text-pink-300"
            }`}
          >
            {skill.category === "design"
              ? "Design"
              : skill.category === "technical"
              ? "Technical"
              : "Soft Skill"}
          </div>
        </div>
      </div>

      <h3 className="text-lg font-semibold text-white mb-2">{skill.name}</h3>
      <p className="text-sm text-gray-400 mb-4 leading-relaxed">
        {skill.description}
      </p>

      {/* Progress Bar */}
      <div className="relative">
        <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
          <div
            ref={progressRef}
            className={`h-full bg-gradient-to-r ${skill.color} rounded-full relative`}
            style={{ width: "0%" }}
          >
            <div className="absolute inset-0 bg-white/20 animate-pulse" />
          </div>
        </div>

        {/* Animated Dots */}
        <div className="flex justify-between mt-2">
          {Array.from({ length: 5 }).map((_, i) => (
            <div
              key={i}
              className={`w-1 h-1 rounded-full transition-all duration-300 ${
                (i + 1) * 20 <= skill.level ? "bg-purple-400" : "bg-gray-600"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Hover Effect */}
      <motion.div
        className="absolute inset-0 rounded-2xl opacity-0 pointer-events-none"
        animate={{
          opacity: isHovered ? 0.1 : 0,
          scale: isHovered ? 1.02 : 1,
        }}
        style={{
          background: `linear-gradient(45deg, ${skill.color.split(" ")[1]}, ${
            skill.color.split(" ")[3]
          })`,
        }}
      />
    </motion.div>
  );
};

const Skills = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [activeCategory, setActiveCategory] = useState<
    "all" | "design" | "technical" | "soft"
  >("all");

  const filteredSkills = skills.filter(
    (skill) => activeCategory === "all" || skill.category === activeCategory
  );

  const categories = [
    {
      key: "all" as const,
      label: "Tất cả",
      icon: <Star className="w-4 h-4" />,
    },
    {
      key: "design" as const,
      label: "Design",
      icon: <Palette className="w-4 h-4" />,
    },
    {
      key: "technical" as const,
      label: "Technical",
      icon: <Code className="w-4 h-4" />,
    },
    {
      key: "soft" as const,
      label: "Soft Skills",
      icon: <Users className="w-4 h-4" />,
    },
  ];

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950/5 to-slate-950" />

      <div className="container-custom relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-purple-500/10 border border-purple-500/20 rounded-full text-purple-300 text-sm font-medium mb-6">
            <Award className="w-4 h-4" />
            <span>Chuyên môn & Kỹ năng</span>
          </div>

          <h2 className="text-3xl lg:text-5xl font-bold mb-6 text-gradient text-display">
            Expertise & Skills
          </h2>

          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Tôi kết hợp kỹ năng thiết kế sáng tạo với kiến thức kỹ thuật vững
            chắc để tạo ra những trải nghiệm game độc đáo và cuốn hút.
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.key}
              onClick={() => setActiveCategory(category.key)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-medium transition-all duration-300 ${
                activeCategory === category.key
                  ? "bg-gradient-primary text-white scale-105"
                  : "glass-effect border border-white/10 text-gray-300 hover:text-white hover:border-purple-400/30"
              }`}
            >
              {category.icon}
              <span>{category.label}</span>
            </button>
          ))}
        </motion.div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredSkills.map((skill, index) => (
            <SkillCard key={skill.name} skill={skill} index={index} />
          ))}
        </div>

        {/* Tools Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 0.8, duration: 0.6 }}
          className="glass-effect rounded-3xl p-8 border border-white/10"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl lg:text-3xl font-bold text-white mb-4">
              Công cụ & <span className="text-gradient">Công nghệ</span>
            </h3>
            <p className="text-gray-400">
              Các tool và framework tôi sử dụng hàng ngày
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-4">
            {tools.map((tool, index) => (
              <motion.div
                key={tool.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.8 }
                }
                transition={{ delay: 1 + index * 0.1, duration: 0.5 }}
                whileHover={{ scale: 1.1 }}
                className="flex flex-col items-center p-4 glass-effect rounded-xl border border-white/10 hover:border-purple-400/30 transition-all duration-300 group cursor-pointer"
              >
                <div className="text-3xl mb-2 transition-transform group-hover:scale-125">
                  {tool.icon}
                </div>
                <h4 className="text-sm font-medium text-white mb-1 text-center">
                  {tool.name}
                </h4>
                <p className="text-xs text-gray-400 mb-2 text-center">
                  {tool.category}
                </p>

                {/* Mini Progress */}
                <div className="w-full h-1 bg-gray-700 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full bg-gradient-to-r from-purple-500 to-cyan-500"
                    initial={{ width: 0 }}
                    animate={
                      isInView
                        ? { width: `${tool.proficiency}%` }
                        : { width: 0 }
                    }
                    transition={{ delay: 1.2 + index * 0.1, duration: 1 }}
                  />
                </div>
                <div className="text-xs text-purple-300 mt-1 font-medium">
                  {tool.proficiency}%
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Achievement Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-16"
        >
          {[
            {
              icon: <Gamepad2 className="w-8 h-8" />,
              number: "50+",
              label: "Games Designed",
              color: "from-purple-500 to-violet-600",
            },
            {
              icon: <Code className="w-8 h-8" />,
              number: "100K+",
              label: "Lines of Code",
              color: "from-cyan-500 to-blue-600",
            },
            {
              icon: <Users className="w-8 h-8" />,
              number: "20+",
              label: "Team Projects",
              color: "from-pink-500 to-red-600",
            },
            {
              icon: <Award className="w-8 h-8" />,
              number: "15+",
              label: "Awards Won",
              color: "from-yellow-500 to-orange-600",
            },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={
                isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }
              }
              transition={{ delay: 1.7 + index * 0.1, duration: 0.5 }}
              className="text-center p-6 glass-effect rounded-2xl border border-white/10 hover:border-purple-400/30 transition-all duration-300 group"
            >
              <div
                className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r ${stat.color} flex items-center justify-center transition-transform group-hover:scale-110`}
              >
                {stat.icon}
              </div>
              <div className="text-3xl font-bold text-gradient mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ delay: 2, duration: 0.6 }}
          className="text-center mt-16"
        >
          <div className="glass-effect rounded-3xl p-8 border border-white/10 max-w-2xl mx-auto">
            <Zap className="w-12 h-12 text-purple-400 mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-white mb-4">
              Sẵn sàng hợp tác?
            </h3>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Với kinh nghiệm và kỹ năng đa dạng, tôi có thể giúp bạn biến ý
              tưởng game thành hiện thực.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="btn-primary">Bắt đầu dự án</button>
              <button className="btn-secondary">Xem portfolio</button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
