import type { Metadata } from "next";
import { Inter, DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hoàng - Fashion Model & Creative Director",
  description:
    "Portfolio của Hoàng - Fashion Model chuyên nghiệp với phong cách 'chipi' độc đáo. Chuyên về Fashion Photography, Brand Storytelling và Creative Direction.",
  keywords: [
    "fashion model",
    "fashion photography",
    "creative director",
    "brand storytelling",
    "content creator",
    "Vietnam",
  ],
  authors: [{ name: "Hoàng" }],
  openGraph: {
    title: "Hoàng - Fashion Model & Creative Director",
    description:
      "Sáng tạo những khoảnh khắc thời trang đẹp nhất với chất riêng và phong cách cá nhân độc đáo",
    type: "website",
    locale: "vi_VN",
  },
  twitter: {
    card: "summary_large_image",
    title: "Hoàng - Fashion Model & Creative Director",
    description: "Portfolio thời trang với phong cách 'chipi' độc đáo",
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
    <html
      lang="vi"
      className={`${inter.variable} ${dmSans.variable} ${playfairDisplay.variable} scroll-smooth`}
    >
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#9333ea" />
      </head>
      <body
        className={`${inter.className} antialiased bg-white text-gray-900 overflow-x-hidden`}
      >
        {children}
      </body>
    </html>
  );
}
