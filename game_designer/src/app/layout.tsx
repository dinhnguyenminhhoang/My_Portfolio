import type { Metadata } from "next";
import { Inter, DM_Sans, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Hoàng | Game Designer Portfolio",
  description:
    "Creative Game Designer với chất riêng - Tạo nên những trải nghiệm game độc đáo và đầy cảm hứng",
  keywords: [
    "game designer",
    "portfolio",
    "creative",
    "vietnam",
    "game development",
  ],
  authors: [{ name: "Hoàng" }],
  viewport: "width=device-width, initial-scale=1",
  themeColor: "#8B5CF6",
  openGraph: {
    title: "Hoàng | Game Designer Portfolio",
    description: "Creative Game Designer với chất riêng",
    type: "website",
    locale: "vi_VN",
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
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
      </head>
      <body
        className={`${inter.variable} ${dmSans.variable} ${playfair.variable} antialiased bg-slate-950 text-white overflow-x-hidden`}
      >
        <div className="relative">
          {/* Background Elements */}
          <div className="fixed inset-0 -z-10">
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950/20 to-slate-950" />
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-radial from-violet-500/5 to-transparent rounded-full blur-2xl" />
          </div>

          {/* Animated Grid Background */}
          <div className="fixed inset-0 -z-10 opacity-20">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `
                linear-gradient(rgba(139, 92, 246, 0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(139, 92, 246, 0.1) 1px, transparent 1px)
              `,
                backgroundSize: "50px 50px",
                animation: "grid-move 20s linear infinite",
              }}
            />
          </div>

          {/* Noise Texture */}
          <div className="fixed inset-0 -z-10 opacity-[0.02] bg-noise" />

          {/* Main Content */}
          <main className="relative z-10">{children}</main>
        </div>
      </body>
    </html>
  );
}
