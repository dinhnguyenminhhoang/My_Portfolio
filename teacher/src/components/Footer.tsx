"use client";

import { cn } from "@/utils/cn";
import { useInView } from "framer-motion";
import { gsap } from "gsap";
import {
    ArrowUp,
    Award,
    BookOpen,
    Briefcase,
    Calendar,
    CheckCircle,
    Clock,
    ExternalLink,
    Facebook,
    Globe,
    Heart,
    Instagram,
    Linkedin,
    Mail,
    MapPin,
    MessageCircle,
    Music,
    Phone,
    Send,
    Sparkles,
    Star,
    Target,
    TrendingUp,
    Trophy,
    Twitter,
    Users,
    Youtube,
    Zap
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

const footerLinks = {
  services: [
    { name: "IELTS Preparation", href: "#services", icon: Target },
    { name: "Business English", href: "#services", icon: Briefcase },
    { name: "Conversational English", href: "#services", icon: MessageCircle },
    { name: "Group Classes", href: "#services", icon: Users },
    { name: "Online Courses", href: "#services", icon: Globe },
    { name: "Intensive Programs", href: "#services", icon: Zap },
  ],
  resources: [
    { name: "Free Learning Materials", href: "#", icon: BookOpen },
    { name: "Grammar Guide", href: "#", icon: CheckCircle },
    { name: "Pronunciation Tips", href: "#", icon: Music },
    { name: "IELTS Practice Tests", href: "#", icon: Award },
    { name: "Study Schedule Template", href: "#", icon: Calendar },
    { name: "Progress Tracker", href: "#", icon: TrendingUp },
  ],
  about: [
    { name: "Teaching Philosophy", href: "#about", icon: Heart },
    { name: "Experience & Qualifications", href: "#experience", icon: Star },
    { name: "Student Success Stories", href: "#testimonials", icon: Users },
    { name: "Teaching Methodology", href: "#about", icon: Zap },
    { name: "Why Choose Me", href: "#about", icon: CheckCircle },
    { name: "Book Consultation", href: "#contact", icon: Calendar },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy", icon: ExternalLink },
    { name: "Terms of Service", href: "/terms", icon: ExternalLink },
    { name: "Refund Policy", href: "/refund", icon: ExternalLink },
    { name: "Student Rights", href: "/rights", icon: ExternalLink },
    { name: "Accessibility", href: "/accessibility", icon: ExternalLink },
    { name: "Contact Support", href: "#contact", icon: Mail },
  ],
};

const socialLinks = [
  {
    name: "Facebook",
    icon: Facebook,
    href: "https://facebook.com/englishwithsarah",
    color: "hover:text-blue-600",
    gradient: "from-blue-500 to-blue-600",
    followers: "2.5K",
  },
  {
    name: "Instagram",
    icon: Instagram,
    href: "https://instagram.com/englishwithsarah",
    color: "hover:text-pink-600",
    gradient: "from-pink-500 to-red-500",
    followers: "5.2K",
  },
  {
    name: "LinkedIn",
    icon: Linkedin,
    href: "https://linkedin.com/in/sarahjohnsonenglish",
    color: "hover:text-blue-700",
    gradient: "from-blue-600 to-blue-700",
    followers: "3.1K",
  },
  {
    name: "YouTube",
    icon: Youtube,
    href: "https://youtube.com/englishwithsarah",
    color: "hover:text-red-600",
    gradient: "from-red-500 to-red-600",
    followers: "8.7K",
  },
  {
    name: "Twitter",
    icon: Twitter,
    href: "https://twitter.com/englishwsarah",
    color: "hover:text-blue-500",
    gradient: "from-blue-400 to-blue-500",
    followers: "1.8K",
  },
];

const achievements = [
  {
    icon: Users,
    value: "500+",
    label: "Students Taught",
    description: "Across 25+ countries",
  },
  {
    icon: Star,
    value: "4.9/5",
    label: "Average Rating",
    description: "Student satisfaction",
  },
  {
    icon: Award,
    value: "15+",
    label: "Certifications",
    description: "Professional credentials",
  },
  {
    icon: Globe,
    value: "25+",
    label: "Countries",
    description: "Global reach",
  },
];

const testimonialQuotes = [
  "Sarah transformed my English in just 3 months!",
  "The best English teacher I've ever had.",
  "IELTS band 8.5 thanks to her guidance.",
  "Professional and incredibly effective methods.",
];

const quickActions = [
  {
    name: "Book Free Trial",
    href: "#contact",
    icon: Calendar,
    color: "from-blue-500 to-purple-600",
  },
  {
    name: "Download Materials",
    href: "#resources",
    icon: BookOpen,
    color: "from-purple-500 to-pink-600",
  },
  {
    name: "Join Community",
    href: "#community",
    icon: Users,
    color: "from-pink-500 to-red-500",
  },
  {
    name: "Get Support",
    href: "#contact",
    icon: MessageCircle,
    color: "from-cyan-500 to-blue-500",
  },
];

export default function Footer() {
  const [isMounted, setIsMounted] = useState(false);
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);

  const footerRef = useRef<HTMLElement>(null);
  const newsletterRef = useRef<HTMLDivElement>(null);
  const socialRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(footerRef, { once: true, margin: "-100px" });

  // Fixed positions for sparkles to avoid hydration mismatch
  const sparklePositions = [
    { left: 8, top: 12, size: 16, delay: 0.5 },
    { left: 92, top: 18, size: 20, delay: 1.2 },
    { left: 25, top: 85, size: 14, delay: 0.8 },
    { left: 75, top: 8, size: 18, delay: 1.5 },
    { left: 15, top: 65, size: 12, delay: 0.3 },
    { left: 85, top: 75, size: 22, delay: 1.8 },
    { left: 45, top: 25, size: 16, delay: 0.7 },
    { left: 65, top: 90, size: 14, delay: 1.3 },
    { left: 35, top: 45, size: 20, delay: 0.9 },
    { left: 55, top: 15, size: 18, delay: 1.7 },
    { left: 5, top: 55, size: 12, delay: 0.4 },
    { left: 95, top: 35, size: 16, delay: 1.1 },
  ];

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (!isInView || !isMounted) return;

    const ctx = gsap.context(() => {
      // Footer sections stagger animation
      const footerSections =
        footerRef.current?.querySelectorAll(".footer-section");
      if (footerSections) {
        gsap.fromTo(
          footerSections,
          {
            opacity: 0,
            y: 60,
            scale: 0.95,
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            ease: "power2.out",
            stagger: 0.15,
            scrollTrigger: {
              trigger: footerRef.current,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Newsletter animation
      gsap.fromTo(
        newsletterRef.current,
        {
          opacity: 0,
          scale: 0.9,
          y: 40,
        },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 1,
          ease: "back.out(1.7)",
          delay: 0.5,
          scrollTrigger: {
            trigger: newsletterRef.current,
            start: "top 90%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Social links animation
      const socialItems = socialRef.current?.querySelectorAll(".social-item");
      if (socialItems) {
        gsap.fromTo(
          socialItems,
          {
            opacity: 0,
            scale: 0,
            rotation: -45,
          },
          {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 0.6,
            ease: "back.out(1.7)",
            stagger: 0.1,
            delay: 0.8,
            scrollTrigger: {
              trigger: socialRef.current,
              start: "top 90%",
              toggleActions: "play none none reverse",
            },
          }
        );
      }

      // Floating sparkles animation
      gsap.to(".sparkle", {
        y: -15,
        x: 5,
        rotation: 180,
        duration: 4,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.3,
      });

      // Parallax background elements
      gsap.to(".parallax-bg", {
        yPercent: -20,
        ease: "none",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      // Magnetic hover effects for interactive elements
      const magneticElements =
        footerRef.current?.querySelectorAll(".magnetic-element");
      magneticElements?.forEach((element) => {
        const magnetic = element as HTMLElement;

        magnetic.addEventListener("mouseenter", () => {
          gsap.to(magnetic, {
            scale: 1.05,
            duration: 0.3,
            ease: "power2.out",
          });
        });

        magnetic.addEventListener("mouseleave", () => {
          gsap.to(magnetic, {
            scale: 1,
            x: 0,
            y: 0,
            duration: 0.3,
            ease: "power2.out",
          });
        });
      });
    }, footerRef);

    return () => ctx.revert();
  }, [isInView, isMounted]);

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubscribed(true);
      setEmail("");
      setTimeout(() => setIsSubscribed(false), 3000);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer
      ref={footerRef}
      className="relative bg-gradient-to-br from-slate-900 via-blue-900 to-purple-900 text-white overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Gradient orbs */}
        <div className="parallax-bg absolute top-20 left-20 w-96 h-96 rounded-full bg-gradient-to-r from-blue-400/10 to-purple-400/10 blur-3xl" />
        <div className="parallax-bg absolute bottom-40 right-20 w-80 h-80 rounded-full bg-gradient-to-r from-purple-400/10 to-pink-400/10 blur-3xl" />

        {/* Floating sparkles */}
        {isMounted &&
          sparklePositions.map((sparkle, i) => (
            <div
              key={i}
              className="sparkle absolute"
              style={{
                left: `${sparkle.left}%`,
                top: `${sparkle.top}%`,
                fontSize: `${sparkle.size}px`,
                animationDelay: `${sparkle.delay}s`,
              }}
            >
              <Sparkles className="text-yellow-300/30" />
            </div>
          ))}

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:50px_50px]" />
      </div>

      <div className="relative z-10">
        {/* Newsletter Section */}
        <div
          ref={newsletterRef}
          className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 py-16"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <Sparkles className="w-16 h-16 mx-auto mb-6 text-yellow-300" />
            <h3 className="text-3xl lg:text-4xl font-bold mb-4">
              Join 1000+ Students Learning English!
            </h3>
            <p className="text-blue-100 text-lg mb-8 max-w-2xl mx-auto">
              Get free learning materials, study tips, and exclusive content
              delivered to your inbox weekly
            </p>

            <form
              onSubmit={handleNewsletterSubmit}
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email address"
                className="flex-1 px-6 py-4 rounded-2xl bg-white/20 backdrop-blur-sm border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50"
                required
              />
              <button
                type="submit"
                className="px-8 py-4 bg-white text-blue-600 rounded-2xl font-bold hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 magnetic-element"
                disabled={isSubscribed}
              >
                {isSubscribed ? (
                  <>
                    <CheckCircle className="w-5 h-5" />
                    Subscribed!
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    Subscribe
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Main Footer Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-12">
          {/* Top Section */}
          <div className="grid lg:grid-cols-5 gap-12 mb-16">
            {/* Brand Section */}
            <div className="footer-section lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl shadow-lg">
                  <BookOpen className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold">Sarah Johnson</h3>
                  <p className="text-blue-300">English Teacher & Coach</p>
                </div>
              </div>

              <p className="text-gray-300 mb-6 leading-relaxed">
                Transforming lives through personalized English education. Join
                hundreds of successful students who achieved their dreams with
                proven teaching methods.
              </p>

              {/* Contact Info */}
              <div className="space-y-3 mb-8">
                <div className="flex items-center gap-3 text-gray-300">
                  <Mail className="w-5 h-5 text-blue-400" />
                  <span>sarah@englishwithsarah.com</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Phone className="w-5 h-5 text-green-400" />
                  <span>+44 20 7123 4567</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <MapPin className="w-5 h-5 text-red-400" />
                  <span>London, United Kingdom</span>
                </div>
                <div className="flex items-center gap-3 text-gray-300">
                  <Clock className="w-5 h-5 text-purple-400" />
                  <span>Mon-Fri: 9AM-6PM GMT</span>
                </div>
              </div>

              {/* Quick Actions */}
              <div className="grid grid-cols-2 gap-3">
                {quickActions.map((action, index) => (
                  <button
                    key={action.name}
                    className={cn(
                      "flex items-center gap-2 px-4 py-3 rounded-xl text-white text-sm font-semibold transition-all duration-300 magnetic-element",
                      `bg-gradient-to-r ${action.color}`,
                      "hover:shadow-lg transform hover:scale-105"
                    )}
                  >
                    <action.icon className="w-4 h-4" />
                    {action.name}
                  </button>
                ))}
              </div>
            </div>

            {/* Services Links */}
            <div className="footer-section">
              <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Target className="w-6 h-6 text-blue-400" />
                Services
              </h4>
              <ul className="space-y-3">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300 group"
                    >
                      <link.icon className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform duration-300" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources Links */}
            <div className="footer-section">
              <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
                <BookOpen className="w-6 h-6 text-green-400" />
                Resources
              </h4>
              <ul className="space-y-3">
                {footerLinks.resources.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300 group"
                    >
                      <link.icon className="w-4 h-4 text-green-400 group-hover:scale-110 transition-transform duration-300" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* About Links */}
            <div className="footer-section">
              <h4 className="text-xl font-bold mb-6 flex items-center gap-2">
                <Heart className="w-6 h-6 text-pink-400" />
                About
              </h4>
              <ul className="space-y-3">
                {footerLinks.about.map((link) => (
                  <li key={link.name}>
                    <a
                      href={link.href}
                      className="flex items-center gap-3 text-gray-300 hover:text-white transition-colors duration-300 group"
                    >
                      <link.icon className="w-4 h-4 text-pink-400 group-hover:scale-110 transition-transform duration-300" />
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Achievements & Testimonials Section */}
          <div className="bg-white/5 backdrop-blur-sm rounded-3xl p-8 mb-12 border border-white/10">
            <div className="grid md:grid-cols-2 gap-12">
              {/* Achievements */}
              <div>
                <h4 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <Trophy className="w-6 h-6 text-yellow-400" />
                  Achievements
                </h4>
                <div className="grid grid-cols-2 gap-6">
                  {achievements.map((achievement, index) => (
                    <div
                      key={achievement.label}
                      className="text-center magnetic-element group"
                    >
                      <div className="w-16 h-16 mx-auto mb-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300">
                        <achievement.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="text-2xl font-bold text-white mb-1">
                        {achievement.value}
                      </div>
                      <div className="text-sm font-semibold text-gray-300 mb-1">
                        {achievement.label}
                      </div>
                      <div className="text-xs text-gray-400">
                        {achievement.description}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Quick Testimonials */}
              <div>
                <h4 className="text-2xl font-bold mb-6 flex items-center gap-2">
                  <MessageCircle className="w-6 h-6 text-blue-400" />
                  Student Voices
                </h4>
                <div className="space-y-4">
                  {testimonialQuotes.map((quote, index) => (
                    <div
                      key={index}
                      className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 magnetic-element hover:bg-white/15 transition-all duration-300"
                    >
                      <p className="text-gray-200 italic mb-2">"{quote}"</p>
                      <div className="flex justify-between items-center">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-4 h-4 text-yellow-400 fill-current"
                            />
                          ))}
                        </div>
                        <span className="text-xs text-gray-400">
                          Verified Student
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Social Media & Legal Section */}
          <div className="border-t border-white/10 pt-8">
            <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
              {/* Social Links */}
              <div ref={socialRef} className="flex items-center gap-6">
                <span className="text-gray-300 font-semibold">Follow me:</span>
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-item magnetic-element group relative"
                  >
                    <div
                      className={cn(
                        "w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-300",
                        `bg-gradient-to-r ${social.gradient}`,
                        "hover:shadow-xl transform hover:scale-110"
                      )}
                    >
                      <social.icon className="w-6 h-6 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 bg-white text-xs font-bold text-gray-800 px-2 py-1 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      {social.followers}
                    </div>
                  </a>
                ))}
              </div>

              {/* Legal Links */}
              <div className="flex flex-wrap justify-center gap-6 text-sm">
                {footerLinks.legal.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-1"
                  >
                    {link.name}
                    <link.icon className="w-3 h-3" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-white/10 mt-8 pt-8 text-center">
            <p className="text-gray-400 mb-4">
              © 2024 Sarah Johnson English Teaching. All rights reserved. Made
              with <Heart className="w-4 h-4 inline text-red-400" /> for English
              learners worldwide.
            </p>
            <p className="text-gray-500 text-sm">
              Empowering students to achieve their English language goals since
              2015
            </p>
          </div>
        </div>
      </div>

      {/* Back to Top Button */}
      <button
        onClick={scrollToTop}
        className="fixed bottom-8 right-8 w-14 h-14 bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 magnetic-element z-50 group"
        aria-label="Scroll to top"
      >
        <ArrowUp className="w-6 h-6 mx-auto group-hover:scale-110 transition-transform duration-300" />
      </button>
    </footer>
  );
}
