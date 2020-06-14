import React from "react";
import Main from "../main/main.jsx";
import PropTypes from "prop-types";

const filmTitleButtonHandler = () => {};

const App = (props) => {
  const {name, genre, date, list} = props;

  return (<Main name={name} genre={genre} date={date} list={list}
    onFilmTitleButtonClick={filmTitleButtonHandler} />);
};

export default App;

App.propTypes = {
  name: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
  list: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired
};
