import { Link } from "react-router-dom";
import { mockProjects } from "../data/mockProjects";
import { mockEvents } from "../data/mockEvents";

export default function Dashboard() {
  return (
    <div className="grid gap-6">
      <header className="bg-blue-700 text-white p-6 shadow-md flex items-center justify-between">
      <h1 className="text-2xl md:text-3xl font-bold tracking-wide">African University of Science and Technology</h1>
     </header>
      <div className="grid md:grid-cols-4 gap-4">
        <Link to="/profiles" className="card p-6 bg-white hover:shadow"> Profiles</Link>
        <Link to="/projects" className="card p-6 bg-white hover:shadow"> Projects</Link>
        <Link to="/events" className="card p-6 bg-white hover:shadow"> Events</Link>
        <Link to="/recommendations" className="card p-6 bg-white hover:shadow"> Recommendations</Link>
      </div>

      <section className="grid md:grid-cols-2 gap-4">
        <div className="card bg-white p-4">
          <h2 className="font-semibold mb-2">Recent Projects</h2>
          <ul className="list-disc ml-5">
            {mockProjects.slice(0,3).map(p => <li key={p.id}>{p.title}</li>)}
          </ul>
        </div>
        <div className="card bg-white p-4">
          <h2 className="font-semibold mb-2">Upcoming Events</h2>
          <ul className="list-disc ml-5">
            {mockEvents.slice(0,3).map(e => <li key={e.id}>{e.title} — {e.date}</li>)}
          </ul>
        </div>
      </section>
    </div>
  );
}
