// config/cloudinary.js

const cloudinary = require('cloudinary').v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');
const multer = require('multer');

// Configure Cloudinary with your credentials from the .env file
// This is the secure and correct way to do it.
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
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