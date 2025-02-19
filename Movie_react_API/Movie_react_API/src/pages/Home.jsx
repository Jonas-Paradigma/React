import React from "react";
import TopBar from "../components/TopBar";
import Filter from "../components/Filter";
import BurgerMenu from "../components/BurgerMenu";
import MovieGallery from "../components/MovieGallery";
import Pagination from "../components/Pagination";

const Home = () => {
  return (
    <div>
      <TopBar />
      <Filter />
      <BurgerMenu />
      <main>
        <MovieGallery />
        <Pagination />
      </main>
    </div>
  );
};

export default Home;
