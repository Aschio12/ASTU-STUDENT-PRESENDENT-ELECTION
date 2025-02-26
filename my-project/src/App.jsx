import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Signup from "./sign_up/sign_up.jsx";
import Login from "./logIn/logIn.jsx";
import Home from "./Home_page/home.jsx";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home />} />
        <Route path="/" element={<Signup />} /> {/* Changed to Signup */}
      </Routes>
    </Router>
  );
}

export default App;