import React from 'react';

const MovieReview = ({ title, by }) => {
  return (
    <div className="review">
        <p>Title: { title }</p>
        <p>By: { by }</p>
      <hr></hr>
    </div>
  )
}

export default MovieReview