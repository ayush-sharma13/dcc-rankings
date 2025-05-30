import { Link } from "react-router-dom";
import data from "../data/tournaments.json";
import "../index.css";

const Tournament = () => {
  return (
    <div
      style={{
        textAlign: "center",
        padding: "0px",
        width: "100vw",
        minHeight: "100vh",
        boxSizing: "border-box",
        margin: 0,
      }}
    >
      <h2 className="dcc-tournament-banner" style={{ fontSize: "24px" }}>
        🏆 DCC Tournaments & Stats
      </h2>

      <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
        {data.map((tournament) => (
          <li key={tournament.id} style={{ margin: "10px 0" }}>
            <Link to={`/tournaments/${tournament.id}`}>
              <button
                style={{
                  backgroundColor: "#0066cc",
                  color: "white",
                  padding: "10px 20px",
                  border: "none",
                  borderRadius: 0,
                  cursor: "pointer",
                  width: "100%",
                  maxWidth: 400,
                  boxSizing: "border-box",
                  fontSize: "18px",
                }}
              >
                {tournament.name}
              </button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Tournament;
