import type { Project } from "../data/mockProjects";

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <div className="card p-4 rounded-lg border bg-white">
      <h3 className="font-semibold">{project.title}</h3>
      <p className="text-sm text-gray-700 mt-1">{project.description}</p>
      <div className="flex gap-2 mt-2 flex-wrap">
        {project.tags.map((t) => (
          <span key={t} className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">{t}</span>
        ))}
      </div>
    </div>
  );
}
