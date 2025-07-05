import React from "react";
import { motion } from "framer-motion";
import { MdEdit, MdDelete } from "react-icons/md";

const StudentRow = ({ student, onEdit, onDelete }) => {
  return (
    <motion.div
  layout
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: -10 }}
  transition={{ duration: 0.3 }}
  className="grid grid-cols-2 sm:grid-cols-6 items-center px-4 py-3 text-sm sm:text-base text-white/10 border-b border-white/10 hover:bg-white/10 transition"
>
  {/* Name: Always visible */}
  <span className="font-medium text-black/80 dark:text-white">{student.name}</span>

  {/* RegNo: hidden on xs */}
  <span className="hidden sm:block text-black/80 dark:text-white/80">{student.regNo}</span>

  {/* Dept: hidden on xs */}
  <span className="hidden sm:block text-black/80 dark:text-white/80">{student.department}</span>

  {/* Year: visible even on mobile */}
  <span className="text-black/80 dark:text-white/80 text-center sm:text-left">{student.year}</span>

  {/* Marks: hidden on xs */}
  <span className="hidden sm:block text-black/80 dark:text-white/80">{student.marks}</span>

  {/* Actions */}
  <span className="flex justify-end gap-3">
    <button
      onClick={() => onEdit(student)}
      className="text-orange_peel-500 hover:text-orange_peel-400 transition"
      title="Edit Student"
    >
      <MdEdit size={18} />
    </button>
    <button
      onClick={() => onDelete(student.regNo)}
      className="text-red-400 hover:text-red-300 transition"
      title="Delete Student"
    >
      <MdDelete size={18} />
    </button>
  </span>
</motion.div>

  );
};

export default StudentRow;
