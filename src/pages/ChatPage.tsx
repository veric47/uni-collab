import { useState } from "react";

export default function ChatPage() {
  const [messages, setMessages] = useState<{ role: string; content: string }[]>([]);
  const [input, setInput] = useState("");

  const handleSend = async () => {
    if (!input.trim()) return;

    // Add user message to UI
    const newMessages = [...messages, { role: "user", content: input }];
    setMessages(newMessages);
    setInput("");

    // TODO: Replace with real AI API call
    const fakeResponse = "🤖 This is a sample AI response (connect to ChatGPT later).";

    setMessages([...newMessages, { role: "assistant", content: fakeResponse }]);
  };

  return (
    <div className="flex flex-col h-screen p-4 bg-gray-100">
      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto mb-4 p-2 bg-white rounded shadow">
        {messages.map((m, i) => (
          <div
            key={i}
            className={`my-2 p-2 rounded ${
              m.role === "user" ? "bg-blue-500 text-white self-end" : "bg-gray-200 text-black self-start"
            }`}
          >
            {m.content}
          </div>
        ))}
      </div>

      {/* Input Area */}
      <div className="flex">
        <textarea
          className="flex-1 border rounded p-2"
          rows={2}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type your message..."
        />
        <button
          onClick={handleSend}
          className="ml-2 px-4 py-2 bg-blue-600 text-white rounded"
        >
          Send
        </button>
      </div>
    </div>
  );
}
