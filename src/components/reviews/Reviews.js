import { useEffect, useRef } from "react";
import api from '../../api/axiosConfig';
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import ReviewForm from "../reviewForm/ReviewForm";

import React from 'react'

const Reviews = ({getMovieData,movie,reviews,setReviews}) => {

    const revText = useRef();
    let params = useParams();
    // This is used to identify a specific movie
    const movieId = params.movieId;

    // When our component first loads, we want to call a method that is passed in as a prop to our component in order to retrieve the data for the movie the user wishes to review
    useEffect(() => {
        getMovieData(movieId);
    }, []);

    const addReview = async (e) => {
        e.preventDefault();

        const rev = revText.current;

        try {
            const response = await api.post("/api/v1/reviews",{reviewBody:rev.value,imdbId:movieId});

            // We are updating the array optimistically from the data entered on the client, not in the database
            const updatedReviews = [{body:rev.value}];

            // We want to clear the textarea control once the user has submitted a review successfully
            rev.value = "";

            // We are updating the state of the review array on the client with the setReviews() method that will be passed as a prop from the app component
            setReviews(updatedReviews);
        }
        catch (error) {
            console.log(error);   
        }

    }

  return (
    <Container>
      <Row>
        <Col><h3>Reviews</h3></Col>
      </Row>
      <Row className="mt-2">
        <Col>
            <img src={movie?.poster} alt="" />
        </Col>
        <Col>
            {
                <>
                <Row>
                    <Col>
                        <ReviewForm handleSubmit={addReview} revText={revText} labelText="Write a Review?"/>
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
                    return(
                        <>
                            <Row>
                                <Col>{sub.body}</Col>
                            </Row>
                            <Row>
                                <Col>
                                    <hr />
                                </Col>
                            </Row>
                        </>
                    )
                })
            }
            {
                // This map is used to list the reviews that the client has entered
                reviews?.map((r) => {
                    return(
                        <>
                            <Row>
                                <Col>{r.body}</Col>
                            </Row>
                            <Row>
                                <Col>
                                    <hr />
                                </Col>
                            </Row>
                        </>
                    )
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
  )
}

export default Reviews
