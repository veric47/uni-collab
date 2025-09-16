
import viteLogo from '/austLogo (1).webp'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import ProfilePage from "./pages/ProfilePage";
import ProjectPage from "./pages/ProjectPage";
import EventPage from "./pages/EventPage";
import Login from "./features/auth/Login";
import ChatPage from "./pages/ChatPage";

function App() {
   

  return (
    <>
      <div className="logo-container">
        <a href="https://aust.edu.ng/" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div> 
 
    <Router basename="/">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profiles" element={<ProfilePage />} />
        <Route path="/projects" element={<ProjectPage />} />
        <Route path="/events" element={<EventPage />} />
        <Route path="/chat" element={<ChatPage />} />
      </Routes>
    </Router>
    </>
  )
}

export default App