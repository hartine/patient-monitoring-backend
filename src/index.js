const express = require('express');
const dotenv = require('dotenv');
const patientRoutes = require('./routes/patientRoutes'); // Import router

dotenv.config();
const app = express();

// Middleware
app.use(express.json());

// Use routes
app.use('/api/patients', patientRoutes);

// Default route
app.get('/', (req, res) => {
  res.send('API is running...');
});

// Run server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
