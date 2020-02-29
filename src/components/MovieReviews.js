import React from 'react'
import MovieReview from './MovieReview'

const MovieReviews = ({reviews}) => {
  return (
    <div className="review-list">
      {reviews.map((review, i) => 
        <MovieReview 
          key={i}
          title={review.display_title} 
          summary={review.summary_short}
        /> 
    )}
    </div>
  )
}

MovieReviews.defaultProps = {
  reviews: []
}

export default MovieReviews