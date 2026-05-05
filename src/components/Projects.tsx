"use client";

import { projects } from "@/data/projects";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Projects() {
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
          {projects.map((project) => (
            <div
              key={project.id}
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
                <Link 
                  href={`/projects/${project.id}`}
                  className="absolute inset-0 bg-orange-500/10 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
                >
                  <div className="bg-[#121212] p-4 rounded-full text-orange-500 transform translate-y-4 group-hover:translate-y-0 transition-transform">
                    <ArrowUpRight size={24} />
                  </div>
                </Link>
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
                    <Link 
                      href={`/projects/${project.id}`}
                      className="text-orange-500 hover:text-orange-400 transition-colors flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest"
                    >
                      View Details
                    </Link>
                    <a 
                      href={project.github} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="text-slate-500 hover:text-white transition-colors flex items-center gap-1.5 text-xs font-mono uppercase tracking-widest ml-auto"
                    >
                      Code
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
