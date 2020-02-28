import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
  + `api-key=${NYT_API_KEY}&query=`;

class SearchableMovieReviewsContainer extends Component {
  state = {
    reviews: [],
    searchTerm: ''
  }

  handleSubmit = event => {
    event.preventDefault()
    fetch(`${URL}${this.state.searchTerm}`)
      .then(res => res.json())
      .then(({ results }) => this.setState({
        reviews: results
      }))
  }

  handleChange = event => {
    this.setState({
      searchTerm: event.target.value
    })
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <MovieReviews reviews={this.state.reviews} />
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} value={this.state.searchTerm} />
          <input type='submit' />
        </form>
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer