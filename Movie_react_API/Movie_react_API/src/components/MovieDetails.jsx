import React from "react";

const MovieDetails = () => {
  return (
    <div className="Film">
      <div className="movie-details">
        <div className="movie-cover"></div>
        <div className="movie-description">
          <p>Beschreibung wird geladen...</p>
        </div>
      </div>
      <div className="movie-info">
        <p></p>
      </div>
      <div className="favorite-section">
        <button id="favorite-button">
          <i className="far fa-star"></i> Zu Favoriten hinzufügen
        </button>
      </div>
    </div>
  );
};

export default MovieDetails;
