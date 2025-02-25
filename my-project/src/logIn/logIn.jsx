import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    // Simulate login (replace with real logic later)
    navigate("/home");
  };

  return (
    <div style={{ padding: "20px", textAlign: "center" }}>
      <h1>Login</h1>
      <p>(Login form goes here)</p>
      <button
        onClick={handleLogin}
        style={{ padding: "5px 10px", background: "#007bff", color: "white", border: "none" }}
      >
        Login (Demo)
      </button>
    </div>
  );
}