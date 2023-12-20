// Create web server
const express = require("express");
const app = express();
const port = 3000;

// Get comments
app.get("/comments", (req, res) => {
  res.send("Comments");
});

// Post comments
app.post("/comments", (req, res) => {
  res.send("Comments");
});

// Put comments
app.put("/comments", (req, res) => {
  res.send("Comments");
});

// Delete comments
app.delete("/comments", (req, res) => {
  res.send("Comments");
});

// Listen
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});