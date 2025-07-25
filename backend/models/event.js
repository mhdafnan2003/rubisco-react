// backend/models/Event.js
const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: String,
  image: String, // store image URL or upload path
  date: Date,
  description: String,
  price: Number,
});

module.exports = mongoose.model('Event', eventSchema);
