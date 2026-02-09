// Configuring dotenv
require("dotenv").config();

const express = require("express");

const PORT = process.env.SERVER_PORT || 5000;

const server = express();

// Routes
server.get("/", (req, res) => {
  res.send("<h1>JOBS BOARD API</h1>");
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server listen on port ${PORT}`);
});
