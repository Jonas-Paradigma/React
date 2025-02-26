import React from "react";
import { Link } from "react-router-dom";
import "../index.css"; // CSS importieren

const TopBar = () => {
  return (
    <div className="top-bar">
      <Link to="/">
        <h1>pnagelFLIX</h1>
      </Link>
      <div className="search-bar">
        <input type="text" placeholder="Search..." />
        <button className="close-btn">✖</button>
      </div>
      <div className="menu-icons">
        <span className="menu-icon" id="burger-menu-icon">
          ☰
        </span>
        <span className="profile-icon">👤</span>
      </div>
    </div>
  );
};

export default TopBar;
