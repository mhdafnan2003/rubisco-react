import React from 'react';

const EventCard = ({ title, description, date, price, image }) => {
  // Construct the full image URL
  const imageUrl = `${process.env.NEXT_PUBLIC_API_URL}${image}`;

  return (
    <div className="card">
      <img src={imageUrl} className="card-img-top" alt={title} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <p className="card-text">
          <small className="text-muted">
            {new Date(date).toLocaleDateString()} - ${price}
          </small>
        </p>
      </div>
    </div>
  );
};

export default EventCard;