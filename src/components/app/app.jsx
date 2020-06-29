import React from "react";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";

const App = (props) => {
  const {filmInfo, films} = props;

  const filmTitleHandleClick = () => {};

  return (
    <Main
      filmInfo={filmInfo}
      films={films}
      onFilmTitleClick={filmTitleHandleClick} />);
};

App.propTypes = {
  filmInfo: PropTypes.shape({
    name: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    date: PropTypes.number.isRequired,
  }).isRequired,
  films: PropTypes.arrayOf(
      PropTypes.shape(
          {poster: PropTypes.string.isRequired,
            title: PropTypes.string.isRequired})
  ).isRequired,
};

export default App;
