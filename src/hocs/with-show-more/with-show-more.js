import React, {PureComponent} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";
import {MOVIES_PORTION, Pages, MOVIES_LIKE_THIS_PORTION} from "../../helpers/constants.js";
import {filterFilmsByGenre} from "../../helpers/utils.js";
import ShowMoreButton from "../../components/show-more-button/show-more-button.jsx";

const withShowMore = (Component) => {
  class WithShowMore extends PureComponent {
    constructor(props) {
      super(props);
      this.state = {
        shownMovies: props.films.slice(0, MOVIES_PORTION),
      };
      this._handleShowMoreButtonClick = this._handleShowMoreButtonClick.bind(this);
      this._renderButtonShowMore = this._renderButtonShowMore.bind(this);
    }

    componentDidUpdate(prevProps) {
      if (prevProps !== this.props) {
        this.setState({
          shownMovies: this.props.films.slice(0, MOVIES_PORTION),
        });
      }
    }

    _handleShowMoreButtonClick() {
      this.setState((prevState) => ({
        shownMovies: [
          ...prevState.shownMovies,
          ...this.props.films.slice(
              prevState.shownMovies.length,
              prevState.shownMovies.length + MOVIES_PORTION
          )
        ]
      }));
    }

    _renderButtonShowMore() {
      return (
        this.props.films.length > this.state.shownMovies.length && <ShowMoreButton onShowMoreButtonClick={this._handleShowMoreButtonClick}/>
      );
    }

    render() {
      return (
        <Component
          {...this.props}
          films={this.state.shownMovies}
          render={this._renderButtonShowMore}
        />
      );
    }
  }

  WithShowMore.propTypes = {
    films: PropTypes.arrayOf(
        PropTypes.shape({
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
  };

  const mapStateToProps = (state) => {
    if (state.currentPage !== Pages.MAIN) {
      return {
        films: filterFilmsByGenre(state.films, state.currentGenre)
                .filter((film) => film.title !== state.currentFilm.title)
                .slice(0, MOVIES_LIKE_THIS_PORTION),
        currentGenre: state.currentGenre,
      };
    }

    return {
      films: filterFilmsByGenre(state.films, state.currentGenre),
      currentGenre: state.currentGenre,
    };
  };

  return connect(mapStateToProps)(WithShowMore);
};

export default withShowMore;
