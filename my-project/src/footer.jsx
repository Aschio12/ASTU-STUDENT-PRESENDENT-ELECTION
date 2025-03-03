import React from "react";
import { Link } from "react-router-dom";
import styles from "./footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <div className={styles.footerSection}>
          <h4>ASTU Voting System</h4>
          <p>&copy; 2025 ASTU Student President Selection. All rights reserved.</p>
        </div>
        <div className={styles.footerSection}>
          <h4>Quick Links</h4>
          <ul className={styles.footerLinks}>
            <li><Link to="/home">Home</Link></li>
            <li><Link to="/vote">Vote</Link></li>
            <li><Link to="/leader">Leaderboard</Link></li>
            <li><Link to="/guidelines">Guidelines</Link></li>
          </ul>
        </div>
        <div className={styles.footerSection}>
          <h4>Contact Us</h4>
          <p>Email: voting@astu.edu</p>
          <p>Phone: +251-123-456-789</p>
        </div>
      </div>
    </footer>
  );
}