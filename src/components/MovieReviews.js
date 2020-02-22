import React from 'react';
import MovieReview from './MovieReview';

const MovieReviews = ({ reviews }) => {
  return (
    <div className="review-list">
        { reviews.map((movie) => <MovieReview title={movie.display_title} by={movie.byline}></MovieReview>) }
    </div>
  )
}

export default MovieReviews
