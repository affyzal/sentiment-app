import React from "react";

interface StatCardProps {
  label: string;
  value: number | string;
}

const StatCard: React.FC<StatCardProps> = ({ label, value }) => {
  return (
    <div className="p-3 rounded-xl border border-slate-800 bg-slate-800/40 backdrop-blur shadow-md">
      <h2 className="text-xs text-[#64ffda] tracking-wide">{label}</h2>
      <p className="text-2xl font-bold text-slate-100">{value}</p>
    </div>
  );
};

export default StatCard;
