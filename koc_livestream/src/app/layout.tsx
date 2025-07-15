import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-poppins",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "KOC Livestream - Portfolio",
  description:
    "Professional KOC Livestream Portfolio - Connecting Brands with Audiences",
  keywords: ["KOC", "livestream", "content creator", "influencer", "portfolio"],
  authors: [{ name: "KOC Livestream" }],
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "KOC Livestream - Portfolio",
    description: "Professional KOC Livestream Portfolio",
    type: "website",
    locale: "vi_VN",
  },
  twitter: {
    card: "summary_large_image",
    title: "KOC Livestream - Portfolio",
    description: "Professional KOC Livestream Portfolio",
  },
  robots: {
    index: true,
    follow: true,
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
          crossOrigin=""
        />
        <meta name="theme-color" content="#000000" />
        <meta name="color-scheme" content="dark light" />
      </head>
      <body
        className={cn(
          "min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-800 font-sans antialiased overflow-x-hidden",
          inter.variable,
          poppins.variable
        )}
      >
        <div className="relative">
          {/* Background Pattern */}
          <div className="fixed inset-0 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
          <div className="fixed inset-0 bg-[radial-gradient(ellipse_80%_80%_at_80%_80%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />

          {/* Main Content */}
          <div className="relative z-10">{children}</div>

          {/* Floating Elements */}
          <div className="fixed top-20 left-10 w-72 h-72 bg-purple-500/20 rounded-full blur-3xl animate-pulse" />
          <div className="fixed bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse delay-1000" />

          {/* Cursor Follow Effect */}
          <div
            id="cursor-follower"
            className="fixed w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full pointer-events-none z-50 opacity-0 transition-opacity duration-300"
          />
        </div>
      </body>
    </html>
  );
}
