const express = require('express');
const router = express.Router();
const Admin = require('../models/Admin');

// Simple auth (not production-safe)
router.post('/login', async (req, res) => {
  const { username, password } = req.body;
  const admin = await Admin.findOne({ username, password });
  if (!admin) return res.status(401).json({ message: 'Invalid credentials' });

  // You can replace this with JWT later
  res.json({ success: true });
});

module.exports = router;
