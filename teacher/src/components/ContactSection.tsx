"use client";

import { useState, useEffect, useRef } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import { gsap } from "gsap";
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  CheckCircle,
  Calendar,
  MessageCircle,
  Video,
  Globe,
  Star,
  Users,
  Zap,
  Shield,
  Heart,
  Sparkles,
  ArrowRight,
  ExternalLink,
} from "lucide-react";
import { cn, fadeInUp, staggerChildren } from "@/utils/cn";

const contactMethods = [
  {
    icon: Mail,
    title: "Email",
    value: "sarah@englishwithsarah.com",
    description: "Get a response within 2 hours",
    color: "from-blue-500 to-cyan-500",
    action: "mailto:sarah@englishwithsarah.com",
  },
  {
    icon: Phone,
    title: "Phone",
    value: "+44 20 7946 0958",
    description: "Available Mon-Fri, 9AM-6PM GMT",
    color: "from-green-500 to-emerald-500",
    action: "tel:+442079460958",
  },
  {
    icon: Video,
    title: "Video Call",
    value: "Book Consultation",
    description: "Free 15-minute discovery call",
    color: "from-purple-500 to-pink-500",
    action: "#",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    value: "Chat Now",
    description: "Quick questions & support",
    color: "from-green-400 to-green-600",
    action: "https://wa.me/442079460958",
  },
];

const timeSlots = [
  { time: "9:00 AM", available: true },
  { time: "10:30 AM", available: false },
  { time: "12:00 PM", available: true },
  { time: "2:00 PM", available: true },
  { time: "3:30 PM", available: false },
  { time: "5:00 PM", available: true },
];

const faqItems = [
  {
    question: "How do I book my first lesson?",
    answer:
      "Simply fill out the contact form or book a free consultation call. We'll discuss your goals and create a personalized learning plan.",
  },
  {
    question: "What's included in the free consultation?",
    answer:
      "A 15-minute video call to assess your current level, understand your goals, and recommend the best learning path for you.",
  },
  {
    question: "Do you offer flexible scheduling?",
    answer:
      "Yes! I offer lessons 7 days a week across different time zones. We can find a schedule that works for your lifestyle.",
  },
  {
    question: "What if I need to reschedule a lesson?",
    answer:
      "No problem! You can reschedule up to 24 hours before your lesson with no penalty.",
  },
];

