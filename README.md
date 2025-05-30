# 🏏 DCC Cricket Stats Portal

Welcome to the **DCC Stats Portal**, a web application built to showcase player and team statistics from the **Domestic Cricket Council (DCC)** leagues and tournaments. This site provides a comprehensive look at batting and bowling performance across formats, including **Test matches** and **limited-overs tournaments** like the **DCC World Cup** and **DPL (Domestic Dhigawa Premier League)**.

## 🌐 Website Features

- 📊 **All-Time Player Stats** – Explore cumulative batting and bowling stats across multiple tournaments.
- 🧪 **DCC Test Stats** – View player performances in DCC test matches with key metrics like batting average, bowling average, and ducks.
- 🏆 **DCC World Cup Stats** – Tournament-based stats for the DCC World Cup including winner details and player highlights.
- 🔍 **Modern Search** – A centered, responsive search bar allows filtering players by name.
- 📱 **Responsive UI** – Optimized for both desktop and mobile screens.
- 📁 **Tournaments JSON** – All player and tournament stats are loaded from a central JSON file for easy updates.

## 🚀 Tech Stack

- **Frontend:** React.js
- **Styling:** CSS (with custom components and layout)
- **Data:** Local JSON (`tournaments.json`)

## 📂 Folder Structure

src/
│
├── components/
│ ├── AllStats.jsx # All-time stats view
│ ├── TestStats.jsx # Test stats view
│ └── TournamentStats.jsx # World Cup or DPL tournament stats
│
├── data/
│ └── tournaments.json # Core data for players & tournaments
│
├── App.jsx # Main router and layout
└── index.css # Custom styling

## 🧠 DCC Rating Formulas

### Batting Rating (Test):
Rating = min((Runs / 150) × 600, 600) + min((Average / 50) × 400, 400)


### Batting Rating (Limited-Overs):
Rating = (Runs × 0.4) + (Strike Rate × 2)


### Bowling Rating (Test):
Rating = (WPI / 2.83 × 1000 × 0.4) + (5.0 / Avg × 1000 × 0.3) + (2.13 / Econ × 1000 × 0.3)


### Bowling Rating (Limited-Overs):
Rating = (Wickets / 115 × 700) + ((10 - Econ) / 6 × 300)

👤 Author
Ayush Bhai
Instagram DCC: @_dccofficial
Instagram personal: @ayush__vashisth
Project managed and maintained by Ayush Sharma ❤️
