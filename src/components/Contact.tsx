"use client";

import { motion } from "framer-motion";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.target as HTMLFormElement);
    formData.append("access_key", "4477b1bf-0e5f-4b6c-958c-3e0d8e8c37b9"); 

    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setIsSuccess(true);
        (e.target as HTMLFormElement).reset();
        setTimeout(() => setIsSuccess(false), 5000);
      } else {
        alert("Error: " + data.message);
      }
    } catch (error) {
      alert("An error occurred. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 relative">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[20%] right-[-10%] w-96 h-96 bg-blue-600/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-emerald-600/10 rounded-full blur-[100px]" />
      </div>

      <div className="container mx-auto max-w-5xl relative z-10">
        <div className="mb-16 text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl font-bold mb-4"
          >
            Let&apos;s Work Together
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-slate-600 max-w-2xl mx-auto"
          >
            I&apos;m currently looking for new opportunities. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
          </motion.p>
        </div>

        <div className="grid md:grid-cols-5 gap-12">
          {/* Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-2 space-y-8"
          >
            <div className="flex items-start gap-4">
              <div className="p-4 bg-blue-50 rounded-xl text-blue-600 border border-blue-100">
                <Mail size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Email</h3>
                <a href="mailto:ridwanulbasit32@gmail.com" className="text-slate-600 hover:text-blue-600 transition-colors">
                  ridwanulbasit32@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-4 bg-emerald-50 rounded-xl text-emerald-600 border border-emerald-100">
                <Phone size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Phone</h3>
                <a href="tel:+8801756425539" className="text-slate-600 hover:text-emerald-600 transition-colors">
                  +880 1756-425539
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="p-4 bg-purple-50 rounded-xl text-purple-600 border border-purple-100">
                <MapPin size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white mb-1">Location</h3>
                <p className="text-slate-600">
                  Dhaka, Bangladesh
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="md:col-span-3"
          >
            <form onSubmit={handleSubmit} className="glass-card p-8 rounded-2xl space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium text-slate-600">Your Name</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name"
                    required
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    placeholder="John Doe"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium text-slate-600">Your Email</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email"
                    required
                    className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                    placeholder="john@example.com"
                  />
                </div>
              </div>
              
              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium text-slate-300">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  name="subject"
                  required
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                  placeholder="Project Inquiry"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-slate-300">Message</label>
                <textarea 
                  id="message" 
                  name="message"
                  required
                  rows={5}
                  className="w-full bg-slate-900/50 border border-slate-700 rounded-lg px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all resize-none"
                  placeholder="Hello Md. Ridwanul, I would like to talk about..."
                />
              </div>

              <button 
                type="submit" 
                disabled={isSubmitting}
                className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-600/50 text-white font-medium py-4 rounded-lg flex items-center justify-center gap-2 transition-all"
              >
                {isSubmitting ? (
                  <span className="animate-pulse">Sending...</span>
                ) : isSuccess ? (
                  <span>Message Sent Successfully!</span>
                ) : (
                  <>Send Message <Send size={18} /></>
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
