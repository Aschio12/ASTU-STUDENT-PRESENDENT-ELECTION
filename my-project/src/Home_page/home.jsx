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
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam eius
          numquam fugiat recusandae soluta ducimus aliquid distinctio neque
          iste, sapiente obcaecati cupiditate optio blanditiis dignissimos vel
          ex, quo libero architecto.
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
      <Footer/>
    </div>
  );
}