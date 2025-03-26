import React from "react";
import "./Topbar.css"; // CSS Datei importieren

const Topbar = () => {
  return (
    <div className="top-bar">
      {/* Logo */}
      <div className="logo">Logo</div>

      {/* Filter-Button */}
      <div className="filter-button-container">
        <button className="filter-button">Filter</button>
      </div>
    </div>
  );
};

export default Topbar;
