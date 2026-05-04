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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Experience</h2>
          <div className="w-20 h-1 bg-emerald-500 rounded-full mb-12"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-8 md:pl-0">
                {/* Desktop layout line */}
                <div className="hidden md:block absolute left-[50%] top-0 bottom-0 w-px bg-slate-700 transform -translate-x-1/2"></div>
                
                {/* Mobile layout line */}
                <div className="md:hidden absolute left-0 top-0 bottom-0 w-px bg-slate-700"></div>

                <div className="md:flex items-center justify-between w-full">
                  <div className="md:w-[45%] text-left mb-4 md:mb-0">
                    <h3 className="text-2xl font-bold text-white mb-1">{exp.role}</h3>
                    <div className="text-blue-400 font-medium text-lg flex items-center gap-2 mb-2">
                      <Briefcase size={18} /> {exp.company}
                    </div>
                  </div>

                  <div className="absolute left-[-4px] md:left-[50%] md:-translate-x-1/2 w-3 h-3 rounded-full bg-emerald-500 ring-4 ring-slate-900 mt-1.5 md:mt-0"></div>

                  <div className="md:w-[45%] text-left md:text-right">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 text-slate-300 text-sm mb-4">
                      <Calendar size={14} /> {exp.period}
                    </div>
                  </div>
                </div>

                <div className="glass-card mt-6 p-6 rounded-xl md:w-[80%] md:mx-auto relative z-10 hover:border-blue-500/30 transition-colors">
                  <ul className="space-y-3">
                    {exp.achievements.map((item, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-300">
                        <span className="text-emerald-500 mt-1.5">•</span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
