import dynamic from "next/dynamic";
import { Suspense } from "react";
import LoadingSpinner from "@/components/LoadingSpinner";
import Navbar from "@/components/Navbar";

// Dynamic imports để tối ưu performance
const Hero = dynamic(() => import("@/components/Hero"), {
  loading: () => <LoadingSpinner />,
  ssr: true,
});

const About = dynamic(() => import("@/components/About"), {
  loading: () => <LoadingSpinner />,
  ssr: true,
});

const Skills = dynamic(() => import("@/components/Skills"), {
  loading: () => <LoadingSpinner />,
  ssr: true,
});

const Projects = dynamic(() => import("@/components/Projects"), {
  loading: () => <LoadingSpinner />,
  ssr: true,
});

const Contact = dynamic(() => import("@/components/Contact"), {
  loading: () => <LoadingSpinner />,
  ssr: true,
});

const Footer = dynamic(() => import("@/components/Footer"), {
  loading: () => <LoadingSpinner />,
  ssr: true,
});

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Fixed Navbar */}
      <Navbar />

      {/* Page Sections */}
      <Suspense fallback={<LoadingSpinner />}>
        <Hero />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <About />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <Skills />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <Projects />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <Contact />
      </Suspense>

      <Suspense fallback={<LoadingSpinner />}>
        <Footer />
      </Suspense>
    </main>
  );
}
