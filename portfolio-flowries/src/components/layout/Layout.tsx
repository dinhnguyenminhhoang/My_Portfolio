import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Flowries - Professional Floral Artist Portfolio",
  description:
    "Discover the art of floral design with Flowries. Professional flower arrangements, wedding bouquets, and artistic floral installations.",
  keywords: [
    "floral design",
    "flower arrangements",
    "wedding bouquets",
    "floral artist",
    "flower art",
  ],
  authors: [{ name: "Flowries" }],
  openGraph: {
    title: "Flowries - Professional Floral Artist Portfolio",
    description:
      "Discover the art of floral design with Flowries. Professional flower arrangements, wedding bouquets, and artistic floral installations.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Flowries - Professional Floral Artist Portfolio",
    description:
      "Discover the art of floral design with Flowries. Professional flower arrangements, wedding bouquets, and artistic floral installations.",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${playfair.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
        <meta name="theme-color" content="#f43f5e" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body
        className={`${inter.className} antialiased bg-white text-gray-900 overflow-x-hidden`}
        suppressHydrationWarning
      >
        <SmoothScrollProvider>
          {/* Custom Cursor */}
          <div
            id="custom-cursor"
            className="fixed top-0 left-0 w-4 h-4 bg-rose-500 rounded-full pointer-events-none z-50 mix-blend-difference opacity-0 transition-all duration-300 ease-out"
            style={{ transform: "translate(-50%, -50%)" }}
          />

          {/* Smooth Scroll Container */}
          <div id="smooth-wrapper">
            <div id="smooth-content">{children}</div>
          </div>

          {/* Loading Screen */}
          <div
            id="loading-screen"
            className="fixed inset-0 bg-white z-50 flex items-center justify-center transition-opacity duration-1000"
          >
            <div className="text-center">
              <div className="w-16 h-16 border-4 border-rose-200 border-t-rose-500 rounded-full animate-spin mx-auto mb-4"></div>
              <div className="text-rose-600 font-playfair text-2xl font-bold tracking-wider">
                Flowries
              </div>
              <div className="text-gray-500 text-sm mt-2">
                Loading beautiful flowers...
              </div>
            </div>
          </div>

          {/* Global Scripts */}
          <script
            dangerouslySetInnerHTML={{
              __html: `
                // Custom cursor movement
                document.addEventListener('mousemove', (e) => {
                  const cursor = document.getElementById('custom-cursor');
                  if (cursor) {
                    cursor.style.left = e.clientX + 'px';
                    cursor.style.top = e.clientY + 'px';
                    cursor.style.opacity = '1';
                  }
                });

                // Hide cursor when mouse leaves window
                document.addEventListener('mouseleave', () => {
                  const cursor = document.getElementById('custom-cursor');
                  if (cursor) {
                    cursor.style.opacity = '0';
                  }
                });

                // Loading screen
                window.addEventListener('load', () => {
                  const loadingScreen = document.getElementById('loading-screen');
                  if (loadingScreen) {
                    setTimeout(() => {
                      loadingScreen.style.opacity = '0';
                      setTimeout(() => {
                        loadingScreen.style.display = 'none';
                      }, 1000);
                    }, 1500);
                  }
                });

                // Smooth scroll for anchor links
                document.addEventListener('click', (e) => {
                  const target = e.target;
                  if (target && target.getAttribute && target.getAttribute('href')) {
                    const href = target.getAttribute('href');
                    if (href.startsWith('#')) {
                      e.preventDefault();
                      const element = document.querySelector(href);
                      if (element) {
                        element.scrollIntoView({ 
                          behavior: 'smooth',
                          block: 'start'
                        });
                      }
                    }
                  }
                });

                // Enhanced hover effects
                document.addEventListener('mouseenter', (e) => {
                  const target = e.target;
                  if (target && target.classList) {
                    if (target.classList.contains('hover-scale')) {
                      target.style.transform = 'scale(1.05)';
                    }
                    if (target.classList.contains('hover-float')) {
                      target.style.transform = 'translateY(-5px)';
                    }
                  }
                }, true);

                document.addEventListener('mouseleave', (e) => {
                  const target = e.target;
                  if (target && target.classList) {
                    if (target.classList.contains('hover-scale')) {
                      target.style.transform = 'scale(1)';
                    }
                    if (target.classList.contains('hover-float')) {
                      target.style.transform = 'translateY(0)';
                    }
                  }
                }, true);
              `,
            }}
          />

          {/* Additional Styles for Smooth Animations */}
          <style jsx global>{`
            html {
              scroll-behavior: smooth;
            }

            * {
              cursor: none !important;
            }

            .hover-scale {
              transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            }

            .hover-float {
              transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);
            }

            /* Custom scrollbar */
            ::-webkit-scrollbar {
              width: 8px;
            }

            ::-webkit-scrollbar-track {
              background: #f1f1f1;
            }

            ::-webkit-scrollbar-thumb {
              background: linear-gradient(180deg, #f43f5e, #ec4899);
              border-radius: 4px;
            }

            ::-webkit-scrollbar-thumb:hover {
              background: linear-gradient(180deg, #e11d48, #db2777);
            }

            /* Smooth animations for all elements */
            * {
              will-change: transform;
            }

            /* Optimize font rendering */
            body {
              -webkit-font-smoothing: antialiased;
              -moz-osx-font-smoothing: grayscale;
              text-rendering: optimizeLegibility;
            }

            /* Reduce motion for users who prefer it */
            @media (prefers-reduced-motion: reduce) {
              html {
                scroll-behavior: auto;
              }

              *,
              *::before,
              *::after {
                animation-duration: 0.01ms !important;
                animation-iteration-count: 1 !important;
                transition-duration: 0.01ms !important;
              }
            }
          `}</style>
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
