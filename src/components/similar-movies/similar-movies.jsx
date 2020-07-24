import React from "react";
import PropTypes from "prop-types";
import MoviesList from "../movies-list/movies-list.jsx";

const MAX_SIZE = 4;
const filteredList = (films, currentFilm) => {
  return films.filter((film) => {
    return film.genre === currentFilm.genre && film.title !== currentFilm.title;
  });
};

const SimilarMovies = (props) => {
  const {films, filmInfo, onFilmTitleClick, onFilmCardClick} = props;
  const finalList = filteredList(films, filmInfo).slice(0, MAX_SIZE);

  return (
    <div className="catalog__movies-list">
      <MoviesList
        films={finalList}
        onFilmTitleClick={onFilmTitleClick}
        onFilmCardClick={onFilmCardClick}
      />
    </div>
  );
};

SimilarMovies.propTypes = {
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
  onFilmTitleClick: PropTypes.func.isRequired,
  onFilmCardClick: PropTypes.func.isRequired
};

export default SimilarMovies;
