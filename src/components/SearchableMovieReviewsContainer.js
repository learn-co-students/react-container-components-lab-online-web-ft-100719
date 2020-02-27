import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'A6pCN4Av6zzjhd5uy0f8gwTvK9ovGHns';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

// Code SearchableMovieReviewsContainer Here

class SearchableMovieReviewsContainer extends Component {
  constructor () {
    super()
    this.state = { 
      reviews: [],
      searchTerm: ""
    }
  }

  handleChange = (e) => {
    e.preventDefault()
    
    this.setState({
      searchTerm: e.target.value
    })
  }

  handleSubmit = (e) => {
      e.preventDefault()
      const searchURL = URL + `${this.state.searchTerm}`
      fetch(searchURL)
      .then(response => response.json())
      .then(reviewData => {
        this.setState(
          { reviews: reviewData.results.map( review => (
          { title: review.display_title, url: review.link.url }) ) }
        )
      })
      this.setState({
        searchTerm: ""
      })
  }

  render() {
      return (
        <div className="searchable-movie-reviews">
          <form onSubmit={this.handleSubmit} >
              <label>Search string</label>
              <input type="text" name="searchstring" value={this.state.searchTerm} onChange={this.handleChange} /><br></br>

              <input type="submit"/>
          </form>
          
        <h1> Movie Reviews that match your search</h1>
          <MovieReviews reviews={this.state.reviews}/>
        </div>
          
      )
  }

}

export default SearchableMovieReviewsContainer

