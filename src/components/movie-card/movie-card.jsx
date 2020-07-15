import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import VideoPlayer from "../video-player/video-player.jsx";
import {PREVIEW_DELAY} from "../../constants.js";


class MovieCard extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      isPlaying: false,

    };

    this.timer = null;

    this._handleCardMouseEnter = this._handleCardMouseEnter.bind(this);
    this._handleCardMouseLeave = this._handleCardMouseLeave.bind(this);
    this._handleCardTitleClick = this._handleCardTitleClick.bind(this);
    this._handleCardClick = this._handleCardClick.bind(this);
  }

  _handleCardMouseEnter() {
    const {film, onCardHover} = this.props;
    const {id} = film;

    this.timer = setTimeout(() => {
      this.setState({
        isPlaying: true
      });
    }, PREVIEW_DELAY);

    onCardHover(id);
  }

  _handleCardMouseLeave() {
    const {onCardLeave} = this.props;
    if (this.timer) {
      clearTimeout(this.timer);
      this.setState({
        isPlaying: false
      });

      this.timer = null;
      onCardLeave();
    }
  }

  _handleCardTitleClick(evt) {
    const {film, onFilmTitleClick} = this.props;
    const {id} = film;

    evt.preventDefault();
    onFilmTitleClick(id);
  }

  _handleCardClick() {
    const {film, onFilmCardClick} = this.props;
    const {id} = film;
    onFilmCardClick(id);
  }

  render() {
    const {film} = this.props;
    const {isPlaying} = this.state;
    const {
      src,
      poster,
      title
    } = film;

    return (
      <article
        className="small-movie-card catalog__movies-card"
        onClick={this._handleCardClick}
        onMouseEnter={this._handleCardMouseEnter}
        onMouseLeave={this._handleCardMouseLeave}
      >
        <div className="small-movie-card__image">
          <VideoPlayer
            isPlaying={isPlaying}
            poster={poster}
            src={src}
            muted={true}
          />
          <img src={poster} alt={title} width="280" height="175"/>
        </div>
        <h3
          className="small-movie-card__title"
          onClick = {this._handleCardTitleClick}
        >
          <a className="small-movie-card__link" href="movie-page.html">{title}</a>
        </h3>
      </article>
    );
  }
}

MovieCard.propTypes = {
  onCardHover: PropTypes.func.isRequired,
  onFilmTitleClick: PropTypes.func.isRequired,
  onFilmCardClick: PropTypes.func.isRequired,
  onCardLeave: PropTypes.func.isRequired,
  film: PropTypes.shape({
    id: PropTypes.number.isRequired,
    poster: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    src: PropTypes.string.isRequired,
  }).isRequired,
};

export default MovieCard;
