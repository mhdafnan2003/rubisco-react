import { useEffect, useState } from 'react';

// Make sure your main function is capitalized and exported as default
export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [events, setEvents] = useState([]);
  const [currentEvent, setCurrentEvent] = useState(null);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const API_URL = process.env.NEXT_PUBLIC_API_URL;

  // --- LOGIN LOGIC ---
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${API_URL}/api/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      if (data.success) {
        setIsAuthenticated(true); // Show the dashboard
      } else {
        alert('Invalid credentials');
      }
    } catch (error) {
      alert('Login failed');
    }
  };

  // --- CRUD LOGIC ---
  const fetchEvents = async () => {
    const res = await fetch(`${API_URL}/api/events`);
    const data = await res.json();
    setEvents(data);
  };

  useEffect(() => {
    if (isAuthenticated) {
      fetchEvents();
    }
  }, [isAuthenticated]);

  const handleSave = async (formData, id) => {
    const url = id ? `${API_URL}/api/events/${id}` : `${API_URL}/api/events`;
    const method = id ? 'PUT' : 'POST';
    await fetch(url, { method, body: formData });
    setCurrentEvent(null);
    fetchEvents();
  };

  const handleDelete = async (id) => {
    if (confirm('Are you sure you want to delete this event?')) {
      await fetch(`${API_URL}/api/events/${id}`, { method: 'DELETE' });
      fetchEvents();
    }
  };

  // --- CONDITIONAL RENDERING ---
  if (!isAuthenticated) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gray-100">
        <form onSubmit={handleLogin} className="p-8 bg-white rounded-lg shadow-md w-96">
          <h1 className="text-2xl font-bold mb-6 text-center">Admin Login</h1>
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium">Username</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block mb-2 text-sm font-medium">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 border rounded-lg"
              required
            />
          </div>
          <button type="submit" className="w-full py-2 text-white bg-blue-600 rounded-lg hover:bg-blue-700">
            Login
          </button>
        </form>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center mb-8">
            <h1 className="text-2xl font-bold">Events Dashboard</h1>
            <button onClick={() => setIsAuthenticated(false)} className="px-4 py-2 text-sm font-medium bg-red-500 text-white rounded-md hover:bg-red-600">
                Logout
            </button>
        </div>
        <EventForm currentEvent={currentEvent} onSave={handleSave} onCancel={() => setCurrentEvent(null)} />
        <EventList events={events} onEdit={setCurrentEvent} onDelete={handleDelete} />
      </div>
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
    <form onSubmit={handleSubmit} className="p-6 mb-8 bg-white rounded-lg shadow">
      <h2 className="text-xl font-semibold mb-4">{currentEvent ? 'Edit Event' : 'Create New Event'}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input name="title" value={formData.title} onChange={handleChange} placeholder="Title" className="px-3 py-2 border rounded" required />
        <input name="date" type="date" value={formData.date} onChange={handleChange} className="px-3 py-2 border rounded" required />
        <input name="price" type="number" value={formData.price} onChange={handleChange} placeholder="Price" className="px-3 py-2 border rounded" required />
        <input name="image" type="file" onChange={handleFileChange} className="px-3 py-2 border rounded col-span-1 md:col-span-2" />
        <textarea name="description" value={formData.description} onChange={handleChange} placeholder="Description" className="px-3 py-2 border rounded col-span-1 md:col-span-2" required />
      </div>
      <div className="flex justify-end mt-4">
        {currentEvent && <button type="button" onClick={onCancel} className="mr-2 px-4 py-2 bg-gray-300 rounded">Cancel</button>}
        <button type="submit" className="px-4 py-2 text-white bg-blue-600 rounded">Save Event</button>
      </div>
    </form>
  );
};

const EventList = ({ events, onEdit, onDelete }) => (
  <div className="bg-white rounded-lg shadow overflow-hidden">
    <table className="min-w-full">
      <thead className="bg-gray-50">
        <tr>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Image</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Title</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Date</th>
          <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">Price</th>
          <th className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase">Actions</th>
        </tr>
      </thead>
      <tbody className="bg-white divide-y divide-gray-200">
        {events.map(event => (
          <tr key={event._id}>
            <td className="px-6 py-4"><img src={`${process.env.NEXT_PUBLIC_API_URL}${event.image}`} alt={event.title} className="w-16 h-16 object-cover rounded"/></td>
            <td className="px-6 py-4">{event.title}</td>
            <td className="px-6 py-4">{new Date(event.date).toLocaleDateString()}</td>
            <td className="px-6 py-4">${event.price}</td>
            <td className="px-6 py-4 text-right">
              <button onClick={() => onEdit(event)} className="text-indigo-600 hover:text-indigo-900 mr-4">Edit</button>
              <button onClick={() => onDelete(event._id)} className="text-red-600 hover:text-red-900">Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);