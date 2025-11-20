'use client';

import { ChevronDownIcon, HomeIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { JSX, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import SidebarFooter from "./SidebarFooter";
import { FaSmile, FaCommentDots, FaHeart, FaChartLine, FaRegCalendarAlt, FaDatabase, FaProjectDiagram, FaInfoCircle } from "react-icons/fa";

interface SubMenuProps {
  title: string;
  year: string;
  items: string[];
}

const analysisIcons: Record<string, JSX.Element> = {
  Polarity: <FaSmile className="w-4 h-4" />,
  Subjectivity: <FaCommentDots className="w-4 h-4" />,
  Emotion: <FaHeart className="w-4 h-4" />,
  "Sentiment Score": <FaChartLine className="w-4 h-4" />,
};

const SubMenu = ({ title, year, items }: SubMenuProps) => {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const isActive = pathname.includes(`/${year}/`);

  return (
    <div className="flex flex-col">
      <button
        className={`flex items-center justify-between w-full px-6 py-3 transition rounded text-left ${
          open || isActive ? "text-[#64ffda]" : "hover:text-[#64ffda] hover:bg-slate-800/50"
        }`}
        onClick={() => setOpen(!open)}
      >
        <FaRegCalendarAlt className="w-4 h-4" />
        {title}
        <ChevronDownIcon className={`w-4 h-4 transition-transform ${open ? "rotate-180" : ""}`} />
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
                className={`flex items-center gap-2 px-4 py-2 rounded transition ${
                  isActive
                    ? "bg-[#64ffda]/10 text-[#64ffda] font-semibold"
                    : "hover:bg-slate-800/50 hover:text-[#64ffda]"
                }`}
              >
                {analysisIcons[item]}
                <span>{item}</span>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
};

const SidebarContent = () => {
  const pathname = usePathname();
  const years = ["2016", "2020", "2024"];
  const analysisItems = ["Polarity", "Subjectivity", "Emotion", "Sentiment Score"];

  return (
    <nav className="flex-1 flex flex-col mt-4 overflow-y-auto sidebar-scroll">
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

      <div className="flex items-center my-2 px-6">
        <div className="flex-1 h-px bg-slate-700 rounded-l"></div>
        <div className="flex-1 h-px bg-slate-700 rounded-r"></div>
      </div>

      <div className="px-6 mt-2">
        <p className="text-slate-400 uppercase text-xs mb-1 tracking-wide">Sentiment Analysis</p>
      </div>

      {years.map((year) => (
        <SubMenu key={year} title={`${year} Debate`} year={year} items={analysisItems} />
      ))}

      <div className="flex items-center my-2 px-6">
        <div className="flex-1 h-px bg-slate-700 rounded-l"></div>
        <div className="flex-1 h-px bg-slate-700 rounded-r"></div>
      </div>

      <div className="px-6 mt-2">
        <p className="text-slate-400 uppercase text-xs mb-1 tracking-wide">Supporting Pages</p>
        <Link
          href="/datasets"
          className={`flex items-center gap-2 px-4 py-2 rounded transition ${
            pathname === "/datasets"
              ? "bg-[#64ffda]/10 text-[#64ffda] font-semibold"
              : "hover:bg-slate-800/50 hover:text-[#64ffda]"
          }`}
        >
          <FaDatabase className="w-4 h-4" />
          Datasets
        </Link>
        <Link
          href="/methodologies"
          className={`flex items-center gap-2 px-4 py-2 rounded transition ${
            pathname === "/methodologies"
              ? "bg-[#64ffda]/10 text-[#64ffda] font-semibold"
              : "hover:bg-slate-800/50 hover:text-[#64ffda]"
          }`}
        >
          <FaProjectDiagram className="w-4 h-4" />
          Methodologies
        </Link>
        <Link
          href="/about"
          className={`flex items-center gap-2 px-4 py-2 rounded transition ${
            pathname === "/about"
              ? "bg-[#64ffda]/10 text-[#64ffda] font-semibold"
              : "hover:bg-slate-800/50 hover:text-[#64ffda]"
          }`}
        >
          <FaInfoCircle className="w-4 h-4" />
          About
        </Link>
      </div>
    </nav>
  );
};

export const Sidebar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex fixed top-0 left-0 w-64 h-screen bg-slate-900/95 backdrop-blur border-r border-slate-800 text-white flex flex-col shadow-lg">
      {/* Brand / Logo */}
      <div className="h-16 flex items-center justify-center font-bold text-xl border-b border-slate-800">
        <motion.a
          href="/"
          whileTap={{ scale: 0.95 }}
          transition={{ type: "spring", stiffness: 260, damping: 16 }}
          className="inline-flex items-center justify-center"
          style={{ lineHeight: 0, transformOrigin: "center" }}
        >
          {  /***
             *  <Image
                  src="/logo-transparent.svg"
                  alt="Logo"
                  width={620}
                  height={100}
                  className="w-40 h-40 ml-2 rounded-sm"
                />
            */
          }
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-2 px-2 py-1 bg-slate-800/50 rounded text-xs text-[#64ffda] border border-slate-700"
          >
            <span className="animate-pulse">
              🚧 Site in Development — All charts and metrics are for demonstration only.
            </span>          
          </motion.div>

        </motion.a>
      </div>
        <SidebarContent />
        <SidebarFooter />
      </aside>

      {/* Mobile Navbar */}
      <div className="md:hidden fixed top-0 left-0 right-0 bg-slate-900/95 backdrop-blur z-50 flex items-center justify-between px-4 h-16 border-b border-slate-800">
        <Link href="/">
          <Image src="/logo-transparent.svg" alt="Logo" width={40} height={40} className="w-30 h-30 rounded-sm" />
        </Link>
        <button onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Sidebar Overlay */}
      {mobileOpen && (
        <motion.div
          initial={{ x: "-100%" }}
          animate={{ x: 0 }}
          exit={{ x: "-100%" }}
          transition={{ type: "spring", stiffness: 260, damping: 30 }}
          className="md:hidden fixed top-0 left-0 bottom-0 w-64 bg-slate-900/95 backdrop-blur z-40 shadow-lg flex flex-col"
        >
          <div className="h-16 flex items-center justify-center font-bold text-xl border-b border-slate-800">
            <Image src="/logo-transparent.svg" alt="Logo" width={620} height={100} className="w-40 h-40 ml-2 rounded-sm" />
          </div>
          <SidebarContent />
          <SidebarFooter />
        </motion.div>
      )}
    </>
  );
};

export default Sidebar;
