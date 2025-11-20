'use client';

import { ChevronDownIcon, HomeIcon, Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import SidebarFooter from "./SidebarFooter";
import {
  FaSmile,
  FaCommentDots,
  FaHeart,
  FaChartLine,
  FaRegCalendarAlt,
  FaDatabase,
  FaProjectDiagram,
  FaInfoCircle
} from "react-icons/fa";

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

  useEffect(() => {
    if (pathname.includes(`/${year}/`)) setOpen(true);
  }, [pathname, year]);

  return (
    <div className="flex flex-col">
      <button
        className={`flex items-center justify-between w-full px-6 py-3 rounded text-left transition ${
          open ? "text-[#64ffda]" : "hover:text-[#64ffda] hover:bg-slate-800/50"
        }`}
        onClick={() => setOpen(!open)}
      >
        <FaRegCalendarAlt className="w-4 h-4" />
        {title}
        <ChevronDownIcon
          className={`w-4 h-4 transition-transform duration-300 ${
            open ? "rotate-180" : ""
          }`}
        />
      </button>

      {open && (
        <div className="flex flex-col ml-6">
          {items.map((item, index) => {
            const slug = item.toLowerCase().replace(/\s+/g, "-");
            const href = `/${year}/${slug}`;
            const isActive = pathname === href;

            return (
              <Link
                key={item}
                href={href}
                className={`flex items-center gap-2 px-4 py-2 rounded transition 
                  ${isActive
                    ? "bg-[#64ffda]/10 text-[#64ffda] font-semibold"
                    : "hover:bg-slate-800/50 hover:text-[#64ffda]"
                  } 
                  opacity-0 animate-fadeInUp delay-${index * 100}`}
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
        } opacity-0 animate-fadeInUp delay-100`}
      >
        <HomeIcon className="w-5 h-5" />
        Dashboard
      </Link>

      <div className="flex items-center my-2 px-6">
        <div className="flex-1 h-px bg-slate-700 rounded-l" />
        <div className="flex-1 h-px bg-slate-700 rounded-r" />
      </div>

      <div className="px-6 mt-2">
        <p className="text-slate-400 uppercase text-xs mb-1 tracking-wide opacity-0 animate-fadeInUp delay-200">
          Sentiment Analysis
        </p>
      </div>

      {years.map((year) => (
        <SubMenu key={year} title={year} year={year} items={analysisItems} />
      ))}

      <div className="flex items-center my-2 px-6">
        <div className="flex-1 h-px bg-slate-700 rounded-l" />
        <div className="flex-1 h-px bg-slate-700 rounded-r" />
      </div>

      <div className="px-6 mt-2 opacity-0 animate-fadeInUp delay-300">
        <p className="text-slate-400 uppercase text-xs mb-1 tracking-wide">
          Supporting Pages
        </p>
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
        <div className="h-16 flex items-center justify-center font-bold text-xl border-b border-slate-800">
          <Link href="/" className="inline-flex items-center justify-center mt-2 px-2 py-1 bg-slate-800/50 rounded text-xs text-[#64ffda] border border-slate-700 animate-pulse">
            🚧 Site in Development — All charts and metrics are for demonstration only.
          </Link>
        </div>
        <SidebarContent />
        <SidebarFooter />
      </aside>

      {/* Mobile Navbar */}
      <div className="md:hidden fixed top-0 left-0 right-0 bg-slate-900/95 backdrop-blur z-50 flex items-center justify-between px-4 h-16 border-b border-slate-800">
        <Link href="/">
          <Image src="/logo-transparent.svg" alt="Logo" width={40} height={40} className="w-10 h-10 rounded-sm" />
        </Link>
        <button onClick={() => setMobileOpen(!mobileOpen)}>
          {mobileOpen ? <XMarkIcon className="w-6 h-6" /> : <Bars3Icon className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Sidebar Overlay */}
      {mobileOpen && (
        <div className="md:hidden fixed top-0 left-0 bottom-0 w-64 bg-slate-900/95 backdrop-blur z-40 shadow-lg flex flex-col transform -translate-x-full animate-slideIn">
          <div className="h-16 flex items-center justify-center font-bold text-xl border-b border-slate-800">
            <Image src="/logo-transparent.svg" alt="Logo" width={160} height={40} className="w-40 h-10 rounded-sm" />
          </div>
          <SidebarContent />
          <SidebarFooter />
        </div>
      )}
    </>
  );
};

export default Sidebar;
