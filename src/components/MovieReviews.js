// Code MovieReviews Here
import React from 'react'

const MovieReviews = props => {
  return(
  <ul className='review-list'>
    {props.reviews.map(review => {
      return <li className='review' key={review.display_title}><a href={review.link.url}>{review.headline}</a></li>
    })}
  </ul>
  )
}

export default MovieReviews