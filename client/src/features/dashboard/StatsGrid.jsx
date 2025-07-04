import React from "react";
import StatsCard from "@/components/ui/StatsCard";
import {
  UserGroupIcon,
  ChartBarIcon,
  BuildingLibraryIcon,
} from "@heroicons/react/24/outline";

const StatsGrid = ({ stats = {} }) => {
  const {
    totalStudents = 0,
    avgMarks = 0,
    departments = 0,
  } = stats;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <StatsCard
        title="Total Students"
        value={totalStudents}
        icon={UserGroupIcon}
        color="princeton_orange"
      />
      <StatsCard
        title="Average Marks"
        value={isNaN(avgMarks) ? "0.00" : avgMarks.toFixed(2)}
        icon={ChartBarIcon}
        color="orange_peel"
      />
      <StatsCard
        title="Departments"
        value={departments}
        icon={BuildingLibraryIcon}
        color="selective_yellow"
      />
    </div>
  );
};

export default StatsGrid;
