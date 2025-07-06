"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Code2,
  Database,
  Smartphone,
  Cloud,
  Zap,
  Users,
  Award,
  Coffee,
  Calendar,
  MapPin,
} from "lucide-react";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const About = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const [counters, setCounters] = useState({
    experience: 0,
    projects: 0,
    clients: 0,
    coffees: 0,
  });

  const stats = [
    {
      key: "experience",
      icon: Calendar,
      label: "Years Experience",
      value: 5,
      suffix: "+",
    },
    {
      key: "projects",
      icon: Code2,
      label: "Projects Completed",
      value: 50,
      suffix: "+",
    },
    {
      key: "clients",
      icon: Users,
      label: "Happy Clients",
      value: 30,
      suffix: "+",
    },
    {
      key: "coffees",
      icon: Coffee,
      label: "Cups of Coffee",
      value: 1000,
      suffix: "+",
    },
  ];

  const expertise = [
    {
      icon: Code2,
      title: "Frontend Development",
      description:
        "Creating responsive and interactive user interfaces with React, Next.js, and modern CSS frameworks.",
      technologies: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    },
    {
      icon: Database,
      title: "Backend Development",
      description:
        "Building robust server-side applications with Node.js, Python, and various database technologies.",
      technologies: ["Node.js", "Python", "PostgreSQL", "MongoDB"],
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps",
      description:
        "Deploying and managing applications on cloud platforms with modern DevOps practices.",
      technologies: ["AWS", "Docker", "Kubernetes", "CI/CD"],
    },
    {
      icon: Smartphone,
      title: "Mobile Development",
      description:
        "Creating cross-platform mobile applications with React Native and modern mobile technologies.",
      technologies: ["React Native", "Expo", "iOS", "Android"],
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        titleRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Image animation with 3D effect
      gsap.fromTo(
        imageRef.current,
        { rotationY: -30, x: -100, opacity: 0 },
        {
          rotationY: 0,
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: imageRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Content animation
      gsap.fromTo(
        contentRef.current,
        { x: 100, opacity: 0 },
        {
          x: 0,
          opacity: 1,
          duration: 1.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: contentRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Stats counter animation
      gsap.fromTo(
        statsRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: statsRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
            onEnter: () => {
              // Animate counters
              stats.forEach((stat) => {
                gsap.to(counters, {
                  [stat.key]: stat.value,
                  duration: 2,
                  ease: "power2.out",
                  onUpdate: () => {
                    setCounters({ ...counters });
                  },
                });
              });
            },
          },
        }
      );

      // Cards stagger animation
      const cards = cardsRef.current?.children;
      if (cards) {
        gsap.fromTo(
          cards,
          { y: 50, opacity: 0, scale: 0.9 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.2,
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Parallax effect for image
      gsap.to(imageRef.current, {
        y: -50,
        ease: "none",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative py-20 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-20 w-40 h-40 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" />
        <div className="absolute bottom-1/4 -right-20 w-40 h-40 bg-cyan-500 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-pulse" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent mb-4">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full" />
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          {/* Image Section */}
          <div ref={imageRef} className="relative perspective-1000">
            <div className="relative group">
              {/* Placeholder for profile image */}
              <div className="relative w-full aspect-square max-w-md mx-auto bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-2xl overflow-hidden backdrop-blur-sm border border-white/10">
                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-cyan-500/10" />
                <div className="flex items-center justify-center h-full">
                  <div className="text-center text-white/60">
                    <div className="w-32 h-32 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-cyan-500 rounded-full flex items-center justify-center text-4xl font-bold text-white">
                      AC
                    </div>
                    <p className="text-lg">Profile Photo</p>
                  </div>
                </div>
              </div>

              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-purple-500 to-pink-500 rounded-full opacity-20 blur-lg group-hover:scale-110 transition-transform duration-500" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full opacity-20 blur-lg group-hover:scale-110 transition-transform duration-500 delay-100" />
            </div>
          </div>

          {/* Content Section */}
          <div ref={contentRef} className="space-y-6">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-6">
              Full Stack Developer &
              <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                {" "}
                Tech Enthusiast
              </span>
            </h3>

            <div className="space-y-4 text-gray-300 text-lg leading-relaxed">
              <p>
                I'm a passionate full-stack developer with {stats[0].value}+
                years of experience creating digital solutions that make a
                difference. My journey in technology started with a curiosity
                about how things work, and it has evolved into a career
                dedicated to building exceptional user experiences.
              </p>

              <p>
                I specialize in modern web technologies and have a strong
                foundation in both frontend and backend development. I believe
                in writing clean, maintainable code and staying up-to-date with
                the latest industry trends and best practices.
              </p>

              <p>
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects, or sharing knowledge with
                the developer community.
              </p>
            </div>

            {/* Quick info */}
            <div className="flex flex-wrap gap-4 pt-4">
              <div className="flex items-center gap-2 text-gray-400">
                <MapPin className="w-4 h-4" />
                <span>San Francisco, CA</span>
              </div>
              <div className="flex items-center gap-2 text-gray-400">
                <Award className="w-4 h-4" />
                <span>Available for Projects</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div
          ref={statsRef}
          className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-20"
        >
          {stats.map(({ key, icon: Icon, label, value, suffix }) => (
            <div key={key} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-2xl mb-4 group-hover:scale-110 transition-transform duration-300">
                <Icon className="w-8 h-8 text-purple-400" />
              </div>
              <div className="text-3xl lg:text-4xl font-bold text-white mb-2">
                {Math.floor(counters[key as keyof typeof counters])}
                {suffix}
              </div>
              <div className="text-gray-400 text-sm font-medium">{label}</div>
            </div>
          ))}
        </div>

        {/* Expertise Cards */}
        <div ref={cardsRef} className="grid md:grid-cols-2 gap-8">
          {expertise.map((item, index) => (
            <div
              key={index}
              className="group p-8 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/10 hover:border-purple-500/30 transition-all duration-500 hover:transform hover:scale-105"
            >
              <div className="flex items-center mb-6">
                <div className="p-3 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 rounded-xl group-hover:from-purple-500/30 group-hover:to-cyan-500/30 transition-all duration-300">
                  <item.icon className="w-6 h-6 text-purple-400" />
                </div>
                <h4 className="text-xl font-bold text-white ml-4">
                  {item.title}
                </h4>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                {item.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {item.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm bg-gradient-to-r from-purple-500/20 to-cyan-500/20 text-purple-200 rounded-full border border-purple-500/30"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
