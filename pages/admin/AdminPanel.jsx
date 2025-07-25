import React, { useEffect, useState } from "react";
import axios from "axios";

const AdminPanel = () => {
  const [events, setEvents] = useState([]);
  const [formData, setFormData] = useState({
    title: "",
    image: "",
    date: "",
    description: "",
    price: "",
  });
  const [editId, setEditId] = useState(null);

  // Fetch all events
  const fetchEvents = async () => {
    try {
      const res = await axios.get("/api/events");
      setEvents(res.data);
    } catch (err) {
      console.error("Error fetching events:", err);
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  // Handle input change
  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Handle submit (Add or Edit)
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (editId) {
        await axios.put(`/api/events/${editId}`, formData);
      } else {
        await axios.post("/api/events", formData);
      }
      setFormData({ title: "", image: "", date: "", description: "", price: "" });
      setEditId(null);
      fetchEvents();
    } catch (err) {
      console.error("Error saving event:", err);
    }
  };

  // Handle delete
  const handleDelete = async (id) => {
    if (!confirm("Delete this event?")) return;
    try {
      await axios.delete(`/api/events/${id}`);
      fetchEvents();
    } catch (err) {
      console.error("Error deleting event:", err);
    }
  };

  // Load event into form for editing
  const handleEdit = (event) => {
    setEditId(event._id);
    setFormData({
      title: event.title,
      image: event.image,
      date: event.date,
      description: event.description,
      price: event.price,
    });
    window.scrollTo(0, 0);
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">{editId ? "Edit Event" : "Add Event"}</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
        />
        <input
          type="date"
          name="date"
          placeholder="Date"
          value={formData.date}
          onChange={handleChange}
        />
        <textarea
          name="description"
          placeholder="Description"
          value={formData.description}
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
        />
        <button type="submit">{editId ? "Update Event" : "Add Event"}</button>
      </form>

      <hr className="my-6" />

      <h2 className="text-lg font-semibold mb-2">All Events</h2>
      {events.length === 0 && <p>No events yet.</p>}
      <ul className="space-y-2">
        {events.map((event) => (
          <li key={event._id} className="border p-4 rounded">
            <div className="flex justify-between items-start">
              <div>
                <h3 className="font-semibold">{event.title}</h3>
                <p>{event.description}</p>
                <p>Date: {event.date}</p>
                <p>Price: ₹{event.price}</p>
              </div>
              <div className="space-x-2">
                <button onClick={() => handleEdit(event)}>Edit</button>
                <button onClick={() => handleDelete(event._id)}>Delete</button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanel;
