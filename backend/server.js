const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

const eventRoutes = require('./routes/eventRoutes');
const authRoutes = require('./routes/auth');

const app = express();
app.use(cors());
app.use(express.json());

// ✅ Serve uploaded images
app.use('/uploads', express.static('uploads'));

app.use('/api/events', eventRoutes);
app.use('/api/auth', authRoutes);

mongoose.connect(process.env.MONGO_URI).then(() => {
  app.listen(5000, () => console.log('Server running on port 5000'));
});
