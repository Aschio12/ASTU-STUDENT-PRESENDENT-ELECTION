import { Link } from "react-router-dom";
import asch from "../assets/360_F_573881698_hwhzbRGAXwdDqhzWR9BbOMb5A6dcLk2r.jpg";
import chala from "../assets/download.jpg";
import joye from "../assets/istockphoto-175204486-612x612.jpg";
import meri from "../assets/istockphoto-468822682-612x612.jpg";
import vandam from "../assets/istockphoto-510105633-612x612.jpg";
import tomi from "../assets/istockphoto-1270851149-612x612.jpg";
import { useState, useEffect } from "react"; // Added useEffect
import logoo from "../assets/images.png";
import Candidate_card from "./candidate_cards";
import "./vote.css";

export default function Vote() {
  const currentUserId = "user123"; // Replace with your auth system’s user ID

  const initialCandidates = [
    { id: 1, name: "ASCHALEW", image: asch, votes: {} },
    { id: 2, name: "Chala", image: chala, votes: {} },
    { id: 3, name: "Joye", image: joye, votes: {} },
    { id: 4, name: "Meri", image: meri, votes: {} },
    { id: 5, name: "Vandam", image: vandam, votes: {} },
    { id: 6, name: "tomi", image: tomi, votes: {} },
  ];

  // Load votes from localStorage on initial render
  const loadVotesFromStorage = () => {
    const storedVotes = localStorage.getItem(`votes_${currentUserId}`);
    if (storedVotes) {
      const parsedVotes = JSON.parse(storedVotes);
      return initialCandidates.map((candidate) => ({
        ...candidate,
        votes: parsedVotes[candidate.id] || {},
      }));
    }
    return initialCandidates;
  };

  const [candidates, setCandidates] = useState(loadVotesFromStorage);
  const [searchTerm, setSearchTerm] = useState("");

  // Save votes to localStorage whenever candidates change
  useEffect(() => {
    const votesToSave = candidates.reduce((acc, candidate) => {
      acc[candidate.id] = candidate.votes;
      return acc;
    }, {});
    localStorage.setItem(`votes_${currentUserId}`, JSON.stringify(votesToSave));
  }, [candidates, currentUserId]);

  const handleSearch = () => {
    const foundIndex = candidates.findIndex(
      (candidate) => candidate.name.toLowerCase() === searchTerm.toLowerCase()
    );
    if (foundIndex > 0) {
      const newCandidates = [...candidates];
      [newCandidates[0], newCandidates[foundIndex]] = [
        newCandidates[foundIndex],
        newCandidates[0],
      ];
      setCandidates(newCandidates);
    }
    setSearchTerm("");
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  const handleVote = (candidateId) => {
    setCandidates((prevCandidates) =>
      prevCandidates.map((candidate) => {
        const updatedVotes = { ...candidate.votes };

        // Remove the user's vote from this candidate if it exists
        if (updatedVotes[currentUserId]) {
          delete updatedVotes[currentUserId];
        }

        // Add the vote to the selected candidate
        if (candidate.id === candidateId) {
          updatedVotes[currentUserId] = 1;
        }

        return { ...candidate, votes: updatedVotes };
      })
    );
  };

  // Calculate total votes for display
  const getTotalVotes = (votes) => Object.keys(votes).length;

  const [dropdown, setDropdown] = useState(false);
  const togle = () => {
    setDropdown(!dropdown);
  };

  return (
    <div className="container">
      <div className="header-container">
        <div className="nav-container">
          <button>
            <b onClick={togle}>MENU</b>
          </button>
          {dropdown && (
            <nav>
              <Link to="/home">
                <b>HOME</b>
              </Link>
              <Link>
                <b>VOTE</b>
              </Link>
              <Link>
                <b>LEADER BORD</b>
              </Link>
              <Link>
                <b>GUIDLINES</b>
              </Link>
            </nav>
          )}
        </div>
        <div className="logo">
          <div style={{ backgroundImage: `url(${logoo})` }}>logoo</div>
          <p>ASTU STUDENT PREDENT SELCTION</p>
        </div>
      </div>
      <div className="search-container">
        <input
          type="text"
          placeholder="Search candidates..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleSearch}>
          <b>SEARCH</b>
        </button>
      </div>
      <div className="card-container">
        {candidates.map((obj) => (
          <Candidate_card
            key={obj.id}
            student={obj}
            onVote={() => handleVote(obj.id)}
            totalVotes={getTotalVotes(obj.votes)}
          />
        ))}
      </div>
    </div>
  );
}