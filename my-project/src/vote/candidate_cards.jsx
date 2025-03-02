import "./candidate_card.css";

export default function Candidate_card({ student, onVote, totalVotes }) {
  return (
    <div
      className="candidate-card"
      style={{ backgroundImage: `url(${student.image})` }}
    >
      <p>{student.name}</p>
      <p>Votes: {totalVotes}</p> {/* Display total votes */}
      <button onClick={onVote}>
        <b>VOTE</b>
      </button>
    </div>
  );
}