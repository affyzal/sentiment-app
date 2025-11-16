interface SkeletonProps {
  height?: string | number;
  width?: string | number;
  className?: string;
}

export default function Skeleton({ height = "100%", width = "100%", className = "" }: SkeletonProps) {
  return (
    <div
      className={`bg-slate-700/50 rounded-xl animate-pulse ${className}`}
      style={{ height, width }}
    />
  );
}