const guarantees = [
  {
    icon: Shield,
    title: "30-Day Money Back",
    description: "Not satisfied? Get a full refund within 30 days",
  },
  {
    icon: Star,
    title: "Satisfaction Guaranteed",
    description: "See improvement or your money back",
  },
  {
    icon: Users,
    title: "Personal Attention",
    description: "Every lesson is tailored to your specific needs",
  },
  {
    icon: Zap,
    title: "Fast Results",
    description: "Most students see improvement within 2 weeks",
  },
];

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    goal: "",
    level: "",
    message: "",
    preferredTime: "",
    urgency: "flexible",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedSlot, setSelectedSlot] = useState("");
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const sectionRef = useRef<HTMLElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const mapRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  useEffect(() => {
    if (!isInView) return;

    const ctx = gsap.context(() => {
      // Form entrance animation
      gsap.fromTo(
        ".contact-form",
        {
          opacity: 0,
          y: 60,
          rotationX: 15,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          rotationX: 0,
          scale: 1,
          duration: 1,
          ease: "power3.out",
        }
      );

      // Contact methods animation
      gsap.fromTo(
        ".contact-method",
        { opacity: 0, x: -30, scale: 0.9 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 0.8,
          ease: "power2.out",
          stagger: 0.1,
        }
      );

      // Map animation
      gsap.fromTo(
        ".contact-map",
        { opacity: 0, scale: 0.8, rotationY: 15 },
        {
          opacity: 1,
          scale: 1,
          rotationY: 0,
          duration: 1,
          ease: "power3.out",
          delay: 0.3,
        }
      );

      // Floating animation for contact cards
      gsap.to(".floating-contact", {
        y: -8,
        duration: 2.5,
        ease: "power1.inOut",
        yoyo: true,
        repeat: -1,
        stagger: 0.3,
      });

      // Guarantee cards animation
      gsap.fromTo(
        ".guarantee-card",
        { opacity: 0, y: 30, scale: 0.9 },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: "back.out(1.7)",
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".guarantees-container",
            start: "top 85%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [isInView]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Auto-hide success message
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-24 lg:py-32 overflow-hidden bg-gradient-to-b from-white via-blue-50/30 to-purple-50/30 dark:from-gray-800 dark:via-gray-900/50 dark:to-gray-900"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-20 w-96 h-96 rounded-full bg-gradient-to-r from-blue-400/15 to-purple-400/15 blur-3xl animate-pulse" />
        <div className="absolute bottom-40 right-20 w-80 h-80 rounded-full bg-gradient-to-r from-purple-400/15 to-pink-400/15 blur-3xl animate-pulse" />

        {/* Floating contact icons */}
        {[Mail, Phone, MessageCircle, Video].map((Icon, i) => (
          <motion.div
            key={i}
            className="absolute text-4xl text-blue-200/20 dark:text-blue-800/20"
            style={{
              left: `${15 + i * 20}%`,
              top: `${10 + i * 15}%`,
            }}
            animate={{
              y: [-15, 15, -15],
              rotate: [-10, 10, -10],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Icon className="w-8 h-8" />
          </motion.div>
        ))}

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={staggerChildren}
          className="text-center mb-20"
        >
          <motion.div
            variants={fadeInUp}
            className="inline-flex items-center px-6 py-3 rounded-full bg-gradient-to-r from-blue-100 to-purple-100 dark:from-blue-900/30 dark:to-purple-900/30 text-blue-600 dark:text-blue-400 text-sm font-semibold mb-8"
          >
            <Heart className="w-4 h-4 mr-2" />
            Let's Start Your Journey
          </motion.div>

          <motion.h2
            variants={fadeInUp}
            className="text-5xl lg:text-7xl font-black text-gray-900 dark:text-white mb-8"
          >
            Ready to{" "}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Transform
            </span>{" "}
            Your English?
          </motion.h2>

          <motion.p
            variants={fadeInUp}
            className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto"
          >
            Book your free consultation today and discover how personalized
            English coaching can accelerate your learning journey and unlock new
            opportunities.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-2">
            <motion.div
              className="contact-form bg-white/70 dark:bg-gray-800/70 backdrop-blur-xl rounded-3xl p-8 lg:p-12 shadow-2xl border border-white/50 dark:border-gray-700/50"
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
            >
              {/* Form Header */}
              <div className="mb-8">
                <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                  Book Your Free Consultation
                </h3>
                <p className="text-gray-600 dark:text-gray-300">
                  Tell me about your goals and I'll create a personalized
                  learning plan for you.
                </p>
              </div>

              {/* Success Message */}
              <AnimatePresence>
                {isSubmitted && (
                  <motion.div
                    initial={{ opacity: 0, y: -20, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -20, scale: 0.95 }}
                    className="mb-8 p-6 bg-gradient-to-r from-green-100 to-emerald-100 dark:from-green-900/30 dark:to-emerald-900/30 border border-green-200 dark:border-green-700 rounded-2xl"
                  >
                    <div className="flex items-center gap-3">
                      <CheckCircle className="w-6 h-6 text-green-600 dark:text-green-400" />
                      <div>
                        <h4 className="font-semibold text-green-800 dark:text-green-200">
                          Message Sent Successfully!
                        </h4>
                        <p className="text-green-600 dark:text-green-300 text-sm">
                          I'll get back to you within 2 hours. Check your email
                          for confirmation.
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Personal Information */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/50 dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                      placeholder="Enter your full name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/50 dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                {/* Phone and Level */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/50 dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Current English Level *
                    </label>
                    <select
                      name="level"
                      value={formData.level}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 bg-white/50 dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                    >
                      <option value="">Select your level</option>
                      <option value="beginner">Beginner (A1-A2)</option>
                      <option value="intermediate">Intermediate (B1-B2)</option>
                      <option value="advanced">Advanced (C1-C2)</option>
                      <option value="unsure">Not sure</option>
                    </select>
                  </div>
                </div>

                {/* Learning Goal */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Primary Learning Goal *
                  </label>
                  <select
                    name="goal"
                    value={formData.goal}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/50 dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm"
                  >
                    <option value="">What's your main goal?</option>
                    <option value="conversation">
                      Improve Conversation Skills
                    </option>
                    <option value="business">Business English</option>
                    <option value="ielts">IELTS Preparation</option>
                    <option value="academic">Academic English</option>
                    <option value="travel">Travel & Daily Life</option>
                    <option value="career">Career Advancement</option>
                    <option value="other">
                      Other (please specify in message)
                    </option>
                  </select>
                </div>

                {/* Urgency */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-3">
                    How urgent is your learning goal?
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    {[
                      {
                        value: "asap",
                        label: "ASAP",
                        desc: "Need to start immediately",
                      },
                      {
                        value: "month",
                        label: "Within a month",
                        desc: "Planning to start soon",
                      },
                      {
                        value: "flexible",
                        label: "Flexible",
                        desc: "No rush, exploring options",
                      },
                    ].map((option) => (
                      <label
                        key={option.value}
                        className={cn(
                          "flex flex-col p-4 border-2 rounded-xl cursor-pointer transition-all duration-300",
                          formData.urgency === option.value
                            ? "border-blue-500 bg-blue-50 dark:bg-blue-900/20"
                            : "border-gray-300 dark:border-gray-600 hover:border-blue-300"
                        )}
                      >
                        <input
                          type="radio"
                          name="urgency"
                          value={option.value}
                          checked={formData.urgency === option.value}
                          onChange={handleInputChange}
                          className="sr-only"
                        />
                        <span className="font-semibold text-gray-900 dark:text-white">
                          {option.label}
                        </span>
                        <span className="text-sm text-gray-600 dark:text-gray-400">
                          {option.desc}
                        </span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                    Tell me more about your goals
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 bg-white/50 dark:bg-gray-700/50 border border-gray-300 dark:border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 backdrop-blur-sm resize-none"
                    placeholder="What specific challenges are you facing? What would you like to achieve? Any questions for me?"
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    "w-full py-4 px-8 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-2xl font-bold text-lg shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-3 relative overflow-hidden group",
                    isSubmitting && "opacity-50 cursor-not-allowed"
                  )}
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Sending Message...
                    </>
                  ) : (
                    <>
                      <Send className="w-6 h-6" />
                      Book Free Consultation
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}

                  {/* Button shine effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                </motion.button>
              </form>
            </motion.div>
          </div>

          {/* Contact Information Sidebar */}
          <div className="lg:col-span-1 space-y-8">
            {/* Contact Methods */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
                Get In Touch
              </h3>

              <div className="space-y-4">
                {contactMethods.map((method, index) => (
                  <motion.a
                    key={method.title}
                    href={method.action}
                    className="contact-method floating-contact block group"
                    initial={{ opacity: 0, x: 20 }}
                    animate={
                      isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }
                    }
                    transition={{ delay: index * 0.1 }}
                    whileHover={{ scale: 1.02, x: 5 }}
                  >
                    <div className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 dark:border-gray-700/50 hover:shadow-xl transition-all duration-300">
                      <div className="flex items-center gap-4">
                        <div
                          className={cn(
                            "p-3 rounded-xl bg-gradient-to-r",
                            method.color,
                            "group-hover:scale-110 transition-transform duration-300"
                          )}
                        >
                          <method.icon className="w-6 h-6 text-white" />
                        </div>

                        <div className="flex-1">
                          <h4 className="font-bold text-gray-900 dark:text-white">
                            {method.title}
                          </h4>
                          <p className="text-blue-600 dark:text-blue-400 font-semibold">
                            {method.value}
                          </p>
                          <p className="text-sm text-gray-500 dark:text-gray-400">
                            {method.description}
                          </p>
                        </div>

                        <ExternalLink className="w-5 h-5 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors" />
                      </div>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>

            {/* Available Time Slots */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.5 }}
              className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 dark:border-gray-700/50"
            >
              <h4 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
                <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                Today's Availability
              </h4>

              <div className="space-y-2">
                {timeSlots.map((slot, index) => (
                  <button
                    key={slot.time}
                    onClick={() => slot.available && setSelectedSlot(slot.time)}
                    className={cn(
                      "w-full p-3 rounded-lg text-sm font-medium transition-all duration-300",
                      slot.available
                        ? selectedSlot === slot.time
                          ? "bg-blue-600 text-white shadow-lg"
                          : "bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 hover:bg-green-200 dark:hover:bg-green-900/50"
                        : "bg-gray-100 dark:bg-gray-700 text-gray-400 cursor-not-allowed"
                    )}
                    disabled={!slot.available}
                  >
                    {slot.time} {slot.available ? "✓ Available" : "✗ Booked"}
                  </button>
                ))}
              </div>

              <p className="text-xs text-gray-500 dark:text-gray-400 mt-4">
                All times shown in GMT. More slots available for tomorrow and
                beyond.
              </p>
            </motion.div>

            {/* FAQ Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.7 }}
              className="bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/50 dark:border-gray-700/50"
            >
              <h4 className="font-bold text-gray-900 dark:text-white mb-4">
                Quick Questions
              </h4>

              <div className="space-y-2">
                {faqItems.map((item, index) => (
                  <div key={index}>
                    <button
                      onClick={() =>
                        setOpenFaq(openFaq === index ? null : index)
                      }
                      className="w-full text-left p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors duration-300"
                    >
                      <span className="text-sm font-medium text-gray-900 dark:text-white">
                        {item.question}
                      </span>
                    </button>

                    <AnimatePresence>
                      {openFaq === index && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="px-3 pb-3"
                        >
                          <p className="text-sm text-gray-600 dark:text-gray-400">
                            {item.answer}
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>

        {/* Guarantees Section */}
        <motion.div
          className="guarantees-container mt-20"
          initial="initial"
          animate={isInView ? "animate" : "initial"}
          variants={staggerChildren}
        >
          <motion.h3
            variants={fadeInUp}
            className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-12"
          >
            Your Success is Guaranteed
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {guarantees.map((guarantee, index) => (
              <motion.div
                key={guarantee.title}
                className="guarantee-card text-center p-6 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm rounded-2xl shadow-lg border border-white/50 dark:border-gray-700/50"
                variants={fadeInUp}
              >
                <div className="inline-flex p-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl mb-4">
                  <guarantee.icon className="w-8 h-8 text-white" />
                </div>
                <h4 className="font-bold text-gray-900 dark:text-white mb-2">
                  {guarantee.title}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {guarantee.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
