import React from 'react';
import { Card, Button } from 'react-bootstrap';
import { FaWhatsapp } from 'react-icons/fa';

const EventCard = ({ title, description, date, price, image }) => {
  // --- Corrected Logic for URL and WhatsApp ---
  const imageUrl = image.startsWith('http') ? image : `${process.env.NEXT_PUBLIC_API_URL || ''}${image}`;
  const whatsAppNumber = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || '916282878105';
  
  // 1. Format the date first
  const formattedDate = new Intl.DateTimeFormat('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(new Date(date));

  // 2. Now use the formattedDate in your message
  const message = `Hey! I'm interested to know more about the "${title}" event planned on ${formattedDate}.`;
  const encodedMessage = encodeURIComponent(message);
  const whatsappUrl = `https://wa.me/${whatsAppNumber}?text=${encodedMessage}`;


  return (
    <Card 
      className="h-100 border-0 shadow rounded-4 event-card-bootstrap" 
      style={{ maxWidth: '22rem', transition: 'all 0.3s ease' }}
    >
      <Card.Img variant="top" src={imageUrl} style={{ height: '220px', objectFit: 'cover' }} />

      <Card.Body className="d-flex flex-column p-4">
        <Card.Title className="fw-bold fs-4 mb-3">{title}</Card.Title>
        <Card.Text className="text-muted mb-2">{formattedDate}</Card.Text>
        <Card.Text style={{ flexGrow: 1 }}>
          {description}
        </Card.Text>

        <div className="d-flex justify-content-between align-items-center mt-4">
          <div className="fw-bold fs-5 text-dark">₹{price}</div>
          <Button 
            variant="success" 
            href={whatsappUrl} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="rounded-pill px-4 py-2"
          >
            <FaWhatsapp className="me-2" />
            Enquire
          </Button>
        </div>
      </Card.Body>
    </Card>
  );
};

export default EventCard;