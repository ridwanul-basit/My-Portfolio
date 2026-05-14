"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const getLinkHref = (href: string) => {
    if (href.startsWith("/")) return href;
    if (href.startsWith("#")) return `/${href}`;
    return href;
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#121212]/90 backdrop-blur-md shadow-lg py-3 border-b border-white/5"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 md:px-12">
        <Link
          href="/"
          className="flex items-center gap-4 group"
        >
          <div className="w-16 h-16 rounded-full border-2 border-orange-500 overflow-hidden relative group-hover:scale-110 transition-transform shadow-[0_0_20px_rgba(249,115,22,0.2)] bg-[#1e1e1e]">
            <img 
              src="/profile.jpg" 
              alt="Logo" 
              className="w-full h-full object-cover [image-rendering:-webkit-optimize-contrast]" 
            />
          </div>
          <span className="text-xl font-bold text-white group-hover:text-orange-500 transition-colors font-mono tracking-tighter">
            BASIT.
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={getLinkHref(link.href)}
              className="text-slate-300 hover:text-white transition-colors text-sm font-medium tracking-wide"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-slate-300 hover:text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-[#121212]/95 backdrop-blur-xl border-b border-white/5 py-8 flex flex-col items-center gap-6 md:hidden shadow-2xl"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={getLinkHref(link.href)}
                onClick={() => setMobileMenuOpen(false)}
                className="text-slate-300 hover:text-white text-lg font-medium w-full text-center py-2"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
