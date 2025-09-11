import { useState } from "react";

interface Profile {
  id: number;
  name: string;
  skills: string[];
  department: string;
}

export default function ProfilePage() {
  const [profiles] = useState<Profile[]>([
    { id: 1, name: "Alice", skills: ["React", "UI/UX"], department: "Computer Science" },
    { id: 2, name: "Bob", skills: ["Python", "AI"], department: "Engineering" },
  ]);

  return (
    <div style={{ padding: "20px" }}>
      <h2>Student Profiles</h2>
      <ul>
        {profiles.map((profile) => (
          <li key={profile.id} style={{ marginBottom: "15px" }}>
            <strong>{profile.name}</strong> – {profile.department}
            <br />
            Skills: {profile.skills.join(", ")}
          </li>
        ))}
      </ul>
    </div>
  );
}
