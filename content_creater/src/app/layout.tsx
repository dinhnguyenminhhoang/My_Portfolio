import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter, Poppins } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Portfolio - Content Creator",
  description:
    "Portfolio chuyên nghiệp của Content Creator - Sáng tạo nội dung độc đáo và ấn tượng",
  keywords: [
    "content creator",
    "portfolio",
    "creative",
    "design",
    "video",
    "social media",
  ],
  authors: [{ name: "Content Creator" }],
  creator: "Content Creator",
  openGraph: {
    title: "Portfolio - Content Creator",
    description: "Portfolio chuyên nghiệp của Content Creator",
    type: "website",
    locale: "vi_VN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio - Content Creator",
    description: "Portfolio chuyên nghiệp của Content Creator",
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
        <link rel="icon" href="/favicon.ico" />
        <meta name="theme-color" content="#8B5CF6" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${inter.variable} ${poppins.variable} antialiased font-inter bg-gray-950 text-white overflow-x-hidden`}
      >
        <div className="relative min-h-screen">
          {/* Gradient Background */}
          <div className="fixed inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-gray-950 to-blue-900/20" />
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
          </div>

          {/* Main Content */}
          <main className="relative z-10">{children}</main>
        </div>
      </body>
    </html>
  );
}
