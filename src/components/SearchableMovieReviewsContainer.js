import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {
  state = {
    reviews: [],
    searchTerm: ''
  }

  handleSearchTermChange = e => this.setState({searchTerm: e.target.value})

  handleSearch = e => {
    e.preventDefault()
    fetch(URL + this.state.searchTerm)
    .then(resp => resp.json())
    .then(json => this.setState({reviews: json.results}))
  }

  render(){
    return(
      <div className='searchable-movie-reviews'>
        <form onSubmit={this.handleSearch}>
          <input type='text' value={this.state.searchTerm} onChange={this.handleSearchTermChange}/>
          <input type='submit' value='Search Reviews'/>
        </form>
        <h3>Search Results:</h3>
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}