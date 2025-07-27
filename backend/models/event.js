// backend/models/Event.js

const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: String,
  description: String,
  date: Date,
  price: Number,
  // ✅ Changed 'image' from a String to an Object
  // This stores both the image URL and the ID from Cloudinary.
  image: {
    url: String,
    public_id: String,
  },
});

module.exports = mongoose.model('Event', eventSchema);