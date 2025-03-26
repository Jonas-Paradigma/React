import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";
import "./Gallery.css";

const apiKey = "59033ecf";
const baseURL = "https://www.omdbapi.com/";

const themes = [
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
const moviesPerPage = 30;

function App() {
  const [allMovies, setAllMovies] = useState([]);
  const [currentSortOrder, setCurrentSortOrder] = useState(
    localStorage.getItem("sortOrder") || "A-Z"
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [errorMessage, setErrorMessage] = useState(""); // Neue Fehler-Variable

  const navigate = useNavigate();

  useEffect(() => {
    fetchMovies();
  }, [currentPage, searchQuery]);

  const fetchMovies = async () => {
    if (!navigator.onLine) {
      setErrorMessage("⚠ Kein Internet. Bitte verbinden.");
      return;
    }

    setLoading(true);
    setErrorMessage(""); // Fehler zurücksetzen
    let allFetchedMovies = [];
    let totalMovies = 0;

    try {
      if (searchQuery) {
        const response = await fetch(
          `${baseURL}?s=${searchQuery}&page=${currentPage}&r=json&apikey=${apiKey}`
        );
        const data = await response.json();
        if (data.Response === "True") {
          allFetchedMovies = data.Search;
          totalMovies = Number(data.totalResults);
        } else {
          setErrorMessage("❌ Keine Filme gefunden.");
        }
      } else {
        for (let theme of themes) {
          const response = await fetch(
            `${baseURL}?s=${theme}&page=${currentPage}&r=json&apikey=${apiKey}`
          );
          const data = await response.json();
          if (data.Response === "True") {
            allFetchedMovies = [...allFetchedMovies, ...data.Search];
            totalMovies += Number(data.totalResults);
          }
        }
      }
      setAllMovies(allFetchedMovies);
      setTotalResults(totalMovies);
    } catch (error) {
      setErrorMessage("❌ Fehler beim Laden der Filme.");
    }

    setLoading(false);
  };

  const handleSort = () => {
    const newSortOrder = currentSortOrder === "A-Z" ? "Z-A" : "A-Z";
    setCurrentSortOrder(newSortOrder);
    localStorage.setItem("sortOrder", newSortOrder);
    const sortedMovies = [...allMovies].sort((a, b) =>
      newSortOrder === "A-Z"
        ? a.Title.localeCompare(b.Title)
        : b.Title.localeCompare(a.Title)
    );
    setAllMovies(sortedMovies);
  };

  return (
    <div className="App">
      <header className="top-bar">
        <h1 className="logo" onClick={fetchMovies}>
          pnagelFLIX
        </h1>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search movies..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button className="close-btn" onClick={() => setSearchQuery("")}>
            ✖
          </button>
        </div>
      </header>

      {/* Fehleranzeige */}
      {errorMessage && <p className="error-message">{errorMessage}</p>}

      {/* Filter unter der Suchleiste */}
      <div className="filter-container">
        <button id="filter-text" onClick={handleSort}>
          Filter: {currentSortOrder}
        </button>
      </div>

      {/* Ladeanzeige */}
      {loading ? (
        <div className="loading">Loading...</div>
      ) : (
        <div className="gallery-container">
          {allMovies.map((movie) => (
            <div key={movie.imdbID} className="movie-card">
              <img
                className="movie-image"
                src={movie.Poster !== "N/A" ? movie.Poster : "placeholder.jpg"}
                alt={movie.Title}
                onClick={() => navigate(`/movie/${movie.imdbID}`)}
              />
            </div>
          ))}
        </div>
      )}

      {/* Pagination */}
      <div className="pagination">
        <button
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>
        <span>
          Page {currentPage} of {Math.ceil(totalResults / moviesPerPage)}
        </span>
        <button
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage >= Math.ceil(totalResults / moviesPerPage)}
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
