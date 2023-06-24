const express = require('express');
const router = express.Router();
const studentController = require('../controllers/studentcontroller');

// Get all students
router.get('/students', studentController.getAllStudents);

// Create a new student
router.post('/students', studentController.createStudent);

router.get('/', (req, res) => {
  res.render('students'); // Render the students.ejs file
});



module.exports = router;
