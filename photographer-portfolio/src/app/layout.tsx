import type { Metadata } from "next";
import { Inter, Playfair_Display, JetBrains_Mono } from "next/font/google";
import "./globals.css";

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

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains",
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "Alex Morgan - Professional Photographer",
    template: "%s | Alex Morgan Photography",
  },
  description:
    "Award-winning photographer specializing in portrait, landscape, and commercial photography. Capturing moments that tell your unique story.",
  keywords: [
    "photographer",
    "photography",
    "portrait",
    "landscape",
    "commercial",
    "wedding",
    "professional",
  ],
  authors: [{ name: "Alex Morgan" }],
  creator: "Alex Morgan",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://alexmorgan.photography",
    title: "Alex Morgan - Professional Photographer",
    description:
      "Award-winning photographer specializing in portrait, landscape, and commercial photography.",
    siteName: "Alex Morgan Photography",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Alex Morgan Photography",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Morgan - Professional Photographer",
    description:
      "Award-winning photographer specializing in portrait, landscape, and commercial photography.",
    creator: "@alexmorgan_photo",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Prevent flash of unstyled content
              (function() {
                const theme = localStorage.getItem('theme') || 'dark';
                document.documentElement.classList.add(theme);
              })();
            `,
          }}
        />
      </head>
      <body
        className={`${inter.variable} ${playfair.variable} ${jetbrains.variable} font-sans antialiased bg-dark-950 text-white overflow-x-hidden`}
      >
        {/* Background pattern */}
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-dark-900 via-dark-950 to-black"></div>
          <div className="absolute inset-0 bg-[url('/images/noise.png')] opacity-[0.015] mix-blend-soft-light"></div>
        </div>

        {/* Main content */}
        <div className="relative z-0">{children}</div>

        {/* Loading script for smooth page transitions */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.addEventListener('beforeunload', function() {
                document.body.style.opacity = '0.7';
              });
            `,
          }}
        />

        {/* Smooth scroll polyfill for older browsers */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              if (!('scrollBehavior' in document.documentElement.style)) {
                const script = document.createElement('script');
                script.src = 'https://cdn.jsdelivr.net/gh/iamdustan/smoothscroll@master/src/smoothscroll.js';
                document.head.appendChild(script);
              }
            `,
          }}
        />
      </body>
    </html>
  );
}
