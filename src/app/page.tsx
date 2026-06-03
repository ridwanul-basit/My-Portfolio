import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { projects } from "@/data/projects";

export default function Home() {
  const featuredProjects = projects.filter((project) => project.featured).slice(0, 6);

  return (
    <main className="min-h-screen bg-[#121212] selection:bg-orange-500/30 selection:text-orange-500">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects projectList={featuredProjects} />
      <Contact />
      <Footer />
    </main>
  );
}
