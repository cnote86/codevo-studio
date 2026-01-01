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
    className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-600 to-teal-600 bg-clip-text text-transparent"
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
      className="px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg hover:from-blue-700 hover:to-teal-700 transition-all shadow-lg hover:shadow-xl"
    >
      View Portfolio
    </Link>

    <Link
      href="/contact"
      className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 transition-all"
    >
      Contact Me
    </Link>

    <a
      href="https://github.com/cnote86"
      target="_blank"
      rel="noopener noreferrer"
      className="px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg hover:border-gray-400 transition-all"
    >
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

  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    variants={{
      hidden: {},
      visible: {
        transition: {
          staggerChildren: 0.06,
        },
      },
    }}
    className="flex flex-wrap justify-center gap-4"
  >
    <motion.span
      variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="px-4 py-2 bg-gradient-to-r from-blue-100 to-blue-200 text-blue-800 rounded-full font-medium shadow-sm"
    >
      HTML/CSS
    </motion.span>

    <motion.span
      variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="px-4 py-2 bg-gradient-to-r from-teal-100 to-teal-200 text-teal-800 rounded-full font-medium shadow-sm"
    >
      JavaScript
    </motion.span>

    <motion.span
      variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="px-4 py-2 bg-gradient-to-r from-purple-100 to-purple-200 text-purple-800 rounded-full font-medium shadow-sm"
    >
      React
    </motion.span>

    <motion.span
      variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="px-4 py-2 bg-gradient-to-r from-green-100 to-green-200 text-green-800 rounded-full font-medium shadow-sm"
    >
      Responsive Design
    </motion.span>

    <motion.span
      variants={{ hidden: { opacity: 0, y: 8 }, visible: { opacity: 1, y: 0 } }}
      transition={{ duration: 0.3, ease: "easeOut" }}
      className="px-4 py-2 bg-gradient-to-r from-indigo-100 to-indigo-200 text-indigo-800 rounded-full font-medium shadow-sm"
    >
      Cloud Deployment
    </motion.span>
  </motion.div>
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
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg text-center"
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
    </motion.div>

    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg text-center"
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
    </motion.div>

    <motion.div
      whileHover={{ y: -4 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="bg-white rounded-xl shadow-md p-6 border border-gray-100 hover:shadow-lg text-center"
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
    </motion.div>
  </div>

  <div className="text-center mt-8">
    <Link
      href="/portfolio"
      className="inline-block px-6 py-3 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg hover:from-blue-700 hover:to-teal-700 transition-all shadow-lg"
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
                className="text-blue-600 hover:underline font-medium"
              >
                info@codevostudio.com
              </a>
              <span className="text-gray-400">|</span>
              <a 
                href="mailto:mc1986.99@gmail.com" 
                className="text-blue-600 hover:underline font-medium"
              >
                mc1986.99@gmail.com
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}