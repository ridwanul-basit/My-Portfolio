"use client";

import { useState } from "react";

interface Project {
  title: string;
  description: string;
  image: string;
  github: string;
  demo: string;
  tags: string[];
  hasImage: boolean;
}

export default function Projects() {
  const projects: Project[] = [
    {
      title: "Giant BD ERP",
      description: "Enterprise Resource Planning (ERP) system designed to manage business operations efficiently. Supports scalable and modular system architecture.",
      image: "/projects/giant-bd.png",
      github: "https://github.com/ridwanul-basit",
      demo: "https://bxone0001.pythonanywhere.com/",
      tags: ["Next.js", "Nest JS", "REST API", "PostgreSQL"],
      hasImage: true,
    },
    {
      title: "Finger Flight",
      description: "Online Travel Agency (OTA) platform for managing flight bookings with a modern full-stack architecture, user authentication, and dynamic booking.",
      image: "/projects/OTA-1.png",
      github: "https://github.com/ridwanul-basit",
      demo: "https://fingerflight.org/",
      tags: ["Next.js", "Laravel Api", "API Integration"],
      hasImage: true,
    },
    {
      title: "STC 360",
      description: "Full-stack web application with MVC architecture. Implemented authentication, role-based access control, and dynamic data handling.",
      image: "/projects/STC360.png",
      github: "https://github.com/ridwanul-basit",
      demo: "https://stc360.org/",
      tags: ["Laravel", "MySQL", "Bootstrap"],
      hasImage: true,
    },
    {
      title: "E-Commerce Platform",
      description: "A comprehensive e-commerce solution with product management, shopping cart, and secure checkout features.",
      image: "/projects/E-commerce.png",
      github: "https://github.com/ridwanul-basit",
      demo: "https://jananifashionbd.com/",
      tags: ["Next.js", "Tailwind", "Laravel"],
      hasImage: true,
    },
    {
      title: "Online Health Care",
      description: "Platform connecting patients with healthcare providers, featuring appointment scheduling and medical record management.",
      image: "/projects/health.png",
      github: "https://github.com/ridwanul-basit",
      demo: "#",
      tags: ["PHP", "MySQL", "JavaScript"],
      hasImage: false,
    },
  ];

  return (
    <section id="projects" key="projects-section" className="py-24 px-6 md:px-12 bg-[#121212]">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-orange-500 font-mono text-sm">04.</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-tighter">Projects</h2>
          </div>
          <div className="w-20 h-1 bg-orange-500 rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, idx) => (
            <div
              key={project.title}
              className="tech-card rounded-2xl overflow-hidden flex flex-col group transition-all"
            >
              <div className="w-full overflow-hidden border-b border-white/5 relative bg-[#1e1e1e]">
                {project.hasImage ? (
                  <div className="relative w-full">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                  </div>
                ) : (
                  <div className="bg-white/5 aspect-video flex items-center justify-center group-hover:bg-white/10 transition-colors">
                    <span className="text-slate-500 font-mono text-sm uppercase tracking-widest">Project Preview</span>
                  </div>
                )}
                <div className="absolute inset-0 bg-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-3 group-hover:text-orange-500 transition-colors uppercase tracking-tight">
                  {project.title}
                </h3>
                <p className="text-slate-400 text-sm mb-6 line-clamp-3 leading-relaxed">
                  {project.description}
                </p>

                <div className="mt-auto">
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-[10px] font-mono uppercase tracking-widest bg-white/5 text-slate-300 border border-white/10 rounded"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-4 pt-4 border-t border-white/5">
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="text-slate-500 hover:text-white transition-colors flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest"
                    >
                      Code
                    </a>
                    <a 
                      href={project.demo} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="text-orange-500 hover:text-orange-400 transition-colors flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
