const app = require('./app');
const PORT = process.env.PORT || 3001; // Use port from environment variable or default to 3001

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});