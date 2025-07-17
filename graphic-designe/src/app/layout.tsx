import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hoàng - Graphic Designer với chất riêng",
  description:
    "Portfolio của Hoàng - Graphic Designer chuyên nghiệp với 5+ năm kinh nghiệm. Chuyên thiết kế branding, UI/UX, motion graphics và social media content với phong cách độc đáo và sáng tạo.",
  keywords: [
    "graphic designer",
    "thiết kế đồ họa",
    "branding",
    "ui ux design",
    "motion graphics",
    "social media design",
    "logo design",
    "web design",
    "vietnam designer",
    "ho chi minh designer",
    "creative designer",
    "freelance designer",
  ],
  authors: [{ name: "Hoàng", url: "https://hoang-designer.com" }],
  creator: "Hoàng",
  publisher: "Hoàng Design Studio",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://hoang-designer.com"),
  alternates: {
    canonical: "/",
    languages: {
      "vi-VN": "/vi",
      "en-US": "/en",
    },
  },
  openGraph: {
    title: "Hoàng - Graphic Designer với chất riêng",
    description:
      "Tạo ra những thiết kế độc đáo, sáng tạo và ấn tượng. Từ branding đến content visual, tôi biến ý tưởng thành hiện thực một cách 'chipi' nhất!",
    url: "https://hoang-designer.com",
    siteName: "Hoàng Design Studio",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Hoàng - Graphic Designer Portfolio",
      },
    ],
    locale: "vi_VN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hoàng - Graphic Designer với chất riêng",
    description:
      "Portfolio của Hoàng - Graphic Designer chuyên nghiệp với phong cách độc đáo và sáng tạo.",
    images: ["/twitter-image.jpg"],
    creator: "@hoang_designer",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
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
    yandex: "your-yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="vi" className="scroll-smooth">
      <head>
        {/* Performance Optimizations */}
        <link
          rel="preload"
          href="/fonts/inter.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link rel="preload" href="/images/hero-bg.jpg" as="image" />

        {/* DNS Prefetch for external resources */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="dns-prefetch" href="//api.placeholder.com" />

        {/* Schema.org Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Hoàng",
              jobTitle: "Graphic Designer",
              description:
                "Graphic Designer chuyên nghiệp với 5+ năm kinh nghiệm, chuyên thiết kế branding, UI/UX, motion graphics và social media content.",
              url: "https://hoang-designer.com",
              image: "https://hoang-designer.com/profile-image.jpg",
              sameAs: [
                "https://instagram.com/hoang.designer",
                "https://behance.net/hoang-designer",
                "https://dribbble.com/hoang-designer",
                "https://linkedin.com/in/hoang-designer",
              ],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Ho Chi Minh City",
                addressCountry: "VN",
              },
              contactPoint: {
                "@type": "ContactPoint",
                telephone: "+84-123-456-789",
                contactType: "Customer Service",
                email: "hoang.designer@gmail.com",
              },
              knowsAbout: [
                "Graphic Design",
                "UI/UX Design",
                "Branding",
                "Motion Graphics",
                "Social Media Design",
                "Logo Design",
                "Web Design",
              ],
              makesOffer: {
                "@type": "Offer",
                itemOffered: {
                  "@type": "Service",
                  name: "Graphic Design Services",
                  description:
                    "Professional graphic design services including branding, UI/UX design, motion graphics, and social media content creation.",
                },
              },
            }),
          }}
        />

        {/* Google Analytics - Only in production */}
        {process.env.NODE_ENV === "production" && (
          <>
            <script
              async
              src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
            />
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  window.dataLayer = window.dataLayer || [];
                  function gtag(){dataLayer.push(arguments);}
                  gtag('js', new Date());
                  gtag('config', 'GA_MEASUREMENT_ID');
                `,
              }}
            />

            {/* Facebook Pixel */}
            <script
              dangerouslySetInnerHTML={{
                __html: `
                  !function(f,b,e,v,n,t,s)
                  {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
                  n.callMethod.apply(n,arguments):n.queue.push(arguments)};
                  if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
                  n.queue=[];t=b.createElement(e);t.async=!0;
                  t.src=v;s=b.getElementsByTagName(e)[0];
                  s.parentNode.insertBefore(t,s)}(window, document,'script',
                  'https://connect.facebook.net/en_US/fbevents.js');
                  fbq('init', 'FACEBOOK_PIXEL_ID');
                  fbq('track', 'PageView');
                `,
              }}
            />
          </>
        )}
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-white text-gray-900 overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
