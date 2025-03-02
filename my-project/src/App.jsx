import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./sign_up/sign_up.jsx";
import Login from "./logIn/logIn.jsx";
import Home from "./Home_page/home.jsx";
import Vote from "./vote/vote.jsx";
import Leader from "./leader_bord/leader.jsx";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/vote" element={<Vote />} />
        <Route path="/leaders" element={<Leader />} />,
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Signup />} /> {/* Changed to Signup */}
      </Routes>
    </Router>
  );
}

export default App;