"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function ContactPage() {
  return (
    <div className="min-h-screen text-gray-900 font-sans relative">
      <div className="fixed inset-0 bg-neutral-100" style={{ zIndex: -1 }} />
      
      <div className="max-w-4xl mx-auto px-6 py-32 relative z-10">
        {/* Header */}
        <header className="mb-32 text-center">
          <Link href="/" className="text-slate-800 hover:text-blue-600 text-sm mb-12 inline-block transition-colors">
            ← Back
          </Link>
          <h1 className="text-5xl sm:text-6xl md:text-8xl font-light mb-8 text-slate-800 text-center tracking-tighter leading-none">
            Contact
          </h1>
          <p className="text-lg text-neutral-500 max-w-xl mx-auto font-light">
            Interested in working together? Let's connect.
          </p>
        </header>
        {/* Contact Info */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="mb-32"
        >
          <div className="grid md:grid-cols-2 gap-16">
            <div className="text-center">
              <h2 className="text-2xl font-light text-slate-800 mb-8 tracking-tight">Email</h2>
              <div className="space-y-4">
                <a 
                  href="mailto:mc1986.99@gmail.com" 
                  className="block text-neutral-600 hover:text-neutral-900 font-light transition-all hover:tracking-wide"
                >
                  mc1986.99@gmail.com
                </a>
                <a 
                  href="mailto:info@codevostudio.com" 
                  className="block text-neutral-600 hover:text-neutral-900 font-light transition-all hover:tracking-wide"
                >
                  info@codevostudio.com
                </a>
              </div>
            </div>
            
            <div className="text-center">
              <h2 className="text-2xl font-light text-slate-800 mb-8 tracking-tight">Connect</h2>
              <div className="space-y-4">
                <a 
                  href="https://github.com/cnote86" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-neutral-600 hover:text-neutral-900 font-light transition-all hover:tracking-wide"
                >
                  GitHub
                </a>
                <a 
                  href="https://www.linkedin.com/in/mario-ricardo-campos-hernandez-913642169" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block text-neutral-600 hover:text-neutral-900 font-light transition-all hover:tracking-wide"
                >
                  LinkedIn
                </a>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Contact Form */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45, ease: "easeOut" }}
        >
          <h2 className="text-3xl font-light text-slate-800 mb-12 text-center tracking-tight">Send a Message</h2>
          
          <form id="contactForm" className="space-y-6 max-w-2xl mx-auto">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="name" className="block text-sm font-light text-neutral-600 mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  required 
                  className="w-full px-4 py-3 border border-neutral-300 focus:ring-1 focus:ring-neutral-900 focus:border-neutral-900 transition-colors font-light"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-light text-neutral-600 mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  required 
                  className="w-full px-4 py-3 border border-neutral-300 focus:ring-1 focus:ring-neutral-900 focus:border-neutral-900 transition-colors font-light"
                  placeholder="your.email@example.com"
                />
              </div>
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-light text-neutral-600 mb-2">Phone (Optional)</label>
              <input 
                type="tel" 
                id="phone" 
                name="phone" 
                className="w-full px-4 py-3 border border-neutral-300 focus:ring-1 focus:ring-neutral-900 focus:border-neutral-900 transition-colors font-light"
                placeholder="Your phone number"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-light text-neutral-600 mb-2">Message</label>
              <textarea 
                id="message" 
                name="message" 
                required 
                rows={6} 
                className="w-full px-4 py-3 border border-neutral-300 focus:ring-1 focus:ring-neutral-900 focus:border-neutral-900 transition-colors resize-vertical font-light"
                placeholder="Tell me about your project or how I can help..."
              ></textarea>
            </div>
            
            <button 
              type="submit" 
              className="w-full px-8 py-3 bg-slate-800 text-white hover:bg-slatel-700 transition-all text-sm tracking-wide hover:tracking-wider font-light hover:-translate-y-0.5"
            >
              Send Message
            </button>
          </form>
          
          <div id="formMessage" className="mt-6 hidden p-4 max-w-2xl mx-auto"></div>
          
          <script dangerouslySetInnerHTML={{__html: `
            document.getElementById('contactForm').addEventListener('submit', async (e) => {
              e.preventDefault();
              
              const formData = new FormData(e.target);
              const data = Object.fromEntries(formData);
              
              const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                  'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
              });
              
              const result = await response.json();
              const messageEl = document.getElementById('formMessage');
              
              if (response.ok) {
                messageEl.className = 'mt-6 p-4 max-w-2xl mx-auto border border-neutral-900 text-neutral-900 font-light';
                messageEl.innerHTML = 'Message sent successfully! I will get back to you soon.';
                e.target.reset();
              } else {
                messageEl.className = 'mt-6 p-4 max-w-2xl mx-auto border border-neutral-900 text-neutral-900 font-light';
                messageEl.innerHTML = result.error || 'Failed to send message. Please try again.';
              }
              
              messageEl.classList.remove('hidden');
              
              // Hide message after 5 seconds
              setTimeout(() => {
                messageEl.classList.add('hidden');
              }, 5000);
            });
          `}} />
        </motion.section>
      </div>
    </div>
  );
}