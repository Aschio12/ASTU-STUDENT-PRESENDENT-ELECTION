import React,{useState} from "react";
import Candiddate from "./candidates";
import "./home.css";
export default function Home() {
    const[name,setName]=useState();
  return (
    <div className="main-container">
      <div className="header-container">
        <div className="nav-container">
          <button>
            <b>MENU</b>
          </button>
          <ul>
            <li>HOME</li>
            <li>VOTE</li>
            <li>leader board</li>
            <li>GUIDLINES</li>
          </ul>
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
