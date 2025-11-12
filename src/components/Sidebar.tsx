"use client";

import { ChevronDownIcon, HomeIcon } from "@heroicons/react/24/solid";
import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface SubMenuProps {
  title: string;
  items: string[];
}

function SubMenu({ title, items }: SubMenuProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col">
      <button
        className="flex items-center justify-between w-full px-6 py-3 hover:bg-slate-800/50 transition rounded text-left hover:text-[#64ffda]"
        onClick={() => setOpen(!open)}
      >
        {title}
        <ChevronDownIcon
          className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <div className="flex flex-col ml-6">
          {items.map((item) => (
            <a
              key={item}
              href="#"
              className="px-4 py-2 hover:bg-slate-800/50 rounded transition hover:text-[#64ffda]"
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default function Sidebar() {
  const years = ["2016 Debate", "2020 Debate", "2024 Debate"];
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
        <a
          href="#"
          className="flex items-center gap-2 px-6 py-3 hover:bg-slate-800/50 transition rounded hover:text-[#64ffda]"
        >
          <HomeIcon className="w-5 h-5" />
          Dashboard
        </a>

        {/* Year + Sentiment Analysis */}
        {years.map((year) => (
          <SubMenu key={year} title={year} items={analysisItems} />
        ))}
      </nav>
    </aside>
  );
}
