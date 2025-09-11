import { useState } from "react";

const mockProfiles = [
  { id: 1, name: "Dr. Ada Lovelace", role: "Academic Staff", skills: ["AI", "Math"] },
  { id: 2, name: "John Doe", role: "Undergraduate", skills: ["Web Dev", "Python"] },
  { id: 3, name: "Jane Smith", role: "Master’s Student", skills: ["Data Science", "ML"] },
];

function ProfilesDirectory() {
  const [search, setSearch] = useState("");

  const filteredProfiles = mockProfiles.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Profiles Directory</h1>

      <input
        type="text"
        placeholder="Search profiles..."
        className="mb-4 p-2 border rounded w-full"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid gap-4">
        {filteredProfiles.map((profile) => (
          <div key={profile.id} className="p-4 border rounded shadow">
            <h2 className="font-bold">{profile.name}</h2>
            <p>{profile.role}</p>
            <p className="text-sm text-gray-600">
              Skills: {profile.skills.join(", ")}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProfilesDirectory;
