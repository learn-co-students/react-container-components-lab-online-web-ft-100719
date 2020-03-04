// Code MovieReviews Here
import React from 'react';

const MovieReviews = (props) => {
  return(
    <div className="review-list">
      {props.reviews.map( review => {
        return(
          <div className="review">
            <a href={review.link.url}><h1>{review.display_title}</h1></a>
            <p>{review.headline}</p>
          </div>
        )
      })}
    </div>
  )
}

export default MovieReviews
