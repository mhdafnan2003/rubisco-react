const mongoose = require('mongoose');

const adminSchema = new mongoose.Schema({
  username: String,
  password: String, // Store hashed password ideally
});

module.exports = mongoose.model('Admin', adminSchema);
