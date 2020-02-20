import React, { Component } from "react";
import "isomorphic-fetch";
import MovieReviews from "./MovieReviews";
import SearchableForm from "./SearchableForm"

const NYT_API_KEY = "dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ";
const URL =
  "https://api.nytimes.com/svc/movies/v2/reviews/search.json?" +
  `api-key=${NYT_API_KEY}`;

export default class SearchableMovieReviewsContainer extends Component {
  constructor() {
    super();
    this.state = { reviews: [], searchTerm:" " };
  }

  handleSubmit = query => {
    fetch(`${URL}&query=${query}`)
      .then(resp => resp.json())
      .then(reviews => this.setState({ reviews: reviews.results }));
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <SearchableForm handleSubmit={this.handleSubmit}/>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}
