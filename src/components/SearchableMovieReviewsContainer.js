import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

export default class SearchableMovieReviewsContainer extends Component {
    state = {
        searchTerm: "",
        reviews: []
    }

    onChange = (e) => {
        this.setState({
            searchTerm: e.target.value
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        fetch(URL + `&query=${this.state.searchTerm}`)
        .then(resp => resp.json())
        .then(reviewData => {
            let allReviews = reviewData.results
            this.setState({
                reviews: allReviews
            })
        })
    }

    render() {
        return(
            <div className="searchable-movie-reviews">
                <form onSubmit={this.onSubmit} >
                    <label>Search Movie Reviews</label>
                    <input type="text" value={this.state.searchTerm} onChange={this.onChange} />
                    <input type="submit" />
                </form>
                {this.state.reviews.length > 0 && <h2>Movie Review By Search:</h2>}
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}