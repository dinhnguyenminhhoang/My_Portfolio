'use client';

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Loader2, Sparkles } from 'lucide-react';

// Import all components
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Projects from '@/components/Projects';
import Testimonials from '@/components/Testimonials';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadingProgress, setLoadingProgress] = useState(0);

  useEffect(() => {
    // Simulate loading progress
    const interval = setInterval(() => {
      setLoadingProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => setIsLoading(false), 500);
          return 100;
        }
        return prev + Math.random() * 15;
      });
    }, 200);

    return () => clearInterval(interval);
  }, []);

  // Loading Screen Component
  const LoadingScreen = () => (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-br from-purple-900 via-pink-900 to-indigo-900"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8, ease: 'easeInOut' }}
    >
      <div className="text-center">
        {/* Animated Logo */}
        <motion.div
          className="relative mb-8"
          initial={{ scale: 0.5, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <div className="w-24 h-24 bg-gradient-to-r from-pink-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4 relative">
            <Sparkles className="w-12 h-12 text-white" />
            <motion.div
              className="absolute inset-0 rounded-full border-4 border-white/30"
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: 'linear' }}
            />
          </div>
          <h1 className="text-4xl font-bold text-white mb-2">
            Hoàng Stylelist
          </h1>
          <p className="text-purple-200">Creative Content Creator</p>
        </motion.div>

        {/* Progress Bar */}
        <div className="w-64 mx-auto mb-6">
          <div className="flex justify-between text-sm text-purple-200 mb-2">
            <span>Loading...</span>
            <span>{Math.round(loadingProgress)}%</span>
          </div>
          <div className="w-full bg-white/20 rounded-full h-2">
            <motion.div
              className="h-2 bg-gradient-to-r from-pink-500 to-purple-500 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${loadingProgress}%` }}
              transition={{ duration: 0.3 }}
            />
          </div>
        </div>

        {/* Loading Messages */}
        <motion.div
          key={Math.floor(loadingProgress / 25)}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-purple-200 text-sm"
        >
          {loadingProgress < 25 && "Đang tải nội dung sáng tạo..."}
          {loadingProgress >= 25 && loadingProgress < 50 && "Chuẩn bị portfolio..."}
          {loadingProgress >= 50 && loadingProgress < 75 && "Tải dự án nổi bật..."}
          {loadingProgress >= 75 && loadingProgress < 100 && "Hoàn tất..."}
          {loadingProgress >= 100 && "Chào mừng bạn đến với thế giới sáng tạo!"}
        </motion.div>
      </div>

      {/* Background Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 20 }, (_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white rounded-full opacity-30"
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.7, 0.3]
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              ease: 'easeInOut'
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`
            }}
          />
        ))}
      </div>
    </motion.div>
  );

  // Page Transition Component
  const PageTransition = ({ children }: { children: React.ReactNode }) => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );

  // Scroll Progress Indicator
  const ScrollProgress = () => {
    const [scrollProgress, setScrollProgress] = useState(0);

    useEffect(() => {
      const updateScrollProgress = () => {
        const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrolled = window.scrollY;
        const progress = (scrolled / scrollHeight) * 100;
        setScrollProgress(progress);
      };

      window.addEventListener('scroll', updateScrollProgress);
      return () => window.removeEventListener('scroll', updateScrollProgress);
    }, []);

    return (
      <motion.div
        className="fixed top-0 left-0 right-0 z-50 h-1 bg-gradient-to-r from-pink-500 to-purple-500 origin-left"
        style={{ scaleX: scrollProgress / 100 }}
        initial={{ scaleX: 0 }}
        animate={{ scaleX: scrollProgress / 100 }}
        transition={{ duration: 0.1 }}
      />
    );
  };

  // Floating Action Button
  const FloatingActionButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const toggleVisibility = () => {
        if (window.scrollY > 300) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      };

      window.addEventListener('scroll', toggleVisibility);
      return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    const scrollToContact = () => {
      const element = document.querySelector('#contact');
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    };

    return (
      <AnimatePresence>
        {isVisible && (
          <motion.button
            onClick={scrollToContact}
            className="fixed bottom-8 right-8 z-40 bg-gradient-to-r from-pink-500 to-purple-500 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transition-all duration-300"
            initial={{ opacity: 0, scale: 0, y: 100 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0, y: 100 }}
            whileHover={{ scale: 1.1, y: -5 }}
            whileTap={{ scale: 0.9 }}
          >
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
            >
              <Sparkles className="w-6 h-6" />
            </motion.div>
          </motion.button>
        )}
      </AnimatePresence>
    );
  };

  return (
    <>
      {/* Loading Screen */}
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen />}
      </AnimatePresence>

      {/* Main Content */}
      <AnimatePresence mode="wait">
        {!isLoading && (
          <PageTransition>
            <div className="min-h-screen bg-white">
              {/* Scroll Progress */}
              <ScrollProgress />
              
              {/* Floating Action Button */}
              <FloatingActionButton />

              {/* Navigation */}
              <Navbar />

              {/* Main Sections */}
              <main>
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Testimonials />
                <Contact />
              </main>

              {/* Footer */}
              <Footer />
            </div>
          </PageTransition>
        )}
      </AnimatePresence>
    </>
  );
};

export default HomePage;