import { useState, useEffect, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import "./Search.css";

const Search = ({ movies }) => {
  const navigate = useNavigate();

  function reviews(movieId) {
    navigate(`/Reviews/${movieId}`);
  }

  function details(movieId) {
    navigate(`/Movie/${movieId}`);
  }

  const [query, setQuery] = useState("");

  // We are using useMemo so that this code only runs when certain parameters change.
  const filteredMovies = useMemo(() => {
    return movies?.filter((movie) => {
      return movie.title.toLowerCase().includes(query.toLowerCase());
    });
  }, [movies, query]);
  // const filteredMovies = movies?.filter((movie) => {
  //   return movie.title.toLowerCase().includes(query.toLowerCase());
  // });

  return (
    <div className="search-container">
      <div className="search-bar-container">
        <div>Search</div>
        <input
          className="search-bar"
          onChange={(e) => setQuery(e.target.value)}
          type="search"
          placeholder="Search by Movie Title"
          value={query}
        />
      </div>
      <div className="search-list">
        {filteredMovies?.map((movie) => (
          <div className="search-movie-card">
            <img
              key={movie.imdbId}
              src={movie.poster}
              alt={movie.title}
              width={100}
            />
            <div className="movie-details">
              <h4>{movie.title}</h4>
              <p>{`Released ${movie.releaseDate}`}</p>
              <p>{`Directed by ${movie.director}`}</p>
              <div className="search-movie-buttons">
                <button
                  className="search-movie-button"
                  onClick={() => details(movie.imdbId)}
                >
                  View Details
                </button>
                <button
                  className="search-movie-button"
                  onClick={() => reviews(movie.imdbId)}
                >
                  View Reviews
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Search;
