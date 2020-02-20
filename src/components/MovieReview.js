import React from "react";

const MovieReview = ({ title, by, summary }) => (
  <div className="review">
    <h1>{title}</h1>
    <h3>By {by}</h3>
    <p>{summary}</p>
  </div>
);

export default MovieReview;
