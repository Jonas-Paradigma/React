import React from "react";
import { useNavigate } from "react-router-dom";

const MovieGallery = ({ movies }) => {
  const navigate = useNavigate();

  const handleMovieClick = (movie) => {
    navigate(`/movie/${movie.imdbID}`, { state: { movie } });
  };

  return (
    <div className="gallery-container">
      {movies.map((movie) => (
        <div
          key={movie.imdbID}
          className="movie-item"
          onClick={() => handleMovieClick(movie)}
        >
          <img src={movie.Poster} alt={movie.Title} />
          <p>{movie.Title}</p>
        </div>
      ))}
    </div>
  );
};

export default MovieGallery;
