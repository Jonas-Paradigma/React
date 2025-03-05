import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./MovieDetails.css";

const apiKey = "59033ecf"; // Dein OMDb API-Schlüssel

const MovieDetails = () => {
  const { imdbID } = useParams();
  const [movie, setMovie] = useState(null);

  // Funktion, um den Text in kleinere Teile zu zerlegen (max. 500 Zeichen)
  const splitText = (text, maxLength = 500) => {
    const parts = [];
    for (let i = 0; i < text.length; i += maxLength) {
      parts.push(text.substring(i, i + maxLength));
    }
    return parts;
  };

  // Funktion zum Übersetzen des Textes mit MyMemory API
  const translateText = async (text) => {
    const textParts = splitText(text);
    const translatedParts = [];

    for (const part of textParts) {
      try {
        const response = await fetch(
          `https://api.mymemory.translated.net/get?q=${encodeURIComponent(
            part
          )}&langpair=en|de`
        );
        const data = await response.json();
        translatedParts.push(data.responseData.translatedText);
      } catch (error) {
        console.error("Fehler bei der Übersetzung:", error);
        translatedParts.push(part); // Falls ein Fehler auftritt, füge das Original hinzu
      }
    }

    return translatedParts.join(" "); // Setze die übersetzten Teile wieder zusammen
  };

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        const response = await fetch(
          `https://www.omdbapi.com/?i=${imdbID}&apikey=${apiKey}&plot=full`
        );
        const data = await response.json();

        if (data.Response === "True") {
          const translatedPlot = await translateText(data.Plot);

          setMovie({ ...data, Plot: translatedPlot });
        } else {
          console.error("Fehler: Film nicht gefunden");
        }
      } catch (error) {
        console.error("Fehler beim Laden der Filmdaten:", error);
      }
    };

    fetchMovieDetails();
  }, [imdbID]);

  if (!movie) {
    return <p>Lade Film-Details...</p>;
  }

return (
  <div className="film-details">
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
          <strong>IMDB Bewertung:</strong> {movie.imdbRating}
        </p>
      </div>
    </div>
  </div>
);


};

export default MovieDetails;
