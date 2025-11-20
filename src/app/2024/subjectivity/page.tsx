"use client";

import { useMemo } from "react";
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line, CartesianGrid,
} from "recharts";

export default function SubjectivityDashboard() {
  // --- Mock data ---
  const debateAverages = [
    { year: "2016", avg: 0.42 },
    { year: "2020", avg: 0.55 },
    { year: "2024", avg: 0.61 },
  ];

  const subjectivityDistribution = [
    { range: "0.0–0.2", count: 12 },
    { range: "0.2–0.4", count: 30 },
    { range: "0.4–0.6", count: 45 },
    { range: "0.6–0.8", count: 25 },
    { range: "0.8–1.0", count: 8 },
  ];

  const timelineData = useMemo(
    () =>
      Array.from({ length: 12 }).map((_, i) => ({
        segment: `Segment ${i + 1}`,
        subjectivity: 0.3 + Math.random() * 0.4,
      })),
    []
  );

  return (
    <div className="w-full bg-slate-900 px-6 mt-4 text-slate-100">

      {/* Average Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-10">
        {debateAverages.map(({ year, avg }) => (
          <div
            key={year}
            className="bg-slate-800 rounded-xl shadow p-6 flex flex-col items-center justify-center"
          >
            <h2 className="text-lg font-semibold mb-2">{year} Debate</h2>
            <p className="text-3xl font-bold text-[#64ffda]">
              {(avg * 100).toFixed(1)}%
            </p>
            <p className="text-sm text-slate-400">
              Avg. Subjectivity
            </p>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {/* Distribution Chart */}
        <div className="bg-slate-800 rounded-xl shadow p-6">
          <h3 className="text-lg font-semibold mb-4 text-center">
            Subjectivity Distribution
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <BarChart data={subjectivityDistribution}>
              <XAxis dataKey="range" stroke="#94a3b8" />
              <YAxis stroke="#94a3b8" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1e293b",
                  border: "none",
                  color: "white",
                }}
              />
              <Bar dataKey="count" fill="#64ffda" radius={[4, 4, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>

        {/* Timeline Chart */}
        <div className="bg-slate-800 rounded-xl shadow p-6">
          <h3 className="text-lg font-semibold mb-4 text-center">
            Subjectivity Over Time
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={timelineData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#334155" />
              <XAxis dataKey="segment" stroke="#94a3b8" />
              <YAxis domain={[0, 1]} stroke="#94a3b8" />
              <Tooltip
                contentStyle={{
                  backgroundColor: "#1e293b",
                  border: "none",
                  color: "white",
                }}
              />
              <Line
                type="monotone"
                dataKey="subjectivity"
                stroke="#64ffda"
                strokeWidth={2}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
