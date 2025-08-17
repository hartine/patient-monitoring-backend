const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();
const PORT = 5000; // backend akan run kat http://localhost:5000

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Route test
app.get("/", (req, res) => {
  res.send("Backend running successfully 🚀");
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
