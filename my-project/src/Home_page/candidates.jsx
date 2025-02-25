import "./candidates.css";
import asch from "../assets/360_F_573881698_hwhzbRGAXwdDqhzWR9BbOMb5A6dcLk2r.jpg";
import chala from "../assets/download.jpg";
import joye from "../assets/istockphoto-175204486-612x612.jpg";
import meri from "../assets/istockphoto-468822682-612x612.jpg";
import vandam from "../assets/istockphoto-510105633-612x612.jpg";
import tomi from "../assets/istockphoto-1270851149-612x612.jpg";
import Candidate_card from "./candidate_cards";
import { useState } from "react";

export default function Candidate() {
  const initialCandidates = [
    { id: 1, name: "ASCHALEW", image: asch },
    { id: 2, name: "Chala", image: chala },
    { id: 3, name: "Joye", image: joye },
    { id: 4, name: "Meri", image: meri },
    { id: 5, name: "Vandam", image: vandam },
    { id: 6, name: "tomi", image: tomi },
  ];

  const [candidates, setCandidates] = useState(initialCandidates);
  const [searchTerm, setSearchTerm] = useState("");

  // Handle search and swap (used for both button and Enter key)
  const handleSearch = () => {
    const foundIndex = candidates.findIndex(
      (candidate) => candidate.name.toLowerCase() === searchTerm.toLowerCase()
    );
    if (foundIndex > 0) { // If found and not already first
      const newCandidates = [...candidates];
      [newCandidates[0], newCandidates[foundIndex]] = [newCandidates[foundIndex], newCandidates[0]];
      setCandidates(newCandidates);
    }
    setSearchTerm(""); // Clear input
  };

  // Handle Enter key press
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search candidates..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown} // Trigger search on Enter
        />
        <button onClick={handleSearch}>
          <b>SEARCH</b>
        </button>
      </div>
      <div className="card-container">
        {candidates.map((obj) => (
          <Candidate_card key={obj.id} student={obj} />
        ))}
      </div>
    </div>
  );
}