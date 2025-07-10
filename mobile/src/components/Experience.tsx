"use client";

import { useEffect, useRef, useState } from "react";
import {
  Building,
  Calendar,
  MapPin,
  TrendingUp,
  Users,
  Award,
  Target,
  Briefcase,
  Rocket,
  Code,
  Smartphone,
  Star,
} from "lucide-react";

const Experience = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("work");

  const workExperience = [
    {
      id: 1,
      position: "Senior Mobile Developer",
      company: "TechFlow Solutions",
      location: "San Francisco, CA",
      period: "2022 - Present",
      type: "Full-time",
      logo: "🚀",
      description:
        "Leading mobile development team in creating innovative cross-platform applications for Fortune 500 clients.",
      achievements: [
        "Led development of 8+ mobile applications serving 500K+ users",
        "Reduced app crash rate by 85% through performance optimization",
        "Mentored 6 junior developers and established mobile development best practices",
        "Implemented CI/CD pipeline reducing deployment time by 60%",
      ],
      technologies: [
        "React Native",
        "Flutter",
        "TypeScript",
        "Firebase",
        "AWS",
      ],
      highlights: [
        { icon: Users, value: "15+", label: "Team Members" },
        { icon: Smartphone, value: "8", label: "Apps Launched" },
        { icon: Star, value: "4.8", label: "Avg App Rating" },
      ],
    },
    {
      id: 2,
      position: "Mobile Developer",
      company: "InnovateLab Inc.",
      location: "Seattle, WA",
      period: "2020 - 2022",
      type: "Full-time",
      logo: "💡",
      description:
        "Developed cutting-edge mobile solutions for healthcare and fintech industries with focus on user experience.",
      achievements: [
        "Built HIPAA-compliant healthcare app with 100K+ downloads",
        "Integrated biometric authentication increasing security by 95%",
        "Collaborated with UX team to improve user retention by 40%",
        "Optimized app performance resulting in 50% faster load times",
      ],
      technologies: ["Swift", "Kotlin", "React Native", "Node.js", "MongoDB"],
      highlights: [
        { icon: TrendingUp, value: "40%", label: "User Retention" },
        { icon: Target, value: "100K+", label: "Downloads" },
        { icon: Award, value: "3", label: "Industry Awards" },
      ],
    },
    {
      id: 3,
      position: "Junior Mobile Developer",
      company: "StartupTech",
      location: "Austin, TX",
      period: "2019 - 2020",
      type: "Full-time",
      logo: "⚡",
      description:
        "Contributed to rapid development of MVP applications for various startup clients in diverse industries.",
      achievements: [
        "Developed 5 MVP applications from concept to App Store release",
        "Implemented real-time chat functionality using WebSocket",
        "Created reusable component library reducing development time by 30%",
        "Participated in agile development process with weekly sprints",
      ],
      technologies: ["React Native", "JavaScript", "Firebase", "Git", "Jira"],
      highlights: [
        { icon: Rocket, value: "5", label: "MVPs Built" },
        { icon: Code, value: "30%", label: "Code Reusability" },
        { icon: Users, value: "10+", label: "Clients Served" },
      ],
    },
  ];

  const education = [
    {
      id: 1,
      degree: "Master of Science in Computer Science",
      school: "Stanford University",
      location: "Stanford, CA",
      period: "2017 - 2019",
      gpa: "3.9/4.0",
      logo: "🎓",
      description:
        "Specialized in Mobile Computing and Human-Computer Interaction with focus on user experience design.",
      coursework: [
        "Mobile Application Development",
        "Human-Computer Interaction",
        "Software Engineering",
        "Machine Learning",
        "Database Systems",
      ],
      achievements: [
        "Magna Cum Laude graduate",
        "Teaching Assistant for Mobile Development course",
        "Published research on mobile UX optimization",
        "Winner of University Mobile App Competition",
      ],
    },
    {
      id: 2,
      degree: "Bachelor of Science in Software Engineering",
      school: "University of California, Berkeley",
      location: "Berkeley, CA",
      period: "2013 - 2017",
      gpa: "3.7/4.0",
      logo: "🎯",
      description:
        "Comprehensive software engineering program with emphasis on mobile technologies and agile development.",
      coursework: [
        "Object-Oriented Programming",
        "Data Structures & Algorithms",
        "Mobile App Development",
        "Software Architecture",
        "Project Management",
      ],
      achievements: [
        "Dean's List for 6 semesters",
        "President of Mobile Developer Club",
        "Internship at Apple Inc.",
        "Built award-winning campus navigation app",
      ],
    },
  ];

  const certifications = [
    {
      name: "Google Associate Android Developer",
      issuer: "Google",
      date: "2023",
      credentialId: "GDG-2023-001",
      logo: "🤖",
    },
    {
      name: "AWS Certified Developer - Associate",
      issuer: "Amazon Web Services",
      date: "2022",
      credentialId: "AWS-DEV-2022-456",
      logo: "☁️",
    },
    {
      name: "React Native Certified Developer",
      issuer: "Meta",
      date: "2023",
      credentialId: "RN-CERT-2023-789",
      logo: "⚛️",
    },
    {
      name: "Flutter Certified Developer",
      issuer: "Google",
      date: "2022",
      credentialId: "FLT-CERT-2022-123",
      logo: "🐦",
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

  const tabs = [
    { id: "work", label: "Work Experience", icon: Briefcase },
    { id: "education", label: "Education", icon: Award },
    { id: "certifications", label: "Certifications", icon: Star },
  ];

  return (
    <section
      id="experience"
      ref={sectionRef}
      className="relative py-20 lg:py-32 bg-slate-900/30"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[url('/timeline-pattern.svg')] bg-repeat"></div>
      </div>

      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="inline-block px-4 py-2 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full border border-purple-500/30 text-purple-300 text-sm font-medium backdrop-blur-sm mb-6">
            Professional Journey
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Experience & <span className="text-gradient">Education</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A timeline of my professional growth and continuous learning in
            mobile development
          </p>
        </div>

        {/* Tab Navigation */}
        <div
          className={`flex flex-wrap justify-center gap-4 mb-12 transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center space-x-2 px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg"
                  : "bg-slate-800/50 text-gray-300 hover:bg-slate-700/50 hover:text-white"
              }`}
            >
              <tab.icon size={18} />
              <span>{tab.label}</span>
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="max-w-4xl mx-auto">
          {/* Work Experience */}
          {activeTab === "work" && (
            <div className="space-y-8">
              {workExperience.map((job, index) => (
                <div
                  key={job.id}
                  className={`glass-effect rounded-2xl p-8 transition-all duration-1000 card-hover ${
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-10"
                  }`}
                  style={{ transitionDelay: `${500 + index * 200}ms` }}
                >
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    {/* Job Details */}
                    <div className="flex-1">
                      {/* Header */}
                      <div className="mb-4">
                        <h3 className="text-xl font-bold text-white mb-1">
                          {job.position}
                        </h3>
                        <div className="flex flex-wrap items-center gap-4 text-gray-400 text-sm">
                          <div className="flex items-center space-x-1">
                            <Building size={14} />
                            <span>{job.company}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin size={14} />
                            <span>{job.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 mb-6">{job.description}</p>

                      {/* Achievements */}
                      <div className="mb-6">
                        <h4 className="text-white font-semibold mb-3">
                          Key Achievements:
                        </h4>
                        <ul className="space-y-2">
                          {job.achievements.map((achievement, i) => (
                            <li
                              key={i}
                              className="flex items-start space-x-3 text-gray-300"
                            >
                              <div className="w-2 h-2 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Technologies */}
                      <div className="mb-6">
                        <h4 className="text-white font-semibold mb-3">
                          Technologies Used:
                        </h4>
                        <div className="flex flex-wrap gap-2">
                          {job.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-slate-700/50 rounded-full text-sm text-gray-300 border border-gray-600"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Highlights */}
                      <div className="grid grid-cols-3 gap-4">
                        {job.highlights.map((highlight, i) => (
                          <div key={i} className="text-center">
                            <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mx-auto mb-2">
                              <highlight.icon
                                size={18}
                                className="text-white"
                              />
                            </div>
                            <div className="text-white font-bold">
                              {highlight.value}
                            </div>
                            <div className="text-gray-400 text-xs">
                              {highlight.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Education */}
          {activeTab === "education" && (
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div
                  key={edu.id}
                  className={`glass-effect rounded-2xl p-8 transition-all duration-1000 card-hover ${
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 translate-x-10"
                  }`}
                  style={{ transitionDelay: `${500 + index * 200}ms` }}
                >
                  <div className="flex flex-col lg:flex-row lg:items-start gap-6">
                    {/* School Logo & Period */}
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center text-2xl mb-4">
                        {edu.logo}
                      </div>
                      <div className="text-center lg:text-left">
                        <div className="text-blue-400 font-medium text-sm">
                          {edu.period}
                        </div>
                        <div className="text-gray-500 text-xs">
                          GPA: {edu.gpa}
                        </div>
                      </div>
                    </div>

                    {/* Education Details */}
                    <div className="flex-1">
                      {/* Header */}
                      <div className="mb-4">
                        <h3 className="text-xl font-bold text-white mb-1">
                          {edu.degree}
                        </h3>
                        <div className="flex flex-wrap items-center gap-4 text-gray-400 text-sm">
                          <div className="flex items-center space-x-1">
                            <Building size={14} />
                            <span>{edu.school}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin size={14} />
                            <span>{edu.location}</span>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-gray-300 mb-6">{edu.description}</p>

                      {/* Coursework */}
                      <div className="mb-6">
                        <h4 className="text-white font-semibold mb-3">
                          Relevant Coursework:
                        </h4>
                        <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
                          {edu.coursework.map((course) => (
                            <span
                              key={course}
                              className="px-3 py-1 bg-slate-700/50 rounded-md text-sm text-gray-300 text-center"
                            >
                              {course}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Achievements */}
                      <div>
                        <h4 className="text-white font-semibold mb-3">
                          Academic Achievements:
                        </h4>
                        <ul className="space-y-2">
                          {edu.achievements.map((achievement, i) => (
                            <li
                              key={i}
                              className="flex items-start space-x-3 text-gray-300"
                            >
                              <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                              <span>{achievement}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Certifications */}
          {activeTab === "certifications" && (
            <div className="grid md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <div
                  key={cert.name}
                  className={`glass-effect rounded-2xl p-6 transition-all duration-1000 card-hover ${
                    isVisible
                      ? "opacity-100 translate-y-0"
                      : "opacity-0 translate-y-10"
                  }`}
                  style={{ transitionDelay: `${500 + index * 150}ms` }}
                >
                  {/* Cert Header */}
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-green-500 to-emerald-500 rounded-xl flex items-center justify-center text-xl flex-shrink-0">
                      {cert.logo}
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold text-white mb-1">
                        {cert.name}
                      </h3>
                      <p className="text-gray-400 text-sm">{cert.issuer}</p>
                    </div>
                  </div>

                  {/* Cert Details */}
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-gray-400">Date Issued:</span>
                      <span className="text-green-400 font-medium">
                        {cert.date}
                      </span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-400">Credential ID:</span>
                      <span className="text-gray-300 font-mono text-xs">
                        {cert.credentialId}
                      </span>
                    </div>
                  </div>

                  {/* Verify Button */}
                  <button className="w-full mt-4 py-2 bg-slate-700/50 hover:bg-green-600/20 rounded-lg transition-colors duration-300 text-gray-300 hover:text-green-400 text-sm">
                    Verify Credential
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Timeline Visualization */}
        <div
          className={`mt-16 transition-all duration-1000 delay-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-white mb-2">
              Career Timeline
            </h3>
            <p className="text-gray-400">
              My journey from student to senior developer
            </p>
          </div>

          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-purple-500 to-pink-500 rounded-full"></div>

            {/* Timeline Points */}
            <div className="space-y-12">
              {[
                {
                  year: "2013",
                  event: "Started Computer Science",
                  id: "start-cs",
                },
                {
                  year: "2017",
                  event: "Graduated Berkeley",
                  id: "grad-berkeley",
                },
                {
                  year: "2019",
                  event: "MS from Stanford",
                  id: "grad-stanford",
                },
                {
                  year: "2019",
                  event: "First Mobile Dev Job",
                  id: "first-job",
                },
                {
                  year: "2022",
                  event: "Senior Developer Role",
                  id: "senior-role",
                },
                { year: "2024", event: "Tech Lead Position", id: "tech-lead" },
              ].map((milestone, index) => (
                <div
                  key={milestone.id}
                  className={`flex items-center ${
                    index % 2 === 0 ? "justify-start" : "justify-end"
                  }`}
                >
                  <div
                    className={`flex items-center space-x-4 ${
                      index % 2 === 0
                        ? "flex-row"
                        : "flex-row-reverse space-x-reverse"
                    }`}
                  >
                    <div className="glass-effect px-4 py-2 rounded-lg">
                      <div className="text-white font-semibold">
                        {milestone.event}
                      </div>
                      <div className="text-purple-400 text-sm">
                        {milestone.year}
                      </div>
                    </div>
                    <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full border-4 border-slate-900"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-32 right-16 w-20 h-20 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-xl animate-pulse-slow"></div>
      <div
        className="absolute bottom-32 left-16 w-24 h-24 bg-gradient-to-br from-green-500/10 to-emerald-500/10 rounded-full blur-xl animate-pulse-slow"
        style={{ animationDelay: "2s" }}
      ></div>
    </section>
  );
};

export default Experience;
