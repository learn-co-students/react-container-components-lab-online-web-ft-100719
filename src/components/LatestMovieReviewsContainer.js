import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'A6pCN4Av6zzjhd5uy0f8gwTvK9ovGHns';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

class LatestMovieReviewsContainer extends Component {
  constructor () {
    super()
    this.state = { 
      reviews: []
    }
  }

  componentDidMount() {
    fetch(URL)
    .then(response => response.json())
    .then(reviewData => {
      this.setState(
        { reviews: reviewData.results.map( review => (
        { title: review.display_title, url: review.link.url }) ) }
      )
    })
  }
  
  render() {
    return (
      <div className="latest-movie-reviews">
        <h1> Movie Reviews</h1>
         <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}

export default LatestMovieReviewsContainer

