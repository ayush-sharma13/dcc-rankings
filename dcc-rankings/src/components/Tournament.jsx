import { useState } from "react";
import TournamentDetails from "./TournamentDetails";
import data from "../data/tournaments.json";
import "../index.css";

const Tournament = () => {
  const [selected, setSelected] = useState(null);

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
        <h2 className="dcc-tournament-banner" style={{ fontSize: "24px" }}>🏆 DCC Tournaments</h2>

        {!selected ? (
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {data.map((tournament) => (
                    <li key={tournament.id} style={{ margin: "10px 0" }}>
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
                            onClick={() => setSelected(tournament)}
                        >
                            {tournament.name}
                        </button>
                    </li>
                ))}
            </ul>
        ) : (
            <TournamentDetails data={data} tournament={selected} goBack={() => setSelected(null)} />
        )}
    </div>
);
};

export default Tournament;
