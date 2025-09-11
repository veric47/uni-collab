import type { Profile } from "../data/mockProfiles";

export default function ProfileCard({ p }: { p: Profile }) {
  return (
    <div className="card p-4 rounded-lg border shadow-sm bg-white">
      <h3 className="font-semibold">{p.name}</h3>
      <p className="text-sm text-gray-600">{p.role} · {p.department}</p>
      <p className="text-sm mt-2">Skills: {p.skills.join(", ")}</p>
      {p.affiliations?.length ? (
        <p className="text-xs text-gray-500 mt-1">Affiliations: {p.affiliations.join(", ")}</p>
      ) : null}
      <button className="mt-3 px-3 py-2 bg-blue-600 text-white rounded">View Profile</button>
    </div>
  );
}
