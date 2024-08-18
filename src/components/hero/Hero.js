import './Hero.css';
import Carousel from 'react-material-ui-carousel';
import { Paper } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCirclePlay } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

// We only need an array containing movies, so we are destructuring the props passed into this component
const Hero = ({movies}) => {

    const navigate = useNavigate();

    function reviews(movieId) {
        navigate(`/Reviews/${movieId}`);
    }

  return (
    <div className='movie-carousel-container'>
    {/* In this element, we will map each item in the movie array to an item displayed in the Carousel */}
      <Carousel>
        {
            movies?.map((movie) => {
                return(
                    // The Paper element encapsulates each movie item
                    // Whenever we implement a list of uniquely identifiable items in our JSX code, we should include the key property for each list item
                    <Paper key={movie.imdbId}>
                        <div className='movie-card-container'>
                            <div className='movie-card' style={{"--img": `url(${movie.backdrops[0]})`}}>
                                <div className='movie-detail'>
                                    <div className='movie-poster'>
                                        <img src={movie.poster} alt='' />
                                    </div>
                                    <div className='movie-title'>
                                        <h4>{movie.title}</h4>
                                    </div>
                                    <div className='movie-buttons-container'>
                                        {/* We need to create the link, so when the play button icon is clicked, the trailer component is invoked, and the appropiate parameters are passed through to the Trailer Component */}
                                        <Link to={`/Trailer/${movie.trailerLink.substring(movie.trailerLink.length - 11)}`}>
                                        <div className="play-button-icon-container">
                                            <FontAwesomeIcon className='play-button-icon'
                                                icon = {faCirclePlay}
                                            />
                                        </div>
                                        </Link>

                                        <div className="movie-review-button-container">
                                            <Button variant ="info" onClick={() => reviews(movie.imdbId)}>Reviews</Button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Paper>
                )
            })
        }
      </Carousel>
    </div>
  )
}

export default Hero
