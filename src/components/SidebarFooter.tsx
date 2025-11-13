"use client";

import Link from "next/link";

const SidebarFooter = () => {
  return (
    <div className="mt-auto px-6 py-4 border-t border-slate-800 text-zinc-400 text-sm flex flex-col gap-2">
      <p className="text-xs">
        &copy; {new Date().getFullYear()} Afzal Miah
      </p>
      <div className="flex flex-col gap-1">
        <Link
          href="https://github.com/affyzal"
          target="_blank"
          className="hover:text-[#64ffda] transition-colors text-xs"
        >
          GitHub
        </Link>
        <Link
          href="https://www.linkedin.com/in/afzalmiah/"
          target="_blank"
          className="hover:text-[#64ffda] transition-colors text-xs"
        >
          LinkedIn
        </Link>
        <a
          href="mailto:affyzal@gmail.com"
          className="hover:text-[#64ffda] transition-colors text-xs"
        >
          Contact
        </a>
      </div>
    </div>
  );
};

export default SidebarFooter;
