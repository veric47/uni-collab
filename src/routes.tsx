import { createBrowserRouter } from "react-router-dom";

// Pages
import Dashboard from "./pages/Dashboard";
import ProfilePage from "./pages/ProfilePage";
import ProjectPage from "./pages/ProjectPage";
import EventPage from "./pages/EventPage";

// Auth
import Login from "./features/auth/Login";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/profiles",
    element: <ProfilePage />,
  },
  {
    path: "/projects",
    element: <ProjectPage />,
  },
  {
    path: "/events",
    element: <EventPage />,
  },
]);