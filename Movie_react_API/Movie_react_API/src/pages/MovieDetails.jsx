import React from "react";
import BackButton from "../components/BackButton";
import MovieDetails from "../components/MovieDetails";
import PlayButton from "../components/PlayButton";

const MovieDetailsPage = () => {
  return (
    <div className="background">
      <BackButton />
      <h1>Loading...</h1>
      <MovieDetails />
      <PlayButton />
    </div>
  );
};

export default MovieDetailsPage;
