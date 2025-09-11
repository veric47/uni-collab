export interface UniEvent {
    id: number;
    title: string;
    type: "Academic" | "Volunteering" | "Cultural";
    date: string; // ISO
    description: string;
    tags: string[];
  }
  
  export const mockEvents: UniEvent[] = [
    { id: 1, title: "AI Symposium", type: "Academic", date: "2025-10-01", description: "Talks on AI research", tags: ["AI"] },
    { id: 2, title: "Community Clean-Up", type: "Volunteering", date: "2025-09-25", description: "Join to clean campus", tags: ["Community"] },
    { id: 3, title: "Cultural Night", type: "Cultural", date: "2025-11-10", description: "Food & music showcase", tags: ["Culture"] },
  ];
  