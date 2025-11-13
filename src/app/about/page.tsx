"use client";

import { motion } from "framer-motion";
import { FaInfoCircle, FaGithub, FaEnvelope, FaGlobe } from "react-icons/fa";

export default function AboutPage() {
  return (
    <div className="p-6 md:p-10 text-white">
      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h1 className="text-3xl font-bold text-[#64ffda] mb-2 flex items-center gap-2">
          <FaInfoCircle className="w-6 h-6" />
          About This Project
        </h1>
        <p className="text-slate-400 max-w-2xl">
          The Sentiment Analysis Dashboard visualizes emotional tone and polarity in U.S. 
          presidential debates. Built to explore how language, tone, and expression 
          evolve over time, it leverages NLP and modern web visualization tools.
        </p>
      </motion.div>

      {/* Project Overview */}
      <motion.section
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mt-8 bg-slate-900/70 border border-slate-800 rounded-2xl p-6"
      >
        <h2 className="text-xl font-semibold text-[#64ffda] mb-3">
          Project Overview
        </h2>
        <p className="text-slate-300 leading-relaxed">
          This dashboard was created as a data-driven exploration of sentiment and emotional
          trends across political debates. Using natural language processing (NLP) models,
          debate transcripts are analyzed for polarity (positivity or negativity),
          subjectivity (factual vs. opinionated tone), and emotion intensity.
        </p>
        <p className="text-slate-400 mt-3">
          The visual interface allows users to easily explore these metrics across multiple
          debate years, highlighting how candidate tone and linguistic style shift over time.
        </p>
      </motion.section>

      {/* Tech Stack */}
      <motion.section
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-8 bg-slate-900/70 border border-slate-800 rounded-2xl p-6"
      >
        <h2 className="text-xl font-semibold text-[#64ffda] mb-3">Tech Stack</h2>
        <ul className="list-disc list-inside text-slate-300 space-y-1">
          <li><strong>Frontend:</strong> Next.js, React, Tailwind CSS</li>
          <li><strong>Animations:</strong> Framer Motion</li>
          <li><strong>Charts:</strong> Recharts</li>
          <li><strong>Deployment:</strong> Vercel</li>
          <li><strong>Language Processing:</strong> Python (spaCy / TextBlob / transformers)</li>
        </ul>
      </motion.section>

      {/* Author / Contact */}
      <motion.section
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-8 bg-slate-900/70 border border-slate-800 rounded-2xl p-6"
      >
        <h2 className="text-xl font-semibold text-[#64ffda] mb-3">Author</h2>
        <p className="text-slate-300 mb-4">
          Created by <span className="text-[#64ffda] font-medium">Afzal Miah</span> - a developer interested in 
          natural language processing, data visualization, and interactive storytelling through data.
        </p>

        <div className="flex items-center gap-4 text-slate-400">
          <a
            href="https://github.com/affyzal"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 hover:text-[#64ffda] transition"
          >
            <FaGithub className="w-4 h-4" /> GitHub
          </a>
          <a
            href="mailto:contact@afzalmiah.dev"
            className="flex items-center gap-2 hover:text-[#64ffda] transition"
          >
            <FaEnvelope className="w-4 h-4" /> Email
          </a>
          <a
            href="https://afzalmiah.dev"
            target="_blank"
            className="flex items-center gap-2 hover:text-[#64ffda] transition"
          >
            <FaGlobe className="w-4 h-4" /> Website
          </a>
        </div>
      </motion.section>

      {/* Footer Note */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="text-center text-slate-600 text-sm mt-10"
      >
        © {new Date().getFullYear()} Sentiment Analysis Dashboard - All rights reserved.
      </motion.p>
    </div>
  );
}
