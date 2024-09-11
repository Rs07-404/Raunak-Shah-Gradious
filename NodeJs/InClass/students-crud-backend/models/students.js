const config = require("../config/config.js");
const mysql = require('mysql2');

const db = mysql.createConnection({
  host: config.host,
  user: config.user,
  password: config.password,
  database: config.database
});

db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database', err);
    return;
  }
  console.log('Connected to the database');
});

exports.createStudent = (student, callback) => {
    db.query(
      `INSERT INTO studentDetails (name, age, department) VALUES ('${student.name}', '${student.age}', '${student.department}')`,
      callback
    );
  };
  
  exports.getAllStudents = (callback) => {
    db.query('SELECT * FROM studentDetails', callback);
  };
  
  exports.getStudentById = (studentId, callback) => {
    db.query('SELECT * FROM studentDetails WHERE id = ?', studentId, (err, result) => {
      if (err) {
        callback(err, null);
        return;
      }
      callback(null, result[0]);
    });
  };
  
  exports.updateStudent = (studentId, updatedStudent, callback) => {
    db.query('UPDATE studentDetails SET ? WHERE id = ?', [updatedStudent, studentId], callback);
  };
  
  exports.deleteStudent = (studentId, callback) => {
    db.query('DELETE FROM studentDetails WHERE id = ?', studentId, callback);
  };