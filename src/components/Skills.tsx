"use client";

import { motion } from "framer-motion";
import { Code, Database, Layout, Server, Terminal, Wrench } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend Development",
      icon: <Layout className="text-orange-500" size={24} />,
      skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Redux"],
    },
    {
      title: "Backend Development",
      icon: <Server className="text-orange-500" size={24} />,
      skills: ["Laravel", "Node.js", "Express.js", "NestJS", "PHP"],
    },
    {
      title: "Database & DevOps",
      icon: <Database className="text-orange-500" size={24} />,
      skills: ["PostgreSQL", "MySQL", "MongoDB", "Docker", "AWS"],
    },
    {
      title: "Programming",
      icon: <Terminal className="text-orange-500" size={24} />,
      skills: ["JavaScript", "TypeScript", "Python", "PHP", "C++", "SQL"],
    },
    {
      title: "Software & Tools",
      icon: <Wrench className="text-pink-400" size={24} />,
      skills: ["Postman", "Git", "MS Word", "MS Excel", "MS Powerpoint"],
    },
    {
      title: "Soft Skills",
      icon: <Code className="text-yellow-400" size={24} />,
      skills: ["Problem-solving", "Teamwork", "Time Management", "Critical Thinking", "Adaptability", "Creativity"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="skills" className="py-24 px-6 md:px-12">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-16">
          <div className="flex items-center gap-3 mb-2">
            <span className="text-orange-500 font-mono text-sm">03.</span>
            <h2 className="text-3xl md:text-5xl font-bold text-white uppercase tracking-tighter">Skills</h2>
          </div>
          <div className="w-20 h-1 bg-orange-500 rounded-full"></div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          className="grid md:grid-cols-2 gap-8"
        >
          {skillCategories.map((category) => (
            <motion.div
              key={category.title}
              variants={itemVariants}
              className="tech-card p-8 rounded-2xl hover:border-orange-500/50 transition-all group"
            >
              <div className="flex items-center gap-4 mb-8">
                <div className="p-3 bg-orange-500/10 text-orange-500 rounded-xl group-hover:scale-110 transition-transform">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold text-white uppercase tracking-tight">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-white/5 border border-white/10 text-slate-400 rounded-md text-sm font-mono uppercase tracking-widest hover:border-orange-500 hover:text-white transition-all cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
