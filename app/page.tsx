"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import ApproachCard from "@/components/ui/ApproachCard";


export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 text-gray-900 font-sans">
      <div className="max-w-4xl mx-auto px-6 py-16">
        {/* Header */}
        <header className="mb-16 text-center">
  <motion.div
    initial={{ opacity: 0, y: 12 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.4, ease: "easeOut" }}
    className="inline-block p-1 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full mb-6"
  >
    <div className="bg-white rounded-full px-6 py-2">
      <span className="text-sm font-semibold text-gray-700">
        Front-End Developer
      </span>
    </div>
  </motion.div>

  <motion.h1
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.45, ease: "easeOut", delay: 0.05 }}
    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent text-center"
  >
    Mario Campos | CodevoStudio
  </motion.h1>

  <motion.p
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.45, ease: "easeOut", delay: 0.1 }}
    className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed"
  >
    Building responsive, production-ready websites with clarity and reliability
  </motion.p>

  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.4, delay: 0.15 }}
    className="flex flex-wrap justify-center gap-4 mb-12"
  >
    <Link
      href="/portfolio"
      className="px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg hover:from-blue-700 hover:to-teal-700 transition-all shadow-lg hover:shadow-xl hover:shadow-blue-500/30"
    >
      View Portfolio
    </Link>

    <Link
      href="/contact"
      className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 transition-all hover:shadow-lg hover:shadow-teal-300/30"
    >
      Contact Me
    </Link>

    <a
      href="https://github.com/cnote86"
      target="_blank"
      rel="noopener noreferrer"
      className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 transition-all hover:shadow-lg hover:shadow-purple-300/30 flex items-center gap-2"
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github">
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
  className="mb-16 bg-white rounded-2xl shadow-lg p-8"
>
  <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
    About Me
  </h2>
  <p className="text-gray-700 leading-relaxed text-lg text-center max-w-3xl mx-auto">
    I build and maintain responsive, production-ready websites with a focus on
    clarity, reliability, and real-world deployment. My work includes live
    service websites, in-progress applications, and structured projects
    completed through formal training.
  </p>
</motion.section>

        {/* Skills */}
        {/* Skills */}
<motion.section
  initial={{ opacity: 0, y: 24 }}
  whileInView={{ opacity: 1, y: 0 }}
  viewport={{ once: true, margin: "-80px" }}
  transition={{ duration: 0.45, ease: "easeOut" }}
  className="mb-16 bg-white rounded-2xl shadow-lg p-8"
>
  <h2 className="text-3xl font-bold mb-8 text-center text-gray-800">
    Technical Skills
  </h2>

  <div className="flex flex-wrap justify-center gap-4">
    <span className="px-4 py-2 bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 rounded-full font-medium">
      HTML/CSS
    </span>

    <span className="px-4 py-2 bg-gradient-to-r from-teal-100 to-teal-200 text-teal-800 rounded-full font-medium">
      JavaScript
    </span>

    <span className="px-4 py-2 bg-gradient-to-r from-purple-100 to-purple-200 text-purple-800 rounded-full font-medium">
      React
    </span>

    <span className="px-4 py-2 bg-gradient-to-r from-green-100 to-green-200 text-green-800 rounded-full font-medium">
      Responsive Design
    </span>

    <span className="px-4 py-2 bg-gradient-to-r from-indigo-100 to-indigo-200 text-indigo-800 rounded-full font-medium">
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
  className="mb-16"
>
  <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">
    Featured Projects
  </h2>

  <div className="grid md:grid-cols-3 gap-8">
    <div
      className="bg-white rounded-xl shadow-md p-6 border border-gray-100 text-center"
    >
      <h3 className="font-bold text-lg mb-3 text-gray-800">
        <a
          href="https://rosiesjanitorialoc.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          Rosie's Janitorial
        </a>
      </h3>
      <p className="text-sm text-gray-600 mb-3">Live production website</p>
      <p className="text-gray-700 text-sm">
        Responsive, content-driven site focused on service clarity and trust.
      </p>
    </div>

    <div
      className="bg-white rounded-xl shadow-md p-6 border border-gray-100 text-center"
    >
      <h3 className="font-bold text-lg mb-3 text-gray-800">
        <a
          href="https://asmeconsulttoria.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          ASME Consultoría
        </a>
      </h3>
      <p className="text-sm text-gray-600 mb-3">
        Professional services platform
      </p>
      <p className="text-gray-700 text-sm">
        Clean layouts with accessibility focus and responsive behavior.
      </p>
    </div>

    <div
      className="bg-white rounded-xl shadow-md p-6 border border-gray-100 text-center"
    >
      <h3 className="font-bold text-lg mb-3 text-gray-800">
        <a
          href="https://camamezcuas.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 hover:underline"
        >
          CAM Amezcuas
        </a>
      </h3>
      <p className="text-sm text-gray-600 mb-3">Brand-focused website</p>
      <p className="text-gray-700 text-sm">
        Balanced aesthetics with usability and performance.
      </p>
    </div>
  </div>

  <div className="text-center mt-8">
    <Link
      href="/portfolio"
      className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg hover:from-blue-700 hover:to-teal-700 transition-all shadow-lg hover:shadow-xl hover:shadow-blue-500/40"
    >
      View Full Portfolio
    </Link>
  </div>
</motion.section>


        {/* Approach */}
        <section className="mb-16 bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">My Approach</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <ApproachCard
              title="Mobile-First Focus"
              description="Responsive design as a requirement, not an afterthought."
              color="blue"
            />
            <ApproachCard
              title="Content Clarity"
              description="Prioritize trust and information hierarchy for content-heavy pages."
              color="teal"
            />
            <ApproachCard
              title="Production Ready"
              description="Comfortable with live cloud-hosted environments and real deployments."
              color="purple"
            />
            <ApproachCard
              title="Maintainability"
              description="Optimize for long-term maintainability, not just visuals."
              color="green"
            />
          </div>
        </section>
        
        {/* Contact */}
        <section className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">Get In Touch</h2>
          <div className="text-center">
            <p className="text-gray-700 mb-4 text-lg">Interested in working together?</p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="mailto:info@codevostudio.com" 
                className="text-blue-600 hover:underline font-medium flex items-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                info@codevostudio.com
              </a>
              <span className="text-gray-400">|</span>
              <a 
                href="mailto:mc1986.99@gmail.com" 
                className="text-blue-600 hover:underline font-medium flex items-center gap-2"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-mail">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                mc1986.99@gmail.com
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}