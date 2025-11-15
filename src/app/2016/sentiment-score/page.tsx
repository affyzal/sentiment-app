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

const mockData = [
  { time: "00:00", score: 0.1 },
  { time: "05:00", score: -0.2 },
  { time: "10:00", score: 0.3 },
  { time: "15:00", score: -0.1 },
  { time: "20:00", score: 0.4 },
  { time: "25:00", score: 0.05 },
];

const candidates = ["Donald Trump", "Hillary Clinton"];

export default function SentimentScore2016() {
  const [selectedCandidate, setSelectedCandidate] = useState("Donald Trump");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 800);
    return () => clearTimeout(t);
  }, []);

  return (
    <div className="p-6 relative">

      {/* Candidate Toggle */}
      <div className="flex gap-3 mb-6">
        { loading ? (
          <>
            <Skeleton width="100px" height="36px" className="rounded-md" />
            <Skeleton width="100px" height="36px" className="rounded-md" />
          </>
        ) : (
          candidates.map((c) => (
            <button
              key={c}
              onClick={() => setSelectedCandidate(c)}
              className={`px-4 py-2 rounded-md text-sm transition border
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

      {/* Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {loading ? (
          <>
            <Skeleton height="76px" />
            <Skeleton height="76px" />
            <Skeleton height="76px" />
          </>
        ) : (
          <>
            <div className="p-4 rounded-lg border border-slate-800 bg-slate-800/40 ">
              <p className="text-xs text-[#64ffda]">Avg Sentiment Score</p>
              <p className="text-xl font-bold text-white">
                {selectedCandidate === "Donald Trump" ? "0.12" : "0.25"}
              </p>
            </div>

            <div className="p-4 bg-slate-800/40 rounded-lg border border-slate-800">
              <p className="text-xs text-[#64ffda]">Peak Positive</p>
              <p className="text-xl font-bold text-white">
                {selectedCandidate === "Donald Trump" ? "0.48" : "0.61"}
              </p>
            </div>

            <div className="p-4 bg-slate-800/40 rounded-lg border border-slate-800">
              <p className="text-xs text-[#64ffda]">Peak Negative</p>
              <p className="text-xl font-bold text-white">
                {selectedCandidate === "Donald Trump" ? "-0.32" : "-0.27"}
              </p>
            </div>
          </>
        )}
      </div>

      {/* Chart */}
      <div className="w-full h-80 bg-slate-800/40 rounded-lg border border-slate-800 p-4">
        {loading ? (
          <Skeleton height="100%" />
        ) : (
          <ResponsiveContainer width="100%" height="100%">
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
        )}
      </div>

      {/* Placeholder notes */}
      <div className="mt-6 p-4 bg-slate-800/40 border border-slate-800 rounded-lg">
        <p className="text-slate-400 text-sm">
          This is placeholder data. Real sentiment scoring will be added once
          transcript processing and NLP pipelines are fully implemented.
        </p>
      </div>
    </div>
  );
}
