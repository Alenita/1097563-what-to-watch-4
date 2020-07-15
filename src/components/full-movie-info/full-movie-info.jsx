import React, {Fragment} from "react";
import MoviesList from "../movies-list/movies-list.jsx";
import PropTypes from "prop-types";
import {determineFilmRating} from "../../utils.js";

const FullMovieInfo = (props) => {
  const {filmInfo, films, onFilmCardClick, onFilmTitleClick} = props;
  const score = filmInfo.rating;

  return (<Fragment>
    <section className="movie-card movie-card--full">
      <div className="movie-card__hero">
        <div className="movie-card__bg">
          <img src={filmInfo.backgroundPoster} alt={filmInfo.title} />
        </div>

        <h1 className="visually-hidden">WTW</h1>

        <header className="page-header movie-card__head">
          <div className="logo">
            <a href="main.html" className="logo__link">
              <span className="logo__letter logo__letter--1">W</span>
              <span className="logo__letter logo__letter--2">T</span>
              <span className="logo__letter logo__letter--3">W</span>
            </a>
          </div>

          <div className="user-block">
            <div className="user-block__avatar">
              <img src="img/avatar.jpg" alt="User avatar" width="63" height="63" />
            </div>
          </div>
        </header>

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

      <div className="movie-card__wrap movie-card__translate-top">
        <div className="movie-card__info">
          <div className="movie-card__poster movie-card__poster--big">
            <img src={filmInfo.backgroundPoster} alt={filmInfo.title} width="218" height="327" />
          </div>

          <div className="movie-card__desc">
            <nav className="movie-nav movie-card__nav">
              <ul className="movie-nav__list">
                <li className="movie-nav__item movie-nav__item--active">
                  <a href="#" className="movie-nav__link">Overview</a>
                </li>
                <li className="movie-nav__item">
                  <a href="#" className="movie-nav__link">Details</a>
                </li>
                <li className="movie-nav__item">
                  <a href="#" className="movie-nav__link">Reviews</a>
                </li>
              </ul>
            </nav>

            <div className="movie-rating">
              <div className="movie-rating__score">{score}</div>
              <p className="movie-rating__meta">
                <span className="movie-rating__level">{determineFilmRating(score)}</span>
                <span className="movie-rating__count">{filmInfo.ratingCount} ratings</span>
              </p>
            </div>

            <div className="movie-card__text">{filmInfo.description}
              <p className="movie-card__director"><strong>Director: {filmInfo.director}</strong></p>
              <p className="movie-card__starring"><strong>Starring: {filmInfo.starring}</strong></p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div className="page-content">
      <section className="catalog catalog--like-this">
        <h2 className="catalog__title">More like this</h2>

        <MoviesList
          films={films}
          onFilmTitleClick={onFilmTitleClick}
          onFilmCardClick={onFilmCardClick}
        />
      </section>

      <footer className="page-footer">
        <div className="logo">
          <a href="main.html" className="logo__link logo__link--light">
            <span className="logo__letter logo__letter--1">W</span>
            <span className="logo__letter logo__letter--2">T</span>
            <span className="logo__letter logo__letter--3">W</span>
          </a>
        </div>

        <div className="copyright">
          <p>© 2019 What to watch Ltd.</p>
        </div>
      </footer>
    </div>
  </Fragment>);
};

FullMovieInfo.propTypes = {
  filmInfo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    backgroundPoster: PropTypes.string.isRequired,
    filmPoster: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    ratingCount: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    starring: PropTypes.string.isRequired
  }).isRequired,
  onFilmCardClick: PropTypes.func.isRequired,
  onFilmTitleClick: PropTypes.func.isRequired,
  films: PropTypes.arrayOf(
      PropTypes.shape(
          {
            id: PropTypes.number.isRequired,
            poster: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            src: PropTypes.string.isRequired
          }).isRequired
  ).isRequired,
};

export default FullMovieInfo;
