"use client";

import { motion } from "framer-motion";
import { ArrowPathIcon } from "@heroicons/react/24/solid";

export default function LoadingScreen() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-50 dark:bg-slate-900 text-slate-900 dark:text-slate-100 px-6 py-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, type: "spring" }}
        className="flex flex-col items-center justify-center bg-slate-100 dark:bg-slate-800 rounded-2xl shadow-lg p-10 max-w-md text-center"
      >
        {/* Spinner Icon */}
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
          className="mb-6"
        >
          <ArrowPathIcon className="w-14 h-14 text-[#64ffda]" />
        </motion.div>

        {/* Text */}
        <h1 className="text-2xl font-bold mb-2">Analyzing Data</h1>
        <p className="text-slate-600 dark:text-slate-400 mb-6">
          Please wait while we process debate sentiment and prepare insights.
        </p>

        {/* Progress shimmer */}
        <motion.div
          className="w-48 h-2 bg-slate-700/40 rounded-full overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="h-full bg-[#64ffda]"
            initial={{ x: "-100%" }}
            animate={{ x: ["-100%", "100%"] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
