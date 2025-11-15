"use client";

import { motion } from "framer-motion";
import { FaDatabase, FaDownload, FaFileCsv, FaInfoCircle } from "react-icons/fa";

export default function DatasetsPage() {
  return (
    <div className="p-6 md:p-10 text-white">
      {/* Page Header */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
      >
        <h1 className="text-3xl font-bold text-[#64ffda] mb-2 flex items-center gap-2">
          <FaDatabase className="w-6 h-6" />
          Datasets
        </h1>
        <p className="text-slate-400 max-w-2xl">
          Explore the datasets used for sentiment analysis across political debates. 
          Each dataset includes transcripts, metadata, and pre-processed outputs used 
          in analysis models.
        </p>
      </motion.div>

      {/* Dataset Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
        {[
          {
            title: "2016 Debate Dataset",
            size: "42MB",
            description:
              "Transcripts and sentiment annotations from the 2016 U.S. presidential debates.",
          },
          {
            title: "2020 Debate Dataset",
            size: "56MB",
            description:
              "Cleaned and tokenized dataset containing sentiment and emotion labels for 2020 debates.",
          },
          {
            title: "2024 Debate Dataset",
            size: "61MB",
            description:
              "Latest dataset with NLP preprocessing, speaker tagging, and polarity scoring.",
          },
        ].map((dataset, index) => (
          <motion.div
            key={dataset.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 * index }}
            className="bg-slate-800/40 border border-slate-800 rounded-2xl p-5 shadow-md hover:bg-slate-800/70 transition hover:shadow-lg hover:border-[#64ffda] transition"
          >
            <h2 className="text-xl font-semibold mb-1 text-[#64ffda]">
              {dataset.title}
            </h2>
            <p className="text-slate-400 text-sm mb-3">{dataset.description}</p>
            <div className="flex items-center justify-between text-slate-500 text-sm">
              <div className="flex items-center gap-1">
                <FaFileCsv className="w-4 h-4" /> {dataset.size}
              </div>
              <button className="flex items-center gap-2 text-[#64ffda] hover:text-[#52e2c1] transition text-sm font-medium">
                <FaDownload className="w-4 h-4" /> Download
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Info Section */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
        className="mt-10 p-5 bg-slate-900/60 border border-slate-800 rounded-2xl text-sm text-slate-300"
      >
        <div className="flex items-center gap-2 mb-2 text-[#64ffda] font-semibold">
          <FaInfoCircle className="w-4 h-4" />
          Dataset Notes
        </div>
        <ul className="list-disc list-inside space-y-1 text-slate-400">
          <li>All datasets are for research and educational purposes only.</li>
          <li>Annotations were generated using a fine-tuned transformer model.</li>
          <li>Download links may be temporarily disabled while under review.</li>
        </ul>
      </motion.div>
    </div>
  );
}
