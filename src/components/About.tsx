"use client";

import { motion } from "framer-motion";
import { GraduationCap, Code2 } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12">
      <div className="container mx-auto max-w-6xl">
        <div className="flex gap-12">
          {/* Vertical Decoration */}
          <div className="hidden lg:flex flex-col items-center justify-start pt-4 shrink-0">
            <span className="text-vertical text-7xl font-black text-white/5 uppercase select-none tracking-tighter">
              BASIT
            </span>
            <div className="w-px h-32 bg-white/5 mt-4"></div>
          </div>

          <div className="flex-1">
            <div className="mb-16">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-orange-500 font-mono text-sm">01.</span>
                <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-tighter">
                  About Me
                </h2>
              </div>
              <div className="w-20 h-1 bg-orange-500 rounded-full"></div>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-start">
              <div>
                <p className="text-slate-300 text-lg leading-relaxed mb-6">
                  I&apos;m a full-stack developer with expertise in building
                  scalable and modern web applications. On the backend, I work
                  with NestJS, Django, and Laravel to develop secure,
                  high-performance APIs and enterprise-grade systems. On the
                  frontend, I specialize in Next.js, creating fast, responsive,
                  and user-friendly interfaces focused on performance and
                  seamless user experience.
                </p>

                <p className="text-slate-300 text-lg leading-relaxed">
                  I have hands-on experience building complex web platforms
                  including ERP solutions, OTA (Online Travel Agency) systems,
                  Hospital Management Systems, and School Management Systems. I
                  enjoy solving real-world business challenges through clean
                  architecture, efficient database design, and maintainable
                  code. Passionate about continuous learning, I stay updated
                  with modern technologies and best practices to deliver
                  impactful digital solutions.
                </p>
              </div>

              <div className="space-y-6">
                <div className="tech-card p-6 rounded-xl flex gap-4 items-start hover:border-orange-500/50 transition-all">
                  <div className="p-3 bg-orange-500/10 text-orange-500 rounded-lg">
                    <GraduationCap size={24} />
                  </div>
                  <div className="w-full">
                    <h3 className="text-xl font-bold text-white mb-4 uppercase tracking-wider">
                      Education
                    </h3>

                    <div className="space-y-8">
                      <div className="relative pl-6 border-l border-white/10">
                        <div className="absolute w-2.5 h-2.5 bg-orange-500 rounded-full -left-[5.5px] top-1.5 ring-4 ring-[#121212]"></div>
                        <p className="text-slate-200 font-bold">
                          B.Sc. in Computer Science & Engineering
                        </p>
                        <p className="text-orange-500/80 text-sm font-medium mt-1">
                          {" "}
                          BRAC University • Sep 2022 - May 2026
                        </p>
                        <p className="text-slate-500 text-xs mt-1 uppercase tracking-wider">
                          Dhaka, Bangladesh
                        </p>
                      </div>

                      <div className="relative pl-6 border-l border-white/10">
                        <div className="absolute w-2.5 h-2.5 bg-orange-500/50 rounded-full -left-[5.5px] top-1.5 ring-4 ring-[#121212]"></div>
                        <p className="text-slate-200 font-bold">
                          Higher Secondary Certificate (HSC)
                        </p>
                        <p className="text-orange-500/60 text-sm font-medium mt-1">
                          Govt. Azizul Haque College • 2018 - 2020
                        </p>
                        <p className="text-slate-500 text-xs mt-1 uppercase tracking-wider">
                          Bogura, Bangladesh • GPA: 5.00
                        </p>
                      </div>

                      <div className="relative pl-6 border-l border-white/10">
                        <div className="absolute w-2.5 h-2.5 bg-orange-500/30 rounded-full -left-[5.5px] top-1.5 ring-4 ring-[#121212]"></div>
                        <p className="text-slate-200 font-bold">
                          Secondary School Certificate (SSC)
                        </p>
                        <p className="text-orange-500/40 text-sm font-medium mt-1">
                          Bogura Zilla School • 2010 - 2018
                        </p>
                        <p className="text-slate-500 text-xs mt-1 uppercase tracking-wider">
                          Bogura, Bangladesh • GPA: 5.00
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="tech-card p-6 rounded-xl flex gap-4 items-start hover:border-orange-500/50 transition-all">
                  <div className="p-3 bg-orange-500/10 text-orange-500 rounded-lg">
                    <Code2 size={24} />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1 uppercase tracking-wider">
                      Development Approach
                    </h3>
                    <p className="text-slate-400 text-sm leading-relaxed">
                      Focused on full-stack web development with a modern stack,
                      prioritizing performance, modularity, and excellent user
                      experience.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
