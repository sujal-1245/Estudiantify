import React from "react";
import { TrophyIcon } from "@heroicons/react/24/solid";

const TopPerformers = ({ students = [] }) => {
  const top = [...students]
    .filter((s) => s.name && s.marks !== undefined)
    .sort((a, b) => {
      if (b.marks === a.marks) {
        return a.name.localeCompare(b.name); // secondary sort by name
      }
      return b.marks - a.marks;
    })
    .slice(0, 3);

  return (
    <div className="bg-white dark:bg-[#1a120a] rounded-xl p-6 shadow-lg space-y-4">
      <h3 className="text-lg font-semibold flex items-center gap-2 text-orange_peel-500">
        <TrophyIcon className="w-5 h-5 text-orange_peel-500" />
        Top Performers
      </h3>

      {top.length === 0 ? (
        <p className="text-gray-400 text-sm">No student records available.</p>
      ) : (
        <ul className="space-y-2 text-sm">
          {top.map((s, i) => (
            <li
              key={s.regNo}
              className="flex justify-between border-b border-white/10 pb-1 last:border-none"
            >
              <span>
                <span className="font-medium text-gray-700 dark:text-white">
                  {i + 1}.
                </span>{" "}
                {s.name}
              </span>
              <span className="font-semibold text-orange_peel-600">{s.marks}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default TopPerformers;
