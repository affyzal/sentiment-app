"use client";

import { ChevronDownIcon, HomeIcon } from "@heroicons/react/24/solid";
import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

interface SubMenuProps {
  title: string;
  year: string;
  items: string[];
}

const SubMenu = ({ title, year, items }: SubMenuProps) => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Open submenu automatically if current path matches this year
  useEffect(() => {
    if (pathname.includes(`/${year}/`)) {
      setOpen(true);
    }
  }, [pathname, year]);

  return (
    <div className="flex flex-col">
      <button
        className={`flex items-center justify-between w-full px-6 py-3 transition rounded text-left ${
          open ? "text-[#64ffda]" : "hover:text-[#64ffda] hover:bg-slate-800/50"
        }`}
        onClick={() => setOpen(!open)}
      >
        {title}
        <ChevronDownIcon
          className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="flex flex-col ml-6">
          {items.map((item) => {
            const slug = item.toLowerCase().replace(/\s+/g, "-");
            const href = `/${year}/${slug}`;
            const isActive = pathname === href;

            return (
              <Link
                key={item}
                href={href}
                className={`px-4 py-2 rounded transition ${
                  isActive
                    ? "bg-[#64ffda]/10 text-[#64ffda] font-semibold"
                    : "hover:bg-slate-800/50 hover:text-[#64ffda]"
                }`}
              >
                {item}
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

export const Sidebar = () => {
  const pathname = usePathname();
  const years = ["2016", "2020", "2024"];
  const analysisItems = ["Polarity", "Subjectivity", "Emotion", "Sentiment Score"];

  return (
    <aside className="fixed top-0 left-0 w-64 h-screen bg-slate-900/95 backdrop-blur border-r border-slate-800 text-white flex flex-col shadow-lg">
      {/* Brand / Logo */}
      <div className="h-16 flex items-center justify-center font-bold text-xl border-b border-slate-800">
        <motion.a
          href="/"
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 260, damping: 16 }}
          className="inline-flex items-center justify-center"
          style={{ lineHeight: 0, transformOrigin: "center" }}
        >
          <Image
            src="/logo-transparent.svg"
            alt="Logo"
            width={620}
            height={100}
            className="w-40 h-40 ml-2 rounded-sm"
          />
        </motion.a>
      </div>

      {/* Scrollable Menu */}
      <nav className="flex-1 flex flex-col mt-4 overflow-y-auto">
        <Link
          href="/dashboard"
          className={`flex items-center gap-2 px-6 py-3 rounded transition ${
            pathname === "/dashboard"
              ? "bg-[#64ffda]/10 text-[#64ffda] font-semibold"
              : "hover:bg-slate-800/50 hover:text-[#64ffda]"
          }`}
        >
          <HomeIcon className="w-5 h-5" />
          Dashboard
        </Link>

        {/* Year + Sentiment Analysis */}
        {years.map((year) => (
          <SubMenu
            key={year}
            title={`${year} Debate`}
            year={year}
            items={analysisItems}
          />
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;
