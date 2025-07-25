import React from 'react';

const EventCard = ({ title, description, date }) => {
  return (
    <div className="p-4 border rounded-lg shadow-md bg-white">
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-gray-600 my-2">{description}</p>
      <p className="text-sm text-gray-400">📅 {date}</p>
    </div>
  );
};

export default EventCard;
