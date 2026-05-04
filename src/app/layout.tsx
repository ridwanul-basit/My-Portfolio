import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Md. Ridwanul Basit | Software Engineer",
  description: "Portfolio of Md. Ridwanul Basit, Software Engineer with experience in E-commerce, ERP, and OTA domains.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased dark`}
    >
      <body className="min-h-full flex flex-col bg-[#121212] text-white selection:bg-orange-500/30 selection:text-orange-500" suppressHydrationWarning>
        <div className="fixed left-0 top-0 bottom-0 w-16 hidden lg:flex flex-col items-center justify-end pb-12 border-r border-white/5 z-40 bg-[#121212]">
          <div className="flex flex-col items-center gap-6 text-slate-500">
            <span className="text-vertical text-[10px] tracking-[0.5em] font-mono uppercase opacity-20">Follow Me</span>
            <div className="w-px h-32 bg-white/10 mx-auto mt-2"></div>
            <a href="https://github.com/ridwanul-basit" target="_blank" className="hover:text-orange-500 transition-all hover:-translate-y-1"><FaGithub size={20} /></a>
            <a href="https://linkedin.com/in/md-ridwanul-basit" target="_blank" className="hover:text-orange-500 transition-all hover:-translate-y-1"><FaLinkedin size={20} /></a>
          </div>
        </div>

        {/* Vertical Decorative Name (Right) */}
        <div className="fixed right-8 bottom-0 hidden lg:flex flex-col items-center gap-6 z-40">
          <span className="text-vertical text-7xl font-black text-white/5 uppercase select-none tracking-tighter">BASIT</span>
          <div className="w-px h-32 bg-orange-500/50"></div>
        </div>

        <main className="min-h-screen lg:pl-16">
          {children}
        </main>
      </body>
    </html>
  );
}
