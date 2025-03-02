import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logoo from "../assets/images.png";
import asch from "../assets/360_F_573881698_hwhzbRGAXwdDqhzWR9BbOMb5A6dcLk2r.jpg";
import chala from "../assets/download.jpg";
import joye from "../assets/istockphoto-175204486-612x612.jpg";
import meri from "../assets/istockphoto-468822682-612x612.jpg";
import vandam from "../assets/istockphoto-510105633-612x612.jpg";
import tomi from "../assets/istockphoto-1270851149-612x612.jpg";
import Candidate_card from "./candidate_cards";
import styles from "./leader.module.css";

export default function Leader() {
  const [dropdown, setDropdown] = useState(false);

  const initialCandidates = [
    { id: 1, name: "ASCHALEW", image: asch, votes: {} },
    { id: 2, name: "Chala", image: chala, votes: {} },
    { id: 3, name: "Joye", image: joye, votes: {} },
    { id: 4, name: "Meri", image: meri, votes: {} },
    { id: 5, name: "Vandam", image: vandam, votes: {} },
    { id: 6, name: "tomi", image: tomi, votes: {} },
  ];

  const currentUserId = "user123"; // Replace with your auth system’s user ID

  const [candidates, setCandidates] = useState(initialCandidates);

  // Fetch votes from localStorage and sort
  useEffect(() => {
    const storedVotes = localStorage.getItem(`votes_${currentUserId}`);
    let updatedCandidates = [...initialCandidates];
    if (storedVotes) {
      const parsedVotes = JSON.parse(storedVotes);
      updatedCandidates = initialCandidates.map((candidate) => ({
        ...candidate,
        votes: parsedVotes[candidate.id] || {},
      }));
    }
    // Sort candidates by vote count (descending)
    updatedCandidates.sort((a, b) => {
      const votesA = Object.keys(a.votes).length;
      const votesB = Object.keys(b.votes).length;
      return votesB - votesA; // Higher votes first
    });
    setCandidates(updatedCandidates);
  }, [currentUserId]);

  const toggle = () => {
    setDropdown((prev) => !prev);
  };

  const handleOutsideClick = (e) => {
    if (!e.target.closest("button")) {
      setDropdown(false);
    }
  };

  useEffect(() => {
    document.addEventListener("click", handleOutsideClick);
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  // Calculate total votes for each candidate
  const getTotalVotes = (votes) => Object.keys(votes).length;

  return (
    <div className={styles.mainContainer}>
      <div className={styles.headerContainer}>
        <div className={styles.navContainer}>
          <button onClick={toggle}>
            <b>MENU</b>
          </button>
          {dropdown && (
            <nav>
              <Link to="/home">
                <b>HOME</b>
              </Link>
              <Link to="/vote">
                <b>VOTE</b>
              </Link>
              <Link to="/leader">
                <b>LEADERBOARD</b>
              </Link>
              <Link to="/guidelines">
                <b>GUIDELINES</b>
              </Link>
            </nav>
          )}
        </div>
        <div className={styles.logo}>
          <div style={{ backgroundImage: `url(${logoo})` }}>logoo</div>
          <p>ASTU STUDENT PRESIDENT SELECTION</p>
        </div>
      </div>

      <div className={styles.leaderboardContainer}>
        <h1>Leaderboard</h1>
        <div className={styles.cardContainer}>
          {candidates.map((candidate, index) => (
            <Candidate_card
              key={candidate.id}
              student={candidate}
              totalVotes={getTotalVotes(candidate.votes)}
              rank={index + 1} // Assign rank based on sorted position
            />
          ))}
        </div>
      </div>
    </div>
  );
}