const express = require("express");
const Event = require("../models/event");
const upload = require("../config/cloudinary"); // ✅ Import your new Cloudinary upload config
const cloudinary = require("cloudinary").v2;    // ✅ Import Cloudinary to use its API for deletion

const router = express.Router();

/**
 * @route   POST /api/events
 * @desc    Create event and upload image to Cloudinary
 */
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const { title, description, date, price } = req.body;
    
    const newEvent = new Event({
      title,
      description,
      date,
      price,
      // Save the image URL and public_id from Cloudinary
      image: {
        url: req.file ? req.file.path : "",
        public_id: req.file ? req.file.filename : "",
      },
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
 * @desc    Update event (and optionally replace image on Cloudinary)
 */
router.put("/:id", upload.single("image"), async (req, res) => {
  try {
    const { title, description, date, price } = req.body;
    const event = await Event.findById(req.params.id);
    if (!event) return res.status(404).json({ error: "Event not found" });

    // If a new image is uploaded, delete the old one from Cloudinary
    if (req.file) {
      if (event.image && event.image.public_id) {
        await cloudinary.uploader.destroy(event.image.public_id);
      }
      // Save new image details
      event.image = {
        url: req.file.path,
        public_id: req.file.filename,
      };
    }

    // Update other fields
    event.title = title || event.title;
    event.description = description || event.description;
    event.date = date || event.date;
    event.price = price || event.price;

    const updated = await event.save();
    res.json(updated);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to update event" });
  }
});

/**
 * @route   DELETE /api/events/:id
 * @desc    Delete event and its image from Cloudinary
 */
router.delete("/:id", async (req, res) => {
  try {
    const event = await Event.findById(req.params.id);
    if (!event) return res.status(404).json({ error: "Event not found" });

    // Delete image from Cloudinary if it exists
    if (event.image && event.image.public_id) {
      await cloudinary.uploader.destroy(event.image.public_id);
    }

    await event.deleteOne();
    res.json({ success: true, message: "Event deleted successfully" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to delete event" });
  }
});

module.exports = router;