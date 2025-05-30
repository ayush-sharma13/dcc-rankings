import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Banner from "./components/Banner";
import BannerTwo from "./components/Banner2";
import RankingSwitcher from "./components/RankingSwitch";
import Tournament from "./components/Tournament";
import TournamentDetails from "./components/TournamentDetails";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollTop";
import AllStats from "./components/AllStats";
import TestStats from "./components/TestStats";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Header />
      <Banner />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <BannerTwo />
              <RankingSwitcher />
              <div className="tournament-button-container">
                <Link to="/tournaments">
                  <button className="tournament-button">
                    DCC TOURNAMENTS & STATS
                  </button>
                </Link>
              </div>
            </>
          }
        />
        <Route path="/tournaments" element={<Tournament />} />
        <Route path="/tournaments/:id" element={<TournamentDetails />} />
        <Route path="/tournaments/2" element={<AllStats />} />
        <Route path="/tournaments/3" element={<TestStats />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
