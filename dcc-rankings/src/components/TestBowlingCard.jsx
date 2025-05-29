import React from "react";
import testBatting from "../data/testBowling.json";
import "../index.css";

const movementIcon = (movement) => {
  if (movement === "up") return <span className="up">▲</span>;
  if (movement === "down") return <span className="down">▼</span>;
  return <span className="same">•</span>;
};

export default function TestBowlingRankingCard() {
  return (
    <div className="ranking-card">
      <div className="ranking-header">TEST BOWLING RANKINGS</div>
      <div className="green"></div>
      <ul className="ranking-list">
        {testBatting.map((player) => (
          <li key={player.rank} className="ranking-item">
            <div className="player-info">
              <span className="rank">{String(player.rank).padStart(2, "0")}</span>
              {movementIcon(player.movement)}
              <span className="flag">{player.flag}</span>
              <div className="name-team">
                <span className="name">{player.name}</span>
                <span className="team">{player.team}</span>
              </div>
            </div>
            <span className="rating">{player.rating}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
