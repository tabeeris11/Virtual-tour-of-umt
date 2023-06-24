const Student = require('../models/studentmodel');

// Get all students
exports.getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.json(students);
  } catch (err) {
    res.status(500).json({ error: 'An error occurred while fetching students.' });
  }
};

// Create a new student
exports.createStudent = async (req, res) => {
  try {
    const { cnic, fullname, email, phoneNumber } = req.body;
    const student = new Student({ cnic, fullname, email, phoneNumber });
    await student.save();
    res.status(201).json(student);
  } catch (err) {
    res.status(400).json({ error: 'Failed to create a new student.' });
  }
};

