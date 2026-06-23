// server.js
const express = require("express");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

// Route 1: GET /
app.get("/", (req, res) => {
  res.json({
    message: "API is running",
  });
});

// Route 2: GET /users
app.get("/users", (req, res) => {
  res.json([
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
  ]);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
