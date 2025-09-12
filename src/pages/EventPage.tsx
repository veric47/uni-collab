import { useState } from "react";

interface Event {
  id: number;
  title: string;
  description: string;
}

export default function EventPage() {
  const [events, setEvents] = useState<Event[]>([
    { id: 1, title: "AI Seminar", description: "Talk on AI in research" },
    { id: 2, title: "Cultural Fest", description: "Annual cultural festival" },
  ]);

  // simulate user role (in real app, this would come from login)
  const [role, setRole] = useState<"admin" | "user">("user");

  const [newEvent, setNewEvent] = useState({ title: "", description: "" });

  const handleAddEvent = () => {
    setEvents([
      ...events,
      { id: Date.now(), title: newEvent.title, description: newEvent.description },
    ]);
    setNewEvent({ title: "", description: "" });
  };

  return (
    <div className="p-6">
      <h1 className="text-xl font-bold mb-4">University Events</h1>

      {/* Role Switcher (for testing only) */}
      <div className="mb-4">
        <button
          onClick={() => setRole("user")}
          className={`px-3 py-1 mr-2 ${role === "user" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
        >
          Switch to User
        </button>
        <button
          onClick={() => setRole("admin")}
          className={`px-3 py-1 ${role === "admin" ? "bg-green-500 text-white" : "bg-gray-200"}`}
        >
          Switch to Admin
        </button>
      </div>

      {/* Event list */}
      <ul className="space-y-2 mb-6">
        {events.map((event) => (
          <li key={event.id} className="border p-3 rounded">
            <h2 className="font-semibold">{event.title}</h2>
            <p>{event.description}</p>
          </li>
        ))}
      </ul>

      {/* Only admins see this section */}
      {role === "admin" && (
        <div className="p-4 border rounded bg-gray-50">
          <h2 className="text-lg font-semibold mb-2">Add New Event</h2>
          <input
            type="text"
            placeholder="Event title"
            value={newEvent.title}
            onChange={(e) => setNewEvent({ ...newEvent, title: e.target.value })}
            className="border p-2 mb-2 w-full"
          />
          <textarea
            placeholder="Event description"
            value={newEvent.description}
            onChange={(e) => setNewEvent({ ...newEvent, description: e.target.value })}
            className="border p-2 mb-2 w-full"
          />
          <button
            onClick={handleAddEvent}
            className="px-4 py-2 bg-green-600 text-white rounded"
          >
            Add Event
          </button>
        </div>
      )}
    </div>
  );
}
