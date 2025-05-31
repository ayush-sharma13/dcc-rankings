import { useState, useEffect } from "react";
import data from "../data/tournaments.json";
import "../index.css";

const allData = data[1]; // Assuming you're using the second tournament's data

const PlayerStats = () => {
  const [statsData, setStatsData] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    if (allData && allData.playersStats) {
      setStatsData(allData.playersStats);
    }
  }, []);

  // Filter players by name (case-insensitive)
  const filteredStats = statsData.filter((player) =>
    player.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="player-stats-container">
      <h2>DCC All Time Player Stats</h2>

      {/* Search Input */}
      <input
        type="text"
        placeholder="Search player name..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-bar modern-search"
      />
      <div className="highlights-container">
        <div className="highlight-card">
          <strong>🏏 Max Runs:</strong> {allData.maxRuns.name} (
          {allData.maxRuns.runs})
        </div>
        <div className="highlight-card">
          <strong>🎯 Max Wickets:</strong> {allData.maxWickets.name} (
          {allData.maxWickets.wickets})
        </div>
        <div className="highlight-card">
          <strong>⚡ Super Striker:</strong> {allData.superStriker.name} (
          {allData.superStriker.sr} SR)
        </div>
        <div className="highlight-card">
          <strong>💥 Most Sixes:</strong> {allData.mostSixes.name} (
          {allData.mostSixes.sixes})
        </div>
      </div>

      <div className="players-cards">
        {filteredStats.map((player, index) => (
          <div className="player-card" key={index}>
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
                <span className="player-stat-label">Ducks</span>
                <span className="player-stat-value">{player.ducks}</span>
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
            </div>
            <div className="player-line"></div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlayerStats;
