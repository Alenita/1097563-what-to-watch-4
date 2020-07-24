import React from "react";
import PropTypes from "prop-types";

const FilmReviews = (props) => {
  const {reviews} = props;
  const reviewsDivider = Math.ceil(reviews.length / 2);
  const firstCol = reviews.slice(0, reviewsDivider);
  const secondCol = reviews.slice(reviewsDivider);

  const getReviewsCol = (arr) => {
    return arr.map((review, i) => {
      return (
        <div
          className="review"
          key={review.id + i}>
          <blockquote className="review__quote">
            <p className="review__text">{review.comment}</p>
            <footer className="review__details">
              <cite className="review__author">{review.reviewer}</cite>
              <time className="review__date" dateTime="2016-12-24">{review.date}</time>
            </footer>
          </blockquote>
          <div className="review__rating">{review.rating}</div>
        </div>
      );
    });
  };

  return (
    <div className="movie-card__reviews movie-card__row">
      <div className="movie-card__reviews-col">{getReviewsCol(firstCol)}</div>
      <div className="movie-card__reviews-col">{getReviewsCol(secondCol)}</div>
    </div>
  );
};

FilmReviews.propTypes = {
  reviews: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        comment: PropTypes.string.isRequired,
        reviewer: PropTypes.string.isRequired,
        reviewDate: PropTypes.string.isRequired,
        rating: PropTypes.string.isRequired,
      }).isRequired
  ).isRequired
};

export default FilmReviews;
