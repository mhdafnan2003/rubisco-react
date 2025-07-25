import React, { useState } from "react";
import axios from "axios";

const EventForm = ({ onEventCreated }) => {
  const [formData, setFormData] = useState({
    title: "",
    date: "",
    description: "",
    price: "",
    image: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "image") {
      setFormData({ ...formData, image: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = new FormData();
    payload.append("title", formData.title);
    payload.append("date", formData.date);
    payload.append("description", formData.description);
    payload.append("price", formData.price);
    if (formData.image) {
      payload.append("image", formData.image);
    }

    try {
      const res = await axios.post("/api/events", payload, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("Event created!");
      setFormData({
        title: "",
        date: "",
        description: "",
        price: "",
        image: null,
      });
      onEventCreated(); // refresh list
    } catch (err) {
      console.error(err);
      alert("Failed to create event");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 bg-white p-4 rounded shadow">
      <h2 className="text-lg font-semibold mb-2">Add New Event</h2>

      <input
        type="text"
        name="title"
        placeholder="Event Title"
        value={formData.title}
        onChange={handleChange}
        required
        className="w-full border px-3 py-2 rounded"
      />

      <input
        type="date"
        name="date"
        value={formData.date}
        onChange={handleChange}
        required
        className="w-full border px-3 py-2 rounded"
      />

      <textarea
        name="description"
        placeholder="Event Description"
        value={formData.description}
        onChange={handleChange}
        required
        className="w-full border px-3 py-2 rounded"
      />

      <input
        type="number"
        name="price"
        placeholder="Event Price"
        value={formData.price}
        onChange={handleChange}
        required
        className="w-full border px-3 py-2 rounded"
      />

      <input
        type="file"
        name="image"
        accept="image/*"
        onChange={handleChange}
        className="w-full border px-3 py-2 rounded"
      />

      <button type="submit" className="bg-black text-white px-4 py-2 rounded">
        Create Event
      </button>
    </form>
  );
};

export default EventForm;
