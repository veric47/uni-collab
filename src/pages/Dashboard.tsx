import { Link } from "react-router-dom";
import { mockProjects } from "../data/mockProjects";
import { mockEvents } from "../data/mockEvents";
import "./Dashboard.css";   // ✅ import your custom CSS

export default function Dashboard() {
  return (
    <div className="grid gap-6">
      <header className="dashboard-header">
        <h1 className="text-3xl font-bold">
          African University of Science and Technology
        </h1>
      </header>

      <div className="grid md:grid-cols-4 gap-4">
        <Link to="/profiles" className="dashboard-card"> Profiles</Link>
        <Link to="/projects" className="dashboard-card"> Projects</Link>
        <Link to="/events" className="dashboard-card"> Events</Link>
        <Link to="/recommendations" className="dashboard-card"> Recommendations</Link>
      </div>

      <section className="grid md:grid-cols-2 gap-4">
        <div className="dashboard-card">
          <h2 className="font-semibold mb-2">Recent Projects</h2>
          <ul className="list-disc ml-5">
            {mockProjects.slice(0,3).map(p => <li key={p.id}>{p.title}</li>)}
          </ul>
        </div>
        <div className="dashboard-card">
          <h2 className="font-semibold mb-2">Upcoming Events</h2>
          <ul className="list-disc ml-5">
            {mockEvents.slice(0,3).map(e => <li key={e.id}>{e.title} — {e.date}</li>)}
          </ul>
        </div>
      </section>
    </div>
  );
}
