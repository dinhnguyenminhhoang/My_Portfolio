import dynamic from "next/dynamic";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

// Lazy load components for better performance
const About = dynamic(() => import("@/components/About"), {
  loading: () => (
    <div className="py-32 flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-400"></div>
    </div>
  ),
});

const Projects = dynamic(() => import("@/components/Projects"), {
  loading: () => (
    <div className="py-32 flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-400"></div>
    </div>
  ),
});

const Contact = dynamic(() => import("@/components/Contact"), {
  loading: () => (
    <div className="py-32 flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-400"></div>
    </div>
  ),
});

const Footer = dynamic(() => import("@/components/Footer"), {
  loading: () => (
    <div className="py-16 flex items-center justify-center">
      <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-400"></div>
    </div>
  ),
});

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </>
  );
}
