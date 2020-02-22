import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

class SearchableMovieReviewsContainer extends Component {
  state = {
    searchTerm: '',
    reviews: []
  }

  handleChange = (event) => {
    event.persist();
    this.setState({ searchTerm: event.target.value })
    console.log(this.state.searchTerm)
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.searchTerm)
    console.log(`${URL}&query=${this.state.searchTerm}`)
    fetch(`${URL}&query=${this.state.searchTerm}`)
    .then(response => response.json())
    .then(reviewsObj => this.setState({ reviews: reviewsObj.results }))
  }

  render() {
    return(
      <div className='searchable-movie-reviews'>
        <form onSubmit={(event) => this.handleSubmit(event) }>
          <input onChange={ this.handleChange }></input>
          <input type="submit"></input>
        </form>
        <MovieReviews reviews={ this.state.reviews }></MovieReviews> 
      </div>
    )
  }
}

export default SearchableMovieReviewsContainer
