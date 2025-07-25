import React from 'react';

const EventCard = ({ title, description, date, price, image }) => {
  return (
    <div className="p-4 border rounded-lg shadow-md bg-white">
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-48 object-cover rounded-md mb-4"
        />
      )}
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-gray-600 my-2">{description}</p>
      <p className="text-sm text-gray-400">📅 {date}</p>
      <p className="text-sm text-gray-400">💸 {price}</p>
    </div>
  );
};

export default EventCard;
