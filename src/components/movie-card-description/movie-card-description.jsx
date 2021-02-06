import React, {PureComponent} from "react";
import PropTypes from "prop-types";

import MovieNav from "../movie-nav/movie-nav.jsx";
import {tabsItems} from "../../helpers/constants.js";
import FilmOverview from "../film-overview/film-overview.jsx";
import FilmReviews from "../film-reviews/film-reviews.jsx";
import FilmDetails from "../film-details/film-details.jsx";

class MovieCardDescription extends PureComponent {
  _renderInfo() {
    const {filmInfo, activeItem} = this.props;

    switch (activeItem) {
      case tabsItems.OVERVIEW:
        return <FilmOverview
          film={filmInfo}
        />;

      case tabsItems.REVIEWS:
        return <FilmReviews
          reviews={filmInfo}
        />;

      case tabsItems.DETAILS:
        return <FilmDetails
          film={filmInfo}
        />;
      default:
        return <FilmOverview
          film={filmInfo}
        />;
    }
  }

  render() {
    const {filmInfo, onItemClick, activeItem} = this.props;
    return (
      <div className="movie-card__wrap movie-card__translate-top">
        <div className="movie-card__info">
          <div className="movie-card__poster movie-card__poster--big">
            <img src={filmInfo.poster} alt={filmInfo.title} width="218" height="327" />
          </div>

          <div className="movie-card__desc">
            <MovieNav
              tabsItems={tabsItems}
              onItemClick={onItemClick}
              activeItem={activeItem}
            />

            {this._renderInfo()}
          </div>
        </div>
      </div>
    );
  }
}

MovieCardDescription.propTypes = {
  filmInfo: PropTypes.shape({
    title: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    year: PropTypes.number.isRequired,
    backgroundPoster: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    ratingCount: PropTypes.number.isRequired,
    description: PropTypes.string.isRequired,
    director: PropTypes.string.isRequired,
    starring: PropTypes.string.isRequired
  }).isRequired,
  activeItem: PropTypes.string.isRequired,
  onItemClick: PropTypes.func.isRequired,
};

export default MovieCardDescription;
