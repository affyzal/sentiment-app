"use client";

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  CartesianGrid,
  ResponsiveContainer,
} from "recharts";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Skeleton from "@/components/Skeleton";
import StatCard from "@/components/StatCard";

const mockData: { time: string; score: number }[] = [
  { time: "00:00", score: 0.1 },
  { time: "05:00", score: -0.2 },
  { time: "10:00", score: 0.3 },
  { time: "15:00", score: -0.1 },
  { time: "20:00", score: 0.4 },
  { time: "25:00", score: 0.05 },
];

const candidates: string[] = ["Donald Trump", "Joe Biden", "Trump vs Biden"];

export default function SentimentScore2016() {
  const [selectedCandidate, setSelectedCandidate] = useState<string>(candidates[0]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="min-h-screen w-full p-4 bg-slate-900/95 text-slate-100 flex flex-col items-center">
      
      {/* Candidate Toggle */}
      <div className="flex w-full gap-3 mb-6 justify-start">
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
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 w-full max-w-6xl mb-5">
        {loading ? (
          <>
            <Skeleton height="76px" />
            <Skeleton height="76px" />
            <Skeleton height="76px" />
          </>
        ) : (
          <>
            <StatCard label="Average Sentiment Score" value={selectedCandidate === "Donald Trump" ? "0.12" : "0.25"} />
            <StatCard label="Peak Positive Score" value={selectedCandidate === "Donald Trump" ? "0.48" : "0.61"} />
            <StatCard label="Peak Negative Score" value={selectedCandidate === "Donald Trump" ? "-0.32" : "-0.27"} />
          </>
        )}
      </div>

      {/* Chart */}
      <div className="w-full max-w-6xl">
        {loading ? (
          <Skeleton height="330px" />
        ) : (
          <motion.div className="rounded-xl border border-slate-800 bg-slate-800/40 backdrop-blur p-4 shadow-md">
            <h2 className="text-lg font-semibold text-[#64ffda] mb-4">
              Sentiment Score Over Time
            </h2>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={mockData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
                <XAxis dataKey="time" stroke="#64748b" />
                <YAxis stroke="#64748b" />
                <Tooltip
                  contentStyle={{
                    backgroundColor: "#0f172a",
                    border: "1px solid #334155",
                  }}
                  labelStyle={{ color: "#64ffda" }}
                />
                <Line
                  type="monotone"
                  dataKey="score"
                  stroke="#64ffda"
                  strokeWidth={2}
                  dot={false}
                />
              </LineChart>
            </ResponsiveContainer>
          </motion.div>
        )}
      </div>

      {/* Notes */}
      <div className="mt-6 w-full max-w-6xl p-4 rounded-xl border border-slate-800 bg-slate-800/40 backdrop-blur shadow-md">
        <p className="text-red-500 text-sm">
          This is placeholder data. Real sentiment scoring will be added once
          transcript processing and NLP pipelines are fully implemented.
        </p>
      </div>
    </div>
  );
}
