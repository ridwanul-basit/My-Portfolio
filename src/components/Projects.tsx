"use client";

import { motion } from "framer-motion";
import { ExternalLink } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import Image from "next/image";

export default function Projects() {
  const projects = [
    {
      title: "Giant BD ERP",
      description: "Enterprise Resource Planning (ERP) system designed to manage business operations efficiently. Supports scalable and modular system architecture.",
      tech: ["Next.js", "Laravel", "REST API", "Tailwind CSS"],
      image: "/projects/giant-bd.png",
      hasImage: true,
      github: "#",
      live: "#",
    },
    {
      title: "Finger Flight",
      description: "Online Travel Agency (OTA) platform for managing flight bookings with a modern full-stack architecture, user authentication, and dynamic booking.",
      tech: ["Next.js", "Node.js", "API Integration"],
      image: "/projects/OTA-1.png",
      hasImage: true,
      github: "#",
      live: "#",
    },
    {
      title: "STC 360",
      description: "Full-stack web application with MVC architecture. Implemented authentication, role-based access control, and dynamic data handling.",
      tech: ["Laravel", "MySQL", "Bootstrap"],
      image: "/projects/STC360.png",
      hasImage: true,
      github: "#",
      live: "https://www.stc360.co/",
    },
    {
      title: "E-Commerce Platform",
      description: "Scalable e-commerce platform with authentication, product management, and a comprehensive cart system.",
      tech: ["Next.js", "Node.js", "Express.js", "MongoDB"],
      image: "/projects/E-commerce.png",
      hasImage: true,
      github: "https://github.com/ridwanul-basit/E-commerce-with-Next-Js",
      live: "#",
    },
    {
      title: "Online Health Care",
      description: "Automated appointment system to visit doctors without hassle, and an integrated system to buy authentic medicine.",
      tech: ["React", "Node.js", "Express", "MongoDB"],
      image: "/projects/health-care.jpg",
      hasImage: false,
      github: "https://github.com/ridwanul-basit/Online-Health-Care",
      live: "#",
    }
  ];

  return (
    <section id="projects" key="projects-section" className="py-24 px-6 md:px-12">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <div className="w-20 h-1 bg-emerald-500 rounded-full mb-8"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={project.title}
              className="glass-card rounded-xl overflow-hidden flex flex-col group border border-slate-800 hover:border-slate-600 transition-all"
            >
              <div className="w-full overflow-hidden border-b border-slate-700/50">
                {project.hasImage ? (
                  <div className="relative w-full">
                    <Image src={project.image} alt={project.title} width={800} height={500} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500" />
                  </div>
                ) : (
                  <div className="aspect-video w-full relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-700 to-slate-800 opacity-50 z-10" />
                    <span className="text-slate-500 font-medium z-20 absolute inset-0 flex items-center justify-center">Add Project Screenshot</span>
                  </div>
                )}
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-blue-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-6 flex-grow leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t, i) => (
                    <span key={i} className="text-xs font-medium text-emerald-400 bg-emerald-400/10 px-2 py-1 rounded">
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 pt-4 border-t border-slate-700/50">
                  <a href={project.github} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 text-sm font-medium">
                    <FaGithub size={16} /> Code
                  </a>
                  <a href={project.live} target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 text-sm font-medium">
                    <ExternalLink size={16} /> Live Demo
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
