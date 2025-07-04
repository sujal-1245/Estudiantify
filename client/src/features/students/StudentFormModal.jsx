import React, { useEffect, useState } from "react";
import Modal from "@/components/ui/Modal";
import Input from "@/components/ui/Input";
import Button from "@/components/ui/Button";

const initialForm = {
  name: "",
  regNo: "",
  department: "",
  year: "",
  marks: "",
};

const StudentFormModal = ({ isOpen, onClose, onSubmit, editingStudent }) => {
  const [form, setForm] = useState(initialForm);
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (editingStudent) {
      setForm(editingStudent);
    } else {
      setForm(initialForm);
    }

    if (isOpen) {
      window.scrollTo(0, 0); // Reset scroll on open (mobile UX)
    }
  }, [editingStudent, isOpen]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Clean + normalize data
    const cleaned = {
      name: form.name.trim(),
      regNo: form.regNo.trim().toUpperCase(),
      department: form.department.trim(),
      year: Number(form.year),
      marks: Number(form.marks),
    };

    try {
      await onSubmit(cleaned); // Parent handles POST/PUT
      onClose();
      setForm(initialForm);
    } catch (error) {
      console.error("Failed to submit student:", error);
      alert("Something went wrong. Check console.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isOpen) return null;

  return (
    <Modal onClose={onClose}>
      <form onSubmit={handleSubmit} className="space-y-6">
        <h2 className="text-2xl font-bold text-orange_peel-500 mb-2 text-center">
          {editingStudent ? "Edit Student" : "Add Student"}
        </h2>

        <div className="grid sm:grid-cols-2 gap-4">
          <Input
            label="Full Name"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            autoFocus
          />
          <Input
            label="Reg No"
            name="regNo"
            value={form.regNo}
            onChange={handleChange}
            required
            disabled={!!editingStudent}
          />
          <Input
            label="Department"
            name="department"
            value={form.department}
            onChange={handleChange}
            required
          />
          <Input
            label="Year"
            name="year"
            type="number"
            min={1}
            max={5}
            value={form.year}
            onChange={handleChange}
            required
          />
          <Input
            label="Marks"
            name="marks"
            type="number"
            min={0}
            max={100}
            value={form.marks}
            onChange={handleChange}
            required
          />
        </div>

        <div className="flex justify-end gap-4">
          <Button
            type="button"
            onClick={onClose}
            className="bg-gray-200 dark:bg-white/10 hover:bg-gray-300 dark:hover:bg-white/20 text-gray-800 dark:text-white"
          >
            Cancel
          </Button>
          <Button
            type="submit"
            className="bg-orange_peel-500 hover:bg-orange_peel-600 text-white"
            disabled={isSubmitting}
          >
            {isSubmitting
              ? editingStudent
                ? "Updating..."
                : "Adding..."
              : editingStudent
              ? "Update"
              : "Add"}
          </Button>
        </div>
      </form>
    </Modal>
  );
};

export default StudentFormModal;
