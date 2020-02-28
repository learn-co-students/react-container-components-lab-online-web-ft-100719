import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'TLsSD0wgmR73sHFpR0NVanFVwM0NB6QI';
const BASE_URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;


class SearchableMovieReviewsContainer extends Component {
  state = {
    searchBy: '',
    reviews: []
  };

  handleSearch = (event) =>
    this.setState({ searchBy: event.target.value });

  handleSubmit = (event) => {
    event.preventDefault();

    fetch(BASE_URL+`${this.state.searchTerm}`)
      .then(res => res.json())
      .then(res => {
        this.setState({ reviews: res.results })
      })
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleSubmit}>
          Search:
          <input type="text" onChange={this.handleSearch} />
          <input type="submit" value="submit" />
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    );
  }
}

export default SearchableMovieReviewsContainer;
