import React from "react";
import { AnimatePresence } from "framer-motion";
import StudentRow from "./StudentRow";

const StudentTable = ({ students, onEdit, onDelete, filter }) => {
  const filteredStudents = students.filter((s) =>
    `${s.name} ${s.department}`.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="mt-8 w-full max-w-6xl mx-auto px-4 sm:px-6">
  <div className="rounded-xl border border-white/20 bg-white/10 dark:bg-white/5 shadow-lg divide-y divide-white/10">
    
    {/* Table Head */}
    <div className="grid grid-cols-6 text-sm sm:text-base font-semibold text-orange_peel-500 p-3 sm:p-4">
      <span className="col-span-2">Name</span>
      <span className="hidden sm:block">Reg No</span>
      <span className="hidden sm:block">Dept</span>
      <span className="text-center sm:text-left">Year</span>
      <span className="text-right">Actions</span>
    </div>

    {/* Table Rows */}
    <AnimatePresence>
      {filteredStudents.length === 0 ? (
        <div className="p-6 text-center text-sm text-gray-800 dark:text-gray-400">
          No students match the filter.
        </div>
      ) : (
        filteredStudents.map((student) => (
          <StudentRow
            key={student._id || student.regNo}
            student={student}
            onEdit={() => onEdit(student)}
            onDelete={() => onDelete(student.regNo)}
          />
        ))
      )}
    </AnimatePresence>
  </div>
</div>


  );
};

export default StudentTable;
