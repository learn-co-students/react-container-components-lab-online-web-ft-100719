import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'dGpQ5OmGP2SgfvZimlpCUoF4iOag9qzZ';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}`;

// Code SearchableMovieReviewsContainer Here

class SearchableMovieReviewsContainer extends Component {
    state = {
        searchTerm: '',
        reviews: []
    }
    handleChange = (e) => {
        this.setState({
            searchTerm: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        fetch(URL + `&query=${this.state.searchTerm}`)
            .then(resp => resp.json())
            .then(reviewsData => {
                const reviewObjects = reviewsData.results.slice(0,3)
                this.setState({
                    reviews: reviewObjects
                })
            })
            
    }
    render() {
        return(
            <div className="searchable-movie-reviews">
                <form onSubmit={this.handleSubmit} >
                    <label>Movie Review Search</label>
                    <input type="text" value={this.state.searchTerm} onChange={this.handleChange} />
                    <input type="submit" />
                </form>
                {this.state.reviews.length > 0 && <h2>Movie Review By Search:</h2>}
                <MovieReviews reviews={this.state.reviews}/>
            </div>
        )
    }
}

export default SearchableMovieReviewsContainer