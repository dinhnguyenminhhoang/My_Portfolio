"use client";

import { useEffect, useRef, useState } from "react";
import { Award, Coffee, Heart, MapPin, Calendar, Users } from "lucide-react";

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const achievements = [
    {
      icon: Award,
      value: "15+",
      label: "Awards Won",
      color: "from-yellow-400 to-orange-500",
    },
    {
      icon: Coffee,
      value: "1000+",
      label: "Cups of Coffee",
      color: "from-amber-600 to-yellow-500",
    },
    {
      icon: Heart,
      value: "50K+",
      label: "Happy Users",
      color: "from-red-400 to-pink-500",
    },
    {
      icon: Users,
      value: "100+",
      label: "Projects Delivered",
      color: "from-blue-400 to-cyan-500",
    },
  ];

  const personalInfo = [
    { label: "Location", value: "San Francisco, CA", icon: MapPin },
    { label: "Experience", value: "5+ Years", icon: Calendar },
    { label: "Availability", value: "Open to Work", icon: Users },
  ];

  const interests = [
    "Mobile UI/UX Design",
    "Cross-Platform Development",
    "Performance Optimization",
    "AR/VR Applications",
    "IoT Integration",
    "Machine Learning",
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-20 lg:py-32 overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/circuit-pattern.svg')] bg-repeat"></div>
      </div>

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full border border-purple-500/30 text-purple-300 text-sm font-medium backdrop-blur-sm mb-6">
            About Me
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Passionate About{" "}
            <span className="text-gradient">Mobile Innovation</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Crafting digital experiences that connect people and transform ideas
            into reality
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Profile Image & Info */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            {/* Profile Image */}
            <div className="relative mb-8 group">
              <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 rounded-2xl blur-lg opacity-25 group-hover:opacity-50 transition-opacity duration-1000 animate-rotate-gradient"></div>
              <div className="relative w-80 h-80 mx-auto bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl p-1">
                <div className="w-full h-full bg-slate-800 rounded-xl overflow-hidden">
                  <div className="w-full h-full bg-gradient-to-br from-purple-500/20 to-pink-500/20 flex items-center justify-center">
                    <div className="text-6xl text-white">👨‍💻</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Personal Info Cards */}
            <div className="space-y-4">
              {personalInfo.map((info, index) => (
                <div
                  key={info.label}
                  className={`glass-effect rounded-xl p-4 hover:bg-white/20 transition-all duration-300 card-hover ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-5"
                  }`}
                  style={{ transitionDelay: `${500 + index * 100}ms` }}
                >
                  <div className="flex items-center space-x-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center">
                      <info.icon size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="text-gray-400 text-sm">{info.label}</p>
                      <p className="text-white font-semibold">{info.value}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Story & Details */}
          <div
            className={`transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p className="text-lg">
                Hello! I'm{" "}
                <span className="text-gradient font-semibold">Alex Chen</span>,
                a passionate mobile developer with over 5 years of experience
                creating innovative applications that make a difference in
                people's lives.
              </p>

              <p>
                My journey began with a simple curiosity about how mobile apps
                work. This curiosity evolved into a deep passion for crafting
                seamless user experiences and solving complex technical
                challenges. I specialize in{" "}
                <span className="text-purple-400 font-medium">
                  React Native
                </span>
                , <span className="text-blue-400 font-medium">Flutter</span>,
                and native{" "}
                <span className="text-green-400 font-medium">iOS/Android</span>{" "}
                development.
              </p>

              <p>
                When I'm not coding, you'll find me exploring the latest mobile
                technologies, contributing to open-source projects, or mentoring
                aspiring developers. I believe in the power of technology to
                create positive change and am always excited to work on projects
                that push the boundaries of what's possible.
              </p>

              {/* Interests */}
              <div className="mt-8">
                <h3 className="text-white font-semibold mb-4 flex items-center">
                  <Heart className="mr-2 text-pink-400" size={20} />
                  What I'm Passionate About
                </h3>
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest, index) => (
                    <span
                      key={interest}
                      className={`px-3 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full text-sm border border-purple-500/30 backdrop-blur-sm transition-all duration-300 hover:scale-105 cursor-default ${
                        isVisible
                          ? "opacity-100 translate-y-0"
                          : "opacity-0 translate-y-5"
                      }`}
                      style={{ transitionDelay: `${800 + index * 100}ms` }}
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>

              {/* CTA */}
              <div className="pt-6">
                <button
                  onClick={() =>
                    document
                      .getElementById("contact")
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                  className="group bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-3 rounded-full font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25"
                >
                  <span className="flex items-center space-x-2">
                    <span>Let's Work Together</span>
                    <div className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300">
                      →
                    </div>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Achievements Grid */}
        <div
          className={`mt-20 transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <div
                key={achievement.label}
                className={`relative group transition-all duration-300 hover:scale-105 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-5"
                }`}
                style={{ transitionDelay: `${900 + index * 150}ms` }}
              >
                <div
                  className={`absolute -inset-1 bg-gradient-to-r ${achievement.color} rounded-xl blur opacity-25 group-hover:opacity-75 transition-opacity duration-300`}
                ></div>
                <div className="relative glass-effect rounded-xl p-6 text-center">
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${achievement.color} rounded-lg flex items-center justify-center mx-auto mb-4`}
                  >
                    <achievement.icon size={24} className="text-white" />
                  </div>
                  <div className="text-2xl font-bold text-white mb-2">
                    {achievement.value}
                  </div>
                  <div className="text-gray-400 text-sm">
                    {achievement.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Quote */}
        <div
          className={`mt-16 text-center transition-all duration-1000 delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <blockquote className="text-xl md:text-2xl text-gray-300 italic max-w-3xl mx-auto">
            "The best mobile apps don't just solve problems—they create
            experiences that users fall in love with."
          </blockquote>
          <cite className="block mt-4 text-purple-400 font-medium">
            - My Development Philosophy
          </cite>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-20 right-10 w-20 h-20 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-xl animate-pulse-slow"></div>
      <div
        className="absolute bottom-20 left-10 w-32 h-32 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-xl animate-pulse-slow"
        style={{ animationDelay: "2s" }}
      ></div>
    </section>
  );
};

export default About;
