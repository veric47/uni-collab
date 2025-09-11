import { useState } from "react";

interface Event {
  id: number;
  title: string;
  type: string;
  description: string;
  date: string;
}

export default function EventPage() {
  const [events, setEvents] = useState<Event[]>([
    { id: 1, title: "AI Conference", type: "Academic", description: "AI research talks", date: "2025-10-01" },
    { id: 2, title: "Beach Cleanup", type: "Volunteering", description: "Help clean the community beach", date: "2025-09-20" },
  ]);

  const [title, setTitle] = useState("");
  const [type, setType] = useState("Academic");
  const [description, setDescription] = useState("");
  const [date, setDate] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newEvent: Event = {
      id: events.length + 1,
      title,
      type,
      description,
      date,
    };

    setEvents([...events, newEvent]);

    // Clear form
    setTitle("");
    setType("Academic");
    setDescription("");
    setDate("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Events</h2>

      {/* Form to add new event */}
      <form onSubmit={handleSubmit} style={{ marginBottom: "20px" }}>
        <input
          type="text"
          placeholder="Event Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
          style={{ marginRight: "10px" }}
        />

        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          style={{ marginRight: "10px" }}
        >
          <option value="Academic">Academic</option>
          <option value="Volunteering">Volunteering</option>
          <option value="Cultural">Cultural</option>
        </select>

        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
          style={{ marginRight: "10px" }}
        />

        <input
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
          style={{ marginRight: "10px", width: "300px" }}
        />

        <button type="submit">Add Event</button>
      </form>

      {/* List of events */}
      <ul>
        {events.map((event) => (
          <li key={event.id} style={{ marginBottom: "15px" }}>
            <strong>{event.title}</strong> ({event.type}) – {event.date}
            <br />
            {event.description}
          </li>
        ))}
      </ul>
    </div>
  );
}
