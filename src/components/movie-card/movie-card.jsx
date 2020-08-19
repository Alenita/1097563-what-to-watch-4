import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import VideoPlayer from "../video-player/video-player.jsx";
// import {PREVIEW_DELAY} from "../../constants.js";


class MovieCard extends PureComponent {
  constructor(props) {
    super(props);
    this._handleCardClick = this._handleCardClick.bind(this);
  }

  // _handleCardMouseEnter() {
  //   const {film, onCardHover} = this.props;
  //   const {id} = film;

  //   this.timer = setTimeout(() => {
  //     this.setState({
  //       isPlaying: true
  //     });
  //   }, PREVIEW_DELAY);

  //   onCardHover(id);
  // }

  // _handleCardMouseLeave() {
  //   const {onCardLeave} = this.props;
  //   if (this.timer) {
  //     clearTimeout(this.timer);
  //     this.setState({
  //       isPlaying: false
  //     });

  //     this.timer = null;
  //     onCardLeave();
  //   }
  // }

  _handleCardClick(evt) {
    const {film, onItemClick} = this.props;
    const {id} = film;

    evt.preventDefault();
    onItemClick(id);
  }

  render() {
    const {film, isPlaying, onCardMouseEnter, onCardMouseLeave} = this.props;
    const {
      src,
      poster,
      title
    } = film;
    // посмотреть, как добавить в виде пропсов из хока
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
            poster={poster}
            src={src}
            muted={true}
          />
          <img src={poster} alt={title} width="280" height="175"/>
        </div>
        <h3
          className="small-movie-card__title"
          onClick = {this._handleCardClick}
        >
          <a className="small-movie-card__link" href="movie-page.html">{title}</a>
        </h3>
      </article>
    );
  }
}

MovieCard.propTypes = {
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

export default MovieCard;

