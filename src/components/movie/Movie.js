import "./Movie.css";
import { Button } from "react-bootstrap";
import { useEffect } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { faCirclePlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

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
        <div className="movie-page-buttons-container">
          <Button variant="outline-info" onClick={() => reviews(movie?.imdbId)}>
            Go to Reviews
          </Button>
          <Link
            to={`/Trailer/${movie?.trailerLink.substring(
              movie.trailerLink.length - 11
            )}`}
          >
            <Button variant="outline-info">Go to Trailer</Button>
          </Link>
        </div>

        <h4>Overview</h4>
        <p>{movie?.overview}</p>
      </div>
    </div>
  );
};

export default Movie;
