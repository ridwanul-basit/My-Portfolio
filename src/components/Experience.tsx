"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar } from "lucide-react";

export default function Experience() {
  const experiences = [
    {
      role: "Associate Software Engineer",
      company: "Trends Bird Limited",
      location: "Dhaka, Bangladesh",
      period: "Aug 2025 - Present",
      achievements: [
        "Developed and maintained multiple production-level systems including ERP, OTA, and internal management tools.",
        "Built STC 360 using Laravel (MVC architecture), implementing authentication and structured backend logic.",
        "Designed and developed Giant BD ERP, a scalable enterprise system using Next.js and Laravel REST APIs.",
        "Contributed to Finger Flights (OTA platform), implementing API integrations, frontend features, and dynamic booking workflows.",
      ]
    }
  ];

  return (
    <section id="experience" className="py-24 px-6 md:px-12 relative">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-orange-500 font-mono text-sm">02.</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-tighter">Experience</h2>
          </div>
          <div className="w-20 h-1 bg-orange-500 rounded-full"></div>
        </div>

        <div className="relative border-l border-white/10 ml-4 md:ml-6 space-y-16">
          {experiences.map((exp, index) => (
            <div key={index} className="relative pl-10">
              {/* Timeline Dot */}
              <div className="absolute left-[-6px] top-2 w-3 h-3 rounded-full bg-orange-500 ring-4 ring-[#121212] z-20"></div>
              
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                  <div className="text-orange-500/80 font-medium text-lg flex items-center gap-2">
                    <Briefcase size={18} />
                    <a href="https://trendsbird.com/" target="_blank" rel="noreferrer" className="hover:text-orange-500 hover:underline transition-all">
                      {exp.company}
                    </a>
                  </div>
                </div>

                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 text-slate-400 text-sm h-fit border border-white/5">
                  <Calendar size={14} /> {exp.period}
                </div>
              </div>

              <div className="tech-card p-8 rounded-2xl relative z-10 hover:border-orange-500/30 transition-all">
                <ul className="space-y-4">
                  {exp.achievements.map((item, i) => (
                    <li key={i} className="flex gap-3 text-slate-300 leading-relaxed">
                      <span className="w-1.5 h-1.5 rounded-full bg-orange-500/50 mt-2.5 shrink-0"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
