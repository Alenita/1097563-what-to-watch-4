import React from "react";
import PropTypes from "prop-types";

const MovieCard = (props) => {
  const {film, onHover, onCardClick} = props;

  return (
    <article className="small-movie-card catalog__movies-card"
      onMouseOver={onHover}>
      <div className="small-movie-card__image">
        <img src={film.poster} alt={film.title} width="280" height="175"/>
      </div>
      <h3
        className="small-movie-card__title"
        onClick = {onCardClick}
      >
        <a className="small-movie-card__link" href="movie-page.html">{film.title}</a>
      </h3>
    </article>
  );
};

MovieCard.propTypes = {
  onHover: PropTypes.func.isRequired,
  onCardClick: PropTypes.func.isRequired,
  film: PropTypes.shape({
    poster: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;
