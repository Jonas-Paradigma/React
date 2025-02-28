import React, { useState, useEffect } from "react";
import "./App.css"; // Allgemeine Stile für die App
import "./Gallery.css"; // Stile für die Galerie

const apiKey = "59033ecf"; // Dein OMDB API-Schlüssel
const baseURL = "https://www.omdbapi.com/";

const randomSearchTerms = [
  "day",
  "love",
  "sky",
  "star",
  "moon",
  "home",
  "night",
  "sea",
  "fire",
  "city",
];

function App() {
  const [allMovies, setAllMovies] = useState([]);
  const [currentSortOrder, setCurrentSortOrder] = useState(
    localStorage.getItem("sortOrder") || "A-Z"
  );
  const [searchQuery, setSearchQuery] = useState("");

  useEffect(() => {
    loadMoviesFromSession();
    fetchRandomMovies();
  }, []);

  useEffect(() => {
    if (searchQuery.length > 2) {
      searchMovies(searchQuery);
    } else {
      loadMoviesFromSession();
    }
  }, [searchQuery]);

  const fetchRandomMovies = async () => {
    const randomTerm =
      randomSearchTerms[Math.floor(Math.random() * randomSearchTerms.length)];
    try {
      const response = await fetch(
        `${baseURL}?s=${randomTerm}&r=json&apikey=${apiKey}`
      );
      const data = await response.json();
      if (data.Response === "True" && data.Search) {
        setAllMovies(data.Search); // 🔥 Ersetzt jetzt die aktuellen Filme komplett!
        saveMoviesToSession(data.Search);
      } else {
        console.error("No movies found.");
      }
    } catch (error) {
      console.error("Error fetching movies:", error);
    }
  };

  const searchMovies = async (query) => {
    try {
      const response = await fetch(
        `${baseURL}?s=${query}&r=json&apikey=${apiKey}`
      );
      const data = await response.json();
      if (data.Response === "True") {
        setAllMovies(data.Search);
        setCookie("lastSearch", query, 7);
        saveMoviesToSession(data.Search);
      } else {
        setAllMovies([]);
      }
    } catch (error) {
      console.error("Error searching movies:", error);
    }
  };

  const saveMoviesToSession = (movies) => {
    sessionStorage.setItem("allMovies", JSON.stringify(movies));
  };

  const loadMoviesFromSession = () => {
    const movies = sessionStorage.getItem("allMovies");
    setAllMovies(movies ? JSON.parse(movies) : []);
  };

  const setCookie = (name, value, days) => {
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    document.cookie = `${name}=${value};expires=${date.toUTCString()};path=/`;
  };

  const handleSort = () => {
    const newSortOrder = currentSortOrder === "A-Z" ? "Z-A" : "A-Z";
    setCurrentSortOrder(newSortOrder);
    localStorage.setItem("sortOrder", newSortOrder);
    const sortedMovies = [...allMovies].sort((a, b) => {
      return newSortOrder === "A-Z"
        ? a.Title.localeCompare(b.Title)
        : b.Title.localeCompare(a.Title);
    });
    setAllMovies(sortedMovies);
  };

  return (
    <div className="App">
      <header className="top-bar">
        {/* 🔥 Logo, das neue Filme lädt */}
        <h1 className="logo" onClick={fetchRandomMovies}>
          pnagelFLIX
        </h1>

        {/* 🔍 Zentrierte Suchleiste */}
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search movies..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="close-btn" onClick={() => setSearchQuery("")}>
            Clear
          </button>
        </div>
      </header>

      {/* Sortierung unter dem Header */}
      <div className="filter-container">
        <button id="filter-text" onClick={handleSort}>
          Filter: {currentSortOrder}
        </button>
      </div>

      {/* Film-Galerie */}
      <div className="gallery-container">
        {allMovies.map((movie) => (
          <div key={movie.imdbID} className="movie-card">
            <img
              className="movie-image"
              src={movie.Poster !== "N/A" ? movie.Poster : "placeholder.jpg"}
              alt={movie.Title}
              onClick={() =>
                (window.location.href = `moviename.html?imdbID=${movie.imdbID}`)
              }
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
