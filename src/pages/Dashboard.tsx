import { Link } from "react-router-dom";
import { mockProjects } from "../data/mockProjects";
import { mockEvents } from "../data/mockEvents";
import { useState } from "react";
import "./Dashboard.css";   // ✅ import your custom CSS

export default function Dashboard() {
  const [query, setQuery] = useState("");   // ✅ unified state

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleSubmit = () => {
    if (!query.trim()) return;
    console.log("AI Research Query:", query); // 👉 hook this into your AI API
    setQuery(""); // clear input
  };

  return (
    <div className="grid gap-6">
      <header className="dashboard-header">
        <h1 className="text-3xl font-bold">
          African University of Science and Technology
        </h1>
      </header>

      {/* Dashboard links */}
      <div className="dashboard-links">
        <Link to="/profiles" className="dashboard-card"> Profiles</Link>
        <Link to="/projects" className="dashboard-card"> Projects</Link>
        <Link to="/events" className="dashboard-card"> Events</Link>
        <Link to="/recommendations" className="dashboard-card"> Recommendations</Link>
      </div>

      {/* AI Research Assistant Section */}
      <section className="ai-research">
        <h2 className="text-xl font-semibold mb-2">AI Research Assistant</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
          className="ai-form"
        >
          <div className="ai-input-container">
            <textarea
              className="ai-textarea"
              placeholder="Ask a question or type your research idea..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown} // ✅ enter-to-send
            />
          </div>
        </form>
      </section>

      {/* Recent Projects + Upcoming Events */}
      <section className="grid md:grid-cols-2 gap-4">
        <div className="dashbord-board-card">
          <h2 className="font-semibold mb-2">Recent Projects</h2>
          <ul className="list-disc ml-5">
            {mockProjects.slice(0, 3).map((p) => (
              <li key={p.id}>{p.title}</li>
            ))}
          </ul>
        </div>
        <div className="dashbord-board-card">
          <h2 className="font-semibold mb-2">Upcoming Events</h2>
          <ul className="list-disc ml-5">
            {mockEvents.slice(0, 3).map((e) => (
              <li key={e.id}>
                {e.title} — {e.date}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
