import React, { useEffect, useState } from "react";
import StatsGrid from "./StatsGrid";
import TopPerformers from "./TopPerformers";
import DepartmentChart from "./DepartmentChart";
import axios from "@/utils/axios";

const Dashboard = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const res = await axios.get("/students");
        setStudents(res.data);
      } catch (err) {
        console.error("Failed to fetch students", err);
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  const stats = {
    totalStudents: students.length,
    avgMarks:
      students.length === 0
        ? 0
        : students.reduce((acc, s) => acc + parseFloat(s.marks), 0) / students.length,
    departments: new Set(students.map((s) => s.department)).size,
  };

  return (
    <div className="space-y-10">
      <h2 className="text-3xl font-bold text-orange_peel-600">📊 Dashboard Overview</h2>

      {loading ? (
        <p className="text-gray-400 text-sm">Loading stats...</p>
      ) : (
        <>
          <StatsGrid stats={stats} />
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <DepartmentChart students={students} />
            <TopPerformers students={students} />
          </div>
        </>
      )}
    </div>
  );
};

export default Dashboard;
