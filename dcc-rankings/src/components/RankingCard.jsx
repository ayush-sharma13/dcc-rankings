import React from "react";
import testBatting from "../data/testBatting.json";

const movementIcon = (movement) => {
  if (movement === "up") return <span className="text-green-500 text-sm">▲</span>;
  if (movement === "down") return <span className="text-red-500 text-sm">▼</span>;
  return <span className="text-gray-400 text-sm">•</span>;
};

export default function TestBattingRankingCard() {
  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-xl border border-gray-200 overflow-hidden">
      <div className="text-xl font-bold text-center py-4 border-b border-gray-200">
        MEN'S TEST BATTING RANKINGS
      </div>
      <ul>
        {testBatting.map((player) => (
          <li
            key={player.rank}
            className="flex items-center justify-between px-4 py-3 border-b border-gray-100"
          >
            <div className="flex items-center gap-3">
              <span className="text-lg font-bold w-6">{String(player.rank).padStart(2, "0")}</span>
              {movementIcon(player.movement)}
              <span className="text-2xl">{player.flag}</span>
              <div className="flex flex-col">
                <span className="font-semibold">{player.name}</span>
                <span className="text-sm text-gray-500">{player.team}</span>
              </div>
            </div>
            <span className="text-lg font-bold">{player.rating}</span>
          </li>
        ))}
      </ul>
      <div className="text-center text-blue-600 font-semibold py-3 hover:underline cursor-pointer">
        FULL RANKINGS &gt;
      </div>
    </div>
  );
}
