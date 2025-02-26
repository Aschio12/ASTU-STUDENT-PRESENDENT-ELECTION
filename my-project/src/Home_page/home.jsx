import React,{use, useState} from "react";
import { Link } from "react-router-dom";
import Candiddate from "./candidates";
import "./home.css";
export default function Home() {
    const[name,setName]=useState();
    const[dropdown,setDropdown]=useState(false);
    const togle=()=>{
      setDropdown(!dropdown);
    }
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
          {dropdown &&<nav>
            <Link to="/home"><b>HOME</b></Link>
            <Link ><b>VOTE</b></Link>
            <Link><b>LEADER BORD</b></Link>
            <Link><b>GUIDLINES</b></Link>
        </nav>}
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
        <Candiddate/>
      </div>
      <div className="status">
        <h3><b>ELECTION OVERVIEW</b></h3>
        <p>Total Number Of Candidtes : </p>
        <p>TOtal Number Of Votes : </p>
        <p>Time left : </p>
      </div>
    </div>
  );
}
