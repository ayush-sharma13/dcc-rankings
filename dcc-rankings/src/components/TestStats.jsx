import { useState, useEffect } from "react";
import data from "../data/tournaments.json";
import "../index.css";

const allData = data[2]; // Assuming you're using the second tournament's data

const TestStats = () => {
  const [statsData, setStatsData] = useState([]);

  useEffect(() => {
    // Fetch data or use static data
    if (allData && allData.playersStats) {
      setStatsData(allData.playersStats);
    }
  }, []);

  return (
    <div className="player-stats-container">
      <h2>DCC TEST Stats</h2>
      <div className="players-cards">
        {statsData.map((player, index) => (
          <div className="player-card player-card-test" key={index}>
            <h3>{player.name}</h3>
            <div className="player-stats">
              <div className="player-stat-row">
                <span className="player-stat-label">Innings Bat</span>
                <span className="player-stat-value">{player.inningsBat}</span>
              </div>
              <div className="player-stat-row">
                <span className="player-stat-label">Runs</span>
                <span className="player-stat-value">{player.runs}</span>
              </div>
              <div className="player-stat-row">
                <span className="player-stat-label">Fours</span>
                <span className="player-stat-value">{player.fours}</span>
              </div>
              <div className="player-stat-row">
                <span className="player-stat-label">Sixes</span>
                <span className="player-stat-value">{player.sixes}</span>
              </div>
              <div className="player-stat-row">
                <span className="player-stat-label">Strike Rate</span>
                <span className="player-stat-value">{player.sr}</span>
              </div>
              <div className="player-stat-row">
                <span className="player-stat-label">Best Batting</span>
                <span className="player-stat-value">{player.bestBatting}</span>
              </div>
              <div className="player-stat-row">
                <span className="player-stat-label">Batting Average</span>
                <span className="player-stat-value">{player.batAvg}</span>
              </div>
              <div className="player-stat-row">
                <span className="player-stat-label">Innings Bowl</span>
                <span className="player-stat-value">{player.inningsBowl}</span>
              </div>
              <div className="player-stat-row">
                <span className="player-stat-label">Wickets</span>
                <span className="player-stat-value">{player.wickets}</span>
              </div>
              <div className="player-stat-row">
                <span className="player-stat-label">Best Bowling</span>
                <span className="player-stat-value">{player.bestBowling}</span>
              </div>
              <div className="player-stat-row">
                <span className="player-stat-label">Bowling Average</span>
                <span className="player-stat-value">{player.bowlAvg}</span>
              </div>
            </div>
            <div className="player-line-test"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TestStats;
