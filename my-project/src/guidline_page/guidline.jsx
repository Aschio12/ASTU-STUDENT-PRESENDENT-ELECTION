import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import logoo from "../assets/images.png";
import styles from "./guidline.module.css";
import Footer from "../footer"; 

export default function Guidelines() {
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
    <div className={styles.mainContainer}>
      {/* Same heading as other pages */}
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

      {/* Guidelines Content */}
      <div className={styles.guidelinesContainer}>
        <h1>Voting Guidelines</h1>
        <div className={styles.guidelinesList}>
          <h2>Rules and Instructions</h2>
          <ul>
            <li>
              <strong>Eligibility:</strong> Only registered ASTU students can
              vote. Ensure you’re logged in with your student account.
            </li>
            <li>
              <strong>One Vote:</strong> Each student gets one vote. Voting for
              a new candidate will override your previous vote.
            </li>
            <li>
              <strong>Voting Process:</strong> Go to the "Vote" page, select a
              candidate, and click the "VOTE" button to cast your vote.
            </li>
            <li>
              <strong>Leaderboard:</strong> Check the "Leaderboard" page to see
              real-time rankings based on total votes.
            </li>
            <li>
              <strong>Fair Play:</strong> Do not attempt to manipulate votes.
              Any suspicious activity may lead to disqualification.
            </li>
            <li>
              <strong>Deadline:</strong> Voting closes on [insert date]. Votes
              cast after this time will not be counted.
            </li>
          </ul>
          <h2>Tips</h2>
          <ul>
            <li>Review candidate profiles on the "Home" page before voting.</li>
            <li>Use the search feature on the "Vote" page to find candidates quickly.</li>
            <li>Contact support at voting@astu.edu if you encounter issues.</li>
          </ul>
        </div>
      </div>

      <Footer /> 
    </div>
  );
}