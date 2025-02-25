import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./sign_up/sign_up.jsx";
import Login from "./logIn/logIn.jsx";
import Candidate from "./Home_page/candidates.jsx";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Signup />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Candidate />} />
      </Routes>
    </Router>
  );
}