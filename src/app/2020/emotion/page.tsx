"use client";

import Skeleton from "@/components/Skeleton";
import StatCard from "@/components/StatCard";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
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

const emotions: string[] = ["Joy", "Sadness", "Anger", "Surprise"];
const colors: Record<string, string> = {
  Joy: "#DBA6FF",
  Sadness: "#FF9F9F",
  Anger: "#ffb864",
  Surprise: "#9BC2FF",
};

interface EmotionTrendEntry {
  time: number;
  Joy: number;
  Sadness: number;
  Anger: number;
  Surprise: number;
}

const mockEmotionTrend : EmotionTrendEntry[] = [
  { time: 1, Joy: 0.3, Sadness: 0.2, Anger: 0.1, Surprise: 0.15 },
  { time: 2, Joy: 0.25, Sadness: 0.3, Anger: 0.2, Surprise: 0.1 },
  { time: 3, Joy: 0.35, Sadness: 0.15, Anger: 0.25, Surprise: 0.2 },
  { time: 4, Joy: 0.4, Sadness: 0.1, Anger: 0.3, Surprise: 0.25 },
];

interface DistributionEntry {
  name: string;
  value: number;
  color: string;
  [key: string]: string | number;
}


const mockDistribution: DistributionEntry[] = [
  { name: "Joy", value: 30, color: colors.Joy },
  { name: "Sadness", value: 20, color: colors.Sadness },
  { name: "Anger", value: 25, color: colors.Anger },
  { name: "Surprise", value: 25, color: colors.Surprise },
];

interface Quotes {
  Joy: string[];
  Sadness: string[];
  Anger: string[];
  Surprise: string[];
}

const mockQuotes : Quotes = {
  Joy: ["I am thrilled by these results!", "This makes me really happy."],
  Sadness: ["This is quite disappointing.", "I feel upset about this."],
  Anger: ["I am frustrated by the outcome!", "This is unacceptable!"],
  Surprise: ["I didn't expect this at all!", "This is quite surprising."],
};

const candidates: string[] = ["Donald Trump", "Joe Biden", "Trump vs Biden"];

const EmotionDashboard = () => {
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
          emotions.map((e) => (
            <StatCard
              key={e}
              label={`${e} Sentences`}
              value={mockDistribution.find((d) => d.name === e)?.value || 0}
            />
          ))
        )
        }
      </div>


      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl w-full mb-6">
        {/* Emotion Trend */}
        {loading ? (
          <Skeleton height="320px" />
        ) : (
          <motion.div className="rounded-xl border border-slate-800 bg-slate-800/40 backdrop-blur p-4 shadow-md">
            <h2 className="text-lg font-semibold text-[#64ffda] mb-2">Emotion Trend Over Time</h2>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={mockEmotionTrend}>
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
          )
        }

        {/* Distribution Pie */}
        {loading ? (
          <Skeleton height="320px" />
        ) : (
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
                  <Legend />
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </motion.div>
          )
        }
      </div>

      {/* Top Quotes */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl w-full">
        {loading ? (
          <>
            <Skeleton height="115px" />
            <Skeleton height="115px" />
            <Skeleton height="115px" />
            <Skeleton height="115px" />
          </>
        ) : (
            emotions.map((e) => (
            <motion.div
              key={e}
              className="rounded-xl border border-slate-800 bg-slate-800/40 backdrop-blur p-4 shadow-md"
            >
              <h2 className="text-lg font-semibold text-[#64ffda] mb-2">Top {e} Quotes</h2>
              <ul className="list-disc list-inside text-slate-300">
                {mockQuotes[e as keyof typeof mockQuotes].map((q, i) => (
                  <li key={i}>{q}</li>
                ))}
              </ul>
            </motion.div>
            
          ))
        )
        }

      </div>
      <div className="mt-6 w-full p-4 rounded-xl border border-slate-800 bg-slate-800/40 backdrop-blur shadow-md">
        <p className="text-red-500 text-sm ">
          This is placeholder data. Real emotion scoring will be added once
          transcript processing and NLP pipelines are fully implemented.
        </p>
      </div>
    </div>
  );
};

export default EmotionDashboard;
