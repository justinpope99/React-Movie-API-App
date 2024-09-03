import "./Reviews.css";
import { useEffect, useRef } from "react";
import api from "../../api/axiosConfig";
import { useParams, useNavigate } from "react-router-dom";
import { Container, Row, Col, Button } from "react-bootstrap";
import ReviewForm from "../reviewForm/ReviewForm";

import React from "react";
import { Avatar } from "@mui/material";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Reviews = ({ getMovieData, movie, reviews, setReviews }) => {
  const navigate = useNavigate();

  function details(movieId) {
    navigate(`/Movie/${movieId}`);
  }

  const revText = useRef();
  let params = useParams();
  // This is used to identify a specific movie
  const movieId = params.movieId;

  // When our component first loads, we want to call a method that is passed in as a prop to our component in order to retrieve the data for the movie the user wishes to review
  useEffect(() => {
    getMovieData(movieId);
  }, []);

  let reviewCount = movie?.reviewIds.length;

  const addReview = async (e) => {
    e.preventDefault();

    // Review Text
    const rev = revText.current;

    try {
      const response = await api.post("/api/v1/reviews", {
        reviewBody: rev.value,
        imdbId: movieId,
      });

      // We are updating the array optimistically from the data entered on the client, not in the database
      const updatedReviews = [{ body: rev.value }];

      // We want to clear the textarea control once the user has submitted a review successfully
      rev.value = "";

      // We are updating the state of the review array on the client with the setReviews() method that will be passed as a prop from the app component
      setReviews(updatedReviews);
      getMovieData(movieId);
      reviewCount += 1;
      toast.success("You've successfully posted your review!", {
        theme: "colored",
      });
    } catch (error) {
      console.log(error.stack);
      toast.error("Your review failed to post. Please try again later.", {
        theme: "colored",
      });
    }
  };

  return (
    <>
      <div className="review-main">
        <Container className="review-container">
          <Row>
            <Col className="movie-review-header">
              <h3>Reviews for {movie?.title}</h3>
            </Col>
          </Row>
          <Row>
            <Col className="movie-poster-container">
              <img src={movie?.poster} alt="" className="movie-poster-review" />
            </Col>
          </Row>
          <Row>
            <Col className="movie-details-button">
              <Button
                variant="outline-info"
                onClick={() => details(movie.imdbId)}
              >
                Go to Movie Page
              </Button>
            </Col>
          </Row>
          <Row>
            <Col>{`${reviewCount} User Reviews for ${movie?.title}`}</Col>
          </Row>
          <Row className="reviews-container">
            <Col>
              {
                <>
                  <Row>
                    <Col className="reviews-form">
                      <ReviewForm
                        handleSubmit={addReview}
                        revText={revText}
                        labelText="Write a Review?"
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <hr />
                    </Col>
                  </Row>
                </>
              }
              {
                // This map is used to bring up the historical reviews from the database
                movie?.reviewIds.map((sub) => {
                  const date = new Date(sub.id.date);
                  return (
                    <>
                      <Row>
                        <Row>
                          <div className="reviews-content-name">
                            <Avatar sx={{ width: 32, height: 32 }}>G</Avatar>
                            <h4>Guest</h4>
                          </div>
                        </Row>
                        <Row>
                          <Col className="reviews-content-body">{sub.body}</Col>
                        </Row>
                        <Row>
                          <Col className="reviews-content-date">{`Posted on ${date.toLocaleString(
                            "en-US",
                            {
                              timeZoneName: "short",
                            }
                          )}`}</Col>
                        </Row>
                      </Row>
                      <Row>
                        <Col>
                          <hr />
                        </Col>
                      </Row>
                    </>
                  );
                })
              }
            </Col>
          </Row>
          <Row>
            <Col>
              <hr />
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default Reviews;
