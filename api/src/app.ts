import express from 'express';
import cors from 'cors';

const app = express();

// Middleware
app.use(cors()); // ...existing middleware...
app.use(express.json()); // ...existing middleware...

// Basic Route
app.get('/', (req, res) => {
  res.send('Hello from Express API!');
});

// ...existing code...
export default app;
