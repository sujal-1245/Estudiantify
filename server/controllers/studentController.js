import Student from "../models/Student.js";

// @desc    Get all students
// @route   GET /api/students
export const getStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
  } catch (err) {
    res.status(500).json({ message: "Server error while fetching students" });
  }
};

// @desc    Create a new student
// @route   POST /api/students
export const createStudent = async (req, res) => {
  let { name, regNo, department, year, marks } = req.body;

  // Normalize regNo
  regNo = regNo?.trim().toUpperCase();

  if (!name || !regNo || !department || !year || !marks) {
    return res.status(400).json({ message: "All fields are required" });
  }

  try {
    const existing = await Student.findOne({ regNo });
    if (existing) {
      return res.status(400).json({ message: "Registration number already exists" });
    }

    const newStudent = new Student({
      name: name.trim(),
      regNo,
      department: department.trim(),
      year,
      marks,
    });

    const saved = await newStudent.save();
    res.status(201).json(saved);
  } catch (err) {
    console.error("Error creating student:", err);
    res.status(500).json({ message: "Server error while creating student" });
  }
};

// @desc    Update a student
// @route   PUT /api/students/:regNo
export const updateStudent = async (req, res) => {
  const regNo = req.params.regNo?.trim().toUpperCase();
  const { name, department, year, marks } = req.body;

  try {
    const updated = await Student.findOneAndUpdate(
      { regNo },
      {
        name: name?.trim(),
        department: department?.trim(),
        year,
        marks,
      },
      { new: true }
    );

    if (!updated) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.status(200).json(updated);
  } catch (err) {
    console.error("Error updating student:", err);
    res.status(500).json({ message: "Server error while updating student" });
  }
};

// @desc    Delete a student
// @route   DELETE /api/students/:regNo
export const deleteStudent = async (req, res) => {
  const regNo = req.params.regNo?.trim().toUpperCase();

  try {
    const deleted = await Student.findOneAndDelete({ regNo });

    if (!deleted) {
      return res.status(404).json({ message: "Student not found" });
    }

    res.status(200).json({ message: "Student deleted successfully" });
  } catch (err) {
    console.error("Error deleting student:", err);
    res.status(500).json({ message: "Server error while deleting student" });
  }
};
