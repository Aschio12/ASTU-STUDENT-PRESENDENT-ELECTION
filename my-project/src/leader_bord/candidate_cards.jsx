import "./candidate_card.css";
export default function Candidate_card({student}){
    return(
        <div className="candidate-card" style={{backgroundImage:`url(${student.image})`}}>
            <p>{student.name}</p>
            <button><b>MORE</b></button>
        </div>
    );
}