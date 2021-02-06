import React from "react";
// import PropTypes from "prop-types";
import GenresList from "../genres-list/genres-list.jsx";
import MoviesList from "../movies-list/movies-list.jsx";
// import withActiveItem from "../../hocs/with-active-item/with-active-item.js";
import withShowMore from "../../hocs/with-show-more/with-show-more.js";

const MoviesListWrapped = withShowMore(MoviesList);

const Catalog = () => {
  return (
    <section className="catalog">
      <h2 className="catalog__title visually-hidden">Catalog</h2>
      <GenresList/>
      <MoviesListWrapped/>
    </section>
  );
};

export default Catalog;
