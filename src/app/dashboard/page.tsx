"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const MotionLink = motion(Link);

const DashboardPage = () => {
  const years = ["2016", "2020", "2024"];
  const metrics = [
    { name: "Polarity", summary: "Shows the overall positivity or negativity in debate transcripts." },
    { name: "Subjectivity", summary: "Measures how subjective or opinionated the statements are." },
    { name: "Emotion", summary: "Highlights the emotional tone across the debates." },
  ];

  return (
    <div className="min-h-screen w-full bg-slate-900/95 text-slate-100 flex flex-col items-center justify-center p-8">
      {/* Animated Header */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="text-4xl sm:text-5xl font-bold mb-4 text-[#64ffda]"
      >
        Dashboard Overview
      </motion.h1>

      {/* Subtext */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.6 }}
        className="text-slate-400 text-center max-w-2xl mb-10"
      >
        This is your sentiment analysis dashboard. You’ll soon be able to explore
        polarity, subjectivity, and emotion trends across the 2016, 2020, and 2024
        presidential debates.
      </motion.p>

      {/* Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-5xl">
        {metrics.map((metric, metricIndex) => (
          <motion.div
            key={metric.name}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 + metricIndex * 0.1 }}
            className="rounded-xl border border-slate-800 bg-slate-800/40 backdrop-blur p-6 shadow-md hover:shadow-lg hover:border-[#64ffda] transition"
          >
            <h2 className="text-xl font-semibold mb-2 text-[#64ffda]">{metric.name}</h2>
            <p className="text-slate-400 text-sm">{metric.summary}</p>

            <div className="flex flex-col mt-4 gap-2">
              {years.map((year) => (
                <MotionLink
                  key={year}
                  href={`/${year}/${metric.name.toLowerCase().replace(" ", "-")}`}
                  className="flex items-center gap-2 text-sm text-slate-300 px-3 py-2 rounded-lg border border-transparent hover:border-[#64ffda] hover:text-[#64ffda] hover:bg-slate-800/30 transition cursor-pointer"
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                >
                  <span className="text-[#64ffda]">▹</span> {year}
                </MotionLink>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default DashboardPage;
