import { useState } from "react";
import { loginUser } from "../services/authService";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });
  const [message, setMessage] = useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const res = await loginUser(form);
    setMessage(res.message);
  }

  return (
    <div style={{ padding: 20 }}>
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <input name="email" placeholder="Email" onChange={handleChange} />
        <br />
        <input name="password" type="password" placeholder="Password" onChange={handleChange} />
        <br />
        <button>Login</button>
      </form>

      {message && <p>{message}</p>}
    </div>
  );
}