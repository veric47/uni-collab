import type { UniEvent } from "../data/mockEvents";

export default function EventCard({ event }: { event: UniEvent }) {
  return (
    <div className="card p-4 rounded-lg border bg-white">
      <h3 className="font-semibold">{event.title}</h3>
      <p className="text-sm text-gray-600">{event.type} · {event.date}</p>
      <p className="text-sm mt-1">{event.description}</p>
      <div className="flex gap-2 mt-2 flex-wrap">
        {event.tags.map((t) => (
          <span key={t} className="text-xs bg-yellow-100 text-yellow-700 px-2 py-1 rounded">{t}</span>
        ))}
      </div>
    </div>
  );
}
