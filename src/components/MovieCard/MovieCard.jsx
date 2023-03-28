import React from 'react';
import ReactStars from "react-stars";
import "./MovieCard.css";
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const MovieCard = ({movie}) => {
  
  return (
    <div className="card-container">
      <h1> {movie.title} </h1>
      <img src={movie.poster} alt={movie.title} />
      <Link to={`/movie/${movie.id}`}>
        <Button variant="warning" style={{ marginLeft: "5%" }}>Détails </Button>
      </Link>

      <ReactStars
        count={5}
        edit={false}
        half={false}
        value={movie.raiting}
        size={24}
        color2={"#ffd700"}
      />
    </div>
  );
}

export default MovieCard