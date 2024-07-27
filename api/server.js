const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const db = require("./db");

const server = express();
const host = 'http://localhost';
const port = 4435;

server.use(express.json());
server.use(bodyParser.urlencoded({ extended: false }));
server.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true,
  })
);

// POST


// GET
server.get('/residents', async (req, res) => {
    const task = req.body;
    const data = db.pool.query('SELECT * FROM residents', [task.residentid]);
    res.send(data);
});

// PUT


// DELETE


// API SERVER LISTEN
server.listen(port, () => console.log(`API Server is now listen at ${host}:${port}`));