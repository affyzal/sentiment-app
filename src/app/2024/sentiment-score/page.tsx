"use client";

import { motion } from "framer-motion";
import { WrenchScrewdriverIcon } from "@heroicons/react/24/solid";

export default function WorkInProgress() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-900 text-slate-100 px-6 py-10">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ type: "spring", stiffness: 100, damping: 12 }}
        className="flex flex-col items-center justify-center bg-slate-800 rounded-2xl shadow-lg p-10 max-w-md text-center"
      >
        <WrenchScrewdriverIcon className="w-16 h-16 text-[#64ffda] mb-4 animate-pulse" />
        <h1 className="text-2xl font-bold mb-2">Work in Progress</h1>
        <p className="text-slate-400 mb-6">
          This section is currently being built. Check back soon for updates!
        </p>
        <motion.div
          className="w-48 h-2 bg-slate-700/40 rounded-full overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="h-full bg-[#64ffda]"
            initial={{ width: "0%" }}
            animate={{ width: ["0%", "60%", "100%", "80%", "100%"] }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </motion.div>
      </motion.div>
    </div>
  );
}
