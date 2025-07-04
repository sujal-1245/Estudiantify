// routes/studentRoutes.js
import express from "express";
import {
  getStudents,
  createStudent,
  updateStudent,
  deleteStudent,
} from "../controllers/studentController.js";

const router = express.Router();

// GET all students
router.get("/", getStudents);

// POST a new student
router.post("/", createStudent);

// ✅ PUT update student by regNo
router.put("/:regNo", updateStudent);

// ✅ DELETE student by regNo
router.delete("/:regNo", deleteStudent);

export default router;
