"use client";

import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "../components/ThemeProvider";
import ThemeToggle from "../components/ThemeToggle";
import PerformanceMonitor from "../components/PerformanceMonitor";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

// Metadata for SEO
const metadata = {
  title: "Full Stack Developer Portfolio | Alex Chen",
  description:
    "Professional Full Stack Developer specializing in modern web technologies. Expert in React, Node.js, TypeScript, and cloud solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var theme = localStorage.getItem('theme');
                  if (theme === 'light') {
                    document.documentElement.classList.remove('dark');
                    document.documentElement.classList.add('light');
                  } else {
                    document.documentElement.classList.remove('light');
                    document.documentElement.classList.add('dark');
                  }
                } catch (e) {
                  document.documentElement.classList.add('dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 dark:from-slate-900 dark:via-purple-900 dark:to-slate-900 light:from-blue-50 light:via-indigo-50 light:to-purple-50 text-white dark:text-white light:text-slate-800 overflow-x-hidden transition-colors duration-500`}
        suppressHydrationWarning={true}
      >
        <ThemeProvider>
          <div className="relative min-h-screen">
            {/* Background Gradient Overlay */}
            <div className="fixed inset-0 bg-gradient-to-br from-slate-900/50 via-purple-900/30 to-slate-900/50 dark:from-slate-900/50 dark:via-purple-900/30 dark:to-slate-900/50 light:from-blue-50/80 light:via-indigo-50/60 light:to-purple-50/80 pointer-events-none z-0 transition-colors duration-500" />

            {/* Animated Background Shapes */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
              <div className="absolute -top-40 -right-40 w-80 h-80 bg-purple-500 dark:bg-purple-500 light:bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 dark:opacity-20 light:opacity-15 animate-blob transition-colors duration-500" />
              <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-cyan-500 dark:bg-cyan-500 light:bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 dark:opacity-20 light:opacity-15 animate-blob animation-delay-2000 transition-colors duration-500" />
              <div className="absolute top-40 left-40 w-80 h-80 bg-pink-500 dark:bg-pink-500 light:bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 dark:opacity-20 light:opacity-15 animate-blob animation-delay-4000 transition-colors duration-500" />
            </div>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Main Content */}
            <div className="relative z-10">{children}</div>

            {/* Performance Monitoring */}
            <PerformanceMonitor />

            {/* Custom Cursor */}
            <div
              id="custom-cursor"
              className="fixed w-6 h-6 pointer-events-none z-50 mix-blend-difference"
            >
              <div className="w-full h-full bg-white dark:bg-white light:bg-slate-700 rounded-full transform scale-0 transition-transform duration-300" />
            </div>
          </div>
        </ThemeProvider>

        {/* Custom CSS for animations and theme variables */}
        <style jsx global>{`
          :root {
            --background: #ffffff;
            --foreground: #171717;
            --background-secondary: #f8fafc;
            --border-color: rgba(15, 23, 42, 0.1);
            --text-muted: #64748b;
            --accent-primary: #8b5cf6;
            --accent-secondary: #06b6d4;
          }

          .dark {
            --background: #0a0a0a;
            --foreground: #ededed;
            --background-secondary: #1e293b;
            --border-color: rgba(255, 255, 255, 0.1);
            --text-muted: #94a3b8;
            --accent-primary: #8b5cf6;
            --accent-secondary: #06b6d4;
          }

          .light {
            --background: #ffffff;
            --foreground: #1e293b;
            --background-secondary: #f8fafc;
            --border-color: rgba(59, 130, 246, 0.15);
            --text-muted: #64748b;
            --accent-primary: #6366f1;
            --accent-secondary: #3b82f6;
          }

          @keyframes blob {
            0% {
              transform: translate(0px, 0px) scale(1);
            }
            33% {
              transform: translate(30px, -50px) scale(1.1);
            }
            66% {
              transform: translate(-20px, 20px) scale(0.9);
            }
            100% {
              transform: translate(0px, 0px) scale(1);
            }
          }

          .animate-blob {
            animation: blob 7s infinite;
          }

          .animation-delay-2000 {
            animation-delay: 2s;
          }

          .animation-delay-4000 {
            animation-delay: 4s;
          }

          /* Custom Scrollbar */
          ::-webkit-scrollbar {
            width: 8px;
          }

          ::-webkit-scrollbar-track {
            background: var(--background-secondary);
          }

          ::-webkit-scrollbar-thumb {
            background: linear-gradient(
              180deg,
              var(--accent-primary),
              var(--accent-secondary)
            );
            border-radius: 4px;
          }

          ::-webkit-scrollbar-thumb:hover {
            background: linear-gradient(180deg, #7c3aed, #0891b2);
          }

          /* Light mode scrollbar */
          .light::-webkit-scrollbar-track {
            background: rgba(248, 250, 252, 0.8);
          }

          .light::-webkit-scrollbar-thumb {
            background: linear-gradient(180deg, #6366f1, #3b82f6);
          }

          /* Smooth transitions for all elements */
          * {
            transition: color 0.3s ease, background-color 0.3s ease,
              border-color 0.3s ease, transform 0.3s ease;
          }

          /* Theme transition animation */
          html {
            transition: all 0.5s ease;
          }

          body {
            transition: all 0.5s ease;
          }

          /* Glass morphism utilities */
          .glass {
            background: rgba(255, 255, 255, 0.05);
            backdrop-filter: blur(16px);
            border: 1px solid rgba(255, 255, 255, 0.1);
          }

          .light .glass {
            background: rgba(255, 255, 255, 0.8);
            backdrop-filter: blur(16px);
            border: 1px solid rgba(59, 130, 246, 0.2);
          }

          /* Selection styles */
          ::selection {
            background: var(--accent-primary);
            color: white;
          }

          ::-moz-selection {
            background: var(--accent-primary);
            color: white;
          }

          /* Prevent hydration issues */
          .no-hydration-mismatch {
            opacity: 0;
          }

          .hydrated .no-hydration-mismatch {
            opacity: 1;
            transition: opacity 0.3s ease;
          }
        `}</style>
      </body>
    </html>
  );
}
