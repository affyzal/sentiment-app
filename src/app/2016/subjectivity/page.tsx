"use client";

import { motion } from "framer-motion";
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

const mockCandidates = ["Candidate A", "Candidate B"];
const colors: Record<string, string> = {
  subjective: "#f59e0b", // amber
  neutral: "#9ca3af",    // gray
  objective: "#3b82f6",  // blue
};

const mockSubjectivityTrend = [
  { time: 1, "Candidate A": 0.7, "Candidate B": 0.4 },
  { time: 2, "Candidate A": 0.5, "Candidate B": 0.6 },
  { time: 3, "Candidate A": 0.6, "Candidate B": 0.3 },
  { time: 4, "Candidate A": 0.4, "Candidate B": 0.5 },
];

const mockDistribution = [
  { name: "Subjective", value: 55, color: colors.subjective },
  { name: "Neutral", value: 25, color: colors.neutral },
  { name: "Objective", value: 20, color: colors.objective },
];

const mockQuotes = {
  subjective: [
    "I feel strongly that this is the right path.",
    "In my opinion, this will work best for everyone.",
  ],
  objective: [
    "The data shows a clear trend in policy outcomes.",
    "According to official records, this is the result.",
  ],
};

const SubjectivityDashboard = () => {
  return (
    <div className="w-full bg-slate-900/95 text-slate-100 flex flex-col items-center p-4">
      {/* Header */}

      {/* Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 w-full max-w-6xl mb-8">
        <motion.div className="rounded-xl border border-slate-800 bg-slate-800/40 backdrop-blur p-3 shadow-md">
          <h2 className="text-lg font-semibold text-[#64ffda] mb-2">Overall Subjectivity</h2>
          <p className="text-slate-400 text-sm">Average score: <span className="text-amber-400">0.52</span></p>
        </motion.div>

        <motion.div className="rounded-xl border border-slate-800 bg-slate-800/40 backdrop-blur p-3 shadow-md">
          <h2 className="text-lg font-semibold text-[#64ffda] mb-2">Subjective Statements</h2>
          <p className="text-slate-400 text-sm">55 statements</p>
        </motion.div>

        <motion.div className="rounded-xl border border-slate-800 bg-slate-800/40 backdrop-blur p-3 shadow-md">
          <h2 className="text-lg font-semibold text-[#64ffda] mb-2">Neutral Statements</h2>
          <p className="text-slate-400 text-sm">25 statements</p>
        </motion.div>

        <motion.div className="rounded-xl border border-slate-800 bg-slate-800/40 backdrop-blur p-3 shadow-md">
          <h2 className="text-lg font-semibold text-[#64ffda] mb-2">Objective Statements</h2>
          <p className="text-slate-400 text-sm">20 statements</p>
        </motion.div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl w-full mb-8">
        {/* Candidate Trend */}
        <motion.div className="rounded-xl border border-slate-800 bg-slate-800/40 backdrop-blur p-4 shadow-md">
          <h2 className="text-lg font-semibold text-[#64ffda] mb-2">Subjectivity Trend by Candidate</h2>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={mockSubjectivityTrend}>
              <XAxis dataKey="time" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
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
                  stroke={c === "Candidate A" ? colors.subjective : colors.objective}
                  strokeWidth={2}
                />
              ))}
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Distribution Pie */}
        <motion.div className="rounded-xl border border-slate-800 bg-slate-800/40 backdrop-blur p-4 shadow-md flex flex-col items-center">
          <h2 className="text-lg font-semibold text-[#64ffda] mb-2">Subjectivity Distribution</h2>
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
          <h2 className="text-lg font-semibold text-[#64ffda] mb-2">Top Subjective Quotes</h2>
          <ul className="list-disc list-inside text-slate-300">
            {mockQuotes.subjective.map((q, i) => (
              <li key={i}>{q}</li>
            ))}
          </ul>
        </motion.div>

        <motion.div className="rounded-xl border border-slate-800 bg-slate-800/40 backdrop-blur p-4 shadow-md">
          <h2 className="text-lg font-semibold text-[#64ffda] mb-2">Top Objective Quotes</h2>
          <ul className="list-disc list-inside text-slate-300">
            {mockQuotes.objective.map((q, i) => (
              <li key={i}>{q}</li>
            ))}
          </ul>
        </motion.div>
      </div>
    </div>
  );
};

export default SubjectivityDashboard;
