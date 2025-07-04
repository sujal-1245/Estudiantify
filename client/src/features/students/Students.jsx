import React, { useEffect, useState } from "react";
import FilterBar from "./FilterBar";
import StudentTable from "./StudentTable";
import StudentFormModal from "./StudentFormModal";
import Button from "@/components/ui/Button";
import { PlusIcon } from "@heroicons/react/24/outline";
import api from "@/utils/axios";
import toast from "react-hot-toast";

const Students = () => {
  const [students, setStudents] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingStudent, setEditingStudent] = useState(null);
  const [filter, setFilter] = useState("");

  // 🔁 Fetch students on component mount
  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      const res = await api.get("/students");
      setStudents(res.data);
    } catch (err) {
      console.error("Error fetching students:", err);
      toast.error("Failed to fetch students");
    }
  };

  const handleAddOrUpdate = async (student) => {
    const regNo = student.regNo.trim().toUpperCase(); // normalize
    const payload = { ...student, regNo };

    try {
      if (editingStudent) {
        await api.put(`/students/${regNo}`, payload);
        setStudents((prev) =>
          prev.map((s) => (s.regNo === regNo ? { ...s, ...payload } : s))
        );
        toast.success(" Student updated successfully!");
      } else {
        const res = await api.post("/students", payload);
        setStudents((prev) => [...prev, res.data]);
        toast.success(" Student added successfully!");
      }
    } catch (err) {
      console.error("Error adding/updating student:", err);
      toast.error("❌ Failed to save student. Check the console.");
    } finally {
      setIsModalOpen(false);
      setEditingStudent(null);
    }
  };

  const handleEdit = (student) => {
    setEditingStudent(student);
    setIsModalOpen(true);
  };

  const handleDelete = async (regNo) => {
    try {
      const normalizedRegNo = regNo.trim().toUpperCase();
      await api.delete(`/students/${normalizedRegNo}`);
      setStudents((prev) => prev.filter((s) => s.regNo !== normalizedRegNo));
      toast.success("🗑️ Student deleted successfully!");
    } catch (err) {
      console.error("Error deleting student:", err);
      toast.error("❌ Failed to delete student.");
    }
  };

  return (
    <div className="space-y-10">
  {/* Responsive Header + Add Button */}
  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 sm:gap-0">
    <h2 className="text-3xl font-bold text-orange_peel-600">🎒 Students</h2>
    <Button
      className="w-full sm:w-auto flex items-center justify-center gap-2 bg-orange_peel-500 hover:bg-orange_peel-600 text-white"
      onClick={() => setIsModalOpen(true)}
    >
      <PlusIcon className="w-5 h-5" />
      Add Student
    </Button>
  </div>

  <FilterBar filter={filter} setFilter={setFilter} />

  <StudentTable
    students={students}
    filter={filter}
    onEdit={handleEdit}
    onDelete={handleDelete}
  />

  <StudentFormModal
    isOpen={isModalOpen}
    onClose={() => {
      setIsModalOpen(false);
      setEditingStudent(null);
    }}
    onSubmit={handleAddOrUpdate}
    editingStudent={editingStudent}
  />
</div>

  );
};

export default Students;
