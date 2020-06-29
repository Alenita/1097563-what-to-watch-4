import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import MovieCard from "../movie-card/movie-card.jsx";

class MoviesList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      cardIsHovered: null,
    };
    this._handleMouseEnter = this._handleMouseEnter.bind(this);
    this._handleMouseLeave = this._handleMouseLeave.bind(this);
  }

  _handleMouseEnter(id) {
    this.setState({
      cardIsHovered: id
    });
  }

  _handleMouseLeave() {
    this.setState({
      cardIsHovered: null
    });
  }


  render() {
    const {films, onFilmTitleClick} = this.props;

    return (
      <div className="catalog__movies-list">
        {films.map((film, i) => (
          <MovieCard
            key={film.title + i}
            film={film}
            onFilmTitleClick={onFilmTitleClick}
            onCardHover={this._handleMouseEnter}
            onCardLeave={this._handleMouseLeave}
          />
        ))}
      </div>
    );
  }
}

MoviesList.propTypes = {
  films: PropTypes.arrayOf(
      PropTypes.shape(
          {
            id: PropTypes.number.isRequired,
            poster: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired,
            src: PropTypes.string.isRequired,
          }).isRequired
  ).isRequired,
  onFilmTitleClick: PropTypes.func.isRequired,
};

export default MoviesList;
