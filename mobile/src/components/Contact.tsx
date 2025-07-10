"use client";

import { useEffect, useRef, useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Github,
  Linkedin,
  Twitter,
  MessageCircle,
  Calendar,
  Coffee,
  CheckCircle,
  AlertCircle,
  Clock,
  Globe,
} from "lucide-react";

const Contact = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
    projectType: "mobile-app",
    budget: "discuss",
    timeline: "flexible",
  });
  const [formStatus, setFormStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "alex@alexchen.dev",
      description: "Best way to reach me",
      color: "from-red-500 to-pink-500",
      action: "mailto:alex@alexchen.dev",
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+1 (555) 123-4567",
      description: "Available 9 AM - 6 PM PST",
      color: "from-green-500 to-emerald-500",
      action: "tel:+15551234567",
    },
    {
      icon: MapPin,
      title: "Location",
      value: "San Francisco, CA",
      description: "Open to remote work",
      color: "from-blue-500 to-cyan-500",
      action: "#",
    },
    {
      icon: Calendar,
      title: "Schedule Call",
      value: "Book a Meeting",
      description: "Free 30-min consultation",
      color: "from-purple-500 to-pink-500",
      action: "https://calendly.com/alexchen",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      name: "GitHub",
      handle: "@alexchen-dev",
      url: "https://github.com/alexchen-dev",
      color: "hover:text-gray-400",
    },
    {
      icon: Linkedin,
      name: "LinkedIn",
      handle: "/in/alexchen-mobile",
      url: "https://linkedin.com/in/alexchen-mobile",
      color: "hover:text-blue-400",
    },
    {
      icon: Twitter,
      name: "Twitter",
      handle: "@alexchen_dev",
      url: "https://twitter.com/alexchen_dev",
      color: "hover:text-cyan-400",
    },
    {
      icon: Globe,
      name: "Website",
      handle: "alexchen.dev",
      url: "https://alexchen.dev",
      color: "hover:text-purple-400",
    },
  ];

  const faqs = [
    {
      question: "What types of mobile apps do you develop?",
      answer:
        "I specialize in cross-platform apps using React Native and Flutter, as well as native iOS and Android development. My expertise covers e-commerce, healthcare, fintech, and social networking apps.",
    },
    {
      question: "How long does it take to build a mobile app?",
      answer:
        "Timeline varies based on complexity. Simple apps take 2-3 months, while complex enterprise solutions may take 6-12 months. I provide detailed project timelines during our initial consultation.",
    },
    {
      question: "Do you provide ongoing maintenance and support?",
      answer:
        "Yes! I offer comprehensive post-launch support including bug fixes, OS updates, feature enhancements, and performance monitoring to ensure your app stays current and competitive.",
    },
    {
      question: "What is your development process?",
      answer:
        "I follow an agile methodology with regular sprints, continuous communication, and iterative feedback. You'll have access to progress updates and can provide input throughout the development cycle.",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("sending");

    // Simulate form submission
    setTimeout(() => {
      if (Math.random() > 0.1) {
        // 90% success rate for demo
        setFormStatus("success");
        setFormData({
          name: "",
          email: "",
          subject: "",
          message: "",
          projectType: "mobile-app",
          budget: "discuss",
          timeline: "flexible",
        });
      } else {
        setFormStatus("error");
      }

      setTimeout(() => {
        setFormStatus("idle");
      }, 5000);
    }, 2000);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-20 lg:py-32 bg-slate-900/50"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/contact-pattern.svg')] bg-repeat"></div>
      </div>

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full border border-purple-500/30 text-purple-300 text-sm font-medium backdrop-blur-sm mb-6">
            Let's Connect
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Ready to bring your mobile app idea to life? Let's discuss your
            project and create something amazing together.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="glass-effect rounded-2xl p-8">
              <div className="flex items-center space-x-3 mb-6">
                <MessageCircle className="text-purple-400" size={24} />
                <h3 className="text-2xl font-bold text-white">Send Message</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name & Email */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="name"
                      className="block text-gray-300 text-sm font-medium mb-2"
                    >
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-slate-800/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block text-gray-300 text-sm font-medium mb-2"
                    >
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-slate-800/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                {/* Project Type & Budget */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="projectType"
                      className="block text-gray-300 text-sm font-medium mb-2"
                    >
                      Project Type
                    </label>
                    <select
                      id="projectType"
                      name="projectType"
                      value={formData.projectType}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-800/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white transition-all duration-300"
                    >
                      <option value="mobile-app">Mobile App</option>
                      <option value="web-app">Web Application</option>
                      <option value="consulting">Consulting</option>
                      <option value="maintenance">App Maintenance</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div>
                    <label
                      htmlFor="budget"
                      className="block text-gray-300 text-sm font-medium mb-2"
                    >
                      Budget Range
                    </label>
                    <select
                      id="budget"
                      name="budget"
                      value={formData.budget}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-slate-800/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white transition-all duration-300"
                    >
                      <option value="discuss">Let's Discuss</option>
                      <option value="5k-15k">$5,000 - $15,000</option>
                      <option value="15k-50k">$15,000 - $50,000</option>
                      <option value="50k-100k">$50,000 - $100,000</option>
                      <option value="100k+">$100,000+</option>
                    </select>
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-gray-300 text-sm font-medium mb-2"
                  >
                    Subject *
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-slate-800/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300"
                    placeholder="Brief description of your project"
                  />
                </div>

                {/* Message */}
                <div>
                  <label
                    htmlFor="message"
                    className="block text-gray-300 text-sm font-medium mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-slate-800/50 border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent text-white placeholder-gray-400 transition-all duration-300 resize-none"
                    placeholder="Tell me more about your project, goals, and requirements..."
                  ></textarea>
                </div>

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={formStatus === "sending"}
                  className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 disabled:from-gray-600 disabled:to-gray-700 text-white font-semibold py-4 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 disabled:scale-100 disabled:shadow-none flex items-center justify-center space-x-2"
                >
                  {formStatus === "sending" ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                {/* Status Messages */}
                {formStatus === "success" && (
                  <div className="flex items-center space-x-2 p-4 bg-green-500/20 border border-green-500/30 rounded-lg text-green-400">
                    <CheckCircle size={18} />
                    <span>
                      Message sent successfully! I'll get back to you within 24
                      hours.
                    </span>
                  </div>
                )}

                {formStatus === "error" && (
                  <div className="flex items-center space-x-2 p-4 bg-red-500/20 border border-red-500/30 rounded-lg text-red-400">
                    <AlertCircle size={18} />
                    <span>
                      Failed to send message. Please try again or contact me
                      directly.
                    </span>
                  </div>
                )}
              </form>
            </div>
          </div>

          {/* Contact Info & Social */}
          <div
            className={`transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            {/* Contact Methods */}
            <div className="space-y-6 mb-12">
              {contactInfo.map((info, index) => (
                <a
                  key={info.title}
                  href={info.action}
                  target={info.action.startsWith("http") ? "_blank" : "_self"}
                  rel={
                    info.action.startsWith("http") ? "noopener noreferrer" : ""
                  }
                  className={`block glass-effect rounded-xl p-6 transition-all duration-300 card-hover group ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-5"
                  }`}
                  style={{ transitionDelay: `${700 + index * 100}ms` }}
                >
                  <div className="flex items-center space-x-4">
                    <div
                      className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}
                    >
                      <info.icon size={20} className="text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-white font-semibold mb-1">
                        {info.title}
                      </h4>
                      <p className="text-purple-400 font-medium">
                        {info.value}
                      </p>
                      <p className="text-gray-400 text-sm">
                        {info.description}
                      </p>
                    </div>
                  </div>
                </a>
              ))}
            </div>

            {/* Social Links */}
            <div
              className={`glass-effect rounded-xl p-6 mb-8 transition-all duration-1000 delay-1000 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <h4 className="text-white font-semibold mb-4 flex items-center">
                <Coffee className="mr-2 text-yellow-400" size={20} />
                Let's Connect
              </h4>
              <div className="space-y-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center space-x-3 text-gray-300 ${social.color} transition-all duration-300 hover:translate-x-2 group`}
                  >
                    <social.icon size={18} />
                    <div>
                      <span className="font-medium">{social.name}</span>
                      <span className="text-gray-400 text-sm ml-2">
                        {social.handle}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* Availability Status */}
            <div
              className={`glass-effect rounded-xl p-6 transition-all duration-1000 delay-1200 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
            >
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></div>
                <span className="text-green-400 font-medium">
                  Available for New Projects
                </span>
              </div>
              <p className="text-gray-400 text-sm mb-3">
                Currently accepting new mobile development projects for Q2 2024.
              </p>
              <div className="flex items-center space-x-2 text-gray-400 text-sm">
                <Clock size={14} />
                <span>Response time: Usually within 24 hours</span>
              </div>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div
          className={`mt-20 max-w-4xl mx-auto transition-all duration-1000 delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <h3 className="text-2xl font-bold text-white text-center mb-8">
            Frequently Asked Questions
          </h3>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <details key={index} className="glass-effect rounded-xl group">
                <summary className="p-6 cursor-pointer text-white font-medium hover:text-purple-400 transition-colors duration-300">
                  {faq.question}
                </summary>
                <div className="px-6 pb-6 text-gray-400 leading-relaxed">
                  {faq.answer}
                </div>
              </details>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-32 left-16 w-20 h-20 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-full blur-xl animate-pulse-slow"></div>
      <div
        className="absolute bottom-32 right-16 w-24 h-24 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 rounded-full blur-xl animate-pulse-slow"
        style={{ animationDelay: "2s" }}
      ></div>
    </section>
  );
};

export default Contact;
