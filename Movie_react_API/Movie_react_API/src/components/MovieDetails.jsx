import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import BackButton from "./BackButton";
import PlayButton from "./PlayButton";
import { FaStar } from "react-icons/fa"; // Stern-Icon von react-icons
import "./MovieDetails.css";

// API Key
const apiKey = "59033ecf";

const MovieDetails = () => {
  const { imdbID } = useParams();
  const [movie, setMovie] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false); // Zustand für "Favorit"

  useEffect(() => {
    document.body.style.overflow = "hidden"; // Verhindert das Scrollen auf der Seite

    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          `https://www.omdbapi.com/?i=${imdbID}&apikey=${apiKey}&plot=full`
        );
        const data = await response.json();

        if (data.Response === "True") {
          setMovie(data);
        }
      } catch (error) {
        console.error("Fehler beim Laden der Filmdaten:", error);
      }
    };

    fetchMovieDetails();

    return () => {
      document.body.style.overflow = "auto"; // Scrollen nach dem Verlassen der Seite wieder zulassen
    };
  }, [imdbID]);

  const handleFavoriteClick = () => {
    setIsFavorite(!isFavorite); 
    
  };

  if (!movie) {
    return <p>Lade Film-Details...</p>;
  }

  return (
    <div className="film-details">
      <BackButton />
      <h2>{movie.Title}</h2>
      <div className="details-container">
        <div className="movie-poster-container">
          <img className="movie-poster" src={movie.Poster} alt={movie.Title} />
          <p className="movie-meta">
            <strong className="highlight">Jahr:</strong> {movie.Year} |
            <strong className="highlight"> Genre:</strong> {movie.Genre}
          </p>
        </div>
        <div className="movie-info">
          <p>
            <strong>Handlung:</strong> {movie.Plot}
          </p>
          <p>
            <strong>🕒 Laufzeit:</strong> {movie.Runtime}
          </p>
          <p>
            <strong>⭐ IMDB Bewertung:</strong> {movie.imdbRating}
          </p>
          <PlayButton /> {/* Play-Button direkt unter der IMDB-Bewertung */}
        </div>
      </div>

      {/* Favoriten-Button */}
      <div className="favorite-container">
        <button className="favorite-button" onClick={handleFavoriteClick}>
          <FaStar
            className={`favorite-icon ${isFavorite ? "filled" : "empty"}`}
          />
          {isFavorite ? "Vom Favoriten entfernen" : "Als Favorit hinzufügen"}
        </button>
      </div>
    </div>
  );
};

export default MovieDetails;
