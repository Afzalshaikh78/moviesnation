import "../css/Favorites.css";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";
import { useState } from "react";

function Favorites() {
  const { favorites } = useMovieContext();

  return (
    <div className="favorites">

      {favorites.length === 0 ? (
        <p className="no-favorites-msg">No favorites yet. Start adding some!</p>
      ) : (
        <h2>Your Favorites</h2>
      )}

      <div className="movies-grid">
        {favorites.map((movie, index) => (
          <MovieCard movie={movie} key={index} />
        ))}
      </div>
    </div>
  );
}

export default Favorites;
