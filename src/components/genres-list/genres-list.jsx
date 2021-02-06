import React from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";
import {ActionCreator} from "../../reducer/reducer.js";
import {getFilmsGenres} from "../../helpers/utils.js";
import {MAX_GENRES} from "../../helpers/constants.js";

const GenresList = ({genres, currentGenre, onGenreClick}) => {
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

const mapStateToProps = (state) => ({
  genres: getFilmsGenres(state.films).slice(0, MAX_GENRES),
  currentGenre: state.currentGenre,
});

const mapDispatchToProps = (dispatch) => ({
  onGenreClick(genre) {
    dispatch(ActionCreator.setCurrentGenre(genre));
  }
});


export default connect(mapStateToProps, mapDispatchToProps)(GenresList);
