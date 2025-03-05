import React from "react";
import { Link } from "react-router-dom";
import "../index.css"; // CSS importieren

const TopBar = ({ reloadMovies }) => {
  return (
    <div className="top-bar">
      {/* Logo mit Film-Reload-Funktion */}
      <h1 onClick={reloadMovies} style={{ cursor: "pointer" }}>
        pnagelFLIX
      </h1>

      {/*Search Bar*/}
      <div className="search-container">
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <button className="close-btn">✖</button>
        </div>
      </div>

      {/* Menü Icons */}
      <div className="menu-icons">
        <span className="menu-icon">☰</span>
        <span className="profile-icon">👤</span>
      </div>
    </div>
  );
};

export default TopBar;
