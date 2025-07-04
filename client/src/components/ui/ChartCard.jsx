import React from "react";

const ChartCard = ({ title, children }) => {
  return (
    <div className="bg-white dark:bg-[#1a120a] rounded-xl p-6 shadow-lg space-y-4">
      <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-200">{title}</h3>
      <div>{children}</div>
    </div>
  );
};

export default ChartCard;
