"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useInView } from "react-intersection-observer";
import { Award, Users, Clock, Smile } from "lucide-react";

const About: React.FC = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const skillsRef = useRef<HTMLDivElement>(null);

  const { ref: inViewRef, inView } = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image reveal animation
      gsap.fromTo(
        imageRef.current,
        {
          scale: 0.8,
          opacity: 0,
          rotationY: -15,
        },
        {
          scale: 1,
          opacity: 1,
          rotationY: 0,
          duration: 1.5,
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
        contentRef.current?.children,
        {
          y: 50,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.2,
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
      if (inView) {
        gsap.fromTo(
          statsRef.current?.querySelectorAll(".stat-number"),
          { innerText: 0 },
          {
            innerText: (i, target) => target.getAttribute("data-value"),
            duration: 2,
            ease: "power2.out",
            snap: { innerText: 1 },
            stagger: 0.2,
          }
        );
      }

      // Skills bars animation
      gsap.fromTo(
        skillsRef.current?.querySelectorAll(".skill-bar"),
        {
          width: "0%",
        },
        {
          width: (i, target) => target.getAttribute("data-width"),
          duration: 1.5,
          ease: "power3.out",
          stagger: 0.2,
          scrollTrigger: {
            trigger: skillsRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, [inView]);

  const stats = [
    { icon: Users, label: "Happy Clients", value: 500, suffix: "+" },
    { icon: Award, label: "Awards Won", value: 15, suffix: "+" },
    { icon: Clock, label: "Years Experience", value: 5, suffix: "" },
    { icon: Smile, label: "Events Completed", value: 300, suffix: "+" },
  ];

  const skills = [
    { name: "Floral Design", percentage: 95 },
    { name: "Wedding Arrangements", percentage: 90 },
    { name: "Event Decoration", percentage: 88 },
    { name: "Garden Design", percentage: 85 },
    { name: "Preservation Techniques", percentage: 92 },
  ];

  return (
    <section ref={sectionRef} id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div ref={imageRef} className="relative">
            <div className="relative">
              {/* Main image container */}
              <div className="w-full h-[600px] rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-rose-100 to-pink-100">
                {/* Placeholder for about image */}
                <div className="w-full h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-32 h-32 mx-auto mb-4 bg-white rounded-full flex items-center justify-center shadow-lg">
                      <Smile size={48} className="text-rose-500" />
                    </div>
                    <p className="text-gray-600 font-medium">
                      Professional Portrait
                    </p>
                  </div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -top-8 -right-8 w-24 h-24 bg-rose-400 rounded-full opacity-20"></div>
              <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-pink-400 rounded-full opacity-20"></div>

              {/* Quote card */}
              <div className="absolute -bottom-12 -right-8 bg-white rounded-2xl shadow-xl p-6 max-w-xs border border-rose-100">
                <p className="text-sm text-gray-600 italic mb-2">
                  "Every flower has a story to tell, and I'm here to help you
                  tell yours."
                </p>
                <p className="text-xs text-rose-500 font-semibold">
                  - Sarah Johnson
                </p>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div ref={contentRef} className="space-y-8">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
                About{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-pink-500">
                  Flowries
                </span>
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                Welcome to my world of floral artistry! I'm Sarah, a passionate
                floral designer with over 5 years of experience creating
                breathtaking arrangements that capture the essence of life's
                most precious moments.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                My journey began with a simple love for nature's beauty, which
                has evolved into a deep understanding of how flowers can
                transform spaces, emotions, and memories. Each arrangement I
                create tells a unique story.
              </p>
            </div>

            {/* Skills */}
            <div ref={skillsRef} className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                My Expertise
              </h3>
              {skills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-700 font-medium">
                      {skill.name}
                    </span>
                    <span className="text-rose-500 font-semibold">
                      {skill.percentage}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="skill-bar bg-gradient-to-r from-rose-500 to-pink-500 h-2 rounded-full"
                      data-width={`${skill.percentage}%`}
                    ></div>
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div>
              <button className="px-8 py-4 bg-gradient-to-r from-rose-500 to-pink-500 text-white font-semibold rounded-full hover:from-rose-600 hover:to-pink-600 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                Let's Work Together
              </button>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div
          ref={inViewRef}
          className="mt-20 grid grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div
                key={index}
                ref={statsRef}
                className="text-center p-6 bg-gradient-to-br from-rose-50 to-pink-50 rounded-2xl border border-rose-100 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-rose-500 to-pink-500 rounded-full flex items-center justify-center">
                  <IconComponent size={28} className="text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-2">
                  <span className="stat-number" data-value={stat.value}>
                    0
                  </span>
                  <span>{stat.suffix}</span>
                </div>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default About;
