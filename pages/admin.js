import { useEffect, useState } from 'react';
import { Container, Row, Col, Card, Form, Button, Nav, Table, Image, Navbar } from 'react-bootstrap';
import { PencilSquare, Trash, BoxArrowRight, PlusCircle, ListUl } from 'react-bootstrap-icons';

// Make sure your main function is capitalized and exported as default
export default function AdminPage() {
  // --- STATE MANAGEMENT ---
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [view, setView] = useState('list'); // 'list' or 'create'
  const [events, setEvents] = useState([]);
  const [currentEvent, setCurrentEvent] = useState(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  // --- LOGIN LOGIC ---
  const handleLogin = async (e) => {
    e.preventDefault();
    // This is a simplified mock login. In a real app, you would verify credentials.
    // if (username === "admin" && password === "password") {
    //    setIsAuthenticated(true);
    // } else {
    //    alert('Invalid credentials. (Hint: admin/password)');
    // }
    try {
      const res = await fetch(`${API_URL}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      if (data.success) {
        setIsAuthenticated(true);
      } else {
        alert('Invalid credentials');
      }
    } catch (error) {
      alert('Login failed');
    }
  };
  
  const handleLogout = () => {
    setIsAuthenticated(false);
    setUsername('');
    setPassword('');
  };

  // --- CRUD LOGIC ---
  const fetchEvents = async () => {
    try {
      const res = await fetch(`${API_URL}/api/events`);
      const data = await res.json();
      setEvents(data);
    } catch (error) {
      console.error("Failed to fetch events:", error);
      // Mock data for demonstration if API fails
      setEvents([
        {_id: '1', title: 'Sample Event', date: new Date(), price: 50, description: 'This is a sample event.', image: 'https://via.placeholder.com/150'},
        {_id: '2', title: 'Another Event', date: new Date(), price: 120, description: 'This is another sample event.', image: 'https://via.placeholder.com/150'}
      ]);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchEvents();
    }
  }, [isAuthenticated]);

  const handleSave = async (formData, id) => {
    // The existing save logic is fine
    const url = id ? `${API_URL}/api/events/${id}` : `${API_URL}/api/events`;
    const method = id ? 'PUT' : 'POST';
    await fetch(url, { method, body: formData });
    
    // Reset state and refresh list
    setCurrentEvent(null);
    setView('list');
    fetchEvents();
  };
  
  const handleEdit = (event) => {
    setCurrentEvent(event);
    setView('create');
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this event?')) {
      await fetch(`${API_URL}/api/events/${id}`, { method: 'DELETE' });
      fetchEvents();
    }
  };
  
  const handleCancel = () => {
    setCurrentEvent(null);
    setView('list');
  };

  // --- CONDITIONAL RENDERING ---

  // 1. LOGIN PAGE
  if (!isAuthenticated) {
    return (
      <Container fluid className="d-flex align-items-center justify-content-center bg-light" style={{ minHeight: '100vh' }}>
        <Card style={{ width: '24rem', borderRadius: '15px' }} className="p-4 shadow">
          <Card.Body>
            <Card.Title className="text-center mb-4 fs-3">Admin Login</Card.Title>
            <Form onSubmit={handleLogin}>
              <Form.Group className="mb-3" controlId="formUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  required
                />
              </Form.Group>

              <Form.Group className="mb-4" controlId="formPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </Form.Group>

              <div className="d-grid">
                <Button variant="primary" type="submit" size="lg">
                  Login
                </Button>
              </div>
            </Form>
          </Card.Body>
        </Card>
      </Container>
    );
  }

  // 2. DASHBOARD PAGE
  return (
    <div className="d-flex bg-light" style={{ minHeight: '100vh' }}>
      {/* Sidebar */}
      <Col md={2} className="bg-light text-white p-3 d-flex flex-column">
        <Navbar.Brand href="#" className="text-dark fw-bold fs-4 mb-4">Admin Panel</Navbar.Brand>
        <Nav variant="pills" activeKey={view} onSelect={(selectedKey) => setView(selectedKey)} className="flex-column">
          <Nav.Link eventKey="list" className="d-flex align-items-center"><ListUl className="me-2" /> List Events</Nav.Link>
          <Nav.Link eventKey="create" onClick={() => setCurrentEvent(null)} className="d-flex align-items-center"><PlusCircle className="me-2" /> Create Event</Nav.Link>
        </Nav>
        <Button variant="outline-danger" onClick={handleLogout} className="mt-auto d-flex align-items-center justify-content-center">
            <BoxArrowRight className="me-2" /> Logout
        </Button>
      </Col>

      {/* Main Content */}
      <Col md={10}>
        <Container fluid className="p-4">
          <h2 className="mb-4">Hi Rubisco 👋</h2>
          {view === 'create' && <EventForm currentEvent={currentEvent} onSave={handleSave} onCancel={handleCancel} />}
          {view === 'list' && <EventList events={events} onEdit={handleEdit} onDelete={handleDelete} />}
        </Container>
      </Col>
    </div>
  );
}


// --- UI COMPONENTS ---

const EventForm = ({ currentEvent, onSave, onCancel }) => {
  const [formData, setFormData] = useState({ title: '', description: '', date: '', price: '' });
  const [imageFile, setImageFile] = useState(null);

  useEffect(() => {
    if (currentEvent) {
      setFormData({
        title: currentEvent.title,
        description: currentEvent.description,
        date: new Date(currentEvent.date).toISOString().split('T')[0],
        price: currentEvent.price,
      });
    } else {
      setFormData({ title: '', description: '', date: '', price: '' });
    }
  }, [currentEvent]);

  const handleChange = (e) => setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  const handleFileChange = (e) => setImageFile(e.target.files[0]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = new FormData();
    Object.keys(formData).forEach(key => data.append(key, formData[key]));
    if (imageFile) data.append('image', imageFile);
    onSave(data, currentEvent?._id);
  };

  return (
    <Card className="shadow-sm">
      <Card.Body>
        <Card.Title className="mb-4">{currentEvent ? 'Edit Event' : 'Create New Event'}</Card.Title>
        <Form onSubmit={handleSubmit}>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control name="title" value={formData.title} onChange={handleChange} required />
              </Form.Group>
            </Col>
             <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Date</Form.Label>
                <Form.Control name="date" type="date" value={formData.date} onChange={handleChange} required />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3">
                <Form.Label>Price (₹)</Form.Label>
                <Form.Control name="price" type="number" value={formData.price} onChange={handleChange} required />
              </Form.Group>
            </Col>
            <Col md={6}>
               <Form.Group className="mb-3">
                <Form.Label>Image</Form.Label>
                <Form.Control name="image" type="file" onChange={handleFileChange} />
              </Form.Group>
            </Col>
          </Row>
           <Form.Group className="mb-3">
              <Form.Label>Description</Form.Label>
              <Form.Control as="textarea" rows={4} name="description" value={formData.description} onChange={handleChange} required />
            </Form.Group>
          <div className="d-flex justify-content-end">
            <Button variant="secondary" onClick={onCancel} className="me-2">Cancel</Button>
            <Button variant="primary" type="submit">Save Event</Button>
          </div>
        </Form>
      </Card.Body>
    </Card>
  );
};

const EventList = ({ events, onEdit, onDelete }) => (
  <Card className="shadow-sm">
    <Card.Body>
    <Card.Title className="mb-4">Event List</Card.Title>
    <Table    responsive>
      <thead>
        <tr>
          <th>Image</th>
          <th>Title</th>
          <th>Date</th>
          <th>Price</th>
          <th className="text-center">Actions</th>
        </tr>
      </thead>
      <tbody>
        {events.map(event => (
          <tr key={event._id}>
            <td>
              <Image src={event.image.startsWith('https') ? event.image : `${process.env.NEXT_PUBLIC_API_URL}${event.image}`} thumbnail style={{ width: '80px', height: '80px', objectFit: 'cover' }} />
            </td>
            <td className="align-middle">{event.title}</td>
            <td className="align-middle">{new Date(event.date).toLocaleDateString()}</td>
            <td className="align-middle">₹{event.price}</td>
            <td className="text-center align-middle">
              <Button variant="link" onClick={() => onEdit(event)} title="Edit"><PencilSquare size={20} /></Button>
              <Button variant="link" onClick={() => onDelete(event._id)} className="text-danger" title="Delete"><Trash size={20} /></Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
    </Card.Body>
  </Card>
);