import React from "react";
import PropTypes from "prop-types";
import SmallMovieCard from "../small-movie-card/small-movie-card.jsx";
import withHover from "../../hocs/with-hover/with-hover.js";

const MovieCardWrapped = withHover(SmallMovieCard);

const MoviesList = ({films, render}) => {
  return (
    <React.Fragment>
      <div className="catalog__movies-list">
        {films.map((film, i) => (
          <MovieCardWrapped
            key={film.title + i}
            film={film}
          />
        ))}
      </div>
      {render()}
    </React.Fragment>
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
  render: PropTypes.func.isRequired,
};

export default MoviesList;
