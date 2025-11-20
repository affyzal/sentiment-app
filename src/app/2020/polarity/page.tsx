"use client";

import Skeleton from "@/components/Skeleton";
import StatCard from "@/components/StatCard";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const mockCandidates = ["Trump", "Biden"];
const colors: Record<string, string> = {
  positive: "#DBA6FF",
  neutral: "#9BC2FF",
  negative: "#FF9F9F",
};

interface PolarityTrendEntry {
  time: number;
  [key: string]: number;
}

const mockPolarityTrend: PolarityTrendEntry[] = [
  { time: 1, Trump: 0.2, Biden: -0.1 },
  { time: 2, Trump: 0.1, Biden: 0.05 },
  { time: 3, Trump: -0.05, Biden: -0.2 },
  { time: 4, Trump: 0.3, Biden: 0.1 },
];

interface DistributionEntry {
  name: string;
  value: number;
  color: string;
  [key: string]: string | number;
}

const mockDistribution: DistributionEntry[] = [
  { name: "Positive", value: 40, color: colors.positive },
  { name: "Neutral", value: 35, color: colors.neutral },
  { name: "Negative", value: 25, color: colors.negative },
];

interface Quotes {
  positive: string[];
  negative: string[];
}

const mockQuotes: Quotes = {
  positive: [
    "I strongly believe in our future!",
    "This is a moment of hope for everyone.",
  ],
  negative: [
    "This approach is deeply flawed.",
    "We are failing our citizens if we continue.",
  ],
};

const candidates: string[] = ["Donald Trump", "Joe Biden", "Trump vs Biden"];

const PolarityDashboard = () => {
  const [selectedCandidate, setSelectedCandidate] = useState<string>(candidates[0]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="min-h-screen w-full bg-slate-900/95 text-slate-100 flex flex-col items-center p-4">
      
      {/* Header */}
      <div className="flex w-full justify-start gap-3 mb-6">
        {loading ? (
          <>
            <Skeleton width="120px" height="36px" className="rounded-md" />
            <Skeleton width="120px" height="36px" className="rounded-md" />
            <Skeleton width="120px" height="36px" className="rounded-md" />
          </>
        ) : (
          candidates.map((c) => (
            <button
              key={c}
              onClick={() => setSelectedCandidate(c)}
              className={`px-4 py-2 rounded-md text-sm transition border cursor-pointer
                ${
                  selectedCandidate === c
                    ? "border-[#64ffda] bg-[#64ffda]/10 text-[#64ffda]"
                    : "border-slate-700 hover:border-[#64ffda] hover:text-[#64ffda]"
                }`}
            >
              {c}
            </button>
          ))
        )}
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 w-full max-w-6xl mb-5">
        {loading ? (
          <>
            <Skeleton height="76px" />
            <Skeleton height="76px" />
            <Skeleton height="76px" />
            <Skeleton height="76px" />
          </>
        ) : (
          <>
            <StatCard label="Overall Polarity (Average Score)" value="0.05" />
            <StatCard label="Positive Statements" value="40" />
            <StatCard label="Neutral Statements" value="35" />
            <StatCard label="Negative Statements" value="25" />
          </>
        )}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl w-full mb-6">
        {loading ? (
          <>
            <Skeleton height="320px" />
            <Skeleton height="320px" />
          </>
        ) : (
          <>
            <motion.div className="rounded-xl border border-slate-800 bg-slate-800/40 backdrop-blur p-4 shadow-md">
              <h2 className="text-lg font-semibold text-[#64ffda] mb-2">Polarity Trend by Candidate</h2>
              <ResponsiveContainer width="100%" height={250}>
                <LineChart data={mockPolarityTrend}>
                  <XAxis dataKey="time" stroke="#94a3b8"/>
                  <YAxis stroke="#94a3b8"/>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: "#1e293b",
                      border: "none",
                      color: "white",
                    }} 
                  />
                  <Legend />
                  {mockCandidates.map((c) => (
                    <Line
                      key={c}
                      type="monotone"
                      dataKey={c}
                      stroke={c === "Trump" ? "#DC2626" : "#2563EB"} 
                      strokeWidth={2} />
                  ))}
                </LineChart>
              </ResponsiveContainer>
            </motion.div>

            <motion.div className="rounded-xl border border-slate-800 bg-slate-800/40 backdrop-blur p-4 shadow-md flex flex-col items-center">
              <h2 className="text-lg font-semibold text-[#64ffda] mb-2">Polarity Distribution</h2>
              <ResponsiveContainer width="100%" height={250}>
                <PieChart>
                  <Pie
                    data={mockDistribution}
                    dataKey="value"
                    nameKey="name"
                    innerRadius={40}
                    outerRadius={80}
                    paddingAngle={2}
                    label
                  >
                    {mockDistribution.map((entry) => (
                      <Cell key={entry.name} fill={entry.color} />
                    ))}
                  </Pie>
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </motion.div>
          </>
        )}
      </div>

      {/* Top Quotes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl w-full">
        {loading ? (
          <>
            <Skeleton height="115px" />
            <Skeleton height="115px" />
          </>
        ) : (
          <>
            <motion.div className="rounded-xl border border-slate-800 bg-slate-800/40 backdrop-blur p-4 shadow-md">
              <h2 className="text-lg font-semibold text-[#64ffda] mb-2">Top Positive Quotes</h2>
              <ul className="list-disc list-inside text-slate-300">
                {mockQuotes.positive.map((q, i) => (
                  <li key={i}>{q}</li>
                ))}
              </ul>
            </motion.div>

            <motion.div className="rounded-xl border border-slate-800 bg-slate-800/40 backdrop-blur p-4 shadow-md">
              <h2 className="text-lg font-semibold text-[#64ffda] mb-2">Top Negative Quotes</h2>
              <ul className="list-disc list-inside text-slate-300">
                {mockQuotes.negative.map((q, i) => (
                  <li key={i}>{q}</li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </div>

      <div className="mt-6 w-full p-4 rounded-xl border border-slate-800 bg-slate-800/40 backdrop-blur shadow-md">
        <p className="text-red-500 text-sm">
          This is placeholder data. Real polarity scoring will be added once
          transcript processing and NLP pipelines are fully implemented.
        </p>
      </div>
    </div>
  );
};

export default PolarityDashboard;
