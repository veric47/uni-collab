import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const nav = useNavigate();

  const submit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email && password) nav("/");
  };

  return (
    <div className="max-w-md mx-auto mt-12 card bg-white p-6 rounded">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <form onSubmit={submit} className="grid gap-3">
        <input className="input" type="email" placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
        <input className="input" type="password" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)} />
        <button className="btn">Login</button>
      </form>
    </div>
  );
}
