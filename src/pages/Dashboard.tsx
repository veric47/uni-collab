import { Link } from "react-router-dom";
import { mockProjects } from "../data/mockProjects";
import { mockEvents } from "../data/mockEvents";
import { useState, useRef } from "react";
import "./Dashboard.css";   // ✅ custom CSS

export default function Dashboard() {
  const [query, setQuery] = useState("");   
  const [attachments, setAttachments] = useState<File[]>([]);
  const [recording, setRecording] = useState(false);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const audioChunksRef = useRef<Blob[]>([]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setAttachments([...attachments, ...Array.from(e.target.files)]);
    }
  };

  // 🎤 Start / Stop Recording
  const toggleRecording = async () => {
    if (!recording) {
      // Start recording
      try {
        const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
        const mediaRecorder = new MediaRecorder(stream);
        mediaRecorderRef.current = mediaRecorder;
        audioChunksRef.current = [];

        mediaRecorder.ondataavailable = (event) => {
          if (event.data.size > 0) {
            audioChunksRef.current.push(event.data);
          }
        };

        mediaRecorder.onstop = () => {
          const audioBlob = new Blob(audioChunksRef.current, { type: "audio/webm" });
          const file = new File([audioBlob], `recording-${Date.now()}.webm`, { type: "audio/webm" });
          setAttachments((prev) => [...prev, file]);
        };

        mediaRecorder.start();
        setRecording(true);
      } catch (err) {
        console.error("Mic access denied:", err);
      }
    } else {
      // Stop recording
      mediaRecorderRef.current?.stop();
      setRecording(false);
    }
  };

  const handleSubmit = () => {
    if (!query.trim() && attachments.length === 0) return;

    console.log("AI Research Query:", query);
    console.log("Attachments:", attachments);

    setQuery(""); 
    setAttachments([]); 
  };

  return (
    <div className="grid gap-6">
      <header className="dashboard-header">
        <h1 className="text-3xl font-bold">
          African University of Science and Technology
        </h1>
      </header>

      {/* Dashboard links */}
      <div className="dashboard-links">
        <Link to="/profiles" className="dashboard-card"> Profiles</Link>
        <Link to="/projects" className="dashboard-card"> Projects</Link>
        <Link to="/events" className="dashboard-card"> Events</Link>
        <Link to="/recommendations" className="dashboard-card"> Recommendations</Link>
      </div>

      {/* AI Research Assistant Section */}
      <section className="ai-research">
        <h2 className="text-xl font-semibold mb-2">AI Research Assistant</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
          className="ai-form"
        >
          <div className="ai-input-wrapper">
            <textarea
              className="ai-textarea"
              placeholder="Message AI Research Assistant..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={handleKeyDown}
            />

            {/* Action buttons like ChatGPT */}
            <div className="ai-actions">
              <label className="ai-icon-btn" title="Upload Image">
                📷
                <input
                  type="file"
                  accept="image/*"
                  hidden
                  onChange={handleFileUpload}
                />
              </label>
              <button
                type="button"
                className={`ai-mic-btn ${recording ? "recording" : ""}`}
                onClick={toggleRecording}
                title={recording ? "Stop Recording" : "Start Recording"}
              >
                🎤
              </button>
              <button type="submit" className="ai-send-btn" title="Send">
                ➤
              </button>
            </div>
          </div>

          {/* File preview */}
          {attachments.length > 0 && (
            <div className="ai-preview">
              {attachments.map((file, idx) => (
                <span key={idx} className="ai-preview-item">
                  {file.type.startsWith("image/") ? "🖼️" : "🎵"} {file.name}
                </span>
              ))}
            </div>
          )}
        </form>
      </section>

      {/* Recent Projects + Upcoming Events */}
      <section className="grid md:grid-cols-2 gap-4">
        <div className="dashbord-board-card">
          <h2 className="font-semibold mb-2">Recent Projects</h2>
          <ul className="list-disc ml-5">
            {mockProjects.slice(0, 3).map((p) => (
              <li key={p.id}>{p.title}</li>
            ))}
          </ul>
        </div>
        <div className="dashbord-board-card">
          <h2 className="font-semibold mb-2">Upcoming Events</h2>
          <ul className="list-disc ml-5">
            {mockEvents.slice(0, 3).map((e) => (
              <li key={e.id}>
                {e.title} — {e.date}
              </li>
            ))}
          </ul>
        </div>
      </section>
    </div>
  );
}
