import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Alex Chen - Mobile Developer Portfolio",
  description:
    "Professional mobile developer specializing in React Native, Flutter, and iOS/Android development. Creating innovative mobile experiences.",
  keywords: [
    "Mobile Developer",
    "React Native",
    "Flutter",
    "iOS",
    "Android",
    "Portfolio",
  ],
  authors: [{ name: "Alex Chen" }],
  openGraph: {
    title: "Alex Chen - Mobile Developer Portfolio",
    description:
      "Professional mobile developer creating innovative mobile experiences",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Alex Chen - Mobile Developer Portfolio",
    description:
      "Professional mobile developer creating innovative mobile experiences",
  },
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#0f0f23" />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} antialiased bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 min-h-screen overflow-x-hidden`}
      >
        {/* Background Pattern */}
        <div className="fixed inset-0 z-0">
          <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))]"></div>
        </div>

        {/* Animated Background Orbs */}
        <div className="fixed inset-0 z-0">
          <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
          <div className="absolute top-1/3 right-1/4 w-72 h-72 bg-yellow-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-72 h-72 bg-pink-500 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10">{children}</div>

        {/* Loading Spinner Overlay */}
        <div
          id="loading-overlay"
          className="fixed inset-0 z-50 bg-slate-900 flex items-center justify-center transition-opacity duration-1000"
        >
          <div className="relative">
            <div className="w-16 h-16 border-4 border-purple-500 border-t-transparent rounded-full animate-spin"></div>
            <div className="absolute inset-0 w-16 h-16 border-4 border-pink-500 border-b-transparent rounded-full animate-spin animate-reverse"></div>
          </div>
        </div>
      </body>
    </html>
  );
}
