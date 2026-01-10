"use client";

import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import dynamic from "next/dynamic";
import ApproachCard from "@/components/ui/ApproachCard";

const Scene3D = dynamic(() => import("@/components/Scene3D"), { ssr: false });

export default function Home() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  
  return (
    <div className="min-h-screen text-gray-900 font-sans relative">
      <div className="fixed inset-0 bg-neutral-100" style={{ zIndex: -1 }} />
      
      <Scene3D 
        modelPath="/models/Pythagoras.glb" 
        position={[0.2, -25, -29]} 
        scale={1.1} 
        initialRotation={-0.1} 
      />

      <div className="max-w-4xl mx-auto px-6 py-32 relative z-10">
        {/* Header */}
        <header className="mb-32 text-center">
  <motion.h1
    style={{ y: heroY, opacity: heroOpacity }}
    className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-light mb-8 text-neutral-900 text-center tracking-tighter leading-none"
  >
    Mario Campos
  </motion.h1>

  <motion.p
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 }}
    className="text-lg text-neutral-500 mb-16 max-w-xl mx-auto leading-relaxed font-light"
  >
    Front-end developer building responsive, production-ready websites
  </motion.p>

  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.4, delay: 0.15 }}
    className="flex flex-wrap justify-center gap-6"
  >
    <Link
      href="/portfolio"
      className="px-8 py-3 bg-neutral-900 text-white hover:bg-neutral-700 transition-all text-sm tracking-wide hover:tracking-wider font-light hover:-translate-y-0.5"
    >
      Portfolio
    </Link>

    <Link
      href="/contact"
      className="px-8 py-3 border border-neutral-300 text-neutral-700 hover:border-neutral-900 transition-all text-sm tracking-wide hover:tracking-wider font-light hover:-translate-y-0.5"
    >
      Contact
    </Link>

    <a
      href="https://github.com/cnote86"
      target="_blank"
      rel="noopener noreferrer"
      className="px-8 py-3 border border-neutral-300 text-neutral-700 hover:border-neutral-900 transition-all flex items-center gap-2 text-sm tracking-wide hover:tracking-wider font-light hover:-translate-y-0.5"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github">
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
      </svg>
      GitHub
    </a>
  </motion.div>
