import React from "react";
import { motion } from "framer-motion";

const StatsCard = ({ title, value, icon: Icon, color = "princeton_orange" }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className={`bg-${color}-100 dark:bg-${color}-500/20 rounded-xl p-4 shadow-md space-y-2 transition-all`}
    >
      <div className="flex items-center gap-3 text-sm font-semibold text-gray-600 dark:text-white">
        {Icon && <Icon className={`w-5 h-5 text-${color}-500 dark:text-${color}-400`} />}
        <span>{title}</span>
      </div>
      <div className={`text-3xl font-extrabold text-${color}-600 dark:text-${color}-400`}>
        {value}
      </div>
    </motion.div>
  );
};

export default StatsCard;
