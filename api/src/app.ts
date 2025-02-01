import express from 'express';
import cors from 'cors';

const app = express();

// Middleware
app.use(cors()); // ...existing middleware...
app.use(express.json()); // ...existing middleware...

// add route to retrieve item by id
app.get('/item/:id', (req, res) => {
  const id = req.params.id;
  // const item = items.find((item) => item.id === id);
  // if (item) {
  if (true) {
    res.json({ id, name: 'Item '+id, description: 'This is item '+id, timestamp: req.query.ts });
  } else {
    res.status(404).json({ error: 'Item not found' });
  }
});

// ...existing code...
export default app;
