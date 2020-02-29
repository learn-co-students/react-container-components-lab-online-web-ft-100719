import React, { Component } from 'react';
import SearchForm from './SearchForm'
import MovieReviews from './MovieReviews'
import 'isomorphic-fetch';

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

export default class SearchableMovieReviewsContainer extends Component {
  state = {
    reviews: [],
    searchTerm: ""
  }

  handleOnChange = (event) => {
    event.persist()
    this.setState({
      searchTerm: event.target.value
    })
  }

  handleOnSubmit = (event) => {
    event.preventDefault()
    fetch(URL + `&query=${ this.state.searchTerm}`)
    .then(response => response.json())
    .then(data => this.setState({reviews: data.results}))
  }

  render() {
    return (
      <div className="searchable-movie-reviews">
        <SearchForm 
          searchTerm={this.state.searchTerm} 
          handleChange={this.handleOnChange} 
          handleSubmit={this.handleOnSubmit}
        />
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}

