import "../index.css";

const TournamentDetails = ({ data }) => {
  const tournament = data[0];

  return (
    <div className="tournament-wrapper">
      <h1 className="tournament-title">🏆 {tournament.name}</h1>

      <div className="summary-section">
        <div className="summary-card">
          <h3>Winner</h3>
          <p>{tournament.winner}</p>
        </div>
        <div className="summary-card">
          <h3>Runner-Up</h3>
          <p>{tournament.runnerUp}</p>
        </div>
        <div className="summary-card">
          <h3>Player of the Tournament</h3>
          <p>{tournament.pott}</p>
        </div>
      </div>

      <div className="highlight-section">
        <h2>Top Performers</h2>
        <ul>
          <li>🏏 Most Runs: {tournament.maxRuns.name} ({tournament.maxRuns.runs})</li>
          <li>🎯 Most Wickets: {tournament.maxWickets.name} ({tournament.maxWickets.wickets})</li>
          <li>💥 Super Striker: {tournament.superStriker.name} (SR: {tournament.superStriker.sr})</li>
          <li>☄️ Most Sixes: {tournament.mostSixes.name} ({tournament.mostSixes.sixes})</li>
        </ul>
      </div>

      <div className="stats-table">
        <h2>Player Stats</h2>
        <table>
          <thead>
            <tr>
              <th>Player</th>
              <th>Innings</th>
              <th>Runs</th>
              <th>Fours</th>
              <th>Sixes</th>
              <th>Strike Rate</th>
              <th>Wickets</th>
              <th>Best Batting</th>
              <th>Best Bowling</th>
            </tr>
          </thead>
          <tbody>
            {tournament.playersStats.map((player, i) => (
              <tr key={i}>
                <td>{player.name}</td>
                <td>{player.innings}</td>
                <td>{player.runs}</td>
                <td>{player.fours}</td>
                <td>{player.sixes}</td>
                <td>{player.sr}</td>
                <td>{player.wickets}</td>
                <td>{player.bestBatting}</td>
                <td>{player.bestBowling}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TournamentDetails;
