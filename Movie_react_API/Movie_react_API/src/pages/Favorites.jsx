import React from "react";
import TopBar from "../components/TopBar";
import FavoritesGallery from "../components/FavoritesGallery";

const Favorites = () => {
  return (
    <div>
      <TopBar />
      <h1>Favoriten</h1>
      <FavoritesGallery />
    </div>
  );
};

export default Favorites;