</header>


        {/* About */}
       <motion.section
  initial={{ opacity: 0, y: 24 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-80px" }}
  transition={{ duration: 0.45, ease: "easeOut" }}
  className="mb-32"
>
  <h2 className="text-3xl font-light mb-12 text-center text-neutral-900 tracking-tight">
    About
  </h2>
  <p className="text-neutral-600 leading-loose text-base text-center max-w-2xl mx-auto font-light">
    I build and maintain responsive, production-ready websites with a focus on clarity, reliability, and real-world deployment. My work includes live service websites, in-progress applications, and structured projects completed through formal training.
  </p>
</motion.section>

        {/* Skills */}
<motion.section
  initial={{ opacity: 0, y: 24 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-80px" }}
  transition={{ duration: 0.45, ease: "easeOut" }}
  className="mb-32"
>
  <h2 className="text-3xl font-light mb-12 text-center text-neutral-900 tracking-tight">
    Technical Skills
  </h2>

  <div className="flex flex-wrap justify-center gap-4">
    <span className="px-6 py-2 text-neutral-500 text-sm font-light tracking-wide">
      HTML/CSS
    </span>

    <span className="px-6 py-2 text-neutral-500 text-sm font-light tracking-wide">
      JavaScript
    </span>

    <span className="px-6 py-2 text-neutral-500 text-sm font-light tracking-wide">
      React
    </span>

    <span className="px-6 py-2 text-neutral-500 text-sm font-light tracking-wide">
      Responsive Design
    </span>

    <span className="px-6 py-2 text-neutral-500 text-sm font-light tracking-wide">
      Cloud Deployment
    </span>
  </div>
</motion.section>

        {/* Featured Projects */}
<motion.section
  initial={{ opacity: 0, y: 24 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-80px" }}
  transition={{ duration: 0.45, ease: "easeOut" }}
  className="mb-32"
>
  <h2 className="text-3xl font-light mb-16 text-center text-neutral-900 tracking-tight">
    Selected Work
  </h2>

  <div className="grid md:grid-cols-3 gap-12">
    <div className="text-center">
      <h3 className="font-light text-lg mb-2 text-neutral-900 opacity-60 hover:opacity-100 transition-opacity">
        <a
          href="https://rosiesjanitorialoc.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-neutral-500 transition-colors"
        >
          Rosie's Janitorial
        </a>
      </h3>
      <p className="text-xs text-neutral-400 mb-3 tracking-wide">Live Production</p>
      <p className="text-neutral-600 text-sm font-light leading-relaxed">
        Responsive, content-driven site focused on service clarity and trust.
      </p>
    </div>

    <div className="text-center">
      <h3 className="font-light text-lg mb-2 text-neutral-900 opacity-60 hover:opacity-100 transition-opacity">
        <a
          href="https://asmeconsulttoria.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-neutral-500 transition-colors"
        >
          ASME Consultoría
        </a>
      </h3>
      <p className="text-xs text-neutral-500 mb-3 tracking-wide">
        Professional Services
      </p>
      <p className="text-neutral-600 text-sm font-light leading-relaxed">
        Clean layouts with accessibility focus and responsive behavior.
      </p>
    </div>

    <div className="text-center">
      <h3 className="font-light text-lg mb-2 text-neutral-900 opacity-60 hover:opacity-100 transition-opacity">
        <a
          href="https://camamezcuas.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-neutral-500 transition-colors"
        >
          CAM Amezcuas
        </a>
      </h3>
      <p className="text-xs text-neutral-400 mb-3 tracking-wide">Brand Website</p>
      <p className="text-neutral-600 text-sm font-light leading-relaxed">
        Balanced aesthetics with usability and performance.
      </p>
    </div>
  </div>

  <div className="text-center mt-16">
    <Link
      href="/portfolio"
      className="inline-block px-8 py-3 bg-neutral-900 text-white hover:bg-neutral-700 transition-all text-sm tracking-wide hover:tracking-wider font-light hover:-translate-y-0.5"
    >
      View All Work
    </Link>
  </div>
</motion.section>


        {/* Approach */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="mb-32"
        >
          <h2 className="text-3xl font-light mb-16 text-center text-neutral-900 tracking-tight">Approach</h2>
          <div className="grid md:grid-cols-2 gap-x-12 gap-y-8 max-w-3xl mx-auto">
            <div className="text-center">
              <h3 className="font-light text-base mb-2 text-neutral-900">Mobile-First</h3>
              <p className="text-neutral-500 text-sm font-light leading-relaxed">Responsive design as a requirement, not an afterthought.</p>
            </div>
            <div className="text-center">
              <h3 className="font-light text-base mb-2 text-neutral-900">Content Clarity</h3>
              <p className="text-neutral-500 text-sm font-light leading-relaxed">Prioritize trust and information hierarchy.</p>
            </div>
            <div className="text-center">
              <h3 className="font-light text-base mb-2 text-neutral-900">Production Ready</h3>
              <p className="text-neutral-500 text-sm font-light leading-relaxed">Comfortable with live environments and real deployments.</p>
            </div>
            <div className="text-center">
              <h3 className="font-light text-base mb-2 text-neutral-900">Maintainability</h3>
              <p className="text-neutral-500 text-sm font-light leading-relaxed">Optimize for long-term maintainability.</p>
            </div>
          </div>
        </motion.section>
        
        {/* Contact */}
        <section className="text-center">
          <h2 className="text-3xl font-light mb-12 text-neutral-900 tracking-tight">Get In Touch</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <a 
              href="mailto:info@codevostudio.com" 
              className="text-neutral-600 hover:text-neutral-900 font-light flex items-center gap-2 transition-all hover:tracking-wide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              info@codevostudio.com
            </a>
            <a 
              href="mailto:mc1986.99@gmail.com" 
              className="text-neutral-600 hover:text-neutral-900 font-light flex items-center gap-2 transition-all hover:tracking-wide"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                <polyline points="22,6 12,13 2,6"></polyline>
              </svg>
              mc1986.99@gmail.com
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}