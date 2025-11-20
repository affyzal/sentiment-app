"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const SidebarFooter = () => {
  return (
    <div className="mt-auto px-6 py-4 border-t border-slate-800 text-zinc-400 text-sm flex items-center justify-between">
      <Link href="https://afzalmiah.dev" target="_blank" rel="noopener noreferrer" className="hover:text-[#64ffda] transition-colors">
        <p className="text-xs">&copy; {new Date().getFullYear()} Afzal Miah</p>
      </Link>
      <div className="flex gap-2">
        {/* LinkedIn Button */}
        <motion.a
          href="https://www.linkedin.com/in/afzal-miah/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{
            scale: 1.1,
            boxShadow: '0 0 12px 2px rgba(100,255,218,0.25)',
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 260, damping: 16 }}
          className="w-7 h-7 flex items-center justify-center rounded border border-[#64ffda]/70 bg-[#0077B5] hover:bg-[#64ffda] text-white transition"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={14} />
        </motion.a>

        {/* GitHub Button */}
        <motion.a
          href="https://github.com/affyzal/sentiment-app"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{
            scale: 1.1,
            boxShadow: '0 0 12px 2px rgba(100,255,218,0.25)',
          }}
          whileTap={{ scale: 0.95 }}
          transition={{ type: 'spring', stiffness: 260, damping: 16 }}
          className="w-7 h-7 flex items-center justify-center rounded border border-[#64ffda]/70 bg-[#171515] hover:bg-[#64ffda] text-white hover:text-[#0a192f] transition"
          aria-label="GitHub"
        >
          <FaGithub size={14} />
        </motion.a>
      </div>
    </div>
  );
};

export default SidebarFooter;
