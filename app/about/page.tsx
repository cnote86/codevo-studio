"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { motion, useScroll, useTransform } from "framer-motion";

const RelicScene = dynamic(() => import("@/components/RelicScene"), { ssr: false });

export default function AboutPage() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  
  return (
    <div className="min-h-screen text-gray-900 font-sans relative">
      <div className="fixed inset-0 bg-neutral-100" style={{ zIndex: -1 }} />
      
      <RelicScene 
        position={[2.8, -1.2, -1]} 
        scale={1.6} 
        initialRotation={-0.15}
      />

      <div className="max-w-4xl mx-auto px-6 py-32 relative z-10">
        {/* Header */}
        <header className="mb-32 text-center">
          <Link href="/" className="text-neutral-500 hover:text-neutral-900 text-sm mb-12 inline-block transition-colors">
            ← Back
          </Link>
          <motion.h1
            style={{ y: heroY, opacity: heroOpacity }}
            className="text-5xl sm:text-6xl md:text-7xl font-light mb-8 text-neutral-900 text-center tracking-tighter leading-none"
          >
            About
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 }}
            className="text-lg text-neutral-500 max-w-xl mx-auto font-light"
          >
            Front-end developer focused on production-ready work
          </motion.p>
        </header>

        {/* Main Content */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="mb-32"
        >
          <h2 className="text-3xl font-light text-neutral-900 mb-12 text-center tracking-tight">What I Do</h2>
          <div className="space-y-6 text-neutral-600 leading-loose text-center max-w-2xl mx-auto font-light">
            <p>
              I specialize in building content-driven websites that prioritize clarity and usability. My work focuses on creating functional, reliable web experiences.
            </p>
            <p>
              Most projects involve information architecture, responsive design, and production deployment. I work on live sites, client projects, and continuous skill development.
            </p>
            <p>
              Key projects: Rosie's Janitorial, ASME Consultoría, CAM Amezcuas – websites delivering clear outcomes.
            </p>
          </div>
        </motion.section>

        {/* Tech Stack */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="mb-32"
        >
          <h2 className="text-3xl font-light text-neutral-900 mb-12 text-center tracking-tight">Tech Stack</h2>
          <div className="grid md:grid-cols-2 gap-16">
            <div className="text-center">
              <h3 className="font-light text-base text-neutral-900 mb-4">Core</h3>
              <ul className="text-neutral-600 text-sm space-y-2 font-light">
                <li>HTML5 & CSS3</li>
                <li>JavaScript</li>
                <li>React & Next.js</li>
                <li>Tailwind CSS</li>
                <li>Responsive Design</li>
              </ul>
            </div>
            <div className="text-center">
              <h3 className="font-light text-base text-neutral-900 mb-4">Deployment</h3>
              <ul className="text-neutral-600 text-sm space-y-2 font-light">
                <li>DigitalOcean</li>
                <li>Google Cloud</li>
                <li>Git & GitHub</li>
                <li>Vercel</li>
                <li>Build Tools</li>
              </ul>
            </div>
          </div>
        </motion.section>

        {/* Contact */}
        <section className="text-center">
          <h2 className="text-3xl font-light text-neutral-900 mb-12 tracking-tight">Get In Touch</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <a
              href="mailto:info@codevostudio.com"
              className="text-neutral-600 hover:text-neutral-900 font-light transition-all hover:tracking-wide"
            >
              info@codevostudio.com
            </a>
            <a
              href="mailto:mc1986.99@gmail.com"
              className="text-neutral-600 hover:text-neutral-900 font-light transition-all hover:tracking-wide"
            >
              mc1986.99@gmail.com
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
