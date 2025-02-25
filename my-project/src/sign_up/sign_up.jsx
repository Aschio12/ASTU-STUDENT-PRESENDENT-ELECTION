import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignedUp, setIsSignedUp] = useState(false);
  const navigate = useNavigate();

  const handleSignup = (e) => {
    e.preventDefault();
    if (email && password) {
      localStorage.setItem("user", JSON.stringify({ email })); 
      setIsSignedUp(true);
      navigate("/home"); 
    }
  };

  const goToLogin = () => {
    navigate("/login"); 
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Sign Up</h1>
      {!isSignedUp ? (
        <form onSubmit={handleSignup}>
          <div>
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ padding: "5px", margin: "10px", width: "200px" }}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ padding: "5px", margin: "10px", width: "200px" }}
            />
          </div>
          <button
            type="submit"
            style={{ padding: "5px 10px", background: "#007bff", color: "white", border: "none" }}
          >
            Sign Up
          </button>
        </form>
      ) : (
        <div>
          <p>You’re already signed up!</p>
          <button
            onClick={goToLogin}
            style={{ padding: "5px 10px", background: "#007bff", color: "white", border: "none" }}
          >
            Go to Login
          </button>
        </div>
      )}
    </div>
  );
}