// Code MovieReviews Here
import React from 'react'

const MovieReviews = props => {
    return(
        <div className="review-list">
            {props.reviews.map(review => {
                return(
                    <div className="review">
                        <header>
                            <a href={review.link.url}>{review.headline}</a><br/>
                            By {review.byline} | Dated {review.publication_date}
                        </header>
                        <blockquote>
                            {review.summary_short}
                        </blockquote>
                    </div>
                )
            })}
        </div>
    )
}

export default MovieReviews