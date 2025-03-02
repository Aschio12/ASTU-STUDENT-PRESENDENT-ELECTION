import "./candidate_card.css";

export default function Candidate_card({ student, totalVotes, rank }) {
  return (
    <div
      className="candidate-card"
      style={{ backgroundImage: `url(${student.image})` }}
    >
      <div className="candidate-info">
        <h3>
          {rank}. {student.name}
        </h3> {/* Rank before name */}
        <p className="vote-count">Votes: {totalVotes}</p>
      </div>
    </div>
  );
}