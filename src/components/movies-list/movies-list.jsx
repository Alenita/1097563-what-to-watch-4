import React, {PureComponent} from "react";
import PropTypes from "prop-types";
import MovieCard from "../movie-card/movie-card.jsx";

class MoviesList extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      cardIsHovered: null,
    };

  }

  handleHover(card) {
    this.setState({
      cardIsHovered: card
    });
  }

  render() {
    const {films, onFilmTitleButtonClick} = this.props;

    return (
      <div className="catalog__movies-list">
        {films.map((film, i) => (
          <MovieCard
            key={film + i}
            film={film}
            onCardClick={onFilmTitleButtonClick}
            onHover={this.handleHover.bind(this, i)}
          />
        ))}
      </div>
    );
  }
}

MoviesList.propTypes = {
  films: PropTypes.arrayOf(
      PropTypes.shape(
          {poster: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired})
  ).isRequired,
  onFilmTitleButtonClick: PropTypes.func.isRequired,
};

export default MoviesList;
