import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import VideoPlayer from "../video-player/video-player.jsx";
import {ActionCreator} from "../../reducer/reducer.js";

class SmallMovieCard extends PureComponent {
  constructor(props) {
    super(props);
    this._handleCardClick = this._handleCardClick.bind(this);
  }

  _handleCardClick(evt) {
    const {film, onItemClick} = this.props;
    evt.preventDefault();
    onItemClick(film);
  }

  render() {
    const {film, isPlaying, onCardMouseEnter, onCardMouseLeave} = this.props;

    return (
      <article
        className="small-movie-card catalog__movies-card"
        onMouseEnter={() =>{
          onCardMouseEnter();
        }}
        onMouseLeave={() => {
          onCardMouseLeave();
        }}
      >
        <div className="small-movie-card__image"
          onClick={this._handleCardClick}>
          <VideoPlayer
            isPlaying={isPlaying}
            poster={film.poster}
            src={film.src}
            muted
          />
          <img src={film.poster} alt={film.title} width="280" height="175"/>
        </div>
        <h3
          className="small-movie-card__title"
          onClick = {this._handleCardClick}
        >
          <a className="small-movie-card__link" href="movie-page.html">{film.title}</a>
        </h3>
      </article>
    );
  }
}

SmallMovieCard.propTypes = {
  onItemClick: PropTypes.func.isRequired,
  film: PropTypes.shape({
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
  }).isRequired,
  isPlaying: PropTypes.bool.isRequired,
  onCardMouseLeave: PropTypes.func.isRequired,
  onCardMouseEnter: PropTypes.func.isRequired
};


const mapDispatchToProps = (dispatch) => ({
  onItemClick(film) {
    dispatch(ActionCreator.setCurrentGenre(film.genre));
    dispatch(ActionCreator.setFilmPage(film));
  }
});
export {SmallMovieCard};
export default connect(null, mapDispatchToProps)(SmallMovieCard);
