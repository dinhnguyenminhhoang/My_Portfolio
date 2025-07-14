import "./globals.css";
import { Inter, Poppins } from "next/font/google";
import { Metadata } from "next";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Sarah Johnson - English Teacher Portfolio",
    template: "%s | Sarah Johnson - English Teacher",
  },
  description:
    "Professional English teacher specializing in modern language education with interactive and engaging teaching methods. IELTS preparation, Business English, and Conversational classes.",
  keywords: [
    "English teacher",
    "IELTS preparation",
    "Business English",
    "Language education",
    "Online English classes",
    "English tutor",
    "ESL teacher",
    "English conversation",
    "Language learning",
    "English portfolio",
  ],
  authors: [{ name: "Sarah Johnson" }],
  creator: "Sarah Johnson",
  publisher: "Sarah Johnson",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://sarahjohnson-teacher.vercel.app"),
  alternates: {
    canonical: "/",
    languages: {
      "en-US": "/en-US",
      "vi-VN": "/vi-VN",
    },
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sarahjohnson-teacher.vercel.app",
    title: "Sarah Johnson - Professional English Teacher",
    description:
      "Transform your English skills with personalized lessons from an experienced teacher specializing in IELTS, Business English, and Conversation.",
    siteName: "Sarah Johnson English Teacher Portfolio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Sarah Johnson - English Teacher Portfolio",
      },
      {
        url: "/og-image-square.jpg",
        width: 1200,
        height: 1200,
        alt: "Sarah Johnson - English Teacher",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sarah Johnson - Professional English Teacher",
    description:
      "Transform your English skills with personalized lessons from an experienced teacher.",
    creator: "@englishwsarah",
    images: ["/twitter-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: false,
      noimageindex: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
    yandex: "your-yandex-verification-code",
    yahoo: "your-yahoo-verification-code",
  },
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} scroll-smooth`}
      suppressHydrationWarning
    >
      <head>
        {/* Performance optimizations */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//cdnjs.cloudflare.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />

        {/* Favicon */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />

        {/* Theme color */}
        <meta name="theme-color" content="#3b82f6" />
        <meta name="msapplication-TileColor" content="#3b82f6" />

        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Sarah Johnson",
              jobTitle: "English Teacher",
              description:
                "Professional English teacher specializing in IELTS preparation, Business English, and conversational skills.",
              url: "https://sarahjohnson-teacher.vercel.app",
              image:
                "https://sarahjohnson-teacher.vercel.app/sarah-johnson.jpg",
              sameAs: [
                "https://linkedin.com/in/sarahjohnsonenglish",
                "https://instagram.com/englishwithsarah",
                "https://youtube.com/englishwithsarah",
                "https://facebook.com/englishwithsarah",
              ],
              address: {
                "@type": "PostalAddress",
                addressLocality: "London",
                addressCountry: "UK",
              },
              alumniOf: {
                "@type": "EducationalOrganization",
                name: "University of Cambridge",
              },
              worksFor: {
                "@type": "Organization",
                name: "International Language Academy",
              },
              knowsAbout: [
                "English Language Teaching",
                "IELTS Preparation",
                "Business English",
                "ESL Education",
                "Language Assessment",
                "Curriculum Development",
              ],
              teaches: {
                "@type": "Course",
                name: "English Language",
                description:
                  "Comprehensive English language courses including IELTS preparation, Business English, and conversational skills",
              },
            }),
          }}
        />

        {/* Additional structured data for courses */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Course",
              name: "IELTS Preparation Course",
              description:
                "Comprehensive IELTS preparation course with personalized training and proven strategies.",
              provider: {
                "@type": "Person",
                name: "Sarah Johnson",
              },
              offers: {
                "@type": "Offer",
                category: "Education",
                availability: "https://schema.org/InStock",
              },
              courseMode: "Online",
              educationalLevel: "Intermediate to Advanced",
              teaches: [
                "IELTS Speaking",
                "IELTS Writing",
                "IELTS Reading",
                "IELTS Listening",
              ],
            }),
          }}
        />
      </head>

      <body
        className={`
          ${inter.className} 
          min-h-screen 
          bg-white 
          text-gray-900 
          antialiased 
          selection:bg-blue-100 
          selection:text-blue-900
          scroll-smooth
        `}
        suppressHydrationWarning
      >
        {/* Skip to main content for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-blue-600 focus:text-white focus:rounded-md focus:shadow-lg"
        >
          Skip to main content
        </a>

        {/* Main app wrapper */}
        <div id="root" className="relative min-h-screen flex flex-col">
          {/* Global loading overlay */}
          <div
            id="loading-overlay"
            className="fixed inset-0 bg-white z-50 flex items-center justify-center transition-opacity duration-500 opacity-0 pointer-events-none"
          >
            <div className="flex flex-col items-center space-y-4">
              <div className="w-12 h-12 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
              <p className="text-gray-600 font-medium">Loading...</p>
            </div>
          </div>

          {/* Background decorative elements */}
          <div className="fixed inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-100/50 to-purple-100/50 rounded-full blur-3xl opacity-30"></div>
            <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-tr from-purple-100/50 to-pink-100/50 rounded-full blur-3xl opacity-30"></div>
          </div>

          {/* Main content */}
          <main id="main-content" className="relative z-10 flex-1">
            {children}
          </main>

          {/* Cookie consent banner (optional) */}
          <div
            id="cookie-banner"
            className="fixed bottom-0 left-0 right-0 bg-gray-900 text-white p-4 z-40 transform translate-y-full transition-transform duration-300 hidden"
          >
            <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between space-y-2 sm:space-y-0">
              <p className="text-sm">
                This website uses cookies to enhance your experience.
                <a href="/privacy" className="underline ml-1">
                  Learn more
                </a>
              </p>
              <div className="flex space-x-2">
                <button
                  id="accept-cookies"
                  className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md text-sm font-medium transition-colors"
                >
                  Accept
                </button>
                <button
                  id="decline-cookies"
                  className="px-4 py-2 bg-gray-600 hover:bg-gray-700 rounded-md text-sm font-medium transition-colors"
                >
                  Decline
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Global scripts */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Remove loading overlay when page is loaded
              window.addEventListener('load', function() {
                const overlay = document.getElementById('loading-overlay');
                if (overlay) {
                  overlay.style.opacity = '0';
                  setTimeout(() => {
                    overlay.style.display = 'none';
                  }, 500);
                }
              });
              
              // Simple cookie consent functionality
              const cookieBanner = document.getElementById('cookie-banner');
              const acceptBtn = document.getElementById('accept-cookies');
              const declineBtn = document.getElementById('decline-cookies');
              
              // Show cookie banner if no consent stored
              if (!localStorage.getItem('cookieConsent') && cookieBanner) {
                setTimeout(() => {
                  cookieBanner.classList.remove('hidden');
                  cookieBanner.style.transform = 'translateY(0)';
                }, 2000);
              }
              
              // Handle cookie consent
              if (acceptBtn) {
                acceptBtn.addEventListener('click', function() {
                  localStorage.setItem('cookieConsent', 'accepted');
                  cookieBanner.style.transform = 'translateY(100%)';
                  setTimeout(() => cookieBanner.classList.add('hidden'), 300);
                });
              }
              
              if (declineBtn) {
                declineBtn.addEventListener('click', function() {
                  localStorage.setItem('cookieConsent', 'declined');
                  cookieBanner.style.transform = 'translateY(100%)';
                  setTimeout(() => cookieBanner.classList.add('hidden'), 300);
                });
              }
              
              // Performance optimization - preload critical resources
              const preloadLinks = [
                '/hero-bg.jpg',
                '/sarah-profile.jpg'
              ];
              
              preloadLinks.forEach(href => {
                const link = document.createElement('link');
                link.rel = 'preload';
                link.as = 'image';
                link.href = href;
                document.head.appendChild(link);
              });
            `,
          }}
        />
      </body>
    </html>
  );
}
