import React, { useState } from "react";
import TestRankingCard from "./TestRankingCard";
import LORankingCard from "./LORankingCard";
import "../index.css";

export default function RankingSwitcher() {
  const [activeTab, setActiveTab] = useState("test");

  return (
    <div className="ranking-switcher">
      <div className="tab-buttons">
        <button
          className={activeTab === "test" ? "active" : ""}
          onClick={() => setActiveTab("test")}
        >
          Test Rankings
        </button>
        <button
          className={activeTab === "limited" ? "active" : ""}
          onClick={() => setActiveTab("limited")}
        >
          Limited-Overs Rankings
        </button>
      </div>

      <div className="ranking-display">
        {activeTab === "test" ? <TestRankingCard /> : <LORankingCard />}
      </div>
    </div>
  );
}
