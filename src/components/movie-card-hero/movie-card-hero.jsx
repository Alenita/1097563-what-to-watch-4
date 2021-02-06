import React from "react";
import PropTypes from "prop-types";

import PageHeader from "../pageheader/pageheader.jsx";

const MovieCardHero = ({filmInfo}) => {
  return (
    <div className="movie-card__hero">
      <div className="movie-card__bg">
        <img src={filmInfo.backgroundPoster} alt={filmInfo.title} />
      </div>
      <h1 className="visually-hidden">WTW</h1>

      <PageHeader />

      <div className="movie-card__wrap">
        <div className="movie-card__desc">
          <h2 className="movie-card__title">{filmInfo.title}</h2>
          <p className="movie-card__meta">
            <span className="movie-card__genre">{filmInfo.genre}</span>
            <span className="movie-card__year">{filmInfo.year}</span>
          </p>
          <div className="movie-card__buttons">
            <button className="btn btn--play movie-card__button" type="button">
              <svg viewBox="0 0 19 19" width="19" height="19">
                <use xlinkHref="#play-s"></use>
              </svg>
              <span>Play</span>
            </button>
            <button className="btn btn--list movie-card__button" type="button">
              <svg viewBox="0 0 19 20" width="19" height="20">
                <use xlinkHref="#add"></use>
              </svg>
              <span>My list</span>
            </button>
            <a href="add-review.html" className="btn movie-card__button">Add review</a>
          </div>
        </div>
      </div>
    </div>
  );
};

MovieCardHero.propTypes = {
  filmInfo: PropTypes.shape({
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

export default MovieCardHero;
