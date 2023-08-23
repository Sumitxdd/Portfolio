const express = require('express');
const cors = require('cors');
const app = express();
const port = 5000;

// Enable CORS
app.use(cors());

// Parse JSON request bodies
app.use(express.json());

// Example project data
const projects = [
  { id: 1, title: 'Project 1', description: 'Description 1' },
  { id: 2, title: 'Project 2', description: 'Description 2' },
  // Add more projects here
];

// API route to fetch projects
app.get('/api/projects', (req, res) => {
  res.json(projects);
});

// Dummy storage for form submissions (replace this with a database in production)
const submissions = [];

// Endpoint to handle form submissions
app.post('/api/contact', (req, res) => {
  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'All fields are required.' });
  }

  const newSubmission = { name, email, message, timestamp: new Date() };
  submissions.push(newSubmission);

  // In a production app, you might save the submission to a database here

  res.status(201).json({ message: 'Form submitted successfully.' });
});

app.listen(port, () => {
  console.log(`Backend server is running on port ${port}`);
});

