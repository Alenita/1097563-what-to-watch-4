import React from "react";
import PropTypes from "prop-types";
import MoviesList from "../movies-list/movies-list.jsx";
import GenresList from "../genres-list/genres-list.jsx";
import withActiveItem from "../../hocs/with-active-item/with-active-item.js";
import {getFilmsGenres} from "../../utils.js";
import {ActionCreator} from "../../reducer.js";
import {connect} from "react-redux";

const MoviesListWrapped = withActiveItem(MoviesList);

export const Main = (props) => {
  const {films, filmInfo, onFilmCardClick, currentGenre, filteredList, onGenreClick} = props;

  return (<React.Fragment>
    <section className="movie-card">
      <div className="movie-card__bg">
        <img src={filmInfo.backgroundPoster} alt={filmInfo.title} />
      </div>

      <h1 className="visually-hidden">WTW</h1>

      <header className="page-header movie-card__head">
        <div className="logo">
          <a className="logo__link">
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
        <div className="movie-card__info">
          <div className="movie-card__poster">
            <img src="img/the-grand-budapest-hotel-poster.jpg" alt="The Grand Budapest Hotel poster" width="218" height="327" />
          </div>

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
            </div>
          </div>
        </div>
      </div>
    </section>

    <div className="page-content">
      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Catalog</h2>
        <GenresList
          currentGenre={currentGenre}
          genres={getFilmsGenres(films)}
          onGenreClick={onGenreClick}
        />
        <MoviesListWrapped
          films={filteredList}
          onFilmCardClick={onFilmCardClick}
        />

        <div className="catalog__more">
          <button className="catalog__button" type="button">Show more</button>
        </div>
      </section>

      <footer className="page-footer">
        <div className="logo">
          <a className="logo__link logo__link--light">
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
  </React.Fragment>);
};

Main.propTypes = {
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
  films: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        genre: PropTypes.string.isRequired,
        year: PropTypes.number.isRequired,
        backgroundPoster: PropTypes.string.isRequired,
        poster: PropTypes.string.isRequired,
        rating: PropTypes.number.isRequired,
        ratingCount: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
        director: PropTypes.string.isRequired,
        starring: PropTypes.string.isRequired,
        src: PropTypes.string.isRequired
      }).isRequired
  ).isRequired,
  // onFilmTitleClick: PropTypes.func.isRequired,
  onFilmCardClick: PropTypes.func.isRequired,
  currentGenre: PropTypes.string.isRequired,
  onGenreClick: PropTypes.func.isRequired,
  filteredList: PropTypes.arrayOf(
      PropTypes.shape({
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
      }).isRequired
  ).isRequired,

};

const mapStateToProps = (state) => ({
  films: state.films,
  currentGenre: state.currentGenre,
  filteredList: state.filteredList
});

const mapDispatchToProps = (dispatch) => ({
  onGenreClick(genre) {
    dispatch(ActionCreator.filterFilms(genre));
    dispatch(ActionCreator.getCurrentGenre(genre));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);

