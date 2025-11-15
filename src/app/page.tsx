"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 dark:bg-slate-900 font-sans">
      <main className="flex flex-col items-center justify-center w-full max-w-3xl px-6 sm:px-8 py-16 text-center">
        {/* Logo */}
        <motion.section 
          className="mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <Image
            src="/logo-transparent.svg"
            alt="Sentiment Dashboard Logo"
            width={120}
            height={120}
          />
        </motion.section>

        {/* Hero Title */}
        <motion.h1 
          className="text-3xl sm:text-4xl font-bold text-[#64ffda] mb-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          US Presidential Debate Sentiment Analysis
        </motion.h1>

        {/* Hero Subtitle */}
        <motion.p 
          className="text-base sm:text-lg text-slate-700 dark:text-slate-300 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Explore sentiment and emotions during the US presidential debates. Analyze polarity, subjectivity, and sentiment scores for the 2016, 2020, and 2024 debates using our interactive dashboard.
        </motion.p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center w-full">
          <motion.a
            href="/dashboard"
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-white bg-slate-900 text-white font-semibold transition w-full sm:w-auto max-w-xs hover:bg-transparent hover:border-[#64ffda] hover:text-[#64ffda]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            Go To Dashboard
          </motion.a>
          <motion.a
            href="https://www.ibm.com/think/topics/sentiment-analysis"
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="flex items-center justify-center gap-2 px-6 py-3 rounded-full border border-white bg-slate-900 text-white font-semibold transition w-full sm:w-auto max-w-xs hover:bg-transparent hover:border-[#64ffda] hover:text-[#64ffda]"
          >
            Sentiment Analysis
          </motion.a>
        </div>
      </main>
    </div>
  );
}
export default Home;