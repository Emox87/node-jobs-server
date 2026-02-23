// Configuring dotenv
require("dotenv").config();

const express = require("express");
const cors = require('cors');
const jobsData = require('./jobs.json');

const PORT = process.env.SERVER_PORT || 5000;

const server = express();

// Middleware
server.use(cors());

// Routes
server.get("/", (req, res) => {
  res.send("<h1>JOBS BOARD API</h1>");
});

server.get('/jobs', (req, res) => {
  res.json( jobsData);
});

// Start the server
server.listen(PORT, () => {
  console.log(`Server listen on port ${PORT}`);
});
