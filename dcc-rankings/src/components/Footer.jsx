import React from "react";
import "../index.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-columns">
          <div className="footer-column">
            <h4>Rankings</h4>
            <ul>
              <li>Test</li>
              <li>Limited Overs</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>About</h4>
            <ul>
              <li>About DCC</li>
              <li>Teams</li>
              <li>News</li>
              <li>Media</li>
            </ul>
          </div>
          <div className="footer-column">
            <h4>Contact</h4>
            <ul>
              <li>Email Us</li>
              <li>Privacy Policy</li>
              <li>Terms of Use</li>
            </ul>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} DCC – Domestic Cricket Council. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
