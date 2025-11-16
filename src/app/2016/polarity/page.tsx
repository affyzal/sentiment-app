"use client";

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
  positive: "#22c55e", // green
  neutral: "#9ca3af",  // gray
  negative: "#ef4444", // red
};

const mockPolarityTrend = [
  { time: 1, "Trump": 0.2, "Biden": -0.1 },
  { time: 2, "Trump": 0.1, "Biden": 0.05 },
  { time: 3, "Trump": -0.05, "Biden": -0.2 },
  { time: 4, "Trump": 0.3, "Biden": 0.1 },
];

const mockDistribution = [
  { name: "Positive", value: 40, color: colors.positive },
  { name: "Neutral", value: 35, color: colors.neutral },
  { name: "Negative", value: 25, color: colors.negative },
];

const mockQuotes = {
  positive: [
    "I strongly believe in our future!",
    "This is a moment of hope for everyone.",
  ],
  negative: [
    "This approach is deeply flawed.",
    "We are failing our citizens if we continue.",
  ],
};

const candidates = ["Donald Trump", "Hillary Clinton", "Trump vs Clinton"];

const PolarityDashboard = () => {
    const [selectedCandidate, setSelectedCandidate] = useState(candidates[0]);
    const [loading, setLoading] = useState(true);
  
    useEffect(() => {
      const t = setTimeout(() => setLoading(false), 800);
      return () => clearTimeout(t);
    }, []);
    
  return (
    <div className="w-full bg-slate-900/95 text-slate-100 flex flex-col items-center p-4">
      {/* Header */}
      <div className="flex w-full justify-start gap-3 mb-6">     
      {
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
      }
      </div>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 w-full max-w-6xl mb-8">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="rounded-xl border border-slate-800 bg-slate-800/40 backdrop-blur p-3 shadow-md"
        >
          <h2 className="text-lg font-semibold text-[#64ffda] mb-2">Overall Polarity</h2>
          <p className="text-slate-400 text-sm">Average score: <span className="text-green-400">0.05</span></p>
        </motion.div>

        <motion.div className="rounded-xl border border-slate-800 bg-slate-800/40 backdrop-blur p-3 shadow-md">
          <h2 className="text-lg font-semibold text-[#64ffda] mb-2">Positive Statements</h2>
          <p className="text-slate-400 text-sm">40 statements</p>
        </motion.div>

        <motion.div className="rounded-xl border border-slate-800 bg-slate-800/40 backdrop-blur p-3 shadow-md">
          <h2 className="text-lg font-semibold text-[#64ffda] mb-2">Neutral Statements</h2>
          <p className="text-slate-400 text-sm">35 statements</p>
        </motion.div>

        <motion.div className="rounded-xl border border-slate-800 bg-slate-800/40 backdrop-blur p-3 shadow-md">
          <h2 className="text-lg font-semibold text-[#64ffda] mb-2">Negative Statements</h2>
          <p className="text-slate-400 text-sm">25 statements</p>
        </motion.div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl w-full mb-8">
        {/* Candidate Trend */}
        <motion.div className="rounded-xl border border-slate-800 bg-slate-800/40 backdrop-blur p-4 shadow-md">
          <h2 className="text-lg font-semibold text-[#64ffda] mb-2">Polarity Trend by Candidate</h2>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={mockPolarityTrend}>
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Legend />
              {mockCandidates.map((c) => (
                <Line
                  key={c}
                  type="monotone"
                  dataKey={c}
                  stroke={c === "Trump" ? "#22c55e" : "#ef4444"}
                  strokeWidth={2}
                />
              ))}
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Distribution Pie */}
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
            </PieChart>
          </ResponsiveContainer>
        </motion.div>
      </div>

      {/* Top Quotes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl w-full">
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
      </div>
    </div>
  );
};

export default PolarityDashboard;
