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

const emotions = ["Joy", "Sadness", "Anger", "Surprise"];
const colors: Record<string, string> = {
  Joy: "#64ffda",
  Sadness: "#ff648a",
  Anger: "#ffb864",
  Surprise: "#64b5ff",
};


const mockEmotionTrend = [
  { time: 1, Joy: 0.3, Sadness: 0.2, Anger: 0.1, Surprise: 0.15 },
  { time: 2, Joy: 0.25, Sadness: 0.3, Anger: 0.2, Surprise: 0.1 },
  { time: 3, Joy: 0.35, Sadness: 0.15, Anger: 0.25, Surprise: 0.2 },
  { time: 4, Joy: 0.4, Sadness: 0.1, Anger: 0.3, Surprise: 0.25 },
];

const mockDistribution = [
  { name: "Joy", value: 30, color: colors.Joy },
  { name: "Sadness", value: 20, color: colors.Sadness },
  { name: "Anger", value: 25, color: colors.Anger },
  { name: "Surprise", value: 25, color: colors.Surprise },
];

const mockQuotes = {
  Joy: ["I am thrilled by these results!", "This makes me really happy."],
  Sadness: ["This is quite disappointing.", "I feel upset about this."],
  Anger: ["I am frustrated by the outcome!", "This is unacceptable!"],
  Surprise: ["I didn't expect this at all!", "This is quite surprising."],
};

const EmotionDashboard = () => {
  return (
    <div className="min-h-screen w-full bg-slate-900/95 text-slate-100 flex flex-col items-center p-4">
      {/* Header */}

      {/* Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-6 w-full max-w-6xl mb-8">
        {emotions.map((e) => (
          <motion.div
            key={e}
            className="rounded-xl border border-slate-800 bg-slate-800/40 backdrop-blur p-3 shadow-md"
          >
            <h2 className="text-lg font-semibold text-[#64ffda] mb-2">{e}</h2>
            <p className="text-slate-400 text-sm">Count: {mockDistribution.find((d) => d.name === e)?.value}</p>
          </motion.div>
        ))}
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl w-full mb-8">
        {/* Emotion Trend */}
        <motion.div className="rounded-xl border border-slate-800 bg-slate-800/40 backdrop-blur p-4 shadow-md">
          <h2 className="text-lg font-semibold text-[#64ffda] mb-2">Emotion Trend Over Time</h2>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={mockEmotionTrend}>
              <XAxis dataKey="time" />
              <YAxis />
              <Tooltip />
              <Legend />
              {emotions.map((e) => (
                <Line
                  key={e}
                  type="monotone"
                  dataKey={e}
                  stroke={colors[e]}
                  strokeWidth={2}
                />
              ))}
            </LineChart>
          </ResponsiveContainer>
        </motion.div>

        {/* Distribution Pie */}
        <motion.div className="rounded-xl border border-slate-800 bg-slate-800/40 backdrop-blur p-4 shadow-md flex flex-col items-center">
          <h2 className="text-lg font-semibold text-[#64ffda] mb-2">Emotion Distribution</h2>
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
        {emotions.map((e) => (
          <motion.div
            key={e}
            className="rounded-xl border border-slate-800 bg-slate-800/40 backdrop-blur p-4 shadow-md"
          >
            <h2 className="text-lg font-semibold text-[#64ffda] mb-2">Top {e} Quotes</h2>
            <ul className="list-disc list-inside text-slate-300">
              {mockQuotes[e].map((q, i) => (
                <li key={i}>{q}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default EmotionDashboard;
