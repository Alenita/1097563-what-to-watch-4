import React from "react";
import PropTypes from "prop-types";

const GenresList = (props) => {
  const {genres, currentGenre, onGenreClick} = props;

  return (
    <ul className="catalog__genres-list">
      {genres.map((genre, i) => {
        return (
          <li key={genre + i}
            className={`catalog__genres-item ${genre === currentGenre ? `catalog__genres-item--active` : ``}`}
          >
            <a href="#" className="catalog__genres-link"
              onClick={((evt) => {
                evt.preventDefault();
                onGenreClick(genre);
              })}
            >{genre}</a>
          </li>);
      })}
    </ul>
  );
};

GenresList.propTypes = {
  genres: PropTypes.arrayOf(PropTypes.string.isRequired),
  currentGenre: PropTypes.string.isRequired,
  onGenreClick: PropTypes.func.isRequired,
};

export default GenresList;
