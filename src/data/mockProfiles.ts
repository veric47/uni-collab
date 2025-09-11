export type Role =
  | "Academic Staff"
  | "Non-Academic Staff"
  | "Operations"
  | "Undergraduate"
  | "Master’s"
  | "PhD";

export interface Profile {
  id: number;
  name: string;
  role: Role;
  department: string;
  skills: string[];
  services?: string[];
  affiliations?: string[];
}

export const mockProfiles: Profile[] = [
  {
    id: 1,
    name: "Dr. Ada Lovelace",
    role: "Academic Staff",
    department: "Computer Science",
    skills: ["AI", "ML", "Math"],
    affiliations: ["ACM", "IEEE"],
  },
  {
    id: 2,
    name: "John Doe",
    role: "Undergraduate",
    department: "Software Engineering",
    skills: ["React", "TypeScript", "UI/UX"],
  },
  {
    id: 3,
    name: "Jane Smith",
    role: "Master’s",
    department: "Data Science",
    skills: ["Python", "Pandas", "NLP"],
  },
  {
    id: 4,
    name: "Grace Hopper",
    role: "PhD",
    department: "Computer Science",
    skills: ["Compilers", "Systems"],
  },
];
