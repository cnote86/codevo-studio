"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import { motion, useScroll, useTransform } from "framer-motion";

const BuddhaScene = dynamic(() => import("@/components/BuddhaScene"), { ssr: false });

export default function PortfolioPage() {
  const { scrollY } = useScroll();
  const heroY = useTransform(scrollY, [0, 500], [0, 150]);
  const heroOpacity = useTransform(scrollY, [0, 300], [1, 0]);
  
  return (
    <div className="min-h-screen text-gray-900 font-sans relative">
      <div className="fixed inset-0 bg-neutral-100" style={{ zIndex: -1 }} />
      
      <BuddhaScene 
        position={[0, -1.5, -0.8]} 
        scale={1.8} 
      />

      <div className="max-w-5xl mx-auto px-6 py-32 relative z-10">
        {/* Header */}
        <header className="mb-32 text-center">
          <Link href="/" className="text-slate-500 hover:text-blue-600 text-sm mb-12 inline-block transition-colors">
            ← Back
          </Link>
          <motion.h1
            style={{ y: heroY, opacity: heroOpacity }}
            className="text-5xl sm:text-6xl md:text-8xl font-light mb-8 text-slate-800 text-center tracking-tighter leading-none"
          >
            Portfolio
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 }}
            className="text-lg text-slate-500 max-w-xl mx-auto font-light"
          >
            Production websites and development work
          </motion.p>
        </header>

        {/* Live Production Websites */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="mb-32"
        >
          <h2 className="text-3xl font-light text-slate-800 mb-4 text-center tracking-tight">Live Production</h2>
          <p className="text-slate-400 mb-16 text-center max-w-2xl mx-auto font-light">
            Real, publicly accessible sites built for real users
          </p>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
            <article className="text-center">
              <div className="text-xs font-light text-slate-800 uppercase tracking-wide mb-3">Live</div>
              <h3 className="font-light text-lg text-slate-800 mb-2 transition-opacity">
                <a href="https://rosiesjanitorialoc.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                  Rosie's Janitorial Services
                </a>
              </h3>
              <p className="text-xs text-slate-500 mb-3 font-light">Front-end, layout, deployment</p>
              <p className="text-slate-400 text-sm font-light leading-relaxed">
                Responsive, content-driven website focused on service clarity and trust. Structured for scalability and ongoing updates.
              </p>
            </article>

            <article className="text-center">
              <div className="text-xs font-light text-slate-800 uppercase tracking-wide mb-3">Live</div>
              <h3 className="font-light text-lg text-slate-800 mb-2 transition-opacity">
                <a href="https://asmeconsulttoria.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                  ASME Consultoría
                </a>
              </h3>
              <p className="text-xs text-slate-500 mb-3 font-light">Full-stack & SEO</p>
              <p className="text-slate-400 text-sm font-light leading-relaxed">
                Professional services platform emphasizing clarity and credibility. Clean, accessible layouts with responsive behavior.
              </p>
            </article>

            <article className="text-center">
              <div className="text-xs font-light text-slate-800 uppercase tracking-wide mb-3">Live</div>
              <h3 className="font-light text-lg text-slate-800 mb-2 transition-opacity">
                <a href="https://camamezcuas.com" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                  CAM Amezcuas
                </a>
              </h3>
              <p className="text-xs text-slate-500 mb-3 font-light">Full-stack & SEO</p>
              <p className="text-slate-400 text-sm font-light leading-relaxed">
                Brand-focused website combining marketing visuals with structured content. Balanced aesthetics with performance.
              </p>
            </article>

            <article className="text-center">
              <div className="text-xs font-light text-slate-800 uppercase tracking-wide mb-3">Live</div>
              <h3 className="font-light text-lg text-slate-800 mb-2 transition-opacity">
                <a href="https://servicios-fiscales.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                  Servicios Fiscales
                </a>
              </h3>
              <p className="text-xs text-slate-500 mb-3 font-light">Front-end development</p>
              <p className="text-slate-400 text-sm font-light leading-relaxed">
                Tax consulting website for Americans in Mexico. Compliance guidance and specialized advisory services.
              </p>
            </article>
          </div>
        </motion.section>

        {/* In-Progress Projects */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="mb-32"
        >
          <h2 className="text-3xl font-light text-slate-800 mb-4 text-center tracking-tight">In Development</h2>
          <p className="text-slate-400 mb-16 text-center max-w-2xl mx-auto font-light">
            Active projects reflecting production thinking
          </p>

          <div className="grid md:grid-cols-2 gap-x-16 gap-y-12">
            <article className="text-center">
              <div className="text-xs font-light text-slate-800 uppercase tracking-wide mb-3">In Progress</div>
              <h3 className="font-light text-lg text-slate-800 mb-2 opacity-60 hover:opacity-100 transition-opacity">DR All Season Travel</h3>
              <p className="text-xs text-neutral-500 mb-3 font-light">Front-end development</p>
              <p className="text-slate-400 text-sm font-light leading-relaxed">
                Scalable front-end structure. Responsive layouts and reusable components. Preparing for deployment.
              </p>
            </article>

            <article className="text-center">
              <div className="text-xs font-light text-slate-800 uppercase tracking-wide mb-3">Landing Live</div>
              <h3 className="font-light text-lg text-slate-800 mb-2 opacity-60 hover:opacity-100 transition-opacity">
                <a href="https://www.mi-tandita.com/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                  Mi Tandita
                </a>
              </h3>
              <p className="text-xs text-slate-500 mb-3 font-light">Product development</p>
              <p className="text-slate-400 text-sm font-light leading-relaxed">
                Mobile app for collective savings groups. Coordination, calendars, payment tracking. Landing page live.
              </p>
            </article>
          </div>
        </motion.section>

        {/* Training Projects */}
        <motion.section
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.45, ease: "easeOut" }}
          className="mb-32"
        >
          <h2 className="text-3xl font-light text-slate-800 mb-4 text-center tracking-tight">Training Projects</h2>
          <p className="text-slate-400 mb-16 text-center max-w-2xl mx-auto font-light">
            TripleTen bootcamp work reinforcing best practices
          </p>

          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <article className="text-center">
              <h3 className="font-light text-base text-slate-800 mb-3 transition-opacity">
                <a href="https://cnote86.github.io/web_project_around/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                  Around the U.S.
                </a>
              </h3>
              <ul className="text-xs text-slate-500 space-y-1 font-light">
                <li>Responsive layout</li>
                <li>DOM manipulation</li>
                <li>Front-end architecture</li>
              </ul>
            </article>

            <article className="text-center">
              <h3 className="font-light text-base text-slate-800 mb-3 transition-opacity">
                <a href="https://cnote86.github.io/web_project_homeland/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                  Homeland
                </a>
              </h3>
              <ul className="text-xs text-slate-500 space-y-1 font-light">
                <li>Component-based</li>
                <li>HTML/CSS structure</li>
                <li>Logic implementation</li>
              </ul>
            </article>

            <article className="text-center">
              <h3 className="font-light text-base text-slate-800 mb-3 transition-opacity">
                <a href="https://cnote86.github.io/web_project_coffeeshop/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                  Coffee Shop
                </a>
              </h3>
              <ul className="text-xs text-slate-500 space-y-1 font-light">
                <li>Semantic HTML</li>
                <li>CSS fundamentals</li>
                <li>Content-driven</li>
              </ul>
            </article>
          </div>

          <div className="max-w-md mx-auto">
            <article className="text-center">
              <h3 className="font-light text-base text-slate-800 mb-3 transition-opacity">
                <a href="https://cnote86.github.io/web_project_library_es/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                  Library System
                </a>
              </h3>
              <ul className="text-xs text-slate-500 space-y-1 font-light">
                <li>Advanced JavaScript</li>
                <li>Data management</li>
                <li>Complex UI</li>
              </ul>
            </article>
          </div>
        </motion.section>

        {/* Contact */}
        <section className="text-center">
          <h2 className="text-3xl font-light text-slate-800 mb-12 tracking-tight">Get In Touch</h2>
          <div className="flex flex-wrap justify-center gap-8">
            <a 
              href="mailto:info@codevostudio.com" 
              className="text-slate-400 hover:text-slate-800 font-light transition-all hover:tracking-wide"
            >
              info@codevostudio.com
            </a>
            <a 
              href="mailto:mc1986.99@gmail.com" 
              className="text-slate-400 hover:text-slate-800 font-light transition-all hover:tracking-wide"
            >
              mc1986.99@gmail.com
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
