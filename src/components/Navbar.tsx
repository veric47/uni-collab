import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const { pathname } = useLocation();
  const link = (to: string, label: string) => (
    <Link
      to={to}
      className={`px-3 py-2 rounded ${
        pathname === to ? "bg-white text-blue-600 font-semibold" : "text-white hover:underline"
      }`}
    >
      {label}
    </Link>
  );

  return (
    <nav className="bg-blue-600 text-white">
      <div className="max-w-6xl mx-auto px-4 py-3 flex gap-3 items-center">
        <span className="font-bold">UniNet</span>
        {link("/", "Dashboard")}
        {link("/profiles", "Profiles")}
        {link("/projects", "Projects")}
        {link("/events", "Events")}
        {link("/recommendations", "Recommendations")}
        {link("/requests", "Requests")}
        <div className="ml-auto">{link("/login", "Login")}</div>
      </div>
    </nav>
  );
}
