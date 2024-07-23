const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const db = require('./db');

const app = express();
const host = 'http://localhost';
const port = 4435;

app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));

app.use(bodyParser.json()); // Parse JSON bodies

// GET
app.get('/residents', async (req, res) => {
  try {
    const [rows] = await db.pool.query('SELECT * FROM residenttable');
    res.json(rows);
  } catch (error) {
    res.status(500).json({ error: 'An error occurred while fetching data' });
  }
});

// POST

// PUT

// DELETE

// SERVER LISTEN
app.listen(port, () => console.log(`API server is now running at ${host}:${port}`));

