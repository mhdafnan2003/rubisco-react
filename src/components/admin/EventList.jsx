import React, { useEffect, useState } from "react";
import axios from "axios";

const EventList = () => {
  const [events, setEvents] = useState([]);

  const fetchEvents = async () => {
    try {
      const res = await axios.get("/api/events");
      setEvents(res.data);
    } catch (err) {
      console.error(err);
    }
  };

  const deleteEvent = async (id) => {
    if (!window.confirm("Are you sure you want to delete this event?")) return;

    try {
      await axios.delete(`/api/events/${id}`);
      fetchEvents();
    } catch (err) {
      console.error(err);
      alert("Failed to delete event");
    }
  };

  useEffect(() => {
    fetchEvents();
  }, []);

  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold mb-4">All Events</h2>
      <div className="space-y-4">
        {events.map((event) => (
          <div
            key={event._id}
            className="border p-4 rounded flex justify-between items-center"
          >
            <div>
              <h3 className="text-md font-bold">{event.title}</h3>
              <p className="text-sm text-gray-600">{event.date}</p>
              <p className="text-sm">{event.description}</p>
              <p className="text-sm font-medium mt-1">₹{event.price}</p>
            </div>
            {event.image && (
              <img
                src={event.image}
                alt={event.title}
                className="w-20 h-20 object-cover rounded"
              />
            )}
            <button
              onClick={() => deleteEvent(event._id)}
              className="text-red-500 hover:underline ml-4"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventList;
