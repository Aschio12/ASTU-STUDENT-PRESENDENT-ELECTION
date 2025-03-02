import logoo from "../assets/images.png";
import React, { use, useState } from "react";
import { Link } from "react-router-dom";
import "./leader.css";
export default function Home() {
  const [name, setName] = useState();
  const [dropdown, setDropdown] = useState(false);
  const togle = () => {
    setDropdown(!dropdown);
  };
  const handleOutsideClick = (e) => {
    if (e.target.tagName !== "BUTTON") {
      setIsOpen(false);
    }
  };

  document.addEventListener("click", handleOutsideClick);

  return (
    <div className="main-container">
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
              <Link to="/vote">
                <b>VOTE</b>
              </Link>
              <Link to="leader">
                <b>LEADER BORD</b>
              </Link>
              <Link>
                <b>GUIDLINES</b>
              </Link>
            </nav>
          )}
        </div>
        <div className="logo">
          <div style={{backgroundImage:`url(${logoo})`}}>logoo</div>
          <p>ASTU STUDENT PREDENT SELCTION</p>
        </div>
      </div>
      </div>);}