import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logoo from "../assets/images.png";
import Candidate from "./candidates";
import styles from "./home.module.css";
import Footer from "../footer";

export default function Home() {
  const [dropdown, setDropdown] = useState(false);

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

  return (
    <div className={styles.Container}>
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
          <div style={{ backgroundImage: `url(${logoo})` }}></div>
          <p>ASTU STUDENT PRESIDENT SELECTION</p>
        </div>
      </div>
      <div className={styles.welcome}>
        <h1>WELCOME TO ASTU STUDENT VOTING!</h1>
        <p>
          Welcome to the ASTU Student Voting App! This platform is designed to
          empower every student at Adama Science and Technology University
          (ASTU) to participate actively in shaping the future of our campus
          community. With this app, you can cast your vote securely,
          conveniently, and transparently in various student elections,
          referendums, or polls. Whether it’s choosing your representatives for
          the Student Union or deciding on key initiatives that affect campus
          life, your voice matters. The app ensures ease of access, privacy, and
          accuracy, making sure that each vote counts. Together, let’s build a
          more inclusive, democratic, and vibrant university environment. Thank
          you for being an active participant in driving positive change!
        </p>
      </div>
      <div className={styles.candidateContainer}>
        <Candidate />
      </div>
      <div className={styles.status}>
        <h3>
          <b>ELECTION OVERVIEW</b>
        </h3>
        <p>Total Number Of Candidates: </p>
        <p>Total Number Of Votes: </p>
        <p>Time left: </p>
      </div>
      <Footer />
    </div>
  );
}
