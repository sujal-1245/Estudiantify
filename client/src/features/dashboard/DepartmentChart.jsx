import React from "react";
import {
  PieChart,
  Pie,
  Tooltip,
  Cell,
  ResponsiveContainer,
  Legend,
} from "recharts";
import ChartCard from "@/components/ui/ChartCard";

const DepartmentChart = ({ students = [] }) => {
  // Group by department (case-insensitive)
  const data = Object.values(
    students.reduce((acc, curr) => {
      const deptKey = curr.department?.trim().toLowerCase() || "Unknown";
      const displayDept = curr.department?.trim() || "Unknown";

      if (!acc[deptKey]) {
        acc[deptKey] = { name: displayDept, value: 0 };
      }
      acc[deptKey].value += 1;
      return acc;
    }, {})
  );

  const COLORS = [
  "#FF6384", "#36A2EB", "#FFCE56", "#4BC0C0", "#9966FF",
  "#FF9F40", "#66BB6A", "#BA68C8", "#FFA726", "#29B6F6",
  "#EF5350", "#AB47BC", "#FF7043", "#26C6DA", "#9CCC65",
  "#F06292", "#FFCA28", "#8D6E63", "#26A69A", "#D4E157"
];
;

  return (
    <ChartCard title="Students per Department">
      {data.length === 0 ? (
        <p className="text-sm text-gray-400 text-center py-4">
          No department data available.
        </p>
      ) : (
        <ResponsiveContainer width="100%" height={300}>
          <PieChart>
            <Pie
              data={data}
              dataKey="value"
              nameKey="name"
              cx="50%"
              cy="50%"
              outerRadius={100}
              label
            >
              {data.map((_, i) => (
                <Cell key={`cell-${i}`} fill={COLORS[i % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend verticalAlign="bottom" height={36} />
          </PieChart>
        </ResponsiveContainer>
      )}
    </ChartCard>
  );
};

export default DepartmentChart;
