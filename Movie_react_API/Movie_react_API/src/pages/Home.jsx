// pages/Home.jsx

import React from "react";
import TopBar from "../components/TopBar";
import Filter from "../components/Filter";
import BurgerMenu from "../components/BurgerMenu";
import MovieGallery from "../components/MovieGallery";
import Pagination from "../components/Pagination";
import "../index.css"; // CSS importieren

const Home = () => {
  return (
    <div>
      <TopBar />
      <Filter />
      <BurgerMenu />
      <main>
        <MovieGallery />{" "}
        {/* Hier wird die MovieGallery angezeigt, die die API-Daten enthält */}
        <Pagination />
      </main>
    </div>
  );
};

export default Home;
