import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import "./login.css";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");
    const user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      setError("No account found. Please sign up first.");
      return;
    }
    if (user.email !== email || user.password !== password) {
      setError("Invalid email or password.");
      return;
    }
    localStorage.setItem("loggedIn", "true");
    navigate("/home");
  };

  return (
    <div className="auth-container">
      <h1>Log In to Vote</h1>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        {error && <p className="error">{error}</p>}
        <button type="submit">Log In</button>
      </form>
      <p className="auth-link">
        Don’t have an account? <Link to="/signup" className="link">Sign up here</Link>
      </p>
    </div>
  );
}