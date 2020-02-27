import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews';



const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here
export default class SearchableMovieReviewsContainer extends Component {
  constructor(){
    super();
    this.state = {
      reviews: [],
      searchTerm: ""
    }
  }

  // componentDidMount(){
  //   fetch(URL)
  //   .then(resp => resp.json())
  //   .then(reviews => {
  //     this.setState({
  //       reviews: reviews.results
  //     })
  //   })
  // }

  handleOnchange = (e) => {
    this.setState({
      searchTerm: e.target.value
    }, () => console.log (this.state.searchTerm))
    
  }

  handleOnClick = (e) => {
    e.preventDefault()
    fetch(URL+ '&query=' + this.state.searchTerm)
    .then( resp => resp.json())
    .then( search => {
      this.setState({
        reviews: search.results
      })
    })
  }
  render(){
    // const title = this.state.reviews.map( (review) => (
    //   // console.log(review.display_title),
    //   <li>{review.display_title}</li>
    // ))
    return(
      <div className="searchable-movie-reviews">
        <form onSubmit={this.handleOnClick}>
          <label htmlFor="search-input">Search Movie Reviews</label>
          <input type='text' onChange={this.handleOnchange}></input>
          <input type='submit'></input>
        </form>
        <MovieReviews reviews={this.state.reviews}/>
      </div>
    )
  }
}
