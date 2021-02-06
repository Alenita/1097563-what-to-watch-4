import React, {Fragment} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import MovieCardHero from "../movie-card-hero/movie-card-hero.jsx";
import MovieCardDescription from "../movie-card-description/movie-card-description.jsx";
import withShowmore from "../../hocs/with-show-more/with-show-more.js";
import withActiveItem from "../../hocs/with-active-item/with-active-item.js";
import MoviesList from "../movies-list/movies-list.jsx";
import {tabsItems} from "../../helpers/constants.js";
import Footer from "../footer/footer.jsx";

const MoviesListWrapped = withShowmore(MoviesList);
const MovieDescriptionWrapped = withActiveItem(MovieCardDescription);

const FullMovieInfo = ({filmInfo}) => {
  return (
    <Fragment>
      <section className="movie-card movie-card--full">
        <MovieCardHero
          filmInfo={filmInfo}
        />
        <MovieDescriptionWrapped
          filmInfo={filmInfo}
          defaultActiveItem={tabsItems.OVERVIEW}
        />
      </section>

      <div className="page-content">
        <section className="catalog catalog--like-this">
          <h2 className="catalog__title">More like this</h2>
          <MoviesListWrapped />
        </section>
        <Footer />
      </div>
    </Fragment>
  );
};

FullMovieInfo.propTypes = {
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
};

const mapStateToProps = (state) => ({
  filmInfo: state.filmInfo,
});

export default connect(mapStateToProps)(FullMovieInfo);
