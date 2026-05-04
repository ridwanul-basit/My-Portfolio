"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 pb-12 px-6 md:px-12 relative overflow-hidden"
    >
      {/* Background gradients */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-emerald-500/20 rounded-full blur-[120px] pointer-events-none" />

      <div className="container mx-auto max-w-5xl z-10 grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-slate-800 text-blue-400 text-sm font-semibold tracking-wider mb-6 border border-slate-700">
            SOFTWARE ENGINEER
          </span>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6">
            Hi, I&apos;m <br />
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-emerald-400 to-blue-400 bg-[length:200%_auto] animate-gradient">
              Md. Ridwanul Basit
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 mb-8 max-w-lg leading-relaxed">
            I build scalable, modern web applications specializing in E-commerce,
            ERP, and OTA platforms using Next.js and Laravel.
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="px-6 py-3 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium flex items-center gap-2 transition-all hover:gap-3"
            >
              View Projects <ArrowRight size={18} />
            </a>
            <a
              href="/CV.pdf"
              download
              className="px-6 py-3 rounded-lg border border-blue-500/50 text-blue-400 hover:bg-blue-500/10 font-medium transition-all flex items-center gap-2"
            >
              Download CV
            </a>
          </div>

          <div className="mt-10 flex items-center gap-6">
            <a href="https://github.com/ridwanul-basit" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors" aria-label="GitHub">
              <FaGithub size={24} />
            </a>
            <a href="https://linkedin.com/in/md-ridwanul-basit" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors" aria-label="LinkedIn">
              <FaLinkedin size={24} />
            </a>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative hidden md:block"
        >
          <div className="aspect-square w-full max-w-md mx-auto relative">
            <div className="absolute inset-0 bg-gradient-to-tr from-blue-500 to-emerald-500 rounded-full blur-2xl opacity-20 animate-pulse" />
            <div className="absolute inset-4 rounded-full border border-slate-700 bg-slate-800/50 backdrop-blur-sm overflow-hidden flex items-center justify-center">
              <Image src="/profile.jpg" alt="Md. Ridwanul Basit" fill className="object-cover" priority />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
