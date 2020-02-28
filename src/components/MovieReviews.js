import React from 'react';


const MovieReviews = ({ reviews }) => <div className="review-list">{reviews.map(review => {
  return (
    <div>
      <header>
        <a href={review.link.url}>{review.headline}- Review by: {review.byline}</a>
      </header>
        <p>{review.summary_short}</p>
        <br />
    </div>
  )
})}</div>;



export default MovieReviews;
