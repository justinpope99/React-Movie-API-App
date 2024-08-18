import './App.css';
import api from './api/axiosConfig';
import { useState, useEffect } from 'react';
import Layout from './components/Layout';
import { Routes, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Header from './components/header/Header';
import Trailer from './components/trailer/Trailer';
import Reviews from './components/reviews/Reviews';
import NotFound from './components/notFound/NotFound';

function App() {

  // Let's return a destructured array from the useState hook
  // movies will store an array of movie data returned from the API
  // setMovies() will be used to change the state of the movies variable
  // The App component will be re-rendered when the state of the movies variable changes
  const [movies, setMovies] = useState();
  const [movie, setMovie] = useState();
  const [reviews, setReviews] = useState([]);

  // This function will handle a HTTP GET Request to an endpoint that returns an aray of movie data
  // async await can be effective in ensuring that the UI thread is not blocked when long running operations are processed, in order to make sure the UI screen will not freeze.
  const getMovies = async () => {
    try {
      const response = await api.get("/api/v1/movies");

      setMovies(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  // This method will use Axios to make a GET Request for data pertaining to a single movie
  const getMovieData = async (movieId) => {
    try {
        const response = await api.get(`/api/v1/movies/${movieId}`);

        const singleMovie = response.data;

        setMovie(singleMovie);

        setReviews(singleMovie.review);

    } catch (error) {
      console.log(error);
    }
  }

  // The useEffect hook will cause the getMovies() function to be executed when the app component first loads
  useEffect(() => {
    getMovies();
  })

  return (
    <div className="App">
      {/* This code will establish the root mappings */}
      <Header/>
      <Routes>
        <Route path='/' element={<Layout/>}>
          <Route path='/' element={<Home movies={movies}/>}></Route>
          <Route path='/Trailer/:ytTrailerId' element={<Trailer/>}></Route>
          <Route path='/Reviews/:movieId' element={<Reviews getMovieData={getMovieData} movie={movie} reviews = {reviews} setReviews = {setReviews} />}></Route>
          <Route path='*' element = {<NotFound/>}></Route>
        </Route>
      </Routes>

    </div>
  );
}

export default App;
