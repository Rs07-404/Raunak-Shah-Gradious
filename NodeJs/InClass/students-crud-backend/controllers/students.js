const db = require('../models/students');

exports.createStudent = (req, res) => {
  const student = req.body;

  db.createStudent(student, (err) => {
    if (err) {
      console.error('Error creating student', err);
      res.status(500).send('Error creating student');
      return;
    }
    res.status(201).send('Student created successfully');
  });
};

exports.getAllStudents = (req, res) => {
  db.getAllStudents((err, students) => {
    if (err) {
      console.error('Error getting students', err);
      res.status(500).send('Error getting students');
      return;
    }
    res.send(students);
  });
};

exports.getStudentById = (req, res) => {
  const studentId = req.params.id;

  db.getStudentById(studentId, (err, student) => {
    if (err) {
      console.error('Error getting student', err);
      res.status(500).send('Error getting student');
      return;
    }
    if (!student) {
      res.status(404).send('Student not found');
      return;
    }
    res.send(student);
  });
};

exports.updateStudent = (req, res) => {
  const studentId = req.params.id;
  const updatedStudent = req.body;

  db.updateStudent(studentId, updatedStudent, (err, result) => {
    if (err) {
      console.error('Error updating student', err);
      res.status(500).send('Error updating student');
      return;
    }
    if (result.affectedRows === 0) {
      res.status(404).send('Student not found');
      return;
    }
    res.send('Student updated successfully');
  });
};

exports.deleteStudent = (req, res) => {
  const studentId = req.params.id;

  db.deleteStudent(studentId, (err, result) => {
    if (err) {
      console.error('Error deleting student', err);
      res.status(500).send('Error deleting student');
      return;
    }
    if (result.affectedRows === 0) {
      res.status(404).send('Student not found');
      return;
    }
    res.send('Student deleted successfully');
  });
};