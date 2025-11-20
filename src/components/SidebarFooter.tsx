import Link from "next/link";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const SidebarFooter = () => {
  return (
    <div className="mt-auto px-6 py-4 border-t border-slate-800 text-zinc-400 text-sm flex items-center justify-between">
      <Link
        href="https://afzalmiah.dev"
        target="_blank"
        className="hover:text-[#64ffda] transition-colors"
      >
        <p className="text-xs">&copy; {new Date().getFullYear()} Afzal Miah</p>
      </Link>

      <div className="flex gap-2">
        {/* LinkedIn Button */}
        <a
          href="https://www.linkedin.com/in/afzal-miah/"
          target="_blank"
          rel="noopener noreferrer"
          className="w-7 h-7 flex items-center justify-center rounded border border-[#64ffda]/70 bg-[#0077B5] 
                     hover:bg-[#64ffda] hover:scale-110 hover:shadow-[0_0_12px_2px_rgba(100,255,218,0.25)]
                     active:scale-95 active:shadow-[0_0_6px_1px_rgba(100,255,218,0.25)]
                     text-white transition-transform transition-shadow duration-200 ease-out"
          aria-label="LinkedIn"
        >
          <FaLinkedin size={14} />
        </a>

        {/* GitHub Button */}
        <a
          href="https://github.com/affyzal/sentiment-app"
          target="_blank"
          rel="noopener noreferrer"
          className="w-7 h-7 flex items-center justify-center rounded border border-[#64ffda]/70 bg-[#171515] 
                     hover:bg-[#64ffda] hover:text-[#0a192f] hover:scale-110 hover:shadow-[0_0_12px_2px_rgba(100,255,218,0.25)]
                     active:scale-95 active:shadow-[0_0_6px_1px_rgba(100,255,218,0.25)]
                     text-white transition-transform transition-shadow duration-200 ease-out"
          aria-label="GitHub"
        >
          <FaGithub size={14} />
        </a>
      </div>
    </div>
  );
};

export default SidebarFooter;
