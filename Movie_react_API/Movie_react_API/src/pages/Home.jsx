import React from "react";
import TopBar from "../components/TopBar";
import Filter from "../components/Filter";
import BurgerMenu from "../components/BurgerMenu";
import MovieGallery from "../components/MovieGallery";
import Pagination from "../components/Pagination";
import "../index.css"; // CSS import

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
