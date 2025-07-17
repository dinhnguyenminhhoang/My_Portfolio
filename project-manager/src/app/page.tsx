import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen bg-black text-white overflow-x-hidden">
      {/* Global Background */}
      <div className="fixed inset-0 -z-10">
        {/* Gradient Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-900/10 to-black"></div>

        {/* Animated Particles */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-pink-500 rounded-full opacity-60 animate-pulse"></div>
          <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-purple-500 rounded-full opacity-40 animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-1.5 h-1.5 bg-cyan-500 rounded-full opacity-50 animate-pulse delay-2000"></div>
          <div className="absolute bottom-1/3 right-1/4 w-1 h-1 bg-blue-500 rounded-full opacity-60 animate-pulse delay-3000"></div>
          <div className="absolute top-1/2 left-1/2 w-2 h-2 bg-purple-400 rounded-full opacity-30 animate-pulse delay-4000"></div>
        </div>

        {/* Mesh Gradient */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-br from-pink-500/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 right-0 w-96 h-96 bg-gradient-to-bl from-purple-500/20 to-transparent rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-gradient-to-tr from-cyan-500/20 to-transparent rounded-full blur-3xl"></div>
        </div>
      </div>

      {/* Navigation */}
      <Navbar />

      {/* Page Sections */}
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />

      {/* Scroll Progress Indicator */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-800 z-50">
        <div
          className="h-full bg-gradient-to-r from-pink-500 via-purple-500 to-cyan-500 transition-all duration-300 ease-out"
          style={{
            width:
              typeof window !== "undefined"
                ? `${
                    (window.scrollY /
                      (document.documentElement.scrollHeight -
                        window.innerHeight)) *
                    100
                  }%`
                : "0%",
          }}
        ></div>
      </div>
    </main>
  );
}
