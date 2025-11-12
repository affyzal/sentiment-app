"use client";

import { ChevronDownIcon, HomeIcon } from "@heroicons/react/24/solid";
import { useState } from "react";

interface SubMenuProps {
  title: string;
  items: string[];
}

function SubMenu({ title, items }: SubMenuProps) {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col">
      <button
        className="flex items-center justify-between w-full px-6 py-3 hover:bg-slate-800/50 transition rounded text-left"
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
              className="px-4 py-2 hover:bg-slate-800/50 rounded transition"
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
  return (
    <aside className="fixed top-0 left-0 w-64 h-screen bg-slate-900/95 backdrop-blur border-r border-slate-800 text-white flex flex-col shadow-lg">
      {/* Brand / Logo */}
      <div className="h-16 flex items-center justify-center font-bold text-xl border-b border-slate-800">
        Sentiment
      </div>

      {/* Scrollable Menu */}
      <nav className="flex-1 flex flex-col mt-4 overflow-y-auto">
        <a
          href="#"
          className="flex items-center gap-2 px-6 py-3 hover:bg-slate-800/50 transition rounded"
        >
          <HomeIcon className="w-5 h-5" />
          Dashboard
        </a>

        {/* Sentiment Analysis Submenus */}
        <SubMenu
          title="2016 Debate"
          items={["Placeholder Chart 1", "Placeholder Chart 2", "Placeholder Chart 3"]}
        />
        <SubMenu
          title="2020 Debate"
          items={["Placeholder Chart 1", "Placeholder Chart 2", "Placeholder Chart 3"]}
        />
        <SubMenu
          title="2024 Debate"
          items={["Placeholder Chart 1", "Placeholder Chart 2", "Placeholder Chart 3"]}
        />
      </nav>
    </aside>
  );
}
