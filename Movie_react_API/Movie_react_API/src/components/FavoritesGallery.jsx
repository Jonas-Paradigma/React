import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const FavoritesGallery = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(storedFavorites);
  }, []);

  if (favorites.length === 0) {
    return <p>Keine Favoriten gefunden.</p>;
  }

  return (
    <div className="favorites-gallery">
      <h2>Ihre Favoriten</h2>
      <div className="gallery-container">
        {favorites.map((movie) => (
          <div key={movie.imdbID} className="movie-card">
            <Link to={`/movie/${movie.imdbID}`}>
              <img
                className="movie-image"
                src={movie.Poster !== "N/A" ? movie.Poster : "placeholder.jpg"}
                alt={movie.Title}
              />
            </Link>
            <p>{movie.Title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavoritesGallery;
