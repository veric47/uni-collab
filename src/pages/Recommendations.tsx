import { useState } from "react";

const mockProfiles = [
  { id: 1, name: "Dr. Ada Lovelace", role: "Academic Staff", skills: ["AI", "Math"] },
  { id: 2, name: "Jane Smith", role: "Master’s Student", skills: ["Data Science", "ML"] },
  { id: 3, name: "John Doe", role: "Undergraduate", skills: ["Web Dev", "Python"] },
];

const mockProjects = [
  { id: 1, title: "AI in Education", tags: ["AI", "ML"] },
  { id: 2, title: "Web Platform Development", tags: ["Web Dev", "React"] },
  { id: 3, title: "Data Science for Climate Change", tags: ["Data Science"] },
];

function Recommendations() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const handleSelect = (id: number) => {
    setSelectedProject(id);
  };

  // find matching profiles by skill
  const recommendedProfiles = selectedProject
    ? mockProfiles.filter((p) =>
        mockProjects[selectedProject - 1].tags.some((tag) =>
          p.skills.includes(tag)
        )
      )
    : [];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">🤖 AI Recommendations</h1>

      <p className="mb-2">Select a project to see recommended collaborators:</p>
      <div className="flex gap-3 mb-6">
        {mockProjects.map((project) => (
          <button
            key={project.id}
            onClick={() => handleSelect(project.id)}
            className={`px-4 py-2 rounded ${
              selectedProject === project.id
                ? "bg-blue-600 text-white"
                : "bg-gray-200 hover:bg-gray-300"
            }`}
          >
            {project.title}
          </button>
        ))}
      </div>

      {selectedProject && (
        <div>
          <h2 className="text-xl font-semibold mb-3">
            Recommended for: {mockProjects[selectedProject - 1].title}
          </h2>
          {recommendedProfiles.length > 0 ? (
            <div className="grid gap-4">
              {recommendedProfiles.map((profile) => (
                <div key={profile.id} className="p-4 border rounded shadow">
                  <h3 className="font-bold">{profile.name}</h3>
                  <p>{profile.role}</p>
                  <p className="text-sm text-gray-600">
                    Skills: {profile.skills.join(", ")}
                  </p>
                </div>
              ))}
            </div>
          ) : (
            <p>No matching collaborators found.</p>
          )}
        </div>
      )}
    </div>
  );
}

export default Recommendations;