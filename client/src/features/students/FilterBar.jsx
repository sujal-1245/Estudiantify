import React from "react";
import { FunnelIcon } from "@heroicons/react/24/outline";
import { motion } from "framer-motion";

const FilterBar = ({ filter, setFilter }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex justify-between items-center gap-4 p-4 bg-white/60 dark:bg-white/10 backdrop-blur rounded-xl border border-white/20 shadow-md"
    >
      <div className="flex items-center gap-2 text-sm text-gray-800 dark:text-gray-100 font-medium">
        <FunnelIcon className="w-5 h-5 text-orange_peel-500" />
        <span>Filter by name or department</span>
      </div>
      <input
        type="text"
        placeholder="Search students..."
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="w-full max-w-sm px-4 py-2 rounded-lg border border-white/30 bg-white/70 dark:bg-black/30 text-gray-800 dark:text-white placeholder:text-gray-500 dark:placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-orange_peel-400 transition-all"
      />
    </motion.div>
  );
};

export default FilterBar;
