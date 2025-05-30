import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Header from "./components/Header";
import Banner from "./components/Banner";
import BannerTwo from "./components/Banner2";
import RankingSwitcher from "./components/RankingSwitch";
import Tournament from "./components/Tournament";
import TournamentDetails from "./components/TournamentDetails";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollTop";

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
                  <button className="tournament-button">DCC TOURNAMENTS</button>
                </Link>
              </div>
            </>
          }
        />
        <Route path="/tournaments" element={<Tournament />} />
        <Route path="/tournaments/:id" element={<TournamentDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
