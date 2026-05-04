"use client";

import { motion } from "framer-motion";
import { Code, Database, Layout, Server, Terminal, Wrench } from "lucide-react";

export default function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: <Layout className="text-blue-400" size={24} />,
      skills: ["React.js", "Next.js", "Tailwind CSS", "shadcn/ui", "HTML", "CSS"],
    },
    {
      title: "Backend",
      icon: <Server className="text-emerald-400" size={24} />,
      skills: ["Node.js", "Express.js", "Nest Js", "Laravel", "Socket.io"],
    },
    {
      title: "Database",
      icon: <Database className="text-purple-400" size={24} />,
      skills: ["MongoDB", "MySQL", "PostgreSQL"],
    },
    {
      title: "Programming",
      icon: <Terminal className="text-orange-400" size={24} />,
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
    <section id="skills" className="py-24 px-6 md:px-12 bg-slate-900/50">
      <div className="container mx-auto max-w-5xl">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-blue-500 rounded-full mb-8"></div>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {skillCategories.map((category, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              className="glass-card p-6 rounded-xl hover:-translate-y-2 transition-transform duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-slate-800 rounded-lg">
                  {category.icon}
                </div>
                <h3 className="text-xl font-bold text-white">{category.title}</h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 bg-slate-800 border border-slate-700 text-slate-300 rounded-md text-sm font-medium hover:border-blue-500 hover:text-white transition-colors cursor-default"
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
