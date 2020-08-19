import React from "react";
import PropTypes from "prop-types";
import MovieCard from "../movie-card/movie-card.jsx";
import withHover from "../../hocs/with-hover/with-hover.js";

const MovieCardWrapped = withHover(MovieCard);
const MoviesList = (props) => {
  const {films} = props;

  return (

    <div className="catalog__movies-list">
      {films.map((film, i) => (
        <MovieCardWrapped
          key={film.title + i}
          film={film}
          // onFilmTitleClick={onFilmTitleClick}
          // onFilmCardClick={onFilmCardClick}
          // onCardHover={_handleMouseEnter}
          // onCardLeave={_handleMouseLeave}
        />
      ))}
    </div>
  );
};


MoviesList.propTypes = {
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
  onFilmCardClick: PropTypes.func.isRequired
};

export default MoviesList;
