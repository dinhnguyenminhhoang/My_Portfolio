'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {
  Calendar,
  Clock,
  ArrowRight,
  Tag,
  BookOpen,
  TrendingUp,
  Zap,
  Code2,
  Lightbulb,
  Coffee,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

// Register GSAP plugins
if (typeof window !== 'undefined') {
  gsap.registerPlugin(ScrollTrigger);
}

const Blog = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLDivElement>(null);
  const featuredRef = useRef<HTMLDivElement>(null);
  const articlesRef = useRef<HTMLDivElement>(null);
  const categoriesRef = useRef<HTMLDivElement>(null);

  const [activeCategory, setActiveCategory] = useState('all');
  const [currentFeatured, setCurrentFeatured] = useState(0);

  const categories = [
    { id: 'all', label: 'All Posts', icon: BookOpen, count: 12 },
    { id: 'tutorial', label: 'Tutorials', icon: Code2, count: 5 },
    { id: 'insight', label: 'Insights', icon: Lightbulb, count: 4 },
    { id: 'productivity', label: 'Productivity', icon: Zap, count: 3 }
  ];

  const featuredPosts = [
    {
      id: 1,
      title: 'Building Scalable React Applications with TypeScript',
      excerpt: 'Learn how to structure large React applications using TypeScript, advanced patterns, and modern tooling for maximum maintainability.',
      category: 'tutorial',
      readTime: '8 min read',
      date: '2024-01-15',
      author: 'Alex Chen',
      image: '/api/placeholder/600/300',
      tags: ['React', 'TypeScript', 'Architecture'],
      trending: true
    },
    {
      id: 2,
      title: 'The Future of Web Development: Trends to Watch in 2024',
      excerpt: 'Exploring emerging technologies and frameworks that will shape web development in the coming year.',
      category: 'insight',
      readTime: '6 min read',
      date: '2024-01-10',
      author: 'Alex Chen',
      image: '/api/placeholder/600/300',
      tags: ['Trends', 'Web Dev', 'Future'],
      trending: false
    },
    {
      id: 3,
      title: 'Optimizing Developer Workflow with Modern Tools',
      excerpt: 'Discover tools and techniques to boost your productivity and streamline your development process.',
      category: 'productivity',
      readTime: '5 min read',
      date: '2024-01-05',
      author: 'Alex Chen',
      image: '/api/placeholder/600/300',
      tags: ['Productivity', 'Tools', 'Workflow'],
      trending: false
    }
  ];

  const articles = [
    {
      id: 4,
      title: 'Mastering CSS Grid: Advanced Layout Techniques',
      excerpt: 'Deep dive into CSS Grid with practical examples and advanced layout patterns.',
      category: 'tutorial',
      readTime: '7 min read',
      date: '2023-12-28',
      tags: ['CSS', 'Grid', 'Layout']
    },
    {
      id: 5,
      title: 'State Management in React: Redux vs Zustand',
      excerpt: 'Comprehensive comparison of popular state management solutions.',
      category: 'tutorial',
      readTime: '10 min read',
      date: '2023-12-20',
      tags: ['React', 'State Management', 'Redux']
    },
    {
      id: 6,
      title: 'Why I Switched to Next.js App Router',
      excerpt: 'My experience migrating from Pages Router to the new App Router.',
      category: 'insight',
      readTime: '4 min read',
      date: '2023-12-15',
      tags: ['Next.js', 'Migration', 'Performance']
    },
    {
      id: 7,
      title: 'Building a Personal Knowledge Management System',
      excerpt: 'How I organize and manage technical knowledge for maximum efficiency.',
      category: 'productivity',
      readTime: '6 min read',
      date: '2023-12-10',
      tags: ['PKM', 'Organization', 'Productivity']
    },
    {
      id: 8,
      title: 'Understanding Web Performance Metrics',
      excerpt: 'Core Web Vitals and other important metrics every developer should know.',
      category: 'tutorial',
      readTime: '8 min read',
      date: '2023-12-05',
      tags: ['Performance', 'Metrics', 'Optimization']
    },
    {
      id: 9,
      title: 'The Art of Code Reviews: Best Practices',
      excerpt: 'Guidelines for giving and receiving constructive code feedback.',
      category: 'insight',
      readTime: '5 min read',
      date: '2023-12-01',
      tags: ['Code Review', 'Best Practices', 'Team']
    }
  ];

  const filteredArticles = activeCategory === 'all' 
    ? articles 
    : articles.filter(article => article.category === activeCategory);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation
      gsap.fromTo(titleRef.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Categories animation
      const categoryItems = categoriesRef.current?.children;
      if (categoryItems) {
        gsap.fromTo(categoryItems,
          { x: -30, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.6,
            ease: "power3.out",
            stagger: 0.1,
            scrollTrigger: {
              trigger: categoriesRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }

      // Featured post animation
      gsap.fromTo(featuredRef.current,
        { scale: 0.9, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1,
          ease: "power3.out",
          scrollTrigger: {
            trigger: featuredRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Articles grid animation
      const articleCards = articlesRef.current?.children;
      if (articleCards) {
        gsap.fromTo(articleCards,
          { y: 30, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            stagger: 0.1,
            scrollTrigger: {
              trigger: articlesRef.current,
              start: "top 80%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const nextFeatured = () => {
    setCurrentFeatured((prev) => (prev + 1) % featuredPosts.length);
  };

  const prevFeatured = () => {
    setCurrentFeatured((prev) => (prev - 1 + featuredPosts.length) % featuredPosts.length);
  };

  const currentPost = featuredPosts[currentFeatured];

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <section
      id="blog"
      ref={sectionRef}
      className="relative py-20 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-purple-500 dark:bg-purple-500 light:bg-purple-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 dark:opacity-10 light:opacity-20 animate-pulse transition-colors duration-500" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-cyan-500 dark:bg-cyan-500 light:bg-cyan-300 rounded-full mix-blend-multiply filter blur-3xl opacity-10 dark:opacity-10 light:opacity-20 animate-pulse transition-colors duration-500" />
      </div>

      <div className="relative max-w-7xl mx-auto">
        {/* Section Title */}
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-white to-purple-200 dark:from-white dark:to-purple-200 light:from-slate-900 light:to-purple-900 bg-clip-text text-transparent mb-4 transition-colors duration-500">
            Latest Articles
          </h2>
          <p className="text-xl text-gray-300 dark:text-gray-300 light:text-slate-600 max-w-3xl mx-auto transition-colors duration-500">
            Insights, tutorials, and thoughts on web development, technology, and productivity
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-cyan-500 mx-auto rounded-full mt-6" />
        </div>

        {/* Categories */}
        <div ref={categoriesRef} className="flex flex-wrap justify-center gap-4 mb-16">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => setActiveCategory(category.id)}
                className={`group flex items-center space-x-3 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-purple-600 to-cyan-600 text-white scale-105 shadow-lg shadow-purple-500/25'
                    : 'bg-white/5 dark:bg-white/5 light:bg-slate-100 text-gray-300 dark:text-gray-300 light:text-slate-600 hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-slate-200 hover:text-white dark:hover:text-white light:hover:text-slate-900'
                } transition-colors duration-500`}
              >
                <Icon className="w-5 h-5" />
                <span>{category.label}</span>
                <span className="text-xs bg-white/20 dark:bg-white/20 light:bg-slate-300 px-2 py-1 rounded-full">
                  {category.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Featured Post */}
        <div ref={featuredRef} className="mb-20">
          <div className="relative bg-white/5 dark:bg-white/5 light:bg-slate-50 backdrop-blur-sm rounded-3xl border border-white/10 dark:border-white/10 light:border-slate-200 overflow-hidden transition-colors duration-500">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Post Image */}
              <div className="relative h-80 lg:h-96 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 dark:from-purple-500/20 dark:to-cyan-500/20 light:from-purple-100 light:to-cyan-100 flex items-center justify-center transition-colors duration-500">
                <div className="text-center">
                  <BookOpen className="w-16 h-16 mx-auto mb-4 text-purple-400 dark:text-purple-400 light:text-purple-600 transition-colors duration-500" />
                  <p className="text-white/60 dark:text-white/60 light:text-slate-500 transition-colors duration-500">Featured Article</p>
                </div>
                
                {currentPost.trending && (
                  <div className="absolute top-4 left-4 flex items-center space-x-2 bg-gradient-to-r from-orange-500 to-red-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                    <TrendingUp className="w-4 h-4" />
                    <span>Trending</span>
                  </div>
                )}
              </div>

              {/* Post Content */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="px-3 py-1 text-sm bg-purple-500/20 dark:bg-purple-500/20 light:bg-purple-100 text-purple-200 dark:text-purple-200 light:text-purple-700 rounded-full border border-purple-500/30 dark:border-purple-500/30 light:border-purple-300 transition-colors duration-500">
                    {currentPost.category}
                  </span>
                  <div className="flex items-center text-gray-400 dark:text-gray-400 light:text-slate-500 text-sm transition-colors duration-500">
                    <Calendar className="w-4 h-4 mr-1" />
                    {formatDate(currentPost.date)}
                  </div>
                  <div className="flex items-center text-gray-400 dark:text-gray-400 light:text-slate-500 text-sm transition-colors duration-500">
                    <Clock className="w-4 h-4 mr-1" />
                    {currentPost.readTime}
                  </div>
                </div>

                <h3 className="text-3xl font-bold text-white dark:text-white light:text-slate-900 mb-4 transition-colors duration-500">
                  {currentPost.title}
                </h3>
                
                <p className="text-gray-300 dark:text-gray-300 light:text-slate-600 text-lg leading-relaxed mb-6 transition-colors duration-500">
                  {currentPost.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {currentPost.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm bg-white/10 dark:bg-white/10 light:bg-slate-200 text-gray-300 dark:text-gray-300 light:text-slate-600 rounded-full transition-colors duration-500"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Read More Button */}
                <button className="group flex items-center space-x-2 text-purple-400 dark:text-purple-400 light:text-purple-600 hover:text-cyan-400 dark:hover:text-cyan-400 light:hover:text-cyan-600 font-semibold transition-colors duration-300">
                  <span>Read Full Article</span>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

            {/* Navigation */}
            <button
              onClick={prevFeatured}
              className="absolute left-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 dark:bg-white/10 light:bg-slate-200 backdrop-blur-sm rounded-full border border-white/20 dark:border-white/20 light:border-slate-300 hover:bg-white/20 dark:hover:bg-white/20 light:hover:bg-slate-300 transition-all duration-300 group"
            >
              <ChevronLeft className="w-6 h-6 text-white dark:text-white light:text-slate-600 group-hover:text-purple-400 dark:group-hover:text-purple-400 light:group-hover:text-purple-600 transition-colors duration-300" />
            </button>
            
            <button
              onClick={nextFeatured}
              className="absolute right-4 top-1/2 -translate-y-1/2 p-3 bg-white/10 dark:bg-white/10 light:bg-slate-200 backdrop-blur-sm rounded-full border border-white/20 dark:border-white/20 light:border-slate-300 hover:bg-white/20 dark:hover:bg-white/20 light:hover:bg-slate-300 transition-all duration-300 group"
            >
              <ChevronRight className="w-6 h-6 text-white dark:text-white light:text-slate-600 group-hover:text-purple-400 dark:group-hover:text-purple-400 light:group-hover:text-purple-600 transition-colors duration-300" />
            </button>
          </div>
        </div>

        {/* Articles Grid */}
        <div ref={articlesRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <article
              key={article.id}
              className="group bg-white/5 dark:bg-white/5 light:bg-slate-50 backdrop-blur-sm rounded-2xl border border-white/10 dark:border-white/10 light:border-slate-200 overflow-hidden hover:bg-white/10 dark:hover:bg-white/10 light:hover:bg-slate-100 hover:border-purple-500/30 dark:hover:border-purple-500/30 light:hover:border-purple-300 transition-all duration-500 hover:transform hover:scale-105 cursor-pointer"
            >
              {/* Article Header */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2 py-1 text-xs bg-purple-500/20 dark:bg-purple-500/20 light:bg-purple-100 text-purple-200 dark:text-purple-200 light:text-purple-700 rounded-full border border-purple-500/30 dark:border-purple-500/30 light:border-purple-300 transition-colors duration-500">
                    {article.category}
                  </span>
                  <div className="flex items-center text-gray-400 dark:text-gray-400 light:text-slate-500 text-xs transition-colors duration-500">
                    <Clock className="w-3 h-3 mr-1" />
                    {article.readTime}
                  </div>
                </div>

                <h3 className="text-xl font-bold text-white dark:text-white light:text-slate-900 mb-3 group-hover:text-purple-300 dark:group-hover:text-purple-300 light:group-hover:text-purple-700 transition-colors duration-300">
                  {article.title}
                </h3>
                
                <p className="text-gray-300 dark:text-gray-300 light:text-slate-600 text-sm leading-relaxed mb-4 transition-colors duration-500">
                  {article.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1 mb-4">
                  {article.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-1 text-xs bg-white/10 dark:bg-white/10 light:bg-slate-200 text-gray-400 dark:text-gray-400 light:text-slate-500 rounded-full transition-colors duration-500"
                    >
                      #{tag}
                    </span>
                  ))}
                  {article.tags.length > 2 && (
                    <span className="px-2 py-1 text-xs text-gray-500 dark:text-gray-500 light:text-slate-400 transition-colors duration-500">
                      +{article.tags.length - 2}
                    </span>
                  )}
                </div>

                {/* Article Footer */}
                <div className="flex items-center justify-between pt-4 border-t border-white/10 dark:border-white/10 light:border-slate-200 transition-colors duration-500">
                  <div className="flex items-center text-gray-400 dark:text-gray-400 light:text-slate-500 text-xs transition-colors duration-500">
                    <Calendar className="w-3 h-3 mr-1" />
                    {formatDate(article.date)}
                  </div>
                  <button className="group/btn flex items-center text-purple-400 dark:text-purple-400 light:text-purple-600 hover:text-cyan-400 dark:hover:text-cyan-400 light:hover:text-cyan-600 text-sm font-medium transition-colors duration-300">
                    <span>Read</span>
                    <ArrowRight className="w-4 h-4 ml-1 group-hover/btn:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Load More / Newsletter CTA */}
        <div className="mt-16 text-center">
          <div className="inline-block p-8 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 dark:from-purple-500/10 dark:to-cyan-500/10 light:from-purple-50 light:to-cyan-50 rounded-3xl border border-white/10 dark:border-white/10 light:border-slate-200 backdrop-blur-sm transition-colors duration-500">
            <div className="flex items-center justify-center mb-4">
              <Coffee className="w-8 h-8 text-purple-400 dark:text-purple-400 light:text-purple-600 mr-3 transition-colors duration-500" />
              <h3 className="text-2xl font-bold text-white dark:text-white light:text-slate-900 transition-colors duration-500">
                Stay Updated
              </h3>
            </div>
            <p className="text-gray-300 dark:text-gray-300 light:text-slate-600 mb-6 max-w-2xl transition-colors duration-500">
              Get notified when I publish new articles about web development, 
              productivity tips, and technology insights.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 bg-white/10 dark:bg-white/10 light:bg-white border border-white/20 dark:border-white/20 light:border-slate-300 rounded-xl text-white dark:text-white light:text-slate-900 placeholder-gray-400 dark:placeholder-gray-400 light:placeholder-slate-500 focus:outline-none focus:border-purple-500/50 transition-all duration-300"
              />
              <button className="px-6 py-3 bg-gradient-to-r from-purple-600 to-cyan-600 rounded-xl font-semibold hover:from-purple-700 hover:to-cyan-700 transition-all duration-300 hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Blog;