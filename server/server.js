// server/login.js
const express = require('express');
const router = express.Router();
const authenticate = require('./auth');

router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const token = await authenticate(username, password);

  if (!token) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  res.json({ token });
});

module.exports = router;