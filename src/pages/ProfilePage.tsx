import { useState } from "react";

export default function ProfilePage() {
  const [name, setName] = useState("");
  const [role, setRole] = useState("Undergraduate");
  const [department, setDepartment] = useState("");
  const [skills, setSkills] = useState("");
  const [bio, setBio] = useState("");   // ✅ new textarea field
  const [error, setError] = useState("");

  const save = (e: React.FormEvent) => {
    e.preventDefault();

    // ✅ validation: check if bio is empty
    if (!bio.trim()) {
      setError("❌ Bio cannot be empty!");
      return;
    }

    setError(""); // clear errors if valid
    alert(`✅ Saved profile for ${name} (${role})`);
  };

  return (
    <div className="max-w-2xl card bg-white p-6 rounded">
      <h1 className="text-2xl font-bold mb-4">My Profile</h1>
      <form onSubmit={save} className="grid gap-3">
        <input
          className="input"
          placeholder="Full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <select
          className="select"
          value={role}
          onChange={(e) => setRole(e.target.value)}
        >
          <option>Academic Staff</option>
          <option>Non-Academic Staff</option>
          <option>Operations</option>
          <option>Undergraduate</option>
          <option>Master’s</option>
          <option>PhD</option>
        </select>

        <input
          className="input"
          placeholder="Department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        />

        <input
          className="input"
          placeholder="Skills (comma separated)"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
        />

        {/* ✅ New textarea */}
        <textarea
          className={`textarea ${error ? "error-border" : ""}`}
          placeholder="Write your bio..."
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />

        {/* ✅ Error message */}
        {error && <p className="error-message">{error}</p>}

        <button className="btn">Save</button>
      </form>
    </div>
  );
}
