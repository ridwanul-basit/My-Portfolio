import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-slate-950 py-8 border-t border-slate-800">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-slate-400 text-sm">
          &copy; {new Date().getFullYear()} Md. Ridwanul Basit. All rights reserved.
        </p>
        
        <div className="flex items-center gap-6">
          <a href="https://github.com/ridwanul-basit" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
            <span className="sr-only">GitHub</span>
            <FaGithub size={20} />
          </a>
          <a href="https://linkedin.com/in/md-ridwanul-basit" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-white transition-colors">
            <span className="sr-only">LinkedIn</span>
            <FaLinkedin size={20} />
          </a>
        </div>
      </div>
    </footer>
  );
}
