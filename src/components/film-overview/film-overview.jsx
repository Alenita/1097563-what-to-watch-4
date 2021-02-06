import React, {Fragment} from "react";
import PropTypes from "prop-types";
import {determineFilmRating} from "../../helpers/utils.js";

const FilmOverview = (props) => {
  const {film} = props;
  const score = film.rating;

  return (
    <Fragment>
      <div className="movie-rating">
        <div className="movie-rating__score">{score}</div>
        <p className="movie-rating__meta">
          <span className="movie-rating__level">{determineFilmRating(score)}</span>
          <span className="movie-rating__count">{film.ratingCount}</span>
        </p>
      </div>

      <div className="movie-card__text">
        {film.description}
        <p className="movie-card__director"><strong>Director: {film.director} </strong></p>

        <p className="movie-card__starring"><strong>Starring: {film.starring}</strong></p>
      </div>
    </Fragment>
  );
};

FilmOverview.propTypes = {
  film: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    backgroundPoster: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    ratingCount: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    starring: PropTypes.string.isRequired
  }).isRequired,
};

export default FilmOverview;
