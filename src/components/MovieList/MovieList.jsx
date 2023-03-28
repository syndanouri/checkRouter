import React from 'react'
import MovieCard from "../MovieCard/MovieCard"
import "./MovieList.css"


const MovieList = ({movies}) => {
    console.log(movies)
    
  return (
    <div className="movie-card">
      <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard movie={movie} />
      ))}
    </div>
    </div>
  );
}

export default MovieList