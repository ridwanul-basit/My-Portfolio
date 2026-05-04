"use client";

import { motion } from "framer-motion";
import { GraduationCap, Code2, BrainCircuit } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 px-6 md:px-12 bg-slate-900/50">
      <div className="container mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <div className="w-20 h-1 bg-blue-500 rounded-full mb-8"></div>
          
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-slate-300 text-lg leading-relaxed mb-6">
                I am a passionate <span className="text-white font-semibold">Software Engineer</span> with experience in building scalable web applications across E-commerce, ERP, and OTA domains. 
              </p>
              <p className="text-slate-300 text-lg leading-relaxed">
                Skilled in Next.js, Node.js, Express.js, and Laravel, with a strong focus on clean code, efficient systems, and real-world problem solving. I thrive in environments that challenge me to learn and adapt quickly.
              </p>
            </div>

            <div className="space-y-6">
              <div className="glass-card p-6 rounded-xl flex gap-4 items-start">
                <div className="p-3 bg-blue-500/10 text-blue-400 rounded-lg">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Education</h3>
                  <p className="text-slate-300 font-medium">B.Sc. in Computer Science & Engineering</p>
                  <p className="text-slate-400 text-sm">BRAC University • Sep 2022 - Present</p>
                  <p className="text-slate-400 text-sm mt-1">Dhaka, Bangladesh</p>
                </div>
              </div>

              <div className="glass-card p-6 rounded-xl flex gap-4 items-start">
                <div className="p-3 bg-emerald-500/10 text-emerald-400 rounded-lg">
                  <Code2 size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-1">Development Approach</h3>
                  <p className="text-slate-400 text-sm leading-relaxed">
                    Focused on full-stack web development with a modern stack, prioritizing performance, modularity, and excellent user experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
