const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

let students = [
  { id: 1, name: 'student1', yearLevel: 1 },
  { id: 2, name: 'student2', yearLevel: 2 },
  { id: 3, name: 'student3', yearLevel: 3 },
];

app.get('/api/students', (req, res) => {
  res.json(students);
});

app.post('/api/students', (req, res) => {
  const { name, yearLevel } = req.body;

  const newStudent = {
    id: students.length ? students[students.length - 1].id + 1 : 1,
    name,
    yearLevel: parseInt(yearLevel)
  };

  students.push(newStudent);

  res.status(201).json({
    message: "Student added successfully",
    student: newStudent
  });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});