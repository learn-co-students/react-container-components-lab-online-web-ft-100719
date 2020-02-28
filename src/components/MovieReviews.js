import React from 'react'

const MovieReviews = (props) =>
  <div className="review-list">
    {props.reviews.map(movie => <div className='review' key={movie.headline}><h1>{movie.headline}</h1></div>)}
  </div>

export default MovieReviews