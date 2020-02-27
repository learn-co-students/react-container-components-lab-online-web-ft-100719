// Code MovieReviews Here
import React from 'react' 

const MovieReviews = ({reviews}) => {
    return(
        <div className="review-list">
            {reviews.map((review, i) => {
                return (
                    <div className='review' key={i}>
                        <h3>{review.headline}</h3>
                        <h4>Reviewed by {review.byline}</h4>
                        <h4>Published: {review.publication_date}</h4>
                        <p>{review.summary_short}</p>
                        <a href={review.link.url}>{review.display_title}</a>
                        <hr></hr>
                    </div>
                )
            })}
        </div>
    )
}

export default MovieReviews