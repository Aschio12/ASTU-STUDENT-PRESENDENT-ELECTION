import logoo from "../assets/images.png";
import React, { use, useState } from "react";
import { Link } from "react-router-dom";
import Candiddate from "./candidates";
import "./leader.css";

export default function Leader() {
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
              <Link to="/leaders">
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
      <div className="welcome">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam eius
          numquam fugiat recusandae soluta ducimus aliquid distinctio neque
          iste, sapiente obcaecati cupiditate optio blanditiis dignissimos vel
          ex, quo libero architecto.
        </p>
      </div>
      <div className="candidate-container">
        <Candiddate />
      </div>
    </div>);}