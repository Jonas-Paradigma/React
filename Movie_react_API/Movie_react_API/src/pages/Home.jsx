import React from "react";
import TopBar from "../components/TopBar";
import Filter from "../components/Filter"; // Überprüfe, ob dies korrekt ist
import BurgerMenu from "../components/BurgerMenu";
import MovieGallery from "../components/MovieGallery";
import Pagination from "../components/Pagination";
import "../index.css"; // CSS importieren

const Home = () => {
  return (
    <div>
      <TopBar />
      <BurgerMenu />
      <main>
        {/* Hier den Filter einfügen */}
        <div className="filter-container">
          <div className="filter">
            <span
              onClick={() => {
                /* Filter-Logik hier */
              }}
            >
              Filter: A-Z
            </span>
          </div>
        </div>
        <MovieGallery />
        <Pagination />
      </main>
    </div>
  );
};

export default Home;
