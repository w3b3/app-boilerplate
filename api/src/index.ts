import app from './app';

const PORT: number = parseInt(process.env.PORT || '3001', 10);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// ...existing code...
