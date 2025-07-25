import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { FaWhatsapp } from 'react-icons/fa';

// Optional: Add a tiny bit of CSS for the hover lift effect
// You can put this in your global CSS file.
/*
.event-card-bootstrap:hover {
  transform: translateY(-10px);
  box-shadow: 0 1rem 1.5rem rgba(0,0,0,.15)!important;
}
*/

const EventCard = ({ title, description, date, price, image }) => {
  // --- Logic for URL and WhatsApp (same as before) ---
  const imageUrl = `${process.env.NEXT_PUBLIC_API_URL}${image}`;
  const whatsAppNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '911234567890';
  const message = `Hey! I'm interested to know more about the "${title}" event.`;
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${whatsAppNumber}?text=${encodedMessage}`;
  const formattedDate = new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(date));

  return (
    <Card 
      className="h-100 border-0 shadow rounded-4 event-card-bootstrap" 
      style={{ maxWidth: '22rem', transition: 'all 0.3s ease' }}
    >
      {/* The Badge has been removed from here */}
      <Card.Img variant="top" src={imageUrl} style={{ height: '220px', objectFit: 'cover' }} />

      <Card.Body className="d-flex flex-column p-4">
        <Card.Title className="fw-bold fs-4 mb-3">{title}</Card.Title>
        <Card.Text className="text-muted mb-2">{formattedDate}</Card.Text>
        <Card.Text style={{ flexGrow: 1 }}>
          {description}
        </Card.Text>

        {/* --- NEW CONTAINER FOR PRICE AND BUTTON --- */}
        <div className="d-flex justify-content-between align-items-center mt-4">
          <div className="fw-bold fs-5 text-dark">₹{price}</div>
          <Button 
            variant="success" 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="rounded-pill px-4 py-2 align-items-center"
          >
            <FaWhatsapp className="me-2" />
            Enquire Now
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default EventCard;