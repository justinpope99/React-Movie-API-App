import "./Movie.css";
import { Button } from "react-bootstrap";
import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

const Movie = ({ movie, getMovieData }) => {
  const navigate = useNavigate();

  function reviews(movieId) {
    navigate(`/Reviews/${movieId}`);
  }
  let params = useParams();
  const movieId = params.movieId;

  useEffect(() => {
    getMovieData(movieId);
  }, []);

  return (
    <div className="movie-page">
      <div className="movie-page-container">
        <h3>{movie?.title}</h3>
        <h4>{`Directed by ${movie?.director}`}</h4>
        <h4>{`Released ${movie?.releaseDate}`}</h4>
        <img src={movie?.poster} alt={`Poster of ${movie?.title}`} />
        <Button variant="outline-info" onClick={() => reviews(movie?.imdbId)}>
          Go to Reviews
        </Button>
        <h4>Overview</h4>
        <p>{movie?.overview}</p>
      </div>
    </div>
  );
};

export default Movie;
