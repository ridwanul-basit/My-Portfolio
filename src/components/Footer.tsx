import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="py-12 px-6 md:px-12 border-t border-white/5 bg-[#121212]">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex flex-col items-center md:items-start gap-2">
            <span className="text-2xl font-black text-white tracking-tighter uppercase font-mono">Basit<span className="text-orange-500">.</span></span>
            <p className="text-slate-500 text-sm font-mono uppercase tracking-[0.2em]">Full Stack Engineer</p>
          </div>

          <div className="flex flex-col items-center md:items-end gap-4">
            <div className="flex gap-6">
              <a href="https://github.com/ridwanul-basit" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-orange-500 transition-colors">
                <FaGithub size={20} />
              </a>
              <a href="https://linkedin.com/in/md-ridwanul-basit" target="_blank" rel="noreferrer" className="text-slate-500 hover:text-orange-500 transition-colors">
                <FaLinkedin size={20} />
              </a>
            </div>
            <p className="text-slate-500 text-[10px] uppercase tracking-[0.3em] font-mono">
              © {new Date().getFullYear()} Ridwanul Basit • All Rights Reserved
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
