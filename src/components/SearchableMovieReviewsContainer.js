import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

export default class SearchableMovieReviewsContainer extends Component {
  state = {
    reviews: [],
    searchTerm: ""
  }

  handleChange = searchTerm => {
    this.setState({searchTerm})
  }

  handleSubmit = e => {
    e.preventDefault()
    console.log(this.state.searchTerm)

    fetch(URL)
    .then(r=>r.json())
    .then(data=>
      this.setState({
        reviews: data.results
      })
    )
  }

  render() {
    return (
      <div>
        <form onSubmit={event => this.handleSubmit(event)} >
          <input type="text" onChange={event => this.handleChange(event.target.value)}/>
        </form>
        <MovieReviews reviews={this.state.reviews} />
      </div>
    )
  }

}