import React from "react";
import EventForm from "../../src/components/admin/EventForm";
import EventList from "../../src/components/admin/EventList";

const AdminPanel = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">Admin Panel - Manage Events</h1>
      <EventForm />
      <hr className="my-8" />
      <EventList />
    </div>
  );
};

export default AdminPanel;
