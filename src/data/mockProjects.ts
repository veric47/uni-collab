export interface Project {
    id: number;
    title: string;
    description: string;
    tags: string[];
  }
  
  export const mockProjects: Project[] = [
    { id: 1, title: "AI in Education", description: "Adaptive learning tutor", tags: ["AI", "NLP"] },
    { id: 2, title: "Campus Web Platform", description: "Portal for services", tags: ["React", "TypeScript"] },
    { id: 3, title: "Climate Data Insights", description: "Analyze climate datasets", tags: ["Python", "Data Science"] },
  ];
  