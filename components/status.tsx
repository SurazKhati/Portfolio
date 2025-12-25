"use client";
import { useAppContext } from "@/context/contexts";

export type Stat = {
  value: string;
  label: string;
};

type StatsBarProps = {
  stats: Stat[];
  showScrollHint?: boolean;
};

export default function StatsBar({
  stats,
  showScrollHint = true,
}: StatsBarProps) {
  const { mblview, darkState } = useAppContext();

  return (
    <div
      className={`w-full py-12 relative
        ${darkState ? "bg-neutral-950" : "bg-white"}
      `}
    >
      <div className="max-w-6xl mx-auto px-6 relative">

        {/* Stats */}
        <div
          className={`
            flex gap-5
            ${mblview
              ? "justify-center flex-row items-center"
              : "items-center"}
          `}
        >
          {stats.map((stat, idx) => (
            <div key={idx} className={`text-center ${mblview ? "w-[30%]" : ""}`}>
              <h2
                className={`text-4xl
                  ${darkState ? "text-white" : "text-black"}
                `}
              >
                {stat.value}
              </h2>
              <p
                className={`mt-2 text-sm
                  ${darkState ? "text-gray-400" : "text-gray-500"}
                `}
              >
                {stat.label}
              </p>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
