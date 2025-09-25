import { useState, useEffect } from "react";
import "./ProjectPage.css";

interface Project {
  id: number;
  title: string;
  description: string;
  category: string;
}

export default function ProjectPage() {
  const [projects, setProjects] = useState<Project[]>([]);

  // Load projects from LocalStorage on first render
  useEffect(() => {
    const savedProjects = localStorage.getItem("projects");
    if (savedProjects) {
      setProjects(JSON.parse(savedProjects));
    }
  }, []);

  // Save projects to LocalStorage whenever they change
  useEffect(() => {
    localStorage.setItem("projects", JSON.stringify(projects));
  }, [projects]);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const newProject: Project = {
      id: projects.length + 1,
      title,
      description,
      category,
    };

    setProjects([...projects, newProject]);

    // Clear form
    setTitle("");
    setDescription("");
    setCategory("");
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>Projects</h2>

      <form onSubmit={handleSubmit}>
        <div className="grid">
        <input
         className="border"
          type="text"
          placeholder="Project Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          required
        />

        <input
        className="border"
          type="text"
          placeholder="Category"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          required
        />

        <input
        className="border"
          type="text"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          required
        />
        </div>

        <button type="submit">Add Project</button>
      </form>

      <ul>
        {projects.map((project) => (
          <li key={project.id}>
            <strong>{project.title}</strong> ({project.category})
            <br />
            {project.description}
          </li>
        ))}
      </ul>
    </div>
  );
}
