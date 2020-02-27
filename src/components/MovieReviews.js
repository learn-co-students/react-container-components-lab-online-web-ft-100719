// Code MovieReviews Here
import React from 'react';

 
const MovieReviews = ({ reviews }) => (

  <div className="review-list">
    <ul>
      {reviews.map((review) => {
      return <li><a className="review" href={review.url}> {review.title} </a> </li> }
        ) 
      }
    </ul>  
  </div>
)
export default MovieReviews;