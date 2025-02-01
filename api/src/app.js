const express = require('express');
const cors = require('cors'); // Import the cors middleware

const app = express();

// Middleware
app.use(cors()); // Enable CORS for all origins (for development)
app.use(express.json()); // Parse JSON request bodies

// Basic Route
app.get('/', (req, res) => {
  res.send('Hello from Express API!');
});

// You would import and use your routes here:
// const userRoutes = require('./routes/users');
// app.use('/api/users', userRoutes); 

module.exports = app;