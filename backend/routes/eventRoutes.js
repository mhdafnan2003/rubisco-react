const express = require("express");
const multer = require("multer");
const path = require("path");
const fs = require("fs");
const Event = require("../models/event");

const router = express.Router();

// Multer setup
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // Folder to store uploaded images
  },
  filename: function (req, file, cb) {
    const uniqueName = Date.now() + path.extname(file.originalname);
    cb(null, uniqueName); // Unique filename with extension
  },
});

const upload = multer({ storage });

/**
 * @route   POST /api/events
 * @desc    Create event with image upload
 */
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const { title, description, date, price } = req.body;
    const image = req.file ? `/uploads/${req.file.filename}` : null;

    const newEvent = new Event({
      title,
      description,
      date,
      price,
      image,
    });

    const saved = await newEvent.save();
    res.status(201).json(saved);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to create event" });
  }
});

/**
 * @route   GET /api/events
 * @desc    Get all events
 */
router.get("/", async (req, res) => {
  try {
    const events = await Event.find();
    res.json(events);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch events" });
  }
});

/**
 * @route   PUT /api/events/:id
 * @desc    Update event (optionally with new image)
 */
router.put("/:id", upload.single("image"), async (req, res) => {
  try {
    const { title, description, date, price } = req.body;
    const event = await Event.findById(req.params.id);
    if (!event) return res.status(404).json({ error: "Event not found" });

    // If a new image is uploaded, delete the old one
    if (req.file) {
      if (event.image) {
        const oldPath = path.join(__dirname, "..", event.image);
        if (fs.existsSync(oldPath)) {
          fs.unlinkSync(oldPath);
        }
      }
      event.image = `/uploads/${req.file.filename}`;
    }

    // Update fields
    event.title = title;
    event.description = description;
    event.date = date;
    event.price = price;

    const updated = await event.save();
    res.json(updated);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to update event" });
  }
});

/**
 * @route   DELETE /api/events/:id
 * @desc    Delete event and its image
 */
router.delete("/:id", async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) return res.status(404).json({ error: "Event not found" });

    // Delete image file if it exists
    if (event.image) {
      const imagePath = path.join(__dirname, "..", event.image);
      if (fs.existsSync(imagePath)) {
        fs.unlinkSync(imagePath);
      }
    }

    await event.deleteOne();
    res.json({ success: true });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to delete event" });
  }
});

module.exports = router;
