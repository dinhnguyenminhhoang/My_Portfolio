"use client";

import { gsap } from "gsap";
import {
  CheckCircle,
  Clock,
  Facebook,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
  Star,
  Twitter,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  eventType: string;
  eventDate: string;
  budget: string;
  message: string;
}

const Contact: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const formRef = useRef<HTMLDivElement>(null);
  const infoRef = useRef<HTMLDivElement>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    eventType: "",
    eventDate: "",
    budget: "",
    message: "",
  });

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      details: "hello@flowries.com",
      description: "Send me an email anytime!",
    },
    {
      icon: Phone,
      title: "Phone",
      details: "+1 (555) 123-4567",
      description: "Call for immediate assistance",
    },
    {
      icon: MapPin,
      title: "Location",
      details: "123 Flower Street, Garden City",
      description: "Visit my studio by appointment",
    },
    {
      icon: Clock,
      title: "Hours",
      details: "Mon-Fri: 9AM-6PM",
      description: "Weekend appointments available",
    },
  ];

  const socialLinks = [
    { icon: Instagram, name: "Instagram", handle: "@flowries_design" },
    { icon: Facebook, name: "Facebook", handle: "Flowries Design" },
    { icon: Twitter, name: "Twitter", handle: "@flowries" },
  ];

  const testimonials = [
    {
      name: "Emily Rodriguez",
      text: "Sarah created the most beautiful wedding florals. Every detail was perfect!",
      rating: 5,
    },
    {
      name: "Michael Chen",
      text: "Professional, creative, and exceeded all our expectations for our corporate event.",
      rating: 5,
    },
    {
      name: "Jessica Taylor",
      text: "The bouquet for my anniversary was absolutely stunning. Highly recommend!",
      rating: 5,
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(
        titleRef.current,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Form animation
      gsap.fromTo(
        formRef.current,
        {
          x: -50,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: formRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Contact info animation
      gsap.fromTo(
        infoRef.current?.children,
        {
          x: 50,
          opacity: 0,
        },
        {
          x: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: infoRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
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
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: "",
        email: "",
        phone: "",
        eventType: "",
        eventDate: "",
        budget: "",
        message: "",
      });
    }, 3000);
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="py-20 bg-gradient-to-br from-rose-50 to-pink-50"
    >
      <div className="max-w-7xl mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            ref={titleRef}
            className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6"
          >
            Let's{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-500">
              Connect
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Ready to create something beautiful? I'd love to hear about your
            vision and bring your floral dreams to life. Get in touch today!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div ref={formRef} className="relative">
            <div className="bg-white rounded-3xl shadow-xl p-8 border border-rose-100">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Send Me a Message
              </h3>

              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 mx-auto mb-4 bg-green-100 rounded-full flex items-center justify-center">
                    <CheckCircle size={32} className="text-green-500" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-900 mb-2">
                    Message Sent!
                  </h4>
                  <p className="text-gray-600">
                    Thank you for reaching out. I'll get back to you within 24
                    hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Name & Email */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>

                  {/* Phone & Event Type */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300"
                        placeholder="+1 (555) 123-4567"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Event Type *
                      </label>
                      <select
                        name="eventType"
                        required
                        value={formData.eventType}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300"
                      >
                        <option value="">Select event type</option>
                        <option value="wedding">Wedding</option>
                        <option value="corporate">Corporate Event</option>
                        <option value="personal">Personal Celebration</option>
                        <option value="home">Home Decor</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  {/* Event Date & Budget */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Event Date
                      </label>
                      <input
                        type="date"
                        name="eventDate"
                        value={formData.eventDate}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-gray-700 mb-2">
                        Budget Range
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300"
                      >
                        <option value="">Select budget range</option>
                        <option value="under-500">Under $500</option>
                        <option value="500-1000">$500 - $1,000</option>
                        <option value="1000-2500">$1,000 - $2,500</option>
                        <option value="2500-5000">$2,500 - $5,000</option>
                        <option value="over-5000">Over $5,000</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Tell me about your vision *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={4}
                      value={formData.message}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-rose-500 focus:border-transparent transition-all duration-300 resize-none"
                      placeholder="Describe your event, style preferences, and any specific requirements..."
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-4 bg-gradient-to-r from-rose-500 to-pink-500 text-white font-semibold rounded-xl hover:from-rose-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        Send Message
                        <Send size={16} />
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>

          {/* Contact Information */}
          <div ref={infoRef} className="space-y-8">
            {/* Contact Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => {
                const IconComponent = info.icon;
                return (
                  <div
                    key={index}
                    className="bg-white rounded-2xl p-6 shadow-lg border border-rose-100 hover:shadow-xl transition-shadow duration-300"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-rose-500 to-pink-500 rounded-xl flex items-center justify-center mb-4">
                      <IconComponent size={20} className="text-white" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-2">
                      {info.title}
                    </h4>
                    <p className="text-gray-900 font-semibold mb-1">
                      {info.details}
                    </p>
                    <p className="text-gray-600 text-sm">{info.description}</p>
                  </div>
                );
              })}
            </div>

            {/* Social Links */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-rose-100">
              <h4 className="text-lg font-bold text-gray-900 mb-4">
                Follow My Work
              </h4>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => {
                  const IconComponent = social.icon;
                  return (
                    <a
                      key={index}
                      href="#"
                      className="flex items-center gap-3 p-3 bg-gray-50 rounded-xl hover:bg-rose-50 transition-colors duration-300 flex-1"
                    >
                      <IconComponent size={20} className="text-rose-500" />
                      <div>
                        <p className="font-semibold text-gray-900">
                          {social.name}
                        </p>
                        <p className="text-sm text-gray-600">{social.handle}</p>
                      </div>
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Testimonials */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-rose-100">
              <h4 className="text-lg font-bold text-gray-900 mb-4">
                What Clients Say
              </h4>
              <div className="space-y-4">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="border-l-4 border-rose-500 pl-4">
                    <div className="flex items-center gap-1 mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star
                          key={i}
                          size={14}
                          className="text-yellow-400 fill-current"
                        />
                      ))}
                    </div>
                    <p className="text-gray-600 italic mb-2">
                      "{testimonial.text}"
                    </p>
                    <p className="text-sm font-semibold text-gray-900">
                      - {testimonial.name}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Contact */}
            <div className="bg-gradient-to-r from-rose-500 to-pink-500 rounded-2xl p-6 text-white">
              <div className="flex items-center gap-3 mb-4">
                <MessageCircle size={24} />
                <h4 className="text-lg font-bold">Need Quick Help?</h4>
              </div>
              <p className="mb-4 opacity-90">
                For urgent inquiries or last-minute requests, give me a call
                directly.
              </p>
              <a
                href="tel:+15551234567"
                className="inline-flex items-center gap-2 bg-white text-rose-500 px-4 py-2 rounded-lg font-semibold hover:bg-gray-50 transition-colors duration-300"
              >
                <Phone size={16} />
                Call Now
              </a>
            </div>
          </div>
        </div>

        {/* FAQ Section */}
        <div className="mt-20 bg-white rounded-3xl p-12 shadow-lg border border-rose-100">
          <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Frequently Asked{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-500">
              Questions
            </span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  How far in advance should I book?
                </h4>
                <p className="text-gray-600">
                  For weddings, I recommend booking 6-12 months in advance. For
                  other events, 2-4 weeks is usually sufficient, though I can
                  accommodate rush orders when possible.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Do you offer delivery and setup?
                </h4>
                <p className="text-gray-600">
                  Yes! I provide professional delivery and setup services to
                  ensure your arrangements look perfect for your event.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Can you work within my budget?
                </h4>
                <p className="text-gray-600">
                  Absolutely! I work with various budgets and can suggest
                  alternatives that maintain the beauty and impact you're
                  looking for.
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  What's included in wedding packages?
                </h4>
                <p className="text-gray-600">
                  Wedding packages typically include consultation, design, all
                  arrangements, delivery, and setup. I can customize based on
                  your specific needs.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  Do you have flower preservation services?
                </h4>
                <p className="text-gray-600">
                  Yes! I offer bouquet preservation services to help you keep
                  your special arrangements as lasting memories.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                  What areas do you serve?
                </h4>
                <p className="text-gray-600">
                  I serve the greater Bay Area and surrounding regions. For
                  events outside this area, please contact me to discuss travel
                  arrangements.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
