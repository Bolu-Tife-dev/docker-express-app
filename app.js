const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({
    message: 'Hello! This Express app is running inside a Docker container.',
    status: 'success'
  });
});

app.get('/api/students', (req, res) => {
  res.json({
    students: [
      { id: 1, name: 'Alice', course: 'Software Engineering' },
      { id: 2, name: 'Bob', course: 'Computer Science' },
      { id: 3, name: 'Charlie', course: 'Data Science' }
    ]
  });
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'ok', uptime: process.uptime() });
});

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
