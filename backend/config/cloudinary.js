// config/cloudinary.js

const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');

// Configure Cloudinary with your credentials from the .env file
cloudinary.config({
  cloud_name: 'dornulfps',
  api_key: '759169453384724',
  api_secret: 'A7ZigG3h6gaTjoOiWZoqbn0O6VA',
});

// Set up the storage engine for Multer
const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: 'rubisco-uploads', // The folder name on your Cloudinary account
    allowed_formats: ['jpg', 'png', 'jpeg'],
  },
});

// Export the configured multer instance
module.exports = multer({ storage: storage });