import { useState } from "react";

export default function ProfilePage() {
  const [name, setName] = useState("");
  const [role, setRole] = useState("Undergraduate");
  const [department, setDepartment] = useState("");
  const [skills, setSkills] = useState("");
  const [bio, setBio] = useState(""); // optional
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const save = (e: React.FormEvent) => {
    e.preventDefault();

    // ✅ validation
    const newErrors: { [key: string]: string } = {};
    if (!name.trim()) newErrors.name = "❌ Full name cannot be empty.";
    if (!department.trim()) newErrors.department = "❌ Department cannot be empty.";
    if (!skills.trim()) newErrors.skills = "❌ Skills cannot be empty.";

    setErrors(newErrors);

    // if there are errors, stop submit
    if (Object.keys(newErrors).length > 0) return;

    // ✅ valid form
    alert(`✅ Saved profile for ${name} (${role})`);
  };

  return (
    <div className="max-w-2xl card bg-white p-6 rounded">
      <h1 className="text-2xl font-bold mb-4">My Profile</h1>
      <form onSubmit={save} className="grid gap-3">
        
        {/* Full Name */}
        <input
          className={`input ${errors.name ? "error-border" : ""}`}
          placeholder="Full name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors.name && <p className="error-message">{errors.name}</p>}

        {/* Role */}
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

        {/* Department */}
        <input
          className={`input ${errors.department ? "error-border" : ""}`}
          placeholder="Department"
          value={department}
          onChange={(e) => setDepartment(e.target.value)}
        />
        {errors.department && (
          <p className="error-message">{errors.department}</p>
        )}

        {/* Skills */}
        <input
          className={`input ${errors.skills ? "error-border" : ""}`}
          placeholder="Skills (comma separated)"
          value={skills}
          onChange={(e) => setSkills(e.target.value)}
        />
        {errors.skills && <p className="error-message">{errors.skills}</p>}

        {/* Bio (optional) */}
        <textarea
          className="textarea"
          placeholder="Write your bio (optional)..."
          value={bio}
          onChange={(e) => setBio(e.target.value)}
        />

        <button className="btn">Save</button>
      </form>
    </div>
  );
}
