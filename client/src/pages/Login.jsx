import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";
import { useAuth } from "../context/AuthContext";
import "./login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/auth/login", {
        email,
        password
      });

      const token = res.data.token;
      login(token);

      // decode token to get role
      const payload = JSON.parse(atob(token.split(".")[1]));
      const role = payload.role;

      if (role === "retailer") {
        navigate("/retailer/dashboard");
      } else if (role === "wholesaler") {
        navigate("/wholesaler/dashboard");
      }
    } catch (error) {
      alert("Login failed");
    }
  };

 return (
  <div className="login-page">
    <form className="login-card" onSubmit={handleSubmit}>
      <h2 className="login-title">MediLink Login</h2>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        className="login-input"
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
        className="login-input"
      />

      <button type="submit" className="login-btn">
        Login
      </button>
    </form>
  </div>
);

}
