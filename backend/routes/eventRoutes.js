const express = require('express');
const router = express.Router();
const Event = require('../models/event');

// CREATE
router.post('/', async (req, res) => {
  const newEvent = new Event(req.body);
  const saved = await newEvent.save();
  res.status(201).json(saved);
});

// READ
router.get('/', async (req, res) => {
  const events = await Event.find();
  res.json(events);
});

// UPDATE
router.put('/:id', async (req, res) => {
  const updated = await Event.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updated);
});

// DELETE
router.delete('/:id', async (req, res) => {
  await Event.findByIdAndDelete(req.params.id);
  res.json({ success: true });
});

module.exports = router;
