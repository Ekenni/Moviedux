import React, { useState, useEffect } from "react";
import "../styles.css";

export default function MovieCard({ movie, isWatchlisted, toggleWatchlist }) {
  const handleError = (e) => {
    e.target.src = "images/default.jpg";
  };

  const getRatingClass = (rating) => {
    if (rating >= 8) {
      return "rating-good";
    } else if (rating < 8 && rating >= 5) {
      return "rating-ok";
    } else {
      return "rating-bad";
    }
  };

  return (
    <div key={movie.id} className="movie-card">
      <div className="movie-card-info">
        <h3 className="movie-card-title">{movie.title}</h3>
        <div>
          <span className="movie-card-genre">{movie.genre}</span>
          <span className={`movie-card-rating ${getRatingClass(movie.rating)}`}>
            {movie.rating}
          </span>
        </div>
      </div>
    </div>
  );
}
